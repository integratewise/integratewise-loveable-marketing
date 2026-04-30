import { AbsoluteFill, useCurrentFrame } from "remotion";
import { T } from "../theme";
import { useEnter, useBreath } from "../anim";

export const SceneLockup: React.FC = () => {
  const head = useEnter(2, 18);
  const sub = useEnter(22, 18);
  const cta = useEnter(48, 18);
  const breath = useBreath(0.6, 80);
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 120,
      }}
    >
      <div style={{ opacity: head.opacity, transform: `translateY(${head.y + breath}px)` }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            fontFamily: T.mono,
            fontSize: 14,
            color: T.accent,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              background: T.accent,
              boxShadow: `0 0 14px ${T.accent}`,
            }}
          />
          IntegrateWise
        </div>
        <h1
          style={{
            margin: "26px auto 0",
            fontSize: 96,
            fontWeight: 700,
            color: T.text,
            letterSpacing: -2,
            lineHeight: 1.05,
            maxWidth: 1500,
          }}
        >
          Truth you own.<br />
          AI you rent.{" "}
          <span style={{ color: T.accent }}>Approval in between.</span>
        </h1>
      </div>

      <div
        style={{
          marginTop: 36,
          fontSize: 24,
          color: T.textMuted,
          maxWidth: 1100,
          opacity: sub.opacity,
          transform: `translateY(${sub.y}px)`,
        }}
      >
        See your Memory assembled on your data in 30 minutes.
        No rebuild. No reset.
      </div>

      <div
        style={{
          marginTop: 48,
          display: "flex",
          gap: 18,
          opacity: cta.opacity,
          transform: `translateY(${cta.y}px)`,
        }}
      >
        <div
          style={{
            padding: "18px 32px",
            borderRadius: 12,
            background: T.accent,
            color: T.bg,
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: 0.3,
          }}
        >
          Book a Demo →
        </div>
        <div
          style={{
            padding: "18px 32px",
            borderRadius: 12,
            border: `1px solid ${T.borderHi}`,
            color: T.text,
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          integratewise.ai
        </div>
      </div>
    </AbsoluteFill>
  );
};
