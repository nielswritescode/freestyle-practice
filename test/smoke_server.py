#!/usr/bin/env python3
"""Static file server for the smoke tests, plus one extra endpoint smoke.html
uses to hand back its results directly.

This replaces a plain `python3 -m http.server`: results used to round-trip
through document.title, polled via Chrome's DevTools /json endpoint, but
that endpoint truncates long titles — which silently broke reporting once
the suite grew past ~4000 characters of encoded JSON (see test/run.sh).
POSTing the JSON straight to this server and writing it to a file sidesteps
that entirely.

Usage: smoke_server.py <port> <result-file-path>
Serves the repo root (the parent of this script's directory) statically;
any body POSTed to /__smoke_result__ is written verbatim to <result-file-path>.
"""
import functools
import http.server
import os
import sys

port = int(sys.argv[1])
result_path = sys.argv[2]
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/__smoke_result__":
            self.send_response(404)
            self.end_headers()
            return
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)
        with open(result_path, "wb") as f:
            f.write(body)
        self.send_response(204)
        self.end_headers()


Handler = functools.partial(Handler, directory=root)
http.server.ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()
