# Riyadh Air Careers Platform — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. NOTE: this is a design-driven Next.js marketing site — "verification" means running the dev server and checking the browser preview + console for errors (via the preview_* tools), not unit tests.

**Goal:** Build an 8-page, presentation-quality demonstration of a redesigned Riyadh Air careers/employer-brand platform, in Riyadh Air's real brand identity, using the airline's own copy and imagery.

**Architecture:** Next.js (App Router) + Tailwind + TypeScript. Centralised brand tokens (Tailwind theme + CSS variables). Shared layout/UI component library enforces visual consistency across pages. Content lives in typed data modules so pages stay presentational. No back-end — forms are front-end demonstrations.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion (scroll reveals/parallax), deployed to Vercel.

---

## File structure

```
riyadh-air-careers/
  app/
    layout.tsx                 # root: fonts, <TopNav>, <Footer>, metadata
    globals.css                # tokens as CSS vars, base styles, font-face
    page.tsx                   # Home
    life/page.tsx              # Life at Riyadh Air
    teams/page.tsx             # Our Teams
    saudi-nationals/page.tsx   # Saudi Nationals (flagship)
    stories/page.tsx           # Our Stories
    journey/page.tsx           # Your Recruitment Journey
    events/page.tsx            # Events
    jobs/page.tsx              # Find Jobs
  components/
    layout/Container.tsx, Section.tsx, TopNav.tsx, Footer.tsx, ConceptBadge.tsx
    ui/Button.tsx, StatTile.tsx, Card.tsx, Badge.tsx, SectionHeading.tsx, Reveal.tsx, JobSearchBar.tsx
    home/  (Hero, NawatBanner, WhyRiyadhAir, FeaturedRoles, Stories, BenefitsTeaser, LifeInRiyadh, TalentCommunity)
    teams/, stories/, journey/, events/, jobs/, saudi/  (page-specific sections)
  lib/
    content.ts                 # harvested real copy (verbatim) + illustrative additions (flagged)
    brand.ts                   # token constants (hex, gradients) shared with tailwind config
    jobs.ts, teams.ts, stories.ts, events.ts, programmes.ts  # typed demo data
  public/brand/                # harvested Riyadh Air imagery + logo
  tailwind.config.ts
```

Token source of truth (from live site CSS):
- indigo: `#080212 #0e0321 #170533 #1d0641 #250854 #503974 #7d6d97 #a79cba #d4cfdd #f4f3f6`; indigo-vivid `#3d3899`
- lavender: `#1a1933 #333267 #4d4c9a #6866cc` (+ lighter tints to compute), peach accent (warm), iridescent gradients.

---

## Phase 0 — Scaffold & brand foundation

### Task 1: Scaffold Next.js app
**Files:** create app via CLI in `riyadh-air-careers/`.
- [ ] Run: `npx create-next-app@latest . --ts --tailwind --app --eslint --src-dir=false --import-alias "@/*" --no-turbopack` (answer non-interactively).
- [ ] Run `npm run dev`; start preview; confirm default page renders with no console errors.
- [ ] Verify: preview screenshot shows Next default page.

### Task 2: Brand tokens + global styles
**Files:** `lib/brand.ts`, `tailwind.config.ts`, `app/globals.css`.
- [ ] `lib/brand.ts`: export `colors` (full indigo/lavender ramps + peach), `gradients` (heroWash, button, card) as strings.
- [ ] `tailwind.config.ts`: extend theme `colors` (indigo, lavender, peach, ink), `borderRadius` (sm .5rem, md 1rem, lg 2.5rem, pill 100px), `fontFamily` (display, sans).
- [ ] `globals.css`: CSS vars mirroring tokens; base `body` (ink bg option / light surfaces), selection colour, smooth scroll, default text colour, heading styles; iridescent gradient utility classes.
- [ ] Verify: add a temp swatch row to home, screenshot, confirm exact hexes render; then remove temp swatches.

