import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { T } from "../theme";
import { useEnter } from "../anim";

const ROWS = [
  { name: "TechServe India", arr: "$420K", d: "+8%", health: "Healthy", color: T.success, ren: "Aug 12" },
  { name: "CloudBridge APAC", arr: "$310K", d: "+3%", health: "Healthy", color: T.success, ren: "Sep 04" },
  { name: "FinanceFlow", arr: "$285K", d: "−12%", health: "At-Risk", color: T.warn, ren: "29 days" },
  { name: "DataVault AU", arr: "$260K", d: "+5%", health: "Healthy", color: T.success, ren: "Oct 21" },
  { name: "RetailNest Pte", arr: "$245K", d: "−2%", health: "At-Risk", color: T.warn, ren: "Nov 09" },
  { name: "HealthTech Innov", arr: "$230K", d: "+11%", health: "Critical", color: T.danger, ren: "18 days" },
];

const NAV = [
  "Accounts", "Risks", "Deals", "Forecasting", "Analytics", "Workflows", "Intelligence",
];

export const SceneWorkspace: React.FC = () => {
  const frame = useCurrentFrame();
  const chrome = useEnter(2, 18);
  const arrTo = interpolate(frame, [16, 60], [0, 1.75], { extrapolateRight: "clamp" });
  const drift = interpolate(frame, [70, 84, 110, 122], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const caption = useEnter(86, 16);

  return (
    <AbsoluteFill style={{ padding: 80 }}>
      <div
        style={{
          opacity: chrome.opacity,
          transform: `translateY(${chrome.y}px)`,
          background: T.surface,
          border: `1px solid ${T.border}`,
          borderRadius: 16,
          overflow: "hidden",
          height: 880,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* topbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "14px 22px",
            borderBottom: `1px solid ${T.border}`,
            gap: 18,
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: 5, background: "#F47174" }} />
            <span style={{ width: 10, height: 10, borderRadius: 5, background: "#F5C36B" }} />
            <span style={{ width: 10, height: 10, borderRadius: 5, background: "#5BE0A6" }} />
          </div>
          <div style={{ fontFamily: T.mono, fontSize: 13, color: T.textMuted }}>
            Workspace › Accounts
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 22 }}>
            {NAV.map((n) => (
              <span
                key={n}
                style={{
                  fontSize: 13,
                  color: n === "Accounts" ? T.text : T.textMuted,
                  borderBottom: n === "Accounts" ? `2px solid ${T.accent}` : "2px solid transparent",
                  paddingBottom: 4,
                }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        {/* schema drift banner */}
        <div
          style={{
            opacity: drift,
            background: "rgba(245,195,107,0.08)",
            borderBottom: `1px solid rgba(245,195,107,0.35)`,
            padding: "12px 22px",
            color: T.text,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: 4, background: T.warn }} />
          <span style={{ fontFamily: T.mono, color: T.warn }}>schema-drift</span>
          <span style={{ color: T.textMuted }}>
            Jira · 2 fields changed upstream · auto-correction proposed.
          </span>
          <span
            style={{
              marginLeft: "auto",
              padding: "4px 10px",
              borderRadius: 6,
              border: `1px solid ${T.warn}66`,
              color: T.warn,
              fontSize: 12,
              fontFamily: T.mono,
            }}
          >
            Review
          </span>
        </div>

        {/* header row */}
        <div
          style={{
            padding: "22px 26px 16px",
            display: "flex",
            alignItems: "baseline",
            gap: 24,
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 700, color: T.text }}>Accounts & Revenue</div>
          <div
            style={{
              fontFamily: T.mono,
              fontSize: 14,
              color: T.textMuted,
            }}
          >
            Total ARR ·{" "}
            <span style={{ color: T.text }}>
              ${arrTo.toFixed(2)}M
            </span>{" "}
            · 6 accounts
          </div>
        </div>

        {/* table */}
        <div style={{ padding: "0 26px 26px", flex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 0.8fr 1fr 1fr",
              gap: 0,
              padding: "10px 14px",
              fontFamily: T.mono,
              fontSize: 12,
              color: T.textFaint,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              borderBottom: `1px solid ${T.border}`,
            }}
          >
            <span>Account</span>
            <span>ARR</span>
            <span>Δ</span>
            <span>Health</span>
            <span>Renewal</span>
          </div>
          {ROWS.map((row, i) => {
            const op = interpolate(frame, [16 + i * 4, 30 + i * 4], [0, 1], {
              extrapolateRight: "clamp",
            });
            const focus =
              row.name === "FinanceFlow"
                ? interpolate(frame, [70, 100], [0, 1], { extrapolateRight: "clamp" })
                : 0;
            return (
              <div
                key={row.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 0.8fr 1fr 1fr",
                  gap: 0,
                  padding: "16px 14px",
                  borderBottom: `1px solid ${T.border}`,
                  alignItems: "center",
                  opacity: op,
                  background: `rgba(91,224,198,${focus * 0.06})`,
                  borderLeft:
                    row.name === "FinanceFlow"
                      ? `3px solid ${T.accent}`
                      : "3px solid transparent",
                }}
              >
                <span style={{ color: T.text, fontSize: 16, fontWeight: 500 }}>{row.name}</span>
                <span style={{ color: T.text, fontSize: 16, fontFamily: T.mono }}>{row.arr}</span>
                <span
                  style={{
                    color: row.d.startsWith("−") ? T.danger : T.success,
                    fontSize: 14,
                    fontFamily: T.mono,
                  }}
                >
                  {row.d}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      background: row.color,
                      boxShadow: `0 0 10px ${row.color}`,
                    }}
                  />
                  <span style={{ color: T.text, fontSize: 14 }}>{row.health}</span>
                </span>
                <span style={{ color: T.textMuted, fontSize: 14, fontFamily: T.mono }}>
                  {row.ren}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* caption */}
      <div
        style={{
          marginTop: 22,
          textAlign: "center",
          opacity: caption.opacity,
          transform: `translateY(${caption.y}px)`,
          fontSize: 22,
          color: T.textMuted,
        }}
      >
        One workspace. <span style={{ color: T.text }}>Full context.</span> One truth from many sources.
      </div>
    </AbsoluteFill>
  );
};
