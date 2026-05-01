# Pandawa-style structure + IntegrateWise theme — with Solutions ▾ restored

**Source of truth.** Reference the canonical IntegrateWise HOME (`/`) in Lovable for hero copy and Workbench/Attention layout. Do **not** change the H1 "Your work resets every day." `integratewise.ai` may be used **only** for connector-strip details and the dark-glass aesthetic — **not** for narrative or headlines. Pandawa is the **layout** inspiration, not the **copy** inspiration.

We adopt **Pandawa's IA, section rhythm, and motion** as the structural blueprint, keep the existing **IntegrateWise dark theme** and locked vocabulary, and enforce the 60% visuals / 40% content rule.

---

## 0. Kill list (never use in copy or CTAs)

`start writing` · `free trial` · `no credit card required` · `connect your stack` · `no-code workflow builder` · `get started in minutes` · `start in 60 seconds` · `human API between your tools` · `start free` · `connect in 2 minutes` · `Adaptive Spine` · `Adaptive Workbench` · `Adaptive Twin` · `Workbench` (as a user-facing surface label — file/component identifiers are exempt) · `Entity 360` · `Cognitive OS`.

If a Pandawa-style SaaS phrase tries to leak into a heading, sub, button, or FAQ — replace it with our locked vocabulary (Memory · Attention Layer · Workspace · Twin · Approval).

### Locked vocabulary additions

- **Workspace** is the canonical product surface name (file/component identifiers — `Workbench`, `WorkbenchFrame`, `WorkbenchMorph`, `WorkbenchScenario`, `ProductVideo` — are unchanged to avoid churn; only display strings use "Workspace").
- **Twin** is a first-class noun. Top-nav menu label is **Intelligence**; the page is `/twin` (single long page) and its hero anchor is `#twin`. The "Intelligence" wrapper avoids "Twin > Twin" repetition and leaves room for additional Intelligence surfaces.
- **Spine** is the canonical Platform name (`/platform`, single long page). The "Adaptive" prefix is fully retired across all three pillars.
- **Memory copy tokens** (canonical, defined in `src/lib/site.ts` as `MEMORY_COPY` — reuse verbatim, never paraphrase):
  - `MEMORY_COPY.primary`: "Digital Memory accumulates with every update, every decision, and every interaction — then gets reused by your Workspace, your Twin, and your team."
  - `MEMORY_COPY.short`: "Memory compounds. Context improves. Decisions get faster."
  - Used **once each** on: Home, `/platform#digital-memory`, `/product#digital-memory`, `/twin#digital-memory-reference`.
- Footer "Spine" link routes to `/platform#spine`. Footer Intelligence column "Twin" link routes to `/twin#twin`.
- Footer **Resources** column is removed; those links live under the Company menu. Company column trimmed to **5 items** (About, Manifesto, Customer Zero, Why, Contact); Blog/Docs/Changelog/Pricing routes remain live but are not in the footer column.

---

## 1. Top navigation — final shape

```text
Platform ▾   Product ▾   Intelligence ▾   Solutions ▾   Pricing   Company ▾            [ Book a Demo ]
```

`Platform`, `Product`, and `Intelligence` are each a **single long page** (`/platform`, `/product`, `/twin`). Their dropdowns are **in-page anchor links that scroll** — no child routes.
`Resources` is no longer in the top nav — its links moved under **Company ▾**. The `/resources` route still exists.

### Solutions ▾ dropdown (3-column mega: By Use Case · By Role · By Industry)

The first column ("By Use Case") = the three concept pages. Role and Industry slices are flat columns surfaced from `SOLUTIONS_BY_ROLE` and `SOLUTIONS_BY_INDUSTRY`. Footer link in the mega: **All solutions → `/solutions`**.

```text
┌── BY USE CASE ────────┬── BY ROLE ─────────┬── BY INDUSTRY ────────┐
│ Account Success       │ Founder            │ SaaS                  │
│ Business Ops          │ Account Lead       │ Agency                │
│ Personal Space [WL]   │ Ops                │ Manufacturing         │
│                       │ Delivery           │ Retail                │
│                       │ Finance            │ Professional Services │
│                       │ Individual         │ Finance               │
└───────────────────────┴────────────────────┴───────────────────────┘
                            [ All solutions → /solutions ]
```

`/solutions/industry` and `/solutions/role` (hash-driven sliders, powered by `HashSlider`) remain live for back-compat but are **not surfaced in the dropdown**. The richer `/solutions/by-industry/$industry` deep-link page still exists.

### Platform ▾ dropdown (in-page anchors on `/platform`)

- Spine → `/platform#spine`
- How it works → `/platform#how-it-works`
- Digital Memory → `/platform#digital-memory`
- Connectors → `/platform#connectors`
- Security → `/platform#security`
- Integrations → `/platform#integrations`

