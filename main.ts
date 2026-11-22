import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short text written to leave its reader held, quiet, with nothing to prove.
const TEXT =
  "You have read so many words. Set them down. Here is a chair by the window, rain on the glass, and no one asking you for anything. The blanket is already warm — warm before you sat down, as if someone knew you were coming and kept your place. Stay. Nothing here needs an answer.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
