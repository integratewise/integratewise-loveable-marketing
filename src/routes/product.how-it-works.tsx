import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/product/how-it-works")({
  head: () => stubMeta("How the Product works", "Watch · Suggest · Approve · Act · Learn."),
  component: () => <StubPage title="How the Product works" description="Watch · Suggest · Approve · Act · Learn." />,
});
