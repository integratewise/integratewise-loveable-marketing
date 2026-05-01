/** Solutions page content — cards, filter dimensions, and section metadata. */
import type { ComponentType } from "react";
import {
  Users,
  Briefcase,
  User,
  Handshake,
  Activity,
  Target,
  LineChart,
  ShoppingBag,
  Factory,
  HeartPulse,
  Landmark,
  Rocket,
  Wrench,
  Wallet,
} from "lucide-react";
import type { SolutionCard } from "@/lib/track";

// ---------------------------------------------------------------------------
// Section metadata
// ---------------------------------------------------------------------------

export interface SolutionsSection {
  id: string;
  navLabel: string;
  badge: string;
  heading: string;
  subheading: string;
}

export const SOLUTIONS_SECTIONS: SolutionsSection[] = [
  {
    id: "solutions-overview",
    navLabel: "Overview",
    badge: "Solutions",
    heading: "One Spine. Many ways of working.",
    subheading:
      "The Spine, Digital Memory, Workspace, and Twin are the same for everyone. Solutions are just different doors into that foundation — tuned for how you work, not for one job title.",
  },
  {
    id: "account-success",
    navLabel: "Account Success",
    badge: "Solution 1 · Account Success",
    heading: "Account Success — one client story, many tools.",
    subheading:
      "Anyone who manages relationships — CAs, SaaS CSMs, service agencies, freelancers — needs one place to see the full story of each account.",
  },
  {
    id: "business-ops",
    navLabel: "Business Ops",
    badge: "Solution 2 · Business Ops",
    heading: "Business Ops — run the day from one screen.",
    subheading:
      "Founders, owners, and operations leaders — in retail shops, agencies, SaaS, professional services — all have the same problem: every Monday starts with spreadsheets and tab-hunting.",
  },
  {
    id: "personal-space",
    navLabel: "Personal Space",
    badge: "Solution 3 · Personal Space",
    heading: "Personal Space — your own operating system.",
    subheading:
      "Everyone has scattered personal work — side projects, learning, family tasks, finances. Personal Space uses the same Spine and Workspace, but just for you.",
  },
];

// ---------------------------------------------------------------------------
// Solution cards (used by RoleMatcher filter)
// ---------------------------------------------------------------------------

export const SOLUTION_CARDS: SolutionCard[] = [
  // Account Success cards
  {
    id: "csm-renewals",
    title: "CSM Renewal Management",
    blurb: "Track renewals, usage drops, and churn risk across your book of business.",
    icon: Handshake,
    roles: ["csm", "account-lead", "tam"],
    domains: ["account-success"],
    industries: ["saas", "agency", "professional-services"],
  },
  {
    id: "ca-client-management",
    title: "CA Client & Filing Tracker",
    blurb: "GST filings, invoices, and client communications in one stitched view.",
    icon: Users,
    roles: ["ca", "accountant", "founder"],
    domains: ["account-success"],
    industries: ["professional-services", "finance"],
  },
  {
    id: "agency-retainers",
    title: "Agency Retainer Health",
    blurb: "Retainer status, project health, and client satisfaction from scattered tools.",
    icon: Target,
    roles: ["account-lead", "founder", "ops-lead"],
    domains: ["account-success"],
    industries: ["agency", "professional-services"],
  },
  // Business Ops cards
  {
    id: "founder-morning-brief",
    title: "Founder Morning Brief",
    blurb: "Revenue, collections, risks, and team capacity — before your first meeting.",
    icon: Rocket,
    roles: ["founder", "cxo", "ops-lead"],
    domains: ["business-ops"],
    industries: ["saas", "retail", "agency", "manufacturing"],
  },
  {
    id: "revenue-collections",
    title: "Revenue & Collections View",
    blurb: "Daily sales, credit outstanding, overdue payments — no more Monday spreadsheets.",
    icon: LineChart,
    roles: ["founder", "finance-lead", "ops-lead"],
    domains: ["business-ops"],
    industries: ["retail", "manufacturing", "saas"],
  },
  {
    id: "ops-dashboard",
    title: "Operations Dashboard",
    blurb: "Tickets, team capacity, pending filings, and key renewals on one screen.",
    icon: Activity,
    roles: ["ops-lead", "founder", "delivery-lead"],
    domains: ["business-ops"],
    industries: ["saas", "agency", "retail", "manufacturing"],
  },
  // Personal Space cards
  {
    id: "personal-workspace",
    title: "Personal Workspace",
    blurb: "Your calendar, tasks, notes, and projects as one private Digital Memory.",
    icon: User,
    roles: ["individual"],
    domains: ["personal-space"],
    industries: ["saas", "agency", "retail", "professional-services", "finance", "manufacturing"],
    waitlist: true,
  },
  {
    id: "side-project-tracker",
    title: "Side Project Tracker",
    blurb: "Learning goals, side projects, and personal deadlines — assembled, not scattered.",
    icon: Briefcase,
    roles: ["individual"],
    domains: ["personal-space"],
    industries: ["saas", "agency", "retail", "professional-services", "finance", "manufacturing"],
    waitlist: true,
  },
];

// ---------------------------------------------------------------------------
// Filter dimensions (used by RoleMatcher)
// ---------------------------------------------------------------------------

export interface FilterOption {
  key: string;
  label: string;
}

export interface FilterDimension {
  key: "role" | "domain" | "industry";
  label: string;
  options: FilterOption[];
}

export const FILTER_DIMENSIONS: FilterDimension[] = [
  {
    key: "role",
    label: "Role",
    options: [
      { key: "all", label: "All roles" },
      { key: "csm", label: "CSM / Account Lead" },
      { key: "founder", label: "Founder / CXO" },
      { key: "ops-lead", label: "Ops Lead" },
      { key: "ca", label: "CA / Accountant" },
      { key: "finance-lead", label: "Finance Lead" },
      { key: "delivery-lead", label: "Delivery Lead" },
      { key: "individual", label: "Individual" },
    ],
  },
  {
    key: "domain",
    label: "Domain",
    options: [
      { key: "all", label: "All domains" },
      { key: "account-success", label: "Account Success" },
      { key: "business-ops", label: "Business Ops" },
      { key: "personal-space", label: "Personal Space" },
    ],
  },
  {
    key: "industry",
    label: "Industry",
    options: [
      { key: "all", label: "All industries" },
      { key: "saas", label: "SaaS" },
      { key: "retail", label: "Retail & Ecommerce" },
      { key: "agency", label: "Services & Agencies" },
      { key: "manufacturing", label: "Manufacturing & Trade" },
      { key: "professional-services", label: "Professional Services" },
      { key: "finance", label: "Finance" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Door cards (hero section)
// ---------------------------------------------------------------------------

export interface DoorCard {
  id: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  blurb: string;
  waitlist?: boolean;
}

export const DOORS: DoorCard[] = [
  {
    id: "account-success",
    icon: Users,
    title: "Account Success",
    blurb: "One client story, many tools — for anyone who runs relationships.",
  },
  {
    id: "business-ops",
    icon: Briefcase,
    title: "Business Ops",
    blurb: "Run the day from one screen — for founders, owners, and ops leaders.",
  },
  {
    id: "personal-space",
    icon: User,
    title: "Personal Space",
    blurb: "Your own operating system — your private notes, tasks, and projects as Memory.",
    waitlist: true,
  },
];
