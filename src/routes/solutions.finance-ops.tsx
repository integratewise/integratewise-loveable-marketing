import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/finance-ops")({
  beforeLoad: () => {
    throw redirect({ to: "/solutions", hash: "business-ops", search: { role: "all", domain: "all", industry: "all" } });
  },
});
