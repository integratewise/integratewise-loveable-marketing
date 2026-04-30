import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Database,
  Layers,
  ShieldCheck,
  Sparkles,
  Plug,
  Filter,
  BookOpen,
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
  KeyRound,
  Cpu,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { SectionNav } from "@/components/site/SectionNav";
import { ConnectorOrbit } from "@/components/site/ConnectorOrbit";
import { ConnectorMarquee } from "@/components/site/ConnectorMarquee";
import { IntegrationsGrid } from "@/components/site/IntegrationsGrid";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { MEMORY_COPY } from "@/lib/site";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Where scattered data becomes Digital Memory" },
      {
        name: "description",
        content:
          "The Spine connects your apps and turns only what matters into Digital Memory — Truth, Context, and approved Session Summaries, intersecting but never mixing.",
      },
      { property: "og:title", content: "IntegrateWise Platform — Spine & Digital Memory" },
      {
        property: "og:description",
        content:
          "Not ETL. A clean, growing schema that ingests only what your work actually needs to remember.",
      },
    ],
  }),
  component: PlatformPage,
});

const SOURCE_APPS: { name: string; icon: typeof MessageSquare }[] = [
  { name: "WhatsApp", icon: MessageSquare },
  { name: "Tally", icon: Receipt },
  { name: "Razorpay", icon: CreditCard },
  { name: "Gmail", icon: Mail },
  { name: "Google Sheets", icon: FileSpreadsheet },
  { name: "Notion", icon: StickyNote },
  { name: "CRM", icon: Users },
  { name: "Support", icon: LifeBuoy },
  { name: "Billing", icon: Receipt },
];

const THREE_LINES = [
  {
    title: "Truth",
    sub: "What is actually happening.",
    body: "Transactions, usage, invoices, tickets, account records from your tools.",
    color: "var(--state-success)",
    icon: Database,
  },
  {
    title: "Context",
    sub: "Why it is happening.",
    body: "Emails, WhatsApp messages, chats, docs, notes around that work.",
    color: "var(--state-info)",
    icon: MessageSquare,
  },
  {
    title: "Session Summaries",
    sub: "Governed AI knowledge.",
    body: "Short AI-generated summaries you have reviewed and approved — never raw chat.",
    color: "var(--brand-accent, var(--state-warning))",
    icon: Sparkles,
  },
];

const SCOPES = [
  {
    title: "User Memory",
    body: "Your personal notes, tasks, drafts, and focus — private by default.",
    icon: User,
  },
  {
    title: "Work Memory",
    body: "Your professional work: clients, filings, accounts, deals — structured so you stop rebuilding the story every time.",
    icon: Briefcase,
  },
  {
    title: "Org Memory",
    body: "Shared company memory that exists only when you intentionally create a team space.",
    icon: Building2,
  },
];

const FLOW_STEPS = [
  { n: "01", title: "Apps", body: "WhatsApp, Tally, Razorpay, Gmail, Sheets, Notion, CRM…" },
  { n: "02", title: "Spine", body: "Cleans, dedupes, and links records across tools." },
  { n: "03", title: "Digital Memory", body: "Truth + Context + approved Session Summaries." },
  { n: "04", title: "Workspace", body: "Your living screen — built from Memory, not exports." },
  { n: "05", title: "Twin", body: "Reads Memory, proposes, never writes without approval." },
  { n: "06", title: "Approval → Loop", body: "You approve. Action runs. Memory learns." },
];

const SECURITY_PILLARS = [
  {
    title: "SOC 2 Type II",
    body: "Independently audited controls across security, availability, and confidentiality.",
    icon: ShieldCheck,
  },
  {
    title: "GDPR-ready",
    body: "Data subject rights, processor agreements, and EU-region storage on request.",
    icon: Globe,
  },
  {
    title: "Tenant isolation",
    body: "Your Memory is yours alone — strict row-level isolation, never co-mingled with other customers.",
    icon: Lock,
  },
  {
    title: "Cloudflare Workers edge",
    body: "Globally distributed compute, zero-trust network access, and DDoS-grade protection out of the box.",
    icon: Cpu,
  },
  {
    title: "Approval-gated execution",
    body: "Twin proposes; you decide. Every action is logged with the evidence it was based on.",
    icon: KeyRound,
  },
];

