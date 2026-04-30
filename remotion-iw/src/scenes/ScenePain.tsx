import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { T } from "../theme";
import { useEnter } from "../anim";

const APPS = [
  "Salesforce", "HubSpot", "Stripe", "Jira",
  "Zendesk", "Slack", "Gmail", "Sheets",
];

const COLORS = ["#7AB7FF", "#F5C36B", "#5BE0C6", "#A78BFA", "#F47174", "#5BE0A6", "#FF8FB1", "#7DD3FC"];

export const ScenePain: React.FC = () => {
  const frame = useCurrentFrame();
  const headline = useEnter(8, 18);
  const sub = useEnter(50, 16);

  return (
    <AbsoluteFill style={{ padding: 120 }}>
      {/* chaotic stack of mock app windows */}
      <AbsoluteFill style={{ padding: 80 }}>
        {APPS.map((name, i) => {
          const baseX = 90 + (i % 4) * 360 + (i % 2 === 0 ? 30 : -20);
          const baseY = 110 + Math.floor(i / 4) * 320 + (i % 3) * 18;
          const jitter = Math.sin((frame + i * 7) / 9) * 3;
          const tilt = (i % 2 === 0 ? 1 : -1) * (1 + (i % 3) * 0.3);
          const enterOp = interpolate(frame, [i * 2, i * 2 + 14], [0, 1], {
            extrapolateRight: "clamp",
          });
          const flash = (frame + i * 11) % 60 < 4 ? 0.55 : 0.18;
          return (
            <div
              key={name}
              style={{
                position: "absolute",
                left: baseX,
                top: baseY + jitter,
                width: 460,
                height: 280,
                background: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: 14,
                transform: `rotate(${tilt}deg)`,
                opacity: enterOp * 0.92,
                boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 14px",
                  borderBottom: `1px solid ${T.border}`,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: 5, background: "#F47174" }} />
                <span style={{ width: 10, height: 10, borderRadius: 5, background: "#F5C36B" }} />
                <span style={{ width: 10, height: 10, borderRadius: 5, background: "#5BE0A6" }} />
                <span style={{ marginLeft: 12, fontSize: 13, color: T.textMuted, fontFamily: T.mono }}>
                  {name.toLowerCase()}.app
                </span>
                {/* notification dot */}
                <span
                  style={{
                    marginLeft: "auto",
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    background: COLORS[i],
                    opacity: flash,
                    boxShadow: `0 0 12px ${COLORS[i]}`,
                  }}
                />
              </div>
              <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                {[0, 1, 2, 3, 4].map((r) => (
                  <div
                    key={r}
                    style={{
                      height: 14,
                      width: `${60 + ((i * 13 + r * 17) % 35)}%`,
                      background: `linear-gradient(90deg, ${COLORS[i]}33, ${T.borderHi})`,
                      borderRadius: 4,
                      opacity: 0.85 - r * 0.1,
                    }}
                  />
                ))}
                <div
                  style={{
                    marginTop: 8,
                    fontFamily: T.mono,
                    fontSize: 11,
                    color: T.textFaint,
                  }}
                >
                  {name} · loading…
                </div>
              </div>
            </div>
          );
        })}
      </AbsoluteFill>

      {/* roaming cursor */}
      <div
        style={{
          position: "absolute",
          left: 200 + ((frame * 6) % 1500),
          top: 250 + Math.sin(frame / 8) * 180 + ((frame * 2) % 400),
          width: 18,
          height: 24,
          background: T.text,
          clipPath: "polygon(0 0, 100% 60%, 50% 60%, 65% 100%, 45% 100%, 30% 60%, 0 60%)",
          opacity: 0.85,
        }}
      />

      {/* headline overlay */}
      <AbsoluteFill
        style={{
          background: "linear-gradient(180deg, rgba(10,15,28,0) 30%, rgba(10,15,28,0.85) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 140,
          opacity: headline.opacity,
          transform: `translateY(${headline.y}px)`,
        }}
      >
        <div
          style={{
            fontFamily: T.mono,
            fontSize: 18,
            color: T.accent,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          2025 · The Operator's Day
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: 88,
            fontWeight: 700,
            color: T.text,
            letterSpacing: -1.5,
            lineHeight: 1.05,
            maxWidth: 1400,
          }}
        >
          You are the human bridge<br />between your tools.
        </h1>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: T.textMuted,
            opacity: sub.opacity,
            transform: `translateY(${sub.y}px)`,
          }}
        >
          Data scattered. Intelligence blind. Automation you don't fully trust.
        </div>
      </div>
    </AbsoluteFill>
  );
};
