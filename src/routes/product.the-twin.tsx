import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/product/the-twin")({
  head: () => stubMeta("The Twin", "Watches your Memory. Proposes the next move. Never acts alone."),
  component: () => <StubPage title="The Twin" description="Watches your Memory. Proposes the next move. Never acts alone." />,
});
