import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "./Container";
import { PRIMARY_NAV, type NavGroup, type NavLeaf } from "@/lib/site";
import { useDemoModal } from "./demo-modal-context";
import { cn } from "@/lib/utils";
import { SpineLogo } from "./SpineLogo";

/* Visual tokens locked to the brief.
 * Background: #0d0f1a (matches site bg)
 * Border:     #2a2d3a (1px)
 * Accent:     #a78bfa (active left-rail)
 * Radius:     8px
 * Shadow:     depth-12
 */
const PANEL_STYLE = {
  background: "#0d0f1a",
  border: "1px solid #2a2d3a",
  borderRadius: 8,
  boxShadow: "0 12px 32px -12px rgba(0, 0, 0, 0.6), 0 4px 12px -4px rgba(0, 0, 0, 0.4)",
} as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { open: openDemo } = useDemoModal();
  const { location } = useRouterState();

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
  }, [location.pathname, location.hash]);

  function handleEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }
  function handleLeave() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

  /** Same-page anchor clicks scroll smoothly without a router roundtrip. */
  function handleAnchorClick(leaf: NavLeaf, e: MouseEvent<HTMLAnchorElement>) {
    if (!leaf.hash) return;
    const samePath = location.pathname === leaf.to;
    if (!samePath) return;
    e.preventDefault();
    const el = document.getElementById(leaf.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // keep URL in sync
      window.history.replaceState(null, "", `${leaf.to}#${leaf.hash}`);
    }
    setOpenMenu(null);
    setOpen(false);
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4"
      style={{ ["--header-h" as string]: "84px" }}
    >
      <Container>
        <div
          className="flex h-[60px] items-center justify-between px-5"
          style={PANEL_STYLE}
        >
          <Link to="/" className="flex items-center gap-2.5" aria-label="IntegrateWise home">
            <SpineLogo className="h-[24px] w-auto text-foreground" />
            <span
              className="text-[15px] font-semibold tracking-tight text-foreground"
              style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
            >
              IntegrateWise
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
          >
            {PRIMARY_NAV.map((item) => {
              if (item.kind === "link") {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-[14px] font-medium transition-colors",
                      "text-text-secondary hover:text-foreground",
                      active && "text-foreground",
                    )}
                    style={active ? { boxShadow: "inset 2px 0 0 0 #a78bfa" } : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = openMenu === item.label;
              const isActive =
                item.groups[0]?.items.some((leaf) => leaf.to === location.pathname) ?? false;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleEnter(item.label)}
                  onMouseLeave={handleLeave}
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-[14px] font-medium transition-colors",
                      "text-text-secondary hover:text-foreground",
                      (isOpen || isActive) && "text-foreground",
                    )}
                    style={isActive ? { boxShadow: "inset 2px 0 0 0 #a78bfa" } : undefined}
                    onFocus={() => handleEnter(item.label)}
                    onBlur={handleLeave}
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={cn("transition-transform duration-200", isOpen && "rotate-180")}
                    />
                  </button>
                  {isOpen && (
                    <DropdownPanel
                      item={item}
                      currentPath={location.pathname}
                      onAnchorClick={handleAnchorClick}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openDemo("Header")}
              className="btn-primary-iw inline-flex !px-4 !py-2 text-[13.5px]"
              style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
            >
              Book a Demo
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-9 items-center justify-center rounded-md text-foreground hover:bg-white/5 lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div
            className="mt-2 lg:hidden p-2 max-h-[calc(100vh-120px)] overflow-y-auto"
            style={PANEL_STYLE}
          >
            <nav
              className="flex flex-col"
              style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
            >
              {PRIMARY_NAV.map((item) => {
                if (item.kind === "link") {
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="rounded-md px-3 py-3 text-[14px] font-medium text-foreground hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  );
                }
                const expanded = mobileExpanded === item.label;
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(expanded ? null : item.label)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-[14px] font-medium text-foreground hover:bg-white/5"
                      aria-expanded={expanded}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn("transition-transform", expanded && "rotate-180")}
                      />
                    </button>
                    {expanded && (
                      <ul className="ml-2 mb-1 border-l border-[#2a2d3a] pl-2">
                        {item.groups
                          .flatMap((g) => g.items)
                          .map((leaf) => (
                            <li key={`${leaf.to}#${leaf.hash ?? ""}`}>
                              <Link
                                to={leaf.to}
                                hash={leaf.hash}
                                onClick={(e) => handleAnchorClick(leaf, e)}
                                className="block rounded-md px-3 py-2 text-[13.5px] text-text-secondary hover:bg-white/5 hover:text-foreground"
                              >
                                {leaf.label}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                );
              })}
              <button
                type="button"
                onClick={() => openDemo("Header mobile")}
                className="btn-primary-iw mt-3 w-full text-[14px]"
              >
                Book a Demo
              </button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

function DropdownPanel({
  item,
  currentPath,
  onAnchorClick,
}: {
  item: Extract<NavGroup, { kind: "menu" }>;
  currentPath: string;
  onAnchorClick: (leaf: NavLeaf, e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const items = item.groups.flatMap((g) => g.items);
  return (
    <div
      role="menu"
      className="dropdown-fade-in absolute left-0 top-full mt-2 w-[280px] p-1.5"
      style={{
        ...PANEL_STYLE,
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <ul className="flex flex-col">
        {items.map((leaf) => {
          const samePath = currentPath === leaf.to;
          return (
            <li key={`${leaf.to}#${leaf.hash ?? ""}`} className="relative">
              <Link
                to={leaf.to}
                hash={leaf.hash}
                onClick={(e) => onAnchorClick(leaf, e)}
                className={cn(
                  "group relative block rounded-md px-3 py-2 text-[14px] font-medium transition-colors",
                  "text-text-secondary hover:bg-white/[0.04] hover:text-foreground",
                  samePath && "text-foreground",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full transition-opacity",
                    samePath ? "opacity-100" : "opacity-0 group-hover:opacity-60",
                  )}
                  style={{ background: "#a78bfa" }}
                />
                {leaf.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
