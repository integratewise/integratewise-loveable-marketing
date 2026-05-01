/** Changelog page content — entries by month and section metadata. */

// ---------------------------------------------------------------------------
// Section metadata
// ---------------------------------------------------------------------------

export interface ChangelogSection {
  id: string;
  navLabel: string;
  badge: string;
  heading: string;
  subheading: string;
}

export const CHANGELOG_SECTIONS: ChangelogSection[] = [
  {
    id: "latest",
    navLabel: "Latest",
    badge: "Changelog",
    heading: "How IntegrateWise is learning with you.",
    subheading:
      "Every update is about one thing: helping you stop being the Human API. We log changes by Spine, Memory, Workspace, Twin, and Approval.",
  },
  {
    id: "platform",
    navLabel: "Platform",
    badge: "Platform",
    heading: "Platform updates.",
    subheading: "Spine, connectors, and Digital Memory changes.",
  },
  {
    id: "product",
    navLabel: "Product",
    badge: "Product",
    heading: "Product updates.",
    subheading: "Workspace views, navigation, and day-to-day improvements.",
  },
  {
    id: "twin",
    navLabel: "Twin",
    badge: "Twin",
    heading: "Twin & Approval updates.",
    subheading: "Intelligence layer, confidence scores, and Approval Gate changes.",
  },
  {
    id: "connectors",
    navLabel: "Connectors",
    badge: "Connectors",
    heading: "Connector updates.",
    subheading: "New integrations, ingestion improvements, and schema changes.",
  },
];

// ---------------------------------------------------------------------------
// Changelog entry types
// ---------------------------------------------------------------------------

export interface ChangelogEntry {
  tags: string[];
  title: string;
  what: string;
  why: string;
  where?: string;
}

export interface ChangelogMonth {
  month: string;
  entries: ChangelogEntry[];
}

// ---------------------------------------------------------------------------
// Changelog data
// ---------------------------------------------------------------------------

export const CHANGELOG: ChangelogMonth[] = [
  {
    month: "April 2026",
    entries: [
      {
        tags: ["Workspace", "Account Success"],
        title: "GST filings now visible next to account revenue.",
        what: "Accounts & Revenue view in the Workspace now shows GST filing status and due dates next to invoicing and ARR for each client.",
        why: "CAs and founders no longer have to open Tally and Sheets just to see who is late and how much is at risk \u2014 the full picture is visible in one stitched client view.",
        where: "In the Account Success Workspace under \u2018Accounts & Revenue\u2019.",
      },
      {
        tags: ["Spine", "Digital Memory"],
        title: "Spine schema now captures \u2018budget freeze\u2019 email context.",
        what: "The Spine now recognises \u2018budget freeze\u2019 phrases in email threads and stores them as Context in Digital Memory.",
        why: "When Twin surfaces churn risk, it can now show the exact budget-freeze emails in the Evidence list. This makes it easier to explain why you are escalating a renewal, before you approve.",
        where: "In Evidence panels across Account Success and Business Ops Workbenches.",
      },
      {
        tags: ["Twin", "Approval"],
        title: "Twin proposals always show Truth/Context/Session breakdown.",
        what: "Every Twin proposal now clearly labels which evidence came from Truth (records), Context (emails/chats), and Session Summaries (approved AI knowledge).",
        why: "You can see at a glance what is data, what is communication, and what is AI summary before you approve. This keeps AI separate from Memory and strengthens trust in each decision.",
        where: "In the \u2018Why \u2014 linked evidence\u2019 section of Approval Gate modals.",
      },
    ],
  },
  {
    month: "March 2026",
    entries: [
      {
        tags: ["Spine"],
        title: "Razorpay refund events now flow into Digital Memory.",
        what: "Refund events from Razorpay are ingested as Truth and linked to the original invoice and customer record.",
        why: "Account leads can finally see refund history next to revenue \u2014 no more switching between Razorpay and Sheets to confirm what was actually returned.",
        where: "In Account detail pages and Business Ops dashboards.",
      },
      {
        tags: ["Workspace", "Solutions"],
        title: "Personal Space waitlist enabled.",
        what: "The Personal Space card on the Solutions page now opens a clean waitlist form instead of a demo CTA.",
        why: "Personal Space is launching after the Account Success and Business Ops rollouts \u2014 the waitlist keeps interested users in the loop without overpromising.",
      },
      {
        tags: ["Approval"],
        title: "Audit log now exports to CSV.",
        what: "Every approval, edit, and reject can be exported with timestamp, user, evidence count, and confidence score.",
        why: "Security and compliance teams can review AI activity outside the product, without losing any context.",
        where: "Settings \u2192 Approval audit log.",
      },
    ],
  },
  {
    month: "February 2026",
    entries: [
      {
        tags: ["Twin"],
        title: "Confidence scores now include source breakdown.",
        what: "Twin confidence is now shown with the percentage contributed by Truth, Context, and Session Summaries separately.",
        why: "When two sources disagree, you can see exactly where the doubt is coming from before you approve or reject.",
      },
      {
        tags: ["Spine", "Digital Memory"],
        title: "WhatsApp Business chats now contribute Context.",
        what: "Approved WhatsApp threads from connected business numbers flow into Digital Memory as Context, with sender, account, and timestamp preserved.",
        why: "For SMB India and FZE Dubai teams, a huge share of customer reality lives in WhatsApp \u2014 it now lives in Memory too, so it stops being lost.",
      },
    ],
  },
];
