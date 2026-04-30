import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/platform/security")({
  head: () => stubMeta("Security", "Approval-gated, tenant-isolated, audit-friendly by design."),
  component: () => (
    <StubPage title="Security" description="Approval-gated, tenant-isolated, audit-friendly by design." />
  ),
});
