# Improvement ideas

Occasional notes on patterns/AI code flow worth reconsidering, per CLAUDE.md.
Written as questions/direction for you (Niels) to decide on, not things
changed unilaterally.

## Found while adding the collab "pairs per turn" dropdown

- **A reused dev-server port can make `test/run.sh` silently grade stale
  code as passing.** After editing `test/smoke.html`, I served the repo
  with `python -m http.server 8935` (same port `test/run.sh` always uses)
  and pointed a fresh Chrome tab at `http://localhost:8935/test/smoke.html`.
  The test run "passed," but the results it reported were for the *old*
  test names from before my edit — even though `curl`ing that exact URL
  fresh showed the server was serving the updated file correctly. Cause:
  Chrome's disk cache had `http://localhost:8935/test/smoke.html` cached
  from an earlier session on this machine (this port gets reused across
  many sessions per the day-to-day workflow), and `http.server` doesn't
  send cache-busting headers, so the browser silently reused the stale
  cached HTML instead of refetching it. Appending a cache-busting query
  string (`?cb=<timestamp>`) to the URL fixed it. This is a more dangerous
  variant of the already-documented title-truncation and port-collision
  bugs below: those fail loudly or look obviously wrong, but this one
  reports a clean, fully-passing run for the wrong code with no signal
  anything is off. Worth having `test/run.sh` (or whatever replaces the
  Linux-only Chrome/python3 invocation on this Windows machine) always
  append a cache-busting query param to the smoke-test URL?

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

## Test harness robustness (found while adding collab mode)

- **Smoke test results can silently fail to report once the suite grows.**
  `test/smoke.html` encodes every result (names + full assertion messages) as
  base64 JSON into `document.title`, and `test/report.py` decodes it. Adding
  5 more tests (35 total) pushed the encoded title past some length limit
  (looks like a Chrome/DevTools/OS window-title cap), which corrupts the
  base64 and makes `report.py` crash with a decode error instead of printing
  results — a silent, confusing failure mode with no signal that it's a size
  problem rather than a real test bug. Worth switching the title to a compact
  summary (counts + only the failing tests' names/messages) instead of every
  passing test's full name, so it keeps working as the suite grows?

- **Fixed test ports collide across concurrent worktree sessions.**
  `test/run.sh` always binds `8935`/`9333` by default. This repo's own
  workflow runs several worktree Claude sessions in parallel (see
  `spawntrees`/`cleanup` in CLAUDE.md) — if two sessions run the smoke tests
  at the same time, the second `python3 -m http.server` silently fails to
  bind (port already taken) and its Chrome instance ends up reading the
  *other* worktree's server instead, with no error — it just quietly reports
  results for the wrong branch's code. I hit exactly this while verifying the
  collab-mode feature (got a clean, plausible-looking report for a test suite
  that turned out to be `main`'s, not this worktree's). Worth defaulting to a
  random free port instead of a fixed one?
  (Recurred again 2026-08-30, on the Windows machine, while verifying the
  keyboard-shortcuts feature: `test/run.sh`'s own `python3 test/smoke_server.py`
  bound the default port fine and did receive the final results POST — I could
  tell because it landed in that run's own freshly-`mktemp`'d result file — but
  the served `test/smoke.html`/`rg-latest.html` content was neither this
  worktree's nor evidently any single consistent version: the report came back
  53/53 "passed," but included test names for features this repo's smoke.html
  doesn't have and was missing the keyboard-shortcut tests just added. A
  `Get-CimInstance Win32_Process` sweep during the same window turned up
  another live session's `smoke_server.py` bound to a *different* port (8937,
  not the colliding 8935) — so multiple concurrent smoke-test servers on this
  machine at once is a normal, frequent occurrence, not a one-off. Best guess:
  Windows' famously permissive `SO_REUSEADDR` let a second, unrelated leftover
  server also bind :8935 without erroring, and the OS split individual
  requests between the two processes non-deterministically — GETs answered by
  the stale one, the final POST answered by the fresh one. If true, that's a
  strictly worse failure mode than a clean bind error: results can be a
  *blend* of two different code versions in the same report, and it self-heals
  as soon as the stale process exits, so it won't reproduce on demand. Same
  proposed fix applies — a random free port — but on Windows specifically,
  also worth setting `SO_REUSEADDR` off (or binding with `SO_EXCLUSIVEADDRUSE`)
  in `test/smoke_server.py` so a genuine collision fails loudly instead of
  silently sharing the port.)

