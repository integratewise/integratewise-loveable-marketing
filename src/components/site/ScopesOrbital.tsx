import { User, Workflow, Building2, Lock } from "lucide-react";

/**
 * Three concentric rings illustrating User → Work → Org memory scopes.
 */
export function ScopesOrbital({ size = 460 }: { size?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const rings = [
    { r: 70, label: "User", icon: User, tint: "rgba(99,179,237,0.7)" },
    { r: 130, label: "Work", icon: Workflow, tint: "rgba(255,225,204,0.7)" },
    { r: 200, label: "Org", icon: Building2, tint: "rgba(251,191,36,0.7)" },
  ];

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }} aria-hidden>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,225,204,0.12) 0%, transparent 60%)",
          filter: "blur(24px)",
        }}
      />

      <svg width={size} height={size} className="absolute inset-0">
        {rings.map((ring, i) => (
          <circle
            key={ring.label}
            cx={cx}
            cy={cy}
            r={ring.r}
            fill="none"
            stroke={ring.tint}
            strokeOpacity={0.35}
            strokeWidth={1}
            strokeDasharray="3 6"
            style={{
              transformOrigin: "center",
              animation: `orbit-rotate ${40 + i * 20}s linear infinite${i % 2 ? " reverse" : ""}`,
            }}
          />
        ))}
      </svg>

      {/* center lock = private by architecture */}
      <div
        className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-brand-accent/40"
        style={{
          background: "linear-gradient(180deg, rgba(255,225,204,0.18), rgba(255,225,204,0.04))",
          boxShadow: "0 0 50px rgba(255,225,204,0.25)",
        }}
      >
        <Lock size={18} className="text-brand-highlight" />
      </div>

      {/* labels positioned around each ring */}
      {rings.map((ring, i) => {
        const angle = -Math.PI / 4 + i * 0.2;
        const x = cx + Math.cos(angle) * ring.r;
        const y = cy + Math.sin(angle) * ring.r;
        return (
          <div
            key={ring.label}
            className="absolute flex items-center gap-2 rounded-lg border border-white/10 bg-[var(--bg-elevated)]/85 px-2.5 py-1.5 backdrop-blur-sm"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%,-50%)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
            }}
          >
            <ring.icon size={14} style={{ color: ring.tint }} />
            <span className="text-[12px] font-semibold text-foreground">{ring.label} Memory</span>
          </div>
        );
      })}
    </div>
  );
}
