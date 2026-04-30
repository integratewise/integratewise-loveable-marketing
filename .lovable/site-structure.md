# IntegrateWise — Finalized Marketing Site Structure

**Locked.** This is the single source of truth for IA, routes, components, vocabulary, and motion. Any future change must update this file first.

Visual rule across the entire site: **60% visuals / 40% content.** Every page must lead with a diagram, orbital, loop, or live preview before any block of body copy.

---

## 1. Information Architecture (top nav)

Top nav (in order, left → right):

1. **Platform** → `/platform` (single long page; dropdown anchors scroll in-page)
2. **Product** → `/product` (single long page; dropdown anchors scroll in-page)
3. **Twin** → `/twin` (single long page; dropdown anchors scroll in-page)
4. **Solutions** → `/solutions` (dropdown surfaces only the 3 concept pages)
5. **Pricing** → `/pricing`
6. **Company** → menu (About, Customer Zero, Manifesto, Why, Contact, Resources)

`Resources` is no longer in the top nav. The `/resources` route still exists; its links now live under the **Company** menu.

**Pillar pages are single long pages.** Platform, Product, and Twin no longer have child routes — each pillar is one page with anchor sections. Dropdown items are in-page anchors that scroll, not separate routes.

Right side of header: `Book a Demo` (primary).
Mobile: same order in a sheet drawer; CTA pinned at bottom.

---

## 2. Full route map

```
/                                    Home
/platform                            Platform — single long page (Spine)
                                     Anchors:
                                       #spine             Spine ("not ETL", how it learns)
                                       #how-it-works      Apps → Spine → Memory → Workspace → Twin → Approval → Loop
                                       #digital-memory    Truth/Context/Session Summaries; scopes (User/Work/Org); AI library
                                       #connectors        70+ schema-aware connectors; loader; adapter; schema registry
                                       #security          SOC 2 Type II, GDPR, tenant isolation, Cloudflare Workers, approval-gated execution
                                       #integrations      Salesforce, HubSpot, Stripe, Jira, Notion, Slack, Zendesk, Gmail,
                                                          Shopify, QuickBooks, Intercom, GitHub, Airtable, Asana, Google Drive
                                                          (ConnectorMarquee + IntegrationsGrid)

/product                             Product — single long page (Workspace)
                                     Anchors:
                                       #workspace            Hero + WorkbenchFrame + Living workspace + Workspace-in-action video + Frame + Views
                                       #how-it-works         Apps → Spine → Memory → Workspace → Twin → Approval → Loop (workspace-focused)
                                       #digital-memory       Every view is built from Memory + Evidence panel
                                       #security             RBAC, audit trail, Approval Gate (in-product security)

/twin                                Intelligence — single long page (Twin) — top-nav menu label is "Intelligence"
                                     Anchors:
                                       #twin                     Hero
                                       #how-it-works
                                       #digital-memory-reference Twin's read-only view of Memory
                                       #twin-execution           Propose → Approval Gate → execute → re-ingest as Truth → learn
                                       #security                 Scoped reads, auditable proposals, optional layer

/solutions                           Solutions hub (3 concept doors only — no mega-menu)
  /solutions/account-success         Concept page — door 1
  /solutions/business-ops            Concept page — door 2
  /solutions/personal-space          Concept page — door 3 (Waitlist)
  /solutions/industry                Industry hub — hash-driven slider, 6 industries
                                     (saas | agency | manufacturing | retail |
                                      professional-services | finance)
                                     Live, kept for now, NOT surfaced in the dropdown.
  /solutions/industry#<slug>         Deep-link into a specific industry slide
  /solutions/by-industry/$industry   Richer per-industry deep-link page (still exists)
  /solutions/role                    Role hub — hash-driven slider, 6 roles
                                     (founder | account-lead | ops | delivery |
                                      finance | individual)
                                     Live, kept for now, NOT surfaced in the dropdown.
  /solutions/role#<slug>             Deep-link into a specific role slide
  /solutions/by-industry             Legacy → redirects to /solutions/industry
  /solutions/by-role                 Legacy → redirects to /solutions/role

# Removed routes (deleted)
/platform/infrastructure             REMOVED
/product/approval                    REMOVED
/product/reference-layer             REMOVED

# Back-compat redirects (old child routes → new pillar anchors)
/platform/the-spine                  → /platform#spine
/platform/memory                     → /platform#digital-memory
/platform/integrations               → /platform#integrations
/platform/security                   → /platform#security
/platform/how-it-works               → /platform#how-it-works
/product/the-twin                    → /twin
/product/workbench                   → /product#workspace
/product/how-it-works                → /product#how-it-works

/pricing                             3 tiers + ROI calculator
/why                                 The category thesis ("Your work resets…")
/about                               Founder bio + the near-miss story
/customer-zero                       "I run IntegrateWise on IntegrateWise"
/manifesto                           Principles
/contact                             Founder-led contact

# Legal / utility (footer only)
/legal/privacy                       (stub)
/legal/terms                         (stub)
/legal/cookies                       (stub)
/docs                                (stub)
/api                                 (stub)
/blog                                (stub)
/careers                             (stub)
```

