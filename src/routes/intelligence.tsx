import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  X,
  Sparkles,
  ShieldCheck,
  TrendingDown,
  Mail,
  MessageSquare,
  AlertTriangle,
  FileText,
  Send,
  RefreshCcw,
  Sun,
  MousePointerClick,
  Pencil,
  Lock,
  BookLock,
  History,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { StickySubNav } from "@/components/site/StickySubNav";

export const Route = createFileRoute("/intelligence")({
  head: () => ({
    meta: [
      { title: "Intelligence — Your Twin reads your Digital Memory" },
      {
        name: "description",
        content:
          "The IntegrateWise Twin reads only your Digital Memory — Truth, Context, approved Session Summaries — and stands behind a hard line of Approval. Truth you own. AI you rent.",
      },
      { property: "og:title", content: "IntegrateWise Intelligence — The Twin" },
      {
        property: "og:description",
        content:
          "Not usual AI. A governed Twin that watches your Memory, prepares actions with proofs, and waits for your approval.",
      },
    ],
  }),
  component: IntelligencePage,
});

const SUBNAV_ITEMS = [
  { id: "twin", label: "Twin" },
  { id: "how-it-works", label: "How it works" },
  { id: "twin-execution", label: "Execution" },
  { id: "security", label: "Security" },
];

const IS_LIST = [
  "An intelligence layer that watches your Digital Memory and Workspace.",
  "A system that spots patterns across tools and time, prepares actions, explains proofs, and waits.",
  "A governed way to turn Memory into daily briefings, suggestions and drafts.",
];

const IS_NOT_LIST = [
  "Not a 'personal AI assistant' that automatically runs your business.",
  "Not a bot that writes into your tools or Memory on its own.",
  "Not a replacement for your judgement, approvals or compliance.",
];

const SIGNAL_STRANDS = [
  {
    icon: TrendingDown,
    tag: "Truth",
    body: "Product usage drops 25% for a client over the last 10 days.",
    color: "var(--state-success)",
  },
  {
    icon: FileText,
    tag: "Truth",
    body: "Finance reduces their credit or freezes budget in Tally or your billing tool.",
    color: "var(--state-success)",
  },
  {
    icon: AlertTriangle,
    tag: "Truth",
    body: "Two high-priority tickets remain unresolved in support.",
    color: "var(--state-success)",
  },
  {
    icon: MessageSquare,
    tag: "Context",
    body: "Your CSM wrote a note last week about a tense meeting.",
    color: "var(--state-info)",
  },
  {
    icon: Sparkles,
    tag: "Session Summary",
    body: "A Session Summary says: 'At risk if deployment slips again.'",
    color: "var(--state-warning)",
  },
];

const OUTPUTS = [
  {
    icon: Sun,
    title: "Morning brief",
    body: "Concise view of what changed since yesterday — clients at risk, filings due, payments missed, opportunities warming up. Each item links back to Workspace with evidence.",
  },
  {
    icon: MousePointerClick,
    title: "In-context nudges",
    body: "While you are in a client, project or business view, Twin surfaces relevant notes and suggestions tied to what you're looking at.",
  },
  {
    icon: Pencil,
    title: "Prepared actions",
    body: "Draft emails, internal updates, ticket changes or forecast adjustments, each bundled with evidence and confidence.",
  },
];

const LOOP_STEPS = [
  {
    n: "01",
    title: "Propose",
    body: "Twin prepares a brief or an action with proofs and a confidence score.",
    icon: Sparkles,
  },
  {
    n: "02",
    title: "Approve / Edit / Reject",
    body: "You review inside Workspace, edit if needed, and either approve or reject.",
    icon: ShieldCheck,
  },
  {
    n: "03",
    title: "Execute in apps",
    body: "Approved actions execute in your tools — emails sent, records updated, tasks created.",
    icon: Send,
  },
  {
    n: "04",
    title: "Re-ingest & learn",
    body: "Results flow back as new Truth and Context in Digital Memory. Twin sees the new state on its next pass.",
    icon: RefreshCcw,
  },
];

const SECURITY_BULLETS = [
  {
    icon: BookLock,
    text: "Twin reads only from Digital Memory — never from the open internet.",
  },
  {
    icon: Lock,
    text: "Twin cannot write directly into Memory or your tools; it can only propose.",
  },
  {
    icon: History,
    text: "Every approved action carries an audit trail: who approved, when, and based on which evidence.",
  },
];

