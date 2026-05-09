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
 *
 * IMPORTANT — the page lives inside a framer-motion <AnimatePresence mode="wait">
 * (see RouteTransition). When the route changes, this effect fires BEFORE the
 * new page mounts (the old one is still exiting). To handle that we:
 *  1. scan immediately (covers initial load & pages that mount synchronously),
 *  2. re-scan on the next animation frame,
 *  3. install a MutationObserver on <main> for the lifetime of this mount so
 *     any nodes added later (after exit animation) are observed/revealed too.
 * Without this, every page reached via client-side navigation stays at
 * opacity:0 because its sections never get the `is-in` class.
 */
export function MotionGlobal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    document.documentElement.classList.add("js-motion");

    const REVEAL_SELECTOR =
      "main section:not(.no-auto-reveal):not(.is-in), .reveal:not(.is-in), .reveal-fade:not(.is-in), .reveal-scale:not(.is-in), .reveal-left:not(.is-in), .reveal-right:not(.is-in)";

    const supportsIO = typeof IntersectionObserver !== "undefined";

    const observer = supportsIO
      ? new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-in");
                observer!.unobserve(entry.target);
              }
            }
          },
          { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
        )
      : null;

    const observeAll = () => {
      // Stagger indices for any new [data-stagger] containers.
      const staggerRoots = document.querySelectorAll<HTMLElement>(
        "[data-stagger]:not([data-stagger-init])",
      );
      staggerRoots.forEach((root) => {
        root.dataset.staggerInit = "1";
        root.classList.add("stagger");
        Array.from(root.children).forEach((child, i) => {
          (child as HTMLElement).style.setProperty("--i", String(i));
        });
      });

      if (!observer) {
        document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => el.classList.add("is-in"));
        return;
      }

      const targets = document.querySelectorAll(REVEAL_SELECTOR);
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Reveal anything already on screen so we don't get a flash.
        if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
          el.classList.add("is-in");
        } else {
          observer.observe(el);
        }
      });
    };

    // Initial scan.
    observeAll();

    // RouteTransition uses AnimatePresence mode="wait", so the new page mounts
    // AFTER this effect fires. Re-scan on the next frame, and again shortly
    // after, to catch nodes added during/after the exit animation.
    const raf = requestAnimationFrame(observeAll);
    const t1 = window.setTimeout(observeAll, 80);
    const t2 = window.setTimeout(observeAll, 360);

    // Catch any further DOM additions for the lifetime of this mount.
    const mainEl = document.querySelector("main") ?? document.body;
    const mo = new MutationObserver((records) => {
      let added = false;
      for (const r of records) {
        if (r.addedNodes.length) {
          added = true;
          break;
        }
      }
      if (added) observeAll();
    });
    mo.observe(mainEl, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mo.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // Re-run on every route change so newly mounted sections get observed.
  }, [pathname]);

  return null;
}
