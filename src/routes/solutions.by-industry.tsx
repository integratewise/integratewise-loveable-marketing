import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy index — redirect to the new singular hash-driven slider. */
export const Route = createFileRoute("/solutions/by-industry")({
  beforeLoad: () => {
    throw redirect({ to: "/solutions/industry", replace: true });
  },
  component: () => null,
});

/** Kept as a no-op export so legacy importers (the $industry detail route) don't break. */
export const INDUSTRIES = [
  { slug: "saas", name: "SaaS", blurb: "", live: true },
  { slug: "ecommerce", name: "eCommerce", blurb: "", live: true },
  { slug: "healthcare", name: "Healthcare", blurb: "", live: false },
  { slug: "fintech", name: "FinTech", blurb: "", live: false },
  { slug: "manufacturing", name: "Manufacturing", blurb: "", live: false },
  { slug: "professional-services", name: "Professional Services", blurb: "", live: true },
] as const;
