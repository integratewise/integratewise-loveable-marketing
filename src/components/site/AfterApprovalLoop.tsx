/**
 * AfterApprovalLoop — homepage section for the 5th pillar of the locked
 * architecture: Spine → Workspace → Twin → Approval → **Loop**.
 *
 * Most AI products stop at "here's a suggestion." IntegrateWise completes
 * the cycle: execute in the source app, capture the result back as new
 * Truth in the Spine, and feed the Twin what it just learned. This section
 * names that loop as a first-class part of the product.
 *
 * Layout: 4 horizontal step cards (Approve → Execute → Re-ingest → Learn)
 * with arrow connectors on desktop, plus a 3-up reinforcement strip
 * (Closed loop · Audit trail · Compounding memory).
 */
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Badge } from "@/components/site/Badge";

const LOOP_STEPS = [
  {
    n: "01",
    title: "Approve",
    body: "You click. The Twin's proposal moves from queue to action.",
    meta: "12:04:22",
  },
  {
    n: "02",
    title: "Execute",
    body:
      "IntegrateWise calls HubSpot, updates the lifecycle stage. No tab switch. No copy-paste. No CSV.",
    meta: "Updated · 2.1s",
  },
  {
    n: "03",
    title: "Re-ingest",
    body:
      "The change flows back through the pipeline as new Truth. Your Spine reflects what you just did.",
    meta: "FinanceFlow → At-Risk",
  },
  {
    n: "04",
    title: "Learn",
    body:
      "Your Twin sees the new state on its next pass. Tomorrow's signals know what today's decisions resolved.",
    meta: "Twin updated · ready",
  },
];

const REINFORCEMENTS = [
  {
    title: "Closed loop",
    body: "Every approval ends in your source system, not in a chat thread.",
  },
  {
    title: "Audit trail",
    body: "Every action logged with timestamp, evidence, and approver.",
  },
  {
    title: "Compounding memory",
    body: "Each decision becomes context for the next one.",
  },
];

export function AfterApprovalLoop() {
  return (
    <Section>
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge variant="muted">The Loop</Badge>
          <h2 className="heading-h2 mt-4">After approval, the work actually happens.</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
            Most AI stops at &ldquo;here&rsquo;s a suggestion.&rdquo; IntegrateWise completes the
            cycle — execute in your apps, capture the result, feed your Twin what it just learned.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {LOOP_STEPS.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="card-iw h-full p-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-[12px] font-mono text-brand-accent">{step.n}</span>
                  <span className="text-[11px] font-mono text-text-secondary">{step.meta}</span>
                </div>
                <h3 className="mt-3 text-[17px] font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                  {step.body}
                </p>
              </div>
              {i < LOOP_STEPS.length - 1 ? (
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-text-secondary/50 md:block"
                />
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 border-t border-border pt-10 md:grid-cols-3">
          {REINFORCEMENTS.map((r) => (
            <div key={r.title} className="flex gap-3">
              <Check size={18} aria-hidden className="mt-0.5 shrink-0 text-success" />
              <div>
                <div className="text-[14.5px] font-semibold text-foreground">{r.title}</div>
                <p className="mt-1 text-[13.5px] leading-relaxed text-text-secondary">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
