import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — One foundation, limitless industries." },
      {
        name: "description",
        content:
          "One platform, one product, one Twin — shaped differently for each team. Account Success, Business Ops, Sales Ops, Finance Ops, Personal Ops.",
      },
      { property: "og:title", content: "IntegrateWise Solutions" },
      {
        property: "og:description",
        content: "One platform, one product, one Twin — shaped for your team.",
      },
    ],
  }),
  component: SolutionsHub,
});

const ROLE_CARDS = [
  {
    to: "/solutions/account-success" as const,
    name: "Account Success",
    body: "One view of customer health. Save accounts before renewal day.",
    cta: "Book a Demo",
  },
  {
    to: "/solutions/business-ops" as const,
    name: "Business Ops",
    body: "Shared view of key updates. No more chasing five people.",
    cta: "Book a Demo",
  },
  {
    to: "/solutions/sales-ops" as const,
    name: "Sales Ops",
    body: "Sales progress with the full story behind every move.",
    cta: "Book a Demo",
  },
  {
    to: "/solutions/finance-ops" as const,
    name: "Finance Ops",
    body: "Decisions backed by evidence. Strict approvals, full history.",
    cta: "Book a Demo",
  },
  {
    to: "/solutions/personal-ops" as const,
    name: "Personal Ops",
    body: "Private space for individuals. Your day, finally yours.",
    cta: "Join the Waitlist",
    waitlist: true,
  },
];

function SolutionsHub() {
  const { open, openWaitlist, openEarlyAccess } = useDemoModal();

  return (
    <>
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Solutions</Badge>
            <h1 className="heading-h1 mt-5">
              One foundation, <span className="text-gradient-hero">limitless industries.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              The platform stays the same. The product stays the same. The Twin stays the same. The solution layer is where the work becomes specific.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ROLE_CARDS.map((card, i) => (
              <Reveal key={card.name} delay={i * 50} className="card-iw flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <h2 className="heading-h3">{card.name}</h2>
                  {card.waitlist && <Badge>Waitlist</Badge>}
                </div>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-text-secondary">{card.body}</p>
                <div className="mt-5 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      card.waitlist ? openWaitlist(card.name) : open(card.name)
                    }
                    className="btn-primary-iw !px-4 !py-2.5 text-[14px]"
                  >
                    {card.cta}
                  </button>
                  <Link
                    to={card.to}
                    className="text-[14px] font-medium text-brand-accent hover:underline underline-offset-4"
                  >
                    Learn more →
                  </Link>
                </div>
              </Reveal>
            ))}

            <Reveal delay={ROLE_CARDS.length * 50} className="card-iw flex h-full flex-col p-6">
              <h2 className="heading-h3">By Industry</h2>
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-text-secondary">
                Templates for SaaS, eCommerce, Healthcare, FinTech, Manufacturing, and Professional Services.
              </p>
              <Link
                to="/solutions/by-industry"
                className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-accent hover:underline underline-offset-4"
              >
                Explore industries <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <Reveal className="card-iw mx-auto max-w-3xl p-8 text-center sm:p-10">
            <h2 className="heading-h2">Your work stays yours. What you share, you share on purpose.</h2>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={() => open("Solutions hub footer")} className="btn-primary-iw">
                Book a Demo <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => openEarlyAccess("Solutions hub footer")}
                className="btn-secondary-iw"
              >
                Join Early Access
              </button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
