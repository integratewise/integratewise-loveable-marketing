import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/product/workbench")({
  head: () => stubMeta("The Workspace", "The view that assembles around the work in front of you."),
  component: () => <StubPage title="The Workspace" description="The view that assembles around the work in front of you." />,
});
