# Requirements Document

## Introduction

IntegrateWise is a production-ready marketing site built with React 19, TanStack Router (file-based routing), Tailwind CSS v4, Framer Motion, and shadcn/ui components. The site explains the IntegrateWise platform to RevOps, BizOps, Customer Success, and technical buyers through long-form pages with section-based navigation and deep-linkable anchors.

The site already has a substantial foundation including global layout (Header with mega-menu, Footer, PageSubnav, HashScroll, RouteTransition), existing routes, navigation definitions in `src/lib/site.ts`, content files, and reusable section components. This requirements document covers the work needed to ship every top-level page as a complete, production-ready long-form page with consolidated section-based navigation, and to retire legacy nested sub-routes in favour of anchor-based sections.

## Glossary

- **Site**: The IntegrateWise marketing website served at integratewise.ai
- **Router**: TanStack Router with file-based routing used for client-side navigation
- **Route**: A file in `src/routes/` that maps to a URL path via TanStack Router conventions
- **Section**: A semantic HTML5 `<section>` element with a unique `id` attribute, representing a distinct content block within a long-form page
- **SectionNav**: The sticky horizontal chip bar component (`src/components/site/SectionNav.tsx`) that provides scroll-spy navigation within a page
- **PageSubnav**: The auto-discovering wrapper component (`src/components/site/PageSubnav.tsx`) that scans for `section[id]` elements and renders a SectionNav when 3 or more are found
- **HashScroll**: The global component that smoothly scrolls to `#section-id` anchors on navigation
- **Scroll_Spy**: Browser-side behaviour that highlights the currently visible section in the SectionNav as the user scrolls
- **Header**: The fixed global navigation bar with mega-menu dropdowns, brand link, and CTA buttons
- **Footer**: The global footer with columnized links mirroring the information architecture
- **Mega_Menu**: A dropdown panel in the Header that shows grouped navigation links with icons and descriptions
- **CTA**: Call-to-action button or link (e.g., "Book a demo", "See how it works")
- **Tracking_Event**: A client-side analytics event emitted when a user interacts with a CTA
- **Prerender**: The build-time static HTML generation step via `scripts/prerender.mjs`
- **Solution_Category**: One of three solution groupings: Account Success/Ops, Business Intelligence/Ops, or Personal Space/Ops
- **Role_Matcher**: A filterable card interface on the Solutions page that lets visitors filter solution content by Role, Domain, or Industry
- **Slider**: An accessible carousel or tabbed interface used within solution categories to present use stories
- **Long_Form_Page**: A single-route page composed of multiple Sections with anchor-based navigation, replacing nested sub-routes
- **Nested_Sub_Route**: A TanStack Router child route (e.g., `platform.the-spine.tsx`) that renders as a separate URL path under a parent route
- **Content_File**: A TypeScript or JSON file in `src/content/` containing structured page data

## Requirements

### Requirement 1: Route Consolidation — Platform

**User Story:** As a visitor, I want the Platform page to be a single long-form page with anchor sections, so that I can scroll through all platform content without navigating to separate sub-routes.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/platform`, THE Site SHALL render a single long-form page containing sections for Overview, Adaptive Spine, How it works, Digital Memory, Connectors, Security, and Integrations
2. THE Site SHALL assign each Platform section a unique HTML `id` attribute matching the defined anchor names (`spine`, `how-it-works`, `digital-memory`, `connectors`, `security`, `integrations`)
3. WHEN a visitor navigates to a legacy Platform sub-route (`/platform/the-spine`, `/platform/how-it-works`, `/platform/memory`, `/platform/security`, `/platform/integrations`), THE Router SHALL redirect the visitor to the corresponding anchor on the `/platform` page
4. THE Site SHALL remove or deprecate the Nested_Sub_Route files for Platform (`platform.the-spine.tsx`, `platform.how-it-works.tsx`, `platform.memory.tsx`, `platform.security.tsx`, `platform.integrations.tsx`) after redirect routes are in place
5. THE Platform page SHALL render a SectionNav with items for each defined section

### Requirement 2: Route Consolidation — Product

**User Story:** As a visitor, I want the Product page to be a single long-form page with anchor sections, so that I can explore all product features in a continuous reading experience.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/product`, THE Site SHALL render a single long-form page containing sections for Overview, Adaptive Workspace, How it works, Digital Memory in Workspace, Human-in-the-loop UX, and Example walkthrough
2. THE Site SHALL assign each Product section a unique HTML `id` attribute (`workspace`, `how-it-works`, `digital-memory`, `human-in-the-loop`, `example-walkthrough`)
3. WHEN a visitor navigates to a legacy Product sub-route (`/product/workbench`, `/product/how-it-works`, `/product/the-twin`), THE Router SHALL redirect the visitor to the corresponding anchor on the `/product` page
4. THE Site SHALL remove or deprecate the Nested_Sub_Route files for Product (`product.workbench.tsx`, `product.how-it-works.tsx`, `product.the-twin.tsx`) after redirect routes are in place
5. THE Product page SHALL render a SectionNav with items for each defined section

