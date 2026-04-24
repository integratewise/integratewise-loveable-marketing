import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";
import {
  SOLUTIONS_BY_OUTCOME,
  SOLUTIONS_BY_ROLE,
  SOLUTIONS_BY_INDUSTRY_INDEX,
  SOLUTIONS_INDUSTRIES,
  type SolutionItem,
} from "@/lib/site";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Same Memory. Same Twin. Shaped per team." },
      {
        name: "description",
        content:
          "Account Success, Business Ops, Personal Ops, Sales Ops, Finance Ops — plus six industry templates. One platform, shaped for each team's work.",
      },
      { property: "og:title", content: "IntegrateWise Solutions" },
      {
        property: "og:description",
        content: "Same Memory. Same Twin. Shaped for each team's work.",
      },
    ],
  }),
  component: SolutionsHub,
});

function SolutionsHub() {
  return (
    <>
      <Section orbs className="!pt-24 lg:!pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Solutions</Badge>
            <h1 className="heading-h1 mt-5">
              Same Memory. Same Twin.{" "}
              <span className="text-gradient-hero">Shaped for each team's work.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              Three doors in by outcome. Two more by role. Six templates by industry. The platform
              and the Twin stay the same — only the surface changes.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <DoorColumn
              title="By outcome"
              subtitle="Ship the result a team came for."
              items={SOLUTIONS_BY_OUTCOME}
            />
            <DoorColumn
              title="By role"
              subtitle="Operators with shared rituals."
              items={SOLUTIONS_BY_ROLE}
              footerNote="More roles arriving with design partners."
            />
            <IndustryColumn />
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <Reveal className="card-iw mx-auto max-w-3xl p-8 text-center sm:p-10">
            <h2 className="heading-h2">
              Your work stays yours. What you share, you share on purpose.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-text-secondary">
              Same Memory. Same Twin. Approval at every move.
            </p>
          </Reveal>
        </Container>
      </Section>

      <ClosingCtaBand />
    </>
  );
}

function DoorColumn({
  title,
  subtitle,
  items,
  footerNote,
}: {
  title: string;
  subtitle: string;
  items: SolutionItem[];
  footerNote?: string;
}) {
  const { open, openWaitlist } = useDemoModal();
  return (
    <div>
      <p className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
        {title}
      </p>
      <p className="mt-1.5 text-[14.5px] text-text-secondary">{subtitle}</p>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((s, i) => (
          <Reveal key={s.to} delay={i * 50} className="card-iw flex flex-col p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <s.icon size={18} className="text-brand-accent" />
                <h3 className="text-[16.5px] font-semibold text-foreground">{s.label}</h3>
              </div>
              {s.waitlist && (
                <span className="rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-brand-highlight">
                  Waitlist
                </span>
              )}
            </div>
            <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">{s.blurb}</p>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  s.waitlist ? openWaitlist(`Solutions · ${s.label}`) : open(`Solutions · ${s.label}`)
                }
                className="btn-primary-iw !px-3.5 !py-2 text-[13px]"
              >
                {s.waitlist ? "Join the Waitlist" : "Book a Demo"}
              </button>
              <Link
                to={s.to}
                className="text-[13.5px] font-semibold text-brand-accent hover:underline underline-offset-4"
              >
                Learn more →
              </Link>
            </div>
          </Reveal>
        ))}
      </ul>
      {footerNote && (
        <p className="mt-3 text-[12.5px] italic text-text-secondary">{footerNote}</p>
      )}
    </div>
  );
}

function IndustryColumn() {
  return (
    <div>
      <p className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
        By industry
      </p>
      <p className="mt-1.5 text-[14.5px] text-text-secondary">
        {SOLUTIONS_BY_INDUSTRY_INDEX.blurb}
      </p>
      <ul className="mt-5 grid grid-cols-2 gap-2">
        {SOLUTIONS_INDUSTRIES.map((c, i) => (
          <Reveal key={c.slug} delay={i * 40}>
            <Link
              to={c.to}
              className="card-iw block p-4 text-center text-[13.5px] font-semibold text-foreground hover:border-brand-highlight/40"
            >
              {c.label}
            </Link>
          </Reveal>
        ))}
      </ul>
      <Link
        to={SOLUTIONS_BY_INDUSTRY_INDEX.to}
        className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-accent hover:underline underline-offset-4"
      >
        Browse all 6 industries <ArrowRight size={14} />
      </Link>
    </div>
  );
}
