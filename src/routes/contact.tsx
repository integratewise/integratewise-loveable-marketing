import { createFileRoute } from "@tanstack/react-router";
import { StubPage, stubMeta } from "@/components/site/StubPage";

export const Route = createFileRoute("/contact")({
  head: () => stubMeta("Contact", "Talk to the founder. Real conversation, no forms-as-walls."),
  component: () => (
    <StubPage
      title="Contact"
      description="Talk to the founder. Real conversation, no forms-as-walls."
    />
  ),
});
