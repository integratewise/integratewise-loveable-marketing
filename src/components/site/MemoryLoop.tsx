import { Brain, Eye, Workflow, Sparkles, ShieldCheck, Repeat } from "lucide-react";

const NODES = [
  { icon: Brain, label: "Memory" },
  { icon: Eye, label: "Attention" },
  { icon: Workflow, label: "Workbench" },
  { icon: Sparkles, label: "The Twin" },
  { icon: ShieldCheck, label: "Approval" },
];

/**
 * Animated 5-node loop diagram. Visual centerpiece for "How it works".
 * Renders a circular SVG loop with rotating dashed ring + node cards.
 */
export function MemoryLoop({ size = 520 }: { size?: number }) {
  const r = size / 2 - 70;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }} aria-hidden>
      {/* glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,225,204,0.14) 0%, rgba(251,191,36,0.08) 30%, transparent 65%)",
          filter: "blur(20px)",
        }}
      />

      <svg width={size} height={size} className="absolute inset-0">
        <defs>
          <linearGradient id="loop-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,225,204,0.55)" />
            <stop offset="100%" stopColor="rgba(251,191,36,0.25)" />
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="url(#loop-stroke)"
          strokeWidth={1.5}
          strokeDasharray="6 10"
          style={{ animation: "orbit-rotate 60s linear infinite", transformOrigin: "center" }}
        />
      </svg>

      {/* center hub */}
      <div
        className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-brand-accent/40"
        style={{
          background: "linear-gradient(180deg, rgba(255,225,204,0.16), rgba(255,225,204,0.04))",
          boxShadow: "0 0 60px rgba(255,225,204,0.25)",
        }}
      >
        <Repeat size={22} className="text-brand-highlight" />
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
          The Loop
        </span>
      </div>

      {/* nodes */}
      {NODES.map((n, i) => {
        const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        return (
          <div
            key={n.label}
            className="absolute flex flex-col items-center"
            style={{ left: x, top: y, transform: "translate(-50%,-50%)" }}
          >
            <div
              className="flex size-14 items-center justify-center rounded-xl border border-white/10 bg-[var(--bg-elevated)]/80 backdrop-blur-sm"
              style={{
                boxShadow: "0 8px 28px rgba(0,0,0,0.4)",
                animation: `twin-pulse-kf 3.6s ease-in-out ${i * 0.4}s infinite`,
              }}
            >
              <n.icon size={20} className="text-brand-accent" />
            </div>
            <span className="mt-2 text-[12px] font-semibold text-foreground">{n.label}</span>
          </div>
        );
      })}
    </div>
  );
}
