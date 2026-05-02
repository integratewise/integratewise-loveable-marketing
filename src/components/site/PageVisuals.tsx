/**
 * PageVisuals
 * Small, content-rich micro-scenes used on the Pricing and Why pages
 * so neither page reads as plain text + bullet lists.
 *
 * All visuals are pure CSS/SVG — no external assets.
 */

type Cls = { className?: string };

/* -------------------------------------------------------------------------- */
/*  Pricing — per-tier compact visual:                                        */
/*  · sync-speed dial      · connector dots      · history bar                */
/* -------------------------------------------------------------------------- */
export function TierVisual({
  tier,
  className = "",
}: { tier: "starter" | "growth" | "command" } & Cls) {
  const cfg = {
    starter: {
      // 4h sync ~ slow tick
      dialPct: 0.28,
      tickSec: 4,
      dots: 5,
      maxDots: 24,
      historyPct: 0.25, // 90 days of 365
      historyLabel: "90d",
      tone: "rgba(156,214,255,0.85)", // cool blue
    },
    growth: {
      dialPct: 0.62,
      tickSec: 1.6,
      dots: 12,
      maxDots: 24,
      historyPct: 1, // 365 days
      historyLabel: "365d",
      tone: "rgba(255,225,204,0.95)", // brand peach
    },
    command: {
      dialPct: 0.92,
      tickSec: 0.55,
      dots: 24,
      maxDots: 24,
      historyPct: 1,
      historyLabel: "∞",
      tone: "rgba(251,191,36,0.95)", // amber/highlight
    },
  }[tier];

  const dialLen = 220;
  const dialOffset = dialLen - dialLen * cfg.dialPct;

  return (
    <div
      className={
        "relative grid grid-cols-3 gap-3 rounded-xl border border-border bg-elevated/40 p-3 " +
        className
      }
      aria-hidden
    >
      {/* Sync dial */}
      <div className="flex flex-col items-center">
        <div className="relative size-[68px]">
          <svg viewBox="0 0 80 80" className="size-full -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="6"
            />
            <circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              stroke={cfg.tone}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={dialLen}
              strokeDashoffset={dialOffset}
              style={{
                filter: `drop-shadow(0 0 6px ${cfg.tone})`,
              }}
            />
          </svg>
          {/* Pulsing tick — speed = sync interval cadence */}
          <span
            className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: cfg.tone,
              boxShadow: `0 0 10px ${cfg.tone}`,
              animation: `tick ${cfg.tickSec}s ease-in-out infinite`,
            }}
          />
        </div>
        <p className="mt-1.5 text-[9.5px] font-semibold uppercase tracking-wider text-text-secondary">
          Sync
        </p>
      </div>

      {/* Connector dots */}
      <div className="flex flex-col items-center">
        <div className="grid h-[68px] w-full grid-cols-6 place-items-center gap-1">
          {Array.from({ length: cfg.maxDots }).map((_, i) => {
            const on = i < cfg.dots;
            return (
              <span
                key={i}
                className="size-1.5 rounded-full transition"
                style={{
                  background: on ? cfg.tone : "rgba(255,255,255,0.08)",
                  boxShadow: on ? `0 0 4px ${cfg.tone}` : "none",
                }}
              />
            );
          })}
        </div>
        <p className="mt-1.5 text-[9.5px] font-semibold uppercase tracking-wider text-text-secondary">
          Apps
        </p>
      </div>

      {/* History bar */}
      <div className="flex flex-col items-center">
        <div className="relative h-[68px] w-full overflow-hidden rounded-md border border-white/10 bg-white/[0.03]">
          {/* Faint timeline ticks */}
          <div className="absolute inset-0 flex items-end justify-between px-1 pb-1 opacity-40">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="h-1.5 w-px bg-white/30" />
            ))}
          </div>
          {/* Filled history extent */}
          <div
            className="absolute inset-y-0 left-0"
            style={{
              width: `${cfg.historyPct * 100}%`,
              background: `linear-gradient(90deg, ${cfg.tone} 0%, transparent 110%)`,
              opacity: 0.55,
            }}
          />
          <span
            className="absolute right-1.5 top-1.5 rounded-sm bg-bg-base/70 px-1 text-[9px] font-mono text-foreground/85 backdrop-blur-sm"
          >
            {cfg.historyLabel}
          </span>
        </div>
        <p className="mt-1.5 text-[9.5px] font-semibold uppercase tracking-wider text-text-secondary">
          History
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pricing — hero ladder showing the three tiers as ascending speed/scope    */
/* -------------------------------------------------------------------------- */
export function TierLadder({ className = "" }: Cls) {
  const rows = [
    { name: "Starter", w: "34%", tone: "rgba(156,214,255,0.7)", note: "4h · 5 apps · 90d" },
    { name: "Growth", w: "66%", tone: "rgba(255,225,204,0.85)", note: "1h · 20 apps · 365d" },
    { name: "Command", w: "100%", tone: "rgba(251,191,36,0.9)", note: "15m · ∞ apps · ∞ history" },
  ];
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border border-border bg-[radial-gradient(ellipse_at_right,_rgba(255,225,204,0.08),_transparent_60%)] p-5 " +
        className
      }
      aria-hidden
    >
      {/* Faint axis */}
      <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
        <span>Slower · narrower</span>
        <span>Faster · wider</span>
      </div>
      <div className="space-y-2.5">
        {rows.map((r, i) => (
          <div key={r.name} className="flex items-center gap-3">
            <span className="w-[64px] shrink-0 text-[11px] font-semibold text-foreground/85">
              {r.name}
            </span>
            <div className="relative h-6 flex-1 overflow-hidden rounded-md border border-white/10 bg-white/[0.03]">
              <div
                className="h-full rounded-md"
                style={{
                  width: r.w,
                  background: `linear-gradient(90deg, ${r.tone} 0%, transparent 130%)`,
                  boxShadow: `0 0 18px -4px ${r.tone}`,
                  animation: `dial-fill 1.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s both`,
                }}
              />
              {/* moving radar sweep highlight */}
              <span
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/[0.18] to-transparent"
                style={{
                  animation: `sheen ${5 + i}s ease-in-out infinite`,
                }}
              />
            </div>
            <span className="hidden w-[150px] shrink-0 text-right text-[10.5px] font-mono text-text-secondary sm:inline">
              {r.note}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why — hero "loop" scene: Spine → Memory → Twin → Approval → Action        */
/* -------------------------------------------------------------------------- */
export function WhyLoopScene({ className = "" }: Cls) {
  const nodes = [
    { label: "Spine", angle: -90 },
    { label: "Memory", angle: -18 },
    { label: "Twin", angle: 54 },
    { label: "Approval", angle: 126 },
    { label: "Action", angle: 198 },
  ];
  return (
    <div
      className={
        "relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border " +
        "bg-[radial-gradient(ellipse_at_center,_rgba(255,225,204,0.10),_transparent_60%)] " +
        className
      }
      aria-hidden
    >
      {/* Grid */}
      <span
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Orbit ring */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative aspect-square h-[88%]">
          <svg viewBox="0 0 200 200" className="absolute inset-0 size-full text-brand-accent/40">
            <circle
              cx="100"
              cy="100"
              r="78"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeDasharray="2 5"
            />
          </svg>

          {/* Sweeping radar arc */}
          <div className="absolute inset-0 origin-center animate-[radar-sweep_14s_linear_infinite]">
            <svg viewBox="0 0 200 200" className="size-full">
              <defs>
                <linearGradient id="radarG" x1="100" y1="100" x2="200" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(255,225,204,0)" />
                  <stop offset="100%" stopColor="rgba(255,225,204,0.55)" />
                </linearGradient>
              </defs>
              <path
                d="M100 100 L178 100 A78 78 0 0 0 156 45 Z"
                fill="url(#radarG)"
                opacity="0.55"
              />
            </svg>
          </div>

          {/* Nodes */}
          {nodes.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const r = 39;
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  animation: `float-y ${4 + (i % 3)}s ease-in-out ${i * 0.3}s infinite`,
                }}
              >
                <div className="flex items-center gap-1.5 rounded-md border border-white/15 bg-bg-base/70 px-2 py-1 text-[11px] font-semibold text-foreground/90 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.6)] backdrop-blur-sm">
                  <span
                    className="size-1.5 rounded-full bg-brand-accent"
                    style={{ boxShadow: "0 0 8px rgba(255,225,204,0.8)" }}
                  />
                  {n.label}
                </div>
              </div>
            );
          })}

          {/* Center label */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
              The Loop
            </span>
            <span className="text-[12.5px] font-semibold text-foreground">compounds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why — small per-pillar visuals                                            */
/* -------------------------------------------------------------------------- */

export function WhyMemoryViz({ className = "" }: Cls) {
  // Stacked layers that grow rightwards — Memory never resets
  const rows = [
    { w: "55%", t: "Mon" },
    { w: "68%", t: "Tue" },
    { w: "78%", t: "Wed" },
    { w: "88%", t: "Thu" },
    { w: "100%", t: "Today" },
  ];
  return (
    <div className={"mt-4 space-y-1.5 " + className} aria-hidden>
      {rows.map((r, i) => (
        <div key={r.t} className="flex items-center gap-2">
          <span className="w-10 text-[9.5px] font-mono uppercase tracking-wider text-text-secondary">
            {r.t}
          </span>
          <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/[0.04]">
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: r.w,
                background: "linear-gradient(90deg, rgba(255,225,204,0.85), rgba(255,225,204,0.25))",
                animation: `dial-fill 1.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s both`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function WhyTwinViz({ className = "" }: Cls) {
  // Three signal chips merging into one proposal pill
  return (
    <div className={"mt-4 flex items-center gap-2 " + className} aria-hidden>
      <div className="flex flex-1 flex-col gap-1">
        {["Truth", "Context", "Summary"].map((s, i) => (
          <span
            key={s}
            className="rounded-sm border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-foreground/80"
            style={{ animation: `float-y 4s ease-in-out ${i * 0.4}s infinite` }}
          >
            {s}
          </span>
        ))}
      </div>
      <span className="text-text-secondary">→</span>
      <div className="relative">
        <span
          className="absolute -inset-2 rounded-md bg-brand-accent/25 blur-md animate-[pulse-soft_3.6s_ease-in-out_infinite]"
        />
        <span className="relative inline-flex items-center gap-1.5 rounded-md border border-brand-accent/40 bg-brand-accent/10 px-2.5 py-1 text-[10.5px] font-semibold text-foreground">
          <span className="size-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(255,225,204,0.9)]" />
          Twin proposes
        </span>
      </div>
    </div>
  );
}

export function WhyApprovalViz({ className = "" }: Cls) {
  // Mini approval gate
  return (
    <div className={"mt-4 rounded-md border border-white/10 bg-white/[0.03] p-2.5 " + className} aria-hidden>
      <div className="flex items-center justify-between">
        <span className="text-[10.5px] text-foreground/85">Send check-in to PM</span>
        <span className="rounded-sm border border-brand-highlight/30 bg-brand-highlight/10 px-1.5 text-[9.5px] font-semibold text-brand-highlight">
          92%
        </span>
      </div>
      <div className="mt-2 flex items-center gap-1.5">
        <span className="rounded-sm bg-brand-accent px-2 py-0.5 text-[9.5px] font-semibold text-bg-base">
          Approve
        </span>
        <span className="rounded-sm border border-white/15 px-2 py-0.5 text-[9.5px] font-semibold text-foreground/80">
          Edit
        </span>
        <span className="rounded-sm border border-white/15 px-2 py-0.5 text-[9.5px] font-semibold text-foreground/60">
          Reject
        </span>
        <span className="ml-auto text-[9.5px] text-text-secondary">Audit ✓</span>
      </div>
    </div>
  );
}

export function WhyLoopMiniViz({ className = "" }: Cls) {
  // Tiny circular ring of 5 dots
  const dots = ["S", "M", "T", "A", "L"];
  return (
    <div className={"mt-4 flex items-center justify-between gap-1.5 " + className} aria-hidden>
      {dots.map((d, i) => (
        <div key={d + i} className="flex items-center gap-1.5">
          <span
            className="grid size-5 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-[9px] font-semibold text-foreground/80"
            style={{ animation: `tick ${2 + i * 0.3}s ease-in-out infinite` }}
          >
            {d}
          </span>
          {i < dots.length - 1 && <span className="text-text-secondary text-[10px]">→</span>}
        </div>
      ))}
    </div>
  );
}
