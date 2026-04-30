import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { T } from "../theme";
import { useEnter } from "../anim";

const ACTIONS = [
  { app: "HubSpot", conf: 94, body: "Move FinanceFlow · Customer → At-Risk", color: "#F5C36B" },
  { app: "Jira", conf: 91, body: "Escalate 3 open tickets to P1", color: "#7AB7FF" },
  { app: "Slack", conf: 88, body: "Notify #renewals-critical with evidence", color: "#A78BFA" },
  { app: "Salesforce", conf: 96, body: "Opportunity → Renewal at Risk + notes", color: "#5BE0C6" },
];

export const SceneTwin: React.FC = () => {
  const frame = useCurrentFrame();
  const banner = useEnter(2, 18);
  const tabs = useEnter(28, 16);
  const twin = useEnter(40, 18);
  const approveAt = 130;

  return (
    <AbsoluteFill style={{ padding: "70px 110px" }}>
      {/* twin orb */}
      <div
        style={{
          position: "absolute",
          right: 130,
          top: 70,
          opacity: twin.opacity,
          transform: `translateY(${twin.y}px)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            background: `radial-gradient(circle, ${T.accent} 0%, rgba(91,224,198,0.15) 60%, transparent 100%)`,
            margin: "0 auto",
            boxShadow: `0 0 80px rgba(91,224,198,${0.4 + Math.sin(frame / 12) * 0.18})`,
          }}
        />
        <div
          style={{
            marginTop: 8,
            fontFamily: T.mono,
            fontSize: 12,
            color: T.accent,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Twin · reads memory
        </div>
        <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>cannot write</div>
      </div>

      {/* risk banner */}
      <div
        style={{
          opacity: banner.opacity,
          transform: `translateY(${banner.y}px)`,
          background: `linear-gradient(90deg, rgba(244,113,116,0.10), rgba(244,113,116,0.02))`,
          border: `1px solid rgba(244,113,116,0.35)`,
          borderRadius: 14,
          padding: "20px 26px",
          maxWidth: 1180,
        }}
      >
        <div
          style={{
            fontFamily: T.mono,
            fontSize: 12,
            color: T.danger,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Renewal Risk → FinanceFlow
        </div>
        <div style={{ marginTop: 8, fontSize: 24, color: T.text, fontWeight: 600 }}>
          3 P1 tickets · champion silent 12 days · payment failed twice ·{" "}
          <span style={{ color: T.danger }}>renewal in 29 days.</span>
        </div>
      </div>

      {/* tabs */}
      <div
        style={{
          marginTop: 22,
          opacity: tabs.opacity,
          display: "flex",
          gap: 18,
          flexWrap: "wrap",
        }}
      >
        {[
          "Your Data", "Full Picture", "Knowledge", "Evidence",
          "What Matters", "AI Thinking", "Next Steps",
          { active: true, label: "Your Call" },
          "Controls", "History",
        ].map((t, i) => {
          const active = typeof t === "object" && t.active;
          const label = typeof t === "string" ? t : t.label;
          return (
            <span
              key={label}
              style={{
                fontSize: 14,
                fontFamily: T.mono,
                color: active ? T.accent : T.textMuted,
                borderBottom: active ? `2px solid ${T.accent}` : "2px solid transparent",
                paddingBottom: 6,
              }}
            >
              {label}
            </span>
          );
        })}
      </div>

      {/* action cards */}
      <div
        style={{
          marginTop: 30,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
        }}
      >
        {ACTIONS.map((a, i) => {
          const op = interpolate(frame, [54 + i * 8, 72 + i * 8], [0, 1], {
            extrapolateRight: "clamp",
          });
          const y = interpolate(op, [0, 1], [12, 0]);
          const approved = frame > approveAt + i * 6;
          return (
            <div
              key={a.app}
              style={{
                opacity: op,
                transform: `translateY(${y}px)`,
                background: T.surface,
                border: `1px solid ${approved ? T.success + "66" : T.border}`,
                borderRadius: 14,
                padding: "20px 22px",
                display: "flex",
                alignItems: "center",
                gap: 18,
                transition: "none",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: `${a.color}22`,
                  border: `1px solid ${a.color}55`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: T.mono,
                  color: a.color,
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {a.app[0]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontFamily: T.mono, fontSize: 12, color: a.color }}>
                    {a.app}
                  </span>
                  <span
                    style={{
                      fontFamily: T.mono,
                      fontSize: 11,
                      color: T.textMuted,
                      border: `1px solid ${T.border}`,
                      padding: "1px 8px",
                      borderRadius: 999,
                    }}
                  >
                    confidence · {a.conf}%
                  </span>
                </div>
                <div style={{ marginTop: 6, fontSize: 17, color: T.text }}>{a.body}</div>
              </div>
              <div
                style={{
                  padding: "10px 16px",
                  borderRadius: 10,
                  background: approved ? T.success + "22" : "transparent",
                  border: `1px solid ${approved ? T.success : T.borderHi}`,
                  color: approved ? T.success : T.text,
                  fontSize: 13,
                  fontFamily: T.mono,
                  minWidth: 170,
                  textAlign: "center",
                }}
              >
                {approved ? "✓  Approved · executed" : "Approve & Execute"}
              </div>
            </div>
          );
        })}
      </div>

      {/* footnote */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 50,
          textAlign: "center",
          fontSize: 18,
          color: T.textMuted,
          opacity: interpolate(frame, [60, 78], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        Every signal = <span style={{ color: T.accent }}>Truth</span> +{" "}
        <span style={{ color: T.accent2 }}>Context</span> +{" "}
        <span style={{ color: T.warn }}>Session Summaries</span>. Full evidence before you approve.
      </div>
    </AbsoluteFill>
  );
};
