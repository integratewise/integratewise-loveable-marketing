import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Database,
  ShieldCheck,
  Sparkles,
  Plug,
  MessageSquare,
  Mail,
  FileSpreadsheet,
  CreditCard,
  Receipt,
  Users,
  LifeBuoy,
  StickyNote,
  Lock,
  Globe,
  KeyRound,
  Cpu,
  Workflow,
  Layers,
  RefreshCw,
  Boxes,
  GitBranch,
  CheckCircle2,
  Eye,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { SectionNav } from "@/components/site/SectionNav";
import { ConnectorMarquee, CONNECTOR_LOGOS } from "@/components/site/ConnectorMarquee";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — The Spine that turns your data into Digital Memory" },
      {
        name: "description",
        content:
          "The Spine connects the apps that run your business and turns their data into one living Digital Memory — so your team, your Workspace, and your Twin always start from the same truth.",
      },
      {
        property: "og:title",
        content: "IntegrateWise Platform — Spine, Digital Memory, Connectors",
      },
      {
        property: "og:description",
        content:
          "Connect your apps once. The Spine keeps them in sync and turns their data into one Digital Memory that survives tool and model changes.",
      },
    ],
  }),
  component: PlatformPage,
});

/* ----------------------------- content tokens ----------------------------- */

const SOURCE_APPS = [
  { name: "Salesforce", icon: Users },
  { name: "HubSpot", icon: Users },
  { name: "Stripe", icon: CreditCard },
  { name: "Zendesk", icon: LifeBuoy },
  { name: "Gmail", icon: Mail },
  { name: "Slack", icon: MessageSquare },
  { name: "Notion", icon: StickyNote },
  { name: "Sheets", icon: FileSpreadsheet },
  { name: "QuickBooks", icon: Receipt },
];

const MEMORY_LAYERS = [
  {
    title: "Truth",
    sub: "What is actually happening.",
    body: "Revenue, usage, tickets, renewals, contracts — the events from the systems that run your business.",
    icon: Database,
  },
  {
    title: "Context",
    sub: "Why it is happening.",
    body: "Emails, calls, meeting notes, QBR decks — the conversations sitting around every record.",
    icon: MessageSquare,
  },
  {
    title: "Memory",
    sub: "What you decided.",
    body: "Summaries, playbooks, past actions and their results — the institutional knowledge worth keeping.",
    icon: Sparkles,
  },
];

const SPINE_OUTCOMES = [
  "No more reconciling the same account across CRM, billing, and support.",
  "Tool changes or AI model swaps don't wipe out your history.",
  "Every system, person, and view sees the same version of reality.",
];

const HOW_STEPS = [
  {
    n: "01",
    title: "Connect sources",
    icon: Plug,
    body: "Connect your apps and systems with OAuth or API key — no CSV exports, no custom scripts.",
  },
  {
    n: "02",
    title: "Ingest & unify",
    icon: RefreshCw,
    body: "Data flows into the Spine. Duplicates merge, conflicts resolve, and each account, contact, and transaction becomes a single record of reality.",
  },
  {
    n: "03",
    title: "Add context",
    icon: MessageSquare,
    body: "Tickets, emails, meetings, and docs attach as context, so every change has a 'why' next to the 'what'.",
  },
  {
    n: "04",
    title: "Store as Digital Memory",
    icon: Sparkles,
    body: "Truth and context are stored as an independent Digital Memory that survives app swaps and AI model changes.",
  },
  {
    n: "05",
    title: "Expose to everything above",
    icon: Eye,
    body: "Workspace, Twin, and reporting all read from this same Digital Memory — every view starts from shared truth, not a guess.",
  },
];

