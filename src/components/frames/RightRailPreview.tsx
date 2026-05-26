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

interface RightRailPreviewProps {
  className?: string;
}

const alerts = [
  {
    title: "Renewal Risk",
    accent: colors.healthRed,
    account: "FinanceFlow Solutions",
    details: [
      "3 P1 tickets",
      "champion silent 12 days",
      "payment failed twice",
    ],
    meta: "Renewal in 29 days",
  },
  {
    title: "Expansion Signal",
    accent: colors.healthGreen,
    account: "Axiom Financial",
    details: ["New API usage pattern detected"],
    meta: "Expansion potential $180K",
  },
  {
    title: "Quiet Account",
    accent: colors.healthAmber,
    account: "Stellarworks SaaS",
    details: ["No engagement in 18 days"],
    meta: "Last QBR was positive",
  },
];

export default function RightRailPreview({ className }: RightRailPreviewProps) {
  return (
    <div
      className={["w-full space-y-3", className || ""].join(" ")}
      style={{ backgroundColor: colors.pageBg }}
    >
      {alerts.map((alert) => (
        <div
          key={alert.title}
          className="rounded-lg border p-3"
          style={{
            backgroundColor: colors.cardBg,
            borderColor: colors.border,
            borderLeftWidth: 3,
            borderLeftColor: alert.accent,
          }}
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="text-[10px] font-bold uppercase tracking-wide"
              style={{ color: alert.accent }}
            >
              {alert.title}
            </span>
          </div>
          <p className="text-[11px] font-semibold mb-1" style={{ color: colors.ink }}>
            {alert.account}
          </p>
          <p className="text-[10px] leading-relaxed mb-1" style={{ color: colors.inkMuted }}>
            {alert.details.join(" · ")}
          </p>
          <p className="text-[9px] font-medium" style={{ color: alert.accent }}>
            {alert.meta}
          </p>
        </div>
      ))}
    </div>
  );
}
