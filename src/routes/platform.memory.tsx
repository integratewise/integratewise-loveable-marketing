/** /platform/memory — alias to the Digital Memory section on /platform. */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/memory")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", hash: "digital-memory" });
  },
});