### Requirement 3: Route Consolidation — Solutions

**User Story:** As a visitor, I want the Solutions page to be a single long-form page with three solution categories and in-page filtering, so that I can explore all solutions without navigating to separate sub-routes.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/solutions`, THE Site SHALL render a single long-form page containing sections for Solutions overview, Account Success/Ops, Business Intelligence/Ops, and Personal Space/Ops
2. THE Site SHALL assign each Solutions section a unique HTML `id` attribute (`solutions-overview`, `account-success`, `business-ops`, `personal-space`)
3. WHEN a visitor navigates to a legacy Solutions sub-route (`/solutions/account-success`, `/solutions/business-ops`, `/solutions/personal-space`, `/solutions/finance-ops`, `/solutions/sales-ops`, `/solutions/by-role`, `/solutions/by-industry`, `/solutions/role`, `/solutions/industry`), THE Router SHALL redirect the visitor to the corresponding anchor on the `/solutions` page
4. THE Solutions page SHALL render a SectionNav with items for each solution category section
5. EACH Solution_Category section SHALL contain a Slider or Role_Matcher interface that allows visitors to filter content by Role, Domain, and Industry
6. THE Slider component SHALL be an accessible carousel or tabbed interface that supports keyboard navigation and ARIA attributes

### Requirement 4: Company Page Consolidation

**User Story:** As a visitor, I want the Company page to consolidate About, Manifesto, Customer Zero, Why, Trust & Governance, and Contact into a single long-form page, so that I can learn about IntegrateWise in one place.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/company`, THE Site SHALL render a single long-form page containing sections for About, Manifesto, Customer Zero/Why, Trust & Governance, and Contact
2. THE Site SHALL assign each Company section a unique HTML `id` attribute (`about`, `manifesto`, `customer-zero`, `trust-governance`, `contact`)
3. WHEN a visitor navigates to a legacy standalone route (`/about`, `/manifesto`, `/customer-zero`, `/why`, `/contact`), THE Router SHALL redirect the visitor to the corresponding anchor on the `/company` page
4. THE Company page SHALL render a SectionNav with items for each defined section

### Requirement 5: Twin Page — Long-Form Sections

**User Story:** As a visitor, I want the Twin page to present all intelligence-layer content as a single long-form page with anchor sections, so that I can understand how the Twin works in a continuous flow.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/twin`, THE Site SHALL render a single long-form page containing sections for Overview, How Twin thinks, Human-in-the-loop (Approval Gate), Evidence & Transparency, Twin Execution, and Learning & History
2. THE Site SHALL assign each Twin section a unique HTML `id` attribute (`twin`, `how-it-works`, `approval-gate`, `evidence-transparency`, `twin-execution`, `learning-history`)
3. THE Twin page SHALL render a SectionNav with items for each defined section

### Requirement 6: Blog Index Page

**User Story:** As a visitor, I want the Blog page to display posts organized by category with section-based navigation, so that I can browse content by topic.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/blog`, THE Site SHALL render an index page with category sections for All, Product, Platform, Intelligence, and Case Studies
2. THE Site SHALL assign each Blog category section a unique HTML `id` attribute (`all`, `product`, `platform`, `intelligence`, `case-studies`)
3. THE Blog page SHALL render a SectionNav with items for each category section
4. EACH blog post card SHALL display a title, summary, category tag, and audience label

