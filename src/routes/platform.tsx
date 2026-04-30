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
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { InPageNav } from "@/components/site/InPageNav";
import { useDemoModal } from "@/components/site/demo-modal-context";

const PLATFORM_NAV = [
  { id: "spine", label: "Spine" },
  { id: "memory", label: "Digital Memory" },
  { id: "integrations", label: "Integrations" },
  { id: "security", label: "Security" },
  { id: "how-it-works", label: "How it works" },
  { id: "stack", label: "The stack" },
];

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Where scattered data becomes Digital Memory" },
      {
        name: "description",
        content:
          "The Adaptive Spine connects your apps and turns only what matters into Digital Memory — Truth, Context, and approved Session Summaries, intersecting but never mixing.",
      },
      { property: "og:title", content: "IntegrateWise Platform — Adaptive Spine & Digital Memory" },
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

const STEPS = [
  {
    n: "01",
    title: "Connect apps",
    body: "OAuth or API. No CSV exports, no scripts.",
    icon: Plug,
  },
  {
    n: "02",
    title: "Clean and link into the Spine",
    body: "The Adaptive Spine cleans, deduplicates, and links records across tools.",
    icon: Filter,
  },
  {
    n: "03",
    title: "Store as Digital Memory",
    body: "Truth, Context, and approved Session Summaries are stored together as one living Memory.",
    icon: Database,
  },
];

const TRUST_BADGES = [
  { label: "SOC 2 Type II", icon: ShieldCheck },
  { label: "GDPR", icon: Lock },
  { label: "Tenant isolation", icon: Building2 },
  { label: "Approval-gated actions", icon: Sparkles },
];

