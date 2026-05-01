import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/why")({
  beforeLoad: () => {
    throw redirect({ to: "/company", hash: "customer-zero" });
  },
});