### Requirement 7: Resources Hub Page

**User Story:** As a visitor, I want the Resources page to serve as a hub linking to guides, webinars, one-pagers, and getting-started content, so that I can find learning materials in one place.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/resources`, THE Site SHALL render a hub page with sections for Guides, Webinars/Videos, One-pagers/PDFs, and Getting started
2. THE Site SHALL assign each Resources section a unique HTML `id` attribute (`guides`, `webinars`, `one-pagers`, `getting-started`)
3. THE Resources page SHALL render a SectionNav with items for each defined section

### Requirement 8: Docs Index Page

**User Story:** As a visitor, I want the Docs page to serve as a documentation index with section-based navigation, so that I can find technical documentation by topic.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/docs`, THE Site SHALL render an index page with sections for Getting started, Connectors, Workspaces, Twin & approvals, and Security & compliance
2. THE Site SHALL assign each Docs section a unique HTML `id` attribute (`getting-started`, `connectors`, `workspaces`, `twin-approvals`, `security-compliance`)
3. THE Docs page SHALL render a SectionNav with items for each defined section

### Requirement 9: Changelog Page

**User Story:** As a visitor, I want the Changelog page to display entries in reverse chronological order grouped by month with section-based navigation by product area, so that I can track updates by topic.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/changelog`, THE Site SHALL render entries in reverse chronological order grouped by month
2. THE Changelog page SHALL render a SectionNav with items for Latest, Platform, Product, Twin, and Connectors
3. THE Site SHALL assign each Changelog filter section a unique HTML `id` attribute (`latest`, `platform`, `product`, `twin`, `connectors`)
4. EACH changelog entry SHALL display tags identifying the product area, a title, a description of what changed, and a description of why it matters

### Requirement 10: Home Page — Hero and Overview Routing

**User Story:** As a visitor, I want the home page to serve as a hero and overview that routes into Platform, Product, and Solutions, so that I can quickly navigate to the area that interests me.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/`, THE Site SHALL render a hero section with the IntegrateWise value proposition
2. THE Home page SHALL contain navigation elements that link to `/platform`, `/product`, and `/solutions`
3. THE Home page SHALL contain a primary CTA ("Book a demo") and a secondary CTA ("See how it works")
4. EACH CTA on the Home page SHALL emit a Tracking_Event when clicked

### Requirement 11: Global Header Navigation

**User Story:** As a visitor, I want the global header to provide access to all top-level pages through a mega-menu with dropdowns, so that I can navigate the site from any page.

#### Acceptance Criteria

1. THE Header SHALL display the IntegrateWise brand linking to `/`
2. THE Header SHALL display primary navigation items for Platform, Product, Twin (Intelligence), Solutions, Company, Blog, Resources, Docs, and Changelog
3. THE Header SHALL display a primary CTA button ("Book a demo") and a secondary CTA ("See how it works")
4. WHEN a visitor hovers over or focuses on a navigation item that has children, THE Header SHALL display a Mega_Menu dropdown with grouped links, icons, and descriptions
5. WHEN a visitor is on a mobile viewport, THE Header SHALL collapse navigation into a hamburger menu that expands to show all navigation items
6. THE Header navigation links for Platform, Product, and Twin SHALL point to anchor sections on their respective Long_Form_Pages (e.g., `/platform#spine`)

### Requirement 12: Section-Based Navigation and Scroll Spy

**User Story:** As a visitor, I want each long-form page to have a sticky section navigation bar with scroll-spy behaviour, so that I can see where I am on the page and jump to any section.

#### Acceptance Criteria

1. EACH Long_Form_Page SHALL render a SectionNav component that sticks below the Header
2. THE SectionNav SHALL highlight the currently visible section as the visitor scrolls (Scroll_Spy behaviour)
3. WHEN a visitor clicks a SectionNav item, THE Site SHALL smooth-scroll to the corresponding section and update the URL hash
4. WHEN a visitor navigates to a URL with a hash (e.g., `/platform#security`), THE HashScroll component SHALL scroll to the corresponding section after the page renders
5. ON mobile viewports, THE SectionNav SHALL collapse into a dropdown showing the current section label, expandable to show all sections

