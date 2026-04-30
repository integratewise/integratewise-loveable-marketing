import { useEffect, useState } from "react";
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
 * StickySubNav — slim anchor bar that sticks below the global header on long
 * pages (e.g. /platform). Highlights the section closest to the top of the
 * viewport using IntersectionObserver. Smooth-scrolls with the same offset.
 */
export function StickySubNav({ items, topOffset = 64 }: StickySubNavProps) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // Trigger when the section's top is just under the sticky bar.
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
      className="sticky z-30 border-b border-border/60 bg-background/80 backdrop-blur"
      style={{ top: topOffset }}
    >
      <nav
        aria-label="On this page"
        className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2"
      >
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            onClick={(e) => handleClick(e, it.id)}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-[12.5px] font-medium transition-colors",
              active === it.id
                ? "bg-brand-accent/15 text-brand-accent"
                : "text-text-secondary hover:text-foreground",
            )}
          >
            {it.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
