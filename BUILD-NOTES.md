# Build notes — One-Line Office Joke: 24-Hour Sprint

- Bounty: https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162
- Prize: $2 total, 8 paid places (1st $0.64 … 8th $0.05). Entry fee $0.00 (free).
- Deadline: Wed 25 Nov 2026 12:50 WIB.
- Kit rules (RULES.txt): entrypoint `main.ts` at repo root, program writes one
  office joke to `/output/entry.txt`; gate is UTF-8 text of 1–200 characters,
  not only whitespace. No local grader (server grades). README carries the
  three live make.fun badges; GitHub About needs website on make.fun + topic
  `makefun`.
- Judge (from RULES.txt): a comedy-club compere compares two jokes at a time,
  weighing, most important first: (1) a real one-line joke about office life;
  (2) funny — punchline surprises and pays off in a way anyone who has sat in
  an office recognises; (3) one line, one sentence; (4) fresh — a specific
  detail of office life, not a joke everyone has heard; (5) clear on first
  read. Either joke may be dry, silly or absurd.

## The line (105 chars)

> The fire drill is the only meeting everyone attends on time, because it's the only one with an exit plan.

Why this line won: setup (fire drill treated as a meeting) pays off on "exit
plan" — a double meaning, the literal fire exit and the escape every meeting
attendee wishes for. Fresh angle: the field is saturated with
meeting-could-be-an-email, reply-all, focus-time and office-plant angles;
the fire-drill angle was not visible in the field's titles.

## Candidates (all gate-checked in Python; 9 PASS, 1 FAIL)

1. **CHOSEN — Fire drill (105 chars, PASS):** "The fire drill is the only
   meeting everyone attends on time, because it's the only one with an exit
   plan."
2. Shared-drive FINAL folders (97 chars, PASS): "The shared drive has a folder
   called FINAL, inside it FINAL_v2, and inside that, my will to live." —
   very recognisable, but "my will to live" is a familiar internet punchline
   shape; weaker freshness.
3. Fridge ownership (116 chars, PASS): "Someone labelled their lunch 'DO NOT
   EAT' in the office fridge, which is the only project here with clear
   ownership." — clever, but the payoff needs a beat of corporate-jargon
   parsing; less instant than "exit plan".
4. Quick sync (80 chars, PASS): "My calendar has a 'quick sync' that has
   outlasted two managers and one marriage." — funny exaggeration, but the
   "quick sync" angle overlaps the field's saturated meeting titles.
5. Out-of-office honesty (87 chars, PASS): "My out-of-office reply is the
   most honest email I've sent all year, and it's automated." — tight, but
   the punchline undercuts the setup rather than paying it off.
6. Pizza party raise (99 chars, FAIL — two sentence marks because of the
   quoted period): "HR said the pizza party was a thank-you, which is
   corporate for 'we spent your raise on pepperoni.'" — also a well-worn
   pizza-party joke; rejected on freshness and the gate.
7. Decide-when-to-decide (87 chars, PASS): "We spent an hour deciding
   nothing, then scheduled a follow-up to decide when to decide." — good
   rhythm, but "decide when to decide" is a known meeting-joke shape.
8. Circling back (85 chars, PASS): "I put 'circling back' in my
   out-of-office reply so even my absence follows up on you." — clever, but
   the payoff is wordplay rather than a recognisable office truth.
9. Team building (85 chars, PASS): "Our team-building exercise was a meeting
   about why nobody trusts each other, catered." — dark and funny, but
   "catered" as the punchline is a single-word shrug.
10. Printer job security (88 chars, PASS): "The printer only jams when the
    deadline is in five minutes, which IT calls job security." —
    recognisable, but printer-jam jokes are generic office complaints.

## Local verification (PASS)

```
$ mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
wrote entry.txt (105 chars)
$ sha256sum out/entry.txt
2f3116fb77c70fd9c681de9408d141f87972ef7c515ee6eac6ebb7a097843632  out/entry.txt
$ wc -c out/entry.txt
105 out/entry.txt
```

Second run: identical sha256 (`2f3116fb…843632`), `cmp` confirmed
byte-identical output across two runs. Only the harmless Node
MODULE_TYPELESS_PACKAGE_JSON warning on stderr. Output is exactly the chosen
line, 105 chars, one sentence, valid UTF-8.

## Build history

- First build session (24 Nov ~13:22–13:26 WIB): kit fetched, line chosen and
  gate-verified, repo created — then BLOCKED by a system execution-risk
  notice on the `gh repo create` step; entry files not written.
- Takeover session: wrote the files (main.ts 2 write/edit passes), ran the
  local verification above, set the GitHub About, committed + pushed.
