import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/how-it-works")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", hash: "how-it-works" });
  },
});
