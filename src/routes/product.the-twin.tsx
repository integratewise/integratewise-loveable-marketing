import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/product/the-twin")({
  beforeLoad: () => {
    throw redirect({ to: "/product", hash: "human-in-the-loop" });
  },
});
