---
name: Akshay Pimprikar Portfolio
description: A career read as evidence — restrained native craft for a Lead iOS Engineer's portfolio
colors:
  void-black: "#0A0A0C"
  panel-black: "#111114"
  paper-white: "#F2F2F0"
  muted-ash: "#8A8A92"
  antique-gold: "#C9A15A"
  hairline: "rgba(255,255,255,0.09)"
  glass-tint: "rgba(255,255,255,0.055)"
  atmosphere-blue: "rgba(120,140,255,0.06)"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.625rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  display-secondary:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)"
    fontWeight: 600
    letterSpacing: "-0.02em"
  display-tertiary:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 600
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    letterSpacing: "-0.01em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.55
  micro:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
rounded:
  xs: "2px"
  sm: "8px"
  md: "11px"
  lg: "14px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "22px"
components:
  button-primary:
    backgroundColor: "{colors.antique-gold}"
    textColor: "{colors.void-black}"
    rounded: "{rounded.sm}"
    padding: "11px 20px"
  card:
    backgroundColor: "{colors.glass-tint}"
    rounded: "{rounded.lg}"
  card-interactive-hover:
    backgroundColor: "rgba(255,255,255,0.06)"
---

# Design System: Akshay Pimprikar Portfolio

## Overview

**Creative North Star: "The Restrained Native Craft"**

This system exists to make one claim credible: that the work behind it is real, current, and production-grade — not a template dressed up for a job search. Every visual decision serves legibility and verification first. The palette stays almost entirely neutral (near-black ground, off-white text, muted ash for secondary content) with exactly one warm accent, spent with discipline rather than scattered for energy. Where the system reaches for personality, it reaches toward the subject's own world — SF Pro as the display and body face throughout, because the person this site represents builds native Apple software, not because it is a safe default.

The direction was chosen through three real rounds of iteration, not settled on the first pass. Round one (a flat hero + plain card grid) was rejected as static and boring — too safe to read as authored. Round two (a fluorescent soundsystem-poster look, a drum-machine step sequencer, a precision dance-notation score) was rejected as too provocative — loud enough to undercut the credibility the site is trying to build for a senior hiring audience. What survived is the middle register: quiet enough to trust, specific enough to remember.

The site was restructured twice after the direction shipped. The homepage's horizontal "era timeline" component and the standalone Career page it lived on were removed entirely — the career narrative now lives as first-person prose on the About page (formerly Career, renamed and rewritten). The standalone Apps page was folded into a "Shipped apps" section on the homepage, directly below the two case-study cards. The footer was stripped down to a copyright line; every link that used to live in a multi-item footer row (Resume, LinkedIn, Email, GitHub) now lives in the header nav instead, alongside the new About Me link — the nav is the site's only link list. The header brand mark changed from a text wordmark to a 32×32 image badge (`/favicon.svg`).

**Key Characteristics:**
- Near-black ground with exactly one warm accent color, never a second competing hue
- Glass-material cards (translucent tint + blur) instead of drop-shadow elevation
- SF Pro system stack throughout — no imported display face
- Two-tier entrance motion on load, deliberately not identical everywhere: a calm exponential ease-out (`cubic-bezier(.16,1,.3,1)`, 0.8s, 14px rise) for supporting content, and a faster, steeper exponential ease-out (`cubic-bezier(.19,1,.22,1)`, 0.6s, 30px rise + a 0.95→1 scale) reserved for each page's `h1` alone — the one signature moment per page. Both curves are pure decelerate-only exponentials (no control point exceeds 1): no bounce or elastic overshoot. No ambient or decorative animation at rest.
- Hover affordance reserved strictly for elements that are actually clickable
- Real evidence over illustration: every image on the site is a real screenshot or a real captured session, never decorative art or a stock icon

## Colors

Almost entirely neutral, with the accent held to a strict minority role across the whole surface.

### Primary
- **Antique Gold** (`#C9A15A`): the single accent. Used for the active nav item, the resume CTA button, card stat lines, the "Human approval" pipeline-stage tag, and case-study/inline links. Never used for large fills or body text — its rarity is what makes it register as a signal.

