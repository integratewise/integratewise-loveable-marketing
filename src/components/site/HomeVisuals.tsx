/**
 * HomeVisuals — finished, content-rich micro-scenes used across the home
 * page so no section reads as "title + paragraph + paragraph". Each visual
 * is pure CSS/SVG, animation-light, and self-explanatory at a glance.
 */

type Props = { className?: string };

/* ============================================================ */
/* CORE PROBLEM — three pain visuals                            */
/* ============================================================ */

/** Pain 1 — "Data scattered." Twelve scattered tabs/chips. */
export function PainScatter({ className = "" }: Props) {
  const tabs = [
    { l: "Salesforce", t: 8, x: 6 },
    { l: "Gmail", t: 18, x: 58 },
    { l: "Slack", t: 30, x: 22 },
    { l: "Stripe", t: 44, x: 70 },
    { l: "Notion", t: 56, x: 10 },
    { l: "Jira", t: 68, x: 60 },
    { l: "HubSpot", t: 80, x: 30 },
    { l: "Zendesk", t: 14, x: 78 },
  ];
  return (
    <div className={"relative h-32 w-full overflow-hidden rounded-lg border border-border bg-white/[0.02] " + className}>
      {tabs.map((tb, i) => (
        <span
          key={tb.l}
          className="absolute rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10.5px] font-medium text-foreground/80 backdrop-blur-sm shadow-[0_4px_12px_-6px_rgba(0,0,0,0.6)]"
          style={{
            top: `${tb.t}%`,
            left: `${tb.x}%`,
            animation: `float-y 4.5s ease-in-out ${i * 0.25}s infinite`,
            transform: `rotate(${(i % 2 ? -1 : 1) * 2}deg)`,
          }}
        >
          {tb.l}
        </span>
      ))}
      {/* Cursor scrubbing line */}
      <span
        aria-hidden
        className="absolute inset-y-0 w-px bg-brand-accent/30 animate-[scrub_5s_ease-in-out_infinite]"
      />
    </div>
  );
}

/** Pain 2 — "Intelligence blind." A bar chart with most bars greyed/missing. */
export function PainBlind({ className = "" }: Props) {
  const bars = [60, 0, 35, 0, 0, 80, 0, 25, 0, 50, 0, 0];
  return (
    <div className={"relative h-32 w-full overflow-hidden rounded-lg border border-border bg-white/[0.02] p-3 " + className}>
      <div className="flex h-full items-end gap-1.5">
        {bars.map((b, i) => (
          <div
            key={i}
            className={
              "flex-1 rounded-sm " +
              (b === 0
                ? "h-1 bg-white/10"
                : "bg-gradient-to-t from-brand-accent/30 to-brand-accent/60")
            }
            style={{ height: b === 0 ? "4px" : `${b}%` }}
          />
        ))}
      </div>
      {/* "Late signal" tag */}
      <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-sm border border-destructive/40 bg-destructive/10 px-1.5 py-0.5 text-[9.5px] font-semibold text-destructive">
        <span className="size-1 rounded-full bg-destructive animate-pulse" /> signal late
      </span>
    </div>
  );
}

