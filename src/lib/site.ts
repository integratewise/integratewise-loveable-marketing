/** Canonical site metadata, navigation, and Solutions taxonomy. */
import type { ComponentType } from "react";
import {
  Activity,
  Boxes,
  Briefcase,
  Building2,
  CircuitBoard,
  Cpu,
  Factory,
  FileText,
  Handshake,
  HeartPulse,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  LineChart,
  Package,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  User,
  Wallet,
  Wrench,
  Workflow,
} from "lucide-react";

export const SITE_NAME = "IntegrateWise";
export const SITE_TAGLINE = "Stop being the human API between your tools.";
export const SITE_DESCRIPTION =
  "Every app runs on the Workspace. It turns raw data into scoped memory — relevant, stable, and ready to act on. AI doesn't work on raw data; it works on memory, proposing structured changes. The governance layer decides what becomes real and maintains a single active context — so work always happens in one clear state.";
export const SITE_URL = "https://integratewise.ai";
export const SITE_OG_IMAGE = `${SITE_URL}/og-image.png`;

/* Canonical copy tokens — accumulating, reusable Digital Memory. */
export const MEMORY_COPY = {
  primary:
    "Digital Memory accumulates with every update, every decision, and every interaction — then gets reused by your Workspace, your Twin, and your team.",
  short: "Memory compounds. Context improves. Decisions get faster.",
} as const;

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

