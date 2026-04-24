
# IntegrateWise — Blueprint v2 + integratewise.ai animations

The visual theme stays as-is (Nexify dark glass, peach→white gradient hero, amber accents). What changes is **content structure**, **vocabulary**, and **motion**. The hero anchor flips from "Build memory for your work" to **"Your work resets every day."** and every page now opens with an **Attention Layer** moment before the Workbench appears.

---

## 1. Vocabulary + CTA updates (global)

Locked terms going in: **Memory · Attention Layer · Workbench · Twin · Approval · Spine (Platform page only) · Reference Layer**.

Twin re-positioning everywhere: "**connects what changed, explains why it matters, and prepares what to do next.**" (replaces the old "watches Memory and suggests" framing).

Approved phrases to seed across pages:
- "Your work resets every day." (category anchor — first line of Home)
- "Within seconds, you see what changed."
- "You don't rebuild context anymore." (Product hero)
- "3 things need your attention." (Attention Layer label)
- "Truth you own. AI you rent. Approval in between."

Kill list scrub: "Adaptive Spine" (in headers), "Entity 360", "Stop juggling apps", "Are you juggling tabs…?", "Three Data Ecosystems", any remnant of "Start Free / Start Free Trial / No credit card / Connect in 2 minutes".

CTAs unchanged from current: **Book a Demo** (primary), **Join Early Access** (secondary), **Join the Waitlist** for Personal Ops only.

---

## 2. New global component: `AttentionLayer`

A small, prominent card-strip used **above the Workbench on every page**:

```text
┌─────────────────────────────────────────────────┐
│ RIGHT NOW                3 things need attention │
│ ⚠ Acme Corp · Usage dropped 31% this week        │
│ ⚠ Invoice INV-2048 · Overdue 14 days             │
│ ⚠ Northwind · No reply in 9 days                 │
│ Twin has prepared responses. Review when ready.  │
└─────────────────────────────────────────────────┘
```

- New file: `src/components/site/AttentionLayer.tsx`
- Takes `{ label, signals: [{ entity, change, severity }], note }`
- Per-page signals live in `src/content/attention-scenarios.ts` (one per route — Home, Product, each Solution page, each Industry page, Personal Ops, etc.)
- Sits directly above the existing `Workbench` component on every page that currently shows the Workbench

---

## 3. Page changes

### Home (`/`)

Restructure hero + add new sections per v2:

1. **Hero** — replace heading with **"Your work resets every day."** sub-copy: "You open Gmail. You check Slack…" + promise paragraph ending in "Within seconds of opening, you see what changed." Trust strip stays.
2. **Attention Layer** (new) — Acme usage drop, INV-2048 overdue, Northwind silent
3. **Workbench preview** (existing component, kept)
4. **Problem** — "Stop rebuilding the same work."
5. **Consequence** — "Rebuilding the story drains time and trust."
6. **Promise** — "One place where your work becomes Memory."
7. **How it works** — 5-step flow updated to: Memory → **Attention** → Workbench → Twin (new copy) → Approval
8. **Three Memory Scopes** — User · Work · Org, "Private by architecture. Shared by choice."
9. **Trust & Control** — 4 guarantees
10. **Proof stats** — 23% / $8M+ / 5–8 hrs / 30-day payback
11. **Customer Zero** teaser
12. **Footer CTA** band

### Product (`/product`)

- Hero changes to **"You don't rebuild context anymore."**
- Add Attention Layer above existing Workbench
- Add **Twin vs Others** comparison table (5-row table from v2 spec)

### The Twin (`/product/the-twin`)

- Update hero + "What it does / does not do" lists to v2 wording
- Add the Twin vs Others table
- Keep Workbench scenario, prepend Attention Layer

### All Solutions pages (Personal/Account/Business/Sales/Finance Ops)

- Each gets an Attention Layer block specific to that role (signals from v2 spec)
- Existing Workbench stays
- Personal Ops keeps Waitlist badge + Waitlist CTA

### Pricing (`/pricing`)

- Adjust plan rows to match v2 entitlements (Sync 4h/1h/15min · 5/20/Unlimited connectors · Read-only/Limited write/Full TruthLayer · 90/365/Unlimited history)
- Add **ROI Calculator** card (interactive, client-only): seats slider, hours saved/week (default 6), hourly cost ($50) → Weekly/Monthly/Annual savings + payback days + ROI multiple. CTA "Book a Demo" below.

### New routes (currently missing)

