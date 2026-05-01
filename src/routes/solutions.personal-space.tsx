import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/personal-space")({
  beforeLoad: () => {
    throw redirect({ to: "/solutions", hash: "personal-space", search: { role: "all", domain: "all", industry: "all" } });
  },
});
