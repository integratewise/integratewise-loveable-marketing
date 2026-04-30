import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { T } from "../theme";
import { useEnter } from "../anim";

const TRUTH = [
  { k: "ARR", v: "$1.75M" },
  { k: "Tickets · P1", v: "3 open" },
  { k: "Payments", v: "2 failed" },
  { k: "Usage 30d", v: "−40%" },
];
const CONTEXT = [
  "📧  Re: budget freeze, will revisit Q3",
  "💬  Champion silent — 12 days",
  "📅  QBR rescheduled twice",
];
const SESSIONS = [
  { d: "QBR · Feb 12", t: "Renewal risk · budget freeze · champion moving" },
  { d: "Pulse · Mar 04", t: "No exec sponsor surfaced; escalation path agreed" },
];

export const SceneMemory: React.FC = () => {
  const frame = useCurrentFrame();
  const head = useEnter(2, 16);
  const t = useEnter(18, 18);
  const c = useEnter(38, 18);
  const s = useEnter(58, 18);
  const rule = useEnter(86, 18);

  return (
    <AbsoluteFill style={{ padding: "100px 120px" }}>
      <div style={{ opacity: head.opacity, transform: `translateY(${head.y}px)` }}>
        <div
          style={{
            fontFamily: T.mono,
            fontSize: 14,
            color: T.accent,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Digital Memory
        </div>
        <h2
          style={{
            margin: "10px 0 6px",
            fontSize: 56,
            fontWeight: 700,
            color: T.text,
            letterSpacing: -0.8,
          }}
        >
          Truth · Context · Session Summaries.
        </h2>
        <div style={{ fontSize: 22, color: T.textMuted, maxWidth: 1100 }}>
          The three layers your Twin reads from. Raw chat never writes here.
        </div>
      </div>

      <div
        style={{
          marginTop: 60,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 28,
          height: 580,
        }}
      >
        {/* TRUTH */}
        <div
          style={{
            opacity: t.opacity,
            transform: `translateY(${t.y}px)`,
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 18,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: T.accent }} />
            <span
              style={{
                fontFamily: T.mono,
                fontSize: 13,
                color: T.accent,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Truth
            </span>
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: T.text }}>
            FinanceFlow
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 6 }}>
            {TRUTH.map((row, i) => {
              const op = interpolate(frame, [22 + i * 4, 36 + i * 4], [0, 1], {
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={row.k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    background: T.bg2,
                    border: `1px solid ${T.border}`,
                    borderRadius: 10,
                    opacity: op,
                  }}
                >
                  <span style={{ color: T.textMuted, fontSize: 15 }}>{row.k}</span>
                  <span
                    style={{
                      color: T.text,
                      fontSize: 15,
                      fontFamily: T.mono,
                    }}
                  >
                    {row.v}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CONTEXT */}
        <div
          style={{
            opacity: c.opacity,
            transform: `translateY(${c.y}px)`,
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 18,
            padding: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: T.accent2 }} />
            <span
              style={{
                fontFamily: T.mono,
                fontSize: 13,
                color: T.accent2,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Context
            </span>
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: T.text, marginTop: 10 }}>
            Signals from people
          </div>
          <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
            {CONTEXT.map((line, i) => {
              const op = interpolate(frame, [44 + i * 5, 60 + i * 5], [0, 1], {
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={i}
                  style={{
                    padding: "14px 16px",
                    background: T.bg2,
                    border: `1px solid ${T.border}`,
                    borderRadius: 10,
                    color: T.text,
                    fontSize: 15,
                    opacity: op,
                  }}
                >
                  {line}
                </div>
              );
            })}
          </div>
        </div>

        {/* SESSION SUMMARIES */}
        <div
          style={{
            opacity: s.opacity,
            transform: `translateY(${s.y}px)`,
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 18,
            padding: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: T.warn }} />
            <span
              style={{
                fontFamily: T.mono,
                fontSize: 13,
                color: T.warn,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Session Summaries
            </span>
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: T.text, marginTop: 10 }}>
            Approved recaps
          </div>
          <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 12 }}>
            {SESSIONS.map((row, i) => {
              const op = interpolate(frame, [62 + i * 6, 80 + i * 6], [0, 1], {
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={i}
                  style={{
                    padding: "14px 16px",
                    background: T.bg2,
                    border: `1px solid ${T.border}`,
                    borderRadius: 10,
                    opacity: op,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: T.mono, fontSize: 12, color: T.textMuted }}>
                      {row.d}
                    </span>
                    <span
                      style={{
                        fontFamily: T.mono,
                        fontSize: 11,
                        color: T.success,
                        border: `1px solid ${T.success}66`,
                        padding: "2px 8px",
                        borderRadius: 999,
                      }}
                    >
                      reviewed
                    </span>
                  </div>
                  <div style={{ marginTop: 6, fontSize: 14, color: T.text }}>{row.t}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* rule */}
      <div
        style={{
          marginTop: 32,
          opacity: rule.opacity,
          transform: `translateY(${rule.y}px)`,
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 18,
          color: T.textMuted,
          justifyContent: "center",
        }}
      >
        <span style={{ textDecoration: "line-through", color: T.textFaint }}>
          Raw AI chat
        </span>
        <span>→</span>
        <span style={{ color: T.text }}>never writes into Memory.</span>
      </div>
    </AbsoluteFill>
  );
};
