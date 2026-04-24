import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { AttentionLayer } from "@/components/site/AttentionLayer";
import { Workbench } from "@/components/site/Workbench";
import { productAttention } from "@/content/attention-scenarios";
import { homeScenario } from "@/content/workbench-scenarios";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — You don't rebuild context anymore." },
      {
        name: "description",
        content:
          "Within seconds of opening your Workbench, you see what changed. Memory is already there. Twin is already watching. Your Approval is in place.",
      },
      { property: "og:title", content: "IntegrateWise Product" },
      { property: "og:description", content: "Workbench, Twin, Approval — one product loop." },
    ],
  }),
  component: ProductPage,
});

const TWIN_VS = [
  ["Memory", "Permanent — work never resets", "Forgets after the session"],
  ["Reasoning", "Connects what changed and explains why", "Answers isolated questions"],
  ["Context", "Full picture across all connected apps", "Single-app silos"],
  ["Action", "Approval Gate — you control everything", "Autonomous or opaque"],
  ["Model", "Model-agnostic (Claude Opus 4.7 today; swappable)", "Locked to one model"],
];

function ProductPage() {
  const { open } = useDemoModal();
  return (
    <>
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Product</Badge>
            <h1 className="heading-h1 mt-5">
              You don't <span className="text-gradient-hero">rebuild context</span> anymore.
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              Within seconds of opening your Workbench, you see what changed. Memory is already there. Twin is already watching. Your Approval step is already in place.
            </p>
          </div>

          <Reveal className="mx-auto mt-10 max-w-3xl">
            <AttentionLayer scenario={productAttention} />
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-6 max-w-5xl">
            <Workbench scenario={homeScenario} />
          </Reveal>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Twin vs others</Badge>
            <h2 className="heading-h2 mt-4">Why a Twin, not just another chatbot.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The difference is not a better answer. It is permanent Memory and approved action.
            </p>
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
            <button type="button" onClick={() => open("Product page")} className="btn-primary-iw">
              Book a Demo <ArrowRight size={16} />
            </button>
            <p className="mt-3 text-[13px] text-text-secondary">
              Want the deep dive?{" "}
              <Link to="/product/the-twin" className="text-brand-accent hover:underline">
                Read about the Twin
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
