import type { WorkbenchScenario } from "@/components/site/Workbench";

export const homeScenario: WorkbenchScenario = {
  entityType: "Account",
  entityName: "Acme Corporation",
  entityMeta: "Renewal in 21 days · CSM: Priya",
  memoryCards: [
    { label: "Plan", value: "Growth · $24K ARR" },
    { label: "Product usage (30d)", value: "↓ 32%", tone: "warning" },
    { label: "Open support tickets", value: "2 unresolved", tone: "warning" },
    { label: "Last QBR", value: "47 days ago" },
    { label: "Champion", value: "Sarah Lin · VP Ops" },
    { label: "Last contact", value: "Slack · 9 days ago" },
    { label: "Renewal", value: "21 days", tone: "info" },
  ],
  suggestion: {
    title: "Schedule a save-the-account call with Sarah this week",
    rationale:
      "Usage is dropping into a pattern that historically precedes churn at this account size. Two of the open tickets touch the workflow Sarah personally championed.",
    evidence: [
      "Active users dropped from 38 → 26 in 30 days",
      "Tickets #2841 and #2867 mention the approval workflow Sarah owns",
      "No QBR booked since the last expansion conversation",
      "3 similar accounts at this signal mix churned in the last 6 months",
    ],
    confidence: 82,
    severity: "high",
    action:
      "Draft a personal note from Priya, propose three time slots aligned to Sarah's calendar, attach a 1-page health summary, and create a follow-up task for tomorrow if no reply.",
  },
};

export const accountSuccessScenario: WorkbenchScenario = {
  ...homeScenario,
};

export const businessOpsScenario: WorkbenchScenario = {
  entityType: "Vendor invoice",
  entityName: "Northwind Logistics · INV-2031",
  entityMeta: "Due in 4 days",
  memoryCards: [
    { label: "Amount", value: "$12,480.00" },
    { label: "PO matched", value: "PO-1142", tone: "success" },
    { label: "Receipt matched", value: "GR-9981", tone: "success" },
    { label: "Variance vs PO", value: "+$240 (1.9%)", tone: "warning" },
    { label: "Vendor on-time rate", value: "94%" },
    { label: "Approver", value: "M. Rao" },
  ],
  suggestion: {
    title: "Approve invoice with a flagged variance note",
    rationale:
      "PO and goods receipt match. Variance is within your 2% auto-approve threshold but worth logging for the next vendor review.",
    evidence: [
      "3-way match passed (PO ↔ GR ↔ Invoice)",
      "Variance $240 is 1.9% — below your 2% threshold",
      "Vendor has 94% on-time delivery in the last 90 days",
    ],
    confidence: 91,
    severity: "low",
    action:
      "Mark INV-2031 as approved, queue payment for Friday's run, and add a 'review variance' note to Northwind's vendor scorecard.",
  },
};

export const personalScenario: WorkbenchScenario = {
  entityType: "Personal Ops",
  entityName: "Your week",
  entityMeta: "Tue · 2:14 PM",
  memoryCards: [
    { label: "Inbox unreads", value: "47" },
    { label: "Calendar tomorrow", value: "5 meetings" },
    { label: "Open tasks", value: "12 (3 overdue)", tone: "warning" },
    { label: "Last reflection", value: "11 days ago" },
    { label: "Sleep avg (7d)", value: "6h 12m", tone: "info" },
  ],
  suggestion: {
    title: "Move tomorrow's 3pm to Thursday and protect a 90-min focus block",
    rationale:
      "You have three 'must move forward' tasks tagged for the deck. Tomorrow afternoon is the only realistic window before the Friday review.",
    evidence: [
      "3 tasks tagged 'Q1 deck' have no working time scheduled",
      "Tomorrow 3pm meeting marked 'flexible' by the organizer",
      "Thursday 3pm is open for both attendees",
    ],
    confidence: 76,
    severity: "medium",
    action:
      "Send a one-line reschedule note, block tomorrow 2:30–4:00pm as 'Q1 deck', and remind you 10 minutes before.",
  },
};
