/** /twin — redirects to the canonical Intelligence page at /intelligence */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/twin")({
  beforeLoad: () => {
    throw redirect({ to: "/intelligence" });
  },
});
