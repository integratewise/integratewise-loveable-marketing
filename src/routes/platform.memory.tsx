/**
 * /platform/memory — alias route for the Digital Memory story.
 *
 * The Platform page IS the Memory story. This route redirects to
 * /platform so the footer "Memory" link lands on the canonical page
 * without duplicating the component (which would also break the
 * TanStack code-splitter when re-exporting another route's component).
 */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/memory")({
  beforeLoad: () => {
    throw redirect({ to: "/platform" });
  },
});