function IntelligencePage() {
  const { open } = useDemoModal();

  return (
    <>
      <StickySubNav items={SUBNAV_ITEMS} variant="rail" />

      {/* 1. Hero — #twin */}
      <Section orbs id="twin" className="!pt-20 lg:!pt-28">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
            <Reveal>
              <Badge variant="muted">Intelligence</Badge>
              <h1 className="heading-h1 mt-5">
                Not usual AI.{" "}
                <span className="text-gradient-hero">
                  Your Twin reads your Digital Memory.
                </span>
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-text-secondary">
                Most AI tools sit on top of the open internet or a shallow index of your docs. They
                answer nicely phrased questions, then forget. They guess without full context and
                cannot be trusted with money, clients or compliance.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
                The IntegrateWise Twin is different. It reads only from your Digital Memory — the
                Truth, Context and approved Session Summaries built on your Spine — and stands
                behind a hard line of Approval.
              </p>
              <p className="mt-5 text-[15px] font-medium text-foreground/90">
                Truth you own. AI you rent. Approval in between.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button onClick={() => open("Intelligence hero")} className="btn-primary-iw">
                  See Twin in action <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => open("Intelligence demo")}
                  className="btn-secondary-iw"
                >
                  Book an intelligence demo
                </button>
              </div>
            </Reveal>

            {/* Right visual: Twin proposal panel */}
            <Reveal delay={150}>
              <div className="card-iw overflow-hidden" style={{ background: "var(--bg-surface)" }}>
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <div className="flex items-center gap-2 text-brand-accent">
                    <Sparkles size={15} />
                    <p className="text-[11px] font-semibold uppercase tracking-wider">
                      Twin · Morning brief
                    </p>
                  </div>
                  <Badge variant="muted">3 to review</Badge>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    {
                      title: "Escalate FinanceFlow renewal",
                      conf: 91,
                      tags: ["Truth: usage -23%", "Context: budget freeze", "Summary: rule"],
                    },
                    {
                      title: "Send check-in to TechServe",
                      conf: 87,
                      tags: ["Truth: 2 tickets", "Context: tense meeting"],
                    },
                    {
                      title: "Adjust CloudBridge forecast",
                      conf: 78,
                      tags: ["Truth: signed renewal", "Summary: QBR cadence"],
                    },
                  ].map((p) => (
                    <div
                      key={p.title}
                      className="rounded-lg border border-border bg-elevated/40 p-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[13px] font-medium text-foreground">{p.title}</p>
                        <Badge variant="muted">{p.conf}%</Badge>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border bg-bg-surface/60 px-1.5 py-0.5 text-[10.5px] text-text-secondary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 border-t border-border px-4 py-3">
                  <button className="btn-primary-iw !px-3 !py-1.5 !text-[12px]">
                    <Check size={13} /> Approve
                  </button>
                  <button className="btn-secondary-iw !px-3 !py-1.5 !text-[12px]">
                    <Pencil size={13} /> Edit
                  </button>
                  <button className="btn-secondary-iw !px-3 !py-1.5 !text-[12px]">
                    <X size={13} /> Reject
                  </button>
                  <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-text-secondary">
                    <ShieldCheck size={12} className="text-brand-accent" /> Approval required
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 2. Is / Is not — still under #twin */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Boundaries</Badge>
            <h2 className="heading-h2 mt-4">What Twin is — and what it isn't.</h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="card-iw h-full p-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                  What Twin is
                </p>
                <ul className="mt-4 space-y-3">
                  {IS_LIST.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-[14px] text-foreground/90">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand-accent" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-iw h-full p-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                  What Twin is not
                </p>
                <ul className="mt-4 space-y-3">
                  {IS_NOT_LIST.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-[14px] text-foreground/90">
                      <X size={16} className="mt-0.5 shrink-0 text-state-error" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[15px] font-medium text-foreground/90">
              Twin watches, suggests, prepares, explains, and waits for Approval. It never pushes
              work into the world without you.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 3. How it works — #how-it-works */}
      <Section id="how-it-works">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">How it works</Badge>
            <h2 className="heading-h2 mt-4">From Digital Memory to signals.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              On any given day, your tools generate thousands of events. On their own, they mean
              little. Together, they tell the real story.
            </p>
          </Reveal>

          {/* Strands → signal */}
          <div className="mx-auto mt-10 grid max-w-6xl items-stretch gap-6 lg:grid-cols-[1.2fr_auto_1fr]">
            <Reveal>
              <div className="card-iw h-full p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                  Strands across your Memory
                </p>
                <ul className="mt-4 space-y-2.5">
                  {SIGNAL_STRANDS.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-lg border border-border bg-elevated/40 px-3 py-2.5"
                      >
                        <span
                          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                          style={{
                            background: `color-mix(in oklab, ${s.color} 14%, transparent)`,
                            color: s.color,
                          }}
                        >
                          <Icon size={14} />
                        </span>
                        <div className="min-w-0">
                          <span
                            className="rounded-md border border-border bg-bg-surface/60 px-1.5 py-0.5 text-[10.5px] uppercase tracking-wider text-text-secondary"
                          >
                            {s.tag}
                          </span>
                          <p className="mt-1 text-[13.5px] text-foreground/90">{s.body}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <div className="hidden lg:flex items-center justify-center">
              <ArrowRight className="text-brand-accent" />
            </div>

            <Reveal delay={120}>
              <div
                className="card-iw h-full p-6"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--brand-accent) 10%, transparent), var(--bg-surface))",
                }}
              >
                <div className="flex items-center gap-2 text-brand-accent">
                  <AlertTriangle size={16} />
                  <p className="text-[11px] font-semibold uppercase tracking-wider">
                    Twin signal
                  </p>
                </div>
                <p className="mt-3 text-[18px] font-semibold text-foreground">
                  This client is at churn risk.
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                  Twin joins these strands into a clear signal and prepares a suggested plan — a
                  check-in email, an internal note, a forecast change proposal, and follow-up
                  tasks — all with proofs and confidence.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {[
                    "Check-in email",
                    "Internal note",
                    "Forecast change",
                    "Follow-up tasks",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-brand-accent/30 bg-brand-accent/5 px-2 py-0.5 text-[11px] text-brand-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] text-text-secondary">
                  <ShieldCheck size={12} className="text-brand-accent" /> Behind Approval Gate
                </div>
              </div>
            </Reveal>
          </div>

          {/* Outputs */}
          <Reveal className="mx-auto mt-20 max-w-3xl text-center">
            <h3 className="text-[28px] md:text-[32px] font-semibold text-foreground">
              Briefs, nudges and prepared actions.
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
              Three ways Twin shows up in your day — always grounded in Memory, always behind
              Approval.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
            {OUTPUTS.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.title} delay={i * 80}>
                  <div className="card-iw h-full p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <h4 className="mt-4 text-[18px] font-semibold text-foreground">{o.title}</h4>
                    <p className="mt-2 text-[14px] leading-relaxed text-foreground/85">
                      {o.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4. Twin execution — #twin-execution */}
      <Section alt id="twin-execution">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">The Loop</Badge>
            <h2 className="heading-h2 mt-4">After approval, the work actually happens.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Twin doesn't stop at the proposal. Every approved action is executed back in your
              tools — and the result becomes new Memory.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 lg:grid-cols-4">
            {LOOP_STEPS.map((s, i) => {
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

          {/* Inline loop bar */}
          <Reveal delay={300} className="mx-auto mt-10 max-w-5xl">
            <div className="card-iw flex flex-wrap items-center justify-center gap-2 p-4 text-[12.5px] font-medium text-foreground/85">
              {["Propose", "Approve", "Execute", "Re-ingest", "Learn"].map((label, i, arr) => (
                <span key={label} className="flex items-center gap-2">
                  <span
                    className={
                      label === "Approve"
                        ? "rounded-md bg-brand-accent/15 px-2.5 py-1 text-brand-accent"
                        : "rounded-md border border-border bg-elevated/50 px-2.5 py-1"
                    }
                  >
                    {label}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight size={12} className="text-text-secondary" />
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[15px] leading-relaxed text-foreground/90">
              Approved actions execute in your apps. Results return as new Truth.{" "}
              <span className="text-brand-accent">Your Twin learns from every decision.</span>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Security — #security */}
      <Section id="security">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Security</Badge>
            <h2 className="heading-h2 mt-4">Approval in between. Always.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Every Twin output sits behind Approval. No email is sent, no record updated, no
              workflow moves forward without someone responsible saying "yes".
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {SECURITY_BULLETS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="card-iw h-full p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <p className="mt-4 text-[14px] leading-relaxed text-foreground/90">
                      {b.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Approval flow visual */}
          <Reveal delay={250} className="mx-auto mt-10 max-w-5xl">
            <div className="card-iw p-5">
              <div className="grid items-center gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <FlowNode icon={Sparkles} label="Twin proposes" />
                <FlowArrow />
                <FlowNode icon={ShieldCheck} label="Approval Gate" emphasised />
                <FlowArrow />
                <FlowNode icon={Send} label="Connected apps execute" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={350} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[14px] leading-relaxed text-text-secondary">
              See how Digital Memory is built →{" "}
              <a
                href="/platform#digital-memory"
                className="text-brand-accent underline-offset-4 hover:underline"
              >
                /platform#digital-memory
              </a>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 6. CTA */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">Watch your Twin work on your own Memory.</h2>
            <p className="mx-auto mt-4 text-[16px] leading-relaxed text-text-secondary">
              We'll plug Twin into a focused slice of your Digital Memory and walk through real
              briefings, nudges and proposals — all behind Approval.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open("Intelligence CTA")} className="btn-primary-iw">
                See Twin in action <ArrowRight size={16} />
              </button>
              <button
                onClick={() => open("Intelligence CTA secondary")}
                className="btn-secondary-iw"
              >
                Talk about intelligence
              </button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

/* ---------------- helpers ---------------- */

function FlowNode({
  icon: Icon,
  label,
  emphasised = false,
}: {
  icon: typeof Sparkles;
  label: string;
  emphasised?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border p-4 ${
        emphasised
          ? "border-brand-accent/40 bg-brand-accent/5"
          : "border-border bg-elevated/40"
      }`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          emphasised ? "bg-brand-accent/15 text-brand-accent" : "bg-bg-surface/60 text-text-secondary"
        }`}
      >
        <Icon size={16} />
      </div>
      <p className="text-[13.5px] font-medium text-foreground">{label}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center">
      <ArrowRight className="text-brand-accent" size={18} />
    </div>
  );
}
