import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Database,
  Layers,
  ShieldCheck,
  Sparkles,
  Plug,
  Filter,
  User,
  Briefcase,
  Building2,
  MessageSquare,
  Mail,
  FileSpreadsheet,
  StickyNote,
  CreditCard,
  Receipt,
  LifeBuoy,
  Users,
  Lock,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { CONNECTOR_LOGOS } from "@/components/site/ConnectorMarquee";
import { StickySubNav } from "@/components/site/StickySubNav";

const SUBNAV_ITEMS = [
  { id: "spine", label: "Spine" },
  { id: "how-it-works", label: "How it works" },
  { id: "digital-memory", label: "Digital Memory" },
  { id: "connectors", label: "Connectors" },
  { id: "security", label: "Security" },
  { id: "integrations", label: "Integrations" },
];

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Where scattered data becomes Digital Memory" },
      {
        name: "description",
        content:
          "The Spine connects your apps and turns only what matters into Digital Memory — Truth, Context and approved Session Summaries. Truth you own. AI you rent. Approval in between.",
      },
      { property: "og:title", content: "IntegrateWise Platform — Spine & Digital Memory" },
      {
        property: "og:description",
        content:
          "Not an ETL dump. A selective, opinionated layer that ingests only what your work actually needs to remember.",
      },
    ],
  }),
  component: PlatformPage,
});

const SOURCE_APPS: { name: string; icon: typeof MessageSquare }[] = [
  { name: "Tally", icon: Receipt },
  { name: "Razorpay", icon: CreditCard },
  { name: "CRM", icon: Users },
  { name: "Support", icon: LifeBuoy },
  { name: "WhatsApp", icon: MessageSquare },
  { name: "Sheets", icon: FileSpreadsheet },
  { name: "Gmail", icon: Mail },
  { name: "Notion", icon: StickyNote },
  { name: "Billing", icon: Receipt },
];

const THREE_LINES = [
  {
    title: "Truth",
    sub: "What actually happened.",
    body: "Transactions, invoices, payouts, refunds, usage events, sign‑ups, renewals, tickets, escalations, filings and SLAs — pulled from tools like Tally, Razorpay, CRMs and support platforms.",
    color: "var(--state-success)",
    icon: Database,
  },
  {
    title: "Context",
    sub: "Why it happened.",
    body: "WhatsApp threads, key email chains, meeting notes, SOWs, proposals, internal chats and comments that explain decisions, delays or changes.",
    color: "var(--state-info)",
    icon: MessageSquare,
  },
  {
    title: "Session Summaries",
    sub: "Governed AI knowledge.",
    body: "Short, AI‑generated summaries of important sessions and reviews that you have read and approved. Never raw chat logs.",
    color: "var(--brand-accent, var(--state-warning))",
    icon: Sparkles,
  },
];

const SCOPES = [
  {
    title: "User Memory",
    body: "Your personal notes, tasks, drafts and focus. Private by default inside your Personal Space.",
    icon: User,
  },
  {
    title: "Work Memory",
    body: "The professional work you run: clients, filings, accounts, projects and deals. Shared only with the people actually working that book of work.",
    icon: Briefcase,
  },
  {
    title: "Org Memory",
    body: "Shared company Memory that exists only when you intentionally create it. Reflects how your organisation sees itself — lines of business, regions, segments.",
    icon: Building2,
  },
];

const STEPS = [
  {
    n: "01",
    title: "Connect apps",
    body: "Use OAuth or an API key. No CSV exports, no custom scripts. Pick which ledgers, workspaces, boards or inboxes you want to remember from.",
    icon: Plug,
  },
  {
    n: "02",
    title: "Clean and link into the Spine",
    body: "The Spine cleans, deduplicates and links records across tools — joining invoices to accounts, tickets to customers, messages to work items, meetings to projects.",
    icon: Filter,
  },
  {
    n: "03",
    title: "Store as Digital Memory",
    body: "Stored as three distinct lines — Truth, Context and Session Summaries — tied to the same clients, projects, days and teams.",
    icon: Database,
  },
];

const CONNECTOR_GROUPS: { heading: string; items: string[] }[] = [
  { heading: "Finance & billing", items: ["Tally", "Zoho Books", "Razorpay", "Stripe", "QuickBooks"] },
  { heading: "CRM & pipeline", items: ["HubSpot", "Zoho CRM", "Salesforce"] },
  { heading: "Support & success", items: ["Freshdesk", "Zendesk", "Intercom"] },
  { heading: "Work & planning", items: ["Jira", "Asana", "ClickUp", "Notion", "Google Sheets", "Airtable"] },
  { heading: "Communication", items: ["WhatsApp", "Gmail", "Outlook", "Slack"] },
];