const INTEGRATION_LOGOS = [
  "Salesforce",
  "HubSpot",
  "Stripe",
  "Jira",
  "Notion",
  "Slack",
  "Zendesk",
  "Gmail",
  "Shopify",
  "QuickBooks",
  "Intercom",
  "GitHub",
  "Airtable",
  "Asana",
  "Google Drive",
];

function PlatformPage() {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero */}
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Platform</Badge>
            <h1 className="heading-h1 mt-5">
              Where scattered data becomes{" "}
              <span className="text-gradient-hero">Digital Memory.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              You use WhatsApp, Tally, Razorpay, email, Google Sheets, and more. The Spine connects
              these apps and turns only what matters into Digital Memory — a clean, growing memory
              of your work that lives in one place.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open("Platform · hero")} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
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
                  <p className="mt-1 text-[15px] font-semibold text-foreground">→ Digital Memory</p>
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

      {/* Sticky in-page nav */}
      <SectionNav
        items={[
          { id: "spine", label: "Spine" },
          { id: "how-it-works", label: "How it works" },
          { id: "digital-memory", label: "Digital Memory" },
          { id: "connectors", label: "Connectors" },
          { id: "security", label: "Security" },
          { id: "integrations", label: "Integrations" },
        ]}
      />

      {/* 1. Spine */}
      <Section id="spine" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Spine</Badge>
            <h2 className="heading-h2 mt-4">Spine, not a data dump.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              One layer that connects every app — cleans, links, and time-stamps records into a
              clean, growing schema. It is not ETL. It learns how you structure work and only
              ingests what your Memory is designed to remember.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card-iw h-full p-6">
                <div className="flex items-center gap-2 text-brand-accent">
                  <Layers size={16} />
                  <p className="text-[12px] font-semibold uppercase tracking-wider">
                    A growing schema
                  </p>
                </div>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                  <li>• Starts as a clean schema, not a fake "instant knowledge base".</li>
                  <li>
                    • At first connect, pulls a minimal, meaningful slice of data: tasks, meetings,
                    key clients/accounts, basic metrics.
                  </li>
                  <li>
                    • As real data flows in, the Spine learns how you structure work and which
                    fields matter.
                  </li>
                  <li>
                    • Digital Memory grows with you — as you grow, the schema and Memory grow along
                    with you.
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card-iw h-full p-6">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Filter size={16} />
                  <p className="text-[12px] font-semibold uppercase tracking-wider">
                    Different from ETL tools
                  </p>
                </div>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                  <li>• We don't copy every field from every system.</li>
                  <li>• The Spine ingests only what its schema is designed to remember.</li>
                  <li>• Everything else stays in source tools.</li>
                  <li>• Clean, governed Memory instead of a noisy export.</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mx-auto mt-6 max-w-3xl text-center">
            <p className="text-[14px] italic text-text-secondary">
              We don't mirror every field; we ingest only what the Spine is designed to remember.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 2. How it works */}
      <Section id="how-it-works">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">How it works</Badge>
            <h2 className="heading-h2 mt-4">
              Apps → Spine → Memory → Workspace → Twin → Approval → Loop.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Data flows in. Memory accumulates. Workspace makes it usable. Twin proposes. You
              approve. Every approved action becomes new Truth — and the loop closes.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FLOW_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="card-iw h-full p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                      {s.n}
                    </span>
                    <Plug size={16} className="text-brand-accent" />
                  </div>
                  <h3 className="mt-3 text-[16px] font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/85">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Digital Memory */}
      <Section id="digital-memory" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Digital Memory</Badge>
            <h2 className="heading-h2 mt-4">
              Memory that <span className="text-brand-accent">accumulates</span> — then gets reused.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              {MEMORY_COPY.primary}
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
                    <h3 className="mt-4 text-[20px] font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-1 text-[13px] font-medium text-text-secondary">{c.sub}</p>
                    <p className="mt-3 text-[14px] leading-relaxed text-foreground/85">{c.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200} className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-[16px] leading-relaxed text-foreground/90">
              Three lines meet in one place but never lose their identity or source.{" "}
              <span className="text-brand-accent">
                Raw AI chat never writes directly into Memory.
              </span>
            </p>
          </Reveal>

          {/* Memory scopes (kept here as part of Memory story) */}
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-3">
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
          <Reveal delay={250} className="mx-auto mt-6 max-w-3xl text-center">
            <p className="text-[15px] font-medium text-foreground/90">
              Private by architecture. Shared by choice. Governed by you.
            </p>
          </Reveal>

          {/* AI library */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="card-iw h-full p-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-brand-accent" />
                  <h3 className="text-[18px] font-semibold text-foreground">Your AI library</h3>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/85">
                  Your notes, tasks, messages, and work become "your AI library". Models answer
                  based on your data — not random web pages.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-iw h-full p-6">
                <div className="flex items-center gap-2">
                  <Building2 size={18} className="text-brand-accent" />
                  <h3 className="text-[18px] font-semibold text-foreground">
                    For your organisation
                  </h3>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/85">
                  Org Memory becomes "your org AI" — a governed library of company data and
                  decisions. Any allowed model can use it without mixing with other customers.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[16px] font-medium text-foreground/90">
              Models can change. Your Digital Memory and library stay.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 4. Connectors */}
      <Section id="connectors">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <Badge variant="muted">Connectors</Badge>
              <h2 className="heading-h2 mt-4">70+ schema-aware connectors.</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
                Every connector is built on the same loader service and adapter pattern, mapped to
                the Spine's schema registry. Connect once and the Spine handles change tracking,
                deduplication, and entity resolution across tools.
              </p>
              <ul className="mt-5 space-y-2.5 text-[14px] text-foreground/90">
                <li className="flex items-start gap-2">
                  <Plug size={16} className="mt-0.5 shrink-0 text-brand-accent" />
                  Connector framework — common loader, retries, observability.
                </li>
                <li className="flex items-start gap-2">
                  <Filter size={16} className="mt-0.5 shrink-0 text-brand-accent" />
                  Adapter pattern — each tool maps cleanly to the same schema.
                </li>
                <li className="flex items-start gap-2">
                  <Database size={16} className="mt-0.5 shrink-0 text-brand-accent" />
                  Schema registry — Memory grows; old data keeps working.
                </li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-iw p-4 sm:p-6" style={{ background: "var(--bg-surface)" }}>
                <ConnectorOrbit size={520} />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 5. Security */}
      <Section id="security" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Security</Badge>
            <h2 className="heading-h2 mt-4">Security and governance, by architecture.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Your Memory is yours. Tenant-isolated, audit-logged, approval-gated — built for
              regulated work, not just demos.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY_PILLARS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 60}>
                  <div className="card-iw h-full p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-[16px] font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/85">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 6. Integrations */}
      <Section id="integrations">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Integrations</Badge>
            <h2 className="heading-h2 mt-4">The tools you already use.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Salesforce, HubSpot, Stripe, Jira, Notion, Slack, Zendesk, Gmail, Shopify, QuickBooks,
              Intercom, GitHub, Airtable, Asana, Google Drive — and more added every month based on
              real customer demand.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2"
          >
            {INTEGRATION_LOGOS.map((name) => (
              <span
                key={name}
                className="rounded-full border border-border bg-elevated/50 px-3 py-1.5 text-[12.5px] text-foreground/90"
              >
                {name}
              </span>
            ))}
          </Reveal>

          <div className="mt-12">
            <ConnectorMarquee />
          </div>
          <div className="mt-10">
            <IntegrationsGrid />
          </div>

          <Reveal delay={150} className="mx-auto mt-12 max-w-3xl text-center">
            <div className="card-iw p-6">
              <h3 className="text-[20px] font-semibold text-foreground">
                See your stack become accumulating Memory.
              </h3>
              <p className="mt-3 text-[15px] text-text-secondary">
                In a live session we connect your tools, show what flows into the Spine, and walk
                through the Workspace built on top.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button onClick={() => open("Platform · CTA")} className="btn-primary-iw">
                  Book a demo <ArrowRight size={16} />
                </button>
                <button onClick={() => open("Platform · stack chat")} className="btn-secondary-iw">
                  Talk about your stack
                </button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
