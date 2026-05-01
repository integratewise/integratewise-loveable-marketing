/** /contact — alias to the Contact section on /company. */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/company", hash: "contact" });
  },
});
