# Pandawa-style structure + IntegrateWise theme — with Solutions ▾ restored

**Source of truth.** Reference the canonical IntegrateWise HOME (`/`) in Lovable for hero copy and Workbench/Attention layout. Do **not** change the H1 "Your work resets every day." `integratewise.ai` may be used **only** for connector-strip details and the dark-glass aesthetic — **not** for narrative or headlines. Pandawa is the **layout** inspiration, not the **copy** inspiration.

We adopt **Pandawa's IA, section rhythm, and motion** as the structural blueprint, keep the existing **IntegrateWise dark theme** and locked vocabulary, and enforce the 60% visuals / 40% content rule.

---

## 0. Kill list (never use in copy or CTAs)

`start writing` · `free trial` · `no credit card required` · `connect your stack` · `no-code workflow builder` · `get started in minutes` · `start in 60 seconds` · `human API between your tools` · `start free` · `connect in 2 minutes` · `Adaptive Spine` (in headers) · `Entity 360` · `Cognitive OS`.

If a Pandawa-style SaaS phrase tries to leak into a heading, sub, button, or FAQ — replace it with our locked vocabulary (Memory · Attention Layer · Workbench · Twin · Approval).

---

## 1. Top navigation — final shape

```text
Platform ▾   Product ▾   Solutions ▾   Resources ▾   Pricing            [ Book a Demo ]
```

### Solutions ▾ dropdown

```text
┌── OVERVIEW ──────────────┬── BY OUTCOME ──────────────┬── BY ROLE ─────────────┐
│ Solutions overview       │ Account Success            │ Sales Ops              │
│ → /solutions             │ → /solutions/account-      │ → /solutions/sales-ops │
│ Same Memory. Same Twin.  │   success                  │                        │
│ Shaped for each team's   │ Business Ops               │ Finance Ops            │
│ work.                    │ → /solutions/business-ops  │ → /solutions/finance-  │
│                          │ Personal Ops  [Waitlist]   │   ops                  │
│                          │ → /solutions/personal-ops  │                        │
└──────────────────────────┴────────────────────────────┴────────────────────────┘
┌── BY INDUSTRY ─────────────────────────────────────────────────────────────────┐
│ Browse all 6 →  /solutions/by-industry                                         │
│ SaaS · eCommerce · Healthcare · FinTech · Manufacturing · Professional Services│
└────────────────────────────────────────────────────────────────────────────────┘
```

- Personal Ops carries an inline **Waitlist** badge.
- "By Industry" footer row shows 6 chips that route to `/solutions/by-industry/$industry`.

### Other dropdowns

- **Platform ▾** — The Spine, How it works, Integrations, Security, Infrastructure
- **Product ▾** — Workbench, The Twin, Approval, Reference Layer
- **Resources ▾** — Why, Manifesto, Customer Zero, About, Contact
- **Pricing** — single link

Mobile: same 5 groups in a sheet drawer; **Book a Demo** pinned bottom.

---

## 2. Home page — Pandawa rhythm, IntegrateWise voice

```text
1.  Announcement bar    "New: The Adaptive Spine 2.0"           → /platform/the-spine
2.  Hero split          Headline + sub left · Attention+Workbench right
3.  Connector marquee   Existing ConnectorMarquee (12 logos)
4.  Pain trio           3 operator quotes (Account · Ops · Founder)
5.  Features grid       5 cards: Memory · Attention · Workbench · Twin · Approval
6.  Speed strip         Auto-context · Drag-approve · Keyboard-first
7.  How it works (4)    Open → See changes → Twin proposes → You approve
8.  Unfair advantage    Twin vs Other AI (5-row comparison)
9.  Solutions doors     5 doors mirroring the dropdown
10. Integrations grid   3×4 connector tiles
11. Testimonials        4 operator quotes (placeholder)
12. Pricing teaser      3 tiers, links to /pricing
13. Founder block       Portrait + Customer Zero cameo
14. FAQ accordion       6 founder-led Qs
15. Closing CTA band    Full-bleed: "Stop the reset. Book a Demo."
```

### Hero constraints (locked)

- **H1:** "Your work resets every day."
- **Subcopy:** from canonical HOME (the Gmail / Slack / yesterday's notes reset story ending in "Within seconds of opening, you see what changed.").
- **Layout:** Headline + sub on the left; on the right, the **Attention strip (3 signals)** sits **above** the **Workbench** (Memory cards left, Twin suggestion right, Approve / Edit / Reject controls).
- **Above-the-fold rule (locked, desktop ≥1024px):** The hero must always render the **Attention strip + Workbench combo above the fold** on desktop. Implementation rules so this never regresses:
  - Hero section uses `min-h-[calc(100svh-var(--header-h))]` and a 2-column grid (`lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]`).
  - Right column is a single stacked unit: `AttentionLayer` on top, `Workbench` directly below, both inside one card container so they scroll/scale together.
  - Announcement bar height + Header height + hero top padding combined ≤ 160px on `lg`.
  - On viewports `<lg`, the right column stacks **below** the headline (mobile-only exception — desktop must keep both visible without scrolling at 1366×768 and 1440×900).
  - Add a Playwright/visual smoke check (or at minimum a manual viewport pass at 1280, 1366, 1440, 1536, 1920) before merging hero edits.
- **CTAs:** Primary **Book a Demo**, secondary **Join Early Access**. No kill-list phrases.
- **Tablet/mobile:** Attention + Workbench stack vertically below the headline; above-the-fold rule does not apply below `lg`.

---

## 3. /solutions hub — refresh to match the dropdown

```text
By outcome          By role             By industry
────────────       ────────────         ─────────────
Account Success     Sales Ops            SaaS
Business Ops        Finance Ops          eCommerce
Personal Ops*       (more soon)          Healthcare
                                         FinTech
* Waitlist                               Manufacturing
                                         Professional Services
```

**Copy reuse rule:** Reuse the existing "Three doors in" copy verbatim for Account Success / Business Ops / Personal Ops; add Sales Ops and Finance Ops in the same operator-voiced tone.

Locked one-liners:
- **Account Success** — "Walk into every customer conversation already knowing what changed."
- **Business Ops** — "One screen. Everything that changed since Friday."
- **Personal Ops [Waitlist]** — "Your day, finally assembled."
- **Sales Ops** / **Finance Ops** — drawn from the existing role pages.

---

## 4. New / refactored components

| Component | Status | Purpose |
|---|---|---|
| `AnnouncementBar` | new | Thin top bar above header (height-budgeted to protect hero fold) |
| `Header` | refactor | Mega-menu dropdowns incl. **Solutions ▾** |
| `SolutionsMegaMenu` | new (sub of Header) | 3-column + industry-footer dropdown |
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
  - "Hero must always show Attention strip + Workbench above the fold on desktop (≥1024px). Right column = Attention on top, Workbench below, in one card."
  - "Kill list: start writing · free trial · no credit card · connect your stack · human API · get started in minutes · Adaptive Spine (header) · Entity 360 · Cognitive OS."

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
