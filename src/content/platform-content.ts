/** Platform page content — extracted from src/routes/platform.tsx */
import type { ComponentType } from "react";
import {
  Database,
  Layers,
  ShieldCheck,
  Sparkles,
  Plug,
  Filter,
  BookOpen,
  User,
  Briefcase,
  Building2,
  MessageSquare,
  Mail,
  FileSpreadsheet,
  StickyNote,
  CreditCard,
  Receipt,
  LifeBuoy,
  Users,
  Lock,
  Globe,
  KeyRound,
  Cpu,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Section metadata
// ---------------------------------------------------------------------------

export interface PlatformSection {
  id: string;
  navLabel: string;
  badge: string;
  heading: string;
  subheading: string;
}

export const PLATFORM_SECTIONS: PlatformSection[] = [
  {
    id: "spine",
    navLabel: "Spine",
    badge: "Spine",
    heading: "Spine, not a data dump.",
    subheading:
      "One layer that connects every app — cleans, links, and time-stamps records into a clean, growing schema. It is not ETL. It learns how you structure work and only ingests what your Memory is designed to remember.",
  },
  {
    id: "how-it-works",
    navLabel: "How it works",
    badge: "How it works",
    heading: "Apps → Spine → Memory → Workspace → Twin → Approval → Loop.",
    subheading:
      "Data flows in. Memory accumulates. Workspace makes it usable. Twin proposes. You approve. Every approved action becomes new Truth — and the loop closes.",
  },
  {
    id: "digital-memory",
    navLabel: "Digital Memory",
    badge: "Digital Memory",
    heading: "Memory that accumulates — then gets reused.",
    subheading:
      "Digital Memory accumulates with every update, every decision, and every interaction — then gets reused by your Workspace, your Twin, and your team.",
  },
  {
    id: "connectors",
    navLabel: "Connectors",
    badge: "Connectors",
    heading: "70+ schema-aware connectors.",
    subheading:
      "Every connector is built on the same loader service and adapter pattern, mapped to the Spine's schema registry. Connect once and the Spine handles change tracking, deduplication, and entity resolution across tools.",
  },
  {
    id: "security",
    navLabel: "Security",
    badge: "Security",
    heading: "Security and governance, by architecture.",
    subheading:
      "Your Memory is yours. Tenant-isolated, audit-logged, approval-gated — built for regulated work, not just demos.",
  },
  {
    id: "integrations",
    navLabel: "Integrations",
    badge: "Integrations",
    heading: "The tools you already use.",
    subheading:
      "Salesforce, HubSpot, Stripe, Jira, Notion, Slack, Zendesk, Gmail, Shopify, QuickBooks, Intercom, GitHub, Airtable, Asana, Google Drive — and more added every month based on real customer demand.",
  },
];

// ---------------------------------------------------------------------------
// Content arrays
// ---------------------------------------------------------------------------

export const SOURCE_APPS: { name: string; icon: ComponentType<{ size?: number; className?: string }> }[] = [
  { name: "WhatsApp", icon: MessageSquare },
  { name: "Tally", icon: Receipt },
  { name: "Razorpay", icon: CreditCard },
  { name: "Gmail", icon: Mail },
  { name: "Google Sheets", icon: FileSpreadsheet },
  { name: "Notion", icon: StickyNote },
  { name: "CRM", icon: Users },
  { name: "Support", icon: LifeBuoy },
  { name: "Billing", icon: Receipt },
];


export interface MemoryLine {
  title: string;
  sub: string;
  body: string;
  color: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const THREE_LINES: MemoryLine[] = [
  {
    title: "Truth",
    sub: "What is actually happening.",
    body: "Transactions, usage, invoices, tickets, account records from your tools.",
    color: "var(--state-success)",
    icon: Database,
  },
  {
    title: "Context",
    sub: "Why it is happening.",
    body: "Emails, WhatsApp messages, chats, docs, notes around that work.",
    color: "var(--state-info)",
    icon: MessageSquare,
  },
  {
    title: "Session Summaries",
    sub: "Governed AI knowledge.",
    body: "Short AI-generated summaries you have reviewed and approved — never raw chat.",
    color: "var(--brand-accent, var(--state-warning))",
    icon: Sparkles,
  },
];

export interface MemoryScope {
  title: string;
  body: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const SCOPES: MemoryScope[] = [
  {
    title: "User Memory",
    body: "Your personal notes, tasks, drafts, and focus — private by default.",
    icon: User,
  },
  {
    title: "Work Memory",
    body: "Your professional work: clients, filings, accounts, deals — structured so you stop rebuilding the story every time.",
    icon: Briefcase,
  },
  {
    title: "Org Memory",
    body: "Shared company memory that exists only when you intentionally create a team space.",
    icon: Building2,
  },
];

export interface FlowStep {
  n: string;
  title: string;
  body: string;
}

export const FLOW_STEPS: FlowStep[] = [
  { n: "01", title: "Apps", body: "WhatsApp, Tally, Razorpay, Gmail, Sheets, Notion, CRM…" },
  { n: "02", title: "Spine", body: "Cleans, dedupes, and links records across tools." },
  { n: "03", title: "Digital Memory", body: "Truth + Context + approved Session Summaries." },
  { n: "04", title: "Workspace", body: "Your living screen — built from Memory, not exports." },
  { n: "05", title: "Twin", body: "Reads Memory, proposes, never writes without approval." },
  { n: "06", title: "Approval → Loop", body: "You approve. Action runs. Memory learns." },
];

export interface SecurityPillar {
  title: string;
  body: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const SECURITY_PILLARS: SecurityPillar[] = [
  {
    title: "SOC 2 Type II",
    body: "Independently audited controls across security, availability, and confidentiality.",
    icon: ShieldCheck,
  },
  {
    title: "GDPR-ready",
    body: "Data subject rights, processor agreements, and EU-region storage on request.",
    icon: Globe,
  },
  {
    title: "Tenant isolation",
    body: "Your Memory is yours alone — strict row-level isolation, never co-mingled with other customers.",
    icon: Lock,
  },
  {
    title: "Cloudflare Workers edge",
    body: "Globally distributed compute, zero-trust network access, and DDoS-grade protection out of the box.",
    icon: Cpu,
  },
  {
    title: "Approval-gated execution",
    body: "Twin proposes; you decide. Every action is logged with the evidence it was based on.",
    icon: KeyRound,
  },
];

export const INTEGRATION_LOGOS: string[] = [
  "Salesforce",
  "HubSpot",
  "Stripe",
  "Jira",
  "Notion",
  "Slack",
  "Zendesk",
  "Gmail",
  "Shopify",
  "QuickBooks",
  "Intercom",
  "GitHub",
  "Airtable",
  "Asana",
  "Google Drive",
];
