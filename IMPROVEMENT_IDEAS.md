# Improvement ideas

Occasional notes on patterns/AI code flow worth reconsidering, per CLAUDE.md.

## Keep the intermediate data behind a generated file, not just the output

When `data/words-data.js`'s difficulty tiers were originally computed, only
the final `[word, tier]` label was kept — the frequency numbers that produced
it weren't checked in anywhere. That meant when "easy" turned out to be too
generous, there was no way to retune a threshold; the whole thing had to be
recomputed from scratch with a new signal (see `scripts/rebuild-difficulty-
tiers.py`). Question for next time a script derives a checked-in data file
from some scored/ranked signal: is it worth also committing the intermediate
scores (even as a `.json` next to the script, gitignored from the app bundle
but not from the repo), so a future retune is a threshold edit instead of a
full recompute?

## Word difficulty still has no concreteness/register signal

`scripts/rebuild-difficulty-tiers.py` classifies difficulty from wordfreq
Zipf frequency + syllable count. That fixed the big, obvious problem (rare
multi-syllable words tagged "easy"), but it can't distinguish two words with
the same frequency and syllable count when one is concrete/childlike and the
other is abstract/formal — e.g. English "editor" (zipf 4.62) is literally
*more* frequent than "robot" (4.24) or "circus" (3.98) in the corpus wordfreq
is built from, so no frequency-only cutoff can keep "robot" easy without also
keeping "editor" easy. A concreteness/imageability norm dataset (e.g.
Brysbaert-style concreteness ratings — exist for English and have a Dutch
counterpart) could give a second axis to combine with frequency and actually
separate these. Worth doing if "editor"-class words showing up on Easy still
bothers you after living with the current tiers for a while; skip it if the
current split already feels good enough day-to-day.
