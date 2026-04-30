import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { CONNECTOR_LOGOS } from "@/components/site/ConnectorMarquee";

import { AttentionLayer } from "@/components/site/AttentionLayer";
import { Workbench } from "@/components/site/Workbench";
import { homeAttention } from "@/content/attention-scenarios";
import { homeScenario } from "@/content/workbench-scenarios";

import { PainTrio } from "@/components/site/PainTrio";
import { OutcomePromise } from "@/components/site/OutcomePromise";
import { BridgesGap } from "@/components/site/BridgesGap";
import { DigitalMemoryLayer } from "@/components/site/DigitalMemoryLayer";
import { HowItWorks4 } from "@/components/site/HowItWorks4";
import { IntegrationsGrid } from "@/components/site/IntegrationsGrid";
import { MilestoneStrip } from "@/components/site/MilestoneStrip";
import { PricingTeaser } from "@/components/site/PricingTeaser";
import { FounderBlock } from "@/components/site/FounderBlock";
import { TrustRow } from "@/components/site/TrustRow";
import { InsightsRow } from "@/components/site/InsightsRow";

import airtable from "@/assets/logos/airtable.svg";
import asana from "@/assets/logos/asana.svg";
import gdrive from "@/assets/logos/google-drive.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IntegrateWise — Stop the daily reset. Build memory for your work." },
      {
        name: "description",
        content:
          "Your work resets every day. IntegrateWise stops that. Your apps become Digital Memory, your Twin proposes the next move, and you approve every action.",
      },
      {
        property: "og:title",
        content: "IntegrateWise — Stop the daily reset. Build memory for your work.",
      },
      {
        property: "og:description",
        content:
          "Your apps become Digital Memory. Your Twin proposes. You approve every move.",
      },
    ],
  }),
  component: HomePage,
});

const EXTRA_LOGOS = [
  { src: airtable, name: "Airtable" },
  { src: asana, name: "Asana" },
  { src: gdrive, name: "Google Drive" },
];
const HERO_LOGOS = [...CONNECTOR_LOGOS, ...EXTRA_LOGOS];

