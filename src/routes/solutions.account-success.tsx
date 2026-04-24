import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { accountSuccessAttention } from "@/content/attention-scenarios";
import { accountSuccessScenario } from "@/content/workbench-scenarios";

export const Route = createFileRoute("/solutions/account-success")({
  head: () => ({
    meta: [
      { title: "Account Success — IntegrateWise" },
      {
        name: "description",
        content:
          "Walk into every customer conversation already knowing what changed. Save accounts before they slip.",
      },
      { property: "og:title", content: "Account Success — IntegrateWise" },
      {
        property: "og:description",
        content: "Account history, warning signs, billing issues — in one Memory that never resets.",
      },
    ],
  }),
  component: AccountSuccessPage,
});

function AccountSuccessPage() {
  return (
    <SolutionPage
      preHeadline="Account Success"
      hero={
        <>
          Walk into every customer conversation{" "}
          <span className="text-gradient-hero">already knowing what changed.</span>
        </>
      }
      sub="Keep account history, warning signs, support patterns, billing issues, and recent conversations in one place. Work never resets."
      pain="CS reps check CRM, support, usage, call notes, and spreadsheets — always a step behind. The customer hears the apology before they see the action."
      promise="Shared Memory holds the whole story. Attention Layer surfaces risk immediately. Twin connects the signals and prepares the next step."
      attention={accountSuccessAttention}
      workbench={accountSuccessScenario}
      primaryCta={{ label: "Book a Demo", kind: "demo" }}
      trust="Private notes stay private. Shared account data is shared by choice only."
    />
  );
}
