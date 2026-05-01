import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/the-spine")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", hash: "spine", replace: true });
  },
});
