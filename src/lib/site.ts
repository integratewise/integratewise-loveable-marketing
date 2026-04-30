/** Canonical site metadata, navigation, and Solutions taxonomy. */
import type { ComponentType } from "react";
import {
  Activity,
  Boxes,
  Briefcase,
  Building2,
  CircuitBoard,
  Cpu,
  FileText,
  Handshake,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  Package,
  Receipt,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  User,
  Workflow,
} from "lucide-react";

export const SITE_NAME = "IntegrateWise";
export const SITE_TAGLINE = "Your work resets every day.";
export const SITE_DESCRIPTION =
  "IntegrateWise stops the reset. Your work becomes Memory. Within seconds of opening, you see what changed. Your Twin connects, explains, and prepares — you approve every move.";

export const TRUST_STRIP = [
  "SOC 2 Type II",
  "GDPR Ready",
  "Tenant Isolation",
  "Approval-gated",
] as const;

/* -------------------------------------------------------------------------
 * Solutions taxonomy — single source of truth for header and /solutions hub
 * ----------------------------------------------------------------------- */

export interface SolutionItem {
  to: string;
  label: string;
  blurb: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  waitlist?: boolean;
}

export interface IndustryItem {
  slug: string;
  to: string;
  label: string;
}

export const SOLUTIONS_OVERVIEW = {
  to: "/solutions",
  label: "Solutions overview",
  blurb: "Same Memory. Same Twin. Shaped for each team's work.",
  icon: LayoutDashboard,
} as const;

export const SOLUTIONS_BY_OUTCOME: SolutionItem[] = [
  {
    to: "/solutions/account-success",
    label: "Account Success",
    blurb: "Walk into every customer conversation already knowing what changed.",
    icon: Handshake,
  },
  {
    to: "/solutions/business-ops",
    label: "Business Ops",
    blurb: "One screen. Everything that changed since Friday.",
    icon: Activity,
  },
  {
    to: "/solutions/personal-space",
    label: "Personal Space",
    blurb: "Your day, finally assembled.",
    icon: User,
    waitlist: true,
  },
];

export const SOLUTIONS_BY_ROLE_INDEX = {
  to: "/solutions/by-role",
  label: "By Role",
  blurb: "Filter the same workspace by your role.",
  icon: Target,
} as const;

export const SOLUTIONS_BY_INDUSTRY_INDEX = {
  to: "/solutions/by-industry",
  label: "By Industry",
  blurb: "Templates shaped for how your industry actually works.",
  icon: Boxes,
} as const;

export const SOLUTIONS_INDUSTRIES: IndustryItem[] = [
  { slug: "saas", to: "/solutions/by-industry/saas", label: "SaaS" },
  { slug: "ecommerce", to: "/solutions/by-industry/ecommerce", label: "eCommerce" },
  { slug: "healthcare", to: "/solutions/by-industry/healthcare", label: "Healthcare" },
  { slug: "fintech", to: "/solutions/by-industry/fintech", label: "FinTech" },
  { slug: "manufacturing", to: "/solutions/by-industry/manufacturing", label: "Manufacturing" },
  {
    slug: "professional-services",
    to: "/solutions/by-industry/professional-services",
    label: "Professional Services",
  },
];

export const SOLUTIONS_GROUPS = {
  overview: SOLUTIONS_OVERVIEW,
  byOutcome: SOLUTIONS_BY_OUTCOME,
  byRole: SOLUTIONS_BY_ROLE_INDEX,
  byIndustry: SOLUTIONS_BY_INDUSTRY_INDEX,
  industries: SOLUTIONS_INDUSTRIES,
} as const;

/* -------------------------------------------------------------------------
 * Other dropdowns
 * ----------------------------------------------------------------------- */

