Source: https://github.com/open-dict-data/ipa-dict (`data/nl.txt`)

Dutch IPA transcriptions provided by the Instituut voor de Nederlandse Taal
(INT) — https://www.ivdnt.org/ — distributed under a CC BY license.

`nl-ipa-dict.txt` is the raw, unmodified download (121,199 lines / ~118k
unique words). `words-data-nl.js` is a curated subset of 4,000 common words
(filtered by frequency, see below) built from this file, in the same
[word, difficulty] shape as `words-data.js`, plus a third column carrying
each word's IPA transcription so the app can derive Dutch rhyme keys
directly from real pronunciation data instead of a rule-based guesser.

Frequency ranking used for curation/tiering:
https://github.com/hermitdave/FrequencyWords (`content/2018/nl/nl_50k.txt`),
OpenSubtitles-derived word frequencies.
