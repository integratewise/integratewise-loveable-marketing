/** /product/reference-layer — alias to the Digital Memory section on /product. */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/product/reference-layer")({
  beforeLoad: () => {
    throw redirect({ to: "/product", hash: "digital-memory" });
  },
});