/* By Use Case — three doors into the /solutions hub. Used as first column of Solutions mega-menu. */
export const SOLUTIONS_BY_USE_CASE: SolutionItem[] = [
  {
    to: "/solutions/account-success",
    label: "Account Success",
    blurb: "Walk in already knowing what changed.",
    icon: Handshake,
  },
  {
    to: "/solutions/business-ops",
    label: "Business Ops",
    blurb: "One screen. Everything that changed.",
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

/* Back-compat alias — older callers used SOLUTIONS_BY_FUNCTION. */
export const SOLUTIONS_BY_FUNCTION: SolutionItem[] = SOLUTIONS_BY_USE_CASE;

/* Back-compat alias — kept so older callers (Home SolutionsDoors, etc.) keep working. */
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
  to: "/solutions/role",
  label: "By Role",
  blurb: "Filter the same workspace by your role.",
  icon: Target,
} as const;

export const SOLUTIONS_BY_INDUSTRY_INDEX = {
  to: "/solutions/industry",
  label: "By Industry",
  blurb: "One Memory, different industries.",
  icon: Boxes,
} as const;

/* By Industry — surface six industries that link into /solutions/industry slider. */
export const SOLUTIONS_BY_INDUSTRY: SolutionItem[] = [
  {
    to: "/solutions/industry#saas",
    label: "SaaS",
    blurb: "Renewals, expansion, adoption.",
    icon: LineChart,
  },
  {
    to: "/solutions/industry#agency",
    label: "Services & Agencies",
    blurb: "Projects, utilisation, billing.",
    icon: Briefcase,
  },
  {
    to: "/solutions/industry#manufacturing",
    label: "Manufacturing & Trade",
    blurb: "Orders, shipments, exceptions.",
    icon: Factory,
  },
  {
    to: "/solutions/industry#retail",
    label: "Retail & Ecommerce",
    blurb: "Stock, orders, returns, support.",
    icon: ShoppingBag,
  },
  {
    to: "/solutions/industry#professional-services",
    label: "Professional Services",
    blurb: "Engagements, billing, relationships.",
    icon: HeartPulse,
  },
  {
    to: "/solutions/industry#finance",
    label: "Finance",
    blurb: "Revenue, risk, collections, cash.",
    icon: Landmark,
  },
];

/* By Role — six roles linking into /solutions/role slider. */
export const SOLUTIONS_BY_ROLE: SolutionItem[] = [
  {
    to: "/solutions/role#account-lead",
    label: "Customer Success & TAMs",
    blurb: "Save accounts, accelerate renewals.",
    icon: Handshake,
  },
  {
    to: "/solutions/role#founder",
    label: "Founders & CXOs",
    blurb: "Monday brief, board pack, full view.",
    icon: Rocket,
  },
  {
    to: "/solutions/role#ops",
    label: "Rev / Business Ops",
    blurb: "Pipeline, headcount, risk — connected.",
    icon: Activity,
  },
  {
    to: "/solutions/role#delivery",
    label: "Operations & Delivery",
    blurb: "Projects, utilisation, exceptions.",
    icon: Wrench,
  },
  {
    to: "/solutions/role#finance",
    label: "Finance Leaders",
    blurb: "Cash, collections, runway.",
    icon: Wallet,
  },
  {
    to: "/solutions/role#individual",
    label: "Individual Professionals",
    blurb: "Morning brief, session memory.",
    icon: User,
    waitlist: true,
  },
];

/* Legacy industry slug map — kept so existing /solutions/by-industry/$industry routes resolve. */
export const SOLUTIONS_INDUSTRIES: IndustryItem[] = [
  { slug: "saas", to: "/solutions/industry#saas", label: "SaaS" },
  { slug: "ecommerce", to: "/solutions/industry#retail", label: "Retail & Ecommerce" },
  {
    slug: "healthcare",
    to: "/solutions/industry#professional-services",
    label: "Professional Services",
  },
  { slug: "fintech", to: "/solutions/industry#finance", label: "Finance" },
  {
    slug: "manufacturing",
    to: "/solutions/industry#manufacturing",
    label: "Manufacturing & Trade",
  },
  {
    slug: "professional-services",
    to: "/solutions/industry#agency",
    label: "Services & Agencies",
  },
];

export const SOLUTIONS_GROUPS = {
  overview: SOLUTIONS_OVERVIEW,
  byFunction: SOLUTIONS_BY_FUNCTION,
  byOutcome: SOLUTIONS_BY_OUTCOME,
  byRole: SOLUTIONS_BY_ROLE,
  byIndustry: SOLUTIONS_BY_INDUSTRY,
  byRoleIndex: SOLUTIONS_BY_ROLE_INDEX,
  byIndustryIndex: SOLUTIONS_BY_INDUSTRY_INDEX,
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
  waitlist?: boolean;
}

/* All Platform dropdown items are anchors on /platform (single long page). */
export const PLATFORM_LINKS: NavLeaf[] = [
  {
    to: "/platform#spine",
    label: "Spine",
    blurb: "One layer connects every app.",
    icon: CircuitBoard,
  },
  {
    to: "/platform#how-it-works",
    label: "How it works",
    blurb: "Apps → Spine → Memory → Workspace.",
    icon: Workflow,
  },
  {
    to: "/platform#digital-memory",
    label: "Digital Memory",
    blurb: "Accumulates and gets reused.",
    icon: Sparkles,
  },
  {
    to: "/platform#connectors",
    label: "Connectors",
    blurb: "70+ schema-aware connectors.",
    icon: Cpu,
  },
  {
    to: "/platform#security",
    label: "Security",
    blurb: "SOC 2, GDPR, tenant isolation.",
    icon: ShieldCheck,
  },
  {
    to: "/platform#integrations",
    label: "Integrations",
    blurb: "The tools you already use.",
    icon: Package,
  },
];

/* All Product dropdown items are anchors on /product (single long page). */
export const PRODUCT_LINKS: NavLeaf[] = [
  {
    to: "/product#workspace",
    label: "Workspace",
    blurb: "Your living work surface.",
    icon: LayoutDashboard,
  },
  {
    to: "/product#how-it-works",
    label: "How it works",
    blurb: "Memory powers every view.",
    icon: Workflow,
  },
  {
    to: "/product#digital-memory",
    label: "Digital Memory",
    blurb: "Built from accumulated context.",
    icon: Sparkles,
  },
  {
    to: "/product#security",
    label: "Security",
    blurb: "RBAC, audit trail, Approval Gate.",
    icon: ShieldCheck,
  },
];

/* Intelligence (Twin) — anchors on /twin. Order per spec: Twin → How it works → Memory Reference → Twin Execution → Security. */
export const INTELLIGENCE_LINKS: NavLeaf[] = [
  {
    to: "/twin#twin",
    label: "Twin",
    blurb: "Intelligence layer that proposes.",
    icon: Sparkles,
  },
  {
    to: "/twin#how-it-works",
    label: "How it works",
    blurb: "Reads Memory, scores signals.",
    icon: Workflow,
  },
  {
    to: "/twin#digital-memory-reference",
    label: "Digital Memory Reference",
    blurb: "Twin's read-only library.",
    icon: FileText,
  },
  {
    to: "/twin#twin-execution",
    label: "Twin Execution",
    blurb: "Propose → approve → execute.",
    icon: Activity,
  },
  {
    to: "/twin#security",
    label: "Security",
    blurb: "No autonomous actions, ever.",
    icon: ShieldCheck,
  },
];

/* Back-compat alias — TWIN_LINKS used by older imports. */
export const TWIN_LINKS: NavLeaf[] = INTELLIGENCE_LINKS;

export const COMPANY_LINKS: NavLeaf[] = [
  { to: "/about", label: "About", blurb: "Founder bio + the near-miss story.", icon: User },
  { to: "/manifesto", label: "Manifesto", blurb: "Principles we build by.", icon: FileText },
  { to: "/customer-zero", label: "Customer Zero", blurb: "I run it on itself.", icon: Rocket },
  { to: "/why", label: "Why", blurb: "The category thesis.", icon: Star },
  { to: "/pricing", label: "Pricing", blurb: "Plans, sync intervals, ROI.", icon: Wallet },
  { to: "/contact", label: "Contact", blurb: "Founder-led contact.", icon: LifeBuoy },
];

/* Back-compat — some routes import RESOURCES_LINKS. Mirror COMPANY_LINKS so nothing breaks. */
export const RESOURCES_LINKS: NavLeaf[] = COMPANY_LINKS;

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
  {
    kind: "menu",
    label: "Intelligence",
    groups: [{ heading: "Intelligence", items: INTELLIGENCE_LINKS }],
  },
  {
    kind: "menu",
    label: "Solutions",
    groups: [
      {
        heading: "By Use Case",
        items: SOLUTIONS_BY_USE_CASE.map((s) => ({
          to: s.to,
          label: s.label,
          blurb: s.blurb,
          icon: s.icon,
          ...(s.waitlist ? { waitlist: true } : {}),
        })) as NavLeaf[],
      },
      {
        heading: "By Role",
        items: SOLUTIONS_BY_ROLE.map((s) => ({
          to: s.to,
          label: s.label,
          blurb: s.blurb,
          icon: s.icon,
        })) as NavLeaf[],
      },
      {
        heading: "By Industry",
        items: SOLUTIONS_BY_INDUSTRY.map((s) => ({
          to: s.to,
          label: s.label,
          blurb: s.blurb,
          icon: s.icon,
        })) as NavLeaf[],
      },
    ],
    footer: {
      label: "See all solutions",
      to: "/solutions",
      chips: SOLUTIONS_INDUSTRIES,
    },
  },
  
  {
    kind: "menu",
    label: "Company",
    groups: [{ heading: "Company", items: COMPANY_LINKS }],
  },
];

/* Industry icon map (used by /solutions hub display) */
export const INDUSTRY_ICONS: Record<
  string,
  ComponentType<{ size?: number; className?: string }>
> = {
  saas: LineChart,
  ecommerce: ShoppingBag,
  healthcare: Stethoscope,
  fintech: LineChart,
  manufacturing: Building2,
  "professional-services": HeartPulse,
};
