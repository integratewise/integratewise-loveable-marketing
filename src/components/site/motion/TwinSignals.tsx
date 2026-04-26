/**
 * TwinSignals — read-only signal flow + Approval Gate lock.
 *
 * Wraps the Twin recommendation card on the homepage. Visualises:
 * 1. Signal dots travelling FROM Memory/Evidence INTO Twin (one-way arrows
 *    to encode read-only).
 * 2. Approval Gate icon: locked by default, briefly unlocks on hover/approve.
 * 3. Evidence + confidence fade in with a short stagger (Twin "lays out
 *    the proof").
 */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, Lock, Unlock } from "lucide-react";

interface TwinSignalsProps {
  /** Existing Twin card content to wrap */
  children: React.ReactNode;
}

export function TwinSignals({ children }: TwinSignalsProps) {
  return (
    <div className="relative">
      {/* One-way signal stream into the Twin card */}
      <SignalStream />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function SignalStream() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -top-6 left-1/2 z-0 h-6 w-40 -translate-x-1/2"
      viewBox="0 0 160 24"
    >
      <defs>
        <linearGradient id="twin-signal" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,225,204,0)" />
          <stop offset="100%" stopColor="rgba(255,225,204,0.7)" />
        </linearGradient>
      </defs>
      {[20, 60, 100, 140].map((x, i) => (
        <motion.line
          key={x}
          x1={x}
          x2={x}
          y1={0}
          y2={24}
          stroke="url(#twin-signal)"
          strokeWidth={1.2}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
        />
      ))}
    </svg>
  );
}

/**
 * Approval Gate visual: locked-by-default. Hovering "Approve" briefly
 * shows the gate opening; "Reject" leaves the lock closed.
 */
export function ApprovalGate({
  onApprove,
  onReject,
}: {
  onApprove?: () => void;
  onReject?: () => void;
}) {
  const [hover, setHover] = useState<"approve" | "reject" | null>(null);
  const open = hover === "approve";
  return (
    <div className="mt-4 flex items-center gap-3">
      <div className="flex items-center gap-2 rounded-md border border-border bg-white/[0.02] px-2.5 py-1.5">
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="open"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-1.5 text-success"
            >
              <Unlock size={13} />
              <span className="text-[11px] font-semibold uppercase tracking-wider">Gate open</span>
            </motion.span>
          ) : (
            <motion.span
              key="closed"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-1.5 text-text-secondary"
            >
              <Lock size={13} />
              <span className="text-[11px] font-semibold uppercase tracking-wider">
                Approval Gate
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <button
        type="button"
        className="btn-primary-iw !px-4 !py-2 text-[13px]"
        onMouseEnter={() => setHover("approve")}
        onMouseLeave={() => setHover(null)}
        onFocus={() => setHover("approve")}
        onBlur={() => setHover(null)}
        onClick={onApprove}
      >
        Approve
      </button>
      <button
        type="button"
        className="btn-secondary-iw !px-4 !py-2 text-[13px]"
        onMouseEnter={() => setHover("reject")}
        onMouseLeave={() => setHover(null)}
        onClick={onReject}
      >
        Reject
      </button>
      <span className="ml-auto inline-flex items-center gap-1 text-[11.5px] text-text-secondary">
        <ShieldCheck size={12} className="text-success" /> Twin reads Memory · cannot write
      </span>
    </div>
  );
}
