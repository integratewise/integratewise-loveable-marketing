import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DemoModalProvider } from "@/components/site/demo-modal-context";
import { LeadModals } from "@/components/site/LeadModals";
import { RouteTransition } from "@/components/site/RouteTransition";
import { ScrollProgressBar } from "@/components/site/motion/ScrollProgressBar";
import { SpotlightCursor } from "@/components/site/motion/SpotlightCursor";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[13px] font-semibold uppercase tracking-wider text-text-secondary">
          404
        </p>
        <h1 className="heading-h1 mt-3">This page hasn't been built yet.</h1>
        <p className="mt-3 text-[15px] text-text-secondary">
          The link may be old, or we haven't shipped this section. Head back home and we'll get you
          to where you need to go.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary-iw">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE_NAME} — Build memory for your work.` },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "theme-color", content: "#111111" },
      { property: "og:title", content: `${SITE_NAME} — Build memory for your work.` },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "IntegrateWise - Knowledge Workspace" },
      { property: "og:title", content: "IntegrateWise - Knowledge Workspace" },
      { name: "twitter:title", content: "IntegrateWise - Knowledge Workspace" },
      {
        name: "description",
        content:
          "IntegrateWise is a knowledge workspace that unifies scattered data into Digital Memory for AI-powered insights and actions.",
      },
      {
        property: "og:description",
        content:
          "IntegrateWise is a knowledge workspace that unifies scattered data into Digital Memory for AI-powered insights and actions.",
      },
      {
        name: "twitter:description",
        content:
          "IntegrateWise is a knowledge workspace that unifies scattered data into Digital Memory for AI-powered insights and actions.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/dd17b894-d1f7-41da-885b-2257b58f4ffd",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/dd17b894-d1f7-41da-885b-2257b58f4ffd",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <MotionConfig reducedMotion="user">
      <DemoModalProvider>
        <div className="relative flex min-h-screen flex-col bg-background text-foreground">
          <ScrollProgressBar />
          <SpotlightCursor />
          <Header />
          <main className="relative z-10 flex-1 pt-[88px]">
            <RouteTransition>
              <Outlet />
            </RouteTransition>
          </main>
          <Footer />
          <LeadModals />
        </div>
      </DemoModalProvider>
    </MotionConfig>
  );
}
