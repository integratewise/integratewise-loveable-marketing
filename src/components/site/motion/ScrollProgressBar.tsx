/**
 * ScrollProgressBar — Framer-style top page progress indicator.
 *
 * A 2px peach→amber gradient bar pinned to the top of the viewport that
 * fills as the user scrolls the page. Mounted once in __root.tsx so every
 * route gets it for free. Uses framer-motion's useScroll for smooth,
 * GPU-accelerated transforms (no scroll listeners on the main thread).
 */
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.3,
  });
  return (
    <motion.div
      aria-hidden
      style={{
        scaleX,
        transformOrigin: "0% 50%",
      }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-brand-accent via-brand-highlight to-brand-accent shadow-[0_0_10px_rgba(255,225,204,0.45)]"
    />
  );
}
