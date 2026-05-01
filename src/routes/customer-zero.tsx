import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/customer-zero")({
  beforeLoad: () => {
    throw redirect({ to: "/company", hash: "customer-zero" });
  },
});
