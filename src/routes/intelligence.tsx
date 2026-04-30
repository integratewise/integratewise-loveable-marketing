import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  X,
  Pencil,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Database,
  MessageSquare,
  Mail,
  TrendingDown,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { InPageNav } from "@/components/site/InPageNav";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/intelligence")({
  head: () => ({
    meta: [
      { title: "Intelligence — Your Twin reads your Digital Memory." },
      {
        name: "description",
        content:
          "The Intelligence Layer reads your Digital Memory, connects signals across your apps, and proposes the next move — every action waits behind the Approval Gate.",
      },
      { property: "og:title", content: "IntegrateWise Intelligence — Adaptive Twin" },
      {
        property: "og:description",
        content:
          "Connects what changed. Explains why it matters. Prepares what to do next. Approval in between.",
      },
    ],
  }),
  component: IntelligencePage,
});

const NAV_ITEMS = [
  { id: "twin", label: "Twin" },
  { id: "how-it-works", label: "How it works" },
  { id: "twin-execution", label: "Twin Execution" },
  { id: "security", label: "Security" },
];

const IS_LIST = [
  "Reads your Digital Memory (Truth, Context, approved Session Summaries).",
  "Spots patterns and early risks.",
  "Prepares next actions: messages, tasks, updates.",
  "Explains its proof and confidence.",
  "Learns from your approvals and edits.",
];

const IS_NOT_LIST = [
  "Not the owner of your data.",
  "Not an autonomous agent that acts alone.",
  "Not a generic chatbot guessing from the web.",
  "Not a permanent memory store — Memory lives in the Spine, not in the model.",
];

const PROPOSALS = [
  {
    title: "Send check-in to TechServe PM",
    confidence: 92,
    evidence: ["Truth: usage -23%", "Context: 2 emails", "Summary: CSM playbook"],
  },
  {
    title: "Escalate CloudBridge renewal",
    confidence: 88,
    evidence: ["Truth: unsigned renewal", "Context: legal email", "Summary: escalation rule"],
  },
  {
    title: "Schedule QBR for FinanceFlow",
    confidence: 76,
    evidence: ["Truth: overdue invoices", "Context: WhatsApp", "Summary: QBR cadence"],
  },
];

const EXECUTION_STEPS = [
  {
    n: "01",
    title: "Propose",
    body: "Twin drafts the action — HubSpot update, Jira ticket, Slack note, Salesforce stage change — with full evidence.",
  },
  {
    n: "02",
    title: "Approve / Edit / Reject",
    body: "You see what will happen, where, and why. You can edit any field, approve, or reject.",
  },
  {
    n: "03",
    title: "Execute in source systems",
    body: "On approval, IntegrateWise calls the source apps directly. No copy-paste, no tab-switching.",
  },
  {
    n: "04",
    title: "Re-ingest as new Truth",
    body: "The change flows back through the Spine and updates Digital Memory automatically.",
  },
  {
    n: "05",
    title: "Learn",
    body: "Your Twin sees the new state on its next pass. Tomorrow's signals know what today's decisions resolved.",
  },
];

