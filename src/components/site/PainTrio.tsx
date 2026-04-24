import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { PAIN_TRIO } from "@/content/home-content";

export function PainTrio() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {PAIN_TRIO.map((p, i) => (
        <Reveal key={p.who} delay={i * 80} className="card-iw flex h-full flex-col p-6">
          <Quote size={18} className="text-brand-highlight" />
          <p className="mt-4 flex-1 text-[15.5px] leading-relaxed text-foreground/90">"{p.quote}"</p>
          <div className="mt-5 border-t border-border pt-3">
            <p className="text-[14px] font-semibold text-foreground">{p.who}</p>
            <p className="text-[12.5px] text-text-secondary">{p.role}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
