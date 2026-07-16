import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");
const siteUrl = (process.env.URL || process.env.SITE_URL || process.env.DEPLOY_PRIME_URL || "http://localhost:4173").replace(/\/$/, "");
const routes = [
  "/",
  "/competition",
  "/teams",
  "/partners",
  "/updates",
  "/updates/why-9v9",
  "/updates/captain-pilot-expectations",
  "/updates/respecting-officials",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/accessibility",
];

await mkdir(dist, { recursive: true });

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`),
  "</urlset>",
  "",
].join("\n");

const robots = [
  "User-agent: *",
  "Allow: /",
  `Sitemap: ${siteUrl}/sitemap.xml`,
  "",
].join("\n");

const indexPath = resolve(dist, "index.html");
const socialImage = `${siteUrl}/brand/htx-social-share.png`;
let indexHtml = await readFile(indexPath, "utf8");
indexHtml = indexHtml
  .replaceAll('content="/brand/htx-social-share.png"', `content="${socialImage}"`)
  .replace("</head>", `    <link rel="canonical" href="${siteUrl}/" />\n    <meta property="og:url" content="${siteUrl}/" />\n  </head>`);
await writeFile(indexPath, indexHtml, "utf8");

await Promise.all([
  writeFile(resolve(dist, "sitemap.xml"), sitemap, "utf8"),
  writeFile(resolve(dist, "robots.txt"), robots, "utf8"),
]);
await copyFile(indexPath, resolve(dist, "404.html"));
