/** /platform/the-spine — alias to the Spine section on /platform. */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/the-spine")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", hash: "spine" });
  },
});
