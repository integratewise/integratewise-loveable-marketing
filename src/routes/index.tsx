import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Eye,
  ShieldCheck,
  Cpu,
  Database,
  Workflow,
  Layers,
  Network,
  Globe,
  Lock,
  Users,
  BarChart3,
  TrendingDown,
  LineChart,
  Zap,
  CheckCircle2,
  Quote,
  Server,
  FileCode2,
  Gauge,
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { CONNECTOR_LOGOS } from "@/components/site/ConnectorMarquee";
import { StaggerGroup, StaggerItem, Parallax } from "@/components/site/motion/Stagger";
import airtable from "@/assets/logos/airtable.svg";
import asana from "@/assets/logos/asana.svg";
import gdrive from "@/assets/logos/google-drive.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IntegrateWise — Stop being the human API between your tools." },
      {
        name: "description",
        content:
          "Every app runs on the Workspace. It turns raw data into scoped memory — relevant, stable, and ready to act on. AI proposes structured changes. The governance layer decides what becomes real.",
      },
      {
        property: "og:title",
        content: "IntegrateWise — Stop being the human API between your tools.",
      },
      {
        property: "og:description",
        content: "One workspace. Full context. Every action under your control.",
      },
    ],
  }),
  component: HomePage,
});

const EXTRA_LOGOS = [
  { src: airtable, name: "Airtable" },
  { src: asana, name: "Asana" },
  { src: gdrive, name: "Google Drive" },
];
const HERO_LOGOS = [...CONNECTOR_LOGOS, ...EXTRA_LOGOS];

