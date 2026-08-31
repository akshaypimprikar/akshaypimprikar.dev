#!/usr/bin/env node
// Deterministic pre-deploy checks for this site — pragma's "gates" stage,
// scoped down to what this stack actually needs. No network calls, no agents.

import { execSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DETECTOR = "/Users/akshaypimprikar/.claude/plugins/cache/impeccable/impeccable/4.1.2/skills/impeccable/scripts/detect.mjs";

let failed = false;
const fail = (msg) => { failed = true; console.log(`✗ ${msg}`); };
const pass = (msg) => console.log(`✓ ${msg}`);

// 1. Build
console.log("\n[1/4] build");
const build = spawnSync("npx", ["astro", "build"], { cwd: ROOT, encoding: "utf8" });
if (build.status !== 0) {
  fail("astro build failed");
  console.log(build.stdout, build.stderr);
  process.exit(1); // nothing downstream is trustworthy without a build
}
pass("astro build");

// 2. Design detector
console.log("\n[2/4] design detector");
if (fs.existsSync(DETECTOR)) {
  const det = spawnSync("node", [DETECTOR, "--json", "src"], { cwd: ROOT, encoding: "utf8" });
  let findings = [];
  try { findings = JSON.parse(det.stdout || "[]"); } catch { findings = null; }
  if (findings === null) {
    fail("detector output did not parse as JSON");
    console.log(det.stdout, det.stderr);
  } else if (findings.length > 0) {
    fail(`detector found ${findings.length} issue(s)`);
    for (const f of findings) console.log(`  - ${JSON.stringify(f)}`);
  } else {
    pass("detector clean (0 findings)");
  }
} else {
  console.log("  (impeccable detector not found on this machine — skipped)");
}

// 3. Debug statements
console.log("\n[3/4] debug statement scan");
const grep = spawnSync("grep", ["-rn", "console\\.\\|debugger", path.join(ROOT, "src")], { encoding: "utf8" });
if (grep.status === 0 && grep.stdout.trim()) {
  fail("debug statements found in src/");
  console.log(grep.stdout);
} else {
  pass("no console.* / debugger statements");
}

// 4. Internal link integrity (against built dist/)
console.log("\n[4/4] internal link integrity");
const DIST = path.join(ROOT, "dist");
const htmlFiles = execSync(`find "${DIST}" -name "*.html"`, { encoding: "utf8" }).trim().split("\n").filter(Boolean);
const linkRe = /(?:href|src)="(\/[^"]*)"/g;
const broken = [];
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  let m;
  while ((m = linkRe.exec(html))) {
    let href = m[1].split("#")[0].split("?")[0];
    if (!href || href === "/") continue;
    const rel = href.slice(1);
    const candidates = [
      path.join(DIST, rel),
      path.join(DIST, rel, "index.html"),
      `${path.join(DIST, rel)}.html`,
    ];
    if (!candidates.some((c) => fs.existsSync(c))) {
      broken.push(`${href} (referenced in ${path.relative(ROOT, file)})`);
    }
  }
}
if (broken.length) {
  fail(`${broken.length} broken internal link(s)`);
  for (const b of [...new Set(broken)]) console.log(`  - ${b}`);
} else {
  pass("all internal links resolve");
}

console.log("\n" + (failed ? "GATES FAILED" : "GATES PASSED"));
process.exit(failed ? 1 : 0);
