# Implementation Plan: IntegrateWise Marketing Site Consolidation

## Overview

Consolidate the IntegrateWise marketing site from a multi-route nested structure into long-form, anchor-based pages with section navigation, redirect routes for legacy URLs, a unified CTA tracking layer, Solutions Role Matcher with URL-synced filters, and an updated prerender pipeline. All work uses the existing TanStack Router file-based routing, React 19, TypeScript, Tailwind CSS v4, and Framer Motion stack — no new runtime dependencies.

## Tasks

- [x] 1. Set up testing infrastructure and CTA tracking utility
  - [x] 1.1 Install Vitest, React Testing Library, and fast-check as dev dependencies
    - Run `npm install -D vitest @testing-library/react @testing-library/jest-dom fast-check jsdom`
    - Create `vitest.config.ts` with jsdom environment and path aliases matching `tsconfig.json`
    - Add `"test": "vitest --run"` script to `package.json`
    - _Requirements: Design Testing Strategy_

  - [x] 1.2 Create the CTA tracking utility `src/lib/track.ts`
    - Implement `TrackingEvent` interface with `event`, `label`, `source`, `timestamp` fields
    - Implement `trackCta(label: string, source: string): void` that pushes to `window.dataLayer`
    - Include `console.debug` logging when `import.meta.env.DEV` is true
    - Export a pure `filterCards` function for Solutions filtering (used by RoleMatcher and tests)
    - Export `serializeFilters` and `parseFilters` helper functions for URL search param round-trip
    - _Requirements: 14.1, 14.2_

  - [ ]\* 1.3 Write property test for CTA tracking event emission
    - **Property 3: CTA tracking event emission**
    - Generate random label and source strings via fast-check; call `trackCta`; verify `window.dataLayer` contains exactly one new event with matching `label`, `source`, and `event: "cta_click"`
    - **Validates: Requirements 10.4, 14.1**

  - [ ]\* 1.4 Write property test for Solutions filter logic correctness
    - **Property 4: Solutions filter logic correctness**
    - Generate random sets of `SolutionCard` objects and random filter combinations (`role`, `domain`, `industry` each `"all"` or a specific value); verify `filterCards` returns only cards matching ALL active filters
    - **Validates: Requirements 18.3**

  - [ ]\* 1.5 Write property test for filter state URL round-trip
    - **Property 5: Filter state URL round-trip**
    - Generate random filter state objects `{ role, domain, industry }` where each is `"all"` or an alphanumeric-with-hyphens string; serialize via `serializeFilters` then parse via `parseFilters`; verify equivalence
    - **Validates: Requirements 18.4**

