import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { useDemoModal } from "@/components/site/demo-modal-context";

export interface StubProps {
  title: string;
  description: string;
  badge?: string;
  intro?: ReactNode;
  showWaitlist?: boolean;
}

export function StubPage({
  title,
  description,
  badge = "Coming next",
  intro,
  showWaitlist = false,
}: StubProps) {
  const { open, openWaitlist } = useDemoModal();
  return (
    <Section orbs>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted">{badge}</Badge>
          <h1 className="heading-h1 mt-5">{title}</h1>
          <div className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-text-secondary">
            {intro ?? (
              <p>
                We're shipping this section next. The Foundation + Home page is live so you can
                review the design system and Home narrative first.
              </p>
            )}
          </div>
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

export function stubMeta(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — IntegrateWise` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — IntegrateWise` },
      { property: "og:description", content: description },
    ],
  };
}

// Re-export so callers don't need a separate import
export { createFileRoute };
