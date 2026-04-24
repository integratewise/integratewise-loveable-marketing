import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/product/workbench")({
  head: () => stubMeta("The Workbench", "The view that assembles around the work in front of you."),
  component: () => <StubPage title="The Workbench" description="The view that assembles around the work in front of you." />,
});
