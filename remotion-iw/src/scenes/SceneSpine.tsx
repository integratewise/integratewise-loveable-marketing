import { AbsoluteFill, interpolate, staticFile, useCurrentFrame } from "remotion";
import { T } from "../theme";
import { useEnter } from "../anim";

const CONNECTORS = [
  "salesforce", "hubspot", "stripe", "jira", "notion",
  "slack", "zendesk", "gmail", "shopify", "quickbooks",
  "intercom", "github", "airtable", "asana", "google-drive",
];

export const SceneSpine: React.FC = () => {
  const frame = useCurrentFrame();
  const eyebrow = useEnter(2, 14);
  const spineEnter = useEnter(10, 20);
  const tilesEnter = useEnter(28, 22);
  const labelEnter = useEnter(70, 18);

  // spine y position
  const spineY = 360;
  const spineW = 1500;
  const spineX = (1920 - spineW) / 2;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: eyebrow.opacity,
        }}
      >
        <div
          style={{
            fontFamily: T.mono,
            fontSize: 16,
            color: T.accent,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          One layer connects everything
        </div>
        <h2
          style={{
            margin: "14px 0 0",
            fontSize: 64,
            fontWeight: 700,
            color: T.text,
            letterSpacing: -1,
          }}
        >
          The Spine.
        </h2>
      </div>

      {/* SPINE bar */}
      <div
        style={{
          position: "absolute",
          left: spineX,
          top: spineY,
          width: spineW,
          height: 110,
          opacity: spineEnter.opacity,
          transform: `translateY(${spineEnter.y}px)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 18,
            background: `linear-gradient(90deg, ${T.surfaceHi}, ${T.surface}, ${T.surfaceHi})`,
            border: `1px solid ${T.borderHi}`,
            boxShadow: `0 0 80px rgba(91,224,198,${0.18 + Math.sin(frame / 18) * 0.06})`,
          }}
        />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 18,
              border: `1px solid ${T.accent}`,
              opacity: 0.35,
              filter: "blur(0.5px)",
            }}
          />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 36px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: T.mono,
                fontSize: 13,
                color: T.accent,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              The Spine
            </div>
            <div style={{ fontSize: 28, fontWeight: 600, color: T.text, marginTop: 4 }}>
              Loader · Adapter · Schema Registry
            </div>
          </div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {["Truth", "Context", "Sessions"].map((l, i) => (
              <div
                key={l}
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: `1px solid ${T.borderHi}`,
                  background: "rgba(91,224,198,0.06)",
                  fontFamily: T.mono,
                  fontSize: 13,
                  color: T.text,
                  opacity: interpolate(frame, [40 + i * 4, 60 + i * 4], [0, 1], {
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* connector tiles + flowing streams */}
      <div
        style={{
          position: "absolute",
          left: spineX,
          top: spineY + 200,
          width: spineW,
          opacity: tilesEnter.opacity,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(15, 1fr)",
            gap: 14,
          }}
        >
          {CONNECTORS.map((c, i) => {
            const enter = interpolate(frame, [28 + i * 1.5, 44 + i * 1.5], [0, 1], {
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={c}
                style={{
                  height: 92,
                  borderRadius: 14,
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: enter,
                  transform: `translateY(${(1 - enter) * 14}px)`,
                  boxShadow: "0 10px 30px -15px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src={staticFile(`logos/${c}.svg`)}
                  style={{ width: 44, height: 44, filter: "drop-shadow(0 0 10px rgba(0,0,0,0.4))" }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* streams */}
      <svg
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        viewBox="0 0 1920 1080"
      >
        {CONNECTORS.map((_, i) => {
          const cellW = (spineW - 14 * 14) / 15 + 14;
          const x = spineX + cellW * (i + 0.5) - 7;
          const yStart = spineY + 200; // top of tiles
          const yEnd = spineY + 110; // bottom of spine
          const dashLen = 10;
          const speed = 1.2;
          const offset = -((frame * speed) % (dashLen * 2));
          const op = interpolate(frame, [50, 70], [0, 0.7], { extrapolateRight: "clamp" });
          return (
            <line
              key={i}
              x1={x}
              y1={yStart}
              x2={x}
              y2={yEnd}
              stroke={T.accent}
              strokeWidth={1.5}
              strokeDasharray={`${dashLen} ${dashLen}`}
              strokeDashoffset={offset}
              opacity={op}
            />
          );
        })}
      </svg>

      {/* schema drift toast (auto-resolves) */}
      <div
        style={{
          position: "absolute",
          right: 120,
          top: 230,
          opacity: interpolate(
            frame,
            [80, 90, 130, 140],
            [0, 1, 1, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          ),
        }}
      >
        <div
          style={{
            background: "rgba(245,195,107,0.08)",
            border: `1px solid rgba(245,195,107,0.4)`,
            borderRadius: 10,
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: T.text,
            fontSize: 14,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: 4, background: T.warn }} />
          <span style={{ fontFamily: T.mono, color: T.warn }}>schema-drift</span>
          <span style={{ color: T.textMuted }}>Jira · 2 fields · auto-corrected</span>
        </div>
      </div>

      {/* caption */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 80,
          textAlign: "center",
          opacity: labelEnter.opacity,
          transform: `translateY(${labelEnter.y}px)`,
        }}
      >
        <div style={{ fontSize: 24, color: T.textMuted, letterSpacing: 0.2 }}>
          One Spine. <span style={{ color: T.text }}>Digital Memory</span> built from{" "}
          <span style={{ color: T.accent }}>Truth</span>,{" "}
          <span style={{ color: T.accent2 }}>Context</span>, and governed{" "}
          <span style={{ color: T.warn }}>Session Summaries</span>.
        </div>
      </div>
    </AbsoluteFill>
  );
};
