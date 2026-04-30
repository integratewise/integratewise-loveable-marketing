/**
 * /platform/memory — alias route for the Digital Memory story.
 *
 * The Platform page IS the Memory story, but the footer IA exposes
 * "Spine" and "Memory" as two distinct doors into it. This route
 * mounts the same component as /platform so deep links land on the
 * correct narrative without duplicating content.
 */
import { createFileRoute } from "@tanstack/react-router";
import { Route as PlatformRoute } from "./platform";

export const Route = createFileRoute("/platform/memory")({
  head: () => ({
    meta: [
      { title: "Digital Memory — IntegrateWise" },
      {
        name: "description",
        content:
          "Your data becomes Digital Memory. Truth, Context, and governed Session Summaries — one source your Twin can read.",
      },
      { property: "og:title", content: "Digital Memory — IntegrateWise" },
      {
        property: "og:description",
        content:
          "Your data becomes Digital Memory. Truth, Context, and governed Session Summaries — one source your Twin can read.",
      },
    ],
  }),
  component: PlatformRoute.options.component,
});
