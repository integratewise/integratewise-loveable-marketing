/** /platform/infrastructure — alias to the Connectors section on /platform. */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/infrastructure")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", hash: "connectors" });
  },
});
