import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SectionNav, type SectionNavItem } from "./SectionNav";

const MIN_SECTIONS = 3;

function humanize(id: string): string {
  return (
    id
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .map((w) => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
      .join(" ")
      // Common acronyms back to readable form.
      .replace(/\bAi\b/g, "AI")
      .replace(/\bApi\b/g, "API")
      .replace(/\bFaq\b/g, "FAQ")
      .replace(/\bCta\b/g, "CTA")
  );
}

function scan(): SectionNavItem[] {
  if (typeof document === "undefined") return [];

  // Skip if a route already mounted its own <SectionNav> with curated labels.
  if (document.querySelector("[data-section-nav]")) return [];

  const main = document.querySelector("main") ?? document.body;
  const sections = main.querySelectorAll<HTMLElement>("section[id]");
  const items: SectionNavItem[] = [];
  const seen = new Set<string>();

  sections.forEach((el) => {
    const id = el.id.trim();
    if (!id || seen.has(id)) return;
    // Skip explicit opt-outs.
    if (el.dataset.navSkip !== undefined) return;
    seen.add(id);
    const label = el.dataset.navLabel?.trim() || humanize(id);
    items.push({ id, label });
  });

  return items;
}

/**
 * Auto-discovering page sub-navigation.
 *
 * On every route change, scans the current `<main>` for `<section id="...">`
 * elements and renders a sticky chip bar (via SectionNav) when 3+ are found.
 *
 * Pages can:
 *   - Add `data-nav-label="Custom"` to override the auto label.
 *   - Add `data-nav-skip` to exclude a section.
 *   - Mount their own `<SectionNav>` directly; this component will then bail.
 */
export function PageSubnav() {
  const { location } = useRouterState();
  const [items, setItems] = useState<SectionNavItem[]>([]);

  useEffect(() => {
    // Clear immediately so the previous route's SectionNav (which carries
    // `data-section-nav`) doesn't make scan() think a manual nav is present.
    setItems([]);

    // Wait for the route's content to render. Two RAFs covers most layout paints
    // (RouteTransition fades content in via framer-motion).
    let raf1 = 0;
    let raf2 = 0;
    let timeout = 0;

    const run = () => setItems(scan());

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(run);
    });
    // Safety net for slower hydration / data-driven sections.
    timeout = window.setTimeout(run, 250);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  if (items.length < MIN_SECTIONS) return null;

  return <SectionNav items={items} />;
}