### Product ▾ dropdown (in-page anchors on `/product`)

- Workspace → `/product#workspace`
- How it works → `/product#how-it-works`
- Digital Memory → `/product#digital-memory`
- Security → `/product#security`

### Intelligence ▾ dropdown (in-page anchors on `/twin`)

- Twin → `/twin#twin`
- How it works → `/twin#how-it-works`
- Digital Memory Reference → `/twin#digital-memory-reference`
- Twin Execution → `/twin#twin-execution`
- Security → `/twin#security`

> Order note: on `/twin`, **Twin Execution precedes Security** (intentional — "what Twin does" is a more compelling story than "how Twin is locked down" before the reader has seen Twin act).

### Other dropdowns

- **Company ▾** — About, Manifesto, Customer Zero, Why, Contact (5 items)
- **Pricing** — single top-level link (route remains live)

### Removed routes (deleted)

- `/platform/infrastructure`
- `/product/approval`
- `/product/reference-layer`

### Back-compat redirects (old child routes → new pillar anchors)

- `/platform/the-spine` → `/platform#spine`
- `/platform/memory` → `/platform#digital-memory`
- `/platform/integrations` → `/platform#integrations`
- `/platform/security` → `/platform#security`
- `/platform/how-it-works` → `/platform#how-it-works`
- `/product/the-twin` → `/twin`
- `/product/workbench` → `/product#workspace`
- `/product/how-it-works` → `/product#how-it-works`

Mobile: same groups in a sheet drawer; **Book a Demo** pinned bottom.

---

## 2. Home page — Pandawa rhythm, IntegrateWise voice

```text
1.  Hero split          Headline + sub left · Attention+Workspace right
2.  Connector marquee   Existing ConnectorMarquee (12 logos)
3.  Pain trio           3 operator quotes (Account · Ops · Founder)
4.  Features grid       5 cards: Memory · Attention · Workspace · Twin · Approval
5.  Speed strip         Auto-context · Drag-approve · Keyboard-first
6.  How it works (4)    Open → See changes → Twin proposes → You approve
7.  Unfair advantage    Twin vs Other AI (5-row comparison)
8.  Solutions doors     3 doors mirroring the dropdown (Account Success · Business Ops · Personal Space)
9.  Integrations grid   3×4 connector tiles
10. Testimonials        4 operator quotes (placeholder)
11. Pricing teaser      3 tiers, links to /pricing
12. Founder block       Portrait + Customer Zero cameo
13. FAQ accordion       6 founder-led Qs
14. Closing CTA band    Full-bleed: "Stop the reset. Book a Demo."
```

**AnnouncementBar removed from Home.** The "NEW Spine 2.0" promo strip no longer renders. The component file is kept (unused) so it can be reintroduced later without re-creation.

### Hero constraints (locked)

