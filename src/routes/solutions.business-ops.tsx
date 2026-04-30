import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  AlertTriangle,
  CreditCard,
  TrendingUp,
  Users,
  Plug,
  LayoutGrid,
  Settings2,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { StickySubNav } from "@/components/site/StickySubNav";

export const Route = createFileRoute("/solutions/business-ops")({
  head: () => ({
    meta: [
      { title: "Business Ops — Run the day from one screen" },
      {
        name: "description",
        content:
          "For founders, COOs and ops leaders. A Business Workspace on Org Memory, with a Twin that prepares morning briefs and Approval-gated actions across revenue, collections and risk.",
      },
      { property: "og:title", content: "Business Ops — IntegrateWise" },
      {
        property: "og:description",
        content:
          "From many dashboards to one operating view. Twin proposes; you approve.",
      },
    ],
  }),
  component: BusinessOpsPage,
});

const SUBNAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "workspace", label: "Workspace" },
  { id: "brief", label: "Morning brief" },
  { id: "examples", label: "Examples" },
  { id: "getting-started", label: "Getting started" },
];

const LOB_ROWS = [
  {
    name: "SaaS — Mid-market",
    mrr: "₹84L",
    collections: "94%",
    atRisk: "₹6.2L",
    tickets: 12,
    tone: "success" as const,
  },
  {
    name: "SaaS — Enterprise",
    mrr: "₹1.2Cr",
    collections: "88%",
    atRisk: "₹14L",
    tickets: 7,
    tone: "warning" as const,
  },
  {
    name: "Services — Retainers",
    mrr: "₹42L",
    collections: "91%",
    atRisk: "₹3.8L",
    tickets: 4,
    tone: "success" as const,
  },
  {
    name: "Services — Projects",
    mrr: "₹28L",
    collections: "76%",
    atRisk: "₹9.1L",
    tickets: 9,
    tone: "warning" as const,
  },
];

const BRIEF_ITEMS = [
  {
    icon: AlertTriangle,
    body: "3 accounts moved to at-risk.",
  },
  {
    icon: CreditCard,
    body: "₹14L stuck beyond normal collection window.",
  },
  {
    icon: Users,
    body: "Support queue above threshold in one region.",
  },
  {
    icon: TrendingUp,
    body: "2 projects slipped their milestone.",
  },
];

const EXAMPLES = [
  {
    title: "Collections loop",
    body:
      "Twin surfaces invoices beyond normal window, groups by client impact, and prepares reminders and internal notes for finance. You approve which to send.",
    icon: CreditCard,
  },
  {
    title: "Renewal & forecast loop",
    body:
      "Twin highlights deals stuck, renewals at risk and segments beating plan. You approve forecast adjustments with full proof.",
    icon: TrendingUp,
  },
  {
    title: "Capacity & risk loop",
    body:
      "Twin connects ticket load, project slippage and pipeline to show where capacity is tight. You approve hiring, reprioritisation or temporary pauses.",
    icon: Briefcase,
  },
];

const STEPS = [
  {
    n: "01",
    title: "Connect finance, CRM and support",
    body: "Pick one line of business. Use OAuth or API keys.",
    icon: Plug,
  },
  {
    n: "02",
    title: "Open the Business Workspace",
    body: "Give a small leadership pod access — founder, COO, head of ops.",
    icon: LayoutGrid,
  },
  {
    n: "03",
    title: "Turn on a morning brief",
    body: "Enable one or two Twin actions in proposals-only mode.",
    icon: Sparkles,
  },
  {
    n: "04",
    title: "Expand to more teams",
    body: "Once the new loop feels natural, add lines of business and roles.",
    icon: Settings2,
  },
];

