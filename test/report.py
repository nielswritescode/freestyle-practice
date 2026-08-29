#!/usr/bin/env python3
"""Prints a pass/fail report from the results JSON that smoke_server.py
wrote after smoke.html POSTed them (see test/run.sh). Split out from run.sh
as its own file (reading the path from sys.argv[1]) specifically to sidestep
the pipe-into-heredoc stdin trap: piping into `python3 - <<EOF` doesn't work,
since the heredoc IS what python3 reads as the program (that's what `-`
means) and silently wins over the pipe, so sys.stdin.read() gets nothing."""
import json
import sys

sys.stdout.reconfigure(encoding="utf-8")  # Windows consoles default stdout to cp1252, which can't encode ✓/✗ below
data = json.load(open(sys.argv[1], encoding="utf-8"))

for r in data["results"]:
    mark = "\033[32m✓\033[0m" if r["pass"] else "\033[31m✗\033[0m"
    print(f"{mark} {r['name']}")
    if not r["pass"]:
        print(f"    {r['error']}")

print()
if data["failCount"]:
    print(f"\033[31m{data['passCount']}/{data['total']} passed, {data['failCount']} FAILED\033[0m")
    sys.exit(1)
else:
    print(f"\033[32m{data['passCount']}/{data['total']} passed\033[0m")
    sys.exit(0)
