/**
 * SpotlightCursor — Framer-style ambient cursor spotlight.
 *
 * A large, very-soft radial gradient that gently follows the cursor across
 * the page. It sits behind all content (negative-ish z but inside a fixed
 * layer) at low opacity, adding a "the page reacts to you" feel without
 * stealing attention. Disabled on coarse-pointer (touch) devices.
 */
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function SpotlightCursor() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 60, damping: 18, mass: 0.6 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[520px] w-[520px] rounded-full opacity-[0.22] mix-blend-screen blur-3xl"
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,225,204,0.55) 0%, rgba(251,191,36,0.18) 40%, rgba(255,225,204,0) 70%)",
        }}
      />
    </motion.div>
  );
}
