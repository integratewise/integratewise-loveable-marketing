import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  X,
  Pencil,
  Sparkles,
  ShieldCheck,
  Search,
  Home,
  Users,
  Briefcase,
  FileText,
  ListChecks,
  Calendar,
  StickyNote,
  Building2,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  MessageSquare,
  Mail,
  Receipt,
  CreditCard,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { ProductVideo } from "@/components/site/ProductVideo";

import { useDemoModal } from "@/components/site/demo-modal-context";
import { MEMORY_COPY } from "@/lib/site";
import { Lock, KeyRound, FileSearch } from "lucide-react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — One Workbench. One active context. One clear state." },
      {
        name: "description",
        content:
          "Every app runs on the Workbench. It composes scoped memory per client, project or filing — relevant, stable, ready to act on. AI proposes structured changes against memory; the governance layer decides what becomes real and maintains a single active context.",
      },
      { property: "og:title", content: "IntegrateWise Product — Workbench" },
      {
        property: "og:description",
        content:
          "Scoped memory per entity. AI proposes against memory, never raw data. Governance decides what becomes real — every action logged inside one active context.",
      },
    ],
  }),
  component: ProductPage,
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
  { label: "Team", icon: Users },
  { label: "Pipeline", icon: TrendingUp },
  { label: "Risks", icon: AlertTriangle },
  { label: "Analytics", icon: BarChart3 },
];

const ACCOUNT_ROWS = [
  {
    name: "FinanceFlow",
    status: "At-risk",
    arr: "$84k",
    outstanding: "₹2.4L",
    gst: "Due Apr 20",
    tickets: 3,
    next: "Escalate renewal",
    tone: "warning" as const,
  },
  {
    name: "TechServe",
    status: "At-risk",
    arr: "$120k",
    outstanding: "—",
    gst: "Filed",
    tickets: 1,
    next: "Send check-in",
    tone: "warning" as const,
  },
  {
    name: "CloudBridge",
    status: "Healthy",
    arr: "$56k",
    outstanding: "—",
    gst: "Filed",
    tickets: 0,
    next: "QBR Apr 28",
    tone: "success" as const,
  },
  {
    name: "Northwind Co",
    status: "Healthy",
    arr: "$210k",
    outstanding: "₹48k",
    gst: "Due Apr 22",
    tickets: 0,
    next: "Renewal call",
    tone: "success" as const,
  },
];

const VIEWS = [
  {
    title: "Client / Account view",
    body: "360° view of each client: revenue, invoices, tickets, conversations, risks.",
    icon: Users,
  },
  {
    title: "Project / Filing view",
    body: "Projects and GST filings across tools, with status and next actions in one place.",
    icon: FileText,
  },
  {
    title: "Task and day view",
    body: "Your day across tools — who to call, what to send, what to review.",
    icon: ListChecks,
  },
  {
    title: "Org view (when you're ready)",
    body: "Org-level Memory for founders and leaders — one place to see business health.",
    icon: BarChart3,
  },
];

