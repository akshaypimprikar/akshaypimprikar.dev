# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static-first, component-based, zero JS by default). Deploy target: Vercel. Chosen so the site starts as pure static output but can add a serverless API route later without a rewrite, for the chat-widget enhancement recorded below as explicitly deferred.

## Users

Primary: hiring managers and recruiters evaluating Akshay Pimprikar for Lead/Principal iOS Engineer or Mobile Engineering Manager roles, arriving from a resume, cold-outreach note, or LinkedIn profile and looking for one canonical place to verify his work is real and current.

Secondary: AI search/LLM agents (answer engines, recruiting copilots) that may crawl and cite the site when asked about Akshay — the site is explicitly optimized for this audience too (see Capabilities and Constraints).

## Product Purpose

A single canonical link that consolidates what is currently scattered across GitHub, the App Store, a resume PDF, and LinkedIn, so outreach and applications can point to one place instead of several. Success = a recruiter/hiring manager can verify real, current, production work in under a minute without hunting across platforms.

## Positioning

Portfolio-driven evidence of production agentic-AI engineering applied to a real iOS codebase: an 8-agent development pipeline (pragma) that ships a real SwiftUI/SwiftData app (FinanceTracker) end-to-end, spec through release. Neighboring iOS candidates can claim AI-assisted development; few can point to a working, public, multi-agent pipeline with real commit history behind it.

## Operating Context

Used during active job search: linked from cold-outreach emails/LinkedIn notes (see the `job-outreach` skill in Akshay's Claude Code setup, which already has a standing rule to link `pragma`/`financetracker-ios` directly in outreach), attached to resume submissions, and referenced in interviews.

## Capabilities and Constraints

- MVP scope only: landing page with links (GitHub — `pragma`, `financetracker-ios`; App Store apps worked on; resume PDF; LinkedIn; email) plus 1-2 written case studies (pragma's agentic pipeline architecture; FinanceTracker's SwiftData/concurrency decisions).
- Chat widget ("ask an agent about me") explicitly deferred — discussed and intentionally excluded from this build, not an oversight.
- Must render as pure static output for MVP — no backend required.
- Must be discoverable and citable by AI/LLM crawlers: `llms.txt`, `robots.txt` explicitly allowing GPTBot/ClaudeBot/PerplexityBot/Google-Extended, Schema.org `Person`/`ProfilePage` structured data, fully server-rendered content (nothing load-bearing behind client-side JS).
- Target domain `akshaypimprikar.dev` — not yet registered as of this writing.
- Open/undecided: exact list of App Store apps to link (candidates from resume: myMedidata, CardValet, Weight Watchers, CVS Pharmacy, Paramount Network, NYC 311) — real App Store URLs must be looked up before publishing, never fabricated or guessed.

## Brand Commitments

Name: Akshay Pimprikar. No existing visual identity, logo, or design system for this site — greenfield.

## Evidence on Hand

- GitHub: `pragma` (public, real commit history, agentic iOS pipeline) and `financetracker-ios` (public, SwiftUI/SwiftData app built by the pipeline).
- Resume (master DOCX, see Akshay's Claude Code memory `reference-resume`) — 12+ years iOS, Medidata/Fiserv/WW/Sapient/Viacom/CVS/NYC/Genworth/Vanguard experience.
- LinkedIn: linkedin.com/in/akshaypimprikar.
- App Store apps worked on: not yet verified with real links — must be fetched from the App Store before use, not asserted from memory.
- No case-study writeups exist yet as finished prose; the underlying technical facts (architecture decisions, metrics) exist in Akshay's project memory and the FinanceTracker/pragma repos themselves.

## Product Principles

- Portfolio-driven, not credential-driven: real, verifiable, currently-live work only — the same standard already enforced in Akshay's job-outreach process (no fabricated claims, every number sourced).
- Low-maintenance MVP: static-first, minimal moving parts, easy for one person to keep current.
- Built to be found by both humans and AI answer engines, not just ranked by classic SEO.
- Credible and technical in tone for a senior/leadership audience — not a generic templated portfolio.

## Accessibility & Inclusion

No project-specific requirement established yet; standard web accessibility (semantic HTML, sufficient contrast, keyboard navigation) applies as a baseline.
