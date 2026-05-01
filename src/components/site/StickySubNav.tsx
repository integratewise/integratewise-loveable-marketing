import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export interface SubNavItem {
  id: string;
  label: string;
}

interface StickySubNavProps {
  items: SubNavItem[];
  /** px offset where the sticky bar sits (matches header height). */
  topOffset?: number;
  /**
   * Visual variant.
   *  - "bar"  (default): horizontal pill bar beneath the global header.
   *  - "rail": vertical left-side rail panel (desktop ≥ lg). Falls back to
   *    the horizontal bar on smaller screens so mobile UX stays intact.
   */
  variant?: "bar" | "rail";
  /** Optional chip label shown at the top of the rail (e.g. "On this page"). */
  railLabel?: string;
}

/**
 * StickySubNav — anchor nav for long pages. Two visual modes:
 *
 *  • "bar" — horizontal pill row that mirrors the top header (.nav-glass
 *    shell, layoutId pill on the active item).
 *  • "rail" — dark rounded vertical panel pinned to the left side of the
 *    viewport on desktop, with a chip header, vertical link list and an
 *    accent dot + soft highlight on the active row. Designed to match the
 *    long-form section index pattern (see uploaded reference).
 *
 * Both modes share the same scroll-spy logic (IntersectionObserver) and
 * smooth-scroll handler, so behaviour is identical regardless of visual.
 */
export function StickySubNav({
  items,
  topOffset = 96,
  variant = "bar",
  railLabel = "On this page",
}: StickySubNavProps) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: `-${topOffset + 8}px 0px -65% 0px`,
        threshold: 0,
      },
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items, topOffset]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - topOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  // Horizontal bar (used on its own, or as the mobile fallback for "rail").
  const Bar = (
    <div
      ref={navRef}
      className={cn(
        "sticky z-30 pt-2 sm:pt-3",
        variant === "rail" && "lg:hidden",
      )}
      style={{ top: topOffset - 8 }}
    >
      <Container>
        <div
          className={cn(
            "nav-glass flex h-[52px] items-center px-2 transition-shadow",
            scrolled && "shadow-card",
          )}
        >
          <nav
            aria-label="On this page"
            className="relative flex w-full items-center gap-1 overflow-x-auto px-1"
          >
            {items.map((it) => {
              const isActive = active === it.id;
              return (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  onClick={(e) => handleClick(e, it.id)}
                  className={cn(
                    "relative shrink-0 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-text-secondary hover:text-foreground",
                  )}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="subnav-pill"
                        className="absolute inset-0 -z-10 rounded-lg bg-white/[0.06] ring-1 ring-inset ring-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative">{it.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </Container>
    </div>
  );

  if (variant === "bar") return Bar;

  // Left-side rail (desktop ≥ lg). Mobile uses the Bar above as fallback.
  return (
    <>
      {Bar}
      <aside
        aria-label="On this page"
        className="pointer-events-none fixed left-4 z-30 hidden lg:block xl:left-8"
        style={{ top: topOffset + 8 }}
      >
        <div
          className={cn(
            "pointer-events-auto w-[232px] rounded-2xl border border-white/10 bg-[#0E0E10]/85 p-3 backdrop-blur-xl transition-shadow",
            scrolled ? "shadow-card" : "shadow-none",
          )}
        >
          <div className="mb-2 flex items-center gap-2 px-2 pt-1">
            <span className="inline-flex h-5 items-center rounded-full bg-white/[0.06] px-2 text-[10px] font-medium uppercase tracking-[0.12em] text-text-secondary ring-1 ring-inset ring-white/10">
              {railLabel}
            </span>
          </div>
          <nav className="relative flex flex-col gap-0.5">
            {items.map((it) => {
              const isActive = active === it.id;
              return (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  onClick={(e) => handleClick(e, it.id)}
                  className={cn(
                    "group relative flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-text-secondary hover:text-foreground",
                  )}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="subnav-rail-pill"
                        className="absolute inset-0 -z-10 rounded-lg bg-white/[0.06] ring-1 ring-inset ring-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </AnimatePresence>
                  <span
                    aria-hidden
                    className={cn(
                      "h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
                      isActive
                        ? "bg-[hsl(var(--accent,28_100%_64%))] shadow-[0_0_0_3px_hsl(var(--accent,28_100%_64%)/0.18)]"
                        : "bg-white/15 group-hover:bg-white/30",
                    )}
                  />
                  <span className="relative truncate">{it.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
