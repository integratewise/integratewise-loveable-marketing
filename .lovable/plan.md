# IntegrateWise — Site Build Plan (Nexify Theme + Blueprint)

Rebuild the public marketing site to match the uploaded **Site & Product Blueprint** (vocabulary, narrative, IA) styled with the uploaded **Nexify theme** (`integratewise-nexify-theme.css`).

---

## 1. Design system (locked — Nexify)

The uploaded CSS is the single source of truth. We import it as `src/styles/theme.css`, then mirror its tokens into Tailwind v4's `@theme` block so utilities resolve.

**Foundations**
- Page bg `#111111` · Card `#1C1C1C` · Elevated `#232323` · Overlay `rgba(17,17,17,.72)`
- Text primary `#FFFFFF` · secondary `#9CA3AF` · muted `rgba(255,255,255,.65)`
- Borders subtle `rgba(255,255,255,.10)` · strong `.18` · interactive `rgba(251,191,36,.45)`

**Brand**
- Accent **peach** `#FFE1CC` → blends to white in gradients
- Highlight **amber** `#FBBF24` — used for interactive/focus rings, badge text, "Live" status
- Hero & H1 use `--gradient-heading-highlight` (peach→white, clipped to text)

**Status:** success `#22C55E` · warning `#FBBF24` · error `#F87171` · info `#60A5FA`

**Type (Inter)**
- Display 72/56/40 · H1 64/48/36 · H2 44/36/30 · H3 28/24/22
- Body lg 20/1.6 · body 16/1.7 · label 14 · nav 15 · button 16
- Tight letter-spacing on display/H1/H2 (`-0.04` to `-0.03em`)

**Layout & spacing**
- Container max **1280px**, section padding **128/96/64px**
- 8-step spacing scale (4 → 128px)
- Grid gaps 32/24/20

**Radii:** button-sm 8 · button-md 12 · card 16 · card-lg 24 · pill 999

**Components (recipes baked in the CSS)**
- **Primary button** — peach→white gradient bg, `#111` text, 12px radius, `0 10px 30px rgba(255,225,204,.18)` glow → `.24` on hover
- **Secondary button** — `rgba(255,255,255,.02)` bg, `.12` border → hover border turns amber `.45`
- **Card** — `#1C1C1C` bg, subtle border, `0 20px 60px rgba(0,0,0,.35)` shadow; hover lifts shadow + amber border
- **Glass nav** — `rgba(17,17,17,.72)` + 12px blur + `.08` border, 72px tall, 16px radius
- **Badge** — amber tint pill (`bg #FBBF24/12`, text `#FBBF24`, border `#FBBF24/28`)
- **Input** — `#1C1C1C` bg, 12px radius, focus border amber `.45`
- **Transitions** — 300ms ease across buttons/cards

**Effects**
- Card glow: `--gradient-card-glow` radial peach at top-left of feature cards
- Marquee: 20s linear infinite for any logo/connector strip
- Respects `prefers-reduced-motion`

---

## 2. Vocabulary lock

**Use exactly:** Spine · Memory · Workbench · Twin · Approval · Reference Layer · Customer Zero · Human API. Approved phrases: *"Separate memories. Coherent life."* · *"Private by architecture. Shared by choice. Guided by you."*

**Retire everywhere:** Adaptive Spine · Adaptive Opus · Three Data Ecosystems · single shared pool · Cognitive OS · 8-stage normalizer · System of Context · B2B enterprise platform · Start Free · Start Free Trial · No credit card required · 14-day free trial · Connect in 2 minutes.

**Tool-word hierarchy** (avoid generic "tools" everywhere): *Apps* (homepage), *Systems* (trust/platform), *Sources* (ingestion), *Work tools* (product context).

---

## 3. Information architecture (real routes, no hash nav)

```text
/                                  Home
/manifesto                         Manifesto

/platform                          Platform overview
/platform/how-it-works             5-step flow into Memory
/platform/the-spine                What the Spine is
/platform/integrations             Connector catalog (Live / Coming Soon badges)
/platform/security                 Four promises + data protection
/platform/infrastructure           Speed, durability, model flexibility

/product                           Product overview
/product/workbench                 Canonical Workbench page
/product/the-twin                  What the Twin does / does not
/product/approval                  Approval gate
/product/reference-layer           Separate memories. Coherent life.
/product/how-it-works              Watch · Suggest · Approve · Act · Learn

/solutions                         Solutions hub
/solutions/account-success
/solutions/business-ops
/solutions/sales-ops
/solutions/finance-ops
/solutions/personal-ops            (Waitlist CTA + Waitlist badge)
/solutions/by-industry             Industry index
/solutions/by-industry/$industry   Dynamic industry-detail template

/pricing                           Starter / Growth / Command
/customer-zero                     Founder story
/contact                           Demo + general contact form
```

Each route ships its own `head()` (title, description, og:title, og:description). Per-route `og:image` only where a meaningful share image exists.

---

## 4. Page narrative pattern (every content page)