Every shareable route ships its own `head()` with `title`, `description`, `og:title`, `og:description`. No route inherits home metadata.

---

## 3. Footer columns

Five columns: **Platform · Product · Intelligence · Solutions · Company.** All Platform / Product / Intelligence items are in-page `#anchor` links into the relevant pillar page. Solutions surfaces only the 3 concept pages plus an "All solutions" link.

| Platform | Product | Intelligence | Solutions | Company |
|---|---|---|---|---|
| Spine (`/platform#spine`) | Workspace (`/product#workspace`) | Twin (`/twin#twin`) | Account Success | About |
| How it works (`/platform#how-it-works`) | How it works (`/product#how-it-works`) | How it works (`/twin#how-it-works`) | Business Ops | Manifesto |
| Digital Memory (`/platform#digital-memory`) | Digital Memory (`/product#digital-memory`) | Digital Memory Reference (`/twin#digital-memory-reference`) | Personal Space [Waitlist] | Customer Zero |
| Connectors (`/platform#connectors`) | Security (`/product#security`) | Twin Execution (`/twin#twin-execution`) | All solutions (`/solutions`) | Why |
| Security (`/platform#security`) | | Security (`/twin#security`) | | Contact |
| Integrations (`/platform#integrations`) | | | | |

Notes:
- Top-nav menu label for `/twin` is **Intelligence** (not "Twin"); the page itself opens with the **Twin** section as `#twin`. This avoids "Twin > Twin" repetition and leaves room for additional Intelligence surfaces (cognitive loop / Entity 360) without renaming later.
- All Platform / Product / Intelligence links are anchors on the pillar page — there are no child routes.
- Solutions footer column lists only the 3 concept pages + an "All solutions" link to `/solutions`. `/solutions/industry` and `/solutions/role` are not surfaced here.
- Company column is trimmed to **5 items** (About, Manifesto, Customer Zero, Why, Contact). `/blog`, `/docs`, `/changelog`, `/pricing` routes remain live but are not in the footer column. **Pricing** stays as a top-nav item.
- Surface label is **Workspace** (the user-facing name for what the file/component still calls `Workbench`).

Bottom bar: logo · © IntegrateWise · SOC 2 Type II · GDPR · status pill.

---

## 4. Page anatomy (60/40 enforced)

Every page follows this skeleton:

1. **Hero** — short heading, 1 sub-line, two CTAs, *visual companion* (orbit / loop / orbital / Workbench preview)
2. **Attention Layer** — `<AttentionLayer>` with route-specific scenario from `attention-scenarios.ts`
3. **Visual centerpiece** — Workbench preview, MemoryLoop, ScopesOrbital, or comparison diagram
4. **Proof / boundaries / scopes** — small cards, never long paragraphs
5. **Door / next step** — page-specific CTA card

