import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  SOLUTIONS_BY_OUTCOME,
  SOLUTIONS_BY_ROLE,
  SOLUTIONS_BY_INDUSTRY_INDEX,
  SOLUTIONS_INDUSTRIES,
} from "@/lib/site";
import { useDemoModal } from "./demo-modal-context";

export function SolutionsDoors() {
  const { open, openWaitlist } = useDemoModal();
  const all = [...SOLUTIONS_BY_OUTCOME, ...SOLUTIONS_BY_ROLE];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {all.map((s, i) => (
          <Reveal key={s.to} delay={i * 50} className="card-iw flex h-full flex-col p-5">
            <div className="flex items-center justify-between">
              <s.icon size={18} className="text-brand-accent" />
              {s.waitlist && (
                <span className="rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-brand-highlight">
                  Waitlist
                </span>
              )}
            </div>
            <h3 className="mt-3 text-[16px] font-semibold text-foreground">{s.label}</h3>
            <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-text-secondary">{s.blurb}</p>
            <div className="mt-4 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() =>
                  s.waitlist ? openWaitlist(`Home · ${s.label}`) : open(`Home · ${s.label}`)
                }
                className="text-[13px] font-semibold text-brand-highlight hover:underline underline-offset-4"
              >
                {s.waitlist ? "Join Waitlist" : "Book a Demo"}
              </button>
              <Link
                to={s.to}
                className="text-[13px] text-text-secondary hover:text-foreground"
              >
                Learn →
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="card-iw flex flex-wrap items-center justify-between gap-3 p-5">
        <div>
          <p className="text-[15px] font-semibold text-foreground">By industry</p>
          <p className="text-[13px] text-text-secondary">{SOLUTIONS_BY_INDUSTRY_INDEX.blurb}</p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {SOLUTIONS_INDUSTRIES.map((c) => (
            <Link
              key={c.slug}
              to={c.to}
              className="rounded-full border border-border bg-white/[0.02] px-2.5 py-1 text-[12.5px] text-text-secondary hover:border-brand-highlight/40 hover:text-foreground"
            >
              {c.label}
            </Link>
          ))}
          <Link
            to={SOLUTIONS_BY_INDUSTRY_INDEX.to}
            className="ml-1 inline-flex items-center gap-1 text-[13px] font-semibold text-brand-accent hover:underline underline-offset-4"
          >
            Browse all <ArrowRight size={12} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
