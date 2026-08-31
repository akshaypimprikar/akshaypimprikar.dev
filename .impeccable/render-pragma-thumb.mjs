import { chromium } from "playwright";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = "/Users/akshaypimprikar/Desktop/Claude/akshaypimprikar.dev";
const html = fs.readFileSync(path.join(ROOT, ".impeccable/pragma-thumb.html"), "utf8");
const tmpPng = path.join(ROOT, ".impeccable/pragma-thumb-tmp.png");
const outWebp = path.join(ROOT, "public/case-thumbs/pragma.webp");

fs.mkdirSync(path.join(ROOT, "public/case-thumbs"), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
await page.setContent(html);
await page.waitForTimeout(150);
await page.screenshot({ path: tmpPng });
await browser.close();

execFileSync("cwebp", ["-q", "85", tmpPng, "-o", outWebp], { stdio: "inherit" });
fs.unlinkSync(tmpPng);
console.log("done:", outWebp);
