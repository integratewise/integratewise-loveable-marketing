import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/solutions")({
  head: () => stubMeta("Solutions", "Account Success · Business Ops · Personal Space and more."),
  component: () => <StubPage title="Solutions" description="Account Success · Business Ops · Personal Space and more." />,
});
