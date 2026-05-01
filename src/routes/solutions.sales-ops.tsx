import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { salesOpsAttention } from "@/content/attention-scenarios";
import type { WorkbenchScenario } from "@/components/site/Workbench";

const salesScenario: WorkbenchScenario = {
  entityType: "Deal",
  entityName: "Northwind Logistics · $84K",
  entityMeta: "Decision next week · No reply 9 days",
  memoryCards: [
    { label: "Stage", value: "Verbal Yes · 21 days" },
    { label: "Champion", value: "M. Park · VP Ops" },
    { label: "Last touch", value: "9 days ago", tone: "warning" },
    { label: "Demo", value: "Completed · positive" },
    { label: "Procurement", value: "Awaiting MSA redlines" },
    { label: "Decision date", value: "Tue next week", tone: "info" },
  ],
  suggestion: {
    title: "Send a one-line nudge to M. Park + loop in procurement",
    rationale:
      "Decision date is 6 days out. Champion silence after a positive demo usually means an internal blocker, not lost interest.",
    evidence: [
      "Champion engaged 11× in the 30 days before the demo",
      "MSA redlines outstanding 14 days at procurement",
      "3 similar deals at this signal mix closed when nudged at this point",
    ],
    confidence: 78,
    severity: "high",
    action:
      "Draft a 2-line note from the AE, attach the redlined MSA summary, propose a 15-min call with procurement. Schedule for tomorrow morning.",
  },
};

export const Route = createFileRoute("/solutions/sales-ops")({
  head: () => ({
    meta: [
      { title: "Sales Ops — IntegrateWise" },
      {
        name: "description",
        content: "See sales movement with the story behind it. Twin prepares the next move.",
      },
      { property: "og:title", content: "Sales Ops — IntegrateWise" },
      {
        property: "og:description",
        content: "Pipeline accuracy from Memory, not guesswork. Approve every action.",
      },
    ],
  }),
  component: SalesOpsPage,
});

function SalesOpsPage() {
  return (
    <SolutionPage
      preHeadline="Sales Ops"
      hero={
        <>
          See sales movement <span className="text-gradient-hero">with the story behind it.</span>
        </>
      }
      sub="Pipeline accuracy from Memory, not guesswork. Twin connects the signals across CRM, email, calendar, and product use."
      pain="Forecasts shift on Friday afternoons because three deals 'feel different' — and nobody can quickly say why."
      promise="Memory holds the deal history. Attention Layer flags real movement. Twin explains the connection and prepares the nudge."
      attention={salesOpsAttention}
      workbench={salesScenario}
      primaryCta={{ label: "Book a Demo", kind: "demo" }}
      trust="Every nudge approved before it sends. Full audit trail per deal."
    />
  );
}
