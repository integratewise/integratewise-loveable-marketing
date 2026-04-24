import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, ShieldCheck, Repeat, Sparkles } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/why")({
  head: () => ({
    meta: [
      { title: "Why IntegrateWise — Built around your reality, not its limits." },
      {
        name: "description",
        content:
          "Most software makes you live inside its limits. IntegrateWise starts with your reality: Memory that never resets, AI that stays within bounds, humans in control.",
      },
      { property: "og:title", content: "Why IntegrateWise" },
      {
        property: "og:description",
        content:
          "Memory that never resets. AI that stays within bounds. Humans in control.",
      },
    ],
  }),
  component: WhyPage,
});

function WhyPage() {
  const { open } = useDemoModal();
  return (
    <>
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Why</Badge>
            <h1 className="heading-h1 mt-5">
              Most software makes you live inside its limits.{" "}
              <span className="text-gradient-hero">IntegrateWise starts with your reality.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-text-secondary">
              Your work resets every day. Without Memory, you rebuild context from scratch. Most AI tools see a slice — they cannot connect what changed across your full stack. We built the opposite.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              {
                icon: Brain,
                t: "Memory that never resets",
                b: "Spine collects work, normalises it, links it. Memory grows — never restarts. Tomorrow starts smarter than today.",
              },
              {
                icon: Sparkles,
                t: "AI that stays within bounds",
                b: "The Twin connects what changed, explains why, prepares what to do next. It never rewrites Memory and never crosses spaces without permission.",
              },
              {
                icon: ShieldCheck,
                t: "Humans in control",
                b: "Approval Gate. Nothing executes until you say yes. Every action has an audit trail you own.",
              },
              {
                icon: Repeat,
                t: "A loop that compounds",
                b: "Spine → Memory → Attention → Twin → Approval → Action → Memory enriches. Every loop, the system gets sharper.",
              },
            ].map((row, i) => (
              <Reveal key={row.t} delay={i * 60} className="card-iw p-6">
                <row.icon size={20} className="text-brand-accent" />
                <h2 className="mt-4 heading-h3">{row.t}</h2>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{row.b}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <button type="button" onClick={() => open("Why page")} className="btn-primary-iw">
              Book a Demo <ArrowRight size={16} />
            </button>
            <p className="mt-4 text-[13px] text-text-secondary">
              Or read{" "}
              <Link to="/customer-zero" className="text-brand-accent hover:underline">
                how the founder uses it
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
