import { CONNECTOR_LOGOS } from "./ConnectorMarquee";
import { SpineLogo } from "./SpineLogo";

interface OrbitProps {
  size?: number;
  className?: string;
}

/**
 * Concentric rings of connector logos drifting around a central Spine glyph.
 * Background visual for hero sections. Pauses under prefers-reduced-motion.
 */
export function ConnectorOrbit({ size = 720, className }: OrbitProps) {
  const inner = CONNECTOR_LOGOS.slice(0, 6);
  const outer = CONNECTOR_LOGOS.slice(6, 12);

  return (
    <div
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className ?? ""}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,225,204,0.18) 0%, rgba(251,191,36,0.10) 22%, rgba(255,225,204,0) 60%)",
          filter: "blur(20px)",
        }}
      />

      {/* Outer ring */}
      <Ring radius={size / 2 - 36} duration={90} reverse logos={outer} />
      {/* Inner ring */}
      <Ring radius={size / 3 + 10} duration={60} logos={inner} />

      {/* Center node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="flex size-16 items-center justify-center rounded-2xl border border-brand-accent/40"
          style={{
            background: "linear-gradient(180deg, rgba(255,225,204,0.18), rgba(255,225,204,0.04))",
            boxShadow: "0 0 60px rgba(255,225,204,0.25), 0 0 120px rgba(251,191,36,0.18)",
          }}
        >
          <SpineLogo className="h-7 w-auto text-foreground" />
        </div>
      </div>

      {/* Faint guide rings */}
      <RingGuide radius={size / 3 + 10} />
      <RingGuide radius={size / 2 - 36} />
    </div>
  );
}

function Ring({
  radius,
  duration,
  logos,
  reverse = false,
}: {
  radius: number;
  duration: number;
  logos: typeof CONNECTOR_LOGOS;
  reverse?: boolean;
}) {
  const count = logos.length;
  return (
    <div
      className="orbit-ring absolute left-1/2 top-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
        animation: `orbit-rotate ${duration}s linear infinite${reverse ? " reverse" : ""}`,
      }}
    >
      {logos.map((logo, i) => {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * radius + radius;
        const y = Math.sin(angle) * radius + radius;
        return (
          <div
            key={logo.name}
            className="orbit-counter absolute flex size-12 items-center justify-center rounded-xl border border-white/10 bg-[var(--bg-elevated)]/70 backdrop-blur-sm"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              animation: `orbit-counter ${duration}s linear infinite${reverse ? " reverse" : ""}`,
              boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
            }}
          >
            <img src={logo.src} alt="" aria-hidden className="h-6 w-auto" />
          </div>
        );
      })}
    </div>
  );
}

function RingGuide({ radius }: { radius: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.05]"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
    />
  );
}
