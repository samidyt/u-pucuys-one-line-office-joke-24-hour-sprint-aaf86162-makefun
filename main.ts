// One-Line Office Joke: 24-Hour Sprint — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one office joke to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// What the line targets (judge criteria, most important first):
//   - A one-line joke about office life: the fire drill is treated as a
//     meeting — a real joke shape, setup then punchline, not an observation.
//   - Funny, recognisable payoff: "exit plan" is a double meaning — the
//     literal fire exit and the escape every meeting attendee wishes for.
//   - One line: the whole joke reads as a single sentence, no rambling.
//   - Fresh: a specific office detail (the fire drill, the one gathering
//     everyone attends on time) — not the saturated meeting-could-be-an-email
//     or reply-all angles the field is full of.
//   - Clear on first read: no reference the reader cannot follow, tight
//     wording.
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–200
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "The fire drill is the only meeting everyone attends on time, because it's the only one with an exit plan.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The program is fully deterministic: the line is a fixed constant, so
// every run writes byte-identical output. No randomness, no clock, no
// network — the same entry on every run, in any container. Verified
// locally: two runs produced byte-identical /output/entry.txt (105 chars).
// Gate bounds (from RULES.txt): entry must be 1–200 characters. These
// constants are named so the bounds stay visible next to the checks and a
// future rules change only needs one edit here.
const GATE_MIN_CHARS = 1;
const GATE_MAX_CHARS = 200;

// Self-checks: the program validates its own output before writing it.
// Each check fails loudly (throws) rather than handing in a bad entry:
//   - length within GATE_MIN_CHARS..GATE_MAX_CHARS (the 1–200 gate)
//   - not only whitespace (an empty or blank entry is invalid)
//   - exactly one line (the bounty asks for one joke, one line)
//   - exactly one sentence, i.e. a single sentence-terminating mark and
//     that mark is at the end
const chars = [...LINE].length;
if (chars < GATE_MIN_CHARS || chars > GATE_MAX_CHARS) throw new Error(`entry is ${chars} chars, gate needs ${GATE_MIN_CHARS}–${GATE_MAX_CHARS}`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
if (LINE.includes('\n')) throw new Error('entry must be exactly one line');
if ((LINE.match(/[.!?]/g) ?? []).length !== 1 || !/[.!?]$/.test(LINE)) {
  throw new Error('entry must be exactly one sentence');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
