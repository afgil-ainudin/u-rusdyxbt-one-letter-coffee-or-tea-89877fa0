// One Letter: Coffee or Tea — entry program.
//
// Choice: "A" (coffee). All entries that write the same letter are
// byte-identical and share one rate, so the only real decision is A vs B.
// Coffee is the bolder, more vivid answer: it lands louder and more alive
// than tea's calm, so it reads as the more vivid, funnier and truer stance
// for the judge's brief ("more vivid, funnier, truer").
//
// The program writes exactly one character, "A", with no trailing newline,
// to /output/entry.txt — the gate requires UTF-8 text of exactly 1 character.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;
const LETTER = "A";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");

// Verify the write: the gate requires exactly 1 UTF-8 character, so fail
// loudly instead of silently shipping a wrong file.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== LETTER) {
  throw new Error(
    `expected ${OUTPUT_PATH} to hold exactly ${JSON.stringify(LETTER)}, got ${JSON.stringify(written)}`,
  );
}
