import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const ROOT = "/Users/akshaypimprikar/Desktop/Claude/akshaypimprikar.dev";
const html = fs.readFileSync(path.join(ROOT, ".impeccable/pragma-thumb.html"), "utf8");

fs.mkdirSync(path.join(ROOT, "public/case-thumbs"), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
await page.setContent(html);
await page.waitForTimeout(150);
await page.screenshot({ path: path.join(ROOT, "public/case-thumbs/pragma.png") });
await browser.close();
console.log("done");
