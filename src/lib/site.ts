/** Canonical site metadata, navigation, and Solutions taxonomy. */
import type { ComponentType } from "react";
import {
  Activity,
  BarChart3,
  Boxes,
  Briefcase,
  Building2,
  CircleDollarSign,
  CircuitBoard,
  Cpu,
  Database,
  DollarSign,
  FileText,
  Handshake,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  Package,
  Plug,
  Receipt,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  Telescope,
  Truck,
  TrendingUp,
  User,
  UserCircle,
  Users,
  Wrench,
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

export const SOLUTIONS_BY_FUNCTION: SolutionItem[] = [
  {
    to: "/solutions/account-success",
    label: "Account Success",
    blurb: "Entity matching and dedup",
    icon: Users,
  },
  {
    to: "/solutions/business-ops",
    label: "Business Ops",
    blurb: "The live operating picture",
    icon: BarChart3,
  },
  {
    to: "/solutions/personal-space",
    label: "Personal Space",
    blurb: "Your workspace, your context",
    icon: Sparkles,
    waitlist: true,
  },
];

// Kept for backwards compatibility with existing imports.
export const SOLUTIONS_BY_OUTCOME = SOLUTIONS_BY_FUNCTION;

export const SOLUTIONS_BY_INDUSTRY: SolutionItem[] = [
  {
    to: "/solutions/by-industry/saas",
    label: "SaaS",
    blurb: "Renewals, expansion, adoption",
    icon: LineChart,
  },
  {
    to: "/solutions/by-industry/professional-services",
    label: "Services & Agencies",
    blurb: "Projects, utilisation, billing",
    icon: Wrench,
  },
  {
    to: "/solutions/by-industry/manufacturing",
    label: "Manufacturing & Trade",
    blurb: "Orders, shipments, exceptions",
    icon: Package,
  },
  {
    to: "/solutions/by-industry/ecommerce",
    label: "Retail & Ecommerce",
    blurb: "Stock, orders, returns, support",
    icon: ShoppingCart,
  },
  {
    to: "/solutions/by-industry/professional-services",
    label: "Professional Services",
    blurb: "Engagements, billing, relationships",
    icon: Briefcase,
  },
  {
    to: "/solutions/by-industry/fintech",
    label: "Finance",
    blurb: "Revenue, risk, collections, cash",
    icon: TrendingUp,
  },
];

export const SOLUTIONS_BY_ROLE: SolutionItem[] = [
  {
    to: "/solutions/account-success",
    label: "Customer Success & TAMs",
    blurb: "Save accounts, accelerate renewals",
    icon: UserCircle,
  },
  {
    to: "/solutions/by-role",
    label: "Founders & CXOs",
    blurb: "Monday brief, board pack, full view",
    icon: Telescope,
  },
  {
    to: "/solutions/business-ops",
    label: "Rev / Business Ops",
    blurb: "Pipeline, headcount, risk — connected",
    icon: SlidersHorizontal,
  },
  {
    to: "/solutions/business-ops",
    label: "Operations & Delivery",
    blurb: "Projects, utilisation, exceptions",
    icon: Truck,
  },
  {
    to: "/solutions/business-ops",
    label: "Finance Leaders",
    blurb: "Cash, collections, runway",
    icon: CircleDollarSign,
  },
  {
    to: "/solutions/personal-space",
    label: "Individual Professionals",
    blurb: "Morning brief, session memory",
    icon: User,
  },
];

// Backwards-compatible single-link references used elsewhere.
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
  /** Optional in-page hash anchor (e.g. "spine"). Renders as `${to}#${hash}`. */
  hash?: string;
  label: string;
  blurb: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const PLATFORM_LINKS: NavLeaf[] = [
  { to: "/platform", hash: "spine", label: "Spine", blurb: "The base layer — one connected Memory.", icon: CircuitBoard },
  { to: "/platform", hash: "how-it-works", label: "How it works", blurb: "Apps → Spine → Digital Memory loop.", icon: Workflow },
  { to: "/platform", hash: "digital-memory", label: "Digital Memory", blurb: "Truth, Context, Session Summaries.", icon: Database },
  { to: "/platform", hash: "connectors", label: "Connectors", blurb: "Tally, Razorpay, WhatsApp, CRMs and more.", icon: Plug },
  { to: "/platform", hash: "security", label: "Security", blurb: "SOC 2, GDPR, tenant isolation.", icon: ShieldCheck },
  { to: "/platform", hash: "integrations", label: "Integrations", blurb: "How your stack feeds the Spine.", icon: Package },
];

export const PRODUCT_LINKS: NavLeaf[] = [
  { to: "/product", hash: "workspace", label: "Workspace", blurb: "Your Workspace adapts to how you work.", icon: LayoutDashboard },
  { to: "/product", hash: "how-it-works", label: "How it works", blurb: "Memory → Workspace → Approval.", icon: Workflow },
  { to: "/product", hash: "digital-memory", label: "Digital Memory", blurb: "Every view backed by sources.", icon: Database },
  { to: "/product", hash: "security", label: "Security", blurb: "Approval beside every action.", icon: ShieldCheck },
];

export const INTELLIGENCE_LINKS: NavLeaf[] = [
  { to: "/intelligence", hash: "twin", label: "Twin", blurb: "Your Twin reads your Digital Memory.", icon: Sparkles },
  { to: "/intelligence", hash: "how-it-works", label: "How it works", blurb: "Read → score → propose → wait.", icon: Workflow },
  { to: "/intelligence", hash: "digital-memory-reference", label: "Digital Memory Reference", blurb: "What the Twin can and cannot see.", icon: Database },
  { to: "/intelligence", hash: "twin-execution", label: "Twin Execution", blurb: "Approve → execute → re-ingest → learn.", icon: Activity },
  { to: "/intelligence", hash: "security", label: "Security", blurb: "No autonomy, full audit trail.", icon: ShieldCheck },
];

export const SOLUTIONS_LINKS: NavLeaf[] = [
  { to: "/solutions", hash: "by-use-case", label: "By Use Case", blurb: "Churn, pipeline, visibility, brief.", icon: Target },
  { to: "/solutions", hash: "by-role", label: "By Role", blurb: "CS, founders, ops, finance, individuals.", icon: Users },
  { to: "/solutions", hash: "by-industry", label: "By Industry", blurb: "SaaS, services, retail, finance and more.", icon: Boxes },
];

export const COMPANY_LINKS: NavLeaf[] = [
  { to: "/company", hash: "about", label: "About", blurb: "Operator-built, person-first.", icon: User },
  { to: "/company", hash: "manifesto", label: "Manifesto", blurb: "What we believe.", icon: FileText },
  { to: "/company", hash: "customer-zero", label: "Customer Zero", blurb: "We run IntegrateWise on ourselves.", icon: Rocket },
  { to: "/company", hash: "why", label: "Why", blurb: "The Human API story.", icon: Star },
  { to: "/company", hash: "contact", label: "Contact", blurb: "Founder-led conversation.", icon: Briefcase },
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
  { kind: "menu", label: "Platform", groups: [{ heading: "Platform", items: PLATFORM_LINKS }] },
  { kind: "menu", label: "Product", groups: [{ heading: "Product", items: PRODUCT_LINKS }] },
  { kind: "menu", label: "Intelligence", groups: [{ heading: "Intelligence", items: INTELLIGENCE_LINKS }] },
  { kind: "menu", label: "Solutions", groups: [{ heading: "Solutions", items: SOLUTIONS_LINKS }] },
  { kind: "link", label: "Pricing", to: "/pricing" },
  { kind: "menu", label: "Company", groups: [{ heading: "Company", items: COMPANY_LINKS }] },
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