- [x] 2. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 3. Create content files for all consolidated pages
  - [x] 3.1 Extract Platform content to `src/content/platform-content.ts`
    - Move `SOURCE_APPS`, `THREE_LINES`, `SCOPES`, `FLOW_STEPS`, `SECURITY_PILLARS`, `INTEGRATION_LOGOS` arrays from `src/routes/platform.tsx` into a typed content file
    - Export `PLATFORM_SECTIONS` array with `id`, `navLabel`, `badge`, `heading`, `subheading` for each section (`spine`, `how-it-works`, `digital-memory`, `connectors`, `security`, `integrations`)
    - Update `src/routes/platform.tsx` to import from the content file instead of inline data
    - _Requirements: 1.1, 1.2, 1.5_

  - [x] 3.2 Extract Product content to `src/content/product-content.ts`
    - Move `NAV_ITEMS`, `ACCOUNT_ROWS`, `VIEWS` arrays from `src/routes/product.tsx` into a typed content file
    - Export `PRODUCT_SECTIONS` array with section metadata (`workspace`, `how-it-works`, `digital-memory`, `human-in-the-loop`, `example-walkthrough`)
    - Update `src/routes/product.tsx` to import from the content file
    - _Requirements: 2.1, 2.2, 2.5_

  - [x] 3.3 Create Solutions content file `src/content/solutions-content.ts`
    - Define `SolutionCard` interface with `id`, `title`, `blurb`, `icon`, `roles[]`, `domains[]`, `industries[]`, `waitlist?` fields
    - Define `FilterDimension` interface with `key`, `label`, `options[]`
    - Export `SOLUTION_CARDS` array, `FILTER_DIMENSIONS` array (Role, Domain, Industry), and `SOLUTIONS_SECTIONS` metadata
    - _Requirements: 3.1, 3.2, 18.1, 18.2_

  - [x] 3.4 Create Company content file `src/content/company-content.ts`
    - Export section data for About, Manifesto, Customer Zero, Trust & Governance, and Contact sections
    - Include `COMPANY_SECTIONS` array with `id`, `navLabel`, `badge`, `heading`, `subheading` for each section (`about`, `manifesto`, `customer-zero`, `trust-governance`, `contact`)
    - _Requirements: 4.1, 4.2, 4.4_

  - [x] 3.5 Extract Twin content to `src/content/twin-content.ts`
    - Move `IS_LIST`, `IS_NOT_LIST`, `PROPOSALS` arrays from `src/routes/twin.tsx` into a typed content file
    - Export `TWIN_SECTIONS` array with section metadata (`twin`, `how-it-works`, `approval-gate`, `evidence-transparency`, `twin-execution`, `learning-history`)
    - Update `src/routes/twin.tsx` to import from the content file
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 3.6 Create Blog content file `src/content/blog-content.ts`
    - Define `BlogPost` interface with `slug`, `title`, `summary`, `category`, `audience` fields
    - Export `BLOG_POSTS` array and `BLOG_SECTIONS` metadata for categories (`all`, `product`, `platform`, `intelligence`, `case-studies`)
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 3.7 Create Resources content file `src/content/resources-content.ts`
    - Export section data for Guides, Webinars, One-pagers, and Getting started
    - Export `RESOURCES_SECTIONS` metadata with section ids (`guides`, `webinars`, `one-pagers`, `getting-started`)
    - _Requirements: 7.1, 7.2, 7.3_

  - [x] 3.8 Create Docs content file `src/content/docs-content.ts`
    - Export section data for Getting started, Connectors, Workspaces, Twin & approvals, Security & compliance
    - Export `DOCS_SECTIONS` metadata with section ids (`getting-started`, `connectors`, `workspaces`, `twin-approvals`, `security-compliance`)
    - _Requirements: 8.1, 8.2, 8.3_

  - [x] 3.9 Create Changelog content file `src/content/changelog-content.ts`
    - Define `ChangelogEntry` interface with `tags[]`, `title`, `what`, `why`, `where?` fields
    - Define `ChangelogMonth` interface with `month` and `entries[]`
    - Move existing `CHANGELOG` data from `src/routes/changelog.tsx` into the content file
    - Export `CHANGELOG_SECTIONS` metadata with section ids (`latest`, `platform`, `product`, `twin`, `connectors`)
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [ ]\* 3.10 Write property test for content card field completeness
    - **Property 2: Content card field completeness**
    - Generate random `BlogPost` and `ChangelogEntry` objects via fast-check; verify each has all required display fields (title, summary, category for blog; tags, title, what, why for changelog)
    - **Validates: Requirements 6.4, 9.4**

- [x] 4. Build the Solutions RoleMatcher component
  - [x] 4.1 Create `src/components/site/RoleMatcher.tsx`
    - Accept `cards: SolutionCard[]`, `dimensions: FilterDimension[]`, `sectionId: string` props
    - Render filter pills for each dimension using `role="tablist"` / `role="tab"` with `aria-selected`
    - Implement keyboard navigation (arrow keys between pills, Enter/Space to select)
    - Use Framer Motion `AnimatePresence` for card grid transitions on filter change
    - Display "No matches — try broadening your filters" message with reset button when no cards match
    - Use `aria-live="polite"` on the card grid to announce filter result changes
    - _Requirements: 18.1, 18.2, 18.3, 18.5, 15.2, 15.3_

  - [x] 4.2 Wire RoleMatcher filter state to URL search params
    - Use TanStack Router `validateSearch` in the Solutions route to parse `role`, `domain`, `industry` from URL search params, defaulting to `"all"`
    - Use `useSearch` and `useNavigate` in RoleMatcher to read/write filter state
    - Import `filterCards` from `src/lib/track.ts` to compute visible cards
    - _Requirements: 18.3, 18.4_

