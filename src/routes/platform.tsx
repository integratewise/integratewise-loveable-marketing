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
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { InPageNav } from "@/components/site/InPageNav";
import { useDemoModal } from "@/components/site/demo-modal-context";

const PLATFORM_NAV = [
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

function PlatformPage() {
  const { open } = useDemoModal();

  return (
    <>
      {/* 1. Hero */}
      <Section id="spine" orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Still juggling your work?</Badge>
            <h1 className="heading-h1 mt-5">
              Where scattered data becomes{" "}
              <span className="text-gradient-hero">Digital Memory.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              You use WhatsApp, Tally, Razorpay, email, Google Sheets, and more. The Adaptive Spine
              connects these apps and turns only what matters into Digital Memory — a clean, growing
              memory of your work that lives in one place.
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
                {/* Apps */}
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

                {/* Arrow */}
                <div className="hidden lg:flex items-center justify-center">
                  <ArrowRight className="text-brand-accent" />
                </div>

                {/* Spine → Memory */}
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

      {/* 2. From scattered apps to Digital Memory */}
      <Section id="digital-memory" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">The end of the Human API</Badge>
            <h2 className="heading-h2 mt-4">From scattered apps to Digital Memory.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Today your work is split across WhatsApp, Tally, Razorpay, email, Sheets, Notion, CRMs,
              support tools. Because they don't talk to each other, you do the copy-paste and
              tab-switching. The Platform is where that ends.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl items-stretch gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card-iw h-full p-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                  Your apps today
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {SOURCE_APPS.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 rounded-lg border border-border bg-elevated/50 px-3 py-2"
                    >
                      <Icon size={14} className="text-text-secondary shrink-0" />
                      <span className="truncate text-[13px] text-foreground/90">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className="h-full rounded-2xl border border-brand-accent/25 p-6"
                style={{ background: "color-mix(in oklab, var(--brand-accent) 6%, transparent)" }}
              >
                <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                  Adaptive Spine → Digital Memory
                </p>
                <h3 className="mt-3 text-[22px] font-semibold leading-snug text-foreground">
                  One clean, growing memory of your work.
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                  The Spine pulls only what your work actually needs. It cleans it, links it, and
                  keeps it up to date — so you stop being the manual bridge between apps.
                </p>
                <div className="mt-5 flex items-center gap-2 text-[13px] text-foreground/80">
                  <ShieldCheck size={16} className="text-brand-accent" />
                  Truth you own. AI you rent. Approval in between.
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 3. Three lines of Digital Memory */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Digital Memory</Badge>
            <h2 className="heading-h2 mt-4">Three lines meet. They don't mix.</h2>
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
              Digital Memory is where Truth, Context, and approved Session Summaries intersect. They
              meet in one place, but they never lose their identity or source.{" "}
              <span className="text-brand-accent">
                Raw AI chat never writes directly into Memory.
              </span>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 4. Adaptive Spine — growing schema, selective ingest */}
      <Section alt id="connectors">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Adaptive Spine</Badge>
            <h2 className="heading-h2 mt-4">Adaptive Spine, not a data dump.</h2>
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
                  <li>
                    • The Adaptive Spine ingests only what its schema is designed to remember.
                  </li>
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

      {/* 5. AI library */}
      <Section id="integrations">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">AI library</Badge>
            <h2 className="heading-h2 mt-4">Your AI library, ready for any model.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Digital Memory is also your AI library. Instead of guessing from the open internet,
              any approved model reads from one clean, governed source of truth.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="card-iw h-full p-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-brand-accent" />
                  <h3 className="text-[18px] font-semibold text-foreground">For you</h3>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/85">
                  Your notes, tasks, messages, and work become "your AI library". Models answer
                  based on your data, not random web pages.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-iw h-full p-6">
                <div className="flex items-center gap-2">
                  <Building2 size={18} className="text-brand-accent" />
                  <h3 className="text-[18px] font-semibold text-foreground">For your organisation</h3>
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

      {/* 6. From apps to Memory in three steps */}
      <Section alt id="how-it-works">
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

      {/* 7. Memory scopes */}
      <Section id="security">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Memory scopes</Badge>
            <h2 className="heading-h2 mt-4">Memory that respects boundaries.</h2>
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
        </Container>
      </Section>

      {/* 8. Platform → Product → Twin */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">The stack</Badge>
            <h2 className="heading-h2 mt-4">One Platform. Many ways to use it.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The Platform is universal. On top of it, the Adaptive Workspace and Twin shape
              themselves around your day.
            </p>
          </Reveal>

          <Reveal delay={150} className="mx-auto mt-10 max-w-4xl">
            <div className="card-iw p-6 md:p-8" style={{ background: "var(--bg-surface)" }}>
              <div className="space-y-3">
                {/* Twin */}
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
                {/* Workspace */}
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
                {/* Spine */}
                <div className="rounded-xl border border-border bg-elevated/30 p-5">
                  <div className="flex items-center gap-2 text-foreground">
                    <Database size={16} />
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      Adaptive Spine — Platform
                    </p>
                  </div>
                  <p className="mt-2 text-[14px] text-foreground/90">
                    Connects apps and accumulates Digital Memory / your AI library.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 9. CTA */}
      <Section>
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
