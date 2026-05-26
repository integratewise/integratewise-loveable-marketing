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

interface AccountConsolePreviewProps {
  className?: string;
}

const accounts = [
  {
    name: "TechServe India",
    segment: "Enterprise",
    industry: "Tech",
    arr: "$420K",
    growth: "+12.5%",
    growthPositive: true,
    health: 92,
    healthLabel: "Healthy",
    healthColor: colors.healthGreen,
    dotColor: colors.healthGreen,
    renewal: 126,
  },
  {
    name: "CloudBridge APAC",
    segment: "Enterprise",
    industry: "Cloud",
    arr: "$280K",
    growth: "+8.3%",
    growthPositive: true,
    health: 78,
    healthLabel: "At-Risk",
    healthColor: colors.healthAmber,
    dotColor: colors.healthGreen,
    renewal: 72,
  },
  {
    name: "FinanceFlow",
    segment: "Mid-Market",
    industry: "FinTech",
    arr: "$180K",
    growth: "-2.1%",
    growthPositive: false,
    health: 54,
    healthLabel: "Critical",
    healthColor: colors.healthRed,
    dotColor: colors.healthAmber,
    renewal: 29,
  },
  {
    name: "DataVault AU",
    segment: "Enterprise",
    industry: "Security",
    arr: "$350K",
    growth: "+15.2%",
    growthPositive: true,
    health: 88,
    healthLabel: "Healthy",
    healthColor: colors.healthGreen,
    dotColor: colors.healthGreen,
    renewal: 204,
  },
  {
    name: "RetailNest Pte",
    segment: "SMB",
    industry: "Retail",
    arr: "$95K",
    growth: "+5.7%",
    growthPositive: true,
    health: 71,
    healthLabel: "At-Risk",
    healthColor: colors.healthAmber,
    dotColor: colors.healthAmber,
    renewal: 98,
  },
  {
    name: "HealthTech Innov",
    segment: "Mid-Market",
    industry: "Health",
    arr: "$210K",
    growth: "+22%",
    growthPositive: true,
    health: 95,
    healthLabel: "Healthy",
    healthColor: colors.healthGreen,
    dotColor: colors.healthGreen,
    renewal: 202,
  },
];

export default function AccountConsolePreview({
  className,
}: AccountConsolePreviewProps) {
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
          <span>Workspace</span>
          <span className="opacity-50">›</span>
          <span style={{ color: colors.ink, fontWeight: 500 }}>Accounts</span>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[10px]"
            style={{ backgroundColor: colors.pageBg, borderColor: colors.border, color: colors.inkMuted }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            Search...
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.inkMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          <div
            className="flex items-center justify-center rounded-full h-6 w-6 text-[9px] font-bold"
            style={{ backgroundColor: colors.accentBlue, color: "#fff" }}
          >
            O
          </div>
        </div>
      </div>

      {/* Alert banner */}
      <div
        className="flex items-center justify-between border-b px-4 py-2"
        style={{ backgroundColor: colors.alertBg, borderColor: colors.alertBorder }}
      >
        <div className="flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={colors.alertText} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
          <span className="text-[11px] font-medium" style={{ color: colors.alertText }}>
            Schema Drift Detected — Jira Integration. 2 fields changed upstream.
          </span>
          <span className="text-[9px] px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(146,64,14,0.15)', color: colors.alertText }}>
            Live detection
          </span>
        </div>
        <button
          type="button"
          className="rounded-md px-2.5 py-0.5 text-[10px] font-semibold"
          style={{ backgroundColor: colors.alertText, color: "#fff" }}
        >
          Review
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 py-4">
        {/* Page header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-sm font-bold" style={{ color: colors.ink }}>
              Accounts &amp; Revenue
            </h1>
            <p className="text-[10px] mt-0.5" style={{ color: colors.inkMuted }}>
              Total ARR: $1.75M · 6 accounts
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md border px-3 py-1 text-[10px] font-medium"
              style={{ backgroundColor: colors.cardBg, borderColor: colors.border, color: colors.ink }}
            >
              Export
            </button>
            <button
              type="button"
              className="rounded-md px-3 py-1 text-[10px] font-medium"
              style={{ backgroundColor: colors.accentBlue, color: "#fff" }}
            >
              + Add Account
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div
          className="flex items-center gap-2 rounded-md border px-3 py-2 mb-3"
          style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.inkMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <span className="text-[11px]" style={{ color: colors.inkMuted }}>
            Search accounts...
          </span>
        </div>

        {/* Account cards grid */}
        <div className="grid grid-cols-3 gap-3">
          {accounts.map((account) => (
            <div
              key={account.name}
              className="rounded-lg border p-3 flex flex-col"
              style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
            >
              {/* Top row: dot + name + segment·industry */}
              <div className="flex items-center gap-1.5 mb-1">
                <span
                  className="inline-block h-2 w-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: account.dotColor }}
                />
                <span className="text-[11px] font-semibold truncate" style={{ color: colors.ink }}>
                  {account.name}
                </span>
              </div>
              <div className="text-[10px] mb-2" style={{ color: colors.inkMuted }}>
                {account.segment} · {account.industry}
              </div>

              {/* Middle: ARR + growth */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-lg font-bold" style={{ color: colors.ink }}>
                  {account.arr}
                </span>
                <span
                  className="text-[10px] font-medium"
                  style={{ color: account.growthPositive ? colors.healthGreen : colors.healthRed }}
                >
                  {account.growth}
                </span>
              </div>

              {/* Health bar */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: colors.pageBg }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${account.health}%`, backgroundColor: account.healthColor }}
                  />
                </div>
                <span className="text-[9px] font-medium whitespace-nowrap" style={{ color: colors.inkMuted }}>
                  {account.health}/100 · {account.healthLabel}
                </span>
              </div>

              {/* Renewal */}
              <div className="flex items-center gap-1 mt-auto">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={colors.inkMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span className="text-[9px]" style={{ color: colors.inkMuted }}>
                  Renewal in {account.renewal}d
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cognitive layer footer */}
      <div
        className="flex items-center justify-center gap-2 border-t px-4 py-2"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        <span className="relative flex h-2 w-2">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: colors.accentBlue }}
          />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: colors.accentBlue }} />
        </span>
        <span className="text-[10px] font-medium" style={{ color: colors.inkMuted }}>
          Cognitive Layer — 6 accounts analyzed · 3 signals active
        </span>
      </div>
    </div>
  );
}
