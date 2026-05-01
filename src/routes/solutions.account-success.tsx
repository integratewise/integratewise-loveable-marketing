import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  TrendingDown,
  CreditCard,
  Mail,
  MessageSquare,
  Sparkles,
  AlertTriangle,
  ShieldCheck,
  Plug,
  Database,
  LayoutGrid,
  Settings2,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { StickySubNav } from "@/components/site/StickySubNav";

export const Route = createFileRoute("/solutions/account-success")({
  head: () => ({
    meta: [
      { title: "Account Success — One client story, across every tool" },
      {
        name: "description",
        content:
          "For CAs, CSMs and account managers. IntegrateWise stitches finance, product, support and conversations into one client Memory, with a Twin that surfaces churn-risk early and waits behind Approval.",
      },
      { property: "og:title", content: "Account Success — IntegrateWise" },
      {
        property: "og:description",
        content:
          "One client story across ledgers, CRMs, support and WhatsApp. Twin proposes; you approve.",
      },
    ],
  }),
  component: AccountSuccessPage,
});

const SUBNAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "workspace", label: "Workspace" },
  { id: "twin", label: "Twin" },
  { id: "examples", label: "Examples" },
  { id: "getting-started", label: "Getting started" },
];

const ACCOUNT_ROWS = [
  {
    name: "FinanceFlow",
    health: "At-risk",
    arr: "$84k",
    overdue: "₹2.4L",
    tickets: 3,
    next: "Escalate renewal",
    tone: "warning" as const,
  },
  {
    name: "TechServe",
    health: "At-risk",
    arr: "$120k",
    overdue: "—",
    tickets: 1,
    next: "Send check-in",
    tone: "warning" as const,
  },
  {
    name: "CloudBridge",
    health: "Healthy",
    arr: "$56k",
    overdue: "—",
    tickets: 0,
    next: "QBR Apr 28",
    tone: "success" as const,
  },
  {
    name: "Northwind Co",
    health: "Healthy",
    arr: "$210k",
    overdue: "₹48k",
    tickets: 0,
    next: "Renewal call",
    tone: "success" as const,
  },
];

const EXAMPLES = [
  {
    title: "Churn detection",
    body:
      "40% usage drop + champion left + 3 P1 tickets. Twin flags risk 90 days before renewal and prepares an escalation plan.",
    icon: AlertTriangle,
  },
  {
    title: "Collections hygiene",
    body:
      "Overdue invoices + partial payments + 'will pay next week' WhatsApp thread. Twin prepares a gentle reminder and an internal note for finance.",
    icon: CreditCard,
  },
  {
    title: "Expansion moments",
    body:
      "Feature usage spikes + great CSAT + previous upsell note in Session Summary. Twin suggests an expansion play with evidence.",
    icon: Sparkles,
  },
];

const STEPS = [
  {
    n: "01",
    title: "Connect finance, CRM and support",
    body: "Pick a single pod of accounts. Use OAuth or API keys — no CSV exports.",
    icon: Plug,
  },
  {
    n: "02",
    title: "Let Spine build Digital Memory",
    body: "Spine cleans and links invoices, tickets, threads and notes for those accounts.",
    icon: Database,
  },
  {
    n: "03",
    title: "Move that pod into the Workspace",
    body: "The Account Success Workspace shows stitched account stories and a segment view.",
    icon: LayoutGrid,
  },
  {
    n: "04",
    title: "Enable Twin in proposals-only mode",
    body: "Twin watches Memory, prepares actions, and tunes to what 'good' looks like for you.",
    icon: Settings2,
  },
];

