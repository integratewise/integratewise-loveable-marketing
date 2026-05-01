import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/by-industry/$industry")({
  beforeLoad: () => {
    throw redirect({ to: "/solutions", hash: "solutions-overview", search: { role: "all", domain: "all", industry: "all" } });
  },
});
