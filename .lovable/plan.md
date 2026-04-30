## Goal
Simplify the top navigation to exactly:

**Platform · Product · Twin · Solutions · Company**

(Drop "Pricing" from the top nav.)

## Change

**File:** `src/lib/site.ts` — `PRIMARY_NAV` array

Remove the `{ kind: "link", label: "Pricing", to: "/pricing" }` entry. Final order:

1. Platform (mega menu)
2. Product (mega menu)
3. Twin (link → `/twin`)
4. Solutions (mega menu)
5. Company (link → `/company`)

## Notes

- The `/pricing` route stays live and remains linked from the Footer, PricingTeaser section, and any in-page CTAs — only the top-nav entry is removed.
- Header (`src/components/site/Header.tsx`) renders directly from `PRIMARY_NAV`, so no Header edits are needed. Both desktop and mobile menus update automatically.
- Sitemap and robots.txt are unaffected (they reference routes, not nav config).
- No copy, route, or styling changes.

## Confirm before I proceed
You want Pricing removed from the top nav entirely (still reachable via Footer + PricingTeaser CTAs). If you'd rather keep Pricing and remove a different item, tell me which.