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
import { SectionNav } from "@/components/site/SectionNav";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { MEMORY_COPY } from "@/lib/site";
import { IS_LIST, IS_NOT_LIST, PROPOSALS } from "@/content/twin-content";

export const Route = createFileRoute("/twin")({
  head: () => ({
    meta: [
      { title: "Twin — Not usual AI. Your Twin reads your Digital Memory." },
      {
        name: "description",
        content:
          "Your Twin is governed intelligence: it reads only your Digital Memory, prepares actions with evidence and confidence, and waits for your approval. Truth you own. AI you rent. Approval in between.",
      },
      { property: "og:title", content: "IntegrateWise Twin — Intelligence Layer" },
      {
        property: "og:description",
        content: "Grounded in your AI library, not the open internet. Twin proposes; you approve.",
      },
    ],
  }),
  component: TwinPage,
});

function TwinPage() {
  const { open } = useDemoModal();

  return (
    <>
      {/* 1. Hero */}
      <Section id="twin" orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <Badge variant="muted">Twin</Badge>
              <h1 className="heading-h1 mt-5">
                Not usual AI.{" "}
                <span className="text-gradient-hero">Your Twin reads your Digital Memory.</span>
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-text-secondary">
                Most AI guesses from the open internet and forgets everything you said. Your Twin
                reads only your governed Digital Memory, links what changed, prepares what to do
                next, and waits for your approval.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button onClick={() => open()} className="btn-primary-iw">
                  See Twin in action <ArrowRight size={16} />
                </button>
                <button onClick={() => open()} className="btn-secondary-iw">
                  Book a demo
                </button>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <TwinPanel />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Sticky in-page nav */}
      <SectionNav
        items={[
          { id: "twin", label: "Twin" },
          { id: "how-it-works", label: "How it works" },
          { id: "digital-memory-reference", label: "Digital Memory Reference" },
          { id: "twin-execution", label: "Twin Execution" },
          { id: "security", label: "Security" },
        ]}
      />

      {/* 2. Core thesis */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Core thesis</Badge>
            <h2 className="heading-h2 mt-4">
              Truth you own. <span className="text-brand-accent">AI you rent.</span> Approval in
              between.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-text-secondary">
              Digital Memory is yours — a growing library of your data and decisions. Twin is rented
              intelligence that sits outside the Spine. It reads from your Memory, prepares actions,
              and never crosses into your systems without your say-so.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
            <div className="card-iw p-6">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                The signal equation
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/90">
                Usage drop <span className="text-text-secondary">(Truth)</span> + budget freeze in
                email <span className="text-text-secondary">(Context)</span> + escalation rule you
                approved <span className="text-text-secondary">(Session Summary)</span> ={" "}
                <span className="text-brand-accent">churn-risk signal with full evidence.</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={180} className="mx-auto mt-6 max-w-3xl">
            <div className="rounded-xl border border-brand-accent/30 bg-brand-accent/5 px-5 py-4 text-center">
              <p className="text-[14px] text-foreground/90">
                Twin never writes into Digital Memory or your tools on its own; every action goes
                through the <span className="text-brand-accent">Approval Gate</span>.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Is / Is not */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Boundaries</Badge>
            <h2 className="heading-h2 mt-4">What your Twin is — and what it isn't.</h2>
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

      {/* 4. AI library */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">AI library</Badge>
            <h2 className="heading-h2 mt-4">
              Grounded in your AI library, not in the open internet.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Twin uses your Digital Memory as its AI library. It answers from your records,
              communications, and approved summaries instead of wandering across the web.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-4xl">
            <div className="card-iw p-6 md:p-8" style={{ background: "var(--bg-surface)" }}>
              {/* Models */}
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

              {/* Twin */}
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

              {/* Memory / library */}
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

      {/* 5. Equation */}
      <Section id="how-it-works">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">How signals form</Badge>
            <h2 className="heading-h2 mt-4">Connects signals you already have.</h2>
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
                <div className="flex items-center justify-center text-[18px] font-semibold text-text-secondary lg:rotate-0">
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

      {/* 6. Digital Memory Reference */}
      <Section id="digital-memory-reference" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Digital Memory Reference</Badge>
            <h2 className="heading-h2 mt-4">
              Memory is Twin's reference library — read-only, evidence-first.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              {MEMORY_COPY.primary}
            </p>
            <p className="mt-3 text-[15px] text-text-secondary">
              Twin reads from accumulated Memory to compare past and present, but{" "}
              <span className="text-foreground/90">never writes directly into Memory</span>. Every
              proposal shows its homework.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl items-start gap-6 lg:grid-cols-[1.2fr_1fr]">
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
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 7. Twin Execution — Approval Gate */}
      <Section id="twin-execution">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Twin Execution</Badge>
            <h2 className="heading-h2 mt-4">Approval in between. Always.</h2>
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

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-[14px] text-foreground/90">
            <p>• No email, update, or workflow runs without your approval.</p>
            <p>• You can review, edit, or reject every proposal.</p>
            <p>• Your decisions teach Twin what "good" looks like.</p>
          </div>

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[16px] font-semibold text-foreground">
              Twin never writes into Digital Memory or your tools on its own.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 8. Security */}
      <Section id="security" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Security</Badge>
            <h2 className="heading-h2 mt-4">Twin operates inside your perimeter.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Twin reads only what your scopes already allow. Every proposal is auditable. Every
              action requires your approval. Turn Twin off and your Workspace still works.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            <div className="card-iw p-5">
              <ShieldCheck size={20} className="text-brand-accent" />
              <p className="mt-3 text-[14px] font-semibold text-foreground">Scoped reads</p>
              <p className="mt-1 text-[13px] text-text-secondary">
                Twin sees only User, Work, or Org Memory you've granted it.
              </p>
            </div>
            <div className="card-iw p-5">
              <Database size={20} className="text-brand-accent" />
              <p className="mt-3 text-[14px] font-semibold text-foreground">Auditable proposals</p>
              <p className="mt-1 text-[13px] text-text-secondary">
                Every Twin suggestion shows the Memory it was built on.
              </p>
            </div>
            <div className="card-iw p-5">
              <Sparkles size={20} className="text-brand-accent" />
              <p className="mt-3 text-[14px] font-semibold text-foreground">Optional layer</p>
              <p className="mt-1 text-[13px] text-text-secondary">
                Workspace and Digital Memory work fully without Twin enabled.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. CTA */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">Watch your Twin work on your own Memory.</h2>
            <p className="mx-auto mt-4 text-[16px] leading-relaxed text-text-secondary">
              In a live session we show how Twin reads your Digital Memory, assembles evidence, and
              proposes actions — all with your Approval Gate in the middle.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open()} className="btn-primary-iw">
                See Twin in action <ArrowRight size={16} />
              </button>
              <button onClick={() => open()} className="btn-secondary-iw">
                Book a demo
              </button>
            </div>
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
        emphasised ? "border-brand-accent/30 bg-brand-accent/5" : "border-border bg-elevated/50"
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