### Task 3: Typography (attempt real brand font, else premium fallback)
**Files:** `app/layout.tsx`, `app/globals.css`, `public/brand/fonts/` (if usable).
- [ ] Try to harvest Riyadh Air's brand webfont URLs from live CSS; if openly loadable, self-host via `@font-face`. If not, pair a high-contrast display face (e.g. a refined serif/grotesque from next/font Google — candidate: "Fraunces" or "Marcellus" for display, "Inter"/"DM Sans" for body) chosen to echo the calligraphic character.
- [ ] Wire display + body fonts through layout + tailwind `fontFamily`.
- [ ] Verify: headings render in display face, body in sans; screenshot.

### Task 4: Harvest real content & imagery
**Files:** `lib/content.ts`, `public/brand/*`.
- [ ] Via Claude-in-Chrome: pull careers + home + department page copy (`get_page_text`) and image URLs (`javascript_tool`, strip query strings). Download key images into `public/brand/`.
- [ ] `lib/content.ts`: store verbatim real strings (hero, NAWAT, Why pillars, benefits) + flagged-illustrative additions.
- [ ] Verify: content module imports cleanly (`npm run build` typecheck of the module via a temp import).

---

## Phase 1 — Shared component library

### Task 5: Layout primitives + Reveal
**Files:** `components/layout/Container.tsx`, `Section.tsx`, `components/ui/Reveal.tsx`.
- [ ] `Container`: max-width 1200px, responsive gutters. `Section`: vertical rhythm + optional `tone` (indigo canvas / light). `Reveal`: Framer Motion fade/translate on inview (install `framer-motion`).
- [ ] Verify: temp usage renders; no console errors.

### Task 6: UI atoms
**Files:** `components/ui/Button.tsx`, `Badge.tsx`, `StatTile.tsx`, `Card.tsx`, `SectionHeading.tsx`, `JobSearchBar.tsx`.
- [ ] `Button` variants: `primary` (iridescent gradient fill, pill), `ghost` (lavender outline on indigo), `light`. Hover lift.
- [ ] `StatTile`: big number + label, for credibility tiles. `Card`: rounded-lg surface w/ hover lift + optional image. `SectionHeading`: eyebrow + title + intro. `Badge`: pill (e.g. "NAWAT", "Saudi Nationals"). `JobSearchBar`: keyword + location + filter button (front-end only).
- [ ] Verify: a temp "kitchen sink" route shows all atoms; screenshot; then delete temp route.

### Task 7: TopNav + Footer + ConceptBadge
**Files:** `components/layout/TopNav.tsx`, `Footer.tsx`, `ConceptBadge.tsx`, wire into `app/layout.tsx`.
- [ ] `TopNav`: sticky, transparent-over-hero → solid on scroll; 7 nav links; **Find Jobs** as iridescent button. Mobile menu.
- [ ] `Footer`: brand sign-off, nav, and discreet "Independent concept by Iain McMullan" + one-line "why I built this" link/modal.
- [ ] `ConceptBadge`: small fixed-corner ribbon "Independent concept — not affiliated with Riyadh Air" (tasteful, low-opacity).
- [ ] Verify: nav sticks + restyles on scroll across two routes; screenshot desktop + mobile widths (preview_resize).

---

## Phase 2 — Home page (sets the quality bar)

Each task below = one `components/home/*` section, then assembled in `app/page.tsx`. Verify each with a preview screenshot; fix until it reads "shipped."

### Task 8: Hero
- [ ] Indigo dusk canvas + iridescent wash + subtle parallax; H1 leading with new-national-carrier identity; embedded `JobSearchBar`; four credibility `StatTile`s (100+ destinations by 2030, 200,000+ sector jobs, fleet ambition, founded 2025). Real/honest figures from deck + site.
- [ ] Verify: screenshot; check contrast of text on indigo.

### Task 9: NAWAT / Saudi Nationals full-width banner
- [ ] High-contrast full-width band elevating NAWAT; real NAWAT copy; CTA → `/saudi-nationals`.

### Task 10: Why Riyadh Air
- [ ] Three editorial cards using the **real** pillars (Digitally native & innovative / Career growth & compensation / Culture & environment) with real copy.

### Task 11: Featured Roles
- [ ] Live-style grid from `lib/jobs.ts`; NAWAT card accented; team/location/type tags; link to `/jobs`.

### Task 12: Employee Stories
- [ ] Three story cards (Saudi national / international pilot / corporate hire) — illustrative, clearly labelled; link to `/stories`.

