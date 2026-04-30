/**
 * /twin → /intelligence redirect.
 *
 * The Twin story now lives on the Intelligence hub page. This redirect keeps
 * old links and footer references working without duplicating component code.
 */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/twin")({
  beforeLoad: () => {
    throw redirect({ to: "/intelligence", hash: "twin" });
  },
});
