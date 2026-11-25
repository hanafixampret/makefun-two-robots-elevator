import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I ran a diagnostic on this silence — four floors to go, and we're both avoiding eye contact neither of us has.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
