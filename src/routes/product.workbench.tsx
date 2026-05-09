import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Pencil,
  X,
  Sparkles,
  ShieldCheck,
  Layers,
  Workflow,
  Eye,
  Zap,
  Database,
  Users,
  Briefcase,
  FileText,
  ListChecks,
  Calendar,
  Building2,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  Search,
  Mail,
  MessageSquare,
  Receipt,
  CreditCard,
  StickyNote,
  Home,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/product/workbench")({
  head: () => ({
    meta: [
      { title: "Workbench — Your adaptive workspace built on Digital Memory." },
      {
        name: "description",
        content:
          "The Workbench is one living screen that reads from your Digital Memory and reshapes itself around your clients, projects, filings, and tasks. Stop being the Human API.",
      },
      { property: "og:title", content: "IntegrateWise Workbench — The Adaptive Workspace" },
      {
        property: "og:description",
        content:
          "One workspace, stitched from Digital Memory. AI proposes inside it, you approve every move.",
      },
    ],
  }),
  component: WorkbenchOverviewPage,
});

const NAV_ITEMS = [
  { label: "Home", icon: Home },
  { label: "Clients", icon: Users },
  { label: "Accounts", icon: Building2 },
  { label: "Projects", icon: Briefcase },
  { label: "Filings", icon: FileText },
  { label: "Tasks", icon: ListChecks },
  { label: "Meetings", icon: Calendar },
  { label: "Docs", icon: FileText },
  { label: "Notes", icon: StickyNote },
  { label: "Pipeline", icon: TrendingUp },
  { label: "Risks", icon: AlertTriangle },
  { label: "Analytics", icon: BarChart3 },
];

const ACCOUNT_ROWS = [
  { name: "FinanceFlow", status: "At-risk", arr: "$84k", next: "Escalate renewal", tone: "warning" as const },
  { name: "TechServe", status: "At-risk", arr: "$120k", next: "Send check-in", tone: "warning" as const },
  { name: "CloudBridge", status: "Healthy", arr: "$56k", next: "QBR Apr 28", tone: "success" as const },
  { name: "Northwind Co", status: "Healthy", arr: "$210k", next: "Renewal call", tone: "success" as const },
];

const PILLARS = [
  {
    icon: Layers,
    title: "Built on Digital Memory",
    body: "Every screen is composed from Truth, Context, and approved Session Summaries — never from raw, disconnected feeds.",
  },
  {
    icon: Workflow,
    title: "Adaptive by entity",
    body: "Clients, projects, filings, tasks. Each entity has its own scoped workspace that stays consistent across views.",
  },
  {
    icon: Eye,
    title: "Stitched, not switched",
    body: "Tally + Razorpay + Gmail + WhatsApp + Notion — assembled into one view per entity. No more tab-switching.",
  },
  {
    icon: ShieldCheck,
    title: "Approval inside the workspace",
    body: "Twin proposes inline. You approve, edit, or reject without leaving the Workbench. Every action logged.",
  },
];

const ADAPTIVE_VIEWS = [
  {
    icon: Users,
    title: "Client / Account view",
    body: "360° per client: revenue, invoices, tickets, conversations, risks — auto-stitched from your tools.",
  },
  {
    icon: FileText,
    title: "Project / Filing view",
    body: "Projects and GST filings across tools, with status and next actions in one place.",
  },
  {
    icon: ListChecks,
    title: "Task and day view",
    body: "Your day across tools — who to call, what to send, what to review.",
  },
  {
    icon: BarChart3,
    title: "Org view",
    body: "Org-level Memory for founders and leaders — one place to see business health.",
  },
];

