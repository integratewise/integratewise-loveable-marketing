import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/pricing")({
  head: () => stubMeta("Pricing", "Starter · Growth · Command. Real entitlements, not vibes."),
  component: () => <StubPage title="Pricing" description="Starter · Growth · Command. Real entitlements, not vibes." />,
});
