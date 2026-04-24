import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IntegrateWise — Built by someone who got tired of being the bridge." },
      {
        name: "description",
        content:
          "A near-miss on a critical $8M account proved that work resets aren't just frustrating — they're dangerous. The Spine that prevented it became the product.",
      },
      { property: "og:title", content: "About IntegrateWise" },
      {
        property: "og:description",
        content:
          "Built by an operator. Customer Zero is the founder.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { open } = useDemoModal();
  return (
    <Section orbs className="!pt-20 lg:!pt-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Badge variant="muted">About</Badge>
            <h1 className="heading-h1 mt-5">
              Built by someone who got <span className="text-gradient-hero">tired of being the bridge.</span>
            </h1>
          </div>

          <Reveal className="mt-10 space-y-5 text-[17px] leading-relaxed text-foreground/85">
            <p>
              Nirmal Prince J spent years manually bridging CRM, billing, support, Slack, and a dozen other tools — being the human API between systems that refused to talk to each other.
            </p>
            <p>
              A near-miss on a critical $8M account — a Zendesk escalation that never reached the HubSpot CSM — proved that work resets are not just frustrating. They are dangerous.
            </p>
            <p>
              The "spine of truth" he built by hand to stop those near-misses became the product. No more generic dashboards. No more AI that guesses from incomplete data. One place where what matters lives, grows, and stays useful over time.
            </p>
            <p className="text-text-secondary">
              IntegrateWise runs on IntegrateWise. The founder is{" "}
              <Link to="/customer-zero" className="text-brand-accent hover:underline">
                Customer Zero
              </Link>
              .
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/customer-zero" className="btn-secondary-iw">
              Read Customer Zero
            </Link>
            <button type="button" onClick={() => open("About page")} className="btn-primary-iw">
              Book a Demo <ArrowRight size={16} />
            </button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
