import { Reveal } from "./Reveal";
import { OUTCOME_TRIO } from "@/content/home-content";

export function OutcomePromise() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {OUTCOME_TRIO.map((o, i) => (
        <Reveal key={o.title} delay={i * 80} className="card-iw flex h-full flex-col p-6">
          <div className="inline-flex size-10 items-center justify-center rounded-xl border border-brand-highlight/25 bg-brand-highlight/10">
            <o.icon size={20} className="text-brand-highlight" />
          </div>
          <h3 className="mt-4 text-[18px] font-semibold text-foreground">{o.title}</h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{o.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
