Source: https://github.com/open-dict-data/ipa-dict (`data/nl.txt`)

Dutch IPA transcriptions provided by the Instituut voor de Nederlandse Taal
(INT) — https://www.ivdnt.org/ — distributed under a CC BY license.

`nl-ipa-dict.txt` is the raw, unmodified download (121,199 lines / ~118k
unique words). `words-data-nl.js` is a curated subset of 12,000 words built
from this file, in the same [word, difficulty] shape as `words-data.js`,
plus a third column carrying each word's IPA transcription so the app can
derive Dutch rhyme keys directly from real pronunciation data instead of a
rule-based guesser.

Curation pipeline (word selection + tiering):
- Frequency ranking: https://github.com/hermitdave/FrequencyWords
  (`content/2018/nl/nl_full.txt`), OpenSubtitles-derived word frequencies.
- Quality/real-word gate: https://github.com/OpenTaal/opentaal-wordlist
  (`elements/basiswoorden-gekeurd.txt`), a vetted Dutch word list, used to
  keep non-standard/junk entries out of the frequency-derived candidate pool.

The original hand-picked 4,000 words are kept as-is with their original
difficulty tiers. The remaining ~8,000 were added by grouping all 4,000
originals into rhyme families (stressed vowel + everything after it) and
preferentially filling out families that had only 1-3 members — otherwise
the generator keeps reusing the same couple of words for any sound that
happened to be underrepresented (e.g. "hufter"/"erover" both trailing off
in an unstressed "-er" used to look like a family match before the
stress-aware rhyme key fix; separately, sparse families like the Dutch
equivalent of English coin/join only had 1-2 usable words each). New words'
difficulty tiers are assigned from their own frequency rank, independent of
the originals.