function HomePage() {
  const { open, openEarlyAccess } = useDemoModal();

  return (
    <>
      {/* ========================= 1. HERO ========================= */}
      <section
        className="relative overflow-hidden pt-32 pb-20 lg:min-h-[90vh] lg:pt-40 lg:pb-28"
        aria-label="Hero"
      >
        {/* Background orbs */}
        <span
          aria-hidden
          className="orb orb-peach"
          style={{ width: 620, height: 620, top: -180, left: "55%" }}
        />
        <span
          aria-hidden
          className="orb orb-purple"
          style={{ width: 520, height: 520, top: 80, left: -140 }}
        />
        {/* Subtle grain overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: text stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="badge-iw badge-iw-muted">The Knowledge Workspace</span>
              <h1 className="heading-display mt-6">
                <span className="block">Stop being the</span>
                <span className="block text-gradient-hero">human API</span>
                <span className="block">between your tools.</span>
              </h1>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-text-secondary">
                Raw data in many tools becomes scoped memory — relevant, stable, and ready to act
                on. Your Twin proposes structured changes. You approve every move.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => open("Home hero")}
                  className="btn-primary-iw"
                >
                  See it live <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => openEarlyAccess("Home hero")}
                  className="btn-secondary-iw"
                >
                  Talk to a founder
                </button>
              </div>
              <p className="mt-5 text-[13px] text-text-secondary">
                SOC 2 ready · No card required · Setup in days
              </p>
            </motion.div>

            {/* Right: product preview card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroPreviewCard />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ========================= 2. SOCIAL PROOF / LOGOS ========================= */}
      <Section className="!py-12 lg:!py-16">
        <Container>
          <Parallax y={-18}>
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
              Teams use IntegrateWise to keep their tools in sync
            </p>
            <div className="marquee-mask relative mt-6 overflow-hidden py-4">
              <div className="marquee-track flex w-max items-center gap-10">
                {[...HERO_LOGOS, ...HERO_LOGOS].map((logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className="flex items-center gap-2.5 opacity-60 transition-opacity hover:opacity-100"
                  >
                    <img src={logo.src} alt="" aria-hidden className="h-7 w-auto grayscale" />
                    <span className="whitespace-nowrap text-[13.5px] font-medium text-text-secondary">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Parallax>
        </Container>
      </Section>

      {/* ========================= 3. VALUE PILLARS (3 cards) ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Why this works</span>
            <h2 className="heading-h2 mt-4">
              One system that remembers, proposes, and waits for you.
            </h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Three capabilities that replace the daily scramble across twelve tabs.
            </p>
          </Reveal>
          <StaggerGroup
            className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3"
            stagger={0.09}
          >
            {VALUE_PILLARS.map((p) => (
              <StaggerItem key={p.title} className="card-iw p-7">
                <div className="flex size-11 items-center justify-center rounded-full bg-brand-accent/10">
                  <p.icon size={20} className="text-brand-accent" />
                </div>
                <h3 className="mt-4 text-[18px] font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{p.body}</p>
                <div className="mt-4 text-[12.5px] font-semibold uppercase tracking-wider text-brand-accent">
                  {p.pill}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* ========================= 4. PRODUCT IN ACTION ========================= */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Product in action</span>
            <h2 className="heading-h2 mt-4">Show, not tell.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              See how scattered signals become clear, approved actions — in one workspace.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <ProductInAction />
          </Reveal>
        </Container>
      </Section>

      {/* ========================= 5. HOW IT WORKS (3 steps) ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">How it works</span>
            <h2 className="heading-h2 mt-4">
              Three services keep everything in one clear state.
            </h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              From raw connector data to approved action — in three steps.
            </p>
          </Reveal>
          <StaggerGroup
            className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3"
            stagger={0.1}
          >
            {HOW_STEPS.map((s) => (
              <StaggerItem key={s.n} className="card-iw p-7">
                <div className="flex size-9 items-center justify-center rounded-full border border-brand-accent/40 text-[15px] font-bold text-brand-accent">
                  {s.n}
                </div>
                <h3 className="mt-4 text-[18px] font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{s.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* ========================= 6. USE CASES / SOLUTIONS ========================= */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Use cases</span>
            <h2 className="heading-h2 mt-4">Real signals. Real actions.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Every scenario follows the same loop: signal detected → Twin scores → you approve.
            </p>
          </Reveal>
          <StaggerGroup
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {USE_CASES.map((u) => (
              <StaggerItem key={u.title} className="card-iw p-6">
                <span className="badge-iw badge-iw-muted">{u.tag}</span>
                <h3 className="mt-4 text-[18px] font-semibold text-foreground">{u.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">{u.signal}</p>
                <div className="mt-3 inline-flex rounded-md border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-1 text-[12px] font-semibold text-brand-highlight">
                  {u.score}
                </div>
                <p className="mt-3 text-[14px] text-foreground/90">{u.action}</p>
                <p className="mt-2 rounded-lg border border-border bg-white/[0.02] px-3 py-2 text-[13px] text-text-secondary">
                  {u.outcome}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* ========================= 7. PROOF / OUTCOMES ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-5xl">
            <div className="grid gap-5 md:grid-cols-3">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-border bg-white/[0.02] p-6 text-center"
                >
                  <div className="text-[36px] font-bold tracking-tight text-gradient-hero">
                    {m.value}
                  </div>
                  <p className="mt-2 text-[14px] text-text-secondary">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-xl border border-border bg-white/[0.02] p-8">
              <Quote size={28} className="text-brand-accent/40" />
              <blockquote className="mt-4 text-[17px] leading-relaxed text-foreground/90">
                "First tool I open every morning. The reset is gone — I just see what changed and
                approve the next move. We replaced four standing meetings with one Workspace view."
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-brand-accent text-[13px] font-bold text-text-inverse">
                  PM
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-foreground">Priya M.</div>
                  <div className="text-[13px] text-text-secondary">
                    VP Customer Success, Series B SaaS
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ========================= 8. ARCHITECTURE ========================= */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Architecture</span>
            <h2 className="heading-h2 mt-4">Built to absorb any tool.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Three services work together so every connector is a first-class citizen.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {ARCH_CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="card-iw p-7">
                <c.icon size={22} className="text-info" />
                <h3 className="mt-4 text-[19px] font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{c.body}</p>
                <div className="mt-4 text-[12.5px] font-semibold uppercase tracking-wider text-info">
                  {c.meta}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-[14px] leading-relaxed text-text-secondary">
              Runs on a modern, cloud-native stack. Secure by default with least-privilege access.
              Your data stays in your tenant — always.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ========================= 9. PRICING TEASER ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="heading-h2">Pricing that matches your footprint.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Starts with a pilot. Scales by workspaces, entities, and seats. No surprise overages,
              no forced annuals.
            </p>
            <div className="mt-7">
              <Link to="/pricing" className="btn-secondary-iw">
                View pricing <ArrowRight size={16} />
              </Link>
            </div>
            <p className="mt-4 text-[13px] text-text-secondary">
              No surprise overages · No forced annuals · Pilot-first
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ========================= 10. TRUST & COMPLIANCE STRIP ========================= */}
      <Section className="!py-12 lg:!py-16">
        <Container>
          <div className="grid gap-3 md:grid-cols-3">
            {TRUST_ITEMS.map((p) => (
              <div
                key={p.title}
                className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] px-5 py-4"
              >
                <p.icon size={18} className="shrink-0 text-success" />
                <div>
                  <div className="text-[14px] font-semibold text-foreground">{p.title}</div>
                  <div className="text-[12.5px] text-text-secondary">{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========================= 11. CLOSING CTA BAND ========================= */}
      <ClosingCtaBand />
    </>
  );
}

/* ====================================================================
   DATA
   ==================================================================== */

const VALUE_PILLARS = [
  {
    icon: Brain,
    title: "Scoped Memory",
    body: "One connected record across your apps. Accumulates with every update, every decision, every interaction — and never resets between mornings.",
    pill: "Scoped memory",
  },
  {
    icon: Eye,
    title: "Attention Layer",
    body: "Three things that need you today — surfaced before you ask. Your Twin reads truth, context, and governed session summaries to score what matters.",
    pill: "Governance",
  },
  {
    icon: ShieldCheck,
    title: "Approval Gate",
    body: "Nothing executes without you. Every move passes through the approval gate with full evidence, confidence scores, and a complete audit trail.",
    pill: "One active context",
  },
];

const HOW_STEPS = [
  {
    n: 1,
    title: "Connect & load",
    body: "OAuth into your tools. The Loader Service pulls data automatically — no CSV exports, no manual sync, no code. 70+ connectors available today.",
  },
  {
    n: 2,
    title: "Normalize to truth",
    body: "Every tool speaks a different language. The Adapter Pattern normalizes everything into one canonical schema — your single source of truth. Drift is detected and resolved automatically.",
  },
  {
    n: 3,
    title: "Twin proposes, you approve",
    body: "Your Twin reads scoped memory, scores signals, and prepares the next move with full evidence. You approve, edit, or reject. The decision becomes memory — and the loop compounds.",
  },
];

const USE_CASES = [
  {
    tag: "Account Success",
    title: "Churn detection",
    signal: "Usage dropped 40% · Champion left · 3 support tickets this week",
    score: "Twin score: 87 Critical",
    action: "Escalate to VP with QBR deck.",
    outcome: "90-day early warning vs. renewal-day surprise.",
  },
  {
    tag: "RevOps",
    title: "Pipeline clarity",
    signal: "Deal unchanged 21 days · No activity · Quarter ending",
    score: "Twin score: 55 Watch",
    action: "Verify deal status, update forecast.",
    outcome: "Pipeline accuracy improved by removing stale deals early.",
  },
  {
    tag: "BizOps",
    title: "System-wide visibility",
    signal: "Monday morning — 12 accounts changed status · 3 renewals this week",
    score: "Automated brief with prioritized actions",
    action: "Executives prepared in 2 minutes.",
    outcome: "vs. 45-min spreadsheet review every Monday.",
  },
  {
    tag: "Finance",
    title: "Revenue reconciliation",
    signal: "Stripe payment failed · Invoice overdue 14 days · Contract mismatch",
    score: "Twin score: 72 Action needed",
    action: "Flag for collections, update billing record.",
    outcome: "Cash collection cycle shortened by 11 days on average.",
  },
  {
    tag: "Ops Lead",
    title: "Integration drift",
    signal: "Jira schema changed upstream · 2 fields renamed · Mapping broken",
    score: "Auto-correction proposed",
    action: "Review and approve schema migration.",
    outcome: "Zero manual data cleanup. Drift resolved in minutes, not days.",
  },
  {
    tag: "Founder",
    title: "Board-ready snapshot",
    signal: "Quarter close · ARR, churn, pipeline, NPS all updated",
    score: "Automated board pack draft",
    action: "Review, adjust narrative, share.",
    outcome: "Board prep in 20 minutes vs. 2-day scramble.",
  },
];

const METRICS = [
  { value: "40%", label: "Less time reconciling tools" },
  { value: "2×", label: "Faster weekly reporting" },
  { value: "90 days", label: "Earlier churn warning vs. renewal day" },
];

const ARCH_CARDS = [
  {
    icon: Cpu,
    title: "Loader Service",
    body: "Connect any SaaS tool via OAuth or API key. Data flows in automatically — no CSV exports, no manual sync, no code. Auth, ingestion, and scheduling handled for you.",
    meta: "70+ connectors",
  },
  {
    icon: Workflow,
    title: "Adapter Pattern",
    body: "Every tool speaks a different language. The Adapter normalizes everything into one canonical schema — your single source of truth. Swap tools without losing history.",
    meta: "Schema-aware transformation",
  },
  {
    icon: Database,
    title: "Schema Registry",
    body: "Tracks every data shape from every connector. Detects drift, resolves conflicts, and keeps your truth layer clean — automatically. Data contracts enforced by default.",
    meta: "Auto-healing data contracts",
  },
];

const TRUST_ITEMS = [
  {
    icon: Globe,
    title: "Edge-first infrastructure",
    body: "Cloudflare Workers. Sub-50ms globally.",
  },
  {
    icon: Lock,
    title: "Enterprise security",
    body: "SOC 2 Type II ready. GDPR aligned. Tenant isolation.",
  },
  {
    icon: Users,
    title: "Founder-led support",
    body: "Every customer has a direct line to the team.",
  },
];

/* ====================================================================
   HERO PREVIEW CARD — glassmorphism AI suggestion blocks
   ==================================================================== */

function HeroPreviewCard() {
  const suggestions = [
    {
      title: "Churn risk detected",
      explanation: "Usage dropped 40% this month. Champion left the company. 3 escalation tickets opened this week.",
      chips: ["Usage -40%", "Champion left", "3 tickets"],
      confidence: 87,
      evidence: "Truth + Context + Session Summaries",
    },
    {
      title: "Pipeline drift",
      explanation: "Deal stalled 21 days with no activity. Quarter closes in 9 days. Forecast at risk.",
      chips: ["21d stale", "Q-close 9d", "No activity"],
      confidence: 72,
      evidence: "Salesforce + HubSpot + Calendar",
    },
    {
      title: "Schema change upstream",
      explanation: "Jira renamed 2 fields. Mapping broken for 3 accounts. Auto-correction ready.",
      chips: ["2 fields changed", "3 accounts", "Auto-fix ready"],
      confidence: 94,
      evidence: "Schema Registry + Jira API",
    },
  ];

  return (
    <div
      className="relative rounded-2xl border border-border p-1"
      style={{
        background: "rgba(28, 28, 28, 0.6)",
        backdropFilter: "blur(16px) saturate(1.3)",
        WebkitBackdropFilter: "blur(16px) saturate(1.3)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {/* Soft glow behind */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(255,225,204,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Faux browser chrome */}
      <div className="flex items-center gap-2 rounded-t-xl border-b border-border bg-white/[0.02] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-destructive/60" />
        <span className="size-2.5 rounded-full bg-warning/60" />
        <span className="size-2.5 rounded-full bg-success/60" />
        <span className="ml-3 text-[11px] text-text-secondary">
          workspace.integratewise.app
        </span>
      </div>

      {/* Suggestion blocks */}
      <div className="space-y-3 p-4">
        {suggestions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-border bg-white/[0.02] p-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-[14px] font-semibold text-foreground">{s.title}</h4>
              <span className="text-[11px] text-text-secondary">
                Confidence: {s.confidence}%
              </span>
            </div>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-text-secondary">
              {s.explanation}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {s.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-md border border-border bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-foreground/80"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-2.5 flex items-center justify-between">
              <span className="text-[11px] text-text-secondary">{s.evidence}</span>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  className="rounded-md border border-border bg-white/[0.02] px-2.5 py-1 text-[11px] font-medium text-text-secondary transition-colors hover:bg-white/[0.05] hover:text-foreground"
                >
                  Reject
                </button>
                <button
                  type="button"
                  className="rounded-md bg-brand-accent/90 px-2.5 py-1 text-[11px] font-semibold text-text-inverse transition-colors hover:bg-brand-accent"
                >
                  Approve
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ====================================================================
   PRODUCT IN ACTION — app-window mockup with tabs and scripted sequence
   ==================================================================== */

const ACCOUNTS_DATA = [
  {
    name: "Acme Corp",
    status: "Critical",
    health: 42,
    signal: "Usage -40%, champion left, 3 tickets",
  },
  {
    name: "TechServe India",
    status: "Healthy",
    health: 92,
    signal: "Expansion opportunity detected",
  },
  {
    name: "CloudBridge APAC",
    status: "At-Risk",
    health: 68,
    signal: "Payment failed, budget freeze mentioned",
  },
  {
    name: "FinanceFlow",
    status: "Critical",
    health: 29,
    signal: "Renewal in 29d, 3 P1 tickets open",
  },
  {
    name: "DataVault AU",
    status: "Healthy",
    health: 88,
    signal: "QBR scheduled, NPS 72",
  },
];

function statusColor(status: string) {
  if (status === "Healthy") return "text-success border-success/30 bg-success/10";
  if (status === "At-Risk") return "text-brand-highlight border-brand-highlight/30 bg-brand-highlight/10";
  return "text-destructive border-destructive/30 bg-destructive/10";
}

function ProductInAction() {
  return (
    <div
      className="mx-auto max-w-[900px] overflow-hidden rounded-2xl border border-border"
      style={{
        background: "rgba(28, 28, 28, 0.5)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-white/[0.02] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-destructive/60" />
        <span className="size-2.5 rounded-full bg-warning/60" />
        <span className="size-2.5 rounded-full bg-success/60" />
        <span className="ml-3 text-[11px] text-text-secondary">
          workspace.integratewise.app/accounts
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-border">
        {["Account view", "Signals", "Approvals"].map((tab, i) => (
          <button
            key={tab}
            type="button"
            className={
              "px-5 py-2.5 text-[13px] font-medium transition-colors " +
              (i === 0
                ? "border-b-2 border-brand-accent text-foreground"
                : "text-text-secondary hover:text-foreground")
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content: list + detail */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
        {/* Left: account list */}
        <div className="border-b border-border md:border-b-0 md:border-r">
          {ACCOUNTS_DATA.map((a, i) => (
            <div
              key={a.name}
              className={
                "flex items-center justify-between border-b border-border px-4 py-3 transition-colors " +
                (i === 0 ? "bg-white/[0.04]" : "hover:bg-white/[0.02]")
              }
            >
              <div className="min-w-0">
                <div className="truncate text-[13px] font-semibold text-foreground">{a.name}</div>
                <div className="text-[11px] text-text-secondary">Health: {a.health}/100</div>
              </div>
              <span
                className={
                  "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold " +
                  statusColor(a.status)
                }
              >
                {a.status}
              </span>
            </div>
          ))}
        </div>

        {/* Right: detail panel for selected account */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-[17px] font-semibold text-foreground">Acme Corp</h4>
              <p className="text-[12px] text-text-secondary">Enterprise · SaaS · $420K ARR</p>
            </div>
            <span className="rounded-full border border-destructive/30 bg-destructive/10 px-2.5 py-1 text-[11px] font-semibold text-destructive">
              Critical
            </span>
          </div>

          {/* Timeline */}
          <div className="mt-5 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
              Recent events
            </p>
            {[
              { time: "2h ago", event: "Support ticket #1847 escalated to P1", src: "Zendesk" },
              { time: "1d ago", event: "Champion Sarah Chen left the company", src: "LinkedIn" },
              { time: "3d ago", event: "Usage dropped 40% week-over-week", src: "Product analytics" },
              { time: "5d ago", event: "Budget freeze mentioned in email thread", src: "Gmail" },
            ].map((e) => (
              <div
                key={e.event}
                className="flex gap-3 rounded-lg border border-border bg-white/[0.02] px-3 py-2.5"
              >
                <span className="shrink-0 text-[11px] text-text-secondary">{e.time}</span>
                <div className="min-w-0">
                  <p className="text-[12.5px] text-foreground/90">{e.event}</p>
                  <p className="text-[11px] text-text-secondary">{e.src}</p>
                </div>
              </div>
            ))}
          </div>

          {/* AI suggestion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-5 rounded-xl border border-brand-highlight/30 bg-brand-highlight/5 p-4"
          >
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-brand-highlight twin-pulse" />
              <span className="text-[12px] font-semibold text-foreground">Twin Recommendation</span>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-foreground/90">
              Escalate to VP Customer Success with QBR deck. Schedule executive sponsor call within
              48 hours. Pause upsell motion until health recovers above 60.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                className="rounded-md bg-brand-accent/90 px-3 py-1.5 text-[12px] font-semibold text-text-inverse transition-colors hover:bg-brand-accent"
              >
                Approve
              </button>
              <button
                type="button"
                className="rounded-md border border-border px-3 py-1.5 text-[12px] font-medium text-text-secondary transition-colors hover:bg-white/[0.04]"
              >
                Reject
              </button>
              <span className="ml-auto text-[11px] text-text-secondary">Confidence: 87%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
