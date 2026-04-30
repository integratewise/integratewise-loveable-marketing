import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { T } from "../theme";
import { useEnter } from "../anim";

const NODES = [
  { label: "Tools", x: 200 },
  { label: "Spine", x: 540 },
  { label: "Workspace", x: 870 },
  { label: "Twin", x: 1200 },
  { label: "Approval", x: 1500 },
  { label: "Tools", x: 1760 },
];

export const SceneLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const head = useEnter(2, 16);
  const tagline = useEnter(50, 18);
  const cy = 540;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 110,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: head.opacity,
          transform: `translateY(${head.y}px)`,
        }}
      >
        <div
          style={{
            fontFamily: T.mono,
            fontSize: 14,
            color: T.accent,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          The closed loop
        </div>
        <h2
          style={{
            margin: "12px 0 0",
            fontSize: 60,
            fontWeight: 700,
            color: T.text,
            letterSpacing: -0.8,
          }}
        >
          Stop the reset. Start the loop.
        </h2>
      </div>

      {/* line */}
      <svg
        style={{ position: "absolute", inset: 0 }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <line
          x1={NODES[0].x}
          y1={cy}
          x2={NODES[NODES.length - 1].x}
          y2={cy}
          stroke={T.borderHi}
          strokeWidth={1.5}
        />
        {/* moving pulse */}
        {[0, 18, 36, 54].map((off) => {
          const t = ((frame + off) % 90) / 90;
          const x = NODES[0].x + (NODES[NODES.length - 1].x - NODES[0].x) * t;
          return (
            <circle
              key={off}
              cx={x}
              cy={cy}
              r={6}
              fill={T.accent}
              opacity={0.9 - off / 80}
            />
          );
        })}
      </svg>

      {NODES.map((n, i) => {
        const op = interpolate(frame, [10 + i * 4, 24 + i * 4], [0, 1], {
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: n.x - 70,
              top: cy - 40,
              width: 140,
              opacity: op,
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                background: T.bg,
                border: `2px solid ${T.accent}`,
                margin: "0 auto",
                boxShadow: `0 0 20px ${T.accent}66`,
              }}
            />
            <div
              style={{
                marginTop: 18,
                fontSize: 18,
                color: T.text,
                fontWeight: 500,
              }}
            >
              {n.label}
            </div>
          </div>
        );
      })}

      {/* three captions */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 150,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 40,
          padding: "0 200px",
          opacity: tagline.opacity,
          transform: `translateY(${tagline.y}px)`,
        }}
      >
        {[
          { k: "Unifies", v: "One truth from many sources, so you stop reconciling." },
          { k: "Adapts", v: "Survives tool changes, so your history never resets." },
          { k: "Remembers", v: "Compounds knowledge, so tomorrow starts smarter than today." },
        ].map((row) => (
          <div key={row.k}>
            <div
              style={{
                fontFamily: T.mono,
                fontSize: 12,
                color: T.accent,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              {row.k}
            </div>
            <div style={{ marginTop: 10, fontSize: 17, color: T.textMuted, lineHeight: 1.5 }}>
              {row.v}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