- `/why` — single page from v2 §WHY copy
- `/about` — separate from `/customer-zero`, founder bio + near-miss story
- `/solutions/sales-ops`
- `/solutions/finance-ops`
- `/solutions/by-industry` (index with 6 industry cards + Live/Coming Soon badges)
- `/solutions/by-industry/$industry` (dynamic template; static `loader` returning industry data for SaaS · eCommerce · Healthcare · FinTech · Manufacturing · Professional Services)

Each gets its own `head()` with title/description/og:title/og:description.

### Footer

Update footer columns to v2 spec: Platform (Spine · Memory · Integrations · Security · Docs · API) · Solutions (Account Success · Business Ops · By Role · By Industry) · Company (Story · Principles · Contact · Blog · Careers) · Legal (Privacy · Terms · Cookies). "Docs/API/Blog/Careers/Principles" remain stub routes via existing `StubPage`.

---

## 4. Animations — match integratewise.ai feel

The reference site uses three signature motion patterns. Implement them with Tailwind + small utility CSS in `src/styles.css` (no new heavyweight library). Respect `prefers-reduced-motion`.

### a. Scroll-reveal fade-up on every section
Already partly present (`fade-up` class). Upgrade to an **IntersectionObserver-driven** hook so reveals fire on scroll-in (not just on mount). New file `src/hooks/use-reveal.ts` + class `.reveal` (initial: `opacity 0, translate-y-3`, on `.is-in`: `opacity 1, translate-y-0, transition 600ms ease-out`). Apply to every `<Section>` child block.

### b. Connector orbit (hero background)
The reference site shows app logos drifting in concentric orbits around a central glowing mark. Build `src/components/site/ConnectorOrbit.tsx`:
- Absolute-positioned SVG with 2 concentric rings
- 8–12 connector logos (Salesforce, HubSpot, Slack, Gmail, Stripe, Jira, Notion, Zendesk, Shopify, QuickBooks, Intercom, GitHub) placed on the rings
- Each ring rotates with `@keyframes orbit-rotate` (60s and 90s, opposite directions, linear infinite)
- Logos counter-rotate so they stay upright
- Soft amber radial glow at center matching our existing peach/amber palette
- Used on Home hero (behind text) and Platform hero
- Pauses under `prefers-reduced-motion`

Logos: download SVGs into `src/assets/logos/` (12 files) and import as ES modules.

### c. Marquee connector strip
Below hero: horizontally scrolling logo strip, 20s linear infinite, fades at edges. Already have `--transition-marquee` token. Add component `src/components/site/ConnectorMarquee.tsx` reusing the same logo set. Pauses on hover and under reduced-motion.

### d. Subtle micro-interactions
- Card hover lift (already in theme) — verify on every card grid
- Button glow expand on hover (already in theme)
- Attention-Layer signal rows: stagger fade-in (50ms apart) on first reveal
- Twin suggestion panel: gentle pulsing dot next to "Twin" label

All motion gated by:
```css
@media (prefers-reduced-motion: reduce) {
  .reveal, .orbit-ring, .marquee-track, .twin-pulse { animation: none !important; transition: none !important; opacity: 1; transform: none; }
}
```

---

## 5. Build sequence

1. Vocabulary + Twin re-positioning sweep across existing pages
2. New `AttentionLayer` component + `attention-scenarios.ts` + add to Home, Product, all Solutions
3. Home hero rewrite + new sections (Consequence, Promise, Three Scopes refinements, Proof stats)
4. Animations: `use-reveal` hook, `ConnectorOrbit`, `ConnectorMarquee`, reduced-motion guard
5. New routes: `/why`, `/about`, `/solutions/sales-ops`, `/solutions/finance-ops`, `/solutions/by-industry`, `/solutions/by-industry/$industry`
6. Pricing: entitlement update + ROI calculator
7. Footer column update + Twin vs Others table
8. QA: vocabulary audit (zero kill-list terms), CTA audit, per-route meta check, motion-reduce check, mobile pass

---

## 6. Out of scope

- No theme/color changes (Nexify dark stays exactly as-is)
- No new backend tables (existing `demo_requests`, `early_access`, `waitlist`, `connector_requests` cover all forms; `/about` and `/why` use existing demo modal)
- No live integrations or real Twin/LLM calls — Workbench + Attention Layer remain JSON-driven
- No blog/changelog content (routes stay as stubs)

On approval I'll switch to build mode and ship in the order above.
