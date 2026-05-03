/**
 * Solutions pill bar — sticky 3-row selector that mirrors the UXPilot mockups.
 *
 * Row 1 (Pillar): Account Success / Business Ops / Customer Success / Personal Ops.
 *   Pills navigate between routes (real <Link>s — preserves SEO).
 * Row 2 (Persona) and Row 3 (Industry): contextual to the active pillar.
 *   Pills update the SolutionsFilterContext (and URL hash); they do NOT
 *   navigate. Use <PersonaContent>/<IndustryContent> to gate page content.
 *
 * Sticks under the global header (CSS var `--header-h`).
 */
import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useSolutionsFilter, type PillOption } from "./solutions-filter-context";

export interface SolutionsPillarRoute {
  to:
    | "/solutions/account-success"
    | "/solutions/business-ops"
    | "/solutions/customer-success"
    | "/solutions/personal-space";
  label: string;
}

const PILLARS: ReadonlyArray<SolutionsPillarRoute> = [
  { to: "/solutions/account-success", label: "Account Success" },
  { to: "/solutions/business-ops", label: "Business Ops" },
  { to: "/solutions/customer-success", label: "Customer Success" },
  { to: "/solutions/personal-space", label: "Personal Ops" },
];

function PillRow({
  options,
  activeKey,
  onSelect,
  ariaLabel,
}: {
  options: ReadonlyArray<PillOption>;
  activeKey: string;
  onSelect: (key: string) => void;
  ariaLabel: string;
}) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="iw-pill-track inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {options.map((opt) => {
        const active = opt.key === activeKey;
        return (
          <button
            key={opt.key}
            type="button"
            role="tab"
            aria-selected={active}
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
  );
}

export function SolutionsPillBar() {
  const ctx = useSolutionsFilter();
  const { location } = useRouterState();

  // Only render persona/industry rows when the page actually has gated content.
  // Avoids dead-end pills that change the URL hash but nothing else.
  const [hasPersonaContent, setHasPersonaContent] = useState(false);
  const [hasIndustryContent, setHasIndustryContent] = useState(false);

  useEffect(() => {
    setHasPersonaContent(false);
    setHasIndustryContent(false);

    const check = () => {
      if (typeof document === "undefined") return;
      setHasPersonaContent(!!document.querySelector("[data-persona-content]"));
      setHasIndustryContent(!!document.querySelector("[data-industry-content]"));
    };
    const r1 = requestAnimationFrame(() => requestAnimationFrame(check));
    const t = window.setTimeout(check, 250);
    return () => {
      cancelAnimationFrame(r1);
      clearTimeout(t);
    };
  }, [location.pathname]);

  const showPersona = ctx && hasPersonaContent && ctx.personaOptions.length > 0;
  const showIndustry = ctx && hasIndustryContent && ctx.industryOptions.length > 0;

  return (
    <div
      data-section-nav=""
      className="sticky z-30 border-b border-border/60 bg-bg/80 backdrop-blur"
      style={{ top: "var(--header-h, 84px)" }}
      aria-label="Solutions navigation"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        {/* Row 1 — Pillar (real route nav) */}
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label="Solution pillar"
            className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PILLARS.map((p) => {
              const active = location.pathname === p.to;
              return (
                <Link
                  key={p.to}
                  to={p.to}
                  role="tab"
                  aria-selected={active}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-1.5 text-[13.5px] font-medium transition-colors",
                    active
                      ? "bg-gradient-to-r from-[#FFE1CC] to-white text-[#111111] font-semibold shadow-sm"
                      : "text-text-secondary hover:text-foreground",
                  )}
                >
                  {p.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Rows 2 & 3 — Persona + Industry (only render when page has gated content) */}
        {(showPersona || showIndustry) && (
          <div className="mt-3 flex flex-col items-center gap-2 sm:mt-4 sm:gap-2.5">
            {showPersona && (
              <div className="flex items-center gap-3">
                <span className="hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary sm:inline">
                  I am a
                </span>
                <PillRow
                  options={ctx!.personaOptions}
                  activeKey={ctx!.persona}
                  onSelect={ctx!.setPersona}
                  ariaLabel="Persona"
                />
              </div>
            )}
            {showIndustry && (
              <div className="flex items-center gap-3">
                <span className="hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary sm:inline">
                  Working in
                </span>
                <PillRow
                  options={ctx!.industryOptions}
                  activeKey={ctx!.industry}
                  onSelect={ctx!.setIndustry}
                  ariaLabel="Industry"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