function HomePage() {
  const { open, openEarlyAccess } = useDemoModal();

  return (
    <>
      {/* ========================= 1. HERO — locked H1, Attention + Workbench above the fold ========================= */}
      <section
        className="relative overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20"
        aria-label="Hero"
      >
        <span aria-hidden className="orb orb-peach" style={{ width: 620, height: 620, top: -180, left: "55%" }} />
        <span aria-hidden className="orb orb-purple" style={{ width: 520, height: 520, top: 80, left: -140 }} />

        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
            {/* LEFT — headline */}
            <Reveal>
              <span className="badge-iw badge-iw-muted">Stop the daily reset</span>
              <h1 className="heading-display mt-5">
                Your work{" "}
                <span className="text-gradient-hero">resets every day.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-text-secondary">
                Your apps become Digital Memory. Your Twin watches what changed,
                explains why it matters, and prepares what to do next. You approve
                every move.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => open("Home hero")}
                  className="btn-primary-iw"
                >
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

              <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-text-secondary">
                <li>SOC 2 Type II</li>
                <li aria-hidden>·</li>
                <li>GDPR Ready</li>
                <li aria-hidden>·</li>
                <li>Tenant Isolation</li>
                <li aria-hidden>·</li>
                <li>Approval-gated</li>
              </ul>
            </Reveal>

            {/* RIGHT — Attention strip on top, Workbench below, in one stacked unit */}
            <Reveal delay={120} className="flex flex-col gap-4">
              <AttentionLayer scenario={homeAttention} />
              <Workbench scenario={homeScenario} />
            </Reveal>
          </div>

          {/* Connector marquee — beneath the fold */}
          <div className="mt-16">
            <p className="text-center text-[12.5px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
              Works with the apps you already use
            </p>
            <div className="marquee-mask relative mt-6 overflow-hidden py-4">
              <div className="marquee-track flex w-max items-center gap-10">
                {[...HERO_LOGOS, ...HERO_LOGOS].map((logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className="flex items-center gap-2.5 opacity-70"
                  >
                    <img src={logo.src} alt="" aria-hidden className="h-7 w-auto" />
                    <span className="whitespace-nowrap text-[13.5px] font-medium text-text-secondary">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================= 2. PAIN — drowning in data, starving for context ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">The reset</span>
            <h2 className="heading-h2 mt-4">
              We're drowning in data, starving for context.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The apps work. The data is there. But the story has to be rebuilt
              every morning — by you, in your head, across twelve tabs.
            </p>
          </Reveal>
          <div className="mt-12">
            <PainTrio />
          </div>
        </Container>
      </Section>

      {/* ========================= 3. OUTCOME PROMISE ========================= */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">What changes</span>
            <h2 className="heading-h2 mt-4">
              Imagine work that <span className="text-gradient-hero">actually remembers.</span>
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Three things become true on day one — and stay true every day after.
            </p>
          </Reveal>
          <div className="mt-12">
            <OutcomePromise />
          </div>
        </Container>
      </Section>

      {/* ========================= 4. THE SHIFT — bridges the gap ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">The shift</span>
            <h2 className="heading-h2 mt-4">
              From scattered apps to one Digital Memory.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              IntegrateWise bridges the gap between your tools and your day.
            </p>
          </Reveal>
          <div className="mt-12">
            <BridgesGap />
          </div>
        </Container>
      </Section>

      {/* ========================= 5. DIGITAL MEMORY LAYER ========================= */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Digital Memory</span>
            <h2 className="heading-h2 mt-4">
              Three lines of memory, one place.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Truth, Context, and approved Session Summaries — assembled into one
              growing memory of your work.
            </p>
          </Reveal>
          <div className="mt-12">
            <DigitalMemoryLayer />
          </div>
        </Container>
      </Section>

      {/* ========================= 6. WORKBENCH preview — second look ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Workspace</span>
            <h2 className="heading-h2 mt-4">
              One workspace, shaped to your day.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Memory on the left. Twin on the right. Every action visible — and
              every action under your control.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Workbench scenario={homeScenario} />
          </Reveal>
        </Container>
      </Section>

      {/* ========================= 7. THE LOOP — how it works in 4 ========================= */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">The loop</span>
            <h2 className="heading-h2 mt-4">
              Open. See what changed. Approve. Repeat.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The daily flow is the same every morning — and it gets sharper every day.
            </p>
          </Reveal>
          <div className="mt-12">
            <HowItWorks4 />
          </div>
        </Container>
      </Section>

      {/* ========================= 8. CONNECT YOUR STACK — static grid ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Integrations</span>
            <h2 className="heading-h2 mt-4">
              Works with the apps you already use.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Connect once. Memory takes care of the rest. New apps land as new
              sources, not new silos.
            </p>
          </Reveal>
          <div className="mt-12">
            <IntegrationsGrid />
          </div>
        </Container>
      </Section>

      {/* ========================= 9. TIME TO VALUE ========================= */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Time to value</span>
            <h2 className="heading-h2 mt-4">
              Most teams are live in under 30 days.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Founder-led onboarding. Real Memory on real data. No long rollouts.
            </p>
          </Reveal>
          <div className="mt-12">
            <MilestoneStrip />
          </div>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => open("Home · Time to value")}
              className="btn-primary-iw"
            >
              Book a Demo <ArrowRight size={16} />
            </button>
          </div>
        </Container>
      </Section>

      {/* ========================= 10. PRICING TEASER ========================= */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Pricing</span>
            <h2 className="heading-h2 mt-4">
              Invest in your memory.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Three tiers, one architecture. Pick what fits today — Memory keeps
              compounding either way.
            </p>
          </Reveal>
          <div className="mt-12">
            <PricingTeaser />
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-accent hover:underline underline-offset-4"
            >
              See full pricing <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ========================= 11. CUSTOMER ZERO — founder block ========================= */}
      <Section>
        <Container>
          <FounderBlock />
        </Container>
      </Section>

      {/* ========================= 12. TRUST ROW ========================= */}
      <Section alt className="!py-14">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Trust by architecture</span>
            <h2 className="heading-h2 mt-4">
              Built so nothing moves without you.
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 max-w-4xl">
            <TrustRow />
          </div>
        </Container>
      </Section>

      {/* ========================= 13. INSIGHTS ========================= */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Insights</span>
            <h2 className="heading-h2 mt-4">
              The thinking behind the product.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Founder writing on memory, AI, and the end of the daily reset.
            </p>
          </Reveal>
          <div className="mt-12">
            <InsightsRow />
          </div>
        </Container>
      </Section>

      {/* ========================= 14. FINAL CTA ========================= */}
      <ClosingCtaBand />
    </>
  );
}