### Requirement 13: Global Footer

**User Story:** As a visitor, I want the footer to mirror the site's information architecture with columnized links, so that I can navigate to any section from the bottom of any page.

#### Acceptance Criteria

1. THE Footer SHALL display columnized link groups for Platform, Product, Intelligence, Solutions, and Company
2. THE Footer SHALL display a security and compliance strip listing SOC 2 Type II, GDPR Ready, Tenant Isolation, and Approval-gated
3. THE Footer SHALL display the IntegrateWise tagline and copyright notice
4. EACH Footer link SHALL point to the correct anchor section on the corresponding Long_Form_Page

### Requirement 14: CTA Tracking Events

**User Story:** As a marketing team member, I want all CTAs to emit basic tracking events, so that I can measure visitor engagement across the site.

#### Acceptance Criteria

1. WHEN a visitor clicks any CTA button on the Site, THE Site SHALL emit a Tracking_Event containing the CTA label and the source location (page and section)
2. THE Tracking_Event SHALL be emitted before any navigation or modal action occurs

### Requirement 15: Semantic HTML and Accessibility

**User Story:** As a visitor using assistive technology, I want the site to use semantic HTML5 and accessible patterns, so that I can navigate and understand the content.

#### Acceptance Criteria

1. EACH page section SHALL use a semantic `<section>` element with a unique `id` attribute for anchor linking
2. THE Slider and Role_Matcher components SHALL support keyboard navigation (arrow keys, Tab, Enter, Escape)
3. THE Slider and Role_Matcher components SHALL use appropriate ARIA attributes (`role`, `aria-label`, `aria-selected`, `aria-controls`)
4. THE SectionNav mobile dropdown SHALL use `aria-expanded`, `aria-haspopup`, and `role="menu"` attributes
5. THE Header mobile menu SHALL use `aria-label`, `aria-expanded`, and appropriate focus management

### Requirement 16: Content Tone and Audience

**User Story:** As a marketing team member, I want the site content to maintain a confident, modern, slightly opinionated tone optimized for RevOps, BizOps, Customer Success, and technical buyers, so that the messaging resonates with the target audience.

#### Acceptance Criteria

1. THE Site SHALL use content language that is confident, modern, and slightly opinionated across all pages
2. THE Site SHALL address RevOps, BizOps, Customer Success, and technical buyer personas in its messaging
3. THE Site SHALL avoid generic AI hype language and instead ground claims in specific product capabilities (Digital Memory, Spine, Approval Gate, Twin)

### Requirement 17: Prerendering Support

**User Story:** As a site operator, I want all routes to be prerendered at build time, so that the site loads quickly and is indexable by search engines.

#### Acceptance Criteria

1. WHEN the build script runs, THE Prerender script SHALL generate static HTML for every top-level route (`/`, `/platform`, `/product`, `/twin`, `/solutions`, `/company`, `/blog`, `/resources`, `/docs`, `/changelog`)
2. IF a prerender fails for any route, THEN THE build script SHALL log the failing route and exit with a non-zero status code

### Requirement 18: Solutions Slider and Role Matcher

**User Story:** As a visitor on the Solutions page, I want to filter solution content by Role, Domain, and Industry using an interactive interface, so that I can find the solution most relevant to my work.

#### Acceptance Criteria

1. EACH Solution_Category section on the `/solutions` page SHALL contain a Role_Matcher or Slider component
2. THE Role_Matcher SHALL allow filtering by at least three dimensions: Role, Domain, and Industry
3. WHEN a visitor selects a filter, THE Role_Matcher SHALL update the displayed cards without a full page reload
4. THE Role_Matcher filter state SHALL be reflected in the URL (via query parameters or hash) so that filtered views are shareable
5. IF no cards match the selected filters, THEN THE Role_Matcher SHALL display a message indicating no matches and suggest broadening the filter criteria
