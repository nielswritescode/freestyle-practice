Language support overview — RhymeJoy
=====================================

RhymeJoy (rg-latest.html) supports 7 languages. English is the most fully
built-out: several features only work there today, and a few others "exist"
in every language's UI but quietly do nothing outside English. This file is
a snapshot of what actually works per language, split into front-end
(what you click/see) and back-end (how rhymes get computed). Written from
reading the current source, not from a spec — see the file references if
something needs double-checking after future changes.

The 7 languages
----------------

| Language | Selector label | Built-in word list | Pronunciation source |
|---|---|---|---|
| English | English | ~11,070 words | CMU Pronouncing Dictionary |
| Dutch | Nederlands | 12,000 words | Real IPA (Dutch INT dataset) |
| German | Deutsch | 3,000 words | Real IPA (open-dict-data, Wiktionary) |
| French | Français | 3,000 words | Real IPA (open-dict-data, Wiktionary) |
| Spanish | Español | 3,000 words | Real IPA (open-dict-data, Wiktionary) |
| Italian | Italiano | 3,000 words | Real IPA (wikipron, Wiktionary) |
| Czech | Čeština | 3,000 words | Real IPA (wikipron, Wiktionary) |

English and Dutch got the most curation work (English's list was hand-expanded
so rare rhyme sounds have more than one or two word options, and hand-trimmed
so every word has a one-line definition available — see "Simple Definition"
below). The other five are frequency-ranked word lists cross-referenced
against a pronunciation dictionary, with no manual rhyme-family balancing —
so a rare sound in German/French/Spanish/Italian/Czech may only ever produce
one or two possible pairs, or none.

Note that the app's own interface (button labels, section titles, tooltips)
stays in English no matter which language is selected — only the word list
itself, and the on-screen dictionary lookups, change. (The one exception is
the hidden/WIP "add your own words" label under Word list, which is already
translated for all 7 — see below.)

At a glance: what works where
------------------------------

| Feature | EN | NL | DE | FR | ES | IT | CS |
|---|---|---|---|---|---|---|---|
| Perfect rhymes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Slant / creative rhymes | Yes | No | No | No | No | No | No |
| Word category filter (Food, Love, Money...) | Yes | No | No | No | No | No | No |
| Word type filter (noun/verb/adjective...) | Yes | No | No | No | No | No | No |
| Sensitive-word filter ("Filter out" / "Only") | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Difficulty mix (easy/intermediate/complex) | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Syllable-count range filter | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Simple Definition (one-line gloss) | Yes | No* | No* | No* | No* | No* | No* |
| Dictionary links / Full definition popup | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Word deletion / Copy rhyme pair modes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Custom word list upload (CSV) | Hidden (WIP) everywhere — see below | | | | | | |

\* The "Simple Definition" button is clickable in every language, but its
definitions come from WordNet, which is English-only. Outside English it
will always show "No definition found."

How each language turns spelling into rhymes
----------------------------------------------

Rhyme matching works by reducing each word to a "rhyme key" — its stressed
vowel plus everything after it — and grouping words that share a key. How
reliably that key gets built varies a lot by language:

- **English** — looked up in the CMU Pronouncing Dictionary (a real,
  human-verified pronunciation dictionary). Words not in it (e.g. a made-up
  word typed into a future custom word list) fall back to a rule-based
  spelling-to-sound guesser, so English is the only language that can ever
  rhyme a word it has no dictionary entry for.
- **Dutch** — real IPA pronunciations for every word, and Dutch spelling
  maps onto its sounds regularly enough that no extra guessing is needed.
- **German** — real IPA, and the source dictionary marks which syllable is
  stressed on almost every word, so the rhyme key is built from exactly the
  right vowel.
- **French** — real IPA. French doesn't have the kind of shifting stress
  German/Dutch/English have (stress default to the last syllable), so the
  rhyme key is simply the last vowel through the end of the word — reliable
  by design, no guessing involved.