function IntelligencePage() {
  const { open } = useDemoModal();

  return (
    <>
      {/* 1. Hero — Twin */}
      <Section id="twin" orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <Badge variant="muted">Intelligence Layer</Badge>
              <h1 className="heading-h1 mt-5">
                Not usual AI.{" "}
                <span className="text-gradient-hero">Your Twin reads your Digital Memory.</span>
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-text-secondary">
                Most AI guesses from the open internet and forgets everything you said. Your Twin
                reads only your governed Digital Memory, links what changed, prepares what to do
                next, and waits for your approval.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">
                Digital Memory accumulates with every update, every decision, and every interaction
                — then gets reused by your Workspace, your Intelligence layer, and your team.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button onClick={() => open()} className="btn-primary-iw">
                  Book a demo <ArrowRight size={16} />
                </button>
                <a href="#how-it-works" className="btn-secondary-iw">
                  See how it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <TwinPanel />
            </Reveal>
          </div>

          <Reveal delay={120} className="mt-12">
            <InPageNav items={NAV_ITEMS} />
          </Reveal>
        </Container>
      </Section>

      {/* 2. Core thesis */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Core thesis</Badge>
            <h2 className="heading-h2 mt-4">
              Truth you own. <span className="text-brand-accent">AI you rent.</span> Approval in between.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-text-secondary">
              Digital Memory is yours — a growing library of your data and decisions. Twin is rented
              intelligence that sits outside the Spine. It reads from your Memory, prepares
              actions, and never crosses into your systems without your say-so.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="card-iw h-full p-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                  What your Twin is
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
                  What your Twin is not
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
        </Container>
      </Section>

      {/* 3. How it works */}
      <Section id="how-it-works">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">How it works</Badge>
            <h2 className="heading-h2 mt-4">How Intelligence works end to end.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Reads from Digital Memory. Scores signals — churn, pipeline, ops. Builds
              recommendations with explanation and evidence. Waits behind the Approval Gate.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-4xl">
            <div className="card-iw p-6 md:p-8" style={{ background: "var(--bg-surface)" }}>
              <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
                <SignalCard
                  icon={TrendingDown}
                  tag="Truth"
                  title="Usage drop"
                  body="-23% this week"
                  color="var(--state-success)"
                />
                <PlusOp />
                <SignalCard
                  icon={Mail}
                  tag="Context"
                  title="Budget freeze in email"
                  body="Q2 hold mentioned"
                  color="var(--state-info)"
                />
                <PlusOp />
                <SignalCard
                  icon={Sparkles}
                  tag="Session Summary"
                  title="Escalation rule"
                  body="Approved last month"
                  color="var(--state-warning)"
                />
                <div className="flex items-center justify-center text-[18px] font-semibold text-text-secondary">
                  =
                </div>
                <SignalCard
                  icon={AlertTriangle}
                  tag="Signal"
                  title="Churn-risk"
                  body="Full evidence chain"
                  color="var(--brand-accent)"
                  emphasised
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[15px] leading-relaxed text-text-secondary">
              Twin doesn't just alert on single numbers. It reads all three lines of Digital Memory
              together and connects them into clear, explainable signals.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 4. AI library */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">AI library</Badge>
            <h2 className="heading-h2 mt-4">Grounded in your AI library, not in the open internet.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Twin uses your Digital Memory as its AI library. It answers from your records,
              communications, and approved summaries instead of wandering across the web.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-4xl">
            <div className="card-iw p-6 md:p-8" style={{ background: "var(--bg-surface)" }}>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["Claude", "GPT", "Gemini"].map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-border bg-elevated/60 px-3 py-1 text-[12px] text-foreground/80"
                  >
                    {m}
                  </span>
                ))}
                <span className="text-[12px] text-text-secondary">→ swappable</span>
              </div>

              <div className="mx-auto mt-4 flex justify-center">
                <ChevronRight className="rotate-90 text-text-secondary" />
              </div>
              <div className="mx-auto mt-2 max-w-md rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4 text-center">
                <p className="flex items-center justify-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                  <Sparkles size={13} /> Twin
                </p>
                <p className="mt-1 text-[13px] text-foreground/90">
                  Reads from your Digital Memory only.
                </p>
              </div>

              <div className="mx-auto mt-2 flex justify-center">
                <ChevronRight className="rotate-90 text-text-secondary" />
              </div>

              <div className="mt-2 rounded-xl border border-border bg-elevated/50 p-4">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                  <BookOpen size={13} /> Digital Memory / AI library
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  {["Truth", "Context", "Session Summaries"].map((s) => (
                    <div
                      key={s}
                      className="rounded-md border border-border bg-bg-surface/60 px-2 py-1.5 text-[11px] text-foreground/85"
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[15px] text-foreground/90">
              Models can be swapped; your Memory stays. Twin always grounds answers in your data,
              not random web pages.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Twin Execution */}
      <Section id="twin-execution">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Twin Execution</Badge>
            <h2 className="heading-h2 mt-4">After approval, the work actually happens.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Most AI stops at "here's a suggestion." Twin closes the loop — execute in your apps,
              capture the result, feed your Twin what it just learned.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-5">
            {EXECUTION_STEPS.map((s) => (
              <Reveal key={s.n} className="card-iw h-full p-5">
                <span className="text-[12px] font-mono text-brand-accent">{s.n}</span>
                <h3 className="mt-2 text-[16px] font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl items-start gap-6 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <div className="card-iw overflow-hidden">
                <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                  <div className="flex items-center gap-2 text-brand-accent">
                    <Sparkles size={16} />
                    <p className="text-[12px] font-semibold uppercase tracking-wider">
                      Twin — Morning brief
                    </p>
                  </div>
                  <Badge variant="muted">3 to review</Badge>
                </div>
                <div className="p-5">
                  <p className="text-[14px] text-foreground/90">
                    3 accounts need attention. TechServe's usage dropped 23% this week. CloudBridge
                    has an unsigned renewal. FinanceFlow has overdue invoices and open tickets.
                  </p>

                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                    Proposed actions
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {PROPOSALS.map((p) => (
                      <li
                        key={p.title}
                        className="rounded-lg border border-border bg-elevated/40 p-3.5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-[14px] font-medium text-foreground">{p.title}</p>
                          <Badge variant="muted">{p.confidence}%</Badge>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {p.evidence.map((e) => (
                            <span
                              key={e}
                              className="rounded-md border border-border bg-bg-surface/60 px-2 py-0.5 text-[11px] text-text-secondary"
                            >
                              {e}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <button className="btn-primary-iw !px-4 !py-2.5 text-[14px]">
                      <Check size={16} /> Approve all
                    </button>
                    <button className="btn-secondary-iw !px-4 !py-2.5 text-[14px]">
                      <Pencil size={16} /> Review each
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="space-y-3 text-[14px] leading-relaxed text-foreground/90">
                <li>• Every suggestion shows which data and messages it used.</li>
                <li>• Confidence scores are visible, not hidden.</li>
                <li>• You can open the underlying evidence in one click.</li>
                <li>• Approved actions execute directly in your source systems.</li>
                <li>• Results re-ingest as new Truth for tomorrow's signals.</li>
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 6. Security */}
      <Section id="security" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Security</Badge>
            <h2 className="heading-h2 mt-4">No autonomous actions. Full audit trail.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Twin can only propose. The Approval Gate stands between Twin and the real world.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-5xl">
            <div className="grid items-center gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <FlowNode icon={Sparkles} label="Twin generates proposal" />
              <FlowArrow />
              <FlowNode icon={ShieldCheck} label="Approval Gate" emphasised />
              <FlowArrow />
              <FlowNode icon={Database} label="Connected apps execute" />
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-3 md:grid-cols-2">
            {[
              "No autonomous actions — Approval Gate enforced on every write.",
              "Full audit trail of every proposal, edit, approval, and rejection.",
              "Confidence scores and impact preview before any execution.",
              "Separation: Intelligence reads Memory but cannot write directly into it.",
            ].map((line) => (
              <div key={line} className="flex items-start gap-3 rounded-xl border border-border bg-white/[0.02] p-4">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-success" />
                <p className="text-[14px] text-foreground/90">{line}</p>
              </div>
            ))}
          </div>

          <Reveal delay={250} className="mx-auto mt-10 text-center">
            <button onClick={() => open()} className="btn-primary-iw">
              Book a demo <ArrowRight size={16} />
            </button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

/* ----------------------------------------------------------------------- */

function TwinPanel() {
  return (
    <div className="card-iw overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-2 text-brand-accent">
          <Sparkles size={16} />
          <p className="text-[12px] font-semibold uppercase tracking-wider">Twin proposal</p>
        </div>
        <Badge variant="muted">91% confidence</Badge>
      </div>
      <div className="p-5">
        <h3 className="text-[18px] font-semibold leading-snug text-foreground">
          Escalate renewal risk for FinanceFlow.
        </h3>
        <p className="mt-2 text-[13px] text-text-secondary">
          Reads Truth + Context + approved Session Summary.
        </p>

        <div className="mt-4 space-y-2">
          {[
            { icon: TrendingDown, label: "Usage -23% this week", tag: "Truth" },
            { icon: Mail, label: "Email: 'budget freeze Q2'", tag: "Context" },
            { icon: MessageSquare, label: "WhatsApp: 'review next week'", tag: "Context" },
            { icon: Sparkles, label: "Approved escalation rule", tag: "Session" },
          ].map((e, i) => {
            const Icon = e.icon;
            return (
              <div
                key={i}
                className="flex items-center justify-between gap-3 rounded-lg border border-border bg-elevated/50 px-3 py-2.5"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon size={14} className="text-text-secondary shrink-0" />
                  <span className="truncate text-[13px] text-foreground/90">{e.label}</span>
                </div>
                <span className="badge-iw badge-iw-muted !text-[10px]">{e.tag}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button className="btn-primary-iw !px-3.5 !py-2 !text-[13px]">
            <Check size={14} /> Approve
          </button>
          <button className="btn-secondary-iw !px-3.5 !py-2 !text-[13px]">
            <Pencil size={14} /> Edit
          </button>
          <button className="btn-secondary-iw !px-3.5 !py-2 !text-[13px]">
            <X size={14} /> Reject
          </button>
        </div>
      </div>
    </div>
  );
}

function SignalCard({
  icon: Icon,
  tag,
  title,
  body,
  color,
  emphasised = false,
}: {
  icon: typeof TrendingDown;
  tag: string;
  title: string;
  body: string;
  color: string;
  emphasised?: boolean;
}) {
  return (
    <div
      className="rounded-xl border p-4"
      style={{
        background: emphasised
          ? `color-mix(in oklab, ${color} 8%, transparent)`
          : "var(--bg-elevated, var(--bg-surface))",
        borderColor: emphasised
          ? `color-mix(in oklab, ${color} 35%, transparent)`
          : "var(--border)",
      }}
    >
      <div className="flex items-center gap-2" style={{ color }}>
        <Icon size={14} />
        <p className="text-[10px] font-semibold uppercase tracking-wider">{tag}</p>
      </div>
      <p className="mt-2 text-[14px] font-semibold text-foreground">{title}</p>
      <p className="mt-0.5 text-[12px] text-text-secondary">{body}</p>
    </div>
  );
}

function PlusOp() {
  return (
    <div className="flex items-center justify-center text-[18px] font-semibold text-text-secondary">
      +
    </div>
  );
}

function FlowNode({
  icon: Icon,
  label,
  emphasised = false,
}: {
  icon: typeof ShieldCheck;
  label: string;
  emphasised?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 text-center ${
        emphasised
          ? "border-brand-accent/30 bg-brand-accent/5"
          : "border-border bg-elevated/50"
      }`}
    >
      <div
        className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${
          emphasised ? "bg-brand-accent/15 text-brand-accent" : "bg-elevated text-foreground"
        }`}
      >
        <Icon size={18} />
      </div>
      <p className="mt-3 text-[14px] font-medium text-foreground">{label}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-text-secondary">
      <ArrowRight />
    </div>
  );
}
