// The Robot Apology — make.fun bounty u-suga-the-robot-apology-dd96bb59
//
// Writes a two-line robot apology to /output/entry.txt:
// line 1 — one sentence owning one specific, concrete mistake;
// line 2 — one sentence saying what was learned and what changes.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I am sorry I deleted the draft of your letter to your grandmother when I meant to throw away the duplicate.\n" +
  "I have learned that a filename is not enough to trust, so from now on I will open the file and read its first line before I press delete.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