- [x] 5. Update consolidated page routes with content files and SectionNav
  - [x] 5.1 Update `/platform` route to use extracted content and ensure all section ids are present
    - Import from `src/content/platform-content.ts`
    - Verify all `<section id="...">` elements match the defined anchors: `spine`, `how-it-works`, `digital-memory`, `connectors`, `security`, `integrations`
    - Verify SectionNav renders with correct items
    - _Requirements: 1.1, 1.2, 1.5, 12.1_

  - [x] 5.2 Update `/product` route to use extracted content and add missing section ids
    - Import from `src/content/product-content.ts`
    - Add `human-in-the-loop` and `example-walkthrough` section ids if not already present
    - Update SectionNav items to include all defined sections
    - _Requirements: 2.1, 2.2, 2.5, 12.1_

  - [x] 5.3 Update `/solutions` route with RoleMatcher and content file
    - Import from `src/content/solutions-content.ts`
    - Add `validateSearch` for filter params (`role`, `domain`, `industry`)
    - Mount `RoleMatcher` component in the solutions overview section
    - Ensure section ids match: `solutions-overview`, `account-success`, `business-ops`, `personal-space`
    - Add SectionNav with items for each solution category
    - _Requirements: 3.1, 3.2, 3.4, 3.5, 18.1, 12.1_

  - [x] 5.4 Update `/company` route with section ids and SectionNav
    - Restructure existing Company page to use section ids: `about`, `manifesto`, `customer-zero`, `trust-governance`, `contact`
    - Import from `src/content/company-content.ts`
    - Add SectionNav with items for each section
    - _Requirements: 4.1, 4.2, 4.4, 12.1_

  - [x] 5.5 Update `/twin` route with additional section ids
    - Add `approval-gate`, `evidence-transparency`, and `learning-history` section ids if not already present
    - Update SectionNav items to match design: `twin`, `how-it-works`, `approval-gate`, `evidence-transparency`, `twin-execution`, `learning-history`
    - Import from `src/content/twin-content.ts`
    - _Requirements: 5.1, 5.2, 5.3, 12.1_

  - [x] 5.6 Update `/blog` route with section ids and SectionNav
    - Add section ids for categories: `all`, `product`, `platform`, `intelligence`, `case-studies`
    - Import from `src/content/blog-content.ts`
    - Add SectionNav with items for each category
    - Ensure each blog post card displays title, summary, category tag, and audience label
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 12.1_

  - [x] 5.7 Update `/resources` route with section ids and SectionNav
    - Add section ids: `guides`, `webinars`, `one-pagers`, `getting-started`
    - Import from `src/content/resources-content.ts`
    - Add SectionNav with items for each section
    - _Requirements: 7.1, 7.2, 7.3, 12.1_

  - [x] 5.8 Update `/docs` route with section ids and SectionNav
    - Add section ids: `getting-started`, `connectors`, `workspaces`, `twin-approvals`, `security-compliance`
    - Import from `src/content/docs-content.ts`
    - Add SectionNav with items for each section
    - _Requirements: 8.1, 8.2, 8.3, 12.1_

  - [x] 5.9 Update `/changelog` route with section ids and SectionNav
    - Add section ids: `latest`, `platform`, `product`, `twin`, `connectors`
    - Import from `src/content/changelog-content.ts`
    - Add SectionNav with items for each filter section
    - Ensure each entry displays tags, title, what-changed, and why-it-matters
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 12.1_

