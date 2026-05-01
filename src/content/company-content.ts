/** Company page content — section metadata and data arrays. */
import type { ComponentType } from "react";
import {
  UserCheck,
  Database,
  Lock,
  Layers,
  Workflow,
  Sparkles,
  ShieldCheck,
  Telescope,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Section metadata
// ---------------------------------------------------------------------------

export interface CompanySection {
  id: string;
  navLabel: string;
  badge: string;
  heading: string;
  subheading: string;
}

export const COMPANY_SECTIONS: CompanySection[] = [
  {
    id: "about",
    navLabel: "About",
    badge: "Company",
    heading: "Built because work lost its memory.",
    subheading:
      "Work moved into apps. Memory did not. Every day, people rebuild the same story across WhatsApp, Tally, Razorpay, email, and sheets. IntegrateWise exists so your work can finally have a Digital Memory.",
  },
  {
    id: "manifesto",
    navLabel: "Manifesto",
    badge: "Origin",
    heading: "From being the Human API to building the Spine.",
    subheading:
      "IntegrateWise did not start inside a big team or a strategy deck. It started with one solo founder who was living the exact pain the product now fixes.",
  },
  {
    id: "customer-zero",
    navLabel: "Customer Zero",
    badge: "Founder",
    heading: "Built by an operator, for operators.",
    subheading:
      "IntegrateWise is built by a solo founder — a former Customer Success Manager and current Business Ops operator — who has actually lived in CRMs, billing tools, support queues, and spreadsheets.",
  },
  {
    id: "trust-governance",
    navLabel: "Trust & Governance",
    badge: "Control",
    heading: "Control is not only for large enterprises.",
    subheading:
      "Even a 3-person CA firm, a small agency, or a SaaS startup cannot afford surprise emails, wrong filings, or silent automations.",
  },
  {
    id: "contact",
    navLabel: "Contact",
    badge: "Get started",
    heading: "See what work feels like with a Memory.",
    subheading:
      "In one session, we connect your tools, show how the Spine builds Digital Memory, how the Workspace replaces your daily tab-switching, and how the Twin proposes actions without taking control.",
  },
];

// ---------------------------------------------------------------------------
// Principles
// ---------------------------------------------------------------------------

export interface Principle {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
}

export const PRINCIPLES: Principle[] = [
  {
    icon: UserCheck,
    title: "You stay in control.",
    body: "Nothing acts without your approval. Twin can think, draft, and suggest, but the Approval Gate is mandatory. AI proposes. You decide.",
  },
  {
    icon: Database,
    title: "Truth you own. AI you rent.",
    body: "Your data becomes governed Digital Memory in the Spine. Models can change; your Memory stays.",
  },
  {
    icon: Lock,
    title: "Private by architecture. Shared by choice.",
    body: "User Memory, Work Memory, and Org Memory are separate by design. Sharing happens only when you create it on purpose.",
  },
  {
    icon: Layers,
    title: "Memory before intelligence.",
    body: "We fix the memory problem first — Truth and Context in one place — then add governed intelligence on top. Not the other way round.",
  },
  {
    icon: Workflow,
    title: "Work, not vanity dashboards.",
    body: "The Workspace is built to run your day, not to show pretty charts. It is shaped by a former CSM and a current Business Ops operator.",
  },
  {
    icon: Sparkles,
    title: "Grounded AI, no magic.",
    body: "Twin must always ground its answers in your Digital Memory and show its evidence. No black-box magic, no hallucinated guesses from the open web.",
  },
];

// ---------------------------------------------------------------------------
// Control points
// ---------------------------------------------------------------------------

export const CONTROL_POINTS: string[] = [
  "No AI action without explicit human approval.",
  "Clear history of what data Twin accessed, what it suggested, why it suggested it, and who approved.",
  "Strong separation between User, Work, and Org Memory.",
  "Your Memory is not used to train someone else's AI.",
];

// ---------------------------------------------------------------------------
// Vision cards
// ---------------------------------------------------------------------------

export interface VisionCard {
  icon: ComponentType<{ size?: number; className?: string }>;
  line: string;
}

export const VISION_CARDS: VisionCard[] = [
  {
    icon: Database,
    line: "We believe every person should have a Digital Memory — a place where their work, decisions, and context stay useful over time.",
  },
  {
    icon: ShieldCheck,
    line: "We believe every business should be able to grow knowledge without losing control to tools or models.",
  },
  {
    icon: Telescope,
    line: "We believe AI should sit between your Memory and your tools as a rented, governed layer — never as the new owner of your data.",
  },
];

// ---------------------------------------------------------------------------
// Hero stats
// ---------------------------------------------------------------------------

export interface HeroStat {
  k: string;
  v: string;
}

export const HERO_STATS: HeroStat[] = [
  { k: "Spine", v: "Adaptive" },
  { k: "Memory", v: "Yours" },
  { k: "Approval", v: "Always" },
];
