import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";

export const INDUSTRIES = [
  { slug: "saas", name: "SaaS", blurb: "One customer-health view, renewal alerts, next steps from usage data.", live: true },
  { slug: "ecommerce", name: "eCommerce", blurb: "Order tracking, inventory alerts, post-purchase follow-up.", live: true },
  { slug: "healthcare", name: "Healthcare", blurb: "Patient schedule coordination, compliance alerts, billing follow-up.", live: false },
  { slug: "fintech", name: "FinTech", blurb: "Transaction monitoring, clear history for reviews.", live: false },
  { slug: "manufacturing", name: "Manufacturing", blurb: "Supply status, maintenance alerts, order-to-payment view.", live: false },
  { slug: "professional-services", name: "Professional Services", blurb: "Project timeline alignment, team planning, client health.", live: true },
] as const;

export const Route = createFileRoute("/solutions/by-industry")({
  head: () => ({
    meta: [
      { title: "Solutions by Industry — Adapt the same platform to your sector." },
      {
        name: "description",
        content:
          "SaaS, eCommerce, Healthcare, FinTech, Manufacturing, Professional Services — pick your market and see how Attention, Workspace, Twin, and Approval shape the day.",
      },
      { property: "og:title", content: "Solutions by Industry" },
      { property: "og:description", content: "One platform, many industries — same Memory, same Twin, same Approval Gate." },
    ],
  }),
  component: ByIndustryIndex,
});

function ByIndustryIndex() {
  return (
    <Section orbs className="!pt-20 lg:!pt-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted">By Industry</Badge>
          <h1 className="heading-h1 mt-5">
            Adapt the same platform to <span className="text-gradient-hero">your sector.</span>
          </h1>
          <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
            Pick your market and see how Attention Layer, Workspace, Twin, and Approval flow looks for your day-to-day work.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 50}>
              <Link
                to="/solutions/by-industry/$industry"
                params={{ industry: ind.slug }}
                className="card-iw block p-6 h-full"
              >
                <div className="flex items-center justify-between">
                  <h2 className="heading-h3">{ind.name}</h2>
                  <Badge variant={ind.live ? "success" : "muted"}>
                    {ind.live ? "Live" : "Coming Soon"}
                  </Badge>
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-text-secondary">{ind.blurb}</p>
                <p className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-accent">
                  Explore <ArrowRight size={14} />
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
