import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/product/approval")({
  beforeLoad: () => {
    throw redirect({ to: "/product", hash: "approval-gate" });
  },
});