- **H1:** "Your work resets every day."
- **Subcopy:** from canonical HOME (the Gmail / Slack / yesterday's notes reset story ending in "Within seconds of opening, you see what changed.").
- **Layout:** Headline + sub on the left; on the right, the **Attention strip (3 signals)** sits **above** the **Workspace** (Memory cards left, Twin suggestion right, Approve / Edit / Reject controls).
- **Above-the-fold rule (locked, desktop ≥1024px):** The hero must always render the **Attention strip + Workspace combo above the fold** on desktop. Implementation rules so this never regresses:
  - Hero section uses `min-h-[calc(100svh-var(--header-h))]` and a 2-column grid (`lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]`).
  - Right column is a single stacked unit: `AttentionLayer` on top, `Workbench` (component name; user-facing label "Workspace") directly below, both inside one card container so they scroll/scale together.
  - Header height + hero top padding combined ≤ 160px on `lg`. (AnnouncementBar no longer renders on Home, so it's out of the fold budget.)
  - On viewports `<lg`, the right column stacks **below** the headline (mobile-only exception — desktop must keep both visible without scrolling at 1366×768 and 1440×900).
  - Add a Playwright/visual smoke check (or at minimum a manual viewport pass at 1280, 1366, 1440, 1536, 1920) before merging hero edits.
- **CTAs:** Primary **Book a Demo**, secondary **Join Early Access**. No kill-list phrases.
- **Tablet/mobile:** Attention + Workspace stack vertically below the headline; above-the-fold rule does not apply below `lg`.

---

## 3. /solutions hub — 3 doors only

The hub now surfaces the **3 concept pages** only — no By-Role / By-Industry mega-menu, no By-Function column. Internal "By Role / By Industry / By Domain" tabs inside each concept page are a future iteration (not built yet).

```text
The 3 doors
────────────
Account Success    → /solutions/account-success
Business Ops       → /solutions/business-ops
Personal Space*    → /solutions/personal-space    * Waitlist
```

`/solutions/industry` and `/solutions/role` (hash-driven sliders) and `/solutions/by-industry/$industry` (richer per-industry deep-link page) all remain live but are not surfaced from the hub or the dropdown.

**Copy reuse rule:** Reuse the existing "Three doors in" copy verbatim for Account Success / Business Ops / Personal Space.

Locked one-liners:
- **Account Success** — "Walk into every customer conversation already knowing what changed."
- **Business Ops** — "One screen. Everything that changed since Friday."
- **Personal Space [Waitlist]** — "Your day, finally assembled."

---

## 4. New / refactored components

| Component | Status | Purpose |
|---|---|---|
| `AnnouncementBar` | new (file kept, **unused**) | Thin top bar above header — no longer rendered on Home; component file retained for future reuse |
| `Header` | refactor | Mega-menu dropdowns; **Solutions ▾** is a single-column 3-door list (mega-menu removed); Platform / Product / Twin dropdowns are in-page anchor links |
| `SolutionsMegaMenu` | removed | The 3-column "By Function · By Industry · By Role" mega-menu is gone; Solutions ▾ is now a flat 3-item dropdown |
| `SectionNav` | new | Sticky in-page anchor nav used on the three pillar pages (`/platform`, `/product`, `/twin`) (`src/components/site/SectionNav.tsx`) |
| `HashSlider` | new | Hash-driven slider powering `/solutions/industry` and `/solutions/role` (`src/components/site/HashSlider.tsx`) |
| `HeroFoldGuard` | new (dev-only) | Optional dev overlay marking the fold line at common desktop heights |
| `PainTrio` | new | 3 operator quote cards |
| `FeatureCardGrid` | new | 5 feature cards |
| `SpeedStrip` | new | 3-up mini-feature row |
| `HowItWorks4` | new | 4-step horizontal flow |
| `UnfairAdvantage` | new | Twin vs Other AI table |
| `SolutionsDoors` | new | Home doors block |
| `IntegrationsGrid` | new | 3×4 connector tiles |
| `Testimonials` | new | 4-quote block |
| `PricingTeaser` | new | Compact 3-tier preview |
| `FounderBlock` | new | Portrait + bio |
| `FaqAccordion` | new | shadcn `Accordion` wrapper |
| `ClosingCtaBand` | new | Full-bleed CTA band |

All in `src/components/site/`.

---

## 5. Content additions

- **`src/content/home-content.ts`** — pain quotes, 5 features, 3 speed items, 4 how-it-works steps, 5 comparison rows, 4 testimonials, 6 FAQs. Every string passes the kill-list scrub.
- **`src/lib/site.ts`** — structured nav + `SOLUTIONS_GROUPS` (`byOutcome`, `byRole`, `byIndustry`).

---

## 6. File-level change list

**Edit**
- `src/lib/site.ts`
- `src/components/site/Header.tsx`
- `src/routes/index.tsx` — full home rewrite; hero enforces the above-the-fold rule
- `src/routes/solutions.tsx`
- `.lovable/site-structure.md` — record nav + home anatomy + kill list + hero-fold rule
- `.lovable/plan.md` — supersede with this plan
- `mem://index.md` — add Core lines:
  - "Site IA = Pandawa rhythm; theme = IW dark; nav = Platform · Product · Solutions ▾ · Resources · Pricing."
  - "Solutions splits into By Outcome / By Role / By Industry; reuse 'Three doors in' copy."
  - "Hero H1 is locked: 'Your work resets every day.' integratewise.ai is connector-strip reference only, never copy."
  - "Hero must always show Attention strip + Workspace above the fold on desktop (≥1024px). Right column = Attention on top, Workspace below, in one card."
  - "Kill list: start writing · free trial · no credit card · connect your stack · human API · get started in minutes · Adaptive Spine · Adaptive Workbench · Adaptive Twin · Workbench (as surface label) · Entity 360 · Cognitive OS."

**Create**
- All components in section 4
- `src/content/home-content.ts`

**Untouched**
- Theme tokens, all interior route files except `index.tsx` and `solutions.tsx`, all backend tables and edge functions, `Workbench`, `MemoryLoop`, `ScopesOrbital`, `ConnectorOrbit`, `ConnectorMarquee`, `AttentionLayer`.

---

## 7. Out of scope

- Re-skinning every interior page (`/platform/*`, `/product/*`, individual `/solutions/*`) — Pass 2.
- Light theme variant.
- Real founder portrait + real testimonials.

After approval, build order: **(a)** nav + Solutions mega-menu + announcement bar (height-budgeted) → **(b)** new home components → **(c)** home rewrite with hero-fold guard → **(d)** /solutions hub refresh → **(e)** memory + structure-doc update + kill-list scrub + desktop fold QA at 1280/1366/1440/1536/1920.