const SECURITY_BADGES = [
  { label: "SOC 2 in progress", icon: ShieldCheck },
  { label: "GDPR ready", icon: CheckCircle2 },
  { label: "Tenant isolation", icon: Lock },
  { label: "Approval‑gated", icon: ShieldCheck },
];

const LOOP_STEPS = [
  {
    title: "Apps → Spine → Digital Memory",
    body: "Scattered data from tools becomes governed Digital Memory.",
  },
  {
    title: "Digital Memory → Workspace",
    body: "Your Workspace consumes Memory and gives you stitched client, day and business views without manual dashboards.",
  },
  {
    title: "Digital Memory → Twin → Approval",
    body: "Your Twin reads from Memory, connects signals into proposals, and waits behind Approval.",
  },
  {
    title: "Executed in apps → New Truth & Context",
    body: "Approved actions execute back in your tools. Their results flow back into Digital Memory.",
  },
];

function PlatformPage() {
  const { open } = useDemoModal();

  return (
    <>
      <StickySubNav items={SUBNAV_ITEMS} />

      {/* 1. Hero — #spine */}
      <Section orbs id="spine" className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Platform</Badge>
            <h1 className="heading-h1 mt-5">
              Where scattered data becomes{" "}
              <span className="text-gradient-hero">Digital Memory.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              Your work already lives in many tools: Tally or Zoho Books for ledgers, Razorpay or
              Stripe for collections, CRMs for deals, support tools for tickets, WhatsApp and email
              for conversations, Sheets and Notion for plans.
            </p>
            <p className="mx-auto mt-4 text-[17px] leading-relaxed text-text-secondary">
              IntegrateWise connects these tools into a Spine and turns only what matters into
              Digital Memory — a clean, governed memory of your work that lives in one place and is
              ready for intelligence.
            </p>
            <p className="mx-auto mt-5 text-[15px] font-medium text-foreground/90">
              Truth you own. AI you rent. Approval in between.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open("Platform hero")} className="btn-primary-iw">
                Book a platform walkthrough <ArrowRight size={16} />
              </button>
              <a href="#how-it-works" className="btn-secondary-iw">
                See how it works
              </a>
            </div>
          </div>

          {/* Hero diagram */}
          <Reveal className="mx-auto mt-12 max-w-5xl">
            <div className="card-iw p-6 md:p-8" style={{ background: "var(--bg-surface)" }}>
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
                <div className="grid grid-cols-3 gap-2.5">
                  {SOURCE_APPS.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 rounded-lg border border-border bg-elevated/50 px-2.5 py-2"
                    >
                      <Icon size={14} className="text-text-secondary shrink-0" />
                      <span className="truncate text-[12px] text-foreground/85">{name}</span>
                    </div>
                  ))}
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <ArrowRight className="text-brand-accent" />
                </div>

                <div className="rounded-2xl border border-brand-accent/25 bg-brand-accent/5 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
                    Spine
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-foreground">
                    → Digital Memory
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    {THREE_LINES.map((l) => (
                      <div
                        key={l.title}
                        className="rounded-lg border border-border bg-elevated/60 px-2 py-2"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-text-secondary">
                          {l.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 2. Spine vs ETL — narrative under hero */}
      <Section alt id="spine-detail">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Spine</Badge>
            <h2 className="heading-h2 mt-4">Spine, not an ETL dump.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Most data tools behave like ETL: copy everything, dump every field, and call it a
              "warehouse". You end up with clutter that no one trusts. The Spine is different — a
              selective, opinionated layer between your apps and Digital Memory.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl items-stretch gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card-iw h-full p-6">
                <div className="flex items-center gap-2 text-brand-accent">
                  <Layers size={16} />
                  <p className="text-[12px] font-semibold uppercase tracking-wider">
                    How the Spine behaves
                  </p>
                </div>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                  <li>• Starts clean with focused entities — not a fake "instant knowledge base".</li>
                  <li>
                    • On first connect, ingests a minimal, meaningful slice: core clients and
                    accounts, key ledgers, open tickets, active tasks, upcoming meetings, basic
                    metrics.
                  </li>
                  <li>
                    • Expands only when fields earn it — when they matter in real workflows, not
                    because they exist in a source schema.
                  </li>
                  <li>• Leaves non‑essential fields safely in your source tools.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card-iw h-full p-6">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Filter size={16} />
                  <p className="text-[12px] font-semibold uppercase tracking-wider">
                    Your tools remain the source of record
                  </p>
                </div>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                  <li>• Tally remains your ledger. Your CRM remains your system of record.</li>
                  <li>• Anything outside the Spine's understanding stays in your tools.</li>
                  <li>• Clean, governed Memory instead of a noisy export.</li>
                  <li>• Provenance carried on every object: source system, scope, last update.</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[15px] italic text-text-secondary">
              We don't mirror every field; we ingest only what the Spine is designed to remember.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Flow into Digital Memory — #how-it-works steps + #digital-memory three lines */}
      <Section id="how-it-works">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">How it works</Badge>
            <h2 className="heading-h2 mt-4">How scattered data becomes Digital Memory.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Every piece of data that enters Digital Memory passes through the same three steps.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 100}>
                  <div className="card-iw h-full p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                        {s.n}
                      </span>
                      <Icon size={18} className="text-brand-accent" />
                    </div>
                    <h3 className="mt-4 text-[18px] font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-foreground/85">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={300} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[14px] leading-relaxed text-text-secondary">
              Only data that fits the Spine's understanding is ingested. The rest stays untouched
              in your systems.
            </p>
          </Reveal>

          {/* Three lines sub-section */}
          <div id="digital-memory" className="scroll-mt-24" />
          <Reveal className="mx-auto mt-20 max-w-3xl text-center">
            <h3 className="text-[28px] md:text-[32px] font-semibold text-foreground">
              Digital Memory: three lines that meet but don't mix.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
              Digital Memory is not a blob of text. It is three clearly separated strands.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
            {THREE_LINES.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="card-iw h-full p-6">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{
                        background: `color-mix(in oklab, ${c.color} 14%, transparent)`,
                        color: c.color,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <h4 className="mt-4 text-[20px] font-semibold text-foreground">{c.title}</h4>
                    <p className="mt-1 text-[13px] font-medium text-text-secondary">{c.sub}</p>
                    <p className="mt-3 text-[14px] leading-relaxed text-foreground/85">{c.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200} className="mx-auto mt-10 max-w-3xl text-center space-y-3">
            <p className="text-[15px] leading-relaxed text-foreground/90">
              Truth remains Truth. Context remains Context. Session Summaries stay clearly marked
              as AI‑generated and approved.
            </p>
            <p className="text-[14px] leading-relaxed text-text-secondary">
              <span className="text-brand-accent">Raw AI chat never writes directly into Digital Memory.</span>{" "}
              Only approved summaries and structured events enter Memory.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 4. Memory scopes — #memory-scopes */}
      <Section alt id="memory-scopes">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Scopes</Badge>
            <h2 className="heading-h2 mt-4">Memory that respects boundaries.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Digital Memory is always scoped. The Platform enforces three levels.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
            {SCOPES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="card-iw h-full p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-[18px] font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-foreground/85">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center space-y-2">
            <p className="text-[16px] font-medium text-foreground/90">
              Private by architecture. Shared by choice. Governed by you.
            </p>
            <p className="text-[14px] leading-relaxed text-text-secondary">
              Every object in Digital Memory carries provenance: source system, scope and last
              update. That makes reviews, audits and clean‑up practical instead of painful.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Connectors — #connectors */}
      <Section id="connectors">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Connectors</Badge>
            <h2 className="heading-h2 mt-4">Your tools stay. Your Memory changes.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The Platform meets you where you already work. Typical connectors include:
            </p>
          </Reveal>

          {/* Logo strip from existing connector logos */}
          <Reveal delay={120} className="mx-auto mt-8 max-w-5xl">
            <div className="card-iw p-5">
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                {CONNECTOR_LOGOS.slice(0, 15).map((l) => (
                  <div
                    key={l.name}
                    className="flex items-center justify-center gap-2 rounded-lg border border-border bg-elevated/40 px-3 py-3"
                    title={l.name}
                  >
                    <img src={l.src} alt="" aria-hidden className="h-5 w-auto" />
                    <span className="truncate text-[12px] text-foreground/85">{l.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Grouped lists */}
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-5">
            {CONNECTOR_GROUPS.map((g, i) => (
              <Reveal key={g.heading} delay={i * 70}>
                <div className="card-iw h-full p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
                    {g.heading}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[13.5px] text-foreground/85">
                    {g.items.map((it) => (
                      <li key={it}>• {it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={250} className="mx-auto mt-10 max-w-3xl text-center space-y-3">
            <p className="text-[15px] leading-relaxed text-foreground/90">
              You decide which tools to connect, which ledgers, workspaces, pipelines or views
              count as Work Memory, and which streams, labels or folders are eligible for Context.
            </p>
            <p className="text-[14px] leading-relaxed text-text-secondary">
              The Spine ingests only what Digital Memory is designed to remember. Your tools
              remain systems of record; the Platform becomes the system of Memory.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 6. Security — #security */}
      <Section alt id="security">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Security</Badge>
            <h2 className="heading-h2 mt-4">Private by architecture.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The Platform is built for governed Memory, not casual convenience.
            </p>
          </Reveal>

          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2.5">
            {SECURITY_BADGES.map((b) => {
              const Icon = b.icon;
              return (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated/50 px-3.5 py-1.5 text-[12.5px] font-medium text-foreground/90"
                >
                  <Icon size={13} className="text-brand-accent" />
                  {b.label}
                </span>
              );
            })}
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {[
              { icon: Lock, title: "Tenant‑isolated storage", body: "A dedicated, isolated store for every customer." },
              { icon: ShieldCheck, title: "Encryption everywhere", body: "Encryption in transit and at rest, end to end." },
              { icon: Globe, title: "Regional data options", body: "Pick the region that matches your compliance posture." },
              { icon: Users, title: "Role‑based access", body: "Permissions tied to Memory scopes — User, Work, Org." },
            ].map((it, i) => {
              const Icon = it.icon;
              return (
                <Reveal key={it.title} delay={i * 80}>
                  <div className="card-iw h-full p-5">
                    <div className="flex items-center gap-2 text-brand-accent">
                      <Icon size={16} />
                      <p className="text-[13px] font-semibold text-foreground">{it.title}</p>
                    </div>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                      {it.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[14.5px] leading-relaxed text-foreground/90">
              Approval‑gated intelligence: the Twin can never execute changes in your tools
              without explicit human Approval.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 6b. Integrations — #integrations */}
      <Section id="integrations">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Integrations</Badge>
            <h2 className="heading-h2 mt-4">Integrations that grow with you.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Start with the tools that power one book of work. Add more connectors as your Spine
              and Digital Memory deepen. New integrations join the same foundation — no new silos.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
            <Reveal>
              <div className="card-iw h-full p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
                  Pre‑built integrations
                </p>
                <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-[13.5px] text-foreground/85">
                  {[
                    "Tally",
                    "Razorpay",
                    "HubSpot",
                    "Zoho CRM",
                    "Freshdesk",
                    "Gmail",
                    "Slack",
                    "Notion",
                    "Google Sheets",
                    "Jira",
                  ].map((it) => (
                    <li key={it}>• {it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-iw h-full p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                  Coming soon / beta
                </p>
                <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-[13.5px] text-foreground/85">
                  {[
                    "Stripe",
                    "QuickBooks",
                    "Salesforce",
                    "Zendesk",
                    "Intercom",
                    "Asana",
                    "ClickUp",
                    "Airtable",
                    "WhatsApp",
                    "Outlook",
                  ].map((it) => (
                    <li key={it}>• {it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[14px] leading-relaxed text-text-secondary">
              Don't see a tool you need?{" "}
              <button
                onClick={() => open("Platform integrations request")}
                className="text-brand-accent underline-offset-4 hover:underline"
              >
                Tell us about your stack
              </button>
              .
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 7. The Loop — #loop */}
      <Section alt id="loop">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">The Loop</Badge>
            <h2 className="heading-h2 mt-4">
              Platform, Workspace, Twin — one strict Loop.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The Platform is the base of a strict loop. Approved actions execute in your tools.
              Results return as new Truth. Your Twin learns from every decision.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 lg:grid-cols-4">
            {LOOP_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card-iw h-full p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowRight size={14} className="text-brand-accent/70" />
                  </div>
                  <p className="mt-3 text-[14.5px] font-semibold text-foreground">{s.title}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-[15px] leading-relaxed text-foreground/90">
              This closed Loop means your work no longer resets every day.{" "}
              <span className="text-brand-accent">Your Memory compounds.</span>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 8. CTA */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">See how your stack becomes Digital Memory.</h2>
            <p className="mx-auto mt-4 text-[16px] leading-relaxed text-text-secondary">
              We'll connect a focused slice of your tools, show you the Spine in action, and walk
              through how Digital Memory powers your Workspace and Twin.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open("Platform CTA")} className="btn-primary-iw">
                Book a platform walkthrough <ArrowRight size={16} />
              </button>
              <button onClick={() => open("Platform CTA secondary")} className="btn-secondary-iw">
                Talk about your stack
              </button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