### Neutral
- **Void Black** (`#0A0A0C`): the page ground, used everywhere as `--bg`.
- **Panel Black** (`#111114`): declared as `--bg2` in the root token set, but not applied to any surface across the three shipped pages — there is no second-layer chrome element on the site today that consumes it. Recorded here as a defined-but-dormant token, not as an active layering rule; do not claim it names a live visual pattern until a component actually uses it.
- **Paper White** (`#F2F2F0`): primary text color (`--ink`) — headings, active states, and any text that needs full attention.
- **Muted Ash** (`#8A8A92`): secondary text color (`--dim`) — subheads, card body copy, and nav links at rest. Carries roughly 5.8:1 contrast against Void Black, comfortably AA.
- **Hairline** (`rgba(255,255,255,0.09)`): the only border/divider color in the system — every `border`, `border-top`, and `border-bottom` in the codebase uses this one value, including the borders around the case-thumbnail and screenshot images.
- **Glass Tint** (`rgba(255,255,255,0.055)`): the background fill for every `.glass-card` at rest, confirmed against the shipped `--glass` custom property.
- **Atmosphere Blue** (`rgba(120,140,255,0.06)`): a single, near-invisible cool wash in the fixed page background, paired with a matching warm Antique Gold wash — together they keep the void from reading as flat pitch-black without introducing a second real color anywhere content lives.

### Named Rules
**The One Accent Rule.** Antique Gold is the only chromatic color in the system. Every other value is a neutral (black, white, or gray). If a new element needs emphasis, it earns Antique Gold or it stays neutral — it does not get a second color invented for it.

**The Rarity Rule.** The accent covers a small minority of any given viewport. If gold starts covering more than a nav item, a button, a tag, or a link at once, the restraint has failed.

## Typography

**Display / Body Font:** `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif`

**Character:** One system stack used for everything — headlines, body copy, labels, buttons. Hierarchy comes entirely from size, weight, and color, never from a second imported face. This is a deliberate reference to the subject's own craft: an Apple-platform engineer's site, built in the platform's own type system.

### Hierarchy

Six fixed steps carry every non-display role:

