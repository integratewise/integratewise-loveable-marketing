/**
 * Stagger — small framer-motion helpers for "Framer-like" reveal patterns.
 *
 * <StaggerGroup>      → parent that orchestrates child stagger on view.
 * <StaggerItem>       → child that fades + translates in.
 * <Parallax y={...}>  → wraps content in a slow parallax layer; the inner
 *                       element drifts at a fraction of scroll speed.
 *
 * Designed to compose on top of the existing <Reveal /> CSS reveal so
 * that hero/section copy keeps its current behaviour while richer
 * surfaces (tables, evidence lists, action cards) get a true stagger.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  /** Seconds between each child appearing. */
  stagger?: number;
  /** Initial delay before the first child appears. */
  delay?: number;
  /** Viewport amount required before triggering. 0–1. */
  amount?: number;
  as?: "div" | "ul" | "ol" | "section";
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  amount = 0.2,
  as = "div",
}: StaggerGroupProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  /** Distance (px) the item translates from. Defaults to 12. */
  y?: number;
  x?: number;
  as?: "div" | "li" | "span" | "section" | "article";
}

const itemVariants = (y: number, x: number) => ({
  hidden: { opacity: 0, y, x },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const },
  },
});

export function StaggerItem({
  children,
  className,
  y = 12,
  x = 0,
  as = "div",
}: StaggerItemProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={itemVariants(y, x)}>
      {children}
    </MotionTag>
  );
}

interface ParallaxProps {
  children: ReactNode;
  /** Max translation in px across the scroll range. Negative = upward drift. */
  y?: number;
  className?: string;
}

/**
 * Subtle parallax — the inner content drifts as the wrapper scrolls
 * through the viewport. Use sparingly (background layers, decorative
 * orbs, logo strips behind text) to add depth without distraction.
 */
export function Parallax({ children, y = -40, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, y]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: translateY, willChange: "transform" }}>
        {children}
      </motion.div>
    </div>
  );
}
