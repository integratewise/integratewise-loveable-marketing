/** Canonical site metadata and reusable copy fragments. */

export const SITE_NAME = "IntegrateWise";
export const SITE_TAGLINE = "Your work resets every day.";
export const SITE_DESCRIPTION =
  "IntegrateWise stops the reset. Your work becomes Memory. Within seconds of opening, you see what changed. Your Twin connects, explains, and prepares — you approve every move.";

export const PRIMARY_NAV = [
  { label: "Platform", to: "/platform" },
  { label: "Product", to: "/product" },
  { label: "Twin", to: "/product/the-twin" },
  { label: "Solutions", to: "/solutions" },
  { label: "Pricing", to: "/pricing" },
  { label: "Why", to: "/why" },
] as const;

export const TRUST_STRIP = [
  "SOC 2 Type II",
  "GDPR Ready",
  "Tenant Isolation",
  "Approval-gated",
] as const;
