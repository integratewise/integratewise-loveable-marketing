import { useState, type ReactNode } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";

export interface MenuLink {
  href: string; // anchor like #role-csm
  label: string;
}

export interface MenuGroup {
  label: "Function" | "Role" | "Industry" | "Context";
  links: MenuLink[];
}

export interface MapperOption {
  value: string;
  label: string;
}

export interface MapperCombo {
  role: string;
  industry: string;
  without: string[];
  with: string[];
}

export interface SectionBlock {
  id: string;
  group: "Function" | "Role" | "Industry" | "Context";
  title: string;
  body: string[];
  visual?: ReactNode;
}

export interface SolutionPageProps {
  preLabel: string; // "Solution · Account Success"
  h1Lead: string; // "One client story."
  h1Accent: string; // "Every tool."
  subcopy: string;
  primaryCta: { label: string; kind: "demo" | "waitlist" };
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;

  menu: MenuGroup[];

  mapperTitle: string;
  roleLabel?: string;
  industryLabel?: string;
  roleOptions: MapperOption[];
  industryOptions: MapperOption[];
  combos: MapperCombo[];

  sections: SectionBlock[];

  closeHeading: string;
  closingPrimary: { label: string; kind: "demo" | "waitlist" };
}

function defaultCombo(combos: MapperCombo[], role: string, industry: string): MapperCombo {
  return (
    combos.find((c) => c.role === role && c.industry === industry) ||
    combos.find((c) => c.role === role) ||
    combos[0]
  );
}

export function SolutionPage(props: SolutionPageProps) {
  const { open, openWaitlist } = useDemoModal();
  const initialRole = props.roleOptions[0]?.value ?? "";
  const initialIndustry = props.industryOptions[0]?.value ?? "";
  const [role, setRole] = useState(initialRole);
  const [industry, setIndustry] = useState(initialIndustry);

  const combo = defaultCombo(props.combos, role, industry);

  const triggerCta = (kind: "demo" | "waitlist", source: string) => {
    if (kind === "waitlist") openWaitlist(source);
    else open(source);
  };

  return (
    <>
      {/* HERO */}
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">{props.preLabel}</Badge>
            <h1 className="heading-h1 mt-5">
              {props.h1Lead}{" "}
              <span className="text-gradient-hero">{props.h1Accent}</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              {props.subcopy}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => triggerCta(props.primaryCta.kind, `${props.preLabel} · hero`)}
                className="btn-primary-iw"
              >
                {props.primaryCta.label} <ArrowRight size={16} />
              </button>
              {props.secondaryCtaLabel && (
                <a
                  href={props.secondaryCtaHref || "#mapper"}
                  className="btn-secondary-iw"
                >
                  {props.secondaryCtaLabel}
                </a>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* 3-FOLD MENU */}
      <div className="border-y border-border bg-elevated/30 sticky top-[64px] z-30 backdrop-blur">
        <Container>
          <div className="flex flex-col gap-3 py-4 lg:flex-row lg:items-start lg:gap-6">
            {props.menu.map((group) => (
              <div key={group.label} className="flex flex-wrap items-center gap-2">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="rounded-full border border-border bg-bg-surface/70 px-3 py-1 text-[12.5px] text-foreground/85 transition hover:border-brand-accent/40 hover:text-brand-accent"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* MAPPER */}
      <Section id="mapper">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Mapper</Badge>
            <h2 className="heading-h2 mt-4">{props.mapperTitle}</h2>
            <p className="mt-4 text-[15px] text-text-secondary">
              Pick your role and {props.industryLabel?.toLowerCase() ?? "industry"} — see your day
              without IntegrateWise, then with it.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-8 max-w-4xl">
            <div className="card-iw flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-center">
              <PillSelect
                label={props.roleLabel ?? "Role"}
                value={role}
                onChange={setRole}
                options={props.roleOptions}
              />
              <PillSelect
                label={props.industryLabel ?? "Industry"}
                value={industry}
                onChange={setIndustry}
                options={props.industryOptions}
              />
            </div>
          </Reveal>

          <div className="mx-auto mt-8 grid max-w-6xl gap-5 lg:grid-cols-2">
            <Reveal>
              <div
                className="card-iw h-full p-6"
                style={{
                  borderColor: "color-mix(in oklab, var(--state-error) 25%, var(--border))",
                }}
              >
                <div className="flex items-center gap-2 text-state-error">
                  <X size={16} />
                  <p className="text-[12px] font-semibold uppercase tracking-wider">
                    Your day without IntegrateWise
                  </p>
                </div>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                  {combo.without.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-state-error" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className="card-iw h-full p-6"
                style={{
                  borderColor: "color-mix(in oklab, var(--brand-accent) 30%, var(--border))",
                  background: "color-mix(in oklab, var(--brand-accent) 4%, transparent)",
                }}
              >
                <div className="flex items-center gap-2 text-brand-accent">
                  <Check size={16} />
                  <p className="text-[12px] font-semibold uppercase tracking-wider">
                    Your day with IntegrateWise
                  </p>
                </div>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                  {combo.with.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <Check size={14} className="mt-1 shrink-0 text-brand-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* SECTIONS */}
      {props.sections.map((s, i) => (
        <Section key={s.id} id={s.id} alt={i % 2 === 0}>
          <Container>
            <Reveal className="mx-auto max-w-3xl">
              <Badge variant="muted">{s.group}</Badge>
              <h2 className="heading-h2 mt-4">{s.title}</h2>
            </Reveal>
            <div className="mx-auto mt-8 grid max-w-6xl items-start gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="card-iw h-full p-6">
                  <ul className="space-y-3 text-[14.5px] leading-relaxed text-foreground/90">
                    {s.body.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-brand-accent" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              {s.visual && <Reveal delay={120}>{s.visual}</Reveal>}
            </div>
          </Container>
        </Section>
      ))}

      {/* CLOSE */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">Same foundation. Different ways of working.</h2>
            <ul className="mx-auto mt-6 max-w-2xl space-y-2 text-[15px] leading-relaxed text-text-secondary">
              <li>Adaptive Spine builds your Digital Memory.</li>
              <li>Adaptive Workbench shows it in the shape of your day.</li>
              <li>Twin reads, connects, and proposes — always behind the Approval Gate.</li>
            </ul>
            <p className="mt-6 text-[16px] font-medium text-foreground">{props.closeHeading}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() =>
                  triggerCta(props.closingPrimary.kind, `${props.preLabel} · close`)
                }
                className="btn-primary-iw"
              >
                {props.closingPrimary.label} <ArrowRight size={16} />
              </button>
              <button
                onClick={() => open(`${props.preLabel} · talk`)}
                className="btn-secondary-iw"
              >
                Talk to us
              </button>
            </div>
            <p className="mt-6 text-[12.5px] text-text-secondary">
              Truth you own. AI you rent. Approval in between.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function PillSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: MapperOption[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              className={`rounded-full border px-3 py-1.5 text-[12.5px] transition ${
                active
                  ? "border-brand-accent bg-brand-accent/10 text-brand-accent"
                  : "border-border bg-elevated/40 text-foreground/80 hover:border-brand-accent/40"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
