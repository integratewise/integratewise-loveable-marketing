# IntegrateWise Marketing Site — Agent Reference

## Brand Assets

### Logo Mark

The IntegrateWise logo is the **SpineLogo** — an abstract path-based mark shaped like a connected spine / circuit. It is **NOT** a generic colored square with "IW" text.

**Do NOT use this placeholder:**
```xml
<!-- OLD / INCORRECT -->
<rect fill="#1A3A2A" rx="8"/>
<text fill="#B8943F" font-weight="700">IW</text>
```

**Correct logo files:**

| File | Use Case |
|---|---|
| `/public/assets/logo-mark.svg` | Light backgrounds (header, body). Fill: `#1A3A2A` (forest) |
| `/public/assets/logo-mark-light.svg` | Dark backgrounds (footer). Fill: `#F4F0E8` (paper) |

**Verified sources of truth:**
- `integratewise-lg/components/spine-logo.tsx` — React component used in the Next.js app
- `integratewise-lg/public/IW-Logo.png` — PNG export of the mark
- `integratewise-docs/docs/public/logo.png` — Docs site version (white on transparent)

### Logo Usage in Code

The logo is rendered as an `<img>` tag in `src/layouts/Layout.tsx`:

- **Header**: `<img src="/assets/logo-mark.svg" alt="IW" />` (light bg)
- **Footer**: `<img src="/assets/logo-mark-light.svg" alt="IW" />` (dark bg)

If you ever recreate or replace the logo SVG, preserve the **83×83 viewBox** and the four path commands from `spine-logo.tsx`. Do not swap it for a text-based or geometric placeholder.

---

*Created: 2026-05-26*
