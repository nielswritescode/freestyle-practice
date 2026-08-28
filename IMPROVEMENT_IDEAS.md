Ideas for improving how Claude works on this project. Written as questions/
direction for you (Niels) to decide on, not things I've changed unilaterally.

# Test harness robustness (found while adding collab mode)

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

- **`python3` isn't always Python on Windows.** On this machine, `python3` on
  PATH resolves to the Microsoft Store's non-functional alias stub (it prints
  an "install from the Store" message and exits nonzero), while the real
  interpreter is just `python`. `test/run.sh` only tries `python3`, so on a
  Windows setup with this common quirk it fails with a confusing "Chrome
  timed out waiting for the tests to finish" symptom rather than a clear
  "python3 isn't runnable" message. Worth also trying `python` as a fallback,
  or sanity-checking `python3 --version` up front and printing its stderr if
  the server never responds?

# Found while adding word categories

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