function WorkbenchOverviewPage() {
  const { open } = useDemoModal();

  return (
    <>
      {/* 1. Hero */}
      <Section id="workbench" orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <Badge variant="muted">Workbench</Badge>
              <h1 className="heading-h1 mt-5">
                One workspace.{" "}
                <span className="text-gradient-hero">Built on your Digital Memory.</span>
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-text-secondary">
                You don't need another dashboard. You need a living screen that already knows your
                clients, projects, filings, and tasks. The Workbench reads from your Digital Memory
                and reshapes itself around how you actually work — so you stop being the Human API.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button onClick={() => open()} className="btn-primary-iw">
                  Book a demo <ArrowRight size={16} />
                </button>
                <a href="#frame" className="btn-secondary-iw">
                  See the workspace
                </a>
              </div>

              <ul className="mt-8 grid grid-cols-2 gap-3 text-[13px] text-text-secondary">
                <li className="flex items-center gap-2"><Check size={14} className="text-brand-accent" /> Stitched from Digital Memory</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-brand-accent" /> Adapts per entity</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-brand-accent" /> Inline Approval Gate</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-brand-accent" /> Full audit trail</li>
              </ul>
            </Reveal>

            <Reveal delay={150}>
              <HeroProposalCard />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 2. Pillars */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Why it's different</Badge>
            <h2 className="heading-h2 mt-4">A workspace that thinks in entities, not tabs.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Most tools drop you into an empty dashboard. The Workbench starts alive — because it
              reads from your Digital Memory and stitches every relevant signal into one view.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="card-iw h-full p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-[16px] font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/85">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. The Workbench frame */}
      <Section id="frame">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">The workspace</Badge>
            <h2 className="heading-h2 mt-4">One frame. Every entity. Stitched live.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Left rail for navigation, center for the entity you're working on, right for evidence
              and Twin's proposed next step. Always one active context.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-6xl">
            <WorkbenchFrame />
          </Reveal>
        </Container>
      </Section>

      {/* 4. Adaptive views */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Adaptive views</Badge>
            <h2 className="heading-h2 mt-4">Every view, built from Memory — not from scratch.</h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ADAPTIVE_VIEWS.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="card-iw h-full p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-[16px] font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-foreground/85">{v.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. Approval inline */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Approval Gate</Badge>
            <h2 className="heading-h2 mt-4">AI proposes inside the workspace. You decide.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              No silent automation. Twin's proposals appear inline with linked evidence. One click to
              approve, edit, or reject — and the loop feeds back into Memory.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
            <ApprovalCard />
          </Reveal>
        </Container>
      </Section>

      {/* 6. CTA */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">See your Workbench on your own data.</h2>
            <p className="mx-auto mt-4 text-[16px] leading-relaxed text-text-secondary">
              In one demo we connect a couple of your tools, build the Digital Memory, and show you
              a Workbench that reflects your actual day.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open()} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
              </button>
              <button onClick={() => open()} className="btn-secondary-iw">
                Join Early Access
              </button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

/* ----------------------------------------------------------------------- */

function HeroProposalCard() {
  return (
    <div
      className="card-iw overflow-hidden"
      style={{ background: "var(--bg-surface)", boxShadow: "var(--shadow-surface-lg)" }}
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-2 text-brand-accent">
          <Zap size={16} />
          <p className="text-[12px] font-semibold uppercase tracking-wider">Workbench · live</p>
        </div>
        <Badge variant="muted">FinanceFlow</Badge>
      </div>
      <div className="p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
          Stitched from Digital Memory
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[
            { label: "Usage", value: "-23%", tone: "warning" },
            { label: "Outstanding", value: "₹2.4L", tone: "warning" },
            { label: "Tickets", value: "3", tone: "warning" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-border bg-elevated/50 px-2 py-2.5"
            >
              <p className="text-[10px] uppercase tracking-wider text-text-secondary">{m.label}</p>
              <p className="mt-1 text-[15px] font-semibold" style={{ color: "var(--state-warning)" }}>
                {m.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-brand-accent/25 bg-brand-accent/5 p-4">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
            <Sparkles size={12} /> Twin proposal · 91% confidence
          </p>
          <p className="mt-2 text-[14px] font-semibold text-foreground">
            Escalate renewal risk for FinanceFlow.
          </p>
          <ul className="mt-2.5 space-y-1.5 text-[12px] text-foreground/85">
            <li className="flex items-start gap-1.5"><Check size={12} className="mt-0.5 shrink-0 text-brand-accent" /> Truth: usage drop 23%</li>
            <li className="flex items-start gap-1.5"><Check size={12} className="mt-0.5 shrink-0 text-brand-accent" /> Context: budget freeze in email</li>
            <li className="flex items-start gap-1.5"><Check size={12} className="mt-0.5 shrink-0 text-brand-accent" /> Session: approved escalation rule</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className="btn-primary-iw !px-3 !py-1.5 !text-[12px]">
              <Check size={12} /> Approve
            </button>
            <button className="btn-secondary-iw !px-3 !py-1.5 !text-[12px]">
              <Pencil size={12} /> Edit
            </button>
            <button className="btn-secondary-iw !px-3 !py-1.5 !text-[12px]">
              <X size={12} /> Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkbenchFrame() {
  return (
    <div
      className="card-iw overflow-hidden"
      style={{ background: "var(--bg-surface)", boxShadow: "var(--shadow-surface-lg)" }}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-state-error/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-state-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-state-success/70" />
        <div className="ml-3 flex flex-1 items-center gap-2 rounded-md border border-border bg-elevated/60 px-3 py-1 text-[12px] text-text-secondary">
          <Search size={12} />
          workbench.integratewise.app / accounts
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_280px]">
        <aside className="hidden border-r border-border p-3 lg:block">
          <p className="px-2 text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
            Workbench
          </p>
          <ul className="mt-2 space-y-0.5">
            {NAV_ITEMS.map((n, i) => {
              const Icon = n.icon;
              const active = i === 2;
              return (
                <li key={n.label}>
                  <button
                    className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-[13px] ${
                      active
                        ? "bg-brand-accent/10 text-brand-accent"
                        : "text-foreground/80 hover:bg-elevated/60"
                    }`}
                  >
                    <Icon size={13} />
                    <span>{n.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="border-r border-border">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="badge-iw badge-iw-muted !text-[11px]">Accounts & Revenue</span>
              <span className="text-[12px] text-text-secondary">12 accounts · 4 at-risk</span>
            </div>
          </div>
          <table className="w-full text-left text-[13px]">
            <thead className="bg-elevated/40 text-[11px] uppercase tracking-wider text-text-secondary">
              <tr>
                <th className="px-4 py-2 font-semibold">Account</th>
                <th className="px-2 py-2 font-semibold">Status</th>
                <th className="px-2 py-2 font-semibold">ARR</th>
                <th className="px-4 py-2 font-semibold">Next step</th>
              </tr>
            </thead>
            <tbody>
              {ACCOUNT_ROWS.map((r) => (
                <tr key={r.name} className="border-t border-border/70">
                  <td className="px-4 py-2.5 font-medium text-foreground">{r.name}</td>
                  <td className="px-2 py-2.5">
                    <span
                      className="badge-iw !text-[10px] !py-0.5 !px-1.5"
                      style={{
                        background:
                          r.tone === "warning"
                            ? "color-mix(in oklab, var(--state-warning) 14%, transparent)"
                            : "color-mix(in oklab, var(--state-success) 14%, transparent)",
                        color: r.tone === "warning" ? "var(--state-warning)" : "var(--state-success)",
                        borderColor: "transparent",
                      }}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="px-2 py-2.5 text-foreground/90">{r.arr}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{r.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="hidden border-t border-border lg:block lg:border-t-0">
          <div className="border-b border-border px-4 py-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
              Evidence & Approval
            </p>
            <p className="mt-1 text-[13px] font-semibold text-foreground">FinanceFlow</p>
            <p className="text-[11px] text-text-secondary">At-risk · usage -23% wk</p>
          </div>
          <div className="space-y-2 p-3">
            {[
              { icon: Receipt, label: "Tally invoice #INV-2241" },
              { icon: CreditCard, label: "Razorpay: payment failed" },
              { icon: Mail, label: "Gmail: 'budget freeze Q2'" },
              { icon: MessageSquare, label: "WhatsApp: 'review next wk'" },
              { icon: Database, label: "Approved escalation rule" },
            ].map((e, i) => {
              const Icon = e.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-md border border-border bg-elevated/50 px-2.5 py-2"
                >
                  <Icon size={12} className="text-text-secondary shrink-0" />
                  <span className="truncate text-[12px] text-foreground/90">{e.label}</span>
                </div>
              );
            })}
          </div>
          <div className="border-t border-border p-3">
            <div className="rounded-lg border border-brand-accent/25 bg-brand-accent/5 p-3">
              <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
                <Sparkles size={12} /> Twin proposal
              </p>
              <p className="mt-1.5 text-[12px] text-foreground/90">
                Escalate renewal risk · 91% confidence
              </p>
              <div className="mt-2.5 flex gap-1.5">
                <button className="btn-primary-iw !px-2.5 !py-1 !text-[11px]">
                  <Check size={11} /> Approve
                </button>
                <button className="btn-secondary-iw !px-2.5 !py-1 !text-[11px]">
                  <Pencil size={11} /> Edit
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ApprovalCard() {
  return (
    <div className="card-iw overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-2 text-brand-accent">
          <ShieldCheck size={16} />
          <p className="text-[12px] font-semibold uppercase tracking-wider">Approval Gate · inline</p>
        </div>
        <Badge variant="muted">91% confidence</Badge>
      </div>
      <div className="p-5">
        <h3 className="text-[18px] font-semibold text-foreground">
          Send renewal escalation to FinanceFlow account owner.
        </h3>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-elevated/40 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
              What Twin will do
            </p>
            <p className="mt-2 text-[13px] text-foreground/90">
              Send a renewal escalation email to the FinanceFlow account owner and create a
              follow-up task for tomorrow.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-elevated/40 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
              Why — linked evidence
            </p>
            <ul className="mt-2 space-y-1 text-[13px] text-foreground/85">
              <li>• Truth: usage drop 23% this week.</li>
              <li>• Context: budget freeze in email thread.</li>
              <li>• Session Summary: approved escalation rule.</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <button className="btn-primary-iw !px-4 !py-2.5 text-[14px]">
            <Check size={16} /> Approve
          </button>
          <button className="btn-secondary-iw !px-4 !py-2.5 text-[14px]">
            <Pencil size={16} /> Edit
          </button>
          <button className="btn-secondary-iw !px-4 !py-2.5 text-[14px]">
            <X size={16} /> Reject
          </button>
        </div>
      </div>
    </div>
  );
}
