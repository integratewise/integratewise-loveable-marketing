import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/platform/the-spine")({
  head: () => stubMeta("The Spine", "The unified layer that turns scattered apps into one Memory."),
  component: () => (
    <StubPage title="The Spine" description="The unified layer that turns scattered apps into one Memory." />
  ),
});
