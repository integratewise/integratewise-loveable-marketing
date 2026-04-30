import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { HOW_STEPS } from "@/content/home-content";

export function HowItWorks4() {
  return (
    <div className="grid gap-3 md:grid-cols-4">
      {HOW_STEPS.map((s, i) => (
        <Reveal key={s.n} delay={i * 80} className="card-iw relative flex h-full flex-col p-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Step {s.n}
          </span>
          <p className="mt-3 text-[18px] font-semibold text-foreground">{s.title}</p>
          <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-text-secondary">
            {s.body}
          </p>
          {i < HOW_STEPS.length - 1 && (
            <ArrowRight
              size={16}
              aria-hidden
              className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-brand-accent/60 md:block"
            />
          )}
        </Reveal>
      ))}
    </div>
  );
}
