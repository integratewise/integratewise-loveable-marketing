import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { Workbench } from "@/components/site/Workbench";
import { AttentionLayer } from "@/components/site/AttentionLayer";
import { ConnectorMarquee } from "@/components/site/ConnectorMarquee";
import { ConnectorOrbit } from "@/components/site/ConnectorOrbit";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
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
import { homeScenario } from "@/content/workbench-scenarios";
import { homeAttention } from "@/content/attention-scenarios";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { TRUST_STRIP } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IntegrateWise — Your work resets every day. We stop that." },
      {
        name: "description",
        content:
          "Stop rebuilding context every morning. Your work becomes Memory that never resets. Within seconds, you see what changed. Twin prepares the next move; you approve.",
      },
      { property: "og:title", content: "IntegrateWise — Your work resets every day. We stop that." },
      {
        property: "og:description",
        content: "Memory that never resets. Twin that connects, explains, prepares. You approve every move.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { open, openEarlyAccess } = useDemoModal();

  return (
    <>
      <AnnouncementBar />

      {/* 1. HERO SPLIT — Attention + Workbench locked above the fold on desktop */}
      <section
        className="relative overflow-hidden pt-28 lg:min-h-[calc(100svh-44px)] lg:pt-32"
        aria-label="Hero"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <ConnectorOrbit size={820} className="opacity-30" />
        </div>
        <Container>
          <div className="grid items-center gap-10 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:pb-20">
            {/* LEFT — copy (canonical, locked) */}
            <div className="fade-up">
              <Badge variant="muted">Customer Zero is the founder</Badge>
              <h1 className="heading-display mt-5">
                <span className="text-gradient-hero">Your work resets</span>
                <br />
                every day.
              </h1>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-text-secondary sm:text-[18px]">
                You open Gmail. You check Slack. You scroll yesterday's notes. Before you do real
                work, you spend an hour rebuilding the same story.
              </p>
              <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-foreground/90 sm:text-[18px]">
                IntegrateWise stops the reset. Your work becomes Memory.{" "}
                <span className="text-brand-accent">
                  Within seconds of opening, you see what changed.
                </span>
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
              <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-text-secondary">
                {TRUST_STRIP.map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-success" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — Attention strip ABOVE Workbench (locked) */}
            <div className="fade-up flex flex-col gap-3" style={{ animationDelay: "120ms" }}>
              <AttentionLayer scenario={homeAttention} />
              <Workbench scenario={homeScenario} compact />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CONNECTOR MARQUEE */}
      <Section className="!py-8">
        <Container>
          <p className="text-center text-[12.5px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Connect the apps you already use
          </p>
          <ConnectorMarquee />
        </Container>
      </Section>

      {/* 3. PAIN TRIO */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">We understand your day</Badge>
            <h2 className="heading-h2 mt-4">The work doesn't reset because you're slow.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              It resets because your tools don't remember.
            </p>
          </Reveal>
          <div className="mt-12">
            <PainTrio />
          </div>
        </Container>
      </Section>

      {/* 4. FEATURES */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">The five pieces</Badge>
            <h2 className="heading-h2 mt-4">Memory · Attention · Workbench · Twin · Approval.</h2>
          </Reveal>
          <div className="mt-12">
            <FeatureCardGrid />
          </div>
        </Container>
      </Section>

      {/* 5. SPEED STRIP */}
      <Section alt className="!py-12">
        <Container>
          <SpeedStrip />
        </Container>
      </Section>

      {/* 6. HOW IT WORKS — 4 steps */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">How it works</Badge>
            <h2 className="heading-h2 mt-4">Open. See. Propose. Approve.</h2>
          </Reveal>
          <div className="mt-12">
            <HowItWorks4 />
          </div>
        </Container>
      </Section>

      {/* 7. UNFAIR ADVANTAGE */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Unfair advantage</Badge>
            <h2 className="heading-h2 mt-4">Truth you own. AI you rent. Approval in between.</h2>
          </Reveal>
          <div className="mx-auto mt-12 max-w-5xl">
            <UnfairAdvantage />
          </div>
        </Container>
      </Section>

      {/* 8. SOLUTIONS DOORS — mirrors the Solutions ▾ menu */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Three doors in</Badge>
            <h2 className="heading-h2 mt-4">Same Memory. Same Twin. Shaped for each team.</h2>
          </Reveal>
          <div className="mt-12">
            <SolutionsDoors />
          </div>
        </Container>
      </Section>

      {/* 9. INTEGRATIONS GRID */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Integrations</Badge>
            <h2 className="heading-h2 mt-4">Bring your stack. We assemble the Memory.</h2>
          </Reveal>
          <div className="mt-12">
            <IntegrationsGrid />
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/platform/integrations"
              className="text-[14px] font-semibold text-brand-accent hover:underline underline-offset-4"
            >
              Browse all connectors →
            </Link>
          </div>
        </Container>
      </Section>

      {/* 10. TESTIMONIALS */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Operator voices</Badge>
            <h2 className="heading-h2 mt-4">Built with the people who run the work.</h2>
          </Reveal>
          <div className="mt-12">
            <Testimonials />
          </div>
        </Container>
      </Section>

      {/* 11. PRICING TEASER */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Pricing</Badge>
            <h2 className="heading-h2 mt-4">Simple seats. Real entitlements.</h2>
          </Reveal>
          <div className="mt-12">
            <PricingTeaser />
          </div>
        </Container>
      </Section>

      {/* 12. FOUNDER */}
      <Section>
        <Container>
          <FounderBlock />
        </Container>
      </Section>

      {/* 13. FAQ */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Operator questions</Badge>
            <h2 className="heading-h2 mt-4">What founders ask before they sign.</h2>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl">
            <FaqAccordion />
          </div>
        </Container>
      </Section>

      {/* 14. CLOSING CTA */}
      <ClosingCtaBand />
    </>
  );
}
