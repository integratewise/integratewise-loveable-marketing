/** Resources page content — section metadata and data arrays. */
import type { ComponentType } from "react";
import {
  BookOpen,
  FileText,
  Layers,
  Sparkles,
  Star,
  Users,
  Rocket,
  Workflow,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Section metadata
// ---------------------------------------------------------------------------

export interface ResourcesSection {
  id: string;
  navLabel: string;
  badge: string;
  heading: string;
  subheading: string;
}

export const RESOURCES_SECTIONS: ResourcesSection[] = [
  {
    id: "guides",
    navLabel: "Guides",
    badge: "Product learning",
    heading: "Learn the product, layer by layer.",
    subheading:
      "Docs, getting started guides, and reference for the whole product — from Spine to Workspace to Twin.",
  },
  {
    id: "webinars",
    navLabel: "Webinars",
    badge: "What's new",
    heading: "What's new in IntegrateWise.",
    subheading:
      "Recent highlights and updates. Read the full Changelog for more.",
  },
  {
    id: "one-pagers",
    navLabel: "One-pagers",
    badge: "Stories & strategy",
    heading: "Stories and why we are building this.",
    subheading:
      "Real-world stories about ending the Human API role.",
  },
  {
    id: "getting-started",
    navLabel: "Getting started",
    badge: "Templates & walkthroughs",
    heading: "See it in action.",
    subheading:
      "Workspace examples for Account Success, Business Ops, and Personal Space.",
  },
];

// ---------------------------------------------------------------------------
// Product learning links
// ---------------------------------------------------------------------------

export interface ResourceLink {
  to: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  body: string;
}

export const PRODUCT_LEARNING: ResourceLink[] = [
  {
    to: "/docs",
    icon: BookOpen,
    label: "Docs home",
    body: "Concepts, getting started, and reference for the whole product.",
  },
  {
    to: "/docs",
    icon: Layers,
    label: "Getting started with the Platform",
    body: "How apps connect to the Spine and how Digital Memory is built.",
  },
  {
    to: "/docs",
    icon: Workflow,
    label: "Getting started with the Workspace",
    body: "How the adaptive screen reads from Memory and reshapes around your slice of work.",
  },
  {
    to: "/docs",
    icon: Sparkles,
    label: "Getting started with Twin & Approval",
    body: "How the Twin reads Memory, proposes actions, and waits behind the Approval Gate.",
  },
];

// ---------------------------------------------------------------------------
// Changelog highlights
// ---------------------------------------------------------------------------

export interface ChangelogHighlight {
  tag: string;
  title: string;
  why: string;
}

export const CHANGELOG_HIGHLIGHTS: ChangelogHighlight[] = [
  {
    tag: "Workspace",
    title: "GST filings in Accounts view",
    why: "CAs and founders see who is late and how much is at risk in one stitched client view.",
  },
  {
    tag: "Spine",
    title: "Budget-freeze context in Digital Memory",
    why: "Twin proposals can now show the exact budget-freeze emails as Evidence.",
  },
  {
    tag: "Twin",
    title: "Clear Truth/Context/Session labels in proposals",
    why: "You can see what is data, what is communication, and what is AI summary before you approve.",
  },
];

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

export const STORIES: ResourceLink[] = [
  {
    to: "/blog",
    icon: FileText,
    label: "Blog",
    body: "Real-world stories about ending the Human API role.",
  },
  {
    to: "/why",
    icon: Star,
    label: "Why IntegrateWise",
    body: "The deeper reasoning behind Digital Memory and the Spine.",
  },
  {
    to: "/manifesto",
    icon: FileText,
    label: "Manifesto",
    body: "Principles like \u201CTruth you own. AI you rent. Approval in between.\u201D",
  },
  {
    to: "/customer-zero",
    icon: Rocket,
    label: "Customer Zero",
    body: "How the founder runs IntegrateWise on IntegrateWise.",
  },
];

// ---------------------------------------------------------------------------
// Templates
// ---------------------------------------------------------------------------

export interface Template {
  label: string;
  body: string;
}

export const TEMPLATES: Template[] = [
  {
    label: "Account Success Workspace example",
    body: "A CSM\u2019s Monday: accounts, churn risk, evidence, approvals.",
  },
  {
    label: "Business Ops Workspace example",
    body: "Revenue, filings, support, and renewals on one screen.",
  },
  {
    label: "Personal Space Workspace example",
    body: "Your own operating system across personal apps and inboxes.",
  },
];