/** Pain 3 — "Automation rogue." A bot fires, no approval. */
export function PainRogue({ className = "" }: Props) {
  return (
    <div className={"relative h-32 w-full overflow-hidden rounded-lg border border-border bg-white/[0.02] p-3 " + className}>
      <div className="flex h-full flex-col justify-center gap-1.5">
        {[
          { t: "Auto-email sent", ok: false },
          { t: "Stage moved → Won", ok: false },
          { t: "Invoice generated", ok: false },
        ].map((r, i) => (
          <div
            key={r.t}
            className="flex items-center gap-2 rounded-sm border border-destructive/30 bg-destructive/[0.06] px-2 py-1 text-[10.5px] text-foreground/85"
            style={{ animation: `flash-red 3s ease-in-out ${i * 0.5}s infinite` }}
          >
            <span className="size-1.5 rounded-full bg-destructive" />
            <span className="flex-1">{r.t}</span>
            <span className="font-mono text-[9.5px] text-destructive">no approval</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================ */
/* THREE MEMORY SCOPES — concentric private→shared→org diagram  */
/* ============================================================ */

export function ScopeUser({ className = "" }: Props) {
  return (
    <div className={"relative h-24 w-full overflow-hidden rounded-lg bg-white/[0.02] border border-border " + className}>
      <svg viewBox="0 0 200 100" className="absolute inset-0 size-full" aria-hidden>
        <defs>
          <radialGradient id="ru" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,225,204,0.45)" />
            <stop offset="100%" stopColor="rgba(255,225,204,0)" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="50" r="40" fill="url(#ru)" />
        <circle cx="100" cy="50" r="14" fill="rgba(255,225,204,0.85)" />
        <text x="100" y="53" textAnchor="middle" className="fill-bg-base" fontSize="9" fontWeight="700">YOU</text>
      </svg>
      <span className="absolute bottom-1.5 left-2 text-[9.5px] font-mono text-text-secondary">scope: private</span>
    </div>
  );
}

export function ScopeWork({ className = "" }: Props) {
  const team = [0, 1, 2, 3, 4];
  return (
    <div className={"relative h-24 w-full overflow-hidden rounded-lg bg-white/[0.02] border border-border " + className}>
      <svg viewBox="0 0 200 100" className="absolute inset-0 size-full" aria-hidden>
        <circle cx="100" cy="50" r="38" fill="none" stroke="rgba(255,225,204,0.35)" strokeWidth="0.6" strokeDasharray="2 3" />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative size-20">
          {team.map((_, i) => {
            const a = (i / team.length) * 2 * Math.PI - Math.PI / 2;
            const x = 50 + 36 * Math.cos(a);
            const y = 50 + 36 * Math.sin(a);
            return (
              <span
                key={i}
                className="absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/70 shadow-[0_0_8px_rgba(255,225,204,0.6)]"
                style={{ left: `${x}%`, top: `${y}%`, animation: `pulse-soft 3s ease-in-out ${i * 0.3}s infinite` }}
              />
            );
          })}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-brand-accent/15 border border-brand-accent/40 px-1.5 py-0.5 text-[8.5px] font-semibold text-foreground">
            TEAM
          </span>
        </div>
      </div>
      <span className="absolute bottom-1.5 left-2 text-[9.5px] font-mono text-text-secondary">scope: shared</span>
    </div>
  );
}

export function ScopeOrg({ className = "" }: Props) {
  return (
    <div className={"relative h-24 w-full overflow-hidden rounded-lg bg-white/[0.02] border border-border " + className}>
      <div className="absolute inset-0 flex items-end justify-center gap-1 px-6 pb-4">
        {[12, 18, 14, 22, 16, 20, 13, 19, 15].map((h, i) => (
          <span
            key={i}
            className="w-2 rounded-sm bg-gradient-to-t from-brand-accent/20 to-brand-accent/70"
            style={{ height: `${h * 2.2}px`, animation: `float-y 4s ease-in-out ${i * 0.15}s infinite` }}
          />
        ))}
      </div>
      <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-1.5 py-0.5 text-[9.5px] font-semibold text-foreground">
        ORG
      </span>
      <span className="absolute bottom-1.5 left-2 text-[9.5px] font-mono text-text-secondary">scope: governed</span>
    </div>
  );
}

/* ============================================================ */
/* HOW IT WORKS — 5 step micro-visuals                          */
/* ============================================================ */

const stepBox =
  "relative h-20 w-full overflow-hidden rounded-md border border-border bg-white/[0.02]";

export function StepMemory({ className = "" }: Props) {
  return (
    <div className={stepBox + " " + className}>
      {/* Stacked memory layers */}
      <div className="absolute inset-0 flex flex-col justify-center gap-1 px-3">
        {["Truth", "Context", "Signals"].map((l, i) => (
          <div
            key={l}
            className="flex items-center justify-between rounded-sm border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[9px] text-foreground/80"
            style={{ width: `${92 - i * 10}%`, animation: `float-y 5s ease-in-out ${i * 0.4}s infinite` }}
          >
            <span>{l}</span>
            <span className="size-1 rounded-full bg-brand-accent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function StepWorkbench({ className = "" }: Props) {
  return (
    <div className={stepBox + " " + className}>
      <div className="absolute inset-1.5 rounded-sm border border-white/10 bg-white/[0.03]">
        <div className="flex items-center gap-1 border-b border-white/10 px-1.5 py-1">
          <span className="size-1 rounded-full bg-white/20" />
          <span className="size-1 rounded-full bg-white/20" />
          <span className="size-1 rounded-full bg-white/20" />
          <span className="ml-1 text-[8px] text-text-secondary">workspace</span>
        </div>
        <div className="flex gap-1 p-1.5">
          <div className="h-8 w-1/3 rounded-sm bg-white/[0.04]" />
          <div className="h-8 flex-1 rounded-sm bg-brand-accent/15 border border-brand-accent/30" />
        </div>
      </div>
    </div>
  );
}

export function StepTwin({ className = "" }: Props) {
  return (
    <div className={stepBox + " " + className}>
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <span className="absolute -inset-2 rounded-full bg-brand-accent/20 blur-md animate-[pulse-soft_3s_ease-in-out_infinite]" />
          <div className="relative inline-flex items-center gap-1.5 rounded-full border border-brand-accent/40 bg-bg-base/80 px-2 py-1 text-[9.5px] font-semibold text-foreground backdrop-blur-sm">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-accent/70 opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-brand-accent" />
            </span>
            Twin proposes
          </div>
        </div>
      </div>
    </div>
  );
}

export function StepApproval({ className = "" }: Props) {
  return (
    <div className={stepBox + " " + className}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
        <span className="text-[9px] font-mono uppercase tracking-wider text-text-secondary">
          approval gate
        </span>
        <div className="flex items-center gap-1.5">
          <span className="rounded-sm bg-brand-accent px-2 py-0.5 text-[9px] font-bold text-bg-base">
            Approve
          </span>
          <span className="rounded-sm border border-white/15 px-2 py-0.5 text-[9px] font-semibold text-foreground/80">
            Edit
          </span>
          <span className="rounded-sm border border-white/15 px-2 py-0.5 text-[9px] font-semibold text-foreground/60">
            Deny
          </span>
        </div>
      </div>
    </div>
  );
}

export function StepLoop({ className = "" }: Props) {
  return (
    <div className={stepBox + " " + className}>
      <div className="absolute inset-0 grid place-items-center">
        <svg viewBox="0 0 60 60" className="size-12 text-brand-accent" aria-hidden>
          <path
            d="M30 8 a22 22 0 1 1 -22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-[orbit-slow_6s_linear_infinite]"
            style={{ transformOrigin: "center" }}
          />
          <polygon points="30,4 38,10 30,16" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
