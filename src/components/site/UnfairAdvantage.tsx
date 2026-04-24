import { Check, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { COMPARE_ROWS } from "@/content/home-content";

export function UnfairAdvantage() {
  return (
    <Reveal className="card-iw overflow-hidden">
      <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-border bg-elevated/40 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-text-secondary sm:px-6">
        <div>Dimension</div>
        <div className="flex items-center gap-1.5"><X size={13} className="text-state-error" /> Other AI</div>
        <div className="flex items-center gap-1.5"><Check size={13} className="text-success" /> IntegrateWise</div>
      </div>
      <ul>
        {COMPARE_ROWS.map((r, i) => (
          <li
            key={r.dimension}
            className={`grid grid-cols-[1.1fr_1fr_1fr] items-start gap-2 px-4 py-4 sm:px-6 ${
              i % 2 === 1 ? "bg-white/[0.015]" : ""
            }`}
          >
            <p className="text-[14px] font-semibold text-foreground">{r.dimension}</p>
            <p className="text-[13.5px] text-text-secondary">{r.others}</p>
            <p className="text-[13.5px] text-foreground/90">{r.iw}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