function PlatformPage() {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero */}
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Still juggling your work?</Badge>
            <h1 className="heading-h1 mt-5">
              Where scattered data becomes{" "}
              <span className="text-gradient-hero">Digital Memory.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              You use WhatsApp, Tally, Razorpay, email, Google Sheets, Notion, your CRM, support and
              billing tools. Every day you act as the human API between them — copying, pasting,
              re-explaining. The Adaptive Spine connects those apps and turns only what matters into
              Digital Memory.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open()} className="btn-primary-iw">
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
                    Adaptive Spine
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

          <Reveal delay={120} className="mt-12">
            <InPageNav items={PLATFORM_NAV} />
          </Reveal>
        </Container>
      </Section>

      {/* 1. SPINE */}
      <Section id="spine" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Adaptive Spine</Badge>
            <h2 className="heading-h2 mt-4">Adaptive Spine, not a data dump.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The Spine connects WhatsApp, Tally, Razorpay, Gmail, Sheets, Notion, your CRM,
              support and billing tools. It pulls only what work actually needs, normalizes it, and
              links it into one schema.
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
                    • At first connect, pulls a minimal, meaningful slice: tasks, meetings, key
                    accounts, basic metrics.
                  </li>
                  <li>
                    • As real data flows in, the schema evolves — it learns how you structure work
                    and which fields matter.
                  </li>
                  <li>
                    • Digital Memory grows with you. As you grow, the schema and Memory grow along
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
                  <li>
                    • We don't copy every field from every system. The Adaptive Spine ingests only
                    what its schema is designed to remember.
                  </li>
                  <li>• Everything else stays in source tools.</li>
                  <li>• Clean, governed Memory instead of a noisy export.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 2. DIGITAL MEMORY */}
      <Section id="memory">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Digital Memory</Badge>
            <h2 className="heading-h2 mt-4">Three lines meet. They don't mix.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Digital Memory is where Truth, Context, and approved Session Summaries intersect. They
              live together — but they never lose their identity or their source.
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
              <span className="text-brand-accent">
                Raw AI chat never writes directly into Memory.
              </span>{" "}
              Only short summaries you have reviewed and approved make it in.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 3. INTEGRATIONS */}
      <Section id="integrations" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Integrations</Badge>
            <h2 className="heading-h2 mt-4">Connect the apps you already use.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              70+ connectors via OAuth and API — including WhatsApp, Tally, Razorpay, Gmail,
              Sheets, Notion, your CRM, support and billing tools. The Loader Service, Adapter
              Pattern, and Schema Registry decide what gets remembered.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
            {[
              {
                title: "Loader Service",
                body: "Pulls data over OAuth/API on a schedule. No CSV exports, no brittle scripts.",
                icon: Plug,
              },
              {
                title: "Adapter Pattern",
                body: "Each tool has an adapter that maps its fields into the Spine's clean schema.",
                icon: Layers,
              },
              {
                title: "Schema Registry",
                body: "The single source of what the Spine is designed to remember. Anything outside it stays in source tools.",
                icon: Database,
              },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="card-iw h-full p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-[18px] font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-foreground/85">{c.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={250} className="mx-auto mt-10 max-w-5xl">
            <div className="card-iw p-5">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                A few of the apps we connect
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2.5 sm:grid-cols-5 lg:grid-cols-9">
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
            </div>
          </Reveal>

          <Reveal delay={300} className="mx-auto mt-6 max-w-3xl text-center">
            <p className="text-[14px] italic text-text-secondary">
              We don't mirror every field; we ingest only what the Spine is designed to remember.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 4. SECURITY */}
      <Section id="security">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Security</Badge>
            <h2 className="heading-h2 mt-4">Your AI library, private by architecture.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Digital Memory is your AI library — for individuals as User Memory, and for
              organisations as Org Memory. Approved models read from a clean, governed source of
              truth, never the open internet.
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

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[16px] font-medium text-foreground/90">
              Private by architecture. Shared by choice. Governed by you.
            </p>
          </Reveal>

          <Reveal delay={320} className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3">
            {TRUST_BADGES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-border bg-elevated/60 px-3.5 py-1.5"
              >
                <Icon size={14} className="text-brand-accent" />
                <span className="text-[13px] text-foreground/90">{label}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* 5. HOW IT WORKS */}
      <Section id="how-it-works" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">How it works</Badge>
            <h2 className="heading-h2 mt-4">How data becomes Digital Memory.</h2>
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
              We only ingest what the Spine schema understands. The rest remains untouched in your
              systems.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 6. THE STACK */}
      <Section id="stack">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">The stack</Badge>
            <h2 className="heading-h2 mt-4">One Platform. Many ways to use it.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The Platform is universal. On top of it, the Workspace and Twin shape themselves
              around your day.
            </p>
          </Reveal>

          <Reveal delay={150} className="mx-auto mt-10 max-w-4xl">
            <div className="card-iw p-6 md:p-8" style={{ background: "var(--bg-surface)" }}>
              <div className="space-y-3">
                <div className="rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-5">
                  <div className="flex items-center gap-2 text-brand-accent">
                    <Sparkles size={16} />
                    <p className="text-[11px] font-semibold uppercase tracking-wider">
                      Twin — Intelligence Layer
                    </p>
                  </div>
                  <p className="mt-2 text-[14px] text-foreground/90">
                    Reads Memory, proposes actions, waits behind the Approval Gate.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-elevated/50 p-5">
                  <div className="flex items-center gap-2 text-foreground">
                    <Layers size={16} />
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      Adaptive Workspace — Product
                    </p>
                  </div>
                  <p className="mt-2 text-[14px] text-foreground/90">
                    Consumes Memory. The living screen where your work actually happens.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-elevated/30 p-5">
                  <div className="flex items-center gap-2 text-foreground">
                    <Database size={16} />
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      Adaptive Spine — Platform
                    </p>
                  </div>
                  <p className="mt-2 text-[14px] text-foreground/90">
                    Connects apps and accumulates Digital Memory — your AI library.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-elevated/40 p-4">
                <Globe size={16} className="text-brand-accent" />
                <p className="text-[13px] leading-relaxed text-foreground/85">
                  Built on Cloudflare Workers — edge-first, sub-50ms globally, designed for tenant
                  isolation and enterprise scale.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-2 text-[14px] text-foreground/80">
              <BookOpen size={16} className="text-brand-accent" />
              Models can change. Your Digital Memory and library stay.
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">See your data as Digital Memory.</h2>
            <p className="mx-auto mt-4 text-[16px] leading-relaxed text-text-secondary">
              In one demo we connect a few tools, show how the Adaptive Spine turns them into
              Digital Memory, and how the Workspace starts working from day one — no empty
              dashboards, no scripts.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open()} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
              </button>
              <button onClick={() => open()} className="btn-secondary-iw">
                Talk about your stack
              </button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