- **Display** (600, letter-spacing -0.02em): page-level `h1`s, in three deliberate emphasis tiers rather than one fixed size — a home page, a set of secondary content pages, and a dense reading page are not the same weight of "most important thing on screen." **Display** (`clamp(2.5rem, 6vw, 4.625rem)`, 74px ceiling) is reserved for the home page alone, the single most important surface. **Display Secondary** (`clamp(2.25rem, 5.5vw, 3.75rem)`, 60px ceiling) is shared identically by the two case-study pages (pragma, FinanceTracker). **Display Tertiary** (`clamp(2rem, 5vw, 3.25rem)`, 52px ceiling) is reserved for the About page, the site's long-form reading surface.
- **Headline** (600, 20px): section headers inside a page (`h2`, e.g. "The pipeline," "Architecture decisions," "Technical foundation").
- **Title** (600, 16px): every card and component title — case-study card `h3`, decision-card `h3`, pipeline-stage name, app name, app category headline.
- **Body** (400, 15px, line-height ~1.5–1.75 depending on the paragraph's density): primary paragraph copy — page subheads and long-form "what it proves"/About-page prose. Long paragraphs cap around 65–75ch via `max-width` rather than a fixed character count.
- **Small** (400, 13px, line-height ~1.4–1.65): secondary/card body copy, inline links, stat lines, "read more" affordances, technical-skill row text.
- **Micro** (400, 11px, tabular-nums where numeric): pipeline-stage numbers on the pragma page. Carries no explicit `font-weight` in the shipped CSS, so it renders at the inherited body weight (400).
- **Label** (400, 12px): header nav links only (the footer carries no text at this size anymore — it is copyright-only, set at the Small step). No uppercase/tracking treatment — this is utility text, not a kicker. The system has no eyebrow/kicker role: headings carry their own weight, full stop (see Named Rules).

The one deliberate exception to the Micro step: the **"Human approval" status tag** on a pipeline-stage card (`/work/pragma`) is 11px like Micro, but set uppercase, 600 weight, `letter-spacing: .05em`, and Antique Gold — a distinctly more emphatic treatment than any other 11px text on the site. It earns this because it is new, load-bearing information appearing *after* the stage heading (see The No-Kicker Rule below); it is not a second Micro variant to reuse elsewhere.

### Named Rules
**The Six-Step Rule.** Every non-display text on the site resolves to exactly one of Headline (20px) / Title (16px) / Body (15px) / Small (13px) / Micro (11px) / Label (12px). A new component reaches for the nearest existing step rather than introducing a seventh.
**The Three-Tier Display Rule.** A page's `h1` uses exactly one of the three named Display tiers, by the page's role, not by taste: Display for the home page only, Display Secondary for the two case-study pages (shared identically, never a fourth in-between value), Display Tertiary for the About page. A new page picks the tier matching its role instead of inventing a new ceiling.
**The Single-Face Rule.** No second font family is introduced for any role, including monospace or numeral display. Distinction comes from weight and size only.
**The No-Kicker Rule.** No small uppercase label ever sits above a heading to introduce it — this system shipped with one on every page ("LEAD IOS ENGINEER," "CASE STUDY," "SHIPPED WORK") and it was removed sitewide during finish review as a hard craft-floor ban with no exception: the heading carries its own weight, full stop. A status badge that sits *after* a heading and adds real new information (e.g. the "Human approval" tag on a pipeline-stage card) is a different pattern and stays allowed; a label that merely restates or categorizes what the heading already says does not.

## Layout

Every page shares one content rhythm: a `6vw` horizontal gutter, a `max-width` container (920–1180px depending on the page's density), and generous vertical rhythm between sections (`6–9vh` between major blocks). Two shared breakpoints govern every responsive collapse: **900px** (multi-column grids drop to two columns) and **560px** (everything drops to one column). The site header is the one layout element with its own tighter breakpoint (640px) for nav wrapping.

The header uses `flex-wrap` so the nav never overflows off-canvas on narrow viewports — it wraps onto a second line under the brand mark rather than clipping.

Internal spacing (card padding, grid gaps) sits in a loose 12–26px band rather than a strict multiple-of-8 scale; the `sm`/`md`/`lg` spacing tokens above describe the approximate rhythm, not literal values every component hits exactly.

### Named Rules
**The Two-Breakpoint Rule.** Every page-level grid collapses at the same two widths (900px, 560px). A new page introducing a third breakpoint value is drift, not a new pattern.

## Elevation & Depth

This system does not use drop-shadow as its primary depth device. Depth comes from **tonal/glass layering**: cards sit on `Glass Tint` with a `Hairline` border, a `backdrop-filter: blur(14px) saturate(1.3)`, and a soft 1px inner top highlight (`inset 0 1px 0 rgba(255,255,255,.05)`) that reads as a catch-light along the glass edge. Shadows are reserved for a small number of deliberate accent moments, not general elevation.

### Shadow Vocabulary
- **Icon lift** (`box-shadow: 0 2px 10px rgba(0,0,0,.35)`): the small drop-shadow under each real app icon image in the Shipped Apps section of the homepage, grounding a small raster image against the flat card.
- **CTA hover** (`box-shadow: 0 6px 20px rgba(201,161,90,.25)`): the resume button's hover state — the one moment a shadow signals "this is about to be pressed."

### Named Rules
**The Glass-Not-Shadow Rule.** A new card component gets a glass treatment (tint + blur + hairline border) by default. A drop-shadow is only added when it serves a specific, named purpose — never as a default "make it pop" move.

## Shapes

Three radius steps, used consistently by role: `8px` for buttons (the resume CTA), `11px` for small square media (app icons), `14px` for cards and full-width photographic images (every `.glass-card`, plus the case-thumbnail, pragma session image, and FinanceTracker screenshots, all `border-radius: 14px` with a Hairline border). No sharp corners and no fully circular elements. Borders are always the single `Hairline` value — never a second border color or weight. One deliberate exception: the `2px` radius on the keyboard-focus outline (Components → Focus State) — a tight radius that hugs inline text/link shapes rather than matching a card or button's rounding, since it's tracing a state indicator, not a container.

## Components

### Buttons
- **Shape:** 8px radius (`rounded.sm`).
- **Primary:** Antique Gold background, Void Black text, 11px/20px padding, 13px/600 weight. The only filled (non-glass) component in the system — its solidity is what marks it as the primary action.
- **Hover:** lifts 1px (`translateY(-1px)`) and gains the CTA-hover glow shadow. No color change.

### Cards
- **Corner style:** 14px radius.
- **Background:** Glass Tint (`rgba(255,255,255,.055)`) at rest.
- **Border:** Hairline, always 1px.
- **Two states, not one:** every card in the codebase is either **static** (decorative content — pipeline stages, architecture-decision cards) or **interactive** (an actual `<a>` — case-study cards, app cards). Interactive cards add a `.interactive` modifier: on hover, the border shifts to a translucent gold (`rgba(201,161,90,.4)`), the card lifts 3px, and the background brightens slightly (`rgba(255,255,255,.06)`). Static cards get none of this — they never signal clickability they don't have.
- **One confirmed local variant:** the two home-page case-study cards (`/`, `.case`) layer a diagonal gradient (`linear-gradient(155deg, rgba(255,255,255,.045), rgba(255,255,255,.015))`) over the standard glass background instead of the flat tint, while keeping the same blur, hairline border, and inner highlight. This is a page-local exception observed only on those two cards, not a second card token — a new card should default to the flat Glass Tint background unless there is a specific reason to reach for the gradient again.

### Named Rules
**The Honest Hover Rule.** A hover state is only ever added to an element that is actually a link or button. A card that only displays information never gets the interactive treatment, even if it would "look nice."

### Photographic Evidence (case thumbnails, session image, screenshot gallery)
Three real, distinct patterns, all sharing the same shape/border language (14px radius, Hairline border) rather than a decorative treatment:
- **Case thumbnail** (`.case-thumb`, home page): a 16:9 cropped image (`object-fit: cover; object-position: top`) capping each case-study card, full-bleed to the card's edges with a Hairline `border-bottom` separating it from the card's text. Used for the pragma workflow capture and the FinanceTracker dashboard screenshot.
- **Session image** (`.session-img`, `/work/pragma`): a single full-width capture of a real pragma pipeline session (`/case-thumbs/pragma.webp`), unmasked at its native aspect ratio, with the standard 14px radius + Hairline border.
- **Screenshot gallery** (`.shots img`, `/work/financetracker`): four real device screenshots at a 368:800 phone aspect ratio (`object-fit: cover`), laid out in a 4-column grid that collapses to 2 columns at 900px, each with the standard 14px radius + Hairline border.

### Navigation
- **Style:** 12px links, Muted Ash at rest, Paper White on hover, Antique Gold when active (marked with `aria-current="page"`). Header wraps via `flex-wrap` rather than collapsing into a hamburger menu — the nav is short enough (5 items: About Me, Resume, LinkedIn, Email, GitHub) to stay flat at every width. The nav is the site's only link list — every identity/contact link lives here, not in the footer.
- **Brand mark:** a 32×32 image badge (`/favicon.svg`) in `.site-header .brand`, replacing a former text wordmark. Lifts 1px on hover via the same supporting-motion easing as the rest of the header.
- **Footer:** copyright line only (`© [year] Akshay Pimprikar`), set at the Small step (13px), Muted Ash. Carries no links; it is not a navigation surface.

### Focus State
- **Style:** every link and button gets a 2px solid Antique Gold outline on `:focus-visible` (keyboard focus only, not mouse click), offset 3px from the element with a tight 2px corner radius.

## Do's and Don'ts

### Do:
- **Do** keep Antique Gold to a strict minority of any viewport — one accent, spent rarely.
- **Do** use the glass-card treatment (tint + blur + hairline) as the default for any new card; reach for a shadow only for a named, specific purpose.
- **Do** add the `.interactive` modifier only to elements that are real links or buttons.
- **Do** collapse every new responsive grid at exactly 900px and 560px, matching the rest of the system.
- **Do** use real screenshots or real captured sessions for any evidentiary image; give it the standard 14px radius + Hairline border rather than a decorative frame.
- **Do** keep every claim on the page backed by a real, checkable link or fact — this system's credibility is load-bearing.

### Don't:
- **Don't** introduce a second accent color, even for a "just this once" moment (an error state, a warning) — resolve those in neutral + Antique Gold first.
- **Don't** add a drop-shadow as a default elevation device; it reads as generic-template weight against this system's glass language.
- **Don't** give a static, non-clickable card a hover state. It is the single most common way this system's honesty breaks.
- **Don't** import a second typeface. Hierarchy is weight and size, not a serif/sans pairing.
- **Don't** add an eyebrow or kicker above a heading, ever, for any brief.
- **Don't** put a link list back in the footer — the nav is the system's one and only link surface; the footer stays copyright-only.
