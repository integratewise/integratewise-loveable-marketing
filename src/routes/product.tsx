import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/product")({
  head: () => stubMeta("Product", "Workbench, Twin, and Approval Gate working as one."),
  component: () => <StubPage title="The Product" description="Workbench, Twin, and Approval Gate working as one." />,
});
