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
}

/**
 * StickySubNav — anchor bar that sits beneath the global header on long
 * pages. Visually matches the top nav: same nav-glass shell, same pill
 * chips, with a Framer-style moving indicator pill behind the active
 * section. Highlights the section closest to the top of the viewport via
 * IntersectionObserver and smooth-scrolls with the same offset.
 *
 * Visual consistency rules (must mirror Header.tsx):
 *  - container uses `.nav-glass` rounded shell
 *  - chips use the same text size, color and hover behaviour as top nav
 *    items (text-text-secondary → foreground on hover, accent on active)
 *  - active state uses a layoutId-shared pill, not a flat color bar
 */
export function StickySubNav({ items, topOffset = 96 }: StickySubNavProps) {
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

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - topOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <div
      ref={navRef}
      className="sticky z-30 pt-2 sm:pt-3"
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
}
