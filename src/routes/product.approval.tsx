import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/product/approval")({
  head: () => stubMeta("Approval Gate", "Every action waits for a human to say yes."),
  component: () => <StubPage title="The Approval Gate" description="Every action waits for a human to say yes." />,
});
