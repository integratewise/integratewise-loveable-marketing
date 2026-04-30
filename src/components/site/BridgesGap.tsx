import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { BRIDGE_LEFT, BRIDGE_RIGHT } from "@/content/home-content";

export function BridgesGap() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
      <Reveal className="card-iw flex h-full flex-col p-6 opacity-95">
        <div className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-white/[0.02]">
          <BRIDGE_LEFT.icon size={20} className="text-text-secondary" />
        </div>
        <h3 className="mt-4 text-[17px] font-semibold text-foreground">{BRIDGE_LEFT.title}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{BRIDGE_LEFT.body}</p>
      </Reveal>

      <div
        aria-hidden
        className="hidden items-center justify-center px-2 lg:flex"
      >
        <span className="grid size-10 place-items-center rounded-full border border-brand-accent/40 bg-brand-accent/10 text-brand-accent">
          <ArrowRight size={18} />
        </span>
      </div>

      <Reveal delay={120} className="card-iw flex h-full flex-col p-6 border-brand-highlight/30">
        <div className="inline-flex size-10 items-center justify-center rounded-xl border border-brand-highlight/30 bg-brand-highlight/10">
          <BRIDGE_RIGHT.icon size={20} className="text-brand-highlight" />
        </div>
        <h3 className="mt-4 text-[17px] font-semibold text-foreground">{BRIDGE_RIGHT.title}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{BRIDGE_RIGHT.body}</p>
      </Reveal>
    </div>
  );
}
