/**
 * ScrollScene — Framer-style sticky scroll container.
 *
 * Pin a tall outer section while the inner content reacts to scroll
 * progress (fade, scale, translate). Useful for hero/feature reveals.
 *
 *   <ScrollScene height="200vh">
 *     {(progress) => <YourPinnedContent progress={progress} />}
 *   </ScrollScene>
 *
 * `progress` is a MotionValue (0 → 1) you can pipe into useTransform.
 *
 * Also exports <StickyReveal> — a drop-in wrapper that fades + rises a
 * block as it enters the viewport, with a subtle scroll-driven scale.
 */
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollSceneProps {
  height?: string;
  className?: string;
  children: (progress: MotionValue<number>) => ReactNode;
}

export function ScrollScene({ height = "180vh", className, children }: ScrollSceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <section ref={ref} style={{ height }} className={className}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {children(scrollYProgress)}
      </div>
    </section>
  );
}

interface StickyRevealProps {
  children: ReactNode;
  className?: string;
  /** y-translation in px from which the block rises. Default 60. */
  rise?: number;
}

/**
 * Wraps a block in a scroll-driven reveal: opacity 0→1, translateY rise→0,
 * scale 0.97→1 over the first ~25% of the element's viewport scroll.
 * More cinematic than a one-shot CSS reveal.
 */
export function StickyReveal({ children, className, rise = 60 }: StickyRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 35%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [rise, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale, willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
