/** /product/approval — alias to the Evidence/Approval section on /product. */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/product/approval")({
  beforeLoad: () => {
    throw redirect({ to: "/product", hash: "evidence" });
  },
});
