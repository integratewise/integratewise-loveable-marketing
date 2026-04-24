import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const TIERS = [
  {
    name: "Starter",
    price: "$99",
    cadence: "/seat / mo",
    blurb: "For teams trying their first Workbench.",
    features: ["Sync every 4h", "5 connectors", "Read-only Reference Layer", "90 days history"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$499",
    cadence: "/seat / mo",
    blurb: "For ops teams who run on Memory daily.",
    features: ["Sync every 1h", "20 connectors", "Limited write Reference Layer", "365 days history"],
    highlight: true,
  },
  {
    name: "Command",
    price: "Custom",
    cadence: "",
    blurb: "For orgs with strict approval workflows.",
    features: ["Sync every 15min", "Unlimited connectors", "Full Reference Layer", "Unlimited history"],
    highlight: false,
  },
];

export function PricingTeaser() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {TIERS.map((t, i) => (
        <Reveal
          key={t.name}
          delay={i * 60}
          className={`card-iw relative flex h-full flex-col p-6 ${
            t.highlight ? "border-brand-highlight/40" : ""
          }`}
        >
          {t.highlight && (
            <span className="absolute -top-2.5 right-4 rounded-full border border-brand-highlight/40 bg-bg-base px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-brand-highlight">
              Most chosen
            </span>
          )}
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
            {t.name}
          </p>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-[36px] font-bold leading-none text-foreground">{t.price}</span>
            {t.cadence && <span className="text-[13px] text-text-secondary">{t.cadence}</span>}
          </div>
          <p className="mt-2 text-[13.5px] text-text-secondary">{t.blurb}</p>
          <ul className="mt-5 flex-1 space-y-2.5 border-t border-border pt-5">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[13.5px] text-foreground/90">
                <Check size={14} className="mt-0.5 shrink-0 text-success" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            to="/pricing"
            className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-[13.5px] font-semibold ${
              t.highlight
                ? "bg-gradient-to-r from-brand-accent to-white text-text-inverse"
                : "border border-border text-foreground hover:bg-white/5"
            }`}
          >
            See full pricing
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
