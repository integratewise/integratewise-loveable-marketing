import { Reveal } from "./Reveal";
import { SPEED_ITEMS } from "@/content/home-content";

export function SpeedStrip() {
  return (
    <div className="card-iw grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
      {SPEED_ITEMS.map((s, i) => (
        <Reveal key={s.title} delay={i * 60} className="flex items-start gap-4 p-6">
          <s.icon size={20} className="mt-0.5 text-brand-accent" />
          <div>
            <p className="text-[15px] font-semibold text-foreground">{s.title}</p>
            <p className="mt-1 text-[13.5px] leading-relaxed text-text-secondary">{s.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
