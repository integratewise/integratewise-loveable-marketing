import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { TierVisual, TierLadder } from "@/components/site/PageVisuals";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Starter · Growth · Command" },
      {
        name: "description",
        content:
          "Pricing based on the kind of workbench you need. Starter, Growth, Command — sync intervals, connector counts, and TruthLayer access scale together.",
      },
      { property: "og:title", content: "IntegrateWise Pricing" },
      {
        property: "og:description",
        content: "You're paying for the kind of Memory, coordination, and control your work needs.",
      },
    ],
  }),
  component: PricingPage,
});

const PLANS = [
  {
    name: "Starter",
    tier: "starter" as const,
    audience: "1–5 users · 1 team",
    sync: "4h sync interval",
    connectors: "5 connectors",
    truth: "Read-only TruthLayer",
    history: "90 days history",
    cta: "Contact Sales",
    popular: false,
  },
  {
    name: "Growth",
    tier: "growth" as const,
    audience: "5–20 users · multi-team",
    sync: "1h sync interval",
    connectors: "20 connectors",
    truth: "Limited write TruthLayer",
    history: "365 days history",
    cta: "Book a Demo",
    popular: true,
  },
  {
    name: "Command",
    tier: "command" as const,
    audience: "Whole org · enterprise",
    sync: "15-min sync interval",
    connectors: "Unlimited connectors",
    truth: "Full TruthLayer",
    history: "Unlimited history",
    cta: "Contact Sales",
    popular: false,
  },
];

function PricingPage() {
  const { open, openEarlyAccess } = useDemoModal();

  return (
    <>
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Pricing</Badge>
            <h1 className="heading-h1 mt-5">
              Pricing based on the kind of{" "}
              <span className="text-gradient-hero">workbench you need.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              You are not just paying for features. You are paying for the kind of Memory,
              coordination, and control your work needs.
            </p>
          </div>

          <Reveal className="mx-auto mt-10 max-w-5xl">
            <TierLadder />
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 60}
                className={`card-iw flex h-full flex-col p-6 ${p.popular ? "border-brand-accent/40" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="heading-h3">{p.name}</h2>
                  {p.popular && <Badge>Most Popular</Badge>}
                </div>
                <p className="mt-2 text-[13px] text-text-secondary">{p.audience}</p>

                <TierVisual tier={p.tier} className="mt-5" />

                <ul className="mt-5 space-y-2.5 text-[14px] text-foreground/90">
                  {[p.sync, p.connectors, p.truth, p.history].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <Check size={15} className="mt-0.5 shrink-0 text-success" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => open(`Pricing · ${p.name}`)}
                  className={`mt-6 ${p.popular ? "btn-primary-iw" : "btn-secondary-iw"}`}
                >
                  {p.cta} <ArrowRight size={16} />
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">ROI calculator</Badge>
            <h2 className="heading-h2 mt-4">See what stopping the reset is worth.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Most teams recoup a Growth seat within 30 days. Estimate yours.
            </p>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl">
            <RoiCalculator />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div
            className="card-iw p-8 sm:p-12 text-center"
            style={{
              background: "linear-gradient(180deg, rgba(255,225,204,0.06), rgba(255,225,204,0))",
            }}
          >
            <h2 className="heading-h2">Talk through your stack with the founder.</h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] text-text-secondary">
              30 minutes. Real conversation. Live Workbench scoped to your scenario.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => open("Pricing footer")}
                className="btn-primary-iw"
              >
                Book a Demo <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => openEarlyAccess("Pricing footer")}
                className="btn-secondary-iw"
              >
                Join Early Access
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function RoiCalculator() {
  const [seats, setSeats] = useState(20);
  const [hoursSavedPerWeek, setHours] = useState(6);
  const [hourlyCost, setHourly] = useState(50);

  const { weekly, monthly, annual, paybackDays, multiple } = useMemo(() => {
    const weekly = seats * hoursSavedPerWeek * hourlyCost;
    const monthly = weekly * 4.33;
    const annual = weekly * 52;
    // Assume Growth seat ~$80/seat/mo as a working baseline for illustration
    const annualCost = seats * 80 * 12;
    const paybackDays = annualCost > 0 ? Math.max(1, Math.round((annualCost / annual) * 365)) : 0;
    const multiple = annualCost > 0 ? +(annual / annualCost).toFixed(1) : 0;
    return { weekly, monthly, annual, paybackDays, multiple };
  }, [seats, hoursSavedPerWeek, hourlyCost]);

  return (
    <div className="card-iw p-6 sm:p-8">
      <div className="grid gap-5 md:grid-cols-3">
        <Field
          label="Seats"
          value={seats}
          min={1}
          max={500}
          onChange={setSeats}
          format={(v) => `${v}`}
        />
        <Field
          label="Hours saved / week / person"
          value={hoursSavedPerWeek}
          min={1}
          max={20}
          onChange={setHours}
          format={(v) => `${v} h`}
        />
        <Field
          label="Loaded hourly cost"
          value={hourlyCost}
          min={20}
          max={250}
          step={5}
          onChange={setHourly}
          format={(v) => `$${v}`}
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Weekly savings" value={fmt(weekly)} />
        <Stat label="Monthly savings" value={fmt(monthly)} />
        <Stat label="Annual savings" value={fmt(annual)} accent />
        <Stat label="Payback" value={`${paybackDays} days`} />
      </div>

      <p className="mt-5 text-center text-[13px] text-text-secondary">
        Estimated ROI multiple: <span className="text-brand-accent font-semibold">{multiple}×</span>{" "}
        in year one.
      </p>
    </div>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
          {label}
        </label>
        <span className="text-[14px] font-semibold text-foreground">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-brand-accent"
      />
    </div>
  );
}

function Stat({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-elevated/40 px-4 py-4">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
        {label}
      </p>
      <p
        className={`mt-1 text-[22px] font-bold ${accent ? "text-gradient-hero" : "text-foreground"}`}
      >
        {value}
      </p>
    </div>
  );
}

// Use a fixed locale so SSR (Node) and client (browser) produce identical
// strings. Using the default locale here previously caused hydration failures
// for users whose browser locale formats numbers differently from Node
// (e.g. "en-IN" → "$3,12,000" vs Node "en-US" → "$312,000").
const FMT = new Intl.NumberFormat("en-US");
function fmt(n: number) {
  return `$${FMT.format(Math.round(n))}`;
}
