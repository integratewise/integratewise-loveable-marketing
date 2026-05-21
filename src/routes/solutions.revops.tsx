import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { homeAttention } from "@/content/attention-scenarios";
import type { WorkbenchScenario } from "@/components/site/Workbench";

const revopsScenario: WorkbenchScenario = {
  entityType: "Quarter",
  entityName: "Q3 · Pipeline · Renewals · Cash",
  entityMeta: "Forecast slipping · 3 connected signals",
  memoryCards: [
    { label: "Pipeline coverage", value: "2.1× · target 3×", tone: "warning" },
    { label: "At-risk renewals", value: "$1.2M across 4 accounts", tone: "warning" },
    { label: "Collections", value: "DSO 47d · up from 38d", tone: "info" },
    { label: "Stage conversion", value: "Demo → SQL down 22%" },
    { label: "Top blocker", value: "Procurement cycles +9d" },
    { label: "Forecast call", value: "Friday 10am" },
  ],
  suggestion: {
    title: "Reset the forecast against the three signals that actually moved",
    rationale:
      "Pipeline shortfall, at-risk renewals, and collections drag are connected to the same procurement slowdown. The forecast story changes when they're explained together.",
    evidence: [
      "4 of the 6 at-risk deals share a procurement blocker",
      "DSO and at-risk renewals both involve the same 3 customers",
      "Demo→SQL drop concentrated in mid-market segment",
    ],
    confidence: 81,
    severity: "high",
    action:
      "Generate the forecast call deck with the connected story, the 6 deals, and the 4 renewals. Route for CRO approval before Friday.",
  },
};

export const Route = createFileRoute("/solutions/revops")({
  head: () => ({
    meta: [
      { title: "RevOps — IntegrateWise" },
      {
        name: "description",
        content:
          "Pipeline, renewals, and cash — connected. One picture of the quarter, with the next move ready for approval.",
      },
      { property: "og:title", content: "RevOps — IntegrateWise" },
      {
        property: "og:description",
        content:
          "See what's actually moving across the funnel and the book. Decide what happens next from one place.",
      },
    ],
  }),
  component: RevOpsPage,
});

function RevOpsPage() {
  return (
    <SolutionPage
      preHeadline="RevOps"
      hero={
        <>
          One picture of the quarter.{" "}
          <span className="text-gradient-hero">Pipeline, renewals, cash — connected.</span>
        </>
      }
      sub="Stop stitching dashboards on Thursday night. See what's actually moving across the funnel and the book, and decide what happens next from one place."
      pain="Pipeline lives in CRM, renewals in spreadsheets, cash in finance — and the forecast story is reassembled from scratch every week."
      promise="The picture is already assembled. The next move is drafted. You approve."
      attention={homeAttention}
      workbench={revopsScenario}
      primaryCta={{ label: "Request Early Access", kind: "early-access" }}
      trust="Every change you push goes through approval. Full lineage per metric."
    />
  );
}
