// One Word for the Boss — one word describing the boss.
// Deterministic: writes the exact same bytes on every run.
// Node standard library only; no network, no environment secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Blamethrower";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 30 characters, not only
// whitespace. "Blamethrower" is 12 characters, a single word, no spaces.
// Why this word over the draft "Buzzwordsmith": both are one fresh word, but
// "Blamethrower" (a flamethrower that sprays blame) is funnier on its own,
// catches the more universal boss habit — blaming the team when things go
// wrong — and travels beyond the office, where buzzwords live less.

if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  /\s/.test(WORD) ||
  WORD.trim().length === 0
) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");

// Echo the word so a local run shows exactly what the judge will read.
console.log(WORD);
