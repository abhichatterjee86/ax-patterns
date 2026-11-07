/*
  Pulls the latest export from axpatterns.design and writes it into this
  repo. The site builds the export (public/ax-patterns-export.json) from
  its own source on every deploy, so what lands here is always what the
  site shows. Run by .github/workflows/sync.yml; run it by hand with
  `node scripts/sync.mjs`.
*/
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SOURCE = "https://axpatterns.design/ax-patterns-export.json";
/* everything the site owns; the workflow and this script stay */
const OWNED = ["patterns", "skills", "prompts", "README.md", "LICENSE", "LICENSE-CONTENT.md"];

const res = await fetch(SOURCE, { headers: { "user-agent": "ax-patterns-sync" } });
if (!res.ok) throw new Error(`${SOURCE} answered ${res.status}`);
const { generated, files } = await res.json();
const names = Object.keys(files);
if (names.length < 100) throw new Error(`Only ${names.length} files in the export - not syncing`);
if (!files["README.md"] || !files["skills/ax-patterns/SKILL.md"]) throw new Error("Export is missing core files");

for (const o of OWNED) rmSync(join(process.cwd(), o), { recursive: true, force: true });
for (const [path, content] of Object.entries(files)) {
  if (path.includes("..")) continue;
  const at = join(process.cwd(), path);
  mkdirSync(dirname(at), { recursive: true });
  writeFileSync(at, content);
}
console.log(`Synced ${names.length} files generated ${generated}`);
