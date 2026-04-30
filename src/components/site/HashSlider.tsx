import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HashSlide {
  id: string;
  label: string;
  render: () => ReactNode;
}

/**
 * Hash-driven slider. The currently visible slide tracks `window.location.hash`,
 * and changing slides via the tabs / arrow buttons updates the hash. Deep links
 * like `/solutions/industry#retail` open the matching slide on load.
 *
 * If the hash is missing or unknown, the first slide wins.
 */
export function HashSlider({
  slides,
  ariaLabel,
}: {
  slides: ReadonlyArray<HashSlide>;
  ariaLabel: string;
}) {
  const [activeId, setActiveId] = useState<string>(slides[0]?.id ?? "");

  // Read hash on mount + listen for future hash changes (back/forward, manual).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const apply = () => {
      const hash = window.location.hash.replace(/^#/, "");
      const found = slides.find((s) => s.id === hash);
      setActiveId(found ? found.id : (slides[0]?.id ?? ""));
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [slides]);

  function go(id: string) {
    setActiveId(id);
    if (typeof window !== "undefined") {
      // Use replaceState so we don't spam history while the user clicks tabs.
      history.replaceState(null, "", `#${id}`);
    }
  }

  if (slides.length === 0) return null;
  const idx = Math.max(
    0,
    slides.findIndex((s) => s.id === activeId),
  );
  const active = slides[idx];
  const prev = slides[(idx - 1 + slides.length) % slides.length];
  const next = slides[(idx + 1) % slides.length];

  return (
    <section aria-label={ariaLabel}>
      {/* Tabs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          role="tablist"
          aria-label={ariaLabel}
          className="-mx-1 flex flex-wrap gap-1.5 rounded-xl border border-border bg-elevated/40 p-1.5"
        >
          {slides.map((s) => {
            const isActive = s.id === active.id;
            return (
              <button
                key={s.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => go(s.id)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors",
                  isActive
                    ? "bg-white/10 text-foreground"
                    : "text-text-secondary hover:bg-white/5 hover:text-foreground",
                )}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Slide */}
      <div className="mt-8" role="tabpanel" aria-labelledby={active.id} key={active.id}>
        {active.render()}
      </div>

      {/* Prev / Next */}
      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => go(prev.id)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-elevated/40 px-3 py-2 text-[13px] text-text-secondary hover:bg-white/5 hover:text-foreground"
        >
          <ChevronLeft size={14} /> {prev.label}
        </button>
        <button
          type="button"
          onClick={() => go(next.id)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-elevated/40 px-3 py-2 text-[13px] text-text-secondary hover:bg-white/5 hover:text-foreground"
        >
          {next.label} <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}