- **Spanish** — real IPA. The source only marks stress on irregular words
  (the ones that carry a written accent, like "país"); for the rest, the
  app applies Spanish's own regular stress rule itself (second-to-last
  syllable, with some vowel-pair handling for diphthongs vs. two separate
  syllables). Solid, but a notch more guesswork than German/Dutch.
- **Italian** — real IPA, but the source has *no* stress marking at all,
  even for irregular words. The app defaults to Italian's most common
  pattern (stress on the second-to-last syllable), always trusts a written
  accent when there is one, and covers well-known exceptions
  ("tavolo", "musica"...) with a short built-in list — but any other
  less-common exception will get the wrong stress, and therefore the wrong
  rhyme key. Treat Italian rhymes as noticeably noisier than the others.
- **Czech** — real IPA, also with no stress marking, but that turns out not
  to matter: Czech stress is always on the first syllable, which is
  irrelevant to how a word *ends* (what actually needs to rhyme). Like
  French, the rhyme key is just the last vowel through the end of the word
  — reliable by design.

So, roughly ranked by rhyme-detection reliability: English ≈ Dutch ≈ German
(real dictionaries, explicit or unnecessary stress marking) > French ≈
Spanish ≈ Czech (real dictionaries, reliable stress rules) > Italian (real
dictionary, stress is genuinely guessed for uncommon words).

Only "perfect" rhymes (identical vowel + ending) are ever generated for any
non-English language. English can additionally surface "slant" rhymes, but
only because of a separate, hand-curated database of real slant-rhyme pairs
(sourced via the Datamuse API) — the app also has a looser phonetic
"near rhyme" classifier in its code, but it isn't wired up to any UI toggle
in any language right now, so it never actually produces results.

Front-end features that work identically in every language
--------------------------------------------------------------

These don't touch the word list or rhyme engine at all, so language makes no
difference to them:

- **Timer** (simple or multi-round, with sounds, loop, and editable durations)
- **Metronome** (BPM + volume)
- **Local beats player**, plus Spotify/YouTube playlist embeds
- **Freestyle-with-friends (collab) mode** — colors pairs into per-person turns
- **Themes** (dark/light/magenta/neon-purple/neon)
- **Reveal modes** — Pairs, Single words, Single syllable, Single letter,
  Rhyme family (these mask the second word for a guessing-game style
  practice; the masking itself is spelling-based, so it works the same way
  everywhere, though it was tuned with English vowel patterns in mind)
- **Word deletion mode** — permanently excludes a clicked word from future
  generations (kept as a separate exclusion list per language)
- **Copy rhyme pair mode** — copies a clicked pair to the clipboard
- **Auto-refresh**, **Hide UI**, **Settings persistence + reset**
- **Share buttons** (WhatsApp / Facebook / Instagram)
- **Practices guide** — the how-to-freestyle instructions shown under
  "Practices." These are a single English-language file
  (data/practices.md) shown as-is regardless of which word-list language is
  selected — there's no translated version yet.

Known gaps for non-English languages
---------------------------------------

- No slant/creative rhymes — only perfect rhymes are ever produced.
- No word category filter (Spiritual, Food, Animals, Work, Love, Money,
  Nature, Body, Street) and no word type filter (noun/verb/adjective/adverb)
  — those tags only exist for the English word list.
- "Simple Definition" mode never finds a definition — the underlying
  WordNet data is English-only.
- The sensitive-word filter has no data at all for Czech (so "Filter out"
  and "Only" modes are no-ops there), and its lists for the other 5
  non-English languages are a smaller starting curation than English's,
  not a full pass.
- If/when the custom word-list upload (CSV) comes out of its current
  hidden/WIP state, only English will accept a word it doesn't already
  recognize (via its spelling-to-sound guesser) — every other language
  requires the word to already be an exact match in its built-in
  pronunciation dictionary.
- Rhyme accuracy varies: Italian is the least reliable (genuine stress
  guessing on uncommon words), everything else ranges from reliable-by-rule
  to dictionary-verified — see the engine breakdown above.
- The interface itself (labels, tooltips, section titles) is English-only;
  switching language only changes the word list and the outbound dictionary
  links, not the UI text around them.
