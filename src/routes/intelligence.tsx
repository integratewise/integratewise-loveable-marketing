/** /intelligence — legacy alias. The canonical Twin page is /twin. */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/intelligence")({
  beforeLoad: () => {
    throw redirect({ to: "/twin" });
  },
});
