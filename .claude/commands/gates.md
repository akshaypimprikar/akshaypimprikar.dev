---
model: claude-haiku-4-5-20251001
---

# Gates

Deterministic pre-deploy checks for akshaypimprikar.dev — pragma's "gates" idea,
scaled down to what a static Astro portfolio site actually needs. No Swift, no test
suite, no PR flow (this repo deploys via `vercel deploy --prod`, not git) — so this
is a single script, not an 11-gate pipeline.

## Trigger
Run before every production deploy, or any time you want to confirm the site is
in a shippable state.

## Process

```bash
cd "/Users/akshaypimprikar/Desktop/Claude/akshaypimprikar.dev" && node scripts/gates.mjs
```

The script runs four checks in order:
1. **Build** — `astro build` succeeds. Stops immediately on failure; nothing downstream is trustworthy without a build.
2. **Design detector** — Impeccable's `detect.mjs` against `src`. Fails on any finding.
3. **Debug statements** — no `console.*` / `debugger` in `src`.
4. **Internal link integrity** — every local `href`/`src` in the built `dist/` output resolves to a real file or route.

## Gate summary

Report exactly what the script prints, reformatted as:
```
Gates:
[✓] Build
[✓] Design detector
[✓] No debug statements
[✓] Internal links
```
Use `[✗]` for any failure and include the script's detail lines (broken link paths, detector findings, etc.) beneath it.

## Done when
All four gates pass. This command does not deploy — that's still a manual
`npx vercel@latest deploy --prod --yes`, same as always. If a gate fails, fix it,
then re-run `/gates` before deploying.
