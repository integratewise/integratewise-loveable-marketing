Using Node.js 20, Tailwind CSS v3.4.19, and Vite v7.2.4

Tailwind CSS has been set up with the shadcn theme

Setup complete: /mnt/agents/output/app

Components (40+):
  accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb,
  button-group, button, calendar, card, carousel, chart, checkbox, collapsible,
  command, context-menu, dialog, drawer, dropdown-menu, empty, field, form,
  hover-card, input-group, input-otp, input, item, kbd, label, menubar,
  navigation-menu, pagination, popover, progress, radio-group, resizable,
  scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner,
  spinner, switch, table, tabs, textarea, toggle-group, toggle, tooltip

Usage:
  import { Button } from '@/components/ui/button'
  import { Card, CardHeader, CardTitle } from '@/components/ui/card'

Structure:
  src/pages/           12 route-level pages (all wired in App.tsx)
  src/sections/        20 sections (11 exported, 9 orphaned)
  src/components/ui/   shadcn/ui primitives
  src/components/workbench/  Workbench showcase components
  src/hooks/           Custom hooks
  src/styles/          Editorial + workbench CSS
  src/App.tsx          Root React component with HashRouter
  src/main.tsx         Entry point
  src/index.css        Global styles + design tokens
  index.html           Entry point
  tailwind.config.js   Tailwind theme + plugins
  vite.config.ts       Build + dev server settings
  postcss.config.js    CSS post-processing
