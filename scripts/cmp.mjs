import { chromium } from "playwright";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

const pages = [
  { url: "https://integratewise.ai", name: "live" },
  { url: "https://integratewise-staging.web.app", name: "staging" },
];

for (const p of pages) {
  const page = await ctx.newPage();
  await page.goto(p.url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `/tmp/cmp-${p.name}-top.png`, clip: { x: 0, y: 0, width: 1440, height: 200 } });
  await page.screenshot({ path: `/tmp/cmp-${p.name}-hero.png`, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  await page.close();
}

await browser.close();
console.log("done");
