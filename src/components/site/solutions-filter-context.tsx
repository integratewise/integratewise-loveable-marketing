/**
 * Shared filter state for /solutions/* pages.
 *
 * Drives the SolutionsPillBar (Pillar / Persona / Industry) and the
 * `<PersonaContent>` / `<IndustryContent>` content gates that render only when
 * the active filter matches. Filter state syncs to the URL hash so links are
 * shareable and back/forward works.
 *
 * Hash format: `#persona=<key>&industry=<key>` (either may be omitted).
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type FilterKey = string; // e.g. "operator", "saas", "all"

export interface PillOption {
  key: FilterKey;
  label: string;
}

export interface SolutionsFilterValue {
  persona: FilterKey;
  industry: FilterKey;
  setPersona: (key: FilterKey) => void;
  setIndustry: (key: FilterKey) => void;
  personaOptions: ReadonlyArray<PillOption>;
  industryOptions: ReadonlyArray<PillOption>;
}

const SolutionsFilterContext = createContext<SolutionsFilterValue | null>(null);

function parseHash(): { persona?: string; industry?: string } {
  if (typeof window === "undefined") return {};
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return {};
  const out: Record<string, string> = {};
  for (const part of raw.split("&")) {
    const [k, v] = part.split("=");
    if (k && v) out[k] = decodeURIComponent(v);
  }
  return out;
}

function writeHash(
  persona: string,
  industry: string,
  defaults: { persona: string; industry: string },
) {
  if (typeof window === "undefined") return;
  const parts: string[] = [];
  if (persona && persona !== defaults.persona) parts.push(`persona=${encodeURIComponent(persona)}`);
  if (industry && industry !== defaults.industry)
    parts.push(`industry=${encodeURIComponent(industry)}`);
  const next = parts.length ? `#${parts.join("&")}` : "";
  const url = window.location.pathname + window.location.search + next;
  window.history.replaceState(null, "", url);
}

export function SolutionsFilterProvider({
  personaOptions,
  industryOptions,
  children,
}: {
  personaOptions: ReadonlyArray<PillOption>;
  industryOptions: ReadonlyArray<PillOption>;
  children: ReactNode;
}) {
  const defaults = useMemo(
    () => ({
      persona: personaOptions[0]?.key ?? "all",
      industry: industryOptions[0]?.key ?? "all",
    }),
    [personaOptions, industryOptions],
  );

  const [persona, setPersonaState] = useState<FilterKey>(defaults.persona);
  const [industry, setIndustryState] = useState<FilterKey>(defaults.industry);

  // Hydrate from URL hash on mount + listen for cross-page changes.
  useEffect(() => {
    const sync = () => {
      const { persona: p, industry: i } = parseHash();
      if (p && personaOptions.some((o) => o.key === p)) setPersonaState(p);
      if (i && industryOptions.some((o) => o.key === i)) setIndustryState(i);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [personaOptions, industryOptions]);

  const setPersona = useCallback(
    (key: FilterKey) => {
      setPersonaState(key);
      writeHash(key, industry, defaults);
    },
    [industry, defaults],
  );
  const setIndustry = useCallback(
    (key: FilterKey) => {
      setIndustryState(key);
      writeHash(persona, key, defaults);
    },
    [persona, defaults],
  );

  const value = useMemo<SolutionsFilterValue>(
    () => ({ persona, industry, setPersona, setIndustry, personaOptions, industryOptions }),
    [persona, industry, setPersona, setIndustry, personaOptions, industryOptions],
  );

  return (
    <SolutionsFilterContext.Provider value={value}>{children}</SolutionsFilterContext.Provider>
  );
}

export function useSolutionsFilter(): SolutionsFilterValue | null {
  return useContext(SolutionsFilterContext);
}

/** Render children only when the active persona matches (or "all" sentinel). */
export function PersonaContent({ persona, children }: { persona: FilterKey; children: ReactNode }) {
  const ctx = useContext(SolutionsFilterContext);
  if (!ctx) return <>{children}</>;
  if (persona === "all" || ctx.persona === "all" || ctx.persona === persona) return <>{children}</>;
  return null;
}

/** Render children only when the active industry matches (or "all" sentinel). */
export function IndustryContent({
  industry,
  children,
}: {
  industry: FilterKey;
  children: ReactNode;
}) {
  const ctx = useContext(SolutionsFilterContext);
  if (!ctx) return <>{children}</>;
  if (industry === "all" || ctx.industry === "all" || ctx.industry === industry)
    return <>{children}</>;
  return null;
}
