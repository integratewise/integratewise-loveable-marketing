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

interface TwinPreviewProps {
  className?: string;
}

export default function TwinPreview({ className }: TwinPreviewProps) {
  return (
    <div
      className={["flex flex-col w-full h-full", className || ""].join(" ")}
      style={{ backgroundColor: colors.pageBg }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between border-b px-3 py-2.5"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: colors.healthGreen }}
          />
          <span className="text-xs font-semibold" style={{ color: colors.ink }}>
            Digital Twin
          </span>
        </div>
        <span
          className="rounded px-1.5 py-0.5 text-[9px] font-medium tracking-wide"
          style={{ backgroundColor: `${colors.accentBlue}15`, color: colors.accentBlue }}
        >
          CTX_ACCOUNT_SUCCESS
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3 p-3 overflow-auto">
        {/* AI message 1 */}
        <div className="flex justify-start">
          <div
            className="max-w-[85%] rounded-xl rounded-tl-none px-3 py-2.5 text-[11px] leading-relaxed"
            style={{
              backgroundColor: "#F1F5F9",
              color: colors.ink,
            }}
          >
            Good morning. I see FinanceFlow Solutions has 3 P1 tickets and the champion has been silent for 12 days. Should I draft a renewal rescue plan?
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div
            className="max-w-[85%] rounded-xl rounded-tr-none px-3 py-2.5 text-[11px] leading-relaxed border"
            style={{
              backgroundColor: colors.cardBg,
              borderColor: colors.border,
              color: colors.ink,
            }}
          >
            Yes, draft it and schedule a health call for tomorrow.
          </div>
        </div>

        {/* AI message 2 */}
        <div className="flex justify-start">
          <div
            className="max-w-[90%] rounded-xl rounded-tl-none px-3 py-2.5 text-[11px] leading-relaxed"
            style={{
              backgroundColor: "#F1F5F9",
              color: colors.ink,
            }}
          >
            Done. I&apos;ve drafted the rescue plan with 4 action items and scheduled the call for 10am IST. The account health score is 54% — down from 72% last month.
          </div>
        </div>
      </div>

      {/* Quick action chips */}
      <div className="px-3 pb-2 flex flex-wrap gap-1.5">
        {["Show pipeline", "At-risk accounts", "Forecast Q2"].map((chip) => (
          <button
            key={chip}
            type="button"
            className="rounded-full border px-2.5 py-0.5 text-[10px] font-medium"
            style={{ backgroundColor: colors.cardBg, borderColor: colors.border, color: colors.inkMuted }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input row */}
      <div
        className="border-t px-3 py-2.5"
        style={{
          backgroundColor: colors.cardBg,
          borderColor: colors.border,
        }}
      >
        <div
          className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2"
          style={{
            backgroundColor: colors.pageBg,
            borderColor: colors.border,
          }}
        >
          <span
            className="text-[11px]"
            style={{ color: colors.inkMuted }}
          >
            Ask your Twin anything...
          </span>
          <button
            type="button"
            className="flex items-center justify-center rounded-md h-6 w-6"
            style={{ backgroundColor: colors.accentBlue }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
