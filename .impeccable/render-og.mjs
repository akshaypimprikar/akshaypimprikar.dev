import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const ROOT = "/Users/akshaypimprikar/Desktop/Claude/akshaypimprikar.dev";
const template = fs.readFileSync(path.join(ROOT, ".impeccable/og-template.html"), "utf8");

const pages = [
  { slug: "og-image", title: "Akshay Pimprikar", subtitle: "Lead iOS Engineer — 12+ years shipping production mobile software for 1M–20M users. Building pragma, an 8-agent agentic pipeline." },
  { slug: "og/about", title: "Twelve years, one thread", subtitle: "12+ years building production iOS software. About me, how I work, and how to reach me." },
  { slug: "og/pragma", title: "pragma", subtitle: "An 8-agent iOS development pipeline, spec through release." },
  { slug: "og/financetracker", title: "FinanceTracker", subtitle: "A production SwiftUI + SwiftData app, built entirely by the pragma pipeline." },
];

fs.mkdirSync(path.join(ROOT, "public/og"), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 2400, height: 1260 } });

for (const p of pages) {
  const html = template
    .replace('<h1 id="title"></h1>', `<h1 id="title">${p.title}</h1>`)
    .replace('<p id="subtitle"></p>', `<p id="subtitle">${p.subtitle}</p>`);
  await page.setContent(html);
  await page.waitForTimeout(150);
  const outPath = path.join(ROOT, "public", `${p.slug}.png`);
  await page.screenshot({ path: outPath });
  console.log("wrote", outPath);
}

await browser.close();
