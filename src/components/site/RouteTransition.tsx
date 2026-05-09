/**
 * RouteTransition — Framer-style cross-fade between TanStack routes.
 *
 * Wraps <Outlet /> with AnimatePresence keyed by pathname so that page
 * content cross-fades and translates subtly when navigating. Header,
 * footer, background, and modals stay mounted (they live outside this
 * wrapper), which gives the "page shell persists, content swaps" feel.
 *
 * Direction is derived from the route group:
 *  - /platform/*     → translate up   (deeper into infrastructure)
 *  - /product/*      → translate left (across to the workbench)
 *  - /twin           → translate from the right (intelligent panel)
 *  - everything else → small fade-up
 *
 * Respects prefers-reduced-motion via framer-motion's MotionConfig in
 * __root.tsx (set there if needed). Animation timings stay in the
 * 200–320ms ease-out range to feel responsive, never bouncy.
 */
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function variantsFor(pathname: string) {
  if (pathname.startsWith("/platform")) {
    return {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -8 },
    };
  }
  if (pathname.startsWith("/product")) {
    return {
      initial: { opacity: 0, x: 24 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -12 },
    };
  }
  if (pathname.startsWith("/twin")) {
    return {
      initial: { opacity: 0, x: 32 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -16 },
    };
  }
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
  };
}

export function RouteTransition({ children }: Props) {
  const { pathname } = useLocation();
  const v = variantsFor(pathname);
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={v.initial}
        animate={v.animate}
        exit={v.exit}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
