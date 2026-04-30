import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { Section } from "./Section";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";
import { AttentionLayer, type AttentionScenario } from "./AttentionLayer";
import { Workbench, type WorkbenchScenario } from "./Workbench";
import { useDemoModal } from "./demo-modal-context";

export interface SolutionPageProps {
  preHeadline: string;
  hero: ReactNode;
  sub: ReactNode;
  pain?: string;
  promise?: string;
  attention: AttentionScenario;
  workbench: WorkbenchScenario;
  primaryCta: { label: string; kind: "demo" | "waitlist" };
  showWaitlistBadge?: boolean;
  trust?: string;
}

export function SolutionPage({
  preHeadline,
  hero,
  sub,
  pain,
  promise,
  attention,
  workbench,
  primaryCta,
  showWaitlistBadge = false,
  trust,
}: SolutionPageProps) {
  const { open, openWaitlist } = useDemoModal();
  const fire = () =>
    primaryCta.kind === "waitlist" ? openWaitlist(preHeadline) : open(preHeadline);

  return (
    <>
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-2">
              <Badge variant="muted">{preHeadline}</Badge>
              {showWaitlistBadge && <Badge>Waitlist</Badge>}
            </div>
            <h1 className="heading-h1 mt-5">{hero}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
              {sub}
            </p>
          </div>

          <Reveal className="mx-auto mt-10 max-w-3xl">
            <AttentionLayer scenario={attention} />
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-6 max-w-5xl">
            <Workbench scenario={workbench} />
          </Reveal>
        </Container>
      </Section>

      {(pain || promise) && (
        <Section alt>
          <Container>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {pain && (
                <Reveal className="card-iw p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                    Today
                  </p>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-foreground/90">{pain}</p>
                </Reveal>
              )}
              {promise && (
                <Reveal delay={80} className="card-iw p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                    With IntegrateWise
                  </p>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-foreground/90">{promise}</p>
                </Reveal>
              )}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <Reveal className="card-iw mx-auto max-w-3xl p-8 text-center sm:p-10">
            {trust && <p className="text-[13.5px] text-text-secondary">{trust}</p>}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={fire} className="btn-primary-iw">
                {primaryCta.label} <ArrowRight size={16} />
              </button>
              <Link to="/" className="btn-secondary-iw">
                Back to home
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
