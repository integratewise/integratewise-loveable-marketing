import { chromium } from "playwright";
import { writeFile } from "node:fs/promises";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto("https://integratewise.ai", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);

// Screenshot the header
const header = await page.$("header");
if (header) {
  await header.screenshot({ path: "/tmp/iw-live-header.png" });
}
await page.screenshot({ path: "/tmp/iw-live-top.png", clip: { x: 0, y: 0, width: 1440, height: 200 } });

// Extract nav structure + computed styles
const navData = await page.evaluate(() => {
  const header = document.querySelector("header");
  if (!header) return null;
  const cs = (el) => {
    const s = getComputedStyle(el);
    return {
      bg: s.backgroundColor,
      color: s.color,
      font: s.fontFamily,
      fontSize: s.fontSize,
      fontWeight: s.fontWeight,
      letter: s.letterSpacing,
      padding: s.padding,
      gap: s.gap,
      border: s.borderBottom,
      backdropFilter: s.backdropFilter,
      height: s.height,
      position: s.position,
    };
  };
  const links = Array.from(header.querySelectorAll("a, button")).map((el) => ({
    tag: el.tagName,
    text: el.textContent?.trim().slice(0, 40),
    href: el.getAttribute("href"),
    classes: el.className,
    style: cs(el),
  }));
  return {
    headerHTML: header.outerHTML.slice(0, 8000),
    headerStyle: cs(header),
    links,
  };
});

await writeFile("/tmp/iw-live-nav.json", JSON.stringify(navData, null, 2));
console.log("header style:", JSON.stringify(navData?.headerStyle, null, 2));
console.log("\nlinks:", navData?.links?.map(l => `[${l.tag}] ${l.text} -> ${l.href}`).join("\n"));

// Hover the first menu item to capture dropdowns
const menuTriggers = await page.$$("header button, header [role='button'], header a");
for (let i = 0; i < Math.min(menuTriggers.length, 6); i++) {
  await menuTriggers[i].hover();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/iw-live-hover-${i}.png`, clip: { x: 0, y: 0, width: 1440, height: 600 } });
}

await browser.close();
