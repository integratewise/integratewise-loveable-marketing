import type { ComponentType } from "react";

// ---------------------------------------------------------------------------
// CTA Tracking
// ---------------------------------------------------------------------------

export interface TrackingEvent {
  event: "cta_click";
  label: string;
  source: string;
  timestamp: number;
}

/**
 * Emit a CTA tracking event. Pushes to `window.dataLayer` (GTM-compatible)
 * and logs to console in development mode.
 */
export function trackCta(label: string, source: string): void {
  const event: TrackingEvent = {
    event: "cta_click",
    label,
    source,
    timestamp: Date.now(),
  };

  // GTM / GA4 data layer
  if (typeof window !== "undefined") {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(event);
  }

  if (import.meta.env.DEV) {
    console.debug("[track]", event);
  }
}

// ---------------------------------------------------------------------------
// Solutions filtering
// ---------------------------------------------------------------------------

export interface SolutionCard {
  id: string;
  title: string;
  blurb: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  roles: string[];
  domains: string[];
  industries: string[];
  waitlist?: boolean;
}

export interface FilterState {
  role: string;
  domain: string;
  industry: string;
}

/**
 * Pure filter function for Solutions cards.
 *
 * Returns only cards that match ALL active filters. A filter value of `"all"`
 * is treated as "no constraint" for that dimension.
 */
export function filterCards(
  cards: SolutionCard[],
  filters: FilterState,
): SolutionCard[] {
  return cards.filter((card) => {
    const roleMatch =
      filters.role === "all" || card.roles.includes(filters.role);
    const domainMatch =
      filters.domain === "all" || card.domains.includes(filters.domain);
    const industryMatch =
      filters.industry === "all" || card.industries.includes(filters.industry);
    return roleMatch && domainMatch && industryMatch;
  });
}

// ---------------------------------------------------------------------------
// URL search-param round-trip helpers
// ---------------------------------------------------------------------------

/**
 * Serialize a filter state object to a `URLSearchParams` string.
 * Omits keys whose value is `"all"` to keep URLs clean.
 */
export function serializeFilters(filters: FilterState): string {
  const params = new URLSearchParams();
  if (filters.role !== "all") params.set("role", filters.role);
  if (filters.domain !== "all") params.set("domain", filters.domain);
  if (filters.industry !== "all") params.set("industry", filters.industry);
  return params.toString();
}

/**
 * Parse URL search params back into a `FilterState`, defaulting missing
 * values to `"all"`.
 */
export function parseFilters(search: string): FilterState {
  const params = new URLSearchParams(search);
  return {
    role: params.get("role") || "all",
    domain: params.get("domain") || "all",
    industry: params.get("industry") || "all",
  };
}
