import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/solutions/account-success")({
  head: () => stubMeta("Account Success", "See risk and renewal signals before they hit the forecast."),
  component: () => <StubPage title="Account Success" description="See risk and renewal signals before they hit the forecast." />,
});
