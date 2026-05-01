/** Shared scroll helpers that respect the fixed header height. */

/** Header (~84px) + a hair of breathing room. Matches SectionNav's offset. */
export const SCROLL_OFFSET = 96;

export interface ScrollToOptions {
  behavior?: ScrollBehavior;
  /** Override the default header offset. */
  offset?: number;
}

/**
 * Smoothly scroll an element into view, accounting for the fixed header so
 * the target's top edge isn't hidden behind the nav bar.
 */
export function scrollToId(id: string, opts: ScrollToOptions = {}): boolean {
  if (typeof document === "undefined") return false;
  const el = document.getElementById(id);
  if (!el) return false;
  const offset = opts.offset ?? SCROLL_OFFSET;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: opts.behavior ?? "smooth" });
  return true;
}
