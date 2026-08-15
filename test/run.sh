#!/usr/bin/env bash
# Runs test/smoke.html in headless Chrome and reports pass/fail.
#
# Usage: test/run.sh
# Exits 0 if every test passed, 1 otherwise (or if Chrome/Python aren't
# available) — safe to use as a pre-commit gate or CI step.
#
# Implementation note: this can't just headless-dump-dom the page and read
# the result out of it, the way the ad-hoc test harnesses used during
# development did — smoke.html keeps loading fresh iframes for several
# seconds after its own load event fires, and --dump-dom doesn't wait
# around for that. Instead, once all tests finish, smoke.html sets
# document.title to a completion sentinel, and this script polls Chrome's
# DevTools /json endpoint (which reflects the live title) until that shows
# up — no extra tooling (puppeteer, node) required.

set -u
cd "$(dirname "$0")/.."

HTTP_PORT="${SMOKE_TEST_PORT:-8935}"
DEBUG_PORT="${SMOKE_TEST_DEBUG_PORT:-9333}"
TIMEOUT_SECONDS="${SMOKE_TEST_TIMEOUT:-60}"
CHROME_BIN="$(command -v google-chrome || command -v google-chrome-stable || command -v chromium || command -v chromium-browser || true)"

if [ -z "$CHROME_BIN" ]; then
  echo "No Chrome/Chromium binary found on PATH — can't run the smoke tests." >&2
  exit 1
fi
if ! command -v python3 >/dev/null; then
  echo "python3 not found on PATH — needed to serve the app for the tests." >&2
  exit 1
fi

TMP_DIR="$(mktemp -d)"
cleanup() {
  kill "$SERVER_PID" >/dev/null 2>&1
  kill "$CHROME_PID" >/dev/null 2>&1
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

python3 -m http.server "$HTTP_PORT" >"$TMP_DIR/server.log" 2>&1 &
SERVER_PID=$!

for _ in $(seq 1 30); do
  curl -s -o /dev/null "http://localhost:$HTTP_PORT/rg-latest.html" && break
  sleep 0.2
done

"$CHROME_BIN" --headless=new --disable-gpu --no-sandbox \
  --remote-debugging-port="$DEBUG_PORT" \
  "http://localhost:$HTTP_PORT/test/smoke.html" \
  >"$TMP_DIR/chrome.log" 2>&1 &
CHROME_PID=$!

TITLE=""
for _ in $(seq 1 $((TIMEOUT_SECONDS * 5))); do
  TITLE="$(curl -s "http://localhost:$DEBUG_PORT/json" 2>/dev/null | python3 -c '
import json, sys
try:
    targets = json.load(sys.stdin)
except Exception:
    sys.exit(0)
for t in targets:
    title = t.get("title", "")
    if title.startswith("SMOKE_DONE:"):
        print(title)
        break
' 2>/dev/null)"
  [ -n "$TITLE" ] && break
  sleep 0.2
done

if [ -z "$TITLE" ]; then
  echo "Timed out after ${TIMEOUT_SECONDS}s waiting for the smoke tests to finish." >&2
  echo "Chrome log:" >&2
  tail -20 "$TMP_DIR/chrome.log" >&2
  exit 1
fi

echo "$TITLE" > "$TMP_DIR/title.txt"

# A file argument, not stdin — piping into `python3 - <<EOF` doesn't work,
# the heredoc IS what python3 reads as the program (that's what `-` means),
# so it silently wins over the pipe and sys.stdin.read() gets nothing. Cost
# a good while to track down the first time.
python3 "$(dirname "$0")/report.py" "$TMP_DIR/title.txt"
exit $?