export interface NavLeaf {
  to: string;
  label: string;
  blurb: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const PLATFORM_LINKS: NavLeaf[] = [
  { to: "/platform/the-spine", label: "The Spine", blurb: "The Memory engine.", icon: CircuitBoard },
  { to: "/platform/how-it-works", label: "How it works", blurb: "Ingest → Memory loop.", icon: Workflow },
  { to: "/platform/integrations", label: "Integrations", blurb: "Connect the apps you already use.", icon: Package },
  { to: "/platform/security", label: "Security", blurb: "SOC 2, GDPR, isolation.", icon: ShieldCheck },
  { to: "/platform/infrastructure", label: "Infrastructure", blurb: "Architecture, regions, SLAs.", icon: Cpu },
];

export const PRODUCT_LINKS: NavLeaf[] = [
  { to: "/product", label: "Workspace", blurb: "Your unified work surface.", icon: LayoutDashboard },
  { to: "/twin", label: "The Twin", blurb: "Connects, explains, prepares.", icon: Sparkles },
  { to: "/product/approval", label: "Approval", blurb: "Nothing executes without you.", icon: ShieldCheck },
  { to: "/product/reference-layer", label: "Reference Layer", blurb: "Truth you own.", icon: FileText },
];

export const RESOURCES_LINKS: NavLeaf[] = [
  { to: "/resources", label: "Resources hub", blurb: "Docs, changelog, blog, stories.", icon: LayoutDashboard },
  { to: "/docs", label: "Docs", blurb: "Concepts, getting started, reference.", icon: FileText },
  { to: "/changelog", label: "Changelog", blurb: "How IntegrateWise is learning with you.", icon: Activity },
  { to: "/blog", label: "Blog", blurb: "Stories from the end of the Human API.", icon: FileText },
  { to: "/why", label: "Why", blurb: "The category thesis.", icon: Star },
  { to: "/manifesto", label: "Manifesto", blurb: "Principles we build by.", icon: FileText },
  { to: "/customer-zero", label: "Customer Zero", blurb: "I run it on itself.", icon: Rocket },
  { to: "/about", label: "About", blurb: "Founder bio + the near-miss story.", icon: User },
  { to: "/company", label: "Company", blurb: "Why IntegrateWise exists.", icon: Building2 },
  { to: "/contact", label: "Contact", blurb: "Founder-led contact.", icon: Briefcase },
];

/* -------------------------------------------------------------------------
 * Primary nav (drives Header rendering)
 * ----------------------------------------------------------------------- */

export type NavGroup =
  | { kind: "link"; label: string; to: string }
  | {
      kind: "menu";
      label: string;
      groups: ReadonlyArray<{ heading: string; items: NavLeaf[] }>;
      footer?: { label: string; to: string; chips?: IndustryItem[] };
    };

export const PRIMARY_NAV: ReadonlyArray<NavGroup> = [
  {
    kind: "menu",
    label: "Platform",
    groups: [{ heading: "Platform", items: PLATFORM_LINKS }],
  },
  {
    kind: "menu",
    label: "Product",
    groups: [{ heading: "Product", items: PRODUCT_LINKS }],
  },
  { kind: "link", label: "Twin", to: "/twin" },
  {
    kind: "menu",
    label: "Solutions",
    groups: [
      {
        heading: "Overview",
        items: [
          {
            to: SOLUTIONS_OVERVIEW.to,
            label: SOLUTIONS_OVERVIEW.label,
            blurb: SOLUTIONS_OVERVIEW.blurb,
            icon: SOLUTIONS_OVERVIEW.icon,
          },
        ],
      },
      { heading: "By outcome", items: SOLUTIONS_BY_OUTCOME },
      {
        heading: "Filters",
        items: [
          {
            to: SOLUTIONS_BY_INDUSTRY_INDEX.to,
            label: SOLUTIONS_BY_INDUSTRY_INDEX.label,
            blurb: SOLUTIONS_BY_INDUSTRY_INDEX.blurb,
            icon: SOLUTIONS_BY_INDUSTRY_INDEX.icon,
          },
          {
            to: SOLUTIONS_BY_ROLE_INDEX.to,
            label: SOLUTIONS_BY_ROLE_INDEX.label,
            blurb: SOLUTIONS_BY_ROLE_INDEX.blurb,
            icon: SOLUTIONS_BY_ROLE_INDEX.icon,
          },
        ],
      },
    ],
    footer: {
      label: "Browse all 6 industries",
      to: SOLUTIONS_BY_INDUSTRY_INDEX.to,
      chips: SOLUTIONS_INDUSTRIES,
    },
  },
  { kind: "link", label: "Company", to: "/company" },
];

/* Industry icon map (used by /solutions hub display) */
export const INDUSTRY_ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  saas: LineChart,
  ecommerce: ShoppingBag,
  healthcare: Stethoscope,
  fintech: LineChart,
  manufacturing: Building2,
  "professional-services": HeartPulse,
};
