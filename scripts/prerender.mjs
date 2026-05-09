// Prerender all marketing routes by invoking the SSR worker entry directly.
// Output: writes dist/client/<route>/index.html for each route, plus
// /sitemap.xml and /robots.txt for crawlers. Firebase Hosting serves these
// as static pages, with `cleanUrls: true` matching e.g. /pricing ->
// /pricing/index.html, and the SPA fallback rewrite (`** -> /index.html`)
// handling any unknown path.

import { mkdir, writeFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CLIENT_DIR = join(ROOT, "dist", "client");
const SERVER_ENTRY = join(ROOT, "dist", "server", "server.js");
const SITE_URL = process.env.SITE_URL ?? "https://integratewise.ai";

if (!existsSync(SERVER_ENTRY)) {
  console.error(`[prerender] Missing build at ${SERVER_ENTRY}. Run \`npm run build\` first.`);
  process.exit(1);
}

const ROUTES = [
  "/",
  "/about",
  "/blog",
  "/changelog",
  "/company",
  "/contact",
  "/customer-zero",
  "/docs",
  "/manifesto",
  "/pricing",
  "/resources",
  "/twin",
  "/why",

  "/platform",
  "/platform/how-it-works",
  "/platform/integrations",
  "/platform/memory",
  "/platform/security",
  "/platform/the-spine",

  "/product",
  "/product/how-it-works",
  "/product/the-twin",
  "/product/workbench",

  "/solutions",
  "/solutions/account-success",
  "/solutions/business-ops",
  "/solutions/customer-success",
  "/solutions/personal-space",
  "/solutions/by-role",
  "/solutions/by-industry",
  "/solutions/role",
  "/solutions/industry",
  "/solutions/finance-ops",
  "/solutions/sales-ops",

  // Dynamic industry slugs (from src/routes/solutions.by-industry.tsx)
  "/solutions/by-industry/saas",
  "/solutions/by-industry/ecommerce",
  "/solutions/by-industry/healthcare",
  "/solutions/by-industry/fintech",
  "/solutions/by-industry/manufacturing",
  "/solutions/by-industry/professional-services",
];

const mod = await import(SERVER_ENTRY);
const server = mod.default ?? mod.server;
if (!server || typeof server.fetch !== "function") {
  console.error("[prerender] Server entry has no `fetch` export.");
  process.exit(1);
}

let ok = 0;
let fail = 0;

for (const route of ROUTES) {
  const url = `https://prerender.local${route}`;
  try {
    let res = await server.fetch(new Request(url, { method: "GET", redirect: "manual" }), {}, {});

    // Follow internal redirects (e.g. /product/the-twin -> /product#the-twin)
    // by rendering the destination page and saving its HTML at the *requested*
    // path, so a direct hit on /product/the-twin still serves valid HTML.
    if (res && res.status >= 300 && res.status < 400) {
      const loc = res.headers.get("location");
      if (loc) {
        const targetUrl = loc.startsWith("http") ? loc : `https://prerender.local${loc}`;
        // Strip hash for fetching; the SPA will scroll to it after hydration.
        const fetchUrl = targetUrl.split("#")[0];
        res = await server.fetch(new Request(fetchUrl, { method: "GET" }), {}, {});
      }
    }

    if (!res || !res.ok) {
      console.warn(`[prerender] ${route} -> HTTP ${res?.status ?? "no response"}`);
      fail += 1;
      continue;
    }
    let html = await res.text();
    if (!html || !html.includes("<html")) {
      console.warn(`[prerender] ${route} -> response is not HTML, skipping`);
      fail += 1;
      continue;
    }

    // Per-route canonical (overrides the generic one set in __root). Keep
    // the rest of the meta untouched — TanStack Router already populates
    // title/description from each route's `head()`.
    const canonical = `${SITE_URL}${route === "/" ? "" : route}`;
    html = html.replace(
      /<link rel="canonical"[^>]*\/?>/i,
      `<link rel="canonical" href="${canonical}">`,
    );
    if (!/<link rel="canonical"/i.test(html)) {
      html = html.replace(
        "</head>",
        `    <link rel="canonical" href="${canonical}">\n  </head>`,
      );
    }

    // Inject prerender + og:url markers.
    html = html.replace("<head>", `<head>\n    <meta name="x-prerender" content="${route}">`);
    html = html.replace(
      /<meta property="og:url"[^>]*\/?>/i,
      `<meta property="og:url" content="${canonical}">`,
    );

    const outDir =
      route === "/" ? CLIENT_DIR : join(CLIENT_DIR, ...route.replace(/^\//, "").split("/"));
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, "index.html"), html, "utf8");
    console.log(`[prerender] ${route} (${html.length.toLocaleString()} bytes)`);
    ok += 1;
  } catch (err) {
    console.error(`[prerender] ${route} FAILED:`, err.message ?? err);
    fail += 1;
  }
}

// Strip the cloudflare-only wrangler.json from the hosting payload so Firebase
// doesn't ship it as a public asset.
const wranglerJson = join(CLIENT_DIR, "wrangler.json");
if (existsSync(wranglerJson)) {
  await rm(wranglerJson);
}

// sitemap.xml — clean, just <loc> + <lastmod>. No priority/changefreq noise.
const today = new Date().toISOString().slice(0, 10);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  ROUTES.map((r) => {
    const loc = `${SITE_URL}${r === "/" ? "" : r}`;
    return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod></url>`;
  }).join("\n") +
  `\n</urlset>\n`;
await writeFile(join(CLIENT_DIR, "sitemap.xml"), sitemap, "utf8");

// robots.txt — minimal: allow all + sitemap reference.
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
await writeFile(join(CLIENT_DIR, "robots.txt"), robots, "utf8");

console.log(`\n[prerender] done — ${ok} ok, ${fail} failed`);
process.exit(fail > 0 && ok === 0 ? 1 : 0);
