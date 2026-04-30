import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface SectionNavItem {
  id: string;
  label: string;
}

/**
 * Sticky in-page nav (Pandawa-style). Scrolls smoothly to anchor IDs in the
 * current page, updates `window.location.hash`, and highlights the active
 * section based on scroll position.
 *
 * Sticks just under the global header (CSS var `--header-h`, default 84px).
 */
export function SectionNav({
  items,
  className,
}: {
  items: ReadonlyArray<SectionNavItem>;
  className?: string;
}) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  // Active-section observer based on scroll position.
  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;

    const headerOffset = 168; // header (~84) + this nav (~52) + breathing room
    const onScroll = () => {
      let current = items[0].id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - headerOffset <= 0) {
          current = it.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  // On mount, if the URL has a matching hash, smooth-scroll to it.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    if (!items.some((i) => i.id === hash)) return;
    // Wait a tick so the page has laid out.
    const t = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => clearTimeout(t);
  }, [items]);

  function go(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  }

  if (items.length === 0) return null;

  return (
    <div
      className={cn("sticky z-30 border-b border-border/60 bg-bg/80 backdrop-blur", className)}
      style={{ top: "var(--header-h, 84px)" }}
      aria-label="Section navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className="-mx-1 flex gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={(e) => go(e, it.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "shrink-0 rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors",
                  isActive
                    ? "bg-white/8 text-foreground"
                    : "text-text-secondary hover:bg-white/5 hover:text-foreground",
                )}
              >
                {it.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
