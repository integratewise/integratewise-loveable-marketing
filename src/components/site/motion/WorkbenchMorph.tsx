/**
 * WorkbenchMorph — wraps the static ProductFrame to add scroll-triggered
 * motion that says: "tools you use stitch into one Workbench".
 *
 * On first scroll into view, a row of small app-tool chips floats above
 * the Workbench, then snaps down into the frame (fades + translates into
 * the table area), encoding "context-switch reduction".
 *
 * The underlying ProductFrame (Workbench › Accounts table, Schema Drift
 * notice, Cognitive Layer panel, Approve/Deny buttons) is left untouched.
 */
import { motion } from "framer-motion";

const TOOL_CHIPS = [
  { name: "Tally", color: "#1c4f7c" },
  { name: "Razorpay", color: "#02042b" },
  { name: "Gmail", color: "#c5221f" },
  { name: "WhatsApp", color: "#25d366" },
  { name: "Notion", color: "#000000" },
  { name: "Sheets", color: "#0f9d58" },
];

export function WorkbenchMorph({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Floating tool chips → snap into the Workbench */}
      <div className="pointer-events-none absolute -top-10 left-0 right-0 z-10 flex flex-wrap items-center justify-center gap-2">
        {TOOL_CHIPS.map((c, i) => (
          <motion.span
            key={c.name}
            initial={{ y: -16, opacity: 0, scale: 0.9 }}
            whileInView={{
              y: [-16, -4, 28],
              opacity: [0, 1, 0],
              scale: [0.9, 1, 0.85],
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.4,
              delay: 0.1 + i * 0.12,
              times: [0, 0.4, 1],
              ease: "easeInOut",
            }}
            className="rounded-full border border-border bg-bg-surface/90 px-2.5 py-1 text-[11.5px] font-semibold text-foreground/90 backdrop-blur"
            style={{ boxShadow: `0 0 0 2px ${c.color}33` }}
          >
            {c.name}
          </motion.span>
        ))}
      </div>

      {/* The ProductFrame itself, gently revealed */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
