import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/solutions/sales-ops")({
  head: () => stubMeta("Sales Ops", "See sales movement with the story behind it. Twin prepares the next move."),
  component: () => (
    <StubPage
      title="Sales Ops"
      description="See sales movement with the story behind it. Twin prepares the next move; you approve."
    />
  ),
});
