# Riyadh Air Careers Platform — Demonstration Site
**Design spec · 14 June 2026 · Iain McMullan**

## Purpose
An independent, presentation-quality demonstration of a redesigned Riyadh Air careers/employer-brand
platform, built to win Iain a meeting with Riyadh Air senior management (marketing / digital / employer
brand). It turns his 28-page proposal deck into a living, clickable site rendered in Riyadh Air's real
brand identity, using the airline's own copy and imagery wherever possible.

Success = a senior Riyadh Air leader opens the link and thinks *"this person already understands us — we
need to talk to them."*

## Audience & tone
- Primary viewer: Riyadh Air senior leadership (non-technical execs) + Talent/Employer-Brand team.
- Tone: confident but **generous** — positioned as a gift and a vision, never a critique of their team.
  Frame as "building on a clean, strong foundation."
- Carries a discreet "Independent concept by Iain McMullan" signature and a short "why I built this" note.

## Scope
Eight pages, every one to flagship / presentation finish:
1. **Home**
2. **Life at Riyadh Air** — Culture, Rewards & Benefits, D&I, Sustainability, Wellbeing, Life in Riyadh
3. **Our Teams** — Cabin Crew (default), Pilots, Engineering, Operations & Corporate, Cargo & Airport Ops, Customer Services
4. **Saudi Nationals** (emotional flagship) — NAWAT + programmes, Vision 2030, process track
5. **Our Stories** — Profiles, Day in the Life, Video, Career Journeys, Nationalities Spotlight
6. **Your Recruitment Journey** — process tracks by role type, tips, FAQs, fraud warning
7. **Events** — calendar, filters, open days, webinars, alerts
8. **Find Jobs** — branded search environment, smart filters, job cards, talent community, iCIMS attribution

Out of scope: real ATS/iCIMS integration, real form submission/back-end, authentication. Forms are
front-end demonstrations (no data leaves the browser). "Find Jobs" simulates listings; a clear, tasteful
note attributes the real application route to iCIMS.

## Build order (de-risked)
1. Scaffold + design system + shared components (nav, footer, buttons, cards, section primitives).
2. Build **Home** to full finish → run locally → screenshot for Iain → agree the quality bar.
3. Build remaining seven pages to match that bar.
4. Deploy to a live shareable URL (Vercel) — requires Iain's Vercel login at that step.

## Design system (extracted from Riyadh Air's live site CSS — exact)
- **Indigo (dusk-sky canvases):** `#080212 #0e0321 #170533 #1d0641 #250854 #503974 #7d6d97 #a79cba #d4cfdd #f4f3f6`; vivid indigo `#3d3899`.
- **Lavender (primary brand):** `#1a1933 #333267 #4d4c9a #6866cc` (signature periwinkle), lightening up-scale.
- **Sunset peach:** single warm accent, used sparingly (brand secondary per PriestmanGoode identity).
- **Iridescent gradients:** recreate `purple-bg-gradient` / `primary-button-gradient` for hero washes & buttons.
- **Typography:** attempt to load Riyadh Air's real brand webfont for display; fallback = high-contrast
  display face echoing Arabic-calligraphy character + clean sans for body.
- **Geometry:** real radius scale (up to 2.5rem cards / 100px pills) + generous spacing scale.
- **Motion:** restrained, premium — scroll reveals, hero parallax drift, card hover lifts. No gimmicks.
- Sticky top nav on all pages; **Find Jobs** as a distinct iridescent button, always visible.

## Content & imagery
- Reuse Riyadh Air's **real copy** verbatim where harvested (e.g. "Your career takes off here"; the real
  NAWAT description — 8-month programme with Bunyan for Training Company, preparing Saudi men & women for
  the Inflight Experience Team; the real "Why Riyadh Air?" pillars and benefits).
- Reuse Riyadh Air's **real photography** (harvested image URLs) for the demo. Any copy Iain adds for depth
  is clearly marked illustrative. Employee "stories"/quotes are clearly labelled illustrative until real
  ones exist.
- Harvesting method: `riyadhair.com` blocks WebFetch (403) — pull content via Claude-in-Chrome MCP
  (`get_page_text`, `javascript_tool` for image URLs; strip query strings).
- IP note: appropriate for a private pitch; if hosted publicly, badge clearly as an independent concept,
  no implied affiliation, ready to swap to licensed/stock imagery.

## Technical approach
- **Next.js (App Router) + Tailwind CSS**, TypeScript, component-driven.
- Brand tokens centralised (Tailwind theme + CSS variables) so the system is consistent and editable.
- Self-contained: no back-end, no secrets. Static-exportable / Vercel-deployable.
- Accessible (semantic HTML, alt text, focus states, colour-contrast checked on indigo canvases).
- Responsive: mobile-first; a considered nod to Arabic/RTL (at minimum a tasteful note/toggle).
- Isolated in `riyadh-air-careers/` inside the working directory.

## Acceptance criteria
- All 8 pages present, navigable via a working sticky nav, and visually consistent.
- Brand fidelity: indigo/lavender/peach + iridescence + correct geometry; reads as unmistakably Riyadh Air.
- Real Riyadh Air copy and imagery used where available; additions marked illustrative.
- Saudi Nationals and Life at Riyadh Air reach the deepest, most emotive finish.
- Runs locally with no errors; screenshots demonstrate the finish; deployable to a live URL.
- Carries the discreet Iain McMullan signature + "why I built this".
