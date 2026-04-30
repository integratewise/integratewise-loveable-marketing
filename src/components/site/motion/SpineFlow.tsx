/**
 * SpineFlow — animated connector cluster → Adaptive Spine → Digital Memory.
 * Replaces the static Spine card on the homepage with a calm, in-view
 * animation: app chips pulse glowing lines toward the Spine node, then
 * Truth / Context / Session Summaries strands converge into a Venn
 * intersection labelled "Digital Memory".
 *
 * Motion principles: slow easing (0.3–0.6s), low motion distance, plays
 * once when scrolled into view (no constant looping). A subtle, infinite
 * pulse on the connector lines reinforces "ongoing sync".
 */
import { motion } from "framer-motion";
import { Network, Database, Layers, Brain, MessageSquareOff } from "lucide-react";
import { CONNECTOR_LOGOS } from "@/components/site/ConnectorMarquee";

const LEFT_APPS = CONNECTOR_LOGOS.slice(0, 3);
const RIGHT_APPS = CONNECTOR_LOGOS.slice(3, 6);

export function SpineFlow() {
  return (
    <div className="card-iw p-8">
      {/* ---------- Apps → Spine ---------- */}
      <div className="relative grid grid-cols-3 items-center gap-6">
        {/* Left apps */}
        <div className="relative z-10 flex flex-col gap-3">
          {LEFT_APPS.map((l, i) => (
            <AppChip key={l.name} src={l.src} name={l.name} delay={i * 0.1} />
          ))}
        </div>

        {/* Spine node */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.div
            className="grid size-24 place-items-center rounded-full border border-brand-highlight/40 text-brand-accent"
            style={{ background: "var(--gradient-orb-peach)" }}
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Network size={32} />
          </motion.div>
          <span className="mt-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground">
            Spine
          </span>
        </div>

        {/* Right apps */}
        <div className="relative z-10 flex flex-col gap-3">
          {RIGHT_APPS.map((l, i) => (
            <AppChip key={l.name} src={l.src} name={l.name} delay={i * 0.1 + 0.05} />
          ))}
        </div>

        {/* Connector lines (SVG overlay) */}
        <ConnectorLines />
      </div>

      {/* ---------- Schema chips growing ---------- */}
      <SchemaChips />

      {/* ---------- Truth / Context / Sessions → Digital Memory ---------- */}
      <TriadConvergence />
    </div>
  );
}

/* ------------------------------------------------------------------ */

function AppChip({ src, name, delay }: { src: string; name: string; delay: number }) {
  return (
    <motion.div
      className="flex items-center gap-2 rounded-lg border border-border bg-white/[0.03] px-3 py-2"
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      <img src={src} alt="" aria-hidden className="h-5 w-auto" />
      <span className="text-[12.5px] font-medium text-foreground/90">{name}</span>
    </motion.div>
  );
}

/**
 * SVG connector lines from app chips to the Spine node.
 * Uses a subtle gradient stroke + an infinite dash-offset animation
 * to imply continuous sync without being flashy.
 */
function ConnectorLines() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="spine-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="rgba(255,225,204,0.0)" />
          <stop offset="50%" stopColor="rgba(255,225,204,0.65)" />
          <stop offset="100%" stopColor="rgba(255,225,204,0.0)" />
        </linearGradient>
      </defs>
      {[
        { d: "M 12 18 Q 35 18, 50 50" },
        { d: "M 12 50 Q 35 50, 50 50" },
        { d: "M 12 82 Q 35 82, 50 50" },
        { d: "M 88 18 Q 65 18, 50 50" },
        { d: "M 88 50 Q 65 50, 50 50" },
        { d: "M 88 82 Q 65 82, 50 50" },
      ].map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          fill="none"
          stroke="url(#spine-line)"
          strokeWidth={0.4}
          strokeDasharray="2 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: "easeOut" }}
          style={{
            animation: `spine-pulse 3.5s linear infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes spine-pulse {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -12; }
        }
      `}</style>
    </svg>
  );
}

/**
 * "Spine grows along with you" — visual progression below uses a Day 1 →
 * Day 30 → Day 90 metaphor instead of raw schema column names. Internal
 * field-name lists used to live here; they were removed because they
 * leaked engineer-facing vocabulary into public copy.
 */

function SchemaChips() {
  // "Spine grows along with you" — day 1 → day 30 → day 90 progression.
  // Replaces the old raw schema-row visualization, which exposed internal
  // vocabulary and engineer-facing detail.
  const stages = [
    { label: "Day 1", sub: "Accounts, tasks, upcoming work", width: 35 },
    { label: "Day 30", sub: "Patterns, owners, relationships", width: 65 },
    { label: "Day 90", sub: "Living memory of how you operate", width: 100 },
  ];
  return (
    <div className="mt-6 rounded-xl border border-border bg-white/[0.02] p-5">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
        Spine grows along with you
      </div>
      <div className="mt-4 space-y-3">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            <div className="w-16 shrink-0 text-[12px] font-semibold text-foreground">{s.label}</div>
            <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/[0.04]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.width}%` }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.18, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-brand-accent/70 to-brand-highlight/70"
              />
            </div>
            <div className="hidden w-56 shrink-0 text-[11.5px] text-text-secondary sm:block">
              {s.sub}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[12.5px] text-text-secondary">
        Not an ETL dump. A living memory that earns its depth.
      </p>
    </div>
  );
}

/**
 * Truth / Context / Session Summaries strands converging into a Venn-like
 * intersection labelled "Digital Memory". Each strand keeps its colour at
 * the intersection — meet, don't mix. A "raw AI chat" icon stays dimmed
 * outside the circle to encode "Raw AI chat never writes directly into Memory."
 */
function TriadConvergence() {
  return (
    <div className="mt-6 rounded-xl border border-border bg-white/[0.02] p-5">
      <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
        {/* Left labels */}
        <div className="grid gap-2">
          <Strand icon={Database} label="Truth" sub="What's actually happening" tone="peach" />
          <Strand icon={Layers} label="Context" sub="Why it's happening" tone="purple" />
          <Strand icon={Brain} label="Session Summaries" sub="Governed AI knowledge" tone="amber" />
        </div>

        {/* Venn intersection */}
        <div className="relative mx-auto h-32 w-32">
          <motion.span
            className="absolute left-2 top-2 size-20 rounded-full"
            style={{ background: "rgba(255,225,204,0.22)" }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.span
            className="absolute right-2 top-2 size-20 rounded-full"
            style={{ background: "rgba(167,139,250,0.22)" }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.span
            className="absolute bottom-0 left-1/2 size-20 -translate-x-1/2 rounded-full"
            style={{ background: "rgba(251,191,36,0.18)" }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 grid place-items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <span className="rounded-full bg-bg-surface/90 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-card">
              Digital Memory
            </span>
          </motion.div>
        </div>

        {/* Right: raw AI chat dimmed outside */}
        <motion.div
          className="flex items-center gap-2 rounded-lg border border-border/60 bg-white/[0.02] p-3 opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <MessageSquareOff size={16} className="text-text-secondary" />
          <div>
            <div className="text-[12.5px] font-semibold text-foreground/80">Raw AI chat</div>
            <div className="text-[11px] text-text-secondary">Never writes into Memory</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Strand({
  icon: Icon,
  label,
  sub,
  tone,
}: {
  icon: typeof Database;
  label: string;
  sub: string;
  tone: "peach" | "purple" | "amber";
}) {
  const ring =
    tone === "peach"
      ? "border-brand-accent/40 text-brand-accent"
      : tone === "purple"
        ? "border-purple-300/40 text-purple-200"
        : "border-brand-highlight/40 text-brand-highlight";
  return (
    <div className={`flex items-center gap-2.5 rounded-lg border ${ring} bg-white/[0.02] px-3 py-2`}>
      <Icon size={16} />
      <div className="min-w-0">
        <div className="text-[13px] font-semibold text-foreground">{label}</div>
        <div className="text-[11.5px] text-text-secondary">{sub}</div>
      </div>
    </div>
  );
}