function AccountSuccessPage() {
  const { open } = useDemoModal();

  return (
    <>
      <StickySubNav items={SUBNAV_ITEMS} variant="rail" />

      {/* 1. Hero — #overview */}
      <Section orbs id="overview" className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Solutions · Account Success</Badge>
            <h1 className="heading-h1 mt-5">
              One client story,{" "}
              <span className="text-gradient-hero">across every tool.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              For CAs, CSMs and account managers who are tired of stitching ledgers, CRMs, support
              tools and WhatsApp by hand. IntegrateWise gives each client a single stitched story —
              money, tickets and conversations — with a Twin that surfaces risk early and waits
              behind Approval.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open("Account Success hero")} className="btn-primary-iw">
                Book an Account Success demo <ArrowRight size={16} />
              </button>
              <button
                onClick={() => open("Account Success secondary")}
                className="btn-secondary-iw"
              >
                Talk about your clients
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Overview narrative */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="heading-h2 text-center">
              From scattered accounts to one Memory per client.
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[15.5px] leading-relaxed text-text-secondary">
              <p>
                Today, account information lives in Tally or Zoho Books for ledgers, Razorpay or
                Stripe for collections, your CRM for deals, support tools for tickets, and
                WhatsApp or email for the conversations that actually explain what's going on.
              </p>
              <p>
                IntegrateWise connects those tools into a Spine, and turns only what matters into
                Digital Memory at the account level — Truth (invoices, payments, tickets, usage),
                Context (threads, notes, calls) and approved Session Summaries.
              </p>
              <p>
                The Workspace presents an{" "}
                <span className="text-foreground font-medium">Account view</span> for any single
                client and a <span className="text-foreground font-medium">Segment view</span>{" "}
                across a portfolio — without spreadsheets and without rebuilding dashboards every
                quarter.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Workspace — #workspace */}
      <Section id="workspace">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Workspace</Badge>
            <h2 className="heading-h2 mt-4">Your Account Success Workspace.</h2>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-6xl">
            <div className="card-iw overflow-hidden" style={{ background: "var(--bg-surface)" }}>
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <span className="badge-iw badge-iw-muted !text-[11px]">Accounts & Revenue</span>
                <span className="text-[12px] text-text-secondary">12 accounts · 4 at-risk</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead className="bg-elevated/40 text-[11px] uppercase tracking-wider text-text-secondary">
                    <tr>
                      <th className="px-4 py-2 font-semibold">Account</th>
                      <th className="px-2 py-2 font-semibold">Health</th>
                      <th className="px-2 py-2 font-semibold">ARR</th>
                      <th className="hidden px-2 py-2 font-semibold sm:table-cell">Overdue</th>
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
                                r.tone === "warning"
                                  ? "var(--state-warning)"
                                  : "var(--state-success)",
                              borderColor: "transparent",
                            }}
                          >
                            {r.health}
                          </span>
                        </td>
                        <td className="px-2 py-2.5 text-foreground/90">{r.arr}</td>
                        <td className="hidden px-2 py-2.5 text-foreground/85 sm:table-cell">
                          {r.overdue}
                        </td>
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
          </Reveal>

          <Reveal delay={200} className="mx-auto mt-8 max-w-3xl">
            <ul className="space-y-2.5 text-[14px] leading-relaxed text-foreground/90">
              <li>• See invoices, payments, tickets and key conversations in one place.</li>
              <li>• Segment by plan, segment, owner or risk.</li>
              <li>• Jump into a single client timeline to prep for any call.</li>
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* 4. Twin — #twin */}
      <Section alt id="twin">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Twin</Badge>
            <h2 className="heading-h2 mt-4">Twin watches accounts. You approve every move.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Usage drops, payments slip, tickets spike, tone in email turns tense. Twin joins
              these into a clear "churn risk" signal with full evidence and prepared actions.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl items-stretch gap-6 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="card-iw h-full p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                  Evidence — FinanceFlow
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    { icon: TrendingDown, label: "Usage -23% this week", tag: "Truth" },
                    { icon: CreditCard, label: "Razorpay payment failed", tag: "Truth" },
                    { icon: Mail, label: "Gmail: 'budget freeze for Q2'", tag: "Context" },
                    { icon: MessageSquare, label: "WhatsApp: 'review next week'", tag: "Context" },
                    { icon: Sparkles, label: "Approved escalation rule", tag: "Session" },
                  ].map((e, i) => {
                    const Icon = e.icon;
                    return (
                      <li
                        key={i}
                        className="flex items-center justify-between gap-3 rounded-lg border border-border bg-elevated/50 px-3 py-2.5"
                      >
                        <div className="flex min-w-0 items-center gap-2.5">
                          <Icon size={14} className="shrink-0 text-text-secondary" />
                          <span className="truncate text-[13px] text-foreground/90">{e.label}</span>
                        </div>
                        <span className="badge-iw badge-iw-muted !text-[10px]">{e.tag}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className="card-iw h-full p-6"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--brand-accent) 10%, transparent), var(--bg-surface))",
                }}
              >
                <div className="flex items-center gap-2 text-brand-accent">
                  <Sparkles size={16} />
                  <p className="text-[11px] font-semibold uppercase tracking-wider">
                    Twin · prepared actions
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5 text-[14px] text-foreground/90">
                  <li className="rounded-md border border-border bg-bg-surface/50 px-3 py-2">
                    Draft client email — renewal escalation
                  </li>
                  <li className="rounded-md border border-border bg-bg-surface/50 px-3 py-2">
                    Internal note for the account team
                  </li>
                  <li className="rounded-md border border-border bg-bg-surface/50 px-3 py-2">
                    Forecast update — move to At-risk
                  </li>
                  <li className="rounded-md border border-border bg-bg-surface/50 px-3 py-2">
                    Follow-up tasks for owner
                  </li>
                </ul>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] text-text-secondary">
                  <ShieldCheck size={13} className="text-brand-accent" /> Behind Approval — Approve,
                  Edit or Reject
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[15px] font-medium text-foreground/90">
              Nothing is sent or changed without Approval. You can Approve, Edit or Reject every
              action.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Examples — #examples */}
      <Section id="examples">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Examples</Badge>
            <h2 className="heading-h2 mt-4">Real Account Success loops.</h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
            {EXAMPLES.map((e, i) => {
              const Icon = e.icon;
              return (
                <Reveal key={e.title} delay={i * 80}>
                  <div className="card-iw h-full p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-[18px] font-semibold text-foreground">{e.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-foreground/85">{e.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 6. Getting started — #getting-started */}
      <Section alt id="getting-started">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Getting started</Badge>
            <h2 className="heading-h2 mt-4">Start with one pod of accounts.</h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 lg:grid-cols-4">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="card-iw h-full p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                        {s.n}
                      </span>
                      <Icon size={16} className="text-brand-accent" />
                    </div>
                    <p className="mt-3 text-[15px] font-semibold text-foreground">{s.title}</p>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400} className="mx-auto mt-10 max-w-3xl text-center">
            <button
              onClick={() => open("Account Success getting started")}
              className="btn-primary-iw"
            >
              Book an Account Success demo <ArrowRight size={16} />
            </button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
