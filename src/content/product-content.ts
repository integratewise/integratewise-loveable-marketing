/** Product page content — extracted from src/routes/product.tsx */
import type { ComponentType } from "react";
import {
  Home,
  Users,
  Briefcase,
  Building2,
  FileText,
  ListChecks,
  Calendar,
  StickyNote,
  TrendingUp,
  AlertTriangle,
  BarChart3,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Section metadata
// ---------------------------------------------------------------------------

export interface ProductSection {
  id: string;
  navLabel: string;
  badge: string;
  heading: string;
  subheading: string;
}

export const PRODUCT_SECTIONS: ProductSection[] = [
  {
    id: "workspace",
    navLabel: "Workspace",
    badge: "Product",
    heading: "Your Workspace adapts to how you work.",
    subheading:
      "You don't need another dashboard. You need one living screen that matches your day. The Workspace reads from your Digital Memory and reshapes itself around your clients, projects, filings, and tasks.",
  },
  {
    id: "how-it-works",
    navLabel: "How it works",
    badge: "How it works",
    heading: "Apps → Spine → Memory → Workspace → Twin → Approval → Loop.",
    subheading:
      "The Workspace sits on top of Digital Memory. Every view is stitched from Truth, Context, and approved AI knowledge — so tab-switching ends and the system does the stitching.",
  },
  {
    id: "digital-memory",
    navLabel: "Digital Memory",
    badge: "Digital Memory",
    heading: "Every view, every insight, traced to Memory.",
    subheading:
      "Digital Memory accumulates with every update, every decision, and every interaction — then gets reused by your Workspace, your Twin, and your team.",
  },
  {
    id: "human-in-the-loop",
    navLabel: "Human-in-the-loop",
    badge: "Security",
    heading: "In-product security: Approval Gate, RBAC, audit trail.",
    subheading:
      "AI never acts behind your back. Every action is gated, logged, and reviewable inside the Workspace you already use.",
  },
  {
    id: "example-walkthrough",
    navLabel: "Example walkthrough",
    badge: "Walkthrough",
    heading: "See your Workspace built on your own data.",
    subheading:
      "In one demo we connect your tools, show the Digital Memory that forms in the Platform, and then walk you through a Workspace that reflects your actual day — not an empty template.",
  },
];

// ---------------------------------------------------------------------------
// Content arrays
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", icon: Home },
  { label: "Clients", icon: Users },
  { label: "Accounts", icon: Building2 },
  { label: "Projects", icon: Briefcase },
  { label: "Filings", icon: FileText },
  { label: "Tasks", icon: ListChecks },
  { label: "Meetings", icon: Calendar },
  { label: "Docs", icon: FileText },
  { label: "Notes", icon: StickyNote },
  { label: "Team", icon: Users },
  { label: "Pipeline", icon: TrendingUp },
  { label: "Risks", icon: AlertTriangle },
  { label: "Analytics", icon: BarChart3 },
];

export interface AccountRow {
  name: string;
  status: string;
  arr: string;
  outstanding: string;
  gst: string;
  tickets: number;
  next: string;
  tone: "warning" | "success";
}

export const ACCOUNT_ROWS: AccountRow[] = [
  {
    name: "FinanceFlow",
    status: "At-risk",
    arr: "$84k",
    outstanding: "₹2.4L",
    gst: "Due Apr 20",
    tickets: 3,
    next: "Escalate renewal",
    tone: "warning",
  },
  {
    name: "TechServe",
    status: "At-risk",
    arr: "$120k",
    outstanding: "—",
    gst: "Filed",
    tickets: 1,
    next: "Send check-in",
    tone: "warning",
  },
  {
    name: "CloudBridge",
    status: "Healthy",
    arr: "$56k",
    outstanding: "—",
    gst: "Filed",
    tickets: 0,
    next: "QBR Apr 28",
    tone: "success",
  },
  {
    name: "Northwind Co",
    status: "Healthy",
    arr: "$210k",
    outstanding: "₹48k",
    gst: "Due Apr 22",
    tickets: 0,
    next: "Renewal call",
    tone: "success",
  },
];

export interface ViewCard {
  title: string;
  body: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const VIEWS: ViewCard[] = [
  {
    title: "Client / Account view",
    body: "360° view of each client: revenue, invoices, tickets, conversations, risks.",
    icon: Users,
  },
  {
    title: "Project / Filing view",
    body: "Projects and GST filings across tools, with status and next actions in one place.",
    icon: FileText,
  },
  {
    title: "Task and day view",
    body: "Your day across tools — who to call, what to send, what to review.",
    icon: ListChecks,
  },
  {
    title: "Org view (when you're ready)",
    body: "Org-level Memory for founders and leaders — one place to see business health.",
    icon: BarChart3,
  },
];
