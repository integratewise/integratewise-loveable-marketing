import { chromium } from "playwright";

const browser = await chromium.launch();
const URL = "https://integratewise-staging.web.app";

const breakpoints = [
  { w: 375, h: 812, name: "iphone" },
  { w: 414, h: 896, name: "iphone-plus" },
  { w: 768, h: 1024, name: "ipad" },
  { w: 1024, h: 768, name: "ipad-land" },
  { w: 1440, h: 900, name: "desktop" },
];

for (const bp of breakpoints) {
  const ctx = await browser.newContext({ viewport: { width: bp.w, height: bp.h } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(900);
  await page.screenshot({ path: `/tmp/mob-${bp.name}-closed.png`, clip: { x: 0, y: 0, width: bp.w, height: Math.min(bp.h, 200) } });

  // Click menu toggle if visible
  const toggle = await page.$('button[aria-label="Open menu"]');
  if (toggle) {
    await toggle.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `/tmp/mob-${bp.name}-open.png`, fullPage: false });
    const menuVisible = await page.evaluate(() => {
      const dropdowns = Array.from(document.querySelectorAll("header div"));
      const visible = dropdowns.find((d) => d.offsetHeight > 200 && d.offsetWidth > 200);
      return visible ? { h: visible.offsetHeight, w: visible.offsetWidth } : null;
    });
    console.log(`[${bp.name} ${bp.w}px] toggle visible, menu after click: ${JSON.stringify(menuVisible)}`);
  } else {
    console.log(`[${bp.name} ${bp.w}px] no mobile toggle (desktop nav)`);
  }
  await ctx.close();
}

await browser.close();
