import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Site-wide scroll-reveal engine (Nexify-faithful).
 *
 * - Auto-reveals every <main> <section> on first view.
 * - Auto-reveals any element with .reveal / .reveal-fade / .reveal-scale /
 *   .reveal-left / .reveal-right.
 * - For elements with [data-stagger], assigns a CSS --i index to each direct
 *   child so the .stagger utility cascades them.
 *
 * Pure CSS + IntersectionObserver — no extra dependency, respects
 * prefers-reduced-motion via styles.css.
 */
export function MotionGlobal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Assign stagger indices to direct children of [data-stagger] containers.
    const staggerRoots = document.querySelectorAll<HTMLElement>("[data-stagger]");
    staggerRoots.forEach((root) => {
      root.classList.add("stagger");
      Array.from(root.children).forEach((child, i) => {
        (child as HTMLElement).style.setProperty("--i", String(i));
      });
    });

    if (typeof IntersectionObserver === "undefined") {
      document
        .querySelectorAll(
          "main section, .reveal, .reveal-fade, .reveal-scale, .reveal-left, .reveal-right",
        )
        .forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    const targets = document.querySelectorAll(
      "main section:not(.no-auto-reveal):not(.is-in), .reveal:not(.is-in), .reveal-fade:not(.is-in), .reveal-scale:not(.is-in), .reveal-left:not(.is-in), .reveal-right:not(.is-in)",
    );

    targets.forEach((el) => {
      // If already in viewport on mount, reveal immediately to avoid a flash.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
        el.classList.add("is-in");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
    // Re-run on every route change so newly mounted sections get observed.
  }, [pathname]);

  return null;
}
