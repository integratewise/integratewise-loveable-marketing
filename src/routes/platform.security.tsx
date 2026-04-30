import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/security")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", hash: "security" });
  },
});
