import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const BASE = "https://integratewise-staging.web.app";
const ROUTES = [
  "/",
  "/product",
  "/platform",
  "/twin",
  "/pricing",
  "/solutions",
  "/solutions/account-success",
  "/solutions/business-ops",
  "/solutions/personal-space",
  "/docs",
  "/blog",
  "/manifesto",
  "/company",
  "/about",
  "/contact",
];

const VIEWPORTS = [
  { w: 1440, h: 900, name: "desktop" },
  { w: 375, h: 812, name: "mobile" },
];

const OUT = "/tmp/iw-audit";
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const report = [];

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
  for (const route of ROUTES) {
    const page = await ctx.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(`PE ${e.message.slice(0, 120)}`));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(`CE ${m.text().slice(0, 120)}`);
    });
    let status = 0;
    try {
      const r = await page.goto(BASE + route, { waitUntil: "domcontentloaded", timeout: 30000 });
      status = r?.status() ?? 0;
      await page.waitForTimeout(800);
      const slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "_");
      await page.screenshot({
        path: `${OUT}/${vp.name}-${slug}.png`,
        fullPage: true,
      });
      const data = await page.evaluate(() => {
        const get = (sel, attr = "content") =>
          document.querySelector(sel)?.getAttribute(attr) || null;
        const headerH = document.querySelector("header")?.offsetHeight || 0;
        const main = document.querySelector("main");
        const mainPt = main ? parseFloat(getComputedStyle(main).paddingTop) : 0;
        const firstSection = document.querySelector("main section");
        const sectionBg = firstSection ? getComputedStyle(firstSection).backgroundColor : "";
        const bodyBg = getComputedStyle(document.body).backgroundColor;
        const containers = Array.from(document.querySelectorAll(".container-iw, [class*='max-w-']"))
          .slice(0, 3)
          .map((el) => ({
            cls: el.className.slice(0, 80),
            w: el.offsetWidth,
          }));
        const h1 = Array.from(document.querySelectorAll("h1")).map((n) => n.innerText.trim().slice(0, 60));
        const cta = Array.from(document.querySelectorAll("header a, header button"))
          .map((n) => n.innerText.trim() || n.getAttribute("aria-label"))
          .filter(Boolean);
        const navOverflow = document.documentElement.scrollWidth > window.innerWidth;
        return {
          title: document.title,
          headerH,
          mainPt,
          sectionBg,
          bodyBg,
          containers,
          h1,
          cta,
          navOverflow,
          docW: document.documentElement.scrollWidth,
          winW: window.innerWidth,
        };
      });
      report.push({ viewport: vp.name, route, status, errors: errors.slice(0, 3), ...data });
    } catch (e) {
      report.push({ viewport: vp.name, route, status, error: String(e).slice(0, 200), errors });
    }
    await page.close();
  }
  await ctx.close();
}

await browser.close();
await writeFile(`${OUT}/report.json`, JSON.stringify(report, null, 2));

// Compact summary
console.log("ROUTE | VP | STATUS | HDR | mainPT | bodyBg | overflow | h1 | errs");
for (const r of report) {
  console.log(
    `${r.route} | ${r.viewport} | ${r.status} | ${r.headerH}px | ${r.mainPt}px | ${r.bodyBg} | ${r.navOverflow ? "OVERFLOW" : "ok"} | ${(r.h1?.[0] ?? "").slice(0, 40)} | ${r.errors?.length || 0}`,
  );
}
