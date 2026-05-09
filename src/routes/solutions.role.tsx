import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { HashSlider, type HashSlide } from "@/components/site/HashSlider";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/solutions/role")({
  head: () => ({
    meta: [
      { title: "Solutions by Role — One foundation, different roles." },
      {
        name: "description",
        content:
          "Customer Success, Founders, RevOps, Operations, Finance, and Individual Professionals — same Memory, Workspace, and Twin, filtered for how each role actually works.",
      },
      { property: "og:title", content: "IntegrateWise — Solutions by Role" },
      { property: "og:description", content: "One foundation, different roles." },
    ],
  }),
  component: RoleSliderPage,
});

interface RoleDef {
  id: string;
  name: string;
  oneLiner: string;
  outcomes: string[];
  twin: string;
  cta: { label: string; source: string; waitlist?: boolean };
}

const ROLES: RoleDef[] = [
  {
    id: "founder",
    name: "Founders & CXOs",
    oneLiner: "Monday brief, board pack, and the full operating picture in one screen.",
    outcomes: [
      "Yesterday's revenue, collections, and risks — assembled before you open Slack",
      "One link for the board pack, sourced from accumulated Memory",
      "Top-3 things that changed across the company",
    ],
    twin: "Twin compiles your Monday brief from Org Memory and proposes the three calls to make first.",
    cta: { label: "Book a founder demo", source: "Role · Founder" },
  },
  {
    id: "account-lead",
    name: "Customer Success & TAMs",
    oneLiner: "Save accounts and accelerate renewals with one client story per row.",
    outcomes: [
      "Walk into every call already knowing what changed",
      "See usage, tickets, invoices, and conversations in one client view",
      "Get early warning on churn before it shows up in numbers",
    ],
    twin: "Twin proposes the next message, the right escalation, and the renewal play — every action through approval.",
    cta: { label: "Book a CS demo", source: "Role · Account Lead" },
  },
  {
    id: "ops",
    name: "Rev / Business Ops",
    oneLiner: "Pipeline, headcount, and risk — connected, not in seven dashboards.",
    outcomes: [
      "Pipeline shifts mapped to actual emails and meetings",
      "Forecast deltas explained by Memory, not guessed",
      "Operational risks surfaced before they become fires",
    ],
    twin: "Twin assembles the weekly ops review and proposes the cleanup tasks — you approve which run.",
    cta: { label: "Book an ops demo", source: "Role · Ops" },
  },
  {
    id: "delivery",
    name: "Operations & Delivery",
    oneLiner: "Projects, utilisation, and exceptions across teams and tools.",
    outcomes: [
      "See every project's real status, not the status report",
      "Catch utilisation imbalances before they hit margins",
      "Get exception alerts with the original message attached",
    ],
    twin: "Twin drafts the client status note, the internal re-scope, and the team rebalance — all gated by approval.",
    cta: { label: "Book a delivery demo", source: "Role · Delivery" },
  },
  {
    id: "finance",
    name: "Finance Leaders",
    oneLiner: "Cash, collections, and runway — connected to the rest of the business.",
    outcomes: [
      "Weekly cash brief with the AR detail behind every number",
      "Collections proposals tied to real customer conversations",
      "Runway and FX moved by accumulating Memory, not stale exports",
    ],
    twin: "Twin proposes the collections run for the week and the cash brief for the leadership team.",
    cta: { label: "Book a finance demo", source: "Role · Finance" },
  },
  {
    id: "individual",
    name: "Individual Professionals",
    oneLiner: "Your morning brief and session memory — private, accumulating, yours.",
    outcomes: [
      "A short morning brief built from your own User Memory",
      "Notes, tasks, calendar, and bookmarks become accumulating context",
      "A Twin that respects your space — never sees Org or Work Memory unless you join them",
    ],
    twin: "Twin proposes follow-ups, prep, and review plans — every action through Approval Gate.",
    cta: { label: "Join Personal Space waitlist", source: "Role · Individual", waitlist: true },
  },
];

function RoleSliderPage() {
  const { open, openWaitlist } = useDemoModal();

  const slides: HashSlide[] = ROLES.map((role) => ({
    id: role.id,
    label: role.name,
    render: () => (
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="flex items-center gap-2">
              <Badge variant="muted">{role.name}</Badge>
              {role.cta.waitlist && (
                <span className="rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-brand-highlight">
                  Waitlist
                </span>
              )}
            </div>
            <h2 className="heading-h2 mt-4">
              {role.name} on{" "}
              <span className="text-gradient-hero">accumulating Digital Memory.</span>
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">{role.oneLiner}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  role.cta.waitlist ? openWaitlist(role.cta.source) : open(role.cta.source)
                }
                className="btn-primary-iw"
              >
                {role.cta.label} <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-iw p-6" style={{ background: "var(--bg-surface)" }}>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                What this role gets
              </p>
              <ul className="mt-3 space-y-2 text-[14px] text-foreground/90">
                {role.outcomes.map((o) => (
                  <li
                    key={o}
                    className="rounded-lg border border-border bg-elevated/50 px-3 py-2.5"
                  >
                    {o}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
                  What Twin does for you
                </p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/90">
                  {role.twin}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    ),
  }));

  return (
    <>
      {/* Hero */}
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">By Role</Badge>
            <h1 className="heading-h1 mt-5">
              One foundation, <span className="text-gradient-hero">different roles.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              Same Spine, Digital Memory, Workspace, and Twin. Filtered to the questions your role
              actually has to answer.
            </p>
          </div>
        </Container>
      </Section>

      {/* Slider */}
      <Section>
        <HashSlider slides={slides} ariaLabel="Roles" />
      </Section>

      {/* Closing */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">
              One foundation. <span className="text-brand-accent">Many ways to work.</span>
            </h2>
            <p className="mx-auto mt-4 text-[16px] leading-relaxed text-text-secondary">
              Memory compounds across roles. The same accumulating context shows up shaped for the
              person who needs it.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open("By Role · closing")} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
