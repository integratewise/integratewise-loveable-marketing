/**
 * SolutionVisuals
 * Three finished, content-rich micro-compositions used inside the
 * "Solution Overview" cards on the home page. Each one is a small,
 * self-contained scene so the card never reads as "image goes here".
 *
 * Visuals are pure CSS/SVG — no external assets, no layout shift.
 */

type Props = { className?: string };

/* -------------------------------------------------------------------------- */
/* 1. Apps plug in once — animated connector orbit around a Memory core      */
/* -------------------------------------------------------------------------- */
export function VisualConnect({ className = "" }: Props) {
  const dots = [
    { label: "S", angle: 0 },
    { label: "G", angle: 60 },
    { label: "N", angle: 120 },
    { label: "H", angle: 180 },
    { label: "T", angle: 240 },
    { label: "R", angle: 300 },
  ];
  return (
    <div
      className={
        "relative aspect-[4/3] w-full overflow-hidden border-b border-border " +
        "bg-[radial-gradient(ellipse_at_center,_rgba(255,225,204,0.10),_transparent_65%)] " +
        className
      }
    >
      {/* Faint grid */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Orbit ring */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative size-[78%]">
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 size-full text-brand-accent/40"
            aria-hidden
          >
            <circle
              cx="100"
              cy="100"
              r="78"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeDasharray="2 4"
            />
            <circle
              cx="100"
              cy="100"
              r="55"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              strokeDasharray="2 6"
            />
          </svg>

          {/* Slow rotating layer holding connector dots */}
          <div className="absolute inset-0 animate-[orbit-slow_28s_linear_infinite]">
            {dots.map((d) => {
              const rad = (d.angle * Math.PI) / 180;
              const r = 39; // % from center
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              return (
                <div
                  key={d.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="flex size-7 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] text-[10px] font-semibold text-foreground/80 backdrop-blur-sm shadow-[0_4px_14px_-6px_rgba(0,0,0,0.6)]">
                    {d.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center: Memory core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <span className="absolute -inset-3 rounded-2xl bg-brand-accent/20 blur-xl animate-[pulse-soft_3.6s_ease-in-out_infinite]" />
              <div className="relative flex h-14 items-center gap-2 rounded-xl border border-brand-accent/40 bg-[var(--bg-elevated,_rgba(20,18,28,0.85))] px-3 backdrop-blur-md">
                <span className="size-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(255,225,204,0.9)]" />
                <span className="text-[12px] font-semibold tracking-wide text-foreground">
                  Memory
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Data becomes Digital Memory — layered "memory stack" w/ live shimmer    */
/* -------------------------------------------------------------------------- */
export function VisualMemory({ className = "" }: Props) {
  const layers = [
    { label: "Truth", w: "92%", tint: "bg-white/[0.07]" },
    { label: "Context", w: "84%", tint: "bg-white/[0.06]" },
    { label: "Signals", w: "76%", tint: "bg-white/[0.05]" },
    { label: "Goals", w: "68%", tint: "bg-white/[0.04]" },
  ];
  return (
    <div
      className={
        "relative aspect-[4/3] w-full overflow-hidden border-b border-border " +
        "bg-[radial-gradient(ellipse_at_top,_rgba(199,182,255,0.12),_transparent_60%)] " +
        className
      }
    >
      {/* Soft moving sheen */}
      <span
        aria-hidden
        className="absolute inset-y-0 -left-1/3 w-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent animate-[sheen_6s_ease-in-out_infinite]"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6">
        {layers.map((l, i) => (
          <div
            key={l.label}
            className={`flex h-7 items-center justify-between rounded-md border border-white/10 ${l.tint} px-2.5 text-[10.5px] font-medium text-foreground/80`}
            style={{ width: l.w, animation: `float-y 5s ease-in-out ${i * 0.4}s infinite` }}
          >
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-brand-accent/70" />
              {l.label}
            </span>
            <span className="font-mono text-[10px] text-text-secondary">
              {String(128 - i * 17).padStart(3, "0")}
            </span>
          </div>
        ))}

        {/* Bottom: "Digital Memory" label */}
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-2.5 py-0.5 text-[10.5px] font-semibold text-foreground">
          <span className="size-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(255,225,204,0.9)]" />
          Digital Memory
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Workspace + Twin — mini workbench card with a Twin proposal             */
/* -------------------------------------------------------------------------- */
export function VisualWorkbench({ className = "" }: Props) {
  return (
    <div
      className={
        "relative aspect-[4/3] w-full overflow-hidden border-b border-border " +
        "bg-[radial-gradient(ellipse_at_bottom,_rgba(156,214,255,0.12),_transparent_60%)] " +
        className
      }
    >
      <div className="absolute inset-0 p-4">
        {/* Window chrome */}
        <div className="flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="ml-2 text-[10px] font-medium text-text-secondary">
              Workspace · Acme Corp
            </span>
          </div>

          {/* Body */}
          <div className="flex flex-1 gap-2 p-2.5">
            {/* Left rail */}
            <div className="hidden w-[28%] flex-col gap-1 sm:flex">
              {["Truth", "Context", "Signals"].map((r) => (
                <div
                  key={r}
                  className="rounded-sm border border-white/10 bg-white/[0.03] px-2 py-1 text-[9.5px] text-foreground/70"
                >
                  {r}
                </div>
              ))}
            </div>

            {/* Right: Twin proposal */}
            <div className="flex-1 rounded-md border border-brand-accent/30 bg-brand-accent/5 p-2.5">
              <div className="flex items-center gap-1.5">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-accent/70 opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand-accent" />
                </span>
                <span className="text-[10px] font-semibold text-foreground">
                  Twin proposes
                </span>
                <span className="ml-auto rounded-sm border border-brand-highlight/30 bg-brand-highlight/10 px-1.5 py-px text-[9px] font-semibold text-brand-highlight">
                  92%
                </span>
              </div>
              <p className="mt-1.5 text-[10.5px] leading-snug text-foreground/85">
                Renewal at risk — usage down 38%. Draft outreach to CSM owner.
              </p>
              <div className="mt-2 flex items-center gap-1.5">
                <span className="rounded-sm bg-brand-accent px-2 py-0.5 text-[9.5px] font-semibold text-bg-base">
                  Approve
                </span>
                <span className="rounded-sm border border-white/15 px-2 py-0.5 text-[9.5px] font-semibold text-foreground/80">
                  Edit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
