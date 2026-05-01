/**
 * RoleMatcher — interactive filter + card grid for the Solutions page.
 *
 * Renders filter pills (Role, Domain, Industry) as tablists with keyboard
 * navigation, and a Framer Motion animated card grid. Filter state is
 * controlled by the parent via props so the Solutions route can sync it
 * to URL search params via TanStack Router.
 */
import { useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { SolutionCard, FilterState } from "@/lib/track";
import { filterCards } from "@/lib/track";
import type { FilterDimension } from "@/content/solutions-content";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface RoleMatcherProps {
  /** All available solution cards. */
  cards: SolutionCard[];
  /** Filter dimensions with their options. */
  dimensions: FilterDimension[];
  /** Section id for anchor linking. */
  sectionId: string;
  /** Current filter state (controlled by parent). */
  filters: FilterState;
  /** Callback when a filter value changes. */
  onFilterChange: (next: FilterState) => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function RoleMatcher({
  cards,
  dimensions,
  sectionId,
  filters,
  onFilterChange,
}: RoleMatcherProps) {
  const visible = filterCards(cards, filters);

  const resetFilters = useCallback(() => {
    onFilterChange({ role: "all", domain: "all", industry: "all" });
  }, [onFilterChange]);

  return (
    <div id={sectionId}>
      {/* Filter pill rows */}
      <div className="flex flex-col items-center gap-3">
        {dimensions.map((dim) => (
          <FilterRow
            key={dim.key}
            dimension={dim}
            activeKey={filters[dim.key]}
            onSelect={(key) =>
              onFilterChange({ ...filters, [dim.key]: key })
            }
          />
        ))}
      </div>

      {/* Card grid with live region */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-8"
      >
        <AnimatePresence mode="popLayout">
          {visible.length > 0 ? (
            <motion.div
              key="grid"
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatePresence mode="popLayout">
                {visible.map((card) => (
                  <SolutionCardItem key={card.id} card={card} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-md py-16 text-center"
            >
              <p className="text-[16px] font-medium text-foreground">
                No matches — try broadening your filters
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 rounded-md bg-white/10 px-4 py-2 text-[13.5px] font-medium text-foreground transition-colors hover:bg-white/15"
              >
                Reset all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// FilterRow — a single dimension rendered as a tablist of pills
// ---------------------------------------------------------------------------

function FilterRow({
  dimension,
  activeKey,
  onSelect,
}: {
  dimension: FilterDimension;
  activeKey: string;
  onSelect: (key: string) => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const opts = dimension.options;
      const idx = opts.findIndex((o) => o.key === activeKey);
      let next = idx;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next = (idx + 1) % opts.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        next = (idx - 1 + opts.length) % opts.length;
      } else if (e.key === "Home") {
        e.preventDefault();
        next = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        next = opts.length - 1;
      } else {
        return;
      }

      onSelect(opts[next].key);

      // Move focus to the newly active pill
      const row = rowRef.current;
      if (row) {
        const buttons = row.querySelectorAll<HTMLButtonElement>('[role="tab"]');
        buttons[next]?.focus();
      }
    },
    [dimension.options, activeKey, onSelect],
  );

  return (
    <div className="flex items-center gap-3">
      <span className="hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary sm:inline">
        {dimension.label}
      </span>
      <div
        ref={rowRef}
        role="tablist"
        aria-label={dimension.label}
        onKeyDown={handleKeyDown}
        className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {dimension.options.map((opt) => {
          const active = opt.key === activeKey;
          return (
            <button
              key={opt.key}
              type="button"
              role="tab"
              aria-selected={active}
              tabIndex={active ? 0 : -1}
              onClick={() => onSelect(opt.key)}
              className={cn(
                "shrink-0 snap-start rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors",
                active
                  ? "bg-gradient-to-r from-[#FFE1CC] to-white text-[#111111] font-semibold shadow-sm"
                  : "text-text-secondary hover:text-foreground",
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SolutionCardItem — a single card in the grid
// ---------------------------------------------------------------------------

function SolutionCardItem({ card }: { card: SolutionCard }) {
  const Icon = card.icon;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="card-iw flex h-full flex-col p-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-elevated text-brand-accent">
          <Icon size={20} />
        </div>
        {card.waitlist && (
          <span className="rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-brand-highlight">
            Waitlist
          </span>
        )}
      </div>
      <h3 className="mt-4 text-[16px] font-semibold text-foreground">{card.title}</h3>
      <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-text-secondary">
        {card.blurb}
      </p>
    </motion.div>
  );
}
