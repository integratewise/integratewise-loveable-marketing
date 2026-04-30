import { Reveal } from "./Reveal";
import { DIGITAL_MEMORY_FEATURES } from "@/content/home-content";

export function DigitalMemoryLayer() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {DIGITAL_MEMORY_FEATURES.map((f, i) => (
        <Reveal key={f.title} delay={i * 80} className="card-iw flex h-full flex-col p-6">
          <div className="inline-flex size-10 items-center justify-center rounded-xl border border-brand-accent/25 bg-brand-accent/10">
            <f.icon size={20} className="text-brand-accent" />
          </div>
          <h3 className="mt-4 text-[18px] font-semibold text-foreground">{f.title}</h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{f.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
