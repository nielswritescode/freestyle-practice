#!/usr/bin/env python3
"""Backfills score_a/score_b onto every pair in data/slant-rhymes-datamuse.js.

Datamuse's rel_nry gives a relevance score per (query word -> candidate)
result, not per pair, so the efficient move is to query it once per unique
word that appears in the local pair list (~8k words) rather than once per
pair (~70k) -- roughly a 9x reduction in requests. Each query is done with
max=1000 candidates, comfortably above the highest per-word pair count in
the existing data (~230), so every existing pair is guaranteed to show up
in its "a" or "b" word's result list if Datamuse still relates them.

Results are cached to disk as they arrive so an interrupted run can resume
without re-fetching words already looked up.
"""
import argparse
import json
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import requests

REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = REPO_ROOT / "data" / "slant-rhymes-datamuse.js"
DATA_VAR = "SLANT_RHYMES_DATAMUSE"
CACHE_FILE = REPO_ROOT / "scripts" / ".datamuse-score-cache.json"
API_URL = "https://api.datamuse.com/words"
MAX_CANDIDATES = 1000
MAX_WORKERS = 8
RETRIES = 3


def load_data_file():
    text = DATA_FILE.read_text(encoding="utf-8")
    prefix = f"const {DATA_VAR} = "
    assert text.startswith(prefix), "unexpected file format"
    body = text[len(prefix):].rstrip()
    assert body.endswith(";")
    return json.loads(body[:-1])


def write_data_file(data):
    body = json.dumps(data, indent=2, ensure_ascii=False)
    DATA_FILE.write_text(f"const {DATA_VAR} = {body};", encoding="utf-8")


def load_cache():
    if CACHE_FILE.exists():
        return json.loads(CACHE_FILE.read_text(encoding="utf-8"))
    return {}


def save_cache(cache):
    CACHE_FILE.write_text(json.dumps(cache), encoding="utf-8")


def fetch_rel_nry(session, word):
    params = {"rel_nry": word, "max": MAX_CANDIDATES}
    for attempt in range(1, RETRIES + 1):
        try:
            resp = session.get(API_URL, params=params, timeout=15)
            resp.raise_for_status()
            return {
                item["word"]: item["score"]
                for item in resp.json()
                if "score" in item
            }
        except (requests.RequestException, ValueError) as exc:
            if attempt == RETRIES:
                print(f"  ! giving up on {word!r}: {exc}", file=sys.stderr)
                return {}
            time.sleep(0.5 * attempt)
    return {}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, help="only query the first N words (for testing)")
    parser.add_argument("--workers", type=int, default=MAX_WORKERS)
    args = parser.parse_args()

    data = load_data_file()
    pairs = data["pairs"]

    words = sorted({p["a"] for p in pairs} | {p["b"] for p in pairs})
    if args.limit:
        words = words[: args.limit]
    print(f"{len(words)} unique words to query ({len(pairs)} pairs total)")

    cache = load_cache()
    todo = [w for w in words if w not in cache]
    print(f"{len(words) - len(todo)} already cached, {len(todo)} to fetch")

    session = requests.Session()
    done = 0
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(fetch_rel_nry, session, w): w for w in todo}
        for fut in as_completed(futures):
            word = futures[fut]
            cache[word] = fut.result()
            done += 1
            if done % 200 == 0 or done == len(todo):
                save_cache(cache)
                print(f"  fetched {done}/{len(todo)}")
    save_cache(cache)

    if args.limit:
        print("--limit set, not writing back to the data file")
        return

    missing = 0
    for p in pairs:
        score_a = cache.get(p["a"], {}).get(p["b"])
        score_b = cache.get(p["b"], {}).get(p["a"])
        if score_a is None and score_b is None:
            missing += 1
        p["score_a"] = score_a
        p["score_b"] = score_b

    data["scores_added"] = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    data["score_source"] = (
        "score_a is the rel_nry relevance score of b when queried from a "
        "(Datamuse's ranking of how strong a near-rhyme b is for a); "
        "score_b is the same in the other direction. Either may be null if "
        "Datamuse no longer surfaces that direction within max=1000 candidates."
    )

    write_data_file(data)
    print(f"wrote scores for {len(pairs)} pairs ({missing} pairs got neither direction)")


if __name__ == "__main__":
    main()
