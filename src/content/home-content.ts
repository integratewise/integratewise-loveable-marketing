/** Home page content — operator voice, kill-list-clean. */
import type { ComponentType } from "react";
import {
  Brain,
  Eye,
  LayoutDashboard,
  Sparkles,
  ShieldCheck,
  Keyboard,
  MousePointerClick,
  Wand2,
  Lock,
  Globe,
  Users,
  ScrollText,
  Plug,
  Workflow,
  GitBranch,
} from "lucide-react";

export interface PainQuote {
  quote: string;
  who: string;
  role: string;
}

export const PAIN_TRIO: PainQuote[] = [
  {
    quote:
      "Every Monday I rebuild the same picture from five tabs. By the time I'm ready, the meeting has started.",
    who: "Account lead",
    role: "Series B SaaS",
  },
  {
    quote:
      "Finance asks me for the same number every week. I copy it from the same dashboard every week.",
    who: "Ops lead",
    role: "Mid-market eCommerce",
  },
  {
    quote:
      "I open six tools to answer one question. By the time I have the answer, I've forgotten the question.",
    who: "Founder",
    role: "FZE Dubai",
  },
];

export interface FeatureCard {
  title: string;
  body: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const FEATURE_CARDS: FeatureCard[] = [
  {
    title: "Memory",
    body: "One connected record across your apps. Never resets between mornings.",
    icon: Brain,
  },
  {
    title: "Attention Layer",
    body: "Three things that need you today — surfaced before you ask.",
    icon: Eye,
  },
  {
    title: "Workbench",
    body: "Your unified work surface. Memory left, Twin right, action in the middle.",
    icon: LayoutDashboard,
  },
  {
    title: "Twin",
    body: "Connects what changed, explains why, and prepares what's next.",
    icon: Sparkles,
  },
  {
    title: "Approval",
    body: "Nothing executes without you. Full audit trail on every move.",
    icon: ShieldCheck,
  },
];

export interface SpeedItem {
  title: string;
  body: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const SPEED_ITEMS: SpeedItem[] = [
  { title: "Auto-context", body: "Open any record — the story is already assembled.", icon: Wand2 },
  { title: "Drag-approve", body: "Approve, edit, or reject each move in one motion.", icon: MousePointerClick },
  { title: "Keyboard-first", body: "Built for operators who don't want to use a mouse.", icon: Keyboard },
];

export interface Step {
  n: number;
  title: string;
  body: string;
}

export const HOW_STEPS: Step[] = [
  { n: 1, title: "Open", body: "You arrive. Memory is already current." },
  { n: 2, title: "See changes", body: "Attention shows what shifted overnight." },
  { n: 3, title: "Twin proposes", body: "A prepared response, with the evidence." },
  { n: 4, title: "You approve", body: "One click. The move executes — and becomes Memory." },
];

export interface CompareRow {
  dimension: string;
  others: string;
  iw: string;
}

export const COMPARE_ROWS: CompareRow[] = [
  { dimension: "Where memory lives", others: "Inside the model — opaque, rented", iw: "Inside your Reference Layer — yours, inspectable" },
  { dimension: "What it does with changes", others: "Waits for a prompt", iw: "Surfaces what needs you, with evidence" },
  { dimension: "Who decides the move", others: "The model, mid-stream", iw: "You — every move passes the Approval gate" },
  { dimension: "Audit trail", others: "Best-effort logs", iw: "Every approval, every edit, every reject — recorded" },
  { dimension: "Scope of memory", others: "Conversation-bound", iw: "User · Work · Org — separated by architecture" },
];

export interface Testimonial {
  quote: string;
  who: string;
  role: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "First tool I open. The reset is gone — I just see what changed.",
    who: "Priya M.",
    role: "VP Customer Success",
    initials: "PM",
  },
  {
    quote: "We replaced four standing meetings with one Workbench view.",
    who: "Karan S.",
    role: "Head of Ops",
    initials: "KS",
  },
  {
    quote: "Twin caught a renewal risk our CSM missed by three weeks.",
    who: "Anaya R.",
    role: "RevOps lead",
    initials: "AR",
  },
  {
    quote: "Approval-gated AI is the only way I'd let it touch my pipeline.",
    who: "Hassan A.",
    role: "Sales Director",
    initials: "HA",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: "What does the Twin actually execute on its own?",
    a: "Nothing. The Twin proposes; you approve. Every move passes through the Approval gate and lands in the audit trail.",
  },
  {
    q: "Where does my data live?",
    a: "In your tenant — isolated by architecture. SOC 2 Type II, GDPR-ready, with regional residency on Growth and Command plans.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most teams see their first Workbench view within a week. Full Memory coverage typically lands in 2–4 weeks.",
  },
  {
    q: "Do my private notes ever cross into shared spaces?",
    a: "No. User · Work · Org Memory are separated by architecture. Sharing is explicit, never accidental.",
  },
  {
    q: "What if the Twin gets it wrong?",
    a: "You edit or reject. The reject is recorded as a signal — the Twin learns the boundary, you stay in control.",
  },
  {
    q: "Is there a free tier?",
    a: "We're founder-led right now. Book a Demo to see Memory assembled on your data, or join Early Access for updates.",
  },
];

/* ---------- New content for the home rewrite ---------- */

export interface OutcomeItem {
  title: string;
  body: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const OUTCOME_TRIO: OutcomeItem[] = [
  {
    title: "One screen, your day assembled",
    body: "Walk in. Your accounts, your invoices, your tasks — already current. No tabs, no rebuild.",
    icon: LayoutDashboard,
  },
  {
    title: "Full context behind every move",
    body: "Every signal shows the proof: which records, which messages, which decisions led to it.",
    icon: ScrollText,
  },
  {
    title: "Approved actions, never autopilot",
    body: "Your Twin proposes. You approve, edit, or reject. Every move logged in the audit trail.",
    icon: ShieldCheck,
  },
];

export interface MilestoneItem {
  when: string;
  title: string;
  body: string;
}

export const MILESTONES: MilestoneItem[] = [
  {
    when: "Day 1",
    title: "Connect & assemble",
    body: "Connect your apps. Within hours, your Digital Memory starts taking shape on real data.",
  },
  {
    when: "Week 1",
    title: "First Workspace view",
    body: "See your accounts, projects, or invoices unified on one screen. Twin starts proposing.",
  },
  {
    when: "Day 30",
    title: "Live in your day",
    body: "Most teams are running their morning from IntegrateWise — first tool open, last tool closed.",
  },
];

export interface TrustStat {
  label: string;
  value: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const TRUST_STATS: TrustStat[] = [
  { label: "SOC 2 Type II", value: "Audited", icon: ShieldCheck },
  { label: "GDPR Ready", value: "EU residency", icon: Globe },
  { label: "Tenant Isolation", value: "By architecture", icon: Lock },
  { label: "Approval-gated", value: "Every write", icon: Users },
];

export interface InsightCard {
  tag: string;
  title: string;
  blurb: string;
  to: string;
}

export const INSIGHT_CARDS: InsightCard[] = [
  {
    tag: "Manifesto",
    title: "Truth you own. AI you rent. Approval in between.",
    blurb: "Why Digital Memory has to live with you — not inside the model.",
    to: "/manifesto",
  },
  {
    tag: "Customer Zero",
    title: "I run IntegrateWise on IntegrateWise.",
    blurb: "The founder story behind the product, and the day the reset finally stopped.",
    to: "/customer-zero",
  },
  {
    tag: "Why",
    title: "The end of the daily reset.",
    blurb: "The category thesis: why memory, not models, is the next operating layer.",
    to: "/why",
  },
];

export interface BridgeItem {
  title: string;
  body: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const BRIDGE_LEFT: BridgeItem = {
  title: "Today: scattered apps, daily reset",
  body: "WhatsApp, Tally, Razorpay, Gmail, Sheets. Every morning you rebuild the picture from scratch. By the time you're ready, the day has started without you.",
  icon: GitBranch,
};

export const BRIDGE_RIGHT: BridgeItem = {
  title: "With IntegrateWise: one Digital Memory",
  body: "Apps connect once. Truth, context, and approved decisions flow into one growing memory of your work. You open it once — the story is already there.",
  icon: Brain,
};

export interface DigitalMemoryFeature {
  title: string;
  body: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const DIGITAL_MEMORY_FEATURES: DigitalMemoryFeature[] = [
  {
    title: "Truth",
    body: "The clean record from your apps — accounts, invoices, deals, tickets. Deduped, reconciled, current.",
    icon: Plug,
  },
  {
    title: "Context",
    body: "The conversations around the record — emails, WhatsApp, Slack, meeting notes — linked to what they're about.",
    icon: Workflow,
  },
  {
    title: "Session Summaries",
    body: "Approved decisions and reflections from your work — the part that usually disappears at end of day.",
    icon: Sparkles,
  },
];
