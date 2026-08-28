#!/usr/bin/env python3
"""Builds data/pos-data.js: a word -> part-of-speech-tags map for the
English built-in word list (data/words-data.js), sourced from Datamuse's
md=p metadata flag (which in turn comes from WordNet).

English only: Datamuse's word-finding index and POS metadata are
English-specific, so this doesn't extend to the other built-in languages
(data/words-data-*.js) -- that would need a different, per-language source.

Datamuse commonly returns several POS tags per word (e.g. "run" -> verb,
noun) since most words have more than one WordNet sense. All returned tags
are kept, in the order Datamuse gives them (empirically the most common
sense first), rather than collapsing to a single "primary" type -- how to
use multiple tags (match-any vs. primary-only) is a filtering-UI decision,
not a data-sourcing one.

Results are cached to disk as they arrive so an interrupted run can resume
without re-fetching words already looked up. A word that fails every retry
(e.g. a 403 from getting rate-limited) is cached as null, NOT as an empty
list -- null means "unresolved, try again next run", [] means "queried
successfully, Datamuse genuinely has no POS tag for this". Conflating the
two on an early run meant a rate-limit burst got permanently recorded as
~1000 words having no part of speech, instead of being retried.
"""
import argparse
import json
import re
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import requests

REPO_ROOT = Path(__file__).resolve().parent.parent
WORDS_FILE = REPO_ROOT / "data" / "words-data.js"
OUT_FILE = REPO_ROOT / "data" / "pos-data.js"
OUT_VAR = "POS_DATA"
CACHE_FILE = REPO_ROOT / "scripts" / ".datamuse-pos-cache.json"
API_URL = "https://api.datamuse.com/words"
MAX_WORKERS = 4
MIN_REQUEST_INTERVAL = 0.15  # global pacing across all workers, ~6-7 req/s
RETRIES = 4

TAG_MAP = {"n": "noun", "v": "verb", "adj": "adjective", "adv": "adverb"}


class FetchFailed(Exception):
    pass


class RateLimiter:
    """Caps the global request rate across all worker threads, so a bigger
    --workers count doesn't just mean a bigger burst hitting Datamuse at
    once (that burst is what triggered 403s on the first run)."""

    def __init__(self, min_interval):
        self._min_interval = min_interval
        self._lock = threading.Lock()
        self._next_ok = 0.0

    def wait(self):
        with self._lock:
            now = time.monotonic()
            delay = max(0.0, self._next_ok - now)
            self._next_ok = max(now, self._next_ok) + self._min_interval
        if delay:
            time.sleep(delay)


RATE_LIMITER = RateLimiter(MIN_REQUEST_INTERVAL)


def load_words():
    text = WORDS_FILE.read_text(encoding="utf-8")
    marker = "const WORDS_DATA = "
    start = text.index(marker)  # file leads with a large comment block
    body = text[start + len(marker):].rstrip()
    assert body.endswith(";")
    body = re.sub(r",\s*([\]}])", r"\1", body[:-1])  # drop trailing commas (valid JS, not JSON)
    data = json.loads(body)
    return sorted({word for word, _difficulty in data})


def load_cache():
    if CACHE_FILE.exists():
        return json.loads(CACHE_FILE.read_text(encoding="utf-8"))
    return {}


def save_cache(cache):
    CACHE_FILE.write_text(json.dumps(cache), encoding="utf-8")


def query_datamuse(session, word):
    for attempt in range(1, RETRIES + 1):
        RATE_LIMITER.wait()
        try:
            resp = session.get(API_URL, params={"sp": word, "md": "p", "max": 5}, timeout=15)
            if resp.status_code in (403, 429):
                raise requests.HTTPError(f"rate-limited ({resp.status_code})", response=resp)
            resp.raise_for_status()
            return resp.json()
        except (requests.RequestException, ValueError) as exc:
            if attempt == RETRIES:
                print(f"  ! giving up on {word!r}: {exc}", file=sys.stderr)
                raise FetchFailed(word) from exc
            # Rate-limit bans need a real cooldown, not a quick backoff.
            is_rate_limit = isinstance(exc, requests.HTTPError) and getattr(exc, "response", None) is not None and exc.response.status_code in (403, 429)
            time.sleep((4.0 if is_rate_limit else 0.5) * attempt)
    raise FetchFailed(word)


def tags_for_exact(entries, word):
    for entry in entries:
        if entry["word"] == word:
            tags = [TAG_MAP[t] for t in entry.get("tags", []) if t in TAG_MAP]
            if tags:
                return tags
    return None


def fetch_pos(session, word):
    """Returns a list of tags (possibly empty = confirmed no tag), or
    raises FetchFailed if every attempt (incl. plural fallback) errored."""
    tags = tags_for_exact(query_datamuse(session, word), word)
    if tags is not None:
        return tags
    # Plural inflections are the main source of exact-match misses (the
    # singular is virtually always in Datamuse's index even when the
    # plural isn't) -- strip a trailing "es"/"s" and retry once.
    for stripped in (word[:-2] if word.endswith("es") else None, word[:-1] if word.endswith("s") else None):
        if stripped:
            tags = tags_for_exact(query_datamuse(session, stripped), stripped)
            if tags is not None:
                return tags
    return []


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, help="only query the first N words (for testing)")
    parser.add_argument("--workers", type=int, default=MAX_WORKERS)
    args = parser.parse_args()

    words = load_words()
    if args.limit:
        words = words[: args.limit]
    print(f"{len(words)} unique words to query")

    cache = load_cache()
    todo = [w for w in words if cache.get(w, None) is None]
    print(f"{len(words) - len(todo)} already cached, {len(todo)} to fetch")

    session = requests.Session()
    done = 0
    failed = 0
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(fetch_pos, session, w): w for w in todo}
        for fut in as_completed(futures):
            word = futures[fut]
            try:
                cache[word] = fut.result()
            except FetchFailed:
                failed += 1
                # leave it unresolved (absent/null) so the next run retries it
                cache.pop(word, None)
            done += 1
            if done % 200 == 0 or done == len(todo):
                save_cache(cache)
                print(f"  fetched {done}/{len(todo)} ({failed} unresolved so far)")
    save_cache(cache)

    if args.limit:
        print("--limit set, not writing back to the data file")
        return

    pos_data = {w: cache[w] for w in words if cache.get(w)}
    unresolved = [w for w in words if cache.get(w, None) is None]

    body = json.dumps(pos_data, indent=2, ensure_ascii=False, sort_keys=True)
    header = (
        "// word -> part-of-speech tags (\"noun\"|\"verb\"|\"adjective\"|\"adverb\"),\n"
        "// sourced from Datamuse's md=p metadata (itself derived from WordNet) via\n"
        "// scripts/backfill-pos-tags.py. English only -- Datamuse's index and POS\n"
        "// metadata don't cover the other built-in languages. Most words carry more\n"
        "// than one tag (most words have more than one sense/usage); tags are kept\n"
        "// in Datamuse's order, empirically most-common-sense first. Words with no\n"
        "// entry here got no confident tag back and are omitted rather than guessed.\n"
    )
    OUT_FILE.write_text(f"{header}const {OUT_VAR} = {body};\n", encoding="utf-8")
    confirmed_empty = len(words) - len(pos_data) - len(unresolved)
    print(
        f"wrote {len(pos_data)}/{len(words)} words to {OUT_FILE.relative_to(REPO_ROOT)} "
        f"({confirmed_empty} confirmed no tag, {len(unresolved)} unresolved -- rerun to retry them)"
    )


if __name__ == "__main__":
    main()
