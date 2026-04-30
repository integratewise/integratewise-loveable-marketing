import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/platform/integrations")({
  head: () => stubMeta("Integrations", "Live and upcoming connectors. Request the one you need."),
  component: () => (
    <StubPage title="Integrations" description="Live and upcoming connectors. Request the one you need." />
  ),
});
