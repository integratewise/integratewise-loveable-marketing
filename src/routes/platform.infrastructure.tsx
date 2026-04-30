import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/infrastructure")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", hash: "stack" });
  },
});