const SECURITY_PILLARS = [
  {
    title: "Tenant isolation",
    icon: Lock,
    body: "Each customer's Digital Memory is isolated by design — never co-mingled, never shared across tenants.",
  },
  {
    title: "Drift detection",
    icon: GitBranch,
    body: "When a source changes shape, the Spine flags schema drift instead of failing silently or corrupting history.",
  },
  {
    title: "Audit history",
    icon: FileSpreadsheet,
    body: "Every write into Digital Memory is logged with source, time, and actor — fully traceable, end to end.",
  },
  {
    title: "Approval boundary",
    icon: KeyRound,
    body: "Models and automations read freely. Every write back to your apps or Memory must pass an explicit Approval Gate.",
  },
  {
    title: "Compliance posture",
    icon: ShieldCheck,
    body: "Built with SOC 2 Type II controls and GDPR-ready data handling as defaults — not bolt-ons.",
  },
  {
    title: "Edge-native runtime",
    icon: Cpu,
    body: "Runs on globally distributed compute with zero-trust network access and DDoS-grade protection out of the box.",
  },
];

const INTEGRATION_SERVICES = [
  {
    title: "Loader",
    icon: Plug,
    body: "Keeps each integration fed via OAuth or API key — handling pagination, backfills, and incremental syncs.",
  },
  {
    title: "Adapter",
    icon: Layers,
    body: "Transforms each app's schema into a shared language for accounts, people, money, and activity.",
  },
  {
    title: "Registry",
    icon: Boxes,
    body: "Tracks every data shape over time, detects drift, and automatically reconciles compatible changes.",
  },
];

const INTEGRATION_OUTCOMES = [
  "Fewer brittle, one-off scripts to maintain.",
  "Integrations that survive schema changes.",
  "Every integration contributes to one governed Digital Memory — never another silo.",
];

/* Live vs Coming Soon badging on the connector grid. */
const COMING_SOON = new Set<string>(["Intercom", "GitHub"]);

/* ---------------------------------- page ---------------------------------- */

