#!/usr/bin/env python3
"""Decodes the SMOKE_DONE: title written by test/smoke.html and prints a
pass/fail report. Split out from run.sh as its own file (reading the
title from a path given as sys.argv[1]) specifically to sidestep the
pipe-into-heredoc stdin trap documented in run.sh."""
import base64
import json
import sys

line = open(sys.argv[1], encoding="utf-8").read().strip()
encoded = line[len("SMOKE_DONE:"):]
data = json.loads(base64.b64decode(encoded).decode("utf-8"))

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
