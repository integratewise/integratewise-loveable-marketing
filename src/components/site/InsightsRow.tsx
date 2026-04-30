import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { INSIGHT_CARDS } from "@/content/home-content";

export function InsightsRow() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {INSIGHT_CARDS.map((c, i) => (
        <Reveal key={c.title} delay={i * 80} className="card-iw flex h-full flex-col p-6">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {c.tag}
          </span>
          <h3 className="mt-3 text-[17px] font-semibold leading-snug text-foreground">{c.title}</h3>
          <p className="mt-2 flex-1 text-[14px] leading-relaxed text-text-secondary">{c.blurb}</p>
          <Link
            to={c.to}
            className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-accent hover:underline underline-offset-4"
          >
            Read <ArrowRight size={14} />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
