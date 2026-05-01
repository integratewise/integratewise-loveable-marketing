import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/by-role")({
  beforeLoad: () => {
    throw redirect({ to: "/solutions", hash: "solutions-overview", search: { role: "all", domain: "all", industry: "all" } });
  },
});
