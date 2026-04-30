import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy index — redirect to the new singular hash-driven slider. */
export const Route = createFileRoute("/solutions/by-role")({
  beforeLoad: () => {
    throw redirect({ to: "/solutions/role", replace: true });
  },
  component: () => null,
});
