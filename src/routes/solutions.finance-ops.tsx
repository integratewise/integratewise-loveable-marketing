import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/solutions/finance-ops")({
  head: () => stubMeta("Finance Ops", "Tighter controls, clearer evidence, less manual chasing — with full approval history."),
  component: () => (
    <StubPage
      title="Finance Ops"
      description="Tighter controls, clearer evidence, less manual chasing. Every approval logged with evidence."
    />
  ),
});
