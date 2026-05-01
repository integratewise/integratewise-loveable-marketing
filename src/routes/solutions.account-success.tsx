import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/account-success")({
  beforeLoad: () => {
    throw redirect({ to: "/solutions", hash: "account-success", search: { role: "all", domain: "all", industry: "all" } });
  },
});
