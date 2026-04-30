import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/manifesto")({
  head: () => ({
    meta: [
      { title: "Manifesto — IntegrateWise" },
      {
        name: "description",
        content:
          "Why we are building Memory and the Twin: people deserve to be the operator, not the API between their apps.",
      },
      { property: "og:title", content: "Manifesto — IntegrateWise" },
      {
        property: "og:description",
        content: "People deserve to be the operator, not the API between their apps.",
      },
    ],
  }),
  component: ManifestoPage,
});

function ManifestoPage() {
  const { open } = useDemoModal();
  return (
    <>
      <Section orbs>
        <Container>
          <div className="mx-auto max-w-3xl">
            <Badge variant="muted">Manifesto</Badge>
            <h1 className="heading-h1 mt-5">
              People deserve to be the <span className="text-gradient-hero">operator</span>,<br />
              not the API.
            </h1>
            <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/85">
              <p>
                For the last decade we kept adding apps. WhatsApp, Tally, Razorpay, the CRM, Slack,
                email, a sheet. Every one of them solved a real problem. Together they created a new
                one:{" "}
                <span className="text-foreground">a person had to be the API between them.</span>
              </p>
              <p>
                That person rebuilds context every morning. They lose 23% of their day to
                tab-switching. They forget what was promised, who is at risk, which invoice doesn't
                match, what last week's reflection said. The work that actually matters waits.
              </p>
              <p className="text-foreground">
                We don't think the answer is one more app. We don't think the answer is an
                autonomous agent that runs your business while you sleep, either.
              </p>
              <p>
                The answer is <span className="text-foreground">Memory</span> — a single source of
                truth your tools share — and a <span className="text-foreground">Twin</span> that
                watches it for you and <span className="text-foreground">proposes</span> the next
                move.
              </p>
              <p className="text-foreground">
                Not acts. Proposes. You approve every action. Always.
              </p>
              <p>
                Memory grows. The Twin gets sharper. You stay in the chair. The work that matters
                stops waiting.
              </p>
              <p className="text-foreground">
                That is what we are building. Built by an operator. Customer Zero is the founder.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => open("Manifesto")} className="btn-primary-iw">
                Book a Demo
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
