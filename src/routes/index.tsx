import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Lightbulb, UserCheck, Zap, Search, Plus, Download, Bell, ShieldCheck, Activity, FileText, Cpu, Database, Workflow, Layers, Network } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";
import { ProductVideo } from "@/components/site/ProductVideo";
import { AfterApprovalLoop } from "@/components/site/AfterApprovalLoop";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { CONNECTOR_LOGOS } from "@/components/site/ConnectorMarquee";
import { SpineFlow } from "@/components/site/motion/SpineFlow";
import { WorkbenchMorph } from "@/components/site/motion/WorkbenchMorph";
import { TwinSignals, ApprovalGate } from "@/components/site/motion/TwinSignals";
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
          "One workspace. Full context. Every action under your control. Still juggling your work? — apps connect, truth stays intact, your Twin proposes what's next.",
      },
      { property: "og:title", content: "IntegrateWise — Stop being the human API between your tools." },
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
      <AnnouncementBar />

      {/* ========================= 1. HERO ========================= */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28" aria-label="Hero">
        <span aria-hidden className="orb orb-peach" style={{ width: 620, height: 620, top: -180, left: "55%" }} />
        <span aria-hidden className="orb orb-purple" style={{ width: 520, height: 520, top: 80, left: -140 }} />

        <Container>
          <div className="fade-up mx-auto max-w-4xl text-center">
            <span className="badge-iw badge-iw-muted">Still juggling your work?</span>
            <h1 className="heading-display mt-6">
              Stop being the{" "}
              <span className="text-gradient-hero">human API between your tools.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-text-secondary">
              One workspace. Full context. Every action under your control.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={() => open("Home hero")} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
              </button>
              <Link to="/platform/how-it-works" className="btn-secondary-iw">
                See How It Works
              </Link>
            </div>
          </div>

          {/* Logo strip — parallaxed for subtle depth between hero copy and connectors */}
          <Parallax y={-24} className="mt-16">
            <p className="text-center text-[12.5px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
              Connect the apps you already use
            </p>
            <div className="marquee-mask relative mt-6 overflow-hidden py-4">
              <div className="marquee-track flex w-max items-center gap-10">
                {[...HERO_LOGOS, ...HERO_LOGOS].map((logo, i) => (
                  <div key={`${logo.name}-${i}`} className="flex items-center gap-2.5 opacity-70">
                    <img src={logo.src} alt="" aria-hidden className="h-7 w-auto" />
                    <span className="text-[13.5px] font-medium text-text-secondary whitespace-nowrap">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Parallax>
        </Container>
      </section>

      {/* ========================= 2. CORE PROBLEM ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">2025</span>
            <h2 className="heading-h2 mt-4">The Core Problem of 2025</h2>
            <p className="mt-4 text-[17px] text-text-secondary">You are the bridge. And it's exhausting.</p>
          </Reveal>
          <StaggerGroup className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3" stagger={0.09}>
            {[
              {
                title: "Data scattered.",
                body: "You hunt across twelve tabs before every decision.",
              },
              {
                title: "Intelligence blind.",
                body: "No full context, so nudges arrive late or wrong.",
              },
              {
                title: "Automation rogue.",
                body: "Things fire without you, so trust quietly erodes.",
              },
            ].map((p) => (
              <StaggerItem key={p.title} className="card-iw p-7">
                <h3 className="text-[18px] font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{p.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* ========================= 3. SPINE OVERVIEW ========================= */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">The Spine</span>
            <h2 className="heading-h2 mt-4">One layer connects everything.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Apps plug in. Data normalizes. Truth stays intact — even when tools change.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              { t: "Apps flow in", b: "OAuth connect. No code. No CSV exports." },
              { t: "Truth & context converge into reality", b: "Duplicates merge. Conflicts resolve. One Digital Memory." },
              { t: "AI can change. Memory persists.", b: "AI can change. Tools can change. Memory remains. The Adaptive Spine keeps your Digital Memory stable underneath." },
            ].map((s, i) => (
              <div key={s.t} className="flex gap-3 rounded-xl border border-border bg-white/[0.02] p-5">
                <span className="text-[13px] font-semibold text-brand-accent">0{i + 1}</span>
                <div>
                  <div className="text-[15px] font-semibold text-foreground">{s.t}</div>
                  <p className="mt-1 text-[14px] text-text-secondary">{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========================= 4. WORKSPACE + COGNITIVE LAYER (PRODUCT FRAME) ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">The Spine connects.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              The Cognitive Layer reads Truth, Context, and governed Session Summaries together — then your Twin proposes the next move with full evidence.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <WorkbenchMorph>
              <ProductFrame />
            </WorkbenchMorph>
          </Reveal>
        </Container>
      </Section>

      {/* ========================= 4b. PRODUCT WALKTHROUGH VIDEO ========================= */}
      <ProductVideo
        title="See the Spine, Workspace, and Twin in one flow."
        subline="A quick look at how apps flow into Digital Memory, how your Workspace comes alive, and how Twin proposes the next move — always behind the Approval Gate."
        src="/videos/integratewise-walkthrough.mp4"
        webm="/videos/integratewise-walkthrough.webm"
        poster="/videos/integratewise-walkthrough-poster.jpg"
      />

      {/* ========================= 5. WORKSPACE / INTELLIGENCE VALUE PROPS ========================= */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <span className="badge-iw badge-iw-muted">Workspace · Intelligence</span>
              <h2 className="heading-h2 mt-4">One workspace. One Memory.</h2>
              <p className="mt-4 text-[16px] text-text-secondary">
                Every tool connected. Every action approved.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { n: "01", t: "Unifies", b: "One truth from many sources, so you stop reconciling." },
                { n: "02", t: "Adapts", b: "Survives tool changes, so your history never resets." },
                { n: "03", t: "Remembers", b: "Compounds knowledge daily, so tomorrow starts smarter than today." },
              ].map((f) => (
                <div key={f.n} className="card-iw p-6">
                  <div className="text-[13px] font-semibold text-brand-accent">{f.n}</div>
                  <div className="mt-2 text-[18px] font-semibold text-foreground">{f.t}</div>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">{f.b}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========================= 6. TRUST & GOVERNANCE ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw">Trust & Governance</span>
            <h2 className="heading-h2 mt-4">AI that cannot act without you.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Every signal is Truth + Context + governed Session Summaries — with full evidence visible before you approve.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { i: Brain, t: "AI Detects" },
              { i: Lightbulb, t: "Suggestion" },
              { i: UserCheck, t: "Human Reviews" },
              { i: Zap, t: "Execution" },
            ].map((s) => (
              <div key={s.t} className="card-iw flex flex-col items-center gap-2 p-5 text-center">
                <s.i size={22} className="text-brand-accent" />
                <span className="text-[14px] font-semibold text-foreground">{s.t}</span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <TwinSignals>
              <div className="card-iw p-6">
                <div className="flex items-center gap-2 text-[13px] text-text-secondary">
                  <span className="size-2 rounded-full bg-brand-highlight twin-pulse" />
                  <span className="font-semibold text-foreground">Twin Recommendation</span>
                  <span>·</span>
                  <span>Churn risk detected</span>
                  <span>·</span>
                  <span>2 min ago</span>
                </div>
                <blockquote className="mt-3 border-l-2 border-brand-accent/60 pl-4 text-[15.5px] leading-relaxed text-foreground/90">
                  Account <span className="font-semibold">Acme Corp</span>: usage drop <span className="text-text-secondary">(Truth)</span> + budget freeze in email <span className="text-text-secondary">(Context)</span> + escalation rule <span className="text-text-secondary">(Session Summaries)</span>. Recommend escalation to VP with QBR deck.
                </blockquote>
                <div className="mt-3 text-[13px] text-text-secondary">
                  Evidence: 3 sources across Truth + Context + Session Summaries · Confidence: 87%.
                </div>
                <ApprovalGate />
              </div>
            </TwinSignals>
          </div>

          <ul className="mx-auto mt-8 grid max-w-4xl gap-3 md:grid-cols-3">
            {[
              "Full audit trail — every decision logged with timestamp and evidence.",
              "Confidence scores — see exactly how certain the AI is about each signal.",
              "Impact preview — understand consequences before you approve.",
            ].map((t) => (
              <li key={t} className="flex gap-2 rounded-xl border border-border bg-white/[0.02] p-4 text-[13.5px] text-text-secondary">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-success" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-2xl text-center text-[14px] leading-relaxed text-text-secondary">
            After approval, approved actions run in your apps, the results flow back as new
            Truth in Digital Memory, and your Twin learns from every decision.
          </p>
        </Container>
      </Section>

      {/* ========================= 6b. AFTER APPROVAL — THE LOOP ========================= */}
      <AfterApprovalLoop />

      {/* ========================= 7. INTEGRATION ARCHITECTURE ========================= */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Architecture</span>
            <h2 className="heading-h2 mt-4">Built to absorb any tool.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Three services work together to make every connector a first-class citizen.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: Cpu,
                title: "Loader Service",
                body: "Connect any SaaS tool via OAuth or API key. Data flows in automatically — no CSV exports, no manual sync, no code.",
                meta: "70+ connectors available",
              },
              {
                icon: Workflow,
                title: "Adapter Pattern",
                body: "Every tool speaks a different language. The Adapter normalizes everything into one canonical schema — your single source of truth.",
                meta: "Schema-aware transformation",
              },
              {
                icon: Database,
                title: "Schema Registry",
                body: "Tracks every data shape from every connector. Detects drift, resolves conflicts, and keeps your truth layer clean — automatically.",
                meta: "Auto-healing data contracts",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="card-iw p-7">
                <c.icon size={22} className="text-brand-accent" />
                <h3 className="mt-4 text-[19px] font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{c.body}</p>
                <div className="mt-4 text-[12.5px] font-semibold uppercase tracking-wider text-brand-accent">
                  {c.meta}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========================= 8. USE CASES ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Use Cases</span>
            <h2 className="heading-h2 mt-4">Real signals. Real actions.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                tag: "Account Success",
                title: "Churn detection",
                signal: "Usage dropped 40% + champion left + ticket spike",
                score: "Twin score: 87 Critical",
                action: "Escalate to VP with QBR deck.",
                outcome: "90-day early warning vs. renewal-day surprise.",
              },
              {
                tag: "RevOps",
                title: "Pipeline clarity",
                signal: "Deal unchanged 21 days + no activity + quarter ending",
                score: "Twin score: 55 Watch",
                action: "Verify deal, update forecast.",
                outcome: "Pipeline accuracy improved by removing stale deals.",
              },
              {
                tag: "BizOps",
                title: "System-wide visibility",
                signal: "Monday morning — 12 accounts changed status + 3 renewals this week",
                score: "Automated brief with prioritized actions",
                action: "Executives prepared in 2 min.",
                outcome: "vs. 45-min spreadsheet review.",
              },
            ].map((u) => (
              <div key={u.title} className="card-iw p-6">
                <span className="badge-iw badge-iw-muted">{u.tag}</span>
                <h3 className="mt-4 text-[19px] font-semibold text-foreground">{u.title}</h3>
                <p className="mt-2 text-[14px] text-text-secondary">{u.signal}</p>
                <div className="mt-3 inline-flex rounded-md border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-1 text-[12px] font-semibold text-brand-highlight">
                  {u.score}
                </div>
                <p className="mt-3 text-[14px] text-foreground/90">{u.action}</p>
                <p className="mt-1 text-[13px] text-text-secondary">{u.outcome}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========================= 9. PROOF / TRUST STRIP ========================= */}
      <Section className="!py-12">
        <Container>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { t: "Cloudflare Workers", b: "Edge-first. Sub-50ms globally." },
              { t: "Enterprise-ready", b: "SOC 2 Type II. GDPR compliant." },
              { t: "Founder-led", b: "Every customer has a direct line." },
            ].map((p) => (
              <div key={p.t} className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] px-5 py-4">
                <ShieldCheck size={18} className="text-success" />
                <div>
                  <div className="text-[14px] font-semibold text-foreground">{p.t}</div>
                  <div className="text-[12.5px] text-text-secondary">{p.b}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========================= 10. FOOTER CTA ========================= */}
      <ClosingCtaBand />
    </>
  );
}

/* -------------------- Helpers -------------------- */

function ConnectorChip({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-white/[0.03] px-3 py-2">
      <img src={src} alt="" aria-hidden className="h-5 w-auto" />
      <span className="text-[12.5px] font-medium text-foreground/90">{name}</span>
    </div>
  );
}

/* -------------------- Product frame: Nav rail + Workspace + Cognitive Layer -------------------- */

const NAV_ITEMS = [
  "Home", "Projects", "Accounts", "Contacts", "Meetings", "Docs", "Tasks", "Notes",
  "Knowledge", "Team", "Pipeline", "Risks", "Deals", "Forecasting", "Analytics",
  "Workflows", "Integrations", "AI Chat", "System", "Intelligence",
];

const ACCOUNTS = [
  { name: "TechServe India", tier: "Enterprise · Tech", arr: "$420K", delta: "+12.5%", deltaPos: true, health: 92, status: "Healthy", renewal: "126d" },
  { name: "CloudBridge APAC", tier: "Enterprise · Cloud", arr: "$280K", delta: "+8.3%", deltaPos: true, health: 78, status: "At-Risk", renewal: "72d" },
  { name: "FinanceFlow", tier: "Mid-Market · FinTech", arr: "$180K", delta: "-2.1%", deltaPos: false, health: 54, status: "Critical", renewal: "29d" },
  { name: "DataVault AU", tier: "Enterprise · Security", arr: "$350K", delta: "+15.2%", deltaPos: true, health: 88, status: "Healthy", renewal: "204d" },
  { name: "RetailNest Pte", tier: "SMB · Retail", arr: "$95K", delta: "+5.7%", deltaPos: true, health: 71, status: "At-Risk", renewal: "98d" },
  { name: "HealthTech Innov", tier: "Mid-Market · Health", arr: "$210K", delta: "+22%", deltaPos: true, health: 95, status: "Healthy", renewal: "202d" },
];

const ACTIONS = [
  { app: "HubSpot", color: "#FF7A59", body: "Update lifecycle stage in HubSpot. Move 'FinanceFlow' from Customer → At-Risk.", confidence: 94 },
  { app: "Jira", color: "#2684FF", body: "Escalate support tickets to P1. 3 open tickets blocking renewal sync.", confidence: 91 },
  { app: "Slack", color: "#E01E5A", body: "Alert the CS team on Slack. Notify #renewals-critical about FinanceFlow.", confidence: 88 },
  { app: "Salesforce", color: "#00A1E0", body: "Update opportunity in Salesforce. Move to 'Renewal at Risk' with notes.", confidence: 96 },
];

function statusClass(status: string) {
  if (status === "Healthy") return "border-success/30 bg-success/10 text-success";
  if (status === "At-Risk") return "border-brand-highlight/30 bg-brand-highlight/10 text-brand-highlight";
  return "border-destructive/40 bg-destructive/10 text-destructive";
}

function ProductFrame() {
  return (
    <div className="card-iw overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[180px_minmax(0,1fr)_320px]">
        {/* LEFT: Nav rail */}
        <aside className="border-b border-border bg-bg-elevated/60 p-3 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="grid size-8 place-items-center rounded-full bg-brand-accent text-[12px] font-bold text-text-inverse">
              AR
            </div>
            <div className="min-w-0">
              <div className="truncate text-[12.5px] font-semibold text-foreground">Alex Rivera</div>
              <div className="truncate text-[11px] text-text-secondary">Operations Lead</div>
            </div>
          </div>
          <div className="mt-2 px-2 text-[10.5px] font-semibold uppercase tracking-wider text-text-secondary">
            Workspace › Accounts
          </div>
          <ul className="mt-2 max-h-[420px] space-y-0.5 overflow-y-auto pr-1">
            {NAV_ITEMS.map((n) => (
              <li key={n}>
                <button
                  type="button"
                  className={
                    "block w-full rounded-md px-2.5 py-1.5 text-left text-[12.5px] " +
                    (n === "Accounts"
                      ? "bg-white/5 font-semibold text-foreground"
                      : "text-text-secondary hover:bg-white/5 hover:text-foreground")
                  }
                >
                  {n}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* CENTER: Workspace */}
        <div className="border-b border-border p-5 lg:border-b-0 lg:border-r">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-[18px] font-semibold text-foreground">Accounts &amp; Revenue</h3>
              <div className="mt-0.5 text-[12.5px] text-text-secondary">
                Total ARR: <span className="font-semibold text-foreground">$1.75M</span> · 6 accounts
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="btn-secondary-iw !px-3 !py-1.5 text-[12.5px]">
                <Download size={14} /> Export
              </button>
              <button type="button" className="btn-primary-iw !px-3 !py-1.5 text-[12.5px]">
                <Plus size={14} /> Add Account
              </button>
            </div>
          </div>

          {/* Notification chip */}
          <div className="mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-brand-highlight/30 bg-brand-highlight/10 px-3 py-2 text-[12.5px] text-foreground">
            <Bell size={14} className="text-brand-highlight" />
            <span className="font-semibold">Schema Drift Detected </span>
            <span className="text-text-secondary">— Jira Integration · 2 fields changed upstream. Auto-correction proposed.</span>
            <button type="button" className="ml-auto rounded-md border border-border px-2 py-0.5 text-[11.5px] font-semibold text-foreground hover:bg-white/5">
              Review
            </button>
          </div>

          {/* Search */}
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-white/[0.02] px-3 py-2">
            <Search size={14} className="text-text-secondary" />
            <input
              placeholder="Search accounts…"
              className="w-full bg-transparent text-[13px] text-foreground placeholder:text-text-secondary focus:outline-none"
            />
          </div>

          {/* Table */}
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <div className="hidden bg-white/[0.02] px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-text-secondary md:grid md:grid-cols-[1.5fr_0.8fr_0.6fr_0.9fr_0.7fr]">
              <div>Account</div>
              <div>ARR</div>
              <div>Δ</div>
              <div>Health</div>
              <div className="text-right">Renewal</div>
            </div>
            <StaggerGroup as="ul" className="divide-y divide-border" stagger={0.05} amount={0.15}>
              {ACCOUNTS.map((a) => (
                <StaggerItem
                  as="li"
                  key={a.name}
                  y={8}
                  className="grid grid-cols-2 gap-2 px-4 py-3 text-[13px] hover:bg-white/[0.02] md:grid-cols-[1.5fr_0.8fr_0.6fr_0.9fr_0.7fr] md:items-center md:gap-3"
                >
                  <div>
                    <div className="font-semibold text-foreground">{a.name}</div>
                    <div className="text-[11.5px] text-text-secondary">{a.tier}</div>
                  </div>
                  <div className="font-semibold text-foreground">{a.arr} ARR</div>
                  <div className={a.deltaPos ? "text-success" : "text-destructive"}>{a.delta}</div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{a.health}/100</span>
                    <span className={"rounded-full border px-2 py-0.5 text-[10.5px] font-semibold " + statusClass(a.status)}>
                      {a.status}
                    </span>
                  </div>
                  <div className="text-text-secondary md:text-right">in {a.renewal}</div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* Inline signal banner */}
          <div className="mt-4 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
            <div className="flex items-center gap-2 text-[13px] font-semibold text-destructive">
              <Activity size={14} /> Renewal Risk → FinanceFlow
            </div>
            <p className="mt-1 text-[13px] text-foreground/90">
              3 P1 tickets, champion silent 12 days, payment failed twice. Renewal in 29 days.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-[11.5px] text-text-secondary">
              <span className="badge-iw badge-iw-muted !py-0.5 !text-[11px]">Salesforce</span>
              <span className="badge-iw badge-iw-muted !py-0.5 !text-[11px]">Zendesk</span>
              <span className="badge-iw badge-iw-muted !py-0.5 !text-[11px]">Stripe</span>
              <span>· 3 min ago</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Cognitive Layer */}
        <aside className="bg-bg-elevated/50 p-5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-success twin-pulse" />
            <span className="text-[11.5px] font-semibold uppercase tracking-wider text-success">
              Cognitive Layer — Active
            </span>
          </div>
          <p className="mt-2 text-[12.5px] text-text-secondary">AI proposes. You decide what happens.</p>

          <div className="mt-4 rounded-lg border border-border bg-white/[0.02] p-3">
            <div className="flex flex-wrap gap-1 text-[11px] text-text-secondary">
              {[
                "Your Data", "Full Picture", "Knowledge", "Evidence", "What Matters",
                "AI Thinking", "Next Steps", "Your Call", "Controls", "Adjust",
                "Learning", "History", "Your Twin",
              ].map((t, i, arr) => (
                <span key={t} className="inline-flex items-center gap-1">
                  <span className="text-foreground/90">{t}</span>
                  {i < arr.length - 1 && <span className="text-text-secondary">→</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <div className="text-[14px] font-semibold text-foreground">You decide what happens next</div>
            <div className="text-[12px] text-text-secondary">4 actions pending your approval</div>
          </div>

          <StaggerGroup as="ul" className="mt-4 space-y-3" stagger={0.09} delay={0.1} amount={0.15}>
            {ACTIONS.map((a) => (
              <StaggerItem
                as="li"
                key={a.app}
                x={20}
                className="rounded-lg border border-border bg-white/[0.02] p-3"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-md px-2 py-0.5 text-[11px] font-semibold text-white"
                    style={{ background: a.color }}
                  >
                    {a.app}
                  </span>
                  <span className="text-[11px] text-text-secondary">Confidence: {a.confidence}%</span>
                </div>
                <p className="mt-2 text-[12.5px] leading-snug text-foreground/90">{a.body}</p>
                <div className="mt-2 flex gap-2">
                  <button type="button" className="btn-secondary-iw !px-2.5 !py-1 text-[11.5px]">Deny</button>
                  <button type="button" className="btn-primary-iw !px-2.5 !py-1 text-[11.5px]">Approve &amp; Execute</button>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </aside>
      </div>
    </div>
  );
}