function PlatformPage() {
  const { open, openEarlyAccess } = useDemoModal();

  return (
    <>
      {/* 0. Hero */}
      <Section id="platform-hero" orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Platform</Badge>
            <h1 className="heading-h1 mt-5">
              The platform that turns your data into{" "}
              <span className="text-gradient-hero">memory.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              Connect the apps that run your business. The Spine keeps them in sync and turns their
              data into one living Digital Memory — so your Workspace, your Twin, and your team
              always start from the same truth, no matter which tools you change above it.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open("Platform · hero")} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
              </button>
              <a href="#connectors" className="btn-secondary-iw">
                See connectors
              </a>
            </div>
          </div>

          {/* Hero diagram: Apps → Spine → Digital Memory → Workspace / Twin */}
          <Reveal className="mx-auto mt-12 max-w-5xl">
            <div className="card-iw p-6 md:p-8" style={{ background: "var(--bg-surface)" }}>
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
                {/* Apps */}
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                    Apps
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {SOURCE_APPS.map(({ name, icon: Icon }) => (
                      <div
                        key={name}
                        className="flex items-center gap-1.5 rounded-lg border border-border bg-elevated/50 px-2 py-1.5"
                      >
                        <Icon size={12} className="shrink-0 text-text-secondary" />
                        <span className="truncate text-[11px] text-foreground/85">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <ArrowRight className="hidden lg:block text-brand-accent" />
                {/* Spine → Digital Memory */}
                <div className="rounded-2xl border border-brand-accent/25 bg-brand-accent/5 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
                    Spine
                  </p>
                  <p className="mt-1 text-[14px] font-semibold text-foreground">
                    → Digital Memory
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
                    {MEMORY_LAYERS.map((l) => (
                      <div
                        key={l.title}
                        className="rounded-md border border-border bg-elevated/60 px-1.5 py-1.5"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-text-secondary">
                          {l.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <ArrowRight className="hidden lg:block text-brand-accent" />
                {/* Consumers */}
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                    Reads from Memory
                  </p>
                  <div className="space-y-2">
                    {[
                      { label: "Workspace", body: "Your living work surface." },
                      { label: "Twin", body: "Proposes; never writes without approval." },
                      { label: "Team & reporting", body: "One shared truth." },
                    ].map((c) => (
                      <div
                        key={c.label}
                        className="rounded-lg border border-border bg-elevated/50 px-3 py-2"
                      >
                        <p className="text-[12px] font-semibold text-foreground">{c.label}</p>
                        <p className="text-[11px] text-text-secondary">{c.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Sticky in-page nav (matches spec section order) */}
      <SectionNav
        items={[
          { id: "spine", label: "Spine" },
          { id: "digital-memory", label: "Digital Memory" },
          { id: "connectors", label: "Connectors" },
          { id: "how-it-works", label: "How it works" },
          { id: "security", label: "Security" },
          { id: "integrations", label: "Integrations" },
          { id: "platform-cta", label: "Get started" },
        ]}
      />

      {/* 1. Spine */}
      <Section id="spine" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Spine</Badge>
            <h2 className="heading-h2 mt-4">The Spine that holds everything together.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The Spine is the underlying platform. It connects your apps and systems, normalizes
              and reconciles their data, and keeps a single, stable source of truth as your tools
              and AI models evolve.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-text-secondary">
              Apps plug into the Spine once. From there, it handles sync, conflict resolution, and
              schema changes — so Workspace, Twin, and reporting can all read from the same
              Spine-backed Digital Memory.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-3">
            {SPINE_OUTCOMES.map((line, i) => (
              <Reveal key={line} delay={i * 80}>
                <div className="card-iw flex items-start gap-3 p-4">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-accent" />
                  <p className="text-[15px] leading-relaxed text-foreground/90">{line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2. Digital Memory */}
      <Section id="digital-memory">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Digital Memory</Badge>
            <h2 className="heading-h2 mt-4">From scattered data to one Digital Memory.</h2>
          </Reveal>

          {/* Before / After */}
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="card-iw h-full p-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                  Before
                </p>
                <h3 className="mt-2 text-[18px] font-semibold text-foreground">
                  Truth scattered across every tool.
                </h3>
                <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-foreground/85">
                  <li>• Account data lives across CRM, billing, support, docs, and chat.</li>
                  <li>• Every decision means reconciling exports, dashboards, and DMs.</li>
                  <li>• Context resets the moment you swap a tool or model.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="card-iw h-full p-6"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--brand-accent) 6%, transparent), transparent)",
                }}
              >
                <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                  After
                </p>
                <h3 className="mt-2 text-[18px] font-semibold text-foreground">
                  One living Digital Memory.
                </h3>
                <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-foreground/90">
                  <li>• The Spine ingests from every source.</li>
                  <li>• Conflicts resolve. Records merge. History stays intact.</li>
                  <li>• A live, consistent view of what's really happening — for everyone.</li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Three layers */}
          <Reveal className="mx-auto mt-14 max-w-3xl text-center">
            <h3 className="heading-h3">Memory has three layers.</h3>
            <p className="mt-3 text-[15.5px] leading-relaxed text-text-secondary">
              Each one stays distinct, sourced, and traceable — so AI never confuses what happened
              with what someone said about it.
            </p>
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-6xl gap-5 lg:grid-cols-3">
            {MEMORY_LAYERS.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="card-iw h-full p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
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

          <Reveal delay={200} className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-[16px] leading-relaxed text-foreground/90">
              Digital Memory is what your Workspace and Twin actually consume.{" "}
              <span className="text-brand-accent">
                It does not reset when you swap tools or AI models.
              </span>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Connectors */}
      <Section id="connectors" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Connectors</Badge>
            <h2 className="heading-h2 mt-4">Connect the apps that already run your work.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The Spine plugs into the systems you already trust — CRM, billing, support, warehouse,
              docs, and chat — then keeps them in sync so you don't have to stitch spreadsheets
              together.
            </p>
          </Reveal>

          {/* Connector grid with Live / Coming Soon badges */}
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {CONNECTOR_LOGOS.map((logo, i) => {
              const isComing = COMING_SOON.has(logo.name);
              return (
                <Reveal
                  key={logo.name}
                  delay={i * 30}
                  className="card-iw flex items-center justify-between gap-2 px-3 py-3"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <img src={logo.src} alt="" aria-hidden className="h-6 w-auto shrink-0" />
                    <span className="truncate text-[13.5px] font-medium text-foreground/90">
                      {logo.name}
                    </span>
                  </div>
                  {isComing ? (
                    <span className="shrink-0 rounded-full border border-border bg-elevated px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
                      Soon
                    </span>
                  ) : (
                    <span
                      className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        background: "color-mix(in oklab, var(--state-success) 14%, transparent)",
                        color: "var(--state-success)",
                      }}
                    >
                      Live
                    </span>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={150} className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-[15px] leading-relaxed text-text-secondary">
              If a system changes, your Digital Memory stays intact.{" "}
              <span className="text-foreground">
                The Spine absorbs schema changes without throwing away history.
              </span>
            </p>
          </Reveal>

          <div className="mt-10">
            <ConnectorMarquee />
          </div>
        </Container>
      </Section>

      {/* 4. How it works */}
      <Section id="how-it-works">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">How it works</Badge>
            <h2 className="heading-h2 mt-4">How the Spine builds your Digital Memory.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Five steps. Same loop, every day. Your Memory gets a little richer with every sync.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {HOW_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 60}>
                  <div className="card-iw h-full p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                        {s.n}
                      </span>
                      <Icon size={16} className="text-brand-accent" />
                    </div>
                    <h3 className="mt-3 text-[15px] font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-foreground/85">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={250} className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-[17px] font-medium text-foreground">
              Without the Spine, there is no Digital Memory.{" "}
              <span className="text-text-secondary">Without memory, AI is guessing.</span>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Security */}
      <Section id="security" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Security</Badge>
            <h2 className="heading-h2 mt-4">Stable truth, governed access.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The Spine and your Digital Memory are owned, auditable, and governed — never a black
              box. Every read is scoped. Every write is approved.
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

          <Reveal delay={250} className="mx-auto mt-10 max-w-3xl text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2">
              {["SOC 2 Type II", "GDPR-ready", "Tenant isolation", "Approval-gated"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-elevated/60 px-3 py-1.5 text-[12.5px] font-medium text-foreground/90"
                >
                  <ShieldCheck size={12} className="mr-1 inline -mt-0.5 text-brand-accent" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 6. Integrations */}
      <Section id="integrations">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Integrations</Badge>
            <h2 className="heading-h2 mt-4">
              Integrations that behave like first-class citizens.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Every integration sits on top of the Spine through three cooperating services. The
              result: connections that don't break the moment a vendor changes their API.
            </p>
          </Reveal>

          {/* Loader / Adapter / Registry */}
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
            {INTEGRATION_SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="card-iw h-full p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-[18px] font-semibold text-foreground">{s.title}</h3>
                    </div>
                    <p className="mt-4 text-[14px] leading-relaxed text-foreground/85">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Outcomes */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-3">
            {INTEGRATION_OUTCOMES.map((line, i) => (
              <Reveal key={line} delay={i * 80}>
                <div className="card-iw flex items-start gap-3 p-4">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-accent" />
                  <p className="text-[15px] leading-relaxed text-foreground/90">{line}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-[15px] leading-relaxed text-text-secondary">
              <Workflow size={14} className="mr-1 inline -mt-0.5 text-brand-accent" />
              Loader keeps data fresh. Adapter speaks each app's language. Registry remembers every
              shape. Together: integrations that age well.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 7. Platform CTA / closer */}
      <Section id="platform-cta" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Get started</Badge>
            <h2 className="heading-h2 mt-4">See your Digital Memory on your own data.</h2>
            <p className="mx-auto mt-4 text-[17px] leading-relaxed text-text-secondary">
              One conversation, your key apps connected, and your Spine assembling a Digital Memory
              on your own accounts — not a fake demo tenant.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open("Platform · CTA")} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
              </button>
              <button
                onClick={() => openEarlyAccess("Platform · CTA")}
                className="btn-secondary-iw"
              >
                Join Early Access
              </button>
            </div>
            <p className="mt-5 text-[13.5px] text-text-secondary">
              Founder-led onboarding. No automation without your approval.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
