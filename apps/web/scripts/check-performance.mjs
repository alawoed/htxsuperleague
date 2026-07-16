import { readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");
const assets = resolve(dist, "assets");
const files = await readdir(assets);

const budgets = {
  ".js": 300 * 1024,
  ".css": 60 * 1024,
};

const failures = [];
for (const file of files) {
  const extension = Object.keys(budgets).find((item) => file.endsWith(item));
  if (!extension) continue;
  const { size } = await stat(resolve(assets, file));
  if (size > budgets[extension]) failures.push(`${file}: ${size} bytes exceeds ${budgets[extension]} bytes`);
}

const hero = await stat(resolve(dist, "images/stock/hero-match-2000.webp"));
if (hero.size > 300 * 1024) failures.push(`hero-match-2000.webp: ${hero.size} bytes exceeds 307200 bytes`);

if (failures.length) {
  console.error(`Performance budget failed:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log("Performance budget passed: JS <= 300 KB, CSS <= 60 KB, hero <= 300 KB.");