function BusinessOpsPage() {
  const { open } = useDemoModal();

  return (
    <>
      <StickySubNav items={SUBNAV_ITEMS} />

      {/* 1. Hero — #overview */}
      <Section orbs id="overview" className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Solutions · Business Ops</Badge>
            <h1 className="heading-h1 mt-5">
              Run the day{" "}
              <span className="text-gradient-hero">from one screen.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              For founders and operators who live in dashboards, sheets and chat, but still have
              to ask "what's really going on?" IntegrateWise gives you a Business Workspace on top
              of Org Memory, plus a Twin that prepares morning briefs and actions you approve.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open("Business Ops hero")} className="btn-primary-iw">
                Book a Business Ops demo <ArrowRight size={16} />
              </button>
              <a href="#brief" className="btn-secondary-iw">
                Show me a morning brief
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Overview narrative */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="heading-h2 text-center">
              From many dashboards to one operating view.
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[15.5px] leading-relaxed text-text-secondary">
              <p>
                Today, you have a dashboard for revenue, separate reports for collections,
                tickets, and projects. Decisions still require manual stitching across tabs,
                screenshots and shared sheets.
              </p>
              <p>
                With IntegrateWise, Spine + Digital Memory build Org Memory across your tools.
                The Business Workspace shows lines of business, cohorts, risk and workload in one
                view — without the weekly dashboard rebuild.
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
            <h2 className="heading-h2 mt-4">Your Business Workspace.</h2>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-6xl">
            <div className="card-iw overflow-hidden" style={{ background: "var(--bg-surface)" }}>
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <span className="badge-iw badge-iw-muted !text-[11px]">Lines of business</span>
                <span className="text-[12px] text-text-secondary">4 lines · 2 at-risk</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead className="bg-elevated/40 text-[11px] uppercase tracking-wider text-text-secondary">
                    <tr>
                      <th className="px-4 py-2 font-semibold">Line of business</th>
                      <th className="px-2 py-2 font-semibold">MRR</th>
                      <th className="hidden px-2 py-2 font-semibold sm:table-cell">
                        Collections %
                      </th>
                      <th className="hidden px-2 py-2 font-semibold md:table-cell">
                        At-risk revenue
                      </th>
                      <th className="hidden px-2 py-2 font-semibold md:table-cell">
                        Open tickets
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {LOB_ROWS.map((r) => (
                      <tr key={r.name} className="border-t border-border/70">
                        <td className="px-4 py-2.5 font-medium text-foreground">
                          <div className="flex items-center gap-2">
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{
                                background:
                                  r.tone === "warning"
                                    ? "var(--state-warning)"
                                    : "var(--state-success)",
                              }}
                            />
                            {r.name}
                          </div>
                        </td>
                        <td className="px-2 py-2.5 text-foreground/90">{r.mrr}</td>
                        <td className="hidden px-2 py-2.5 text-foreground/85 sm:table-cell">
                          {r.collections}
                        </td>
                        <td className="hidden px-2 py-2.5 text-foreground/85 md:table-cell">
                          {r.atRisk}
                        </td>
                        <td className="hidden px-2 py-2.5 text-foreground/85 md:table-cell">
                          {r.tickets}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="mx-auto mt-8 max-w-3xl">
            <ul className="space-y-2.5 text-[14px] leading-relaxed text-foreground/90">
              <li>• See revenue, collections and risk by segment or line of business.</li>
              <li>• Drill into accounts or projects when something moves.</li>
              <li>• Spot where money is stuck or work is blocked.</li>
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* 4. Morning brief — #brief */}
      <Section alt id="brief">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Twin</Badge>
            <h2 className="heading-h2 mt-4">Your day starts with a brief, not a spreadsheet.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Twin reads Digital Memory overnight and produces a short morning brief inside your
              Workspace. Each line links to evidence and a suggested action, all waiting behind
              Approval.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
            <div className="card-iw overflow-hidden">
              <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                <div className="flex items-center gap-2 text-brand-accent">
                  <Sparkles size={16} />
                  <p className="text-[12px] font-semibold uppercase tracking-wider">
                    Twin · Morning brief
                  </p>
                </div>
                <Badge variant="muted">4 to review</Badge>
              </div>
              <ul className="divide-y divide-border">
                {BRIEF_ITEMS.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-4 px-5 py-3.5"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <Icon size={15} className="shrink-0 text-brand-accent" />
                        <span className="text-[14px] text-foreground/90">{b.body}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11.5px] text-text-secondary">
                        <ShieldCheck size={11} className="text-brand-accent" /> Approval
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Examples — #examples */}
      <Section id="examples">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Examples</Badge>
            <h2 className="heading-h2 mt-4">Loops operators actually use.</h2>
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
            <h2 className="heading-h2 mt-4">Start with one leadership pod.</h2>
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
              onClick={() => open("Business Ops getting started")}
              className="btn-primary-iw"
            >
              Book a Business Ops demo <ArrowRight size={16} />
            </button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
