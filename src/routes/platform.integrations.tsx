import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/integrations")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", hash: "integrations", replace: true });
  },
});
