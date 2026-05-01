import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/sales-ops")({
  beforeLoad: () => {
    throw redirect({ to: "/solutions", hash: "account-success", search: { role: "all", domain: "all", industry: "all" } });
  },
});
