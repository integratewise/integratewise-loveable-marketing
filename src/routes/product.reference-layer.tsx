import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/product/reference-layer")({
  head: () => stubMeta("Reference Layer", "Separate memories. Coherent life."),
  component: () => <StubPage title="The Reference Layer" description="Separate memories. Coherent life." />,
});
