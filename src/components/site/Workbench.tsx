import { Check, Sparkles, ShieldCheck, Pencil, X } from "lucide-react";
import { Badge } from "./Badge";

export interface MemoryCard {
  label: string;
  value: string;
  tone?: "default" | "warning" | "success" | "info";
}

export interface WorkbenchScenario {
  entityType: string;
  entityName: string;
  entityMeta: string;
  memoryCards: MemoryCard[];
  suggestion: {
    title: string;
    rationale: string;
    evidence: string[];
    confidence: number; // 0-100
    severity: "low" | "medium" | "high";
    action: string;
  };
}

const severityColor = {
  low: "var(--state-info)",
  medium: "var(--state-warning)",
  high: "var(--state-error)",
} as const;

export function Workbench({
  scenario,
  compact = false,
}: {
  scenario: WorkbenchScenario;
  compact?: boolean;
}) {
  const { entityType, entityName, entityMeta, memoryCards, suggestion } = scenario;

  return (
    <div
      className="card-iw overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
      aria-label="Workbench preview"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="badge-iw badge-iw-muted !py-1 !px-2 !text-[11px] uppercase tracking-wider">
            Workbench
          </span>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-text-secondary">{entityType}</p>
            <p className="text-[15px] font-semibold text-foreground">{entityName}</p>
          </div>
        </div>
        <span className="hidden text-[12px] text-text-secondary sm:block">{entityMeta}</span>
      </div>

      <div className={`grid gap-0 ${compact ? "lg:grid-cols-1" : "lg:grid-cols-5"}`}>
        {/* Memory column */}
        <div className={`p-5 ${compact ? "" : "lg:col-span-2 lg:border-r lg:border-border"}`}>
          <h4 className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
            Memory
          </h4>
          <ul className="mt-3 space-y-2">
            {memoryCards.map((c, i) => (
              <li
                key={i}
                className="flex items-start justify-between gap-3 rounded-xl border border-border bg-elevated/50 px-3.5 py-3"
              >
                <span className="text-[13px] text-text-secondary">{c.label}</span>
                <span
                  className="text-[13px] font-medium text-foreground"
                  style={{
                    color:
                      c.tone === "warning"
                        ? "var(--state-warning)"
                        : c.tone === "success"
                          ? "var(--state-success)"
                          : c.tone === "info"
                            ? "var(--state-info)"
                            : undefined,
                  }}
                >
                  {c.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Twin Suggestion */}
        <div className={`p-5 ${compact ? "border-t border-border" : "lg:col-span-3"}`}>
          <div className="flex items-center justify-between gap-3">
            <h4 className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
              <Sparkles size={14} className="text-brand-highlight" />
              Twin suggestion
            </h4>
            <div className="flex items-center gap-2">
              <span
                className="badge-iw !py-1 !px-2 !text-[11px]"
                style={{
                  background: `color-mix(in oklab, ${severityColor[suggestion.severity]} 14%, transparent)`,
                  color: severityColor[suggestion.severity],
                  borderColor: `color-mix(in oklab, ${severityColor[suggestion.severity]} 32%, transparent)`,
                }}
              >
                {suggestion.severity} severity
              </span>
              <Badge variant="muted">{suggestion.confidence}% confidence</Badge>
            </div>
          </div>

          <h3 className="mt-3 text-[20px] font-semibold leading-snug text-foreground">
            {suggestion.title}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
            {suggestion.rationale}
          </p>

          <div className="mt-4 rounded-xl border border-border bg-elevated/40 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
              What the Twin looked at
            </p>
            <ul className="mt-2 space-y-1.5">
              {suggestion.evidence.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-foreground/85">
                  <Check size={14} className="mt-0.5 shrink-0 text-brand-accent" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-xl border border-brand-accent/20 bg-brand-accent/5 p-4">
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
              <ShieldCheck size={14} />
              If you approve
            </p>
            <p className="mt-1.5 text-[14px] text-foreground/90">{suggestion.action}</p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <button type="button" className="btn-primary-iw !px-4 !py-2.5 text-[14px]">
              <Check size={16} /> Approve & execute
            </button>
            <button type="button" className="btn-secondary-iw !px-4 !py-2.5 text-[14px]">
              <Pencil size={16} /> Edit first
            </button>
            <button type="button" className="btn-secondary-iw !px-4 !py-2.5 text-[14px]">
              <X size={16} /> Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
