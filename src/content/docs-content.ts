/** Docs page content — section metadata and data arrays. */
import type { ComponentType } from "react";
import {
  Brain,
  CircuitBoard,
  Database,
  FileText,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Section metadata
// ---------------------------------------------------------------------------

export interface DocsSection {
  id: string;
  navLabel: string;
  badge: string;
  heading: string;
  subheading: string;
}

export const DOCS_SECTIONS: DocsSection[] = [
  {
    id: "getting-started",
    navLabel: "Getting started",
    badge: "Getting started",
    heading: "Start from your real day, not a blank project.",
    subheading:
      "Connect your first tools, land in a live Workspace, and see your Twin safely — all in the first session.",
  },
  {
    id: "connectors",
    navLabel: "Connectors",
    badge: "Reference",
    heading: "Deep dives for operators.",
    subheading:
      "Which fields we ingest from apps like Tally, Razorpay, Gmail, WhatsApp, Sheets, CRM, and Support — and which ones we ignore.",
  },
  {
    id: "workspaces",
    navLabel: "Workspaces",
    badge: "How-to guides",
    heading: "Guides for your slice of work.",
    subheading:
      "Each guide is pitched as a day without IntegrateWise vs a day with IntegrateWise — pure pain language vs pure feature language.",
  },
  {
    id: "twin-approvals",
    navLabel: "Twin & approvals",
    badge: "Core concepts",
    heading: "Understand the core concepts.",
    subheading:
      "Digital Memory, Spine, Workspace, Twin, and Approval Gate — the five layers that make IntegrateWise work.",
  },
  {
    id: "security-compliance",
    navLabel: "Security & compliance",
    badge: "Reference",
    heading: "Security and compliance reference.",
    subheading:
      "SOC 2 Type II, GDPR, tenant isolation, and Approval Gate — how we keep your Memory safe.",
  },
];

// ---------------------------------------------------------------------------
// Getting started items
// ---------------------------------------------------------------------------

export interface GettingStartedItem {
  to: string;
  label: string;
  body: string;
}

export const GETTING_STARTED: GettingStartedItem[] = [
  {
    to: "/docs",
    label: "Connect your first tools",
    body: "Connect WhatsApp, Tally, Razorpay, email, Sheets, Notion, or your CRM — and see your first Digital Memory.",
  },
  {
    to: "/docs",
    label: "Land in a live Workspace",
    body: "How the Accounts & Revenue and Personal Workspace views appear on day one, before you customise anything.",
  },
  {
    to: "/docs",
    label: "See your Twin safely",
    body: "How to turn Twin on, see proposals, and use the Approval Gate before anything executes.",
  },
];

// ---------------------------------------------------------------------------
// Core concepts
// ---------------------------------------------------------------------------

export interface Concept {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  body: string;
}

export const CONCEPTS: Concept[] = [
  {
    icon: Brain,
    label: "Digital Memory",
    body: "Where Truth, Context, and approved Session Summaries intersect. They meet in one place but never lose identity or source. Raw AI chat never writes directly into Memory.",
  },
  {
    icon: CircuitBoard,
    label: "Spine",
    body: "Platform layer that connects apps and accumulates Digital Memory. Starts as a clean schema, ingests only what it is designed to remember, and grows with you.",
  },
  {
    icon: LayoutDashboard,
    label: "Workspace",
    body: "Product layer that reads from Memory. One living screen where stitching between apps happens, so you stop being the Human API.",
  },
  {
    icon: Sparkles,
    label: "Twin (Intelligence Layer)",
    body: "Reads Memory, links Truth + Context + approved Session Summaries into signals, and proposes actions behind the Approval Gate. Never writes into Memory or tools on its own.",
  },
  {
    icon: ShieldCheck,
    label: "Approval Gate",
    body: "Mandatory review step between Twin and your apps. You can review, edit, and approve; nothing executes without this.",
  },
];

// ---------------------------------------------------------------------------
// How-to guides
// ---------------------------------------------------------------------------

export interface Guide {
  label: string;
  body: string;
}

export const GUIDES: Guide[] = [
  {
    label: "Account Success Workspace",
    body: "One client story from many tools — usage, communication, and risk in a single view.",
  },
  {
    label: "Business Ops Workspace",
    body: "Run the day from one screen — revenue, filings, support, renewals.",
  },
  {
    label: "Personal Space",
    body: "Your own operating system across personal apps and inboxes.",
  },
];

// ---------------------------------------------------------------------------
// Reference items
// ---------------------------------------------------------------------------

export interface ReferenceItem {
  label: string;
  body: string;
}

export const REFERENCE: ReferenceItem[] = [
  {
    label: "Connectors & ingestion",
    body: "Which fields we ingest from apps like Tally, Razorpay, Gmail, WhatsApp, Sheets, CRM, and Support — and which ones we ignore.",
  },
  {
    label: "Memory & events",
    body: "How Truth, Context, and Session Summaries are stored and versioned in Digital Memory.",
  },
  {
    label: "Twin & Approval",
    body: "What a Twin proposal looks like, what evidence types exist, and all Approval Gate states.",
  },
];
