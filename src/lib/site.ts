/** Canonical site metadata and reusable copy fragments. */

export const SITE_NAME = "IntegrateWise";
export const SITE_TAGLINE = "Build memory for your work.";
export const SITE_DESCRIPTION =
  "Your data becomes Digital Memory. Your Twin proposes the next move. You approve every action.";

export const PRIMARY_NAV = [
  { label: "Platform", to: "/platform" },
  { label: "Product", to: "/product" },
  { label: "Solutions", to: "/solutions" },
  { label: "Pricing", to: "/pricing" },
  { label: "Customer Zero", to: "/customer-zero" },
] as const;

export const TRUST_STRIP = [
  "SOC 2 Compliant",
  "Approval-gated",
  "Memory stays yours",
] as const;
