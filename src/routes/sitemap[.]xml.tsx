import { createFileRoute } from "@tanstack/react-router";

const SITE_URL = "https://integratewise.ai";

const ROUTES: Array<{ path: string; changefreq: string; priority: string }> = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/platform", changefreq: "weekly", priority: "0.9" },
  { path: "/platform/the-spine", changefreq: "monthly", priority: "0.7" },
  { path: "/platform/memory", changefreq: "monthly", priority: "0.7" },
  { path: "/platform/how-it-works", changefreq: "monthly", priority: "0.7" },
  { path: "/platform/integrations", changefreq: "monthly", priority: "0.7" },
  { path: "/platform/infrastructure", changefreq: "monthly", priority: "0.6" },
  { path: "/platform/security", changefreq: "monthly", priority: "0.7" },
  { path: "/product", changefreq: "weekly", priority: "0.9" },
  { path: "/product/workbench", changefreq: "monthly", priority: "0.7" },
  { path: "/product/the-twin", changefreq: "monthly", priority: "0.7" },
  { path: "/product/approval", changefreq: "monthly", priority: "0.7" },
  { path: "/product/reference-layer", changefreq: "monthly", priority: "0.6" },
  { path: "/product/how-it-works", changefreq: "monthly", priority: "0.7" },
  { path: "/twin", changefreq: "weekly", priority: "0.9" },
  { path: "/solutions", changefreq: "weekly", priority: "0.9" },
  { path: "/solutions/by-role", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/by-industry", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/account-success", changefreq: "monthly", priority: "0.8" },
  { path: "/solutions/business-ops", changefreq: "monthly", priority: "0.8" },
  { path: "/solutions/personal-space", changefreq: "monthly", priority: "0.8" },
  { path: "/solutions/sales-ops", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/finance-ops", changefreq: "monthly", priority: "0.7" },
  { path: "/pricing", changefreq: "monthly", priority: "0.8" },
  { path: "/company", changefreq: "monthly", priority: "0.6" },
  { path: "/about", changefreq: "monthly", priority: "0.6" },
  { path: "/why", changefreq: "monthly", priority: "0.6" },
  { path: "/manifesto", changefreq: "monthly", priority: "0.5" },
  { path: "/customer-zero", changefreq: "monthly", priority: "0.5" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
  { path: "/resources", changefreq: "weekly", priority: "0.6" },
  { path: "/blog", changefreq: "weekly", priority: "0.6" },
  { path: "/docs", changefreq: "weekly", priority: "0.6" },
  { path: "/changelog", changefreq: "weekly", priority: "0.5" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const lastmod = new Date().toISOString().split("T")[0];
        const urls = ROUTES.map(
          (r) =>
            `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
        ).join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
