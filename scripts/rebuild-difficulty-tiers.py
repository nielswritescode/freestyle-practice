#!/usr/bin/env python3
"""Recomputes the easy/intermediate/complex difficulty tier for every word in
data/words-data.js (English) and data/words-data-nl.js (Dutch).

Why: the tiers previously baked into those files only kept the final label,
not the frequency data used to produce it -- so when "easy" turned out to be
too generous (lots of words like "typhoon"/"despair"/"conceal" showing up on
the easy setting), there was nothing left to retune. This script recomputes
tiers from scratch using a real signal instead of guessing at percentiles.

Method: word familiarity via wordfreq's Zipf frequency (log-scale, ~1 rare -
~7 extremely common; covers both languages from one library, and the other
four shipped languages if this is ever extended to them). Syllable counting
reuses the exact spelling-based regex from countSyllables() in js/app.js
(vowel-group count + naive silent-e correction) so a word's tier stays
consistent with what the "syllables per word" Advanced slider reports for
it at runtime.

Zipf alone is not enough, in both directions:
  - It still lets multi-syllable-but-frequent words through as "easy" (e.g.
    "historical", Dutch "telefonisch") -- common in text, but still a
    mouthful to rap -- so words of 4+ syllables are never classified easy
    regardless of frequency.
  - General-text frequency (news/subtitles/web) systematically underrates
    short, concrete, spoken-register words against longer formal/abstract
    ones: "fog"/"bog"/"jog"/"cog" and "puppy"/"cookie"/"balloon" all score
    LOWER than "historical" or "editor" despite being far easier to rap.
    A flat cutoff either lets the formal words in or kicks the simple ones
    out. There's no cutoff that fixes both at once -- e.g. English "editor"
    (zipf 4.62) is literally more frequent than "robot" (4.24) or "circus"
    (3.98), so no frequency-only threshold can keep the latter in "easy"
    while excluding the former. To at least fix the one-syllable case (the
    cleanest signal -- a monosyllable is unambiguously easy to rap
    regardless of register), one-syllable words get a much lower bar than
    longer words. Multi-syllable words like "editor"/"attitude" occasionally
    still land in "easy" as a result -- a known residual limitation of a
    frequency+syllables-only signal, not something worth further threshold
    whack-a-mole (see IMPROVEMENT_IDEAS.md for what would actually fix it).

Thresholds (see the calibration notes in the commit this shipped in for how
these were chosen, by sampling words at each percentile of the frequency
distribution and spot-checking known easy/hard words against candidate
cutoffs):
    1 syllable,  zipf >= EASY_ZIPF_1SYL        -> easy
    2-3 syllables, zipf >= EASY_ZIPF           -> easy
    4+ syllables                               -> never easy
    zipf < COMPLEX_ZIPF (incl. zipf==0, i.e. not found in the corpus at all)
                                                -> complex
    otherwise                                  -> intermediate

Requires the `wordfreq` package (`pip install wordfreq`) -- not otherwise a
project dependency, only needed to re-run this script.

Usage: python scripts/rebuild-difficulty-tiers.py [--dry-run]
"""
import argparse
import re
import sys
from pathlib import Path

from wordfreq import zipf_frequency

REPO_ROOT = Path(__file__).resolve().parent.parent

EASY_ZIPF = 4.2       # easy-tier bar for 2-3 syllable words
EASY_ZIPF_1SYL = 3.0  # easy-tier bar for 1-syllable words (lower: syllable count alone is already a strong simplicity signal)
COMPLEX_ZIPF = 2.3    # below this (any syllable count) -> complex
# 4+ syllable words never qualify as "easy" regardless of frequency.

LANGS = [
    {"path": REPO_ROOT / "data" / "words-data.js", "lang": "en", "has_ipa": False},
    {"path": REPO_ROOT / "data" / "words-data-nl.js", "lang": "nl", "has_ipa": True},
]

LINE_RE_PLAIN = re.compile(r'^(\s*\[")([^"]+)(",\s*)"(?:easy|intermediate|complex)"(\],?\s*)$')
LINE_RE_IPA = re.compile(r'^(\s*\[")([^"]+)(",\s*)"(?:easy|intermediate|complex)"(,\s*"[^"]*"\],?\s*)$')


def count_syllables(word):
    w = re.sub(r"[^a-z]", "", word.lower())
    if not w:
        return 0
    groups = re.findall(r"[aeiouy]+", w)
    count = len(groups) or 1
    if count > 1 and re.search(r"[^aeiouy]e$", w):
        count -= 1
    return count


def classify(word, lang):
    z = zipf_frequency(word, lang)
    syl = count_syllables(word)
    if syl == 1:
        easy_bar = EASY_ZIPF_1SYL
    elif syl <= 3:
        easy_bar = EASY_ZIPF
    else:
        easy_bar = None  # 4+ syllables: never easy
    if easy_bar is not None and z >= easy_bar:
        return "easy"
    if z < COMPLEX_ZIPF:
        return "complex"
    return "intermediate"


def process(path, lang, has_ipa, dry_run):
    line_re = LINE_RE_IPA if has_ipa else LINE_RE_PLAIN
    lines = path.read_text(encoding="utf-8").splitlines(keepends=True)
    counts = {"easy": 0, "intermediate": 0, "complex": 0}
    changed = 0
    out_lines = []
    matched = 0
    for line in lines:
        m = line_re.match(line)
        if not m:
            out_lines.append(line)
            continue
        matched += 1
        word = m.group(2)
        old_tier_m = re.search(r'"(easy|intermediate|complex)"', line)
        old_tier = old_tier_m.group(1) if old_tier_m else None
        new_tier = classify(word, lang)
        counts[new_tier] += 1
        if new_tier != old_tier:
            changed += 1
        out_lines.append(m.group(1) + word + m.group(3) + f'"{new_tier}"' + m.group(4))

    total = sum(counts.values())
    print(f"{path.name}: matched {matched} word lines, {changed} tier changes")
    for tier in ("easy", "intermediate", "complex"):
        print(f"  {tier:12s} {counts[tier]:5d}  ({counts[tier] / total * 100:.1f}%)")

    if not dry_run:
        path.write_text("".join(out_lines), encoding="utf-8")
    return matched, changed


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--dry-run", action="store_true", help="Print the tier distribution without writing files")
    args = parser.parse_args()

    for entry in LANGS:
        process(entry["path"], entry["lang"], entry["has_ipa"], args.dry_run)


if __name__ == "__main__":
    sys.exit(main())
