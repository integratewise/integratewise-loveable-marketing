import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/customer-zero")({
  head: () => stubMeta("Customer Zero", "Built by an operator. The founder is the first user."),
  component: () => (
    <StubPage
      title="Customer Zero"
      description="Built by an operator. The founder is the first user."
    />
  ),
});
