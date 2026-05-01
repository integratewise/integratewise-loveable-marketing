import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DemoModalProvider } from "@/components/site/demo-modal-context";
import { LeadModals } from "@/components/site/LeadModals";
import { RouteTransition } from "@/components/site/RouteTransition";
import { PageSubnav } from "@/components/site/PageSubnav";
import { HashScroll } from "@/components/site/HashScroll";
import { SITE_NAME, SITE_DESCRIPTION, SITE_OG_IMAGE, SITE_TAGLINE, SITE_URL } from "@/lib/site";

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
      { title: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "theme-color", content: "#111111" },
      { name: "robots", content: "index,follow" },

      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SITE_OG_IMAGE },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: SITE_OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  const canonical = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
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
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Header />
          <HashScroll />
          <main className="flex-1 pt-[60px]">
            <PageSubnav />
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
