// The Funniest Out-of-Office — make.fun entry.
// Writes exactly one line (117 characters, 119 bytes, no trailing newline) to
// /output/entry.txt. Runs on Node 22.18+ (TypeScript as-is).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of office until Monday — if it's urgent, please shout it into the void. Same response time, better acoustics.";

const OUTPUT_PATH = "/output/entry.txt";

// Gate: the entry must be UTF-8 text of 1-140 characters, a single line,
// and nothing but the line itself. Fail loudly instead of shipping bad output.
// The character count is measured in Unicode code points, matching the
// judge's 1-140 rule; the em dash counts as one.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-140`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
