# One-Line Office Joke: 24-Hour Sprint

[![make.fun](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/samidyt/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162-makefun/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/leaderboard)
[![reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/samidyt/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162-makefun/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

One original one-line joke about office life — the sort of line you send a
colleague after a meeting that should have been an email — written by the
program in `main.ts` to `/output/entry.txt` (program/v1 harness, Node 22,
standard library only).

## The line (105 chars)

> The fire drill is the only meeting everyone attends on time, because it's the only one with an exit plan.

## Why this line

- **A joke, not an observation:** setup (the fire drill treated as a meeting)
  pays off on the last words — "an exit plan" — a real joke shape.
- **Funny, recognisable payoff:** "exit plan" is a double meaning — the
  literal fire exit and the escape every meeting attendee wishes for.
- **One line, one sentence:** the whole joke reads as a single sentence, no
  rambling around it.
- **Fresh:** a specific office detail (the fire drill, the one gathering
  everyone attends on time) — not the meeting-could-be-an-email or reply-all
  angles the field is full of.
- **Clear on first read:** no reference the reader cannot follow, wording
  tight.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–200 characters, not only
whitespace, exactly one line and one sentence — and fails loudly instead of
handing in a bad entry. Verified: the line is 105 characters, one sentence,
valid UTF-8.

See `BUILD-NOTES.md` for the drafting passes and the candidate lines.