### Per-page centerpieces (locked)

| Route | Centerpiece visual |
|---|---|
| `/` | `ConnectorOrbit` (hero) → `AttentionLayer` + `Workbench` → `MemoryLoop` → `ScopesOrbital`. **AnnouncementBar removed from Home** (component file kept, just unused). |
| `/platform` | Single long page with sticky `SectionNav`. Anchors: `#spine` (`MemoryLoop` large) → `#how-it-works` (Apps→Spine→Memory→Workspace→Twin→Approval→Loop) → `#digital-memory` (`MemoryLoop` + scopes + `MEMORY_COPY.primary`) → `#connectors` (catalog + adapter pattern) → `#security` (trust-walls grid) → `#integrations` (`ConnectorMarquee` + `IntegrationsGrid`). |
| `/product` | Single long page with sticky `SectionNav`. Anchors: `#workspace` (`WorkbenchFrame` + Living workspace + Workspace-in-action video + Frame + Views) → `#how-it-works` (workspace-focused loop) → `#digital-memory` (every view from Memory + Evidence panel + `MEMORY_COPY.primary`) → `#security` (RBAC, audit trail, Approval Gate). |
| `/twin` | Single long page with sticky `SectionNav` (top-nav menu label = **Intelligence**). Anchors: `#twin` (hero) → `#how-it-works` → `#digital-memory-reference` (Twin's read-only view + `MEMORY_COPY.primary`) → `#twin-execution` (propose → Approval Gate → execute → re-ingest as Truth → learn) → `#security` (scoped reads, auditable proposals, optional layer). Twin Execution intentionally precedes Security. |
| `/solutions` | 3 doors only: Account Success · Business Ops · Personal Space. (No By-Role / By-Industry mega-menu surfaced. Internal "By Role / By Industry / By Domain" tabs inside each concept page are a future iteration — not built yet.) |
| `/solutions/account-success` | Role Workbench + role AttentionLayer |
| `/solutions/business-ops` | Role Workbench + role AttentionLayer |
| `/solutions/personal-space` | Role Workspace + Waitlist badge |
| `/solutions/industry` | Hash-driven `HashSlider` over 6 industries (saas, agency, manufacturing, retail, professional-services, finance). Live, not in dropdown. |
| `/solutions/role` | Hash-driven `HashSlider` over 6 roles (founder, account-lead, ops, delivery, finance, individual). Live, not in dropdown. |
| `/solutions/by-industry/*` | Industry Workspace + 3 industry signals (deep-link page) |
| `/pricing` | 3-tier table + interactive `RoiCalculator` |
| `/why` | `MemoryLoop` + manifesto stats |
| `/about` | Founder portrait block + near-miss timeline |
| `/customer-zero` | Founder story long-form + Workbench cameo |

---

## 5. Component inventory (locked)

Layout primitives
- `Container`, `Section`, `Badge`, `Reveal` (IntersectionObserver fade-up)

Branded marks
- `SpineLogo` (adaptive to color)

Visual systems
- `ConnectorOrbit` — concentric rotating logo rings (hero backdrop)
- `ConnectorMarquee` — edge-faded scrolling logo strip
- `MemoryLoop` — 5-node loop: Memory → Attention → Workspace → Twin → Approval
- `ScopesOrbital` — User / Work / Org concentric rings
- `Workbench` — JSON-driven static preview (per-page scenarios in `content/workbench-scenarios.ts`). **Surface label is "Workspace"** in nav/footer/copy; component and file names remain `Workbench` (and `ProductVideo` etc.) to avoid file churn.
- `AttentionLayer` — "3 things need your attention" strip (per-page scenarios in `content/attention-scenarios.ts`)
- `SolutionPage` — reusable solution template
- `RoiCalculator` — pricing interactive (seats × hours × hourly cost)
- `SectionNav` (`src/components/site/SectionNav.tsx`) — sticky in-page anchor nav used on the three pillar pages (`/platform`, `/product`, `/twin`)
- `HashSlider` (`src/components/site/HashSlider.tsx`) — hash-driven slider powering `/solutions/industry` and `/solutions/role`

Lead capture
- `LeadModals` + `demo-modal-context` — Book a Demo / Early Access / Waitlist

Stub
- `StubPage` for docs/api/blog/careers/legal/cookies

---

## 6. Vocabulary — locked

**Use:** Digital Memory · Attention Layer · Workspace · Twin · Approval Gate · Spine (Platform page only) · Reference Layer · Three Scopes (User / Work / Org). Top-nav menu for `/twin` is labeled **Intelligence**; the page itself opens with the **Twin** section.

**Memory copy tokens** — canonical, defined in `src/lib/site.ts` as `MEMORY_COPY`:
- `MEMORY_COPY.primary`: "Digital Memory accumulates with every update, every decision, and every interaction — then gets reused by your Workspace, your Twin, and your team."
- `MEMORY_COPY.short`: "Memory compounds. Context improves. Decisions get faster."

`MEMORY_COPY.primary` is used **once each** on: Home, `/platform#digital-memory`, `/product#digital-memory`, `/twin#digital-memory-reference`. Reuse verbatim; do not paraphrase.

**Anchor lines (reusable across pages):**
- "Your work resets every day."
- "Within seconds of opening, you see what changed."
- "You don't rebuild context anymore." (Product hero)
- "3 things need your attention." (Attention Layer)
- "Truth you own. AI you rent. Approval in between."
- "Private by architecture. Shared by choice." (Scopes)

**Kill list (must not appear anywhere in copy):** Adaptive Spine, Adaptive Workbench, Adaptive Twin (the "Adaptive" prefix is fully retired — vocab is **Spine / Workspace / Twin**), Workbench (as a user-facing surface label — file/component identifiers are unchanged), Entity 360, Vector Store, Vector Scores, Unified Intelligence Layer, Cognitive OS, "Stop juggling apps", "8-stage normalizer pipeline", "Start Free", "Start Free Trial", "No credit card required", "Connect in 2 minutes".

---

## 7. CTAs — locked

| Surface | Primary | Secondary |
|---|---|---|
| Header | Book a Demo | — |
| Home hero / footer band | Book a Demo | Join Early Access |
| Personal Ops | Join the Waitlist | — |
| All Solutions doors | Book a Demo | Learn more (route link) |
| Pricing | Book a Demo | Join Early Access |

Forbidden: Start Free, Start Trial, Sign Up, any self-serve auth CTA. Self-serve onboarding is not live.

---

## 8. Motion — locked

- `.reveal` + `useReveal` IntersectionObserver fade-up on every Section block
- `ConnectorOrbit`: rings rotate 60s + 90s opposite, logos counter-rotate
- `ConnectorMarquee`: 20s linear infinite, edge fade, pause on hover
- `MemoryLoop`: dashed ring `orbit-rotate 60s linear infinite`, node pulse on Twin
- `twin-pulse-kf` on the Twin label dot
- All motion respects `prefers-reduced-motion: reduce` (already wired in `styles.css`)

---

## 9. Backend (no changes needed)

Existing tables cover every form on the site:
- `demo_requests` — Book a Demo modal
- `early_access` — Join Early Access modal
- `waitlist` — Personal Ops waitlist
- `connector_requests` — "Request a connector" on `/platform#integrations`

No new tables. No live LLM calls — Workbench and AttentionLayer stay JSON-driven.

---

## 10. Out of scope

- Theme / color changes (Nexify dark stays)
- Real Twin or live integration calls
- Blog / changelog content (routes remain stubs)
- Self-serve sign-up / billing flow

---

## 11. Pandawa-rhythm refresh (2026-04 update; revised 2026-05)

### Top nav (final shape — see §1 above for the canonical version)
`Platform ▾   Product ▾   Intelligence ▾   Solutions ▾   Pricing   Company ▾            [ Book a Demo ]`

Platform / Product / Intelligence are each a **single long page**; their dropdowns scroll to in-page anchors rather than navigating to child routes. The `/twin` page sits under the **Intelligence** menu (avoids "Twin > Twin" repetition and leaves room for additional Intelligence surfaces). Resources is no longer in the top nav (its links live under Company; `/resources` still resolves).

### Solutions ▾ dropdown (3-column mega: By Use Case · By Role · By Industry)
The first column ("By Use Case") is the three concept pages — they remain the primary surface. Role and Industry slices are surfaced as flat columns (not nested mega-menus).

- **By Use Case** (= concept pages):
  - Account Success → `/solutions/account-success`
  - Business Ops → `/solutions/business-ops`
  - Personal Space [Waitlist] → `/solutions/personal-space`
- **By Role** → flat list from `SOLUTIONS_BY_ROLE` (founder, account-lead, ops, delivery, finance, individual)
- **By Industry** → flat list from `SOLUTIONS_BY_INDUSTRY` (saas, agency, manufacturing, retail, professional-services, finance)
- Footer link in mega: **All solutions** → `/solutions`

`/solutions/industry` and `/solutions/role` (hash-driven sliders) remain live for back-compat but are not surfaced in the dropdown.

Single source of truth: `SOLUTIONS_BY_USE_CASE` (alias `SOLUTIONS_BY_FUNCTION`), `SOLUTIONS_BY_ROLE`, `SOLUTIONS_BY_INDUSTRY` in `src/lib/site.ts`.

### Platform ▾ dropdown (in-page anchors)
- Spine → `/platform#spine`
- How it works → `/platform#how-it-works`
- Digital Memory → `/platform#digital-memory`
- Connectors → `/platform#connectors`
- Security → `/platform#security`
- Integrations → `/platform#integrations`

### Product ▾ dropdown (in-page anchors)
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

### Home rhythm (14 blocks — AnnouncementBar removed)
1. Hero split (Attention+Workbench locked above the fold) → 2. ConnectorMarquee → 3. PainTrio → 4. FeatureCardGrid → 5. SpeedStrip → 6. HowItWorks4 → 7. UnfairAdvantage → 8. SolutionsDoors → 9. IntegrationsGrid → 10. Testimonials → 11. PricingTeaser → 12. FounderBlock → 13. FaqAccordion → 14. ClosingCtaBand.

The `AnnouncementBar` component file is kept but **no longer rendered on Home**. The "NEW Spine 2.0" promo strip is gone.

### Hero constraints (locked)
- H1 always: **"Your work resets every day."**
- Subcopy from canonical HOME (Gmail / Slack / yesterday's notes reset story).
- Layout: copy left, **Attention strip on top of Workbench** stacked in one column on the right.
- **Above-the-fold rule (locked, desktop ≥1024px):** Header (~84px) + hero top padding ≤ ~160px combined; hero section uses `lg:min-h-[calc(100svh-var(--header-h))]` so the Attention+Workbench combo is visible at 1280×720 and above. (AnnouncementBar no longer renders on Home, so its height is no longer in the budget.)
- Mobile/tablet: stacks below copy.

### Kill list (extends §6)
Add: `start writing` · `connect your stack` · `no-code workflow builder` · `get started in minutes` · `start in 60 seconds` · `human API between your tools`.

### New components
`AnnouncementBar` (file kept, **not rendered on Home**) · `PainTrio` · `FeatureCardGrid` · `SpeedStrip` · `HowItWorks4` · `UnfairAdvantage` · `SolutionsDoors` · `IntegrationsGrid` · `Testimonials` · `PricingTeaser` · `FounderBlock` · `FaqAccordion` · `ClosingCtaBand` · `SectionNav` (sticky in-page nav for `/platform`, `/product`, `/twin`) · `HashSlider` (hash-driven slider for `/solutions/industry`, `/solutions/role`). All in `src/components/site/`. Home content centralized in `src/content/home-content.ts`.
