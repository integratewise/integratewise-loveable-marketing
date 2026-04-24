# IntegrateWise — Finalized Marketing Site Structure

**Locked.** This is the single source of truth for IA, routes, components, vocabulary, and motion. Any future change must update this file first.

Visual rule across the entire site: **60% visuals / 40% content.** Every page must lead with a diagram, orbital, loop, or live preview before any block of body copy.

---

## 1. Information Architecture (top nav)

Top nav (in order, left → right):

1. **Platform** → `/platform`
2. **Product** → `/product`
3. **Twin** → `/product/the-twin`
4. **Solutions** → `/solutions`
5. **Pricing** → `/pricing`
6. **Why** → `/why`

Right side of header: `Book a Demo` (primary).
Mobile: same order in a sheet drawer; CTA pinned at bottom.

---

## 2. Full route map

```
/                                    Home
/platform                            Platform overview (the Spine / Memory engine)
  /platform/the-spine                Adaptive Spine deep-dive
  /platform/how-it-works             Ingest → Normalize → Memory loop
  /platform/integrations             Connector catalog (Live / Coming Soon badges)
  /platform/security                 SOC 2, GDPR, tenant isolation, encryption
  /platform/infrastructure           Architecture, regions, SLAs

/product                             Product overview (Workbench + Twin + Approval)
  /product/workbench                 The unified work surface
  /product/the-twin                  The Twin (proposes, never executes)
  /product/approval                  Approval Gate + audit trail
  /product/reference-layer           Reference Layer (truth you own)
  /product/how-it-works              The Loop in product terms

/solutions                           Solutions hub (3 doors + by role + by industry)
  /solutions/account-success         Door 1
  /solutions/business-ops            Door 2
  /solutions/personal-ops            Door 3 (Waitlist)
  /solutions/sales-ops               By role
  /solutions/finance-ops             By role
  /solutions/by-industry             Industry index (6 cards)
  /solutions/by-industry/$industry   Dynamic: saas | ecommerce | healthcare |
                                     fintech | manufacturing | professional-services

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

| Platform | Solutions | Company | Legal |
|---|---|---|---|
| Spine | Account Success | Story (`/customer-zero`) | Privacy |
| Memory | Business Ops | Why (`/why`) | Terms |
| Integrations | Personal Ops | About | Cookies |
| Security | By Role (Sales/Finance Ops) | Principles (`/manifesto`) | |
| Infrastructure | By Industry | Contact | |
| Docs (stub) | | Blog (stub) | |
| API (stub) | | Careers (stub) | |

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
| `/` | `ConnectorOrbit` (hero) → `AttentionLayer` + `Workbench` → `MemoryLoop` → `ScopesOrbital` |
| `/platform` | `ConnectorOrbit` (hero) → `MemoryLoop` (ingest→normalize→memory) |
| `/platform/the-spine` | `MemoryLoop` (large) |
| `/platform/integrations` | Connector grid with Live/Coming Soon badges |
| `/platform/security` | Trust-walls grid (4 guarantees) |
| `/product` | `Workbench` + Twin-vs-Others comparison table |
| `/product/the-twin` | `Workbench` (twin scenario) + Twin-vs-Others table |
| `/product/workbench` | `Workbench` (full scenario) |
| `/product/approval` | Approval-gate diagram (Twin proposes → Human approves → Memory writes) |
| `/product/reference-layer` | 6-layer entity card (Truth · Context · Signals · Memory · Goals · Relationships) |
| `/solutions` | 3 doors + by-role + by-industry grids |
| `/solutions/account-success` | Role Workbench + role AttentionLayer |
| `/solutions/business-ops` | Role Workbench + role AttentionLayer |
| `/solutions/personal-ops` | Role Workbench + Waitlist badge |
| `/solutions/sales-ops` | Role Workbench |
| `/solutions/finance-ops` | Role Workbench |
| `/solutions/by-industry/*` | Industry Workbench + 3 industry signals |
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
- `MemoryLoop` — 5-node loop: Memory → Attention → Workbench → Twin → Approval
- `ScopesOrbital` — User / Work / Org concentric rings
- `Workbench` — JSON-driven static preview (per-page scenarios in `content/workbench-scenarios.ts`)
- `AttentionLayer` — "3 things need your attention" strip (per-page scenarios in `content/attention-scenarios.ts`)
- `SolutionPage` — reusable solution template
- `RoiCalculator` — pricing interactive (seats × hours × hourly cost)

Lead capture
- `LeadModals` + `demo-modal-context` — Book a Demo / Early Access / Waitlist

Stub
- `StubPage` for docs/api/blog/careers/legal/cookies

---

## 6. Vocabulary — locked

**Use:** Memory · Attention Layer · Workbench · Twin · Approval · Adaptive Spine (Platform page only) · Reference Layer · Three Scopes (User / Work / Org)

**Anchor lines (reusable across pages):**
- "Your work resets every day."
- "Within seconds of opening, you see what changed."
- "You don't rebuild context anymore." (Product hero)
- "3 things need your attention." (Attention Layer)
- "Truth you own. AI you rent. Approval in between."
- "Private by architecture. Shared by choice." (Scopes)

**Kill list (must not appear anywhere in copy):** Adaptive Spine *in headers outside `/platform`*, Entity 360, Vector Store, Vector Scores, Unified Intelligence Layer, Cognitive OS, "Stop juggling apps", "8-stage normalizer pipeline", "Start Free", "Start Free Trial", "No credit card required", "Connect in 2 minutes".

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
- `connector_requests` — "Request a connector" on `/platform/integrations`

No new tables. No live LLM calls — Workbench and AttentionLayer stay JSON-driven.

---

## 10. Out of scope

- Theme / color changes (Nexify dark stays)
- Real Twin or live integration calls
- Blog / changelog content (routes remain stubs)
- Self-serve sign-up / billing flow

---

## 11. Pandawa-rhythm refresh (2026-04 update)

### Top nav (final shape)
`Platform ▾   Product ▾   Solutions ▾   Resources ▾   Pricing            [ Book a Demo ]`

### Solutions ▾ mega-menu
- **Overview** → `/solutions` ("Same Memory. Same Twin. Shaped for each team's work.")
- **By outcome** → Account Success · Business Ops · Personal Ops [Waitlist]
- **By role** → Sales Ops · Finance Ops
- **Footer** → "Browse all 6 industries" with chips: SaaS · eCommerce · Healthcare · FinTech · Manufacturing · Professional Services

Single source of truth: `SOLUTIONS_GROUPS` in `src/lib/site.ts`.

### Home rhythm (15 blocks)
1. AnnouncementBar → 2. Hero split (Attention+Workbench locked above the fold) → 3. ConnectorMarquee → 4. PainTrio → 5. FeatureCardGrid → 6. SpeedStrip → 7. HowItWorks4 → 8. UnfairAdvantage → 9. SolutionsDoors → 10. IntegrationsGrid → 11. Testimonials → 12. PricingTeaser → 13. FounderBlock → 14. FaqAccordion → 15. ClosingCtaBand.

### Hero constraints (locked)
- H1 always: **"Your work resets every day."**
- Subcopy from canonical HOME (Gmail / Slack / yesterday's notes reset story).
- Layout: copy left, **Attention strip on top of Workbench** stacked in one column on the right.
- **Above-the-fold rule (desktop ≥1024px):** AnnouncementBar (36px) + Header (~84px) + hero top padding ≤ ~160px combined; hero section uses `lg:min-h-[calc(100svh-44px)]` so the Attention+Workbench combo is visible at 1280×720 and above.
- Mobile/tablet: stacks below copy.

### Kill list (extends §6)
Add: `start writing` · `connect your stack` · `no-code workflow builder` · `get started in minutes` · `start in 60 seconds` · `human API between your tools`.

### New components
`AnnouncementBar` · `PainTrio` · `FeatureCardGrid` · `SpeedStrip` · `HowItWorks4` · `UnfairAdvantage` · `SolutionsDoors` · `IntegrationsGrid` · `Testimonials` · `PricingTeaser` · `FounderBlock` · `FaqAccordion` · `ClosingCtaBand`. All in `src/components/site/`. Home content centralized in `src/content/home-content.ts`.
