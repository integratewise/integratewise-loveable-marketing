import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Badge } from "@/components/site/Badge";
import { MEMORY_COPY } from "@/lib/site";
import { AttentionLayer } from "@/components/site/AttentionLayer";
import { Workbench } from "@/components/site/Workbench";
import { ConnectorMarquee } from "@/components/site/ConnectorMarquee";
import { PainTrio } from "@/components/site/PainTrio";
import { FeatureCardGrid } from "@/components/site/FeatureCardGrid";
import { SpeedStrip } from "@/components/site/SpeedStrip";
import { HowItWorks4 } from "@/components/site/HowItWorks4";
import { UnfairAdvantage } from "@/components/site/UnfairAdvantage";
import { SolutionsDoors } from "@/components/site/SolutionsDoors";
import { IntegrationsGrid } from "@/components/site/IntegrationsGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { PricingTeaser } from "@/components/site/PricingTeaser";
import { FounderBlock } from "@/components/site/FounderBlock";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { homeAttention } from "@/content/attention-scenarios";
import { homeScenario } from "@/content/workbench-scenarios";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IntegrateWise — Your work resets every day. We stop that." },
      {
        name: "description",
        content:
          "Every morning you open Gmail, Slack, yesterday's notes — and context is gone. IntegrateWise gives your work a Digital Memory. Within seconds of opening, you see what changed.",
      },
      {
        property: "og:title",
        content: "IntegrateWise — Your work resets every day. We stop that.",
      },
      {
        property: "og:description",
        content:
          "Apps → Spine → Digital Memory → Workspace → Twin → Approval. Your context never resets again.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { open, openEarlyAccess } = useDemoModal();

  return (
    <>
      {/* ══════════════════ 1. HERO ══════════════════ */}
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            {/* Left: copy */}
            <Reveal>
              <Badge variant="muted">Digital Memory · Workspace · Twin</Badge>
              <h1 className="heading-h1 mt-5">
                Your work resets{" "}
                <span className="text-gradient-hero">every day.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-text-secondary">
                Every morning you open Gmail, Slack, yesterday's notes — and context is gone.
                You rebuild the same picture across five tabs. IntegrateWise gives your work a
                Digital Memory. Within seconds of opening, you see what changed.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button type="button" onClick={() => open("Home hero")} className="btn-primary-iw">
                  Book a Demo <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => openEarlyAccess("Home hero")}
                  className="btn-secondary-iw"
                >
                  Join Early Access
                </button>
              </div>
            </Reveal>

            {/* Right: Attention strip on top, Workspace below */}
            <Reveal delay={120} className="flex flex-col gap-4">
              <AttentionLayer scenario={homeAttention} />
              <Workbench scenario={homeScenario} compact />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ══════════════════ 2. CONNECTOR MARQUEE ══════════════════ */}
      <Section className="!py-10" alt>
        <Container>
          <p className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Connects the tools you already use
          </p>
        </Container>
        <ConnectorMarquee />
      </Section>

      {/* ══════════════════ 3. PAIN TRIO ══════════════════ */}
      <Section>
        <Container>
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="muted">The reset</Badge>
            <h2 className="heading-h2 mt-4">
              Three operators. Same morning. Same reset.
            </h2>
          </Reveal>
          <PainTrio />
        </Container>
      </Section>

      {/* ══════════════════ 4. FEATURE CARD GRID ══════════════════ */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="muted">What changes</Badge>
            <h2 className="heading-h2 mt-4">Five things that stop the reset.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              {MEMORY_COPY.short}
            </p>
          </Reveal>
          <FeatureCardGrid />
        </Container>
      </Section>

      {/* ══════════════════ 5. SPEED STRIP ══════════════════ */}
      <Section>
        <Container>
          <Reveal className="mx-auto mb-8 max-w-2xl text-center">
            <Badge variant="muted">How it feels</Badge>
            <h2 className="heading-h2 mt-4">Built for operators, not observers.</h2>
          </Reveal>
          <SpeedStrip />
        </Container>
      </Section>

      {/* ══════════════════ 6. HOW IT WORKS ══════════════════ */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="muted">How it works</Badge>
            <h2 className="heading-h2 mt-4">
              Open. See changes. Twin proposes. You approve.
            </h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Every action approved by you becomes new Digital Memory. The loop closes and compounds.
            </p>
          </Reveal>
          <HowItWorks4 />
        </Container>
      </Section>

      {/* ══════════════════ 7. UNFAIR ADVANTAGE ══════════════════ */}
      <Section>
        <Container>
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="muted">The difference</Badge>
            <h2 className="heading-h2 mt-4">Twin vs. other AI.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Most AI guesses from the open internet and forgets everything you said. Your Twin reads
              governed Digital Memory and never acts without your approval.
            </p>
          </Reveal>
          <UnfairAdvantage />
        </Container>
      </Section>

      {/* ══════════════════ 8. SOLUTIONS DOORS ══════════════════ */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="muted">Solutions</Badge>
            <h2 className="heading-h2 mt-4">Same Memory. Three ways of working.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              The Spine, Digital Memory, and Twin are the same for everyone. Each solution is a door
              into that foundation — shaped for how your team actually works.
            </p>
          </Reveal>
          <SolutionsDoors />
        </Container>
      </Section>

      {/* ══════════════════ 9. INTEGRATIONS GRID ══════════════════ */}
      <Section>
        <Container>
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="muted">Integrations</Badge>
            <h2 className="heading-h2 mt-4">70+ schema-aware connectors.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Connect once. The Spine handles change tracking, deduplication, and entity resolution
              across all your tools — automatically.
            </p>
          </Reveal>
          <IntegrationsGrid />
        </Container>
      </Section>

      {/* ══════════════════ 10. TESTIMONIALS ══════════════════ */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="muted">From operators</Badge>
            <h2 className="heading-h2 mt-4">
              What teams say after the reset stops.
            </h2>
          </Reveal>
          <Testimonials />
        </Container>
      </Section>

      {/* ══════════════════ 11. PRICING TEASER ══════════════════ */}
      <Section>
        <Container>
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="muted">Pricing</Badge>
            <h2 className="heading-h2 mt-4">Pay for the kind of Memory your work needs.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Sync interval, connector count, and Reference Layer access scale together.
            </p>
          </Reveal>
          <PricingTeaser />
        </Container>
      </Section>

      {/* ══════════════════ 12. FOUNDER BLOCK ══════════════════ */}
      <Section alt>
        <Container>
          <FounderBlock />
        </Container>
      </Section>

      {/* ══════════════════ 13. FAQ ══════════════════ */}
      <Section>
        <Container>
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="muted">Questions</Badge>
            <h2 className="heading-h2 mt-4">Straight answers from the founder.</h2>
          </Reveal>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </Container>
      </Section>

      {/* ══════════════════ 14. CLOSING CTA BAND ══════════════════ */}
      <ClosingCtaBand />
    </>
  );
}
