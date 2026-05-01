/** /product/workbench — alias to the Workspace section on /product. */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/product/workbench")({
  beforeLoad: () => {
    throw redirect({ to: "/product", hash: "workspace" });
  },
});
