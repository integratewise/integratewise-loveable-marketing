import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { useDemoModal } from "@/components/site/demo-modal-context";

interface Args {
  title: string;
  description: string;
  badge?: string;
  intro?: string;
  showWaitlist?: boolean;
}

export function StubPage({ title, description, badge = "Coming next", intro, showWaitlist = false }: Args) {
  const { open, openWaitlist } = useDemoModal();
  return (
    <Section orbs>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted">{badge}</Badge>
          <h1 className="heading-h1 mt-5">{title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-text-secondary">
            {intro ?? "We're shipping this section next. The Foundation + Home page is live so you can review the design system and Home narrative first."}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-text-secondary">{description}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button type="button" onClick={() => open(title)} className="btn-primary-iw">
              Book a Demo
            </button>
            {showWaitlist && (
              <button
                type="button"
                onClick={() => openWaitlist(title)}
                className="btn-secondary-iw"
              >
                Join the Waitlist
              </button>
            )}
            <Link to="/" className="btn-secondary-iw">
              Back to home
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function makeStubRoute(path: Parameters<typeof createFileRoute>[0], args: Args) {
  return createFileRoute(path)({
    head: () => ({
      meta: [
        { title: `${args.title} — IntegrateWise` },
        { name: "description", content: args.description },
        { property: "og:title", content: `${args.title} — IntegrateWise` },
        { property: "og:description", content: args.description },
      ],
    }),
    component: () => <StubPage {...args} />,
  });
}
