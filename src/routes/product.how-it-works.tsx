/** /product/how-it-works — alias to the How-it-works section on /product. */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/product/how-it-works")({
  beforeLoad: () => {
    throw redirect({ to: "/product", hash: "how-it-works" });
  },
});
