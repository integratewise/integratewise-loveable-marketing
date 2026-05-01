import { chromium } from "playwright";

const ROUTES = [
  "/",
  "/product",
  "/platform",
  "/twin",
  "/docs",
  "/manifesto",
  "/company",
  "/blog",
];
const BASE = "https://integratewise-staging.web.app";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const out = [];
const consoleErrors = [];
page.on("pageerror", (e) => consoleErrors.push(`PAGEERR ${e.message}`));
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(`CONSOLE ${msg.text()}`);
});

for (const r of ROUTES) {
  consoleErrors.length = 0;
  const url = BASE + r;
  const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
  const status = resp?.status();
  await page.waitForTimeout(800);
  const meta = await page.evaluate(() => {
    const get = (sel, attr = "content") => document.querySelector(sel)?.getAttribute(attr) || null;
    const h1 = Array.from(document.querySelectorAll("h1")).map((n) => n.innerText.trim()).slice(0, 3);
    const h2 = Array.from(document.querySelectorAll("h2")).map((n) => n.innerText.trim()).slice(0, 6);
    return {
      title: document.title,
      desc: get('meta[name="description"]'),
      ogTitle: get('meta[property="og:title"]'),
      ogDesc: get('meta[property="og:description"]'),
      canonical: get('link[rel="canonical"]', "href"),
      h1,
      h2,
    };
  });
  out.push({ route: r, status, ...meta, errors: [...consoleErrors] });
}

await browser.close();
console.log(JSON.stringify(out, null, 2));
