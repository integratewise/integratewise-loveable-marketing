import React from "react";

export interface AppWindowFrameProps {
  size?: "hero" | "section" | "card" | "snippet";
  title?: string;
  breadcrumbs?: string[];
  showTrafficLights?: boolean;
  showSidebar?: boolean;
  sidebarWidth?: number;
  sidebarColor?: string;
  children: React.ReactNode;
  overlay?: React.ReactNode;
  className?: string;
}

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

const sizeClasses: Record<
  NonNullable<AppWindowFrameProps["size"]>,
  {
    container: string;
    topBar: string;
    trafficLights: string;
    title: string;
    breadcrumb: string;
    content: string;
  }
> = {
  hero: {
    container: "rounded-xl",
    topBar: "h-10 px-4",
    trafficLights: "w-3 h-3",
    title: "text-sm",
    breadcrumb: "text-xs px-4 py-1.5",
    content: "p-5",
  },
  section: {
    container: "rounded-lg",
    topBar: "h-9 px-3.5",
    trafficLights: "w-2.5 h-2.5",
    title: "text-sm",
    breadcrumb: "text-xs px-3.5 py-1",
    content: "p-4",
  },
  card: {
    container: "rounded-md",
    topBar: "h-8 px-3",
    trafficLights: "w-2 h-2",
    title: "text-xs",
    breadcrumb: "text-[10px] px-3 py-1",
    content: "p-3",
  },
  snippet: {
    container: "rounded-md",
    topBar: "h-7 px-2.5",
    trafficLights: "w-2 h-2",
    title: "text-[10px]",
    breadcrumb: "text-[10px] px-2.5 py-0.5",
    content: "p-2.5",
  },
};

export default function AppWindowFrame({
  size = "section",
  title,
  breadcrumbs,
  showTrafficLights = true,
  showSidebar = false,
  sidebarWidth = 48,
  sidebarColor = colors.sidebarBg,
  children,
  overlay,
  className,
}: AppWindowFrameProps) {
  const s = sizeClasses[size];

  return (
    <div
      className={[
        "overflow-hidden border shadow-lg",
        s.container,
        className || "",
      ].join(" ")}
      style={{
        backgroundColor: colors.pageBg,
        borderColor: colors.border,
        boxShadow: "0 10px 40px -10px rgba(15,23,42,0.12), 0 2px 8px rgba(15,23,42,0.06)",
      }}
    >
      {/* Top bar */}
      <div
        className={[
          "flex items-center border-b",
          s.topBar,
        ].join(" ")}
        style={{ backgroundColor: colors.headerBg, borderColor: colors.border }}
      >
        {showTrafficLights && (
          <div className="flex items-center gap-1.5">
            <span
              className={[s.trafficLights, "rounded-full"].join(" ")}
              style={{ backgroundColor: "#FF5F57" }}
            />
            <span
              className={[s.trafficLights, "rounded-full"].join(" ")}
              style={{ backgroundColor: "#FFBD2E" }}
            />
            <span
              className={[s.trafficLights, "rounded-full"].join(" ")}
              style={{ backgroundColor: "#28C840" }}
            />
          </div>
        )}

        {/* IntegrateWise logo / breadcrumb center */}
        {title ? (
          <span
            className={[
              "flex-1 text-center font-semibold",
              showTrafficLights ? "-ml-12" : "",
              s.title,
            ].join(" ")}
            style={{ color: colors.ink }}
          >
            {title}
          </span>
        ) : (
          <div
            className={[
              "flex-1 flex items-center justify-center gap-1",
              showTrafficLights ? "-ml-12" : "",
            ].join(" ")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.accentBlue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            <span className="text-[11px] font-semibold" style={{ color: colors.ink }}>
              IntegrateWise
            </span>
          </div>
        )}

        {/* Right side: search + user */}
        <div className="flex items-center gap-2">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={colors.inkMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <div
            className="flex items-center justify-center rounded-full h-5 w-5 text-[8px] font-bold"
            style={{ backgroundColor: colors.accentBlue, color: "#fff" }}
          >
            U
          </div>
        </div>
      </div>

      {/* Breadcrumb row */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div
          className={[
            "flex items-center gap-1 border-b",
            s.breadcrumb,
          ].join(" ")}
          style={{ backgroundColor: colors.pageBg, color: colors.inkMuted, borderColor: colors.border }}
        >
          {breadcrumbs.map((crumb, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="opacity-50">›</span>}
              <span
                className={[
                  i === breadcrumbs.length - 1
                    ? "font-semibold"
                    : "",
                ].join(" ")}
                style={{ color: i === breadcrumbs.length - 1 ? colors.ink : colors.inkMuted }}
              >
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Body */}
      <div className="relative flex" style={{ backgroundColor: colors.pageBg }}>
        {showSidebar && (
          <div
            className="flex-shrink-0 border-r flex flex-col"
            style={{
              width: sidebarWidth,
              backgroundColor: sidebarColor,
              borderColor: colors.border,
            }}
          >
            {/* Sidebar logo area */}
            <div className="flex items-center gap-1.5 px-3 py-2.5 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.sidebarTextActive} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              <span className="text-[10px] font-semibold" style={{ color: colors.sidebarTextActive }}>
                IW
              </span>
            </div>
            {/* Sidebar nav items */}
            <div className="flex flex-col gap-0.5 px-2 py-2">
              {["Dashboard", "Accounts", "Twin", "Signals", "Governance"].map((item, i) => (
                <div
                  key={item}
                  className="rounded-md px-2 py-1.5 text-[9px] font-medium"
                  style={{
                    backgroundColor: i === 1 ? colors.sidebarActive : "transparent",
                    color: i === 1 ? colors.sidebarTextActive : colors.sidebarText,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className={["relative flex-1", s.content].join(" ")} style={{ backgroundColor: colors.pageBg }}>
          {children}
          {overlay && (
            <div className="absolute inset-0 pointer-events-none">
              {overlay}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