```text
Hero  →  Problem (pain)  →  Hidden cost (consequence)  →  Core promise
     →  Simple how (5 steps)  →  Trust / control (4 guardrails)
     →  What this looks like (Workbench preview)  →  Before vs After
     →  Example output (Acme Corp card)  →  CTA
```

Headline copy taken verbatim from the blueprint. Sections built from a small set of reusable components (`Hero`, `NarrativeBlock`, `FiveSteps`, `TrustWalls`, `BeforeAfter`, `ExampleOutput`, `CTAStrip`) so new pages are fast to assemble.

---

## 5. The Workbench demo (centerpiece)

Static, JSON-driven, no live API. Reused across Home, `/product/workbench`, every Solutions page, every Industry page.

- **Left column:** Memory cards (entity facts: e.g., "Acme Corp · Usage down 32% · 2 tickets open · Renewal in 21 days")
- **Right column:** Twin Suggestion panel — what it wants to do, why, what it looked at, confidence, what will happen if approved
- **Bottom bar:** **Approve · Edit · Reject** buttons (visual; clicking shows a confirmation toast)

Per-page JSON in `src/content/workbench-scenarios.ts` swaps the entity/signals/suggestion so Account Success shows churn risk, Finance Ops shows an invoice story, etc.

---

## 6. CTA discipline

| CTA | Where | Behavior |
|---|---|---|
| **Book a Demo** | Primary on Home, Platform, Product, Twin, Solutions (except Personal), Pricing, Industry pages, sticky nav | Opens demo form modal → Cloud `demo_requests` |
| **Join Early Access** | Secondary in hero / footer | Cloud `early_access` |
| **Join the Waitlist** | Personal Ops card + page, Customer Zero | Cloud `waitlist` (with source page) |
| **Request a Connector** | `/platform/integrations` | Cloud `connector_requests` |

Personal Ops solution card carries a visible **Waitlist** badge (amber pill).

Hero trust strip (replacing forbidden trial badges): **SOC 2 Compliant · Approval-gated · Memory stays yours**.

---

## 7. Forms (Lovable Cloud)

Four insert-only Cloud tables with no select for anonymous:
- `demo_requests` — name, work email, company, role, main use case, team size, notes
- `early_access` — email, optional role
- `waitlist` — email, source page
- `connector_requests` — connector name, email, optional notes

Each form: inline validation, thank-you state, writes via a TanStack Start server function. No auth required.

---

## 8. Visual & motion details

- Floating background **peach + warm-purple orbs** at very low opacity (0.04) drifting slowly — keeps the staging vibe but with Nexify hues
- H1 uses the peach→white gradient text treatment from `--gradient-heading-highlight`
- Section bands alternate `--bg-base` (#111) and a slightly darker `#0E0E0E` for rhythm
- Cards use `--gradient-card-glow` radial in the top-left on hover for a subtle warm halo
- Primary CTA shows the peach glow shadow; on hover the shadow expands (token already defined)
- Connector strip uses `--transition-marquee` 20s linear loop
- Subtle scroll fade-up reveal (300ms, ease) on every section
- Cursor spotlight effect on dark sections (optional, off when reduced-motion)

---

## 9. Build order

1. **Theme foundation** — drop `integratewise-nexify-theme.css` into `src/styles/theme.css`, wire into `src/styles.css`, mirror tokens into Tailwind v4 `@theme`, update shadcn/ui base components to consume them
2. **Shell** — glass nav (Platform · Product · Solutions · Pricing · Twin · Company + sticky **Book a Demo**), footer, reusable section components, Workbench demo component, three form modals
3. **Home + Manifesto** — full narrative arc end-to-end as the reference page
4. **Platform cluster** (overview + 5 sub-pages)
5. **Product cluster** (overview + 5 sub-pages incl. canonical Workbench)
6. **Solutions cluster** (hub + 5 role pages + by-industry index + dynamic industry template)
7. **Pricing, Customer Zero, Contact**
8. **Cloud forms** wired and tested with a real submission
9. **QA pass** — vocabulary audit (zero retired terms), CTA audit (zero forbidden CTAs), per-route meta check, mobile layout pass, reduced-motion check

---

## 10. Technical notes (for the builder)

- TanStack Start file-based routes; dynamic industry route is `solutions.by-industry.$industry.tsx`
- `Workbench` is a single component taking `{ entity, memoryCards, suggestion }`; data lives in `src/content/workbench-scenarios.ts`
- Page copy lives co-located in each route file (no CMS) so it ships with SSR
- Forms use TanStack Start server functions writing to Lovable Cloud tables with insert-only RLS
- Strict TS, named exports, no `any`, no `console.log` in shipped code
- Every route defines `errorComponent` and `notFoundComponent`; root has a 404 boundary; router has `defaultErrorComponent`

---

## 11. Out of scope

- No live integrations, no real OAuth, no real Twin/LLM calls (Workbench is a static showcase)
- No customer login, no in-app dashboard
- No blog / changelog (can be added later)
- English only for v1

When you approve, I switch to build mode and ship this end to end.