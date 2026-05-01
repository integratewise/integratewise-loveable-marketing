/** Blog page content — post stubs and section metadata. */

// ---------------------------------------------------------------------------
// Section metadata
// ---------------------------------------------------------------------------

export interface BlogSection {
  id: string;
  navLabel: string;
  badge: string;
  heading: string;
  subheading: string;
}

export const BLOG_SECTIONS: BlogSection[] = [
  {
    id: "all",
    navLabel: "All",
    badge: "Blog",
    heading: "Stories from the end of the Human API.",
    subheading:
      "How real teams stop being the bridge between WhatsApp, Tally, Razorpay, Gmail, Sheets, and a CRM.",
  },
  {
    id: "product",
    navLabel: "Product",
    badge: "Workspace in the real world",
    heading: "Workspace in the real world.",
    subheading:
      "Operator stories: a Monday in Business Ops, a CA firm running GST work from one screen.",
  },
  {
    id: "platform",
    navLabel: "Platform",
    badge: "Digital Memory & Spine",
    heading: "Digital Memory & Spine.",
    subheading:
      "Why Memory comes before intelligence. How Truth, Context, and Session Summaries stay separate.",
  },
  {
    id: "intelligence",
    navLabel: "Intelligence",
    badge: "Twin & Governed AI",
    heading: "Twin & Governed AI.",
    subheading:
      "Approval Gate, org AI library, and keeping AI in its lane — Truth you own, AI you rent.",
  },
  {
    id: "case-studies",
    navLabel: "Case Studies",
    badge: "End of the Human API",
    heading: "End of the Human API.",
    subheading:
      "How people rebuild context across apps today, and what a day looks like once that stops.",
  },
];

// ---------------------------------------------------------------------------
// Blog post interface and stubs
// ---------------------------------------------------------------------------

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  category: string;
  audience: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "monday-morning-archaeology",
    title: "Why Monday morning still feels like archaeology",
    summary:
      "A CSM rebuilds the same customer story from CRM, email, Slack, and Sheets — every single week. Here is what changes when that story lives in one place.",
    category: "case-studies",
    audience: "For CSMs and Account Success leads",
  },
  {
    slug: "memory-before-ai",
    title: "Why we built Memory before we built the AI",
    summary:
      "Most AI products bolt a model onto chaos. We built the Spine first so Truth, Context, and Session Summaries can converge into one Digital Memory.",
    category: "platform",
    audience: "For founders and ops leads",
  },
  {
    slug: "monday-in-business-ops",
    title: "A Monday in Business Ops with IntegrateWise",
    summary:
      "Twelve apps on Friday. One Workspace on Monday. Walk through how revenue, support tickets, and renewal risks land on a single screen.",
    category: "product",
    audience: "For BizOps and RevOps",
  },
  {
    slug: "ca-firm-gst-one-screen",
    title: "How a CA firm runs GST work from one screen",
    summary:
      "Tally, Sheets, WhatsApp, and email — stitched into a single client view. Filings, invoices, and chase-ups stop being a tab-hunt.",
    category: "product",
    audience: "For CAs and small firms",
  },
  {
    slug: "truth-you-own-ai-you-rent",
    title: "Truth you own. AI you rent. Approval in between.",
    summary:
      "The three sentences that decide what AI is allowed to do inside your business — and why raw AI chat never writes directly into Memory.",
    category: "intelligence",
    audience: "For founders and security leads",
  },
  {
    slug: "confidence-scores-evidence-chains",
    title: "Confidence scores, evidence chains, and the Approval Gate",
    summary:
      "What a Twin proposal actually looks like in the Workspace: severity, sources, confidence, and the gate that keeps execution in your hands.",
    category: "intelligence",
    audience: "For ops leads and admins",
  },
];

// ---------------------------------------------------------------------------
// Category metadata (used in the categories section)
// ---------------------------------------------------------------------------

export interface BlogCategory {
  tag: string;
  blurb: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    tag: "End of the Human API",
    blurb:
      "How people rebuild context across apps today, and what a day looks like once that stops.",
  },
  {
    tag: "Digital Memory & Spine",
    blurb:
      "Why Memory comes before intelligence. How Truth, Context, and Session Summaries stay separate.",
  },
  {
    tag: "Workspace in the real world",
    blurb:
      "Operator stories: a Monday in Business Ops, a CA firm running GST work from one screen.",
  },
  {
    tag: "Twin & Governed AI",
    blurb:
      "Approval Gate, org AI library, and keeping AI in its lane — Truth you own, AI you rent.",
  },
];
