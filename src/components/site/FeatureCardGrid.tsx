import { Reveal } from "./Reveal";
import { FEATURE_CARDS } from "@/content/home-content";

export function FeatureCardGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {FEATURE_CARDS.map((f, i) => (
        <Reveal key={f.title} delay={i * 60} className="card-iw flex h-full flex-col p-5">
          <div className="inline-flex size-9 items-center justify-center rounded-lg border border-brand-highlight/25 bg-brand-highlight/10">
            <f.icon size={18} className="text-brand-highlight" />
          </div>
          <h3 className="mt-4 text-[16px] font-semibold text-foreground">{f.title}</h3>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-text-secondary">{f.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
