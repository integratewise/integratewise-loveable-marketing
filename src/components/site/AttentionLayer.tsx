import { AlertTriangle, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export interface AttentionSignal {
  entity: string;
  change: string;
  severity?: "low" | "medium" | "high";
}

export interface AttentionScenario {
  label?: string;
  signals: AttentionSignal[];
  note?: string;
}

const sevColor: Record<NonNullable<AttentionSignal["severity"]>, string> = {
  low: "var(--state-info)",
  medium: "var(--state-warning)",
  high: "var(--state-error)",
};

export function AttentionLayer({ scenario, className }: { scenario: AttentionScenario; className?: string }) {
  const { label = "Right now", signals, note = "Twin has prepared responses. Review when ready." } = scenario;

  return (
    <div
      className={cn(
        "card-iw relative p-5 sm:p-6",
        className,
      )}
      style={{ background: "linear-gradient(180deg, rgba(251,191,36,0.05), rgba(255,225,204,0.02))" }}
      aria-label="Attention Layer"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="twin-pulse inline-flex size-2.5 rounded-full" style={{ background: "var(--state-warning)" }} />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
            {label}
          </span>
        </div>
        <span className="text-[12px] font-medium text-brand-highlight">
          {signals.length} things need your attention
        </span>
      </div>

      <ul className="mt-4 space-y-2">
        {signals.map((s, i) => {
          const color = sevColor[s.severity ?? "medium"];
          return (
            <Reveal
              as="li"
              key={i}
              delay={i * 80}
              className="flex items-start gap-3 rounded-xl border border-border bg-elevated/50 px-4 py-3"
            >
              <AlertTriangle size={16} style={{ color }} className="mt-0.5 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-medium text-foreground">{s.entity}</p>
                <p className="text-[13px] text-text-secondary">{s.change}</p>
              </div>
            </Reveal>
          );
        })}
      </ul>

      <p className="mt-4 flex items-center gap-2 text-[13px] text-text-secondary">
        <Sparkles size={14} className="text-brand-highlight" />
        {note}
      </p>
    </div>
  );
}
