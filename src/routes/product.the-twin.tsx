import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, X, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { AttentionLayer } from "@/components/site/AttentionLayer";
import { Workbench } from "@/components/site/Workbench";
import { twinAttention } from "@/content/attention-scenarios";
import { homeScenario } from "@/content/workbench-scenarios";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/product/the-twin")({
  head: () => ({
    meta: [
      { title: "The Twin — Connects what changed. Explains why. Prepares what's next." },
      {
        name: "description",
        content:
          "The AI counterpart that reads Memory, finds what shifted, builds the connection between signals, and waits for your approval.",
      },
      { property: "og:title", content: "The Twin — IntegrateWise" },
      {
        property: "og:description",
        content: "Connects what changed. Explains why it matters. Prepares what to do next.",
      },
    ],
  }),
  component: TwinPage,
});

const DOES = [
  "Connects what changed across your apps",
  "Explains why it matters with a clear evidence chain",
  "Prepares what to do next — full draft, ready to review",
  "Waits at the Approval Gate — never executes alone",
];

const DOES_NOT = [
  "Never rewrites Memory",
  "Never acts without your approval",
  "Never reads across separate spaces without permission",
  "Never sends, files, or commits without a human yes",
];

const TWIN_VS = [
  ["Memory", "Permanent — work never resets", "Forgets after the session"],
  ["Reasoning", "Connects what changed and explains why", "Answers isolated questions"],
  ["Context", "Full picture across all connected apps", "Single-app silos"],
  ["Action", "Approval Gate — you control everything", "Autonomous or opaque"],
  ["Model", "Model-agnostic (Claude Opus 4.7 today; swappable)", "Locked to one model"],
];

function TwinPage() {
  const { open } = useDemoModal();
  return (
    <>
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">The Twin</Badge>
            <h1 className="heading-h1 mt-5">
              <span className="text-gradient-hero">Connects what changed.</span> Explains why it matters. Prepares what to do next.
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              Your Twin reads Memory, finds what shifted, builds the connection between signals, and waits for your approval.
            </p>
          </div>

          <Reveal className="mx-auto mt-10 max-w-3xl">
            <AttentionLayer scenario={twinAttention} />
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-6 max-w-5xl">
            <Workbench scenario={homeScenario} />
          </Reveal>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal className="card-iw p-6">
              <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                <Sparkles size={14} />
                What it does
              </p>
              <ul className="mt-4 space-y-2.5">
                {DOES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14.5px] text-foreground/90">
                    <Check size={16} className="mt-0.5 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="card-iw p-6">
              <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                <ShieldCheck size={14} />
                What it does not do
              </p>
              <ul className="mt-4 space-y-2.5">
                {DOES_NOT.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14.5px] text-text-secondary">
                    <X size={16} className="mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Twin vs others</Badge>
            <h2 className="heading-h2 mt-4">Permanent Memory. Approved action.</h2>
          </Reveal>

          <div className="mx-auto mt-10 max-w-4xl card-iw overflow-hidden">
            <div className="grid grid-cols-3 border-b border-border bg-elevated/40 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
              <span>Dimension</span>
              <span className="text-brand-accent">IntegrateWise Twin</span>
              <span>Other AI tools</span>
            </div>
            {TWIN_VS.map(([dim, ours, theirs], i) => (
              <div
                key={dim}
                className={`grid grid-cols-3 px-5 py-4 text-[14px] leading-relaxed ${
                  i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"
                }`}
              >
                <span className="font-medium text-foreground">{dim}</span>
                <span className="flex items-start gap-2 text-foreground/90">
                  <Check size={14} className="mt-0.5 shrink-0 text-success" />
                  {ours}
                </span>
                <span className="flex items-start gap-2 text-text-secondary">
                  <X size={14} className="mt-0.5 shrink-0 text-text-secondary" />
                  {theirs}
                </span>
              </div>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <button type="button" onClick={() => open("Twin page")} className="btn-primary-iw">
              Book a Demo <ArrowRight size={16} />
            </button>
            <p className="mt-3 text-[13px] text-text-secondary">
              Read more about{" "}
              <Link to="/product/approval" className="text-brand-accent hover:underline">
                the Approval Gate
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