- [ ] 6. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Create redirect route files for all legacy sub-routes
  - [x] 7.1 Create or verify Platform redirect routes
    - Ensure `platform.the-spine.tsx` redirects to `/platform#spine` (already exists)
    - Ensure `platform.how-it-works.tsx` redirects to `/platform#how-it-works`
    - Ensure `platform.memory.tsx` redirects to `/platform#digital-memory`
    - Ensure `platform.security.tsx` redirects to `/platform#security`
    - Ensure `platform.integrations.tsx` redirects to `/platform#integrations`
    - Each file uses `beforeLoad` + `throw redirect({ to, hash })` pattern
    - _Requirements: 1.3, 1.4_

  - [x] 7.2 Create or verify Product redirect routes
    - Convert `product.workbench.tsx` to redirect to `/product#workspace`
    - Convert `product.how-it-works.tsx` to redirect to `/product#how-it-works`
    - Convert `product.the-twin.tsx` to redirect to `/product#human-in-the-loop`
    - _Requirements: 2.3, 2.4_

  - [x] 7.3 Create or verify Solutions redirect routes
    - Convert `solutions.account-success.tsx` to redirect to `/solutions#account-success`
    - Convert `solutions.business-ops.tsx` to redirect to `/solutions#business-ops`
    - Convert `solutions.personal-space.tsx` to redirect to `/solutions#personal-space`
    - Convert `solutions.finance-ops.tsx` to redirect to `/solutions#business-ops`
    - Convert `solutions.sales-ops.tsx` to redirect to `/solutions#account-success`
    - Convert `solutions.by-role.tsx` to redirect to `/solutions#solutions-overview`
    - Convert `solutions.by-industry.tsx` to redirect to `/solutions#solutions-overview`
    - Convert `solutions.by-industry.$industry.tsx` to redirect to `/solutions#solutions-overview`
    - Convert `solutions.role.tsx` to redirect to `/solutions#solutions-overview`
    - Convert `solutions.industry.tsx` to redirect to `/solutions#solutions-overview`
    - _Requirements: 3.3_

  - [x] 7.4 Create or verify Company redirect routes
    - Convert `about.tsx` to redirect to `/company#about`
    - Convert `manifesto.tsx` to redirect to `/company#manifesto`
    - Convert `customer-zero.tsx` to redirect to `/company#customer-zero`
    - Convert `why.tsx` to redirect to `/company#customer-zero`
    - Convert `contact.tsx` to redirect to `/company#contact`
    - _Requirements: 4.3_

  - [ ]\* 7.5 Write property test for redirect mapping correctness
    - **Property 1: Redirect mapping correctness**
    - Define the complete redirect map as test data; for each entry, invoke the route's `beforeLoad` and verify it throws a TanStack Router `redirect` with the correct `to` path and `hash` anchor
    - **Validates: Requirements 1.3, 2.3, 3.3, 4.3**

- [x] 8. Update navigation config and global components
  - [x] 8.1 Update `COMPANY_LINKS` in `src/lib/site.ts` to use anchor links
    - Change `to` values from `/about`, `/manifesto`, `/customer-zero`, `/why`, `/contact` to `/company#about`, `/company#manifesto`, `/company#customer-zero`, `/company#customer-zero`, `/company#contact`
    - _Requirements: 13.4_

  - [x] 8.2 Update `PRIMARY_NAV` in `src/lib/site.ts` to add new page links
    - Add `kind: "link"` entries for Blog (`/blog`), Resources (`/resources`), Docs (`/docs`), and Changelog (`/changelog`)
    - _Requirements: 11.2_

  - [x] 8.3 Update Footer links in `src/components/site/Footer.tsx`
    - Update Solutions column links to use anchor paths: `/solutions#account-success`, `/solutions#business-ops`, `/solutions#personal-space`
    - Update Company column links to use `/company#about`, `/company#manifesto`, `/company#customer-zero`, `/company#customer-zero`, `/company#contact`
    - _Requirements: 13.1, 13.4_

  - [x] 8.4 Integrate `trackCta` into existing CTA components
    - Add `trackCta` calls in `useDemoModal` callbacks (`open`, `openEarlyAccess`, `openWaitlist`) in `src/components/site/demo-modal-context.tsx`
    - Add `trackCta` calls to non-modal CTAs (e.g., "See how it works" anchor links) across page routes
    - Ensure tracking fires before navigation or modal action
    - _Requirements: 10.4, 14.1, 14.2_

- [x] 9. Update prerender script
  - [x] 9.1 Update `scripts/prerender.mjs` ROUTES array
    - Set the primary routes to: `/`, `/platform`, `/product`, `/twin`, `/solutions`, `/company`, `/blog`, `/resources`, `/docs`, `/changelog`, `/pricing`
    - Add legacy redirect routes for SEO continuity: `/platform/the-spine`, `/platform/how-it-works`, `/platform/memory`, `/platform/security`, `/platform/integrations`, `/product/workbench`, `/product/how-it-works`, `/product/the-twin`, `/solutions/account-success`, `/solutions/business-ops`, `/solutions/personal-space`, `/about`, `/manifesto`, `/customer-zero`, `/why`, `/contact`
    - _Requirements: 17.1_

  - [x] 9.2 Update prerender exit code logic
    - Change the exit condition from `fail > 0 && ok === 0` to `fail > 0` so the build fails if ANY route fails to prerender
    - _Requirements: 17.2_

- [ ] 10. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- The design uses TypeScript throughout — all implementation tasks use TypeScript
- No new runtime dependencies are introduced; `vitest`, `fast-check`, and testing libraries are dev-only
- Existing redirect routes (e.g., `platform.the-spine.tsx`) are already in the correct format and just need verification
- Content extraction tasks preserve existing inline content while moving it to dedicated content files
