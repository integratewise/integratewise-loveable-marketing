import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/product/how-it-works")({
  beforeLoad: () => {
    throw redirect({ to: "/product", hash: "living-workspace" });
  },
});
