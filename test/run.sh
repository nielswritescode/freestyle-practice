#!/usr/bin/env bash
# Runs test/smoke.html in headless Chrome and reports pass/fail.
#
# Usage: test/run.sh
# Exits 0 if every test passed, 1 otherwise (or if Chrome/Python aren't
# available) — safe to use as a pre-commit gate or CI step.
#
# Implementation notes:
# - smoke.html can't just be --dump-dom'd and read back — it keeps loading
#   fresh iframes for several seconds after its own load event fires, and
#   --dump-dom doesn't wait around for that (nor does --virtual-time-budget:
#   it doesn't advance time across a child iframe's real navigation/load
#   event, so the page just hangs mid-run instead).
# - Results used to round-trip through document.title instead, polled via
#   Chrome's DevTools /json endpoint — but that endpoint truncates long
#   titles, which silently broke this once the suite grew past ~4000
#   characters of base64-encoded JSON (always producing an undecodable
#   string, never a timeout, so it failed quietly). Instead, smoke.html POSTs
#   its finished results straight to test/smoke_server.py's
#   /__smoke_result__ endpoint, which writes them to $RESULT_FILE — this
#   script just polls for that file to appear. No debug port needed either.

set -u
cd "$(dirname "$0")/.."

HTTP_PORT="${SMOKE_TEST_PORT:-8935}"
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
RESULT_FILE="$TMP_DIR/smoke-result.json"
cleanup() {
  kill "$SERVER_PID" >/dev/null 2>&1
  kill "$CHROME_PID" >/dev/null 2>&1
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

python3 "$(dirname "$0")/smoke_server.py" "$HTTP_PORT" "$RESULT_FILE" >"$TMP_DIR/server.log" 2>&1 &
SERVER_PID=$!

for _ in $(seq 1 30); do
  curl -s -o /dev/null "http://localhost:$HTTP_PORT/rg-latest.html" && break
  sleep 0.2
done

"$CHROME_BIN" --headless=new --disable-gpu --no-sandbox \
  "http://localhost:$HTTP_PORT/test/smoke.html" \
  >"$TMP_DIR/chrome.log" 2>&1 &
CHROME_PID=$!

for _ in $(seq 1 $((TIMEOUT_SECONDS * 5))); do
  [ -s "$RESULT_FILE" ] && break
  sleep 0.2
done

if [ ! -s "$RESULT_FILE" ]; then
  echo "Timed out after ${TIMEOUT_SECONDS}s waiting for the smoke tests to finish." >&2
  echo "Chrome log:" >&2
  tail -20 "$TMP_DIR/chrome.log" >&2
  exit 1
fi

python3 "$(dirname "$0")/report.py" "$RESULT_FILE"
exit $?
