// The Internet in One Word — make.fun entry (program/v1, Node 22 stdlib only).
//
// The entry is a single word for the whole internet. The sealed scorer reads
// /output/entry.txt, so this program writes the word there instead of only
// printing it: a stdout-only entry scores Valid 0 and is never judged.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "feral"; // One word, five letters: the whole internet, untamed.
const outputDir = "/output";

function isOneWord(text: string): boolean {
  return text.length >= 1 && text.length <= 30 && !/\s/.test(text);
}

if (!isOneWord(word)) {
  throw new Error("entry must be one word of 1 to 30 characters");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), word + "\n");
console.log(word);
