There is a test suite that you can use when adding new features. 

Please make a new commit with a message for every new feature. Smaller changes can go together. 

Occasionally take some time to think about how I could improve my patterns and AI code flow. When you have ideas, write them as easily understandable questions and direction into IMPROVEMENT_IDEAS.md in the project root.
Always push after commits on main. 
# Multi-agent workflows

## synctree

When I ask to "synctree" (or to point this worktree's HEAD at the newest main commit), do the following:

1. Run `git status`. If the working tree isn't clean, stop and tell me — don't stash or discard anything automatically.
2. Confirm this worktree's current HEAD is already merged into `main`: `git merge-base --is-ancestor HEAD main`.
   - If it's NOT an ancestor, stop. Show `git log main..HEAD --oneline` (commits unique to this worktree) and `git log HEAD..main --oneline` (what main has that this worktree doesn't), and ask how to proceed — resetting now would drop the unique commits.
3. If HEAD is an ancestor of main (safe, no unique work would be lost), run `git reset --hard main`.
4. Report the new HEAD and summarize what came in (the commits between the old HEAD and the new one).

## spawntrees

This command only works from a non-worktree (main checkout) Claude session — never from inside a worktree. It starts 3 `claude --worktree` sessions and tiles all 4 windows (this one plus the 3 new ones) into a 2x2 grid that fills the screen, with this main session in the top-left.

This machine runs MATE with `mate-terminal`, and has `wmctrl`/`xrandr` available — the steps below assume those.

1. Guard: run `git rev-parse --git-dir`. If the output contains `worktrees` (e.g. `.git/worktrees/...`), stop and tell me `spawntrees` only works from the main session.
2. Get the screen size: `xrandr --current | grep ' connected primary'`, parse the `WxH` resolution. Compute `half_w = W/2`, `half_h = H/2` — every window gets this size.
3. Move this session's own window to the top-left quadrant:
   - Walk up from the current shell's PID (`ps -o pid=,ppid=,comm=`) to find the ancestor `mate-terminal` process.
   - Match that PID to a window id via `wmctrl -lp`.
   - `wmctrl -ir <window-id> -e 0,0,0,<half_w>,<half_h>`
4. Spawn 3 new sessions, one per remaining quadrant, in this order: top-right `(half_w,0)`, bottom-left `(0,half_h)`, bottom-right `(half_w,half_h)`. For each:
   - Snapshot `wmctrl -l`.
   - Launch `mate-terminal --working-directory="$(pwd)" -- claude --worktree &`.
   - Poll `wmctrl -l` (sleep loop, ~10s timeout) until a window id appears that wasn't in the snapshot — that's the new window.
   - `wmctrl -ir <window-id> -e 0,<x>,<y>,<half_w>,<half_h>`
5. Don't set window titles manually — each new session creates its own worktree and renames its own window per the global window-naming convention.
6. Report which quadrant holds which session (main is always top-left).

## cleanup

When I ask to "cleanup", for every worktree in `git worktree list` other than this checkout:

1. Check whether its Claude session is currently running a command before touching anything — use ListAgents to see peer sessions and their busy/idle status (a worktree being "open"/locked by a live session is not by itself a reason to skip it — busy vs. idle is what matters).
2. Skip any worktree whose session shows "busy" — leave it and its session alone, and report that it was skipped and why.
3. For every idle worktree, merge its branch into `main`. Resolve conflicts by hand when they're simple/additive (e.g. two branches both appending a section to the same file); stop and ask if a conflict looks substantive rather than two additive changes landing near the same spot.
4. After a successful merge, remove the worktree (`git worktree remove`) and delete its now-fully-merged branch (`git branch -d`).
5. Close that worktree's idle Claude session — find its process (the worktree's git lock file names the PID; spawntrees also launches each session as its terminal's sole command, so ending the process closes the terminal window too) and terminate it.
6. Report what was merged, what was skipped (busy sessions), and which sessions were closed.

This is standing authorization to merge and close *idle* worktree sessions without asking each time — busy sessions are always left alone.

# Commands

- cleanup - see the cleanup section above
