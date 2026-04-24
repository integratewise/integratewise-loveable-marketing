import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { businessOpsAttention } from "@/content/attention-scenarios";
import { businessOpsScenario } from "@/content/workbench-scenarios";

export const Route = createFileRoute("/solutions/business-ops")({
  head: () => ({
    meta: [
      { title: "Business Ops — IntegrateWise" },
      {
        name: "description",
        content:
          "One screen. Everything that changed since Friday. Stop asking five people for the same number every week.",
      },
      { property: "og:title", content: "Business Ops — IntegrateWise" },
      {
        property: "og:description",
        content: "Business Memory keeps the story in one place. Twin prepares the brief.",
      },
    ],
  }),
  component: BusinessOpsPage,
});

function BusinessOpsPage() {
  return (
    <SolutionPage
      preHeadline="Business Ops"
      hero={
        <>
          One screen. <span className="text-gradient-hero">Everything that changed.</span> No rebuild.
        </>
      }
      sub="Stop asking five people for the same number every week. Business Memory keeps the story in one place; Twin prepares the brief."
      pain="The founder pulls revenue, CRM, finance, support, hiring, product, and spreadsheets — picture assembled stale. Work resets every Monday."
      promise="Business Memory holds the story. Attention Layer shows what shifted since Friday. Twin connects the dots and prepares the brief."
      attention={businessOpsAttention}
      workbench={businessOpsScenario}
      primaryCta={{ label: "Book a Demo", kind: "demo" }}
      trust="All important updates from trusted Memory. No guesswork. No rebuild."
    />
  );
}
