/** /twin — redirects to the canonical Intelligence page at /intelligence */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/twin")({
  beforeLoad: ({ location }) => {
    throw redirect({
      to: "/intelligence",
      hash: location.hash ? location.hash.slice(1) : undefined,
      replace: true,
    });
  },
});
