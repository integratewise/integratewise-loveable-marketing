import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/platform/how-it-works")({
  head: () => stubMeta("How the Platform works", "Five steps from raw app data to a single source of truth."),
  component: () => (
    <StubPage title="How the Platform works" description="Five steps from raw app data to a single source of truth." />
  ),
});
