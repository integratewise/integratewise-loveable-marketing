import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { scrollToId } from "@/lib/scroll";

/**
 * Global hash-scroll handler.
 *
 * Smoothly scrolls to `#section-id` whenever the URL hash changes (router
 * navigation, header dropdown click, in-page anchor, or back/forward),
 * accounting for the fixed header so the section title isn't hidden under it.
 */
export function HashScroll() {
  const { location } = useRouterState();
  const last = useRef<string | null>(null);

  useEffect(() => {
    const hash = location.hash || window.location.hash.replace(/^#/, "");
    const clean = hash.replace(/^#/, "");

    // Always run after route mount/transition; coalesce repeats.
    if (clean === last.current && clean === "") return;
    last.current = clean;

    if (!clean) return;

    // Wait for the new route's content to lay out (RouteTransition fades in).
    let raf1 = 0;
    let raf2 = 0;
    let timeout = 0;
    const run = () => scrollToId(clean, { behavior: "smooth" });

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(run);
    });
    timeout = window.setTimeout(run, 200);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timeout);
    };
  }, [location.pathname, location.hash]);

  // Catch back/forward hash-only changes that don't trigger a router state update.
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      scrollToId(id, { behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return null;
}
