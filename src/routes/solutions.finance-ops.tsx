import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { financeOpsAttention } from "@/content/attention-scenarios";
import type { WorkbenchScenario } from "@/components/site/Workbench";

const financeScenario: WorkbenchScenario = {
  entityType: "Receivable",
  entityName: "INV-2048 · Acme Corp",
  entityMeta: "Overdue 14 days · $12,400",
  memoryCards: [
    { label: "Amount", value: "$12,400.00" },
    { label: "Issued", value: "32 days ago" },
    { label: "Last reminder", value: "9 days ago" },
    { label: "Linked support issue", value: "Ticket #3127", tone: "warning" },
    { label: "Account owner", value: "P. Iyer" },
    { label: "Customer health", value: "At risk", tone: "warning" },
  ],
  suggestion: {
    title: "Send firm reminder + flag account owner before next dunning step",
    rationale:
      "Payment delay correlates with an open support issue. Sending a generic dunning email risks the relationship — looping in the account owner first usually unlocks payment within 48h.",
    evidence: [
      "INV-2048 overdue 14 days, no movement after the last reminder",
      "Ticket #3127 (open 11 days) touches the workflow Acme uses for billing approval",
      "5 of 7 similar cases unblocked when account owner reached out before second dunning",
    ],
    confidence: 84,
    severity: "high",
    action:
      "Draft a polite reminder from billing, schedule for Wednesday, and create an internal Slack note for P. Iyer with linked context.",
  },
};

export const Route = createFileRoute("/solutions/finance-ops")({
  head: () => ({
    meta: [
      { title: "Finance Ops — IntegrateWise" },
      {
        name: "description",
        content:
          "Tighter controls, clearer evidence, less manual chasing. Every approval logged with evidence.",
      },
      { property: "og:title", content: "Finance Ops — IntegrateWise" },
      {
        property: "og:description",
        content: "Evidence-backed decisions, full approval history, no silent actions.",
      },
    ],
  }),
  component: FinanceOpsPage,
});

function FinanceOpsPage() {
  return (
    <SolutionPage
      preHeadline="Finance Ops"
      hero={
        <>
          Work with <span className="text-gradient-hero">tighter controls,</span> clearer evidence,
          and less manual chasing.
        </>
      }
      sub="Reconciliations, dunning, vendor variances — Memory keeps the evidence chain so finance decisions stand up to review."
      pain="AR sits in spreadsheets. Variances chased in chat. By month-end, half the story is reconstructed from memory."
      promise="Receivables, payables, and approvals live in Memory with linked evidence. Twin prepares the next step; finance approves."
      attention={financeOpsAttention}
      workbench={financeScenario}
      primaryCta={{ label: "Book a Demo", kind: "demo" }}
      trust="Evidence-backed decisions. Full approval history. No silent actions."
    />
  );
}