- **`python3` isn't always Python on Windows.** On this machine, `python3` on
  PATH resolves to the Microsoft Store's non-functional alias stub (it prints
  an "install from the Store" message and exits nonzero), while the real
  interpreter is just `python`. `test/run.sh` only tries `python3`, so on a
  Windows setup with this common quirk it fails with a confusing "Chrome
  timed out waiting for the tests to finish" symptom rather than a clear
  "python3 isn't runnable" message. Worth also trying `python` as a fallback,
  or sanity-checking `python3 --version` up front and printing its stderr if
  the server never responds?
  (2026-08-30: worked around this machine-locally, not in the repo, by adding
  `~/bin/python3` — a one-line shim script that `exec`s `C:\Python314\python.exe`
  — and `~/bin/google-chrome` the same way for `chrome.exe`, since `~/bin` was
  already first on `PATH` but empty. `command -v python3`/`google-chrome` now
  resolve correctly and `test/run.sh` runs unmodified. This only fixes *this*
  machine/user account though — a fresh clone or another Windows machine hits
  the exact same failure on its first run, which is the actual argument for
  fixing it in `test/run.sh` itself rather than leaving it as tribal knowledge
  living in per-machine shims.)

## Found while adding word categories

- **The smoke-test title-truncation bug (above) reproduces well before 35
  tests, and there's now a workaround worth keeping.** Hit it again at the
  existing 35-test baseline (not just after adding more) — `report.py` threw
  a base64 decode error with no other signal. Instead of touching the title
  transport, I drove `test/run.sh`'s Chrome instance directly over its
  DevTools websocket (`Runtime.evaluate` against `document.getElementById
  ('output').innerText`, polling `#summary` for "Running…" to know when to
  read it) — bypasses the title size cap entirely and gives full pass/fail
  text every time. Worth turning that into the actual fix for `report.py`
  instead of the title-encoding scheme, rather than something each session
  reinvents?

- **A conditionally-hidden `.row` silently fails to hide unless someone
  remembers to add a matching `#id[hidden]{display:none;}` override.**
  `.row{display:flex}` in data/styles.css beats the browser's default
  `[hidden]{display:none}` rule (same specificity, but `.row` is an author
  rule and wins over the user-agent stylesheet), so `someRow.hidden = true`
  in JS is a silent no-op unless that row's id has its own `[hidden]`
  override — see the four existing ones (`#slantToggleRow`,
  `#collabOptionsRow`, etc.) and the one I had to add for `#categoryRow`
  this session, caught only because a smoke test checked
  `getComputedStyle(...).display` rather than the `hidden` property itself.
  This is the second time this exact bug class has bitten a feature (the
  test suite comment already calls it out from an earlier session). Worth a
  general `.row[hidden]{display:none;}` rule instead of enumerating IDs one
  at a time, so the next conditionally-hidden row doesn't need anyone to
  remember this?

## `test/run.sh` can silently "hang" instead of failing clearly on this machine

(A third worktree session hit this same `python3` stub issue independently
while rebuilding the difficulty tiers — see "python3 isn't always Python on
Windows" above. Keeping this writeup too since it adds the specific fix
suggestion below.)

While testing the pairs-layout change, `test/run.sh` timed out after 60s with
just "Timed out after 60s waiting for the smoke tests to finish." The real
cause: `python3` on PATH resolves to
`AppData\Local\Microsoft\WindowsApps\python3` — Windows' App Execution Alias
stub, which exists on PATH (so `command -v python3` succeeds) but does
nothing but print "Python was not found..." and exit. So `python3 -m
http.server` never actually started, Chrome loaded a dead page, and the
script waited the full timeout before giving any real signal. The actual
Python (`py -3`, or `C:\Python314\python.exe`) works fine.

Question: would it be worth having `test/run.sh` verify the server actually
came up (e.g. check the `curl` health-check loop's exit status instead of
ignoring it) rather than just falling through to launching Chrome regardless?
That would turn a silent 60s timeout into an immediate, specific error.

Separately: is `python3` supposed to be the real interpreter on this
machine, or should local tooling prefer the `py` launcher on Windows? If the
WindowsApps alias stub is expected to keep shadowing it, worth a one-line
note in `test/run.sh` or the repo docs so this doesn't cost debugging time
again.
