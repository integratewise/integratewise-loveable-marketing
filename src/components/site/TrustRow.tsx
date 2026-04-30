import { TRUST_STATS } from "@/content/home-content";

export function TrustRow() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {TRUST_STATS.map((s) => (
        <div
          key={s.label}
          className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] px-4 py-3"
        >
          <span className="grid size-9 place-items-center rounded-lg border border-success/30 bg-success/10 text-success">
            <s.icon size={16} />
          </span>
          <div className="min-w-0">
            <div className="text-[13.5px] font-semibold text-foreground">{s.label}</div>
            <div className="truncate text-[12px] text-text-secondary">{s.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
