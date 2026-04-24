import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { personalAttention } from "@/content/attention-scenarios";
import { personalScenario } from "@/content/workbench-scenarios";

export const Route = createFileRoute("/solutions/personal-ops")({
  head: () => ({
    meta: [
      { title: "Personal Ops — Your day, finally assembled. Finally yours." },
      {
        name: "description",
        content:
          "A personal space where Memory holds your work, apps, calendar, and history — so you stop rebuilding the story every morning.",
      },
      { property: "og:title", content: "Personal Ops — IntegrateWise" },
      {
        property: "og:description",
        content: "Your day, finally assembled. Finally yours.",
      },
    ],
  }),
  component: PersonalOpsPage,
});

function PersonalOpsPage() {
  return (
    <SolutionPage
      preHeadline="Personal Ops"
      hero={
        <>
          Your day, <span className="text-gradient-hero">finally assembled.</span> Finally yours.
        </>
      }
      sub="A personal space where Memory holds your work, apps, calendar, and history — so you stop rebuilding the story every morning."
      pain="Open Gmail, Slack, Notion, Calendar, task list — 45 minutes rebuilding context. Work resets."
      promise="Open IntegrateWise. Attention Layer shows three signals. Workbench shows context ready. Approve. Real work starts."
      attention={personalAttention}
      workbench={personalScenario}
      primaryCta={{ label: "Join the Waitlist", kind: "waitlist" }}
      showWaitlistBadge
      trust="Personal layer stays private — never crosses into work spaces unless you decide."
    />
  );
}
