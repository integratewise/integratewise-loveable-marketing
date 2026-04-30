/**
 * InPageNav — sticky internal section navigation for hub pages.
 *
 * Sits under the global header (which is fixed at ~88px). Renders chip-style
 * links to in-page section IDs. Highlights the active section as the user
 * scrolls using IntersectionObserver. Smooth-scrolls on click and updates the
 * URL hash without triggering a full router navigation.
 */
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export interface InPageNavItem {
  id: string;
  label: string;
}

export function InPageNav({ items }: { items: ReadonlyArray<InPageNavItem> }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      {
        // Trigger when section's middle area is in view (account for header).
        rootMargin: "-120px 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  // Set active from initial hash on mount.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (hash && items.some((i) => i.id === hash)) {
      setActive(hash);
      // Defer to ensure layout is ready.
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  }

  return (
    <div
      className="sticky top-[92px] z-30 -mx-4 mb-4 border-y border-border bg-background/85 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/65 sm:mx-0 sm:rounded-xl sm:border"
      role="navigation"
      aria-label="On this page"
    >
      <Container className="!px-0">
        <div className="flex gap-1.5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={(e) => onClick(e, it.id)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors",
                  isActive
                    ? "bg-brand-accent/15 text-brand-accent"
                    : "text-text-secondary hover:bg-white/5 hover:text-foreground",
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {it.label}
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