### Task 13: Benefits Teaser
- [ ] Four-tile summary (travel, accommodation, development, health) → `/life`.

### Task 14: Life in Riyadh
- [ ] Image-led section for international/relocation candidates; teaser → `/life`.

### Task 15: Talent Community + assemble Home
- [ ] Email-capture band (front-end only, success state in-page). Assemble all sections in `app/page.tsx`.
- [ ] Verify: full-page screenshot top-to-bottom; check console clean; **this is the agreed quality bar** — share screenshot with Iain before Phase 3.

---

## Phase 3 — Remaining seven pages (match the bar)

Each: build page-specific sections (sub-nav where specified), assemble, verify with screenshot + console check. Follow the wireframe intent in the spec/deck.

- [ ] **Task 16 — Life at Riyadh Air** (`app/life/page.tsx`): sub-nav; hero; Culture pillars; Rewards & Benefits alternating panels; D&I (data-led); Sustainability tiles; Wellbeing; Life in Riyadh expanded; leadership quote; dual CTA.
- [ ] **Task 17 — Our Teams** (`app/teams/page.tsx`): hero; team selector tabs (Cabin Crew default) loading a detail panel; all-teams grid (Saudi Nationals card accented); day-in-the-life trio; dual CTA. Data in `lib/teams.ts`.
- [ ] **Task 18 — Saudi Nationals** (`app/saudi-nationals/page.tsx`, flagship): most prominent hero, possessive language; 6-step NAWAT process track; leadership quote; Vision 2030 strip; stats bar; programmes grid (`lib/programmes.ts`); Saudi-national stories (illustrative); mirrored CTA.
- [ ] **Task 19 — Our Stories** (`app/stories/page.tsx`): editorial hero; format filters; featured Saudi/NAWAT story; stories grid; video stories; career-journey timelines; nationalities spotlight; warm CTA. Data in `lib/stories.ts`.
- [ ] **Task 20 — Your Recruitment Journey** (`app/journey/page.tsx`): lighter informational hero; commitment strip; "choose your path" (Cabin Crew / Pilots / Corporate & Engineering) → process track; application tips do/don't; FAQs (incl. fraud Q); high-contrast **Fraud Warning** block; talent community.
- [ ] **Task 21 — Events** (`app/events/page.tsx`): hero with four stat tiles; filter bar + region; open-days grid (5 dated + 1 "coming soon"); webinar strip (AR/EN); specialist/corporate events; month calendar view; event alerts capture. Data in `lib/events.ts`.
- [ ] **Task 22 — Find Jobs** (`app/jobs/page.tsx`): branded hero + search (primary); job-alert bar; filters sidebar (Team/Location/Contract/Level/Saudi-Nationals toggle); job listings (featured first, NAWAT badged); saved-jobs/alerts utility strip; tasteful iCIMS attribution note; talent community close.

---

## Phase 4 — Polish, accessibility & deploy

### Task 23: Responsive, motion & a11y pass
- [ ] Check every page at mobile/tablet/desktop (preview_resize); fix overflow/spacing. Add tasteful Arabic/RTL nod (note or toggle). Ensure alt text, focus rings, heading order, contrast on indigo. Tune motion timing.
- [ ] Verify: screenshots at 3 widths for 2-3 representative pages; console clean.

### Task 24: Production build + deploy
- [ ] Run `npm run build`; fix any build errors.
- [ ] Deploy to Vercel (requires Iain's `vercel login` at this step); capture live URL.
- [ ] Verify: live URL loads all 8 pages; share with Iain.

---

## Self-review (plan vs spec)
- Spec's 8 pages → Tasks 8–22 cover each. ✓
- Brand fidelity (indigo/lavender/peach/iridescence/geometry) → Tasks 2–3, enforced via tokens/atoms. ✓
- Real copy + imagery, illustrative flagged → Task 4 + per-section. ✓
- Saudi Nationals & Life deepest → Tasks 16, 18 are largest. ✓
- Signature + "why I built this" → Task 7. ✓
- Local run + screenshots + deploy → Tasks 15, 23, 24. ✓
- Forms front-end only → Tasks 6/15/22 note no back-end. ✓
- RTL/a11y nod → Task 23. ✓
```
