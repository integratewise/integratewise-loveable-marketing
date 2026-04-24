import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/platform")({
  head: () => stubMeta("Platform", "How your data becomes Memory — ingest, clean, organize, govern."),
  component: () => (
    <StubPage
      title="The Platform"
      description="How your data becomes Memory — ingest, clean, organize, govern."
    />
  ),
});
