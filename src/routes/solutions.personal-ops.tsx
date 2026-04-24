import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/solutions/personal-ops")({
  head: () => stubMeta("Personal Space", "Your own Memory and Twin for the work outside the company."),
  component: () => (
    <StubPage
      title="Personal Space"
      description="Your own Memory and Twin for the work outside the company."
      showWaitlist
    />
  ),
});
