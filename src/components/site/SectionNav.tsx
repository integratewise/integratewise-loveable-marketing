import { useEffect, useRef, useState } from "react";
import { ArrowUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scroll";

export interface SectionNavItem {
  id: string;
  label: string;
}

const HEADER_OFFSET = 168; // header (~84) + this nav (~52) + breathing room

/**
 * Sticky in-page sub-navigation.
 *
 * - Desktop: horizontal chip bar with scroll-spy active state.
 * - Mobile: collapses to a single button showing the current section label;
 *   tap to expand a dropdown sheet of all sections.
 * - Always trails with a "Back to top" action.
 *
 * Sticks just under the global header (CSS var `--header-h`, default 84px).
 * Renders nothing if `items` is empty.
 */
export function SectionNav({
  items,
  className,
}: {
  items: ReadonlyArray<SectionNavItem>;
  className?: string;
}) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement | null>(null);

  // Scroll-spy.
  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;

    const onScroll = () => {
      let current = items[0].id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - HEADER_OFFSET <= 0) {
          current = it.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  // Honor incoming hash on mount (in case HashScroll missed the first paint).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || !items.some((i) => i.id === hash)) return;
    const t = setTimeout(() => scrollToId(hash), 50);
    return () => clearTimeout(t);
  }, [items]);

  // Close mobile sheet on outside click / Esc.
  useEffect(() => {
    if (!mobileOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!sheetRef.current) return;
      if (!sheetRef.current.contains(e.target as Node)) setMobileOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  function go(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    if (!scrollToId(id)) return;
    history.replaceState(null, "", `#${id}`);
    setActive(id);
    setMobileOpen(false);
  }

  function toTop(e: React.MouseEvent) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname + window.location.search);
    setMobileOpen(false);
  }

  if (items.length === 0) return null;

  const activeItem = items.find((i) => i.id === active) ?? items[0];

  return (
    <div
      data-section-nav=""
      className={cn("sticky z-30 border-b border-border/60 bg-bg/80 backdrop-blur", className)}
      style={{ top: "var(--header-h, 84px)" }}
      aria-label="Section navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Desktop / tablet (sm+): horizontal chips. */}
        <nav className="-mx-1 hidden items-center gap-1 overflow-x-auto py-2 sm:flex [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
          <span className="mx-1 h-4 w-px shrink-0 bg-border/60" aria-hidden />
          <button
            type="button"
            onClick={toTop}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-[13px] font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <ArrowUp size={13} />
            Back to top
          </button>
        </nav>

        {/* Mobile (<sm): collapsed dropdown showing current section. */}
        <div ref={sheetRef} className="relative py-2 sm:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-haspopup="menu"
            className="flex w-full items-center justify-between rounded-md bg-white/5 px-3 py-2 text-[13.5px] font-medium text-foreground"
          >
            <span className="truncate">
              <span className="text-text-secondary">On this page · </span>
              {activeItem.label}
            </span>
            <ChevronDown
              size={14}
              className={cn("transition-transform", mobileOpen && "rotate-180")}
            />
          </button>
          {mobileOpen && (
            <div
              role="menu"
              className="absolute inset-x-0 top-full z-40 mt-1 max-h-[60vh] overflow-y-auto rounded-md border border-border/60 bg-bg/95 p-1 shadow-card backdrop-blur"
            >
              {items.map((it) => {
                const isActive = active === it.id;
                return (
                  <a
                    key={it.id}
                    href={`#${it.id}`}
                    onClick={(e) => go(e, it.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "block rounded-md px-3 py-2 text-[14px]",
                      isActive
                        ? "bg-white/8 text-foreground"
                        : "text-text-secondary hover:bg-white/5 hover:text-foreground",
                    )}
                  >
                    {it.label}
                  </a>
                );
              })}
              <div className="my-1 h-px bg-border/60" />
              <button
                type="button"
                onClick={toTop}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-[14px] text-text-secondary hover:bg-white/5 hover:text-foreground"
              >
                <ArrowUp size={14} />
                Back to top
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
