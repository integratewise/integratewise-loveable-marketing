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

interface CognitivePreviewProps {
  className?: string;
}

const tabs = [
  "Your Data",
  "Full Picture",
  "AI Thinking",
  "Next Steps",
  "Your Call",
  "Controls",
  "Adjust",
  "History",
];

const actions = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.inkMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
    ),
    title: "Update lifecycle stage in HubSpot",
    desc: "Move FinanceFlow from 'Negotiation' to 'At Risk'",
    confidence: 94,
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.inkMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
    ),
    title: "Escalate support tickets to P1",
    desc: "3 open tickets affecting production usage",
    confidence: 91,
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.inkMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
    title: "Alert the CS team on Slack",
    desc: "Post to #customer-success with context",
    confidence: 89,
  },
];

export default function CognitivePreview({ className }: CognitivePreviewProps) {
  return (
    <div
      className={["flex flex-col w-full h-full", className || ""].join(" ")}
      style={{ backgroundColor: colors.pageBg }}
    >
      {/* Alert banner */}
      <div
        className="flex items-center justify-between border-b px-4 py-2"
        style={{ backgroundColor: "#FEF2F2", borderColor: "#FECACA" }}
      >
        <div className="flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={colors.healthRed} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
          <span className="text-[11px] font-semibold" style={{ color: colors.healthRed }}>
            Renewal Risk → FinanceFlow Solutions
          </span>
        </div>
        <span className="text-[10px]" style={{ color: colors.inkMuted }}>
          Health down 18 pts · 3 P1 tickets · Payment failed twice
        </span>
      </div>

      {/* Header */}
      <div
        className="flex items-center gap-3 border-b px-4 py-3"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        <h2 className="text-sm font-bold" style={{ color: colors.ink }}>
          Cognitive Layer
        </h2>
        <span
          className="rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide"
          style={{ backgroundColor: `${colors.healthGreen}15`, color: colors.healthGreen }}
        >
          ACTIVE
        </span>
      </div>

      {/* Subtitle */}
      <div className="px-4 pt-3 pb-2">
        <p className="text-[11px] font-medium" style={{ color: colors.inkMuted }}>
          AI proposes. You decide what happens.
        </p>
      </div>

      {/* Tabs */}
      <div
        className="flex items-center gap-0 border-b px-4 overflow-x-auto"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className="px-3 py-2 text-[10px] font-medium whitespace-nowrap border-b-2 transition-colors"
            style={{
              color: tab === "Your Call" ? colors.ink : colors.inkMuted,
              borderColor: tab === "Your Call" ? colors.accentBlue : "transparent",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 py-4">
        <div className="mb-3">
          <h3 className="text-[11px] font-semibold" style={{ color: colors.ink }}>
            You decide what happens next
          </h3>
          <p className="text-[10px] mt-0.5" style={{ color: colors.inkMuted }}>
            4 actions pending your approval
          </p>
        </div>

        <div className="space-y-2">
          {actions.map((action, idx) => (
            <div
              key={idx}
              className="rounded-lg border p-3"
              style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
            >
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex-shrink-0">{action.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold truncate" style={{ color: colors.ink }}>
                      {action.title}
                    </span>
                    <span
                      className="text-[9px] font-medium whitespace-nowrap"
                      style={{ color: colors.inkMuted }}
                    >
                      {action.confidence}% confidence
                    </span>
                  </div>
                  <p className="text-[10px] mt-0.5" style={{ color: colors.inkMuted }}>
                    {action.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 mt-2.5">
                <button
                  type="button"
                  className="rounded-md border px-3 py-1 text-[10px] font-medium"
                  style={{ backgroundColor: colors.cardBg, borderColor: colors.border, color: colors.inkMuted }}
                >
                  Deny
                </button>
                <button
                  type="button"
                  className="rounded-md px-3 py-1 text-[10px] font-medium"
                  style={{ backgroundColor: colors.accentBlue, color: "#fff" }}
                >
                  Approve &amp; Execute
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
