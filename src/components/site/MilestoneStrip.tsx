import { Reveal } from "./Reveal";
import { MILESTONES } from "@/content/home-content";

export function MilestoneStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {MILESTONES.map((m, i) => (
        <Reveal key={m.when} delay={i * 80} className="card-iw flex h-full flex-col p-6">
          <span className="inline-flex w-fit items-center rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-2.5 py-0.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-highlight">
            {m.when}
          </span>
          <h3 className="mt-4 text-[18px] font-semibold text-foreground">{m.title}</h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{m.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
