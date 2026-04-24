import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "@/content/home-content";

export function Testimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={t.who} delay={i * 60} className="card-iw flex h-full flex-col p-5">
          <Quote size={16} className="text-brand-highlight" />
          <p className="mt-3 flex-1 text-[14px] leading-relaxed text-foreground/90">"{t.quote}"</p>
          <div className="mt-5 flex items-center gap-3 border-t border-border pt-3">
            <span
              aria-hidden
              className="inline-flex size-9 items-center justify-center rounded-full bg-elevated text-[12px] font-semibold text-foreground"
            >
              {t.initials}
            </span>
            <div>
              <p className="text-[13.5px] font-semibold text-foreground">{t.who}</p>
              <p className="text-[12px] text-text-secondary">{t.role}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