function ProductPage() {
  const { open } = useDemoModal();

  return (
    <>
      {/* 1. Hero — Workbench */}
      <Section id="workbench" orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Product</Badge>
            <h1 className="heading-h1 mt-5">
              Your Workbench <span className="text-gradient-hero">adapts to how you work.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              You don't need another dashboard. You need one living screen that matches your day.
              The Workbench reads from your Digital Memory and reshapes itself around your clients,
              projects, filings, and tasks. The Workbench is where stitching between apps happens,
              so you stop being the Human API.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open()} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
              </button>
              <a href="#how-it-works" className="btn-secondary-iw">
                See it in action
              </a>
            </div>
          </div>

          <Reveal className="mx-auto mt-12 max-w-6xl">
            <WorkbenchFrame compact />
          </Reveal>
        </Container>
      </Section>

      {/* 2. From empty dashboards to a living workbench */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Living workbench</Badge>
            <h2 className="heading-h2 mt-4">Not a static dashboard. A living workbench.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Most tools drop you into an empty dashboard and ask you to build everything.
              IntegrateWise starts by reading your Digital Memory so your Workbench is alive from
              day one.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="card-iw h-full p-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                  Day one experience
                </p>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                  <li>• Connect one or two tools — calendar, tasks, CRM, Notion.</li>
                  <li>
                    • Your Workbench immediately shows real tasks, upcoming meetings, and a basic
                    list of clients or projects.
                  </li>
                  <li>• You land in a screen that already reflects your work, not blank charts.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-iw h-full p-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                  As you grow
                </p>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                  <li>• As more data flows into the Spine, your Digital Memory deepens.</li>
                  <li>
                    • Workbench views evolve: richer client views, project boards, account health,
                    filings, and risks.
                  </li>
                  <li>• You never rebuild dashboards by hand — the Workbench adapts with you.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 2b. Product walkthrough video */}
      <ProductVideo
        eyebrow="Workbench in action"
        title="Your Workbench, reading from Digital Memory."
        subline="Watch how your Workbench reads from Digital Memory, stitches your tools, and keeps AI proposals inside your workbench with Approval Gate."
        src="/videos/integratewise-walkthrough.mp4"
        webm="/videos/integratewise-walkthrough.webm"
        poster="/videos/integratewise-walkthrough-poster.jpg"
      />

      {/* 3. Workbench frame */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">The frame</Badge>
            <h2 className="heading-h2 mt-4">One place to see your work the way you think.</h2>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-6xl">
            <WorkbenchFrame />
          </Reveal>

          <Reveal delay={200} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[15px] leading-relaxed text-text-secondary">
              The Workbench sits directly on top of Digital Memory, so every view is stitched from
              Truth, Context, and your approved AI knowledge. You see clients, projects, filings,
              and tasks the way you actually think about them — not tool by tool.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 4. How it works — where stitching happens */}
      <Section id="how-it-works" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">How it works</Badge>
            <h2 className="heading-h2 mt-4">
              Apps → Spine → Memory → Workbench → Twin → Approval → Loop.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The Workbench sits on top of Digital Memory. Every view is stitched from Truth,
              Context, and approved AI knowledge — so tab-switching ends and the system does the
              stitching.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="card-iw h-full p-6">
                <ul className="space-y-3 text-[14px] leading-relaxed text-foreground/90">
                  <li>
                    • Instead of opening five tools to understand one client, the Workbench pulls
                    everything into one stitched view from Digital Memory.
                  </li>
                  <li>• You stop copy-pasting between Tally, Razorpay, email, Sheets, and CRM.</li>
                  <li>
                    • You stop re-explaining yesterday's story to yourself every morning — it's
                    already assembled.
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-iw h-full p-6">
                <ul className="space-y-3 text-[14px] leading-relaxed text-foreground/90">
                  <li>
                    <span className="font-medium text-foreground">Client view:</span> invoices from
                    Tally + payments from Razorpay + emails from Gmail + WhatsApp threads + notes
                    from Notion — all in one place.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Business view:</span> yesterday's
                    sales, credit outstanding, critical tickets, and pending GST filings — in one
                    screen.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[16px] font-medium text-foreground/90">
              The Workbench is where the system does the stitching, so you don't have to be the
              Human API anymore.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Views (sub-section under How it works) */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Views</Badge>
            <h2 className="heading-h2 mt-4">Views built from Memory, not from scratch.</h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VIEWS.map((v, i) => {
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

          <Reveal delay={300} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[14px] leading-relaxed text-text-secondary">
              Every view is backed by the same Spine and Digital Memory. Change the way you group
              work; the underlying Memory stays consistent.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 6. Digital Memory — every view built from Memory, with evidence */}
      <Section id="digital-memory" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Digital Memory</Badge>
            <h2 className="heading-h2 mt-4">Every view, every insight, traced to Memory.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              {MEMORY_COPY.primary}
            </p>
            <p className="mt-3 text-[15px] text-text-secondary">
              In the Workbench, nothing is a black box — every number and suggestion can be traced
              back to real records and messages in your Digital Memory.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl items-start gap-6 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <div className="card-iw p-6">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                    Evidence — FinanceFlow
                  </p>
                  <Badge variant="muted">5 sources</Badge>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {[
                    { icon: Receipt, label: "Tally invoice #INV-2241", tag: "Truth" },
                    { icon: CreditCard, label: "Razorpay payment failed", tag: "Truth" },
                    { icon: Mail, label: "Gmail: 'budget freeze for Q2'", tag: "Context" },
                    { icon: MessageSquare, label: "WhatsApp: 'review next week'", tag: "Context" },
                    { icon: Sparkles, label: "Approved summary: escalation rule", tag: "Session" },
                  ].map((e, i) => {
                    const Icon = e.icon;
                    return (
                      <li
                        key={i}
                        className="flex items-center justify-between gap-3 rounded-lg border border-border bg-elevated/50 px-3 py-2.5"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Icon size={14} className="text-text-secondary shrink-0" />
                          <span className="truncate text-[13px] text-foreground/90">{e.label}</span>
                        </div>
                        <span className="badge-iw badge-iw-muted !text-[10px]">{e.tag}</span>
                      </li>
                    );
                  })}
                </ul>
                <button className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-brand-accent hover:underline">
                  Explain this <ExternalLink size={13} />
                </button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="space-y-3 text-[14px] leading-relaxed text-foreground/90">
                <li>• See which apps each field came from.</li>
                <li>• Open original records in one click if needed.</li>
                <li>• Understand why a status or risk label was applied.</li>
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 7. Security — Approval Gate, RBAC, audit trail */}
      <Section id="security">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Security</Badge>
            <h2 className="heading-h2 mt-4">
              In-product security: Approval Gate, RBAC, audit trail.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              AI never acts behind your back. Every action is gated, logged, and reviewable inside
              the Workbench you already use.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-3">
            {[
              {
                icon: KeyRound,
                title: "Role-based access (RBAC)",
                body: "Per-user, per-team scopes — Personal, Work, and Org Memory stay separated by architecture.",
              },
              {
                icon: FileSearch,
                title: "Full audit trail",
                body: "Every approval, edit, and execution is logged with the evidence it was based on.",
              },
              {
                icon: Lock,
                title: "Approval Gate",
                body: "Twin proposes; you decide. Nothing executes silently. No autonomous automation.",
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title}>
                  <div className="card-iw h-full p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-[16px] font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/85">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mx-auto max-w-3xl text-center mt-12">
            <h3 className="text-[22px] font-semibold text-foreground">
              Review, edit, approve — inside your Workbench.
            </h3>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
            <div className="card-iw overflow-hidden">
              <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                <div className="flex items-center gap-2 text-brand-accent">
                  <ShieldCheck size={16} />
                  <p className="text-[12px] font-semibold uppercase tracking-wider">
                    Approval Gate
                  </p>
                </div>
                <Badge variant="muted">91% confidence</Badge>
              </div>
              <div className="p-5">
                <h3 className="text-[18px] font-semibold text-foreground">
                  Proposed action: Escalate renewal risk for FinanceFlow.
                </h3>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-border bg-elevated/40 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      What Twin wants to do
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
          </Reveal>

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[16px] font-medium text-foreground/90">
              You stay in your Workbench; AI stays in its layer. Actions cross the line only through
              the Approval Gate.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 8. CTA */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">See your Workbench built on your own data.</h2>
            <p className="mx-auto mt-4 text-[16px] leading-relaxed text-text-secondary">
              In one demo we connect your tools, show the Digital Memory that forms in the Platform,
              and then walk you through a Workbench that reflects your actual day — not an empty
              template.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open()} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
              </button>
              <button onClick={() => open()} className="btn-secondary-iw">
                Talk about your workflows
              </button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

/* ----------------------------------------------------------------------- */
/*  Workbench frame mock                                                    */
/* ----------------------------------------------------------------------- */
function WorkbenchFrame({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="card-iw overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
      aria-label="Workbench preview"
    >
      {/* Browser chrome */}
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
        {/* Left nav */}
        <aside className="hidden border-r border-border p-3 lg:block">
          <p className="px-2 text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
            Workbench
          </p>
          <ul className="mt-2 space-y-0.5">
            {NAV_ITEMS.slice(0, compact ? 9 : NAV_ITEMS.length).map((n, i) => {
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

          <div className="mt-5 flex items-center gap-2 rounded-lg border border-border bg-elevated/50 px-2.5 py-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent/15 text-[11px] font-semibold text-brand-accent">
              AR
            </div>
            <div className="min-w-0">
              <p className="truncate text-[12px] font-medium text-foreground">Alex Rivera</p>
              <p className="truncate text-[11px] text-text-secondary">Business Ops</p>
            </div>
          </div>
        </aside>

        {/* Center work view */}
        <div className="border-r border-border">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="badge-iw badge-iw-muted !text-[11px]">Accounts & Revenue</span>
              <span className="text-[12px] text-text-secondary">12 accounts · 4 at-risk</span>
            </div>
            <div className="hidden items-center gap-1.5 rounded-md border border-border bg-elevated/60 px-2 py-1 text-[11px] text-text-secondary sm:flex">
              <Search size={11} />
              search
            </div>
          </div>

          <div className="overflow-hidden">
            <table className="w-full text-left text-[13px]">
              <thead className="bg-elevated/40 text-[11px] uppercase tracking-wider text-text-secondary">
                <tr>
                  <th className="px-4 py-2 font-semibold">Account</th>
                  <th className="px-2 py-2 font-semibold">Status</th>
                  <th className="px-2 py-2 font-semibold">ARR</th>
                  <th className="hidden px-2 py-2 font-semibold sm:table-cell">Outstanding</th>
                  <th className="hidden px-2 py-2 font-semibold md:table-cell">GST</th>
                  <th className="hidden px-2 py-2 font-semibold md:table-cell">Tickets</th>
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
                          color:
                            r.tone === "warning" ? "var(--state-warning)" : "var(--state-success)",
                          borderColor: "transparent",
                        }}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-2 py-2.5 text-foreground/90">{r.arr}</td>
                    <td className="hidden px-2 py-2.5 text-foreground/85 sm:table-cell">
                      {r.outstanding}
                    </td>
                    <td className="hidden px-2 py-2.5 text-foreground/85 md:table-cell">{r.gst}</td>
                    <td className="hidden px-2 py-2.5 text-foreground/85 md:table-cell">
                      {r.tickets}
                    </td>
                    <td className="px-4 py-2.5 text-text-secondary">{r.next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right evidence + approval */}
        <aside className="hidden border-t border-border lg:block lg:border-t-0">
          <div className="border-b border-border px-4 py-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
              Evidence & Approval
            </p>
            <p className="mt-1 text-[13px] font-semibold text-foreground">FinanceFlow</p>
            <p className="text-[11px] text-text-secondary">At-risk · usage -23% wk</p>
          </div>
          <div className="p-3 space-y-2">
            {[
              { icon: Receipt, label: "Tally invoice #INV-2241" },
              { icon: CreditCard, label: "Razorpay: payment failed" },
              { icon: Mail, label: "Gmail: 'budget freeze Q2'" },
              { icon: MessageSquare, label: "WhatsApp: 'review next wk'" },
              { icon: Sparkles, label: "Approved escalation rule" },
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
                <button className="btn-secondary-iw !px-2.5 !py-1 !text-[11px]">
                  <X size={11} />
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
