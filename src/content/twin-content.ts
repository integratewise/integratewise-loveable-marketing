/** Twin page content — extracted from src/routes/twin.tsx */

// ---------------------------------------------------------------------------
// Section metadata
// ---------------------------------------------------------------------------

export interface TwinSection {
  id: string;
  navLabel: string;
  badge: string;
  heading: string;
  subheading: string;
}

export const TWIN_SECTIONS: TwinSection[] = [
  {
    id: "twin",
    navLabel: "Twin",
    badge: "Twin",
    heading: "Not usual AI. Your Twin reads your Digital Memory.",
    subheading:
      "Most AI guesses from the open internet and forgets everything you said. Your Twin reads only your governed Digital Memory, links what changed, prepares what to do next, and waits for your approval.",
  },
  {
    id: "how-it-works",
    navLabel: "How it works",
    badge: "How signals form",
    heading: "Connects signals you already have.",
    subheading:
      "Twin doesn't just alert on single numbers. It reads all three lines of Digital Memory together and connects them into clear, explainable signals.",
  },
  {
    id: "approval-gate",
    navLabel: "Approval Gate",
    badge: "Twin Execution",
    heading: "Approval in between. Always.",
    subheading:
      "Twin can only propose. The Approval Gate stands between Twin and the real world.",
  },
  {
    id: "evidence-transparency",
    navLabel: "Evidence",
    badge: "Digital Memory Reference",
    heading: "Memory is Twin's reference library — read-only, evidence-first.",
    subheading:
      "Twin reads from accumulated Memory to compare past and present, but never writes directly into Memory. Every proposal shows its homework.",
  },
  {
    id: "twin-execution",
    navLabel: "Twin Execution",
    badge: "Twin Execution",
    heading: "Approval in between. Always.",
    subheading:
      "Twin can only propose. The Approval Gate stands between Twin and the real world.",
  },
  {
    id: "learning-history",
    navLabel: "Learning History",
    badge: "Security",
    heading: "Twin operates inside your perimeter.",
    subheading:
      "Twin reads only what your scopes already allow. Every proposal is auditable. Every action requires your approval. Turn Twin off and your Workspace still works.",
  },
];

// ---------------------------------------------------------------------------
// Is / Is-not lists
// ---------------------------------------------------------------------------

export const IS_LIST: string[] = [
  "Reads your Digital Memory (Truth, Context, approved Session Summaries).",
  "Spots patterns and early risks.",
  "Prepares next actions: messages, tasks, updates.",
  "Explains its proof and confidence.",
  "Learns from your approvals and edits.",
];

export const IS_NOT_LIST: string[] = [
  "Not the owner of your data.",
  "Not an autonomous agent that acts alone.",
  "Not a generic chatbot guessing from the web.",
  "Not a permanent memory store — Memory lives in the Spine, not in the model.",
];

// ---------------------------------------------------------------------------
// Proposals
// ---------------------------------------------------------------------------

export interface Proposal {
  title: string;
  confidence: number;
  evidence: string[];
}

export const PROPOSALS: Proposal[] = [
  {
    title: "Send check-in to TechServe PM",
    confidence: 92,
    evidence: ["Truth: usage -23%", "Context: 2 emails", "Summary: CSM playbook"],
  },
  {
    title: "Escalate CloudBridge renewal",
    confidence: 88,
    evidence: ["Truth: unsigned renewal", "Context: legal email", "Summary: escalation rule"],
  },
  {
    title: "Schedule QBR for FinanceFlow",
    confidence: 76,
    evidence: ["Truth: overdue invoices", "Context: WhatsApp", "Summary: QBR cadence"],
  },
];
