# Improvement ideas

Ideas about your patterns and AI code flow, written up as questions/directions worth considering. Not action items — just things worth thinking about.

## `test/run.sh` can silently "hang" instead of failing clearly on this machine

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
