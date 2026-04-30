import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/platform/infrastructure")({
  head: () => stubMeta("Infrastructure", "Speed, durability, and the freedom to swap models."),
  component: () => (
    <StubPage title="Infrastructure" description="Speed, durability, and the freedom to swap models." />
  ),
});
