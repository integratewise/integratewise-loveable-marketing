import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/solutions/business-ops")({
  head: () => stubMeta("Business Ops", "Invoices, vendors, reconciliations — match, flag, approve."),
  component: () => <StubPage title="Business Ops" description="Invoices, vendors, reconciliations — match, flag, approve." />,
});
