const colors = {
  sidebarBg: "#0B1120",
  sidebarActive: "#1E293B",
  sidebarText: "#94A3B8",
  sidebarTextActive: "#F8FAFC",
  headerBg: "#FFFFFF",
  pageBg: "#F8FAFC",
  cardBg: "#FFFFFF",
  border: "#E2E8F0",
  ink: "#0F172A",
  inkMuted: "#64748B",
  healthGreen: "#10B981",
  healthAmber: "#F59E0B",
  healthRed: "#EF4444",
  gold: "#D97706",
  alertBg: "#FEF3C7",
  alertText: "#92400E",
  alertBorder: "#FCD34D",
  accentBlue: "#3B82F6",
};

interface GovernancePreviewProps {
  className?: string;
}

const kpis = [
  { label: "System", value: "IntegrateWise Folder Monitor", sub: "mode: read_only_index" },
  { label: "Filesystem Changes", value: "Blocked", sub: "Read-only · suggest only" },
  { label: "Manifest Rows", value: "3,453", sub: "individual files tracked" },
  { label: "Departments Tracked", value: "10", sub: "00 – 09 human model" },
];

const statusRows = [
  { key: "governance_mode", value: "read_only_index" },
  { key: "auto_commit", value: "false" },
  { key: "drift_detection", value: "active" },
  { key: "last_sync", value: "2025-05-26T03:15:00Z" },
  { key: "policy_version", value: "v2.4.1" },
  { key: "approval_required", value: "true" },
];

export default function GovernancePreview({
  className,
}: GovernancePreviewProps) {
  return (
    <div
      className={["flex flex-col w-full h-full", className || ""].join(" ")}
      style={{ backgroundColor: colors.pageBg }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between border-b px-4 py-2.5"
        style={{ backgroundColor: colors.headerBg, borderColor: colors.border }}
      >
        <div className="flex items-center gap-1 text-[11px]" style={{ color: colors.inkMuted }}>
          <span style={{ color: colors.ink, fontWeight: 600 }}>IntegrateWise</span>
          <span className="opacity-50">/</span>
          <span>Dashboard Data</span>
        </div>
        <span
          className="rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide"
          style={{ backgroundColor: `${colors.healthAmber}15`, color: colors.healthAmber }}
        >
          Read-only · suggest only
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 py-4">
        {/* Header */}
        <div className="mb-1">
          <h1 className="text-sm font-bold" style={{ color: colors.ink }}>
            Dashboard Data &amp; Status
          </h1>
        </div>
        <p className="text-[10px] mb-4 leading-relaxed" style={{ color: colors.inkMuted }}>
          Provenance for every figure on this dashboard. The filesystem changes only after governance approval.
        </p>

        {/* Governance notice card */}
        <div
          className="rounded-lg border p-3 mb-4"
          style={{
            backgroundColor: colors.cardBg,
            borderColor: colors.border,
            borderLeftWidth: 3,
            borderLeftColor: colors.accentBlue,
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={colors.accentBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span className="text-[10px] font-semibold" style={{ color: colors.accentBlue }}>
              Governance Notice
            </span>
          </div>
          <p className="text-[10px] leading-relaxed" style={{ color: colors.inkMuted }}>
            The system proposes. Humans approve. The filesystem changes only after governance.
          </p>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-lg border p-3"
              style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
            >
              <p
                className="text-[9px] font-medium uppercase tracking-wide mb-1"
                style={{ color: colors.inkMuted }}
              >
                {kpi.label}
              </p>
              <p className="text-sm font-bold" style={{ color: colors.ink }}>
                {kpi.value}
              </p>
              <p className="text-[9px] mt-0.5" style={{ color: colors.inkMuted }}>
                {kpi.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Status object table */}
        <div
          className="rounded-lg border overflow-hidden"
          style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
        >
          <div
            className="flex items-center gap-2 px-3 py-2 border-b"
            style={{ backgroundColor: colors.pageBg, borderColor: colors.border }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={colors.inkMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            <span className="text-[10px] font-semibold" style={{ color: colors.ink }}>
              Status Object
            </span>
          </div>
          <div className="divide-y" style={{ borderColor: colors.border }}>
            {statusRows.map((row) => (
              <div
                key={row.key}
                className="flex items-center justify-between px-3 py-2"
              >
                <span className="text-[10px] font-mono" style={{ color: colors.inkMuted }}>
                  {row.key}
                </span>
                <span
                  className="text-[10px] font-mono font-medium"
                  style={{
                    color:
                      row.value === "true"
                        ? colors.healthGreen
                        : row.value === "false"
                        ? colors.healthRed
                        : row.value === "active"
                        ? colors.healthGreen
                        : colors.ink,
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
