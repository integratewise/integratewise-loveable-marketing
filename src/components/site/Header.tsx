import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { PRIMARY_NAV, type NavGroup } from "@/lib/site";
import { useDemoModal } from "./demo-modal-context";
import { cn } from "@/lib/utils";
import { SpineLogo } from "./SpineLogo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { open: openDemo } = useDemoModal();
  const { location } = useRouterState();

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }
  function handleLeave() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4"
      style={{ ["--header-h" as string]: "84px" }}
    >
      <Container>
        <div
          className={cn(
            "nav-glass flex h-[68px] items-center justify-between px-4 sm:px-5 transition-shadow",
            scrolled && "shadow-card",
          )}
        >
          <Link to="/" className="flex items-center gap-2.5" aria-label="IntegrateWise home">
            <SpineLogo className="h-[26px] w-auto text-foreground" />
            <span className="text-[17px] font-semibold tracking-tight text-foreground">
              IntegrateWise
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {PRIMARY_NAV.map((item) => {
              if (item.kind === "link") {
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="rounded-lg px-3 py-2 text-[15px] text-text-secondary transition-colors hover:bg-white/5 hover:text-foreground"
                    activeProps={{ className: "text-foreground bg-white/5" }}
                  >
                    {item.label}
                  </Link>
                );
              }
              const isOpen = openMenu === item.label;
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
                      "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] text-text-secondary transition-colors hover:bg-white/5 hover:text-foreground",
                      isOpen && "text-foreground bg-white/5",
                    )}
                    onFocus={() => handleEnter(item.label)}
                    onBlur={handleLeave}
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDown size={14} className={cn("transition-transform", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && <MegaMenu item={item} />}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openDemo("Header")}
              className="btn-primary-iw inline-flex !px-4 !py-2.5 text-[14px]"
            >
              Book a Demo
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-white/5 lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="nav-glass mt-2 lg:hidden p-3 max-h-[calc(100vh-120px)] overflow-y-auto">
            <nav className="flex flex-col">
              {PRIMARY_NAV.map((item) => {
                if (item.kind === "link") {
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="rounded-lg px-3 py-3 text-[15px] font-semibold text-foreground hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <div key={item.label} className="border-b border-border/60 py-2 last:border-0">
                    <p className="px-3 pt-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
                      {item.label}
                    </p>
                    {item.groups.flatMap((g) => g.items).map((leaf) => (
                      <Link
                        key={leaf.to}
                        to={leaf.to}
                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-white/5"
                      >
                        <leaf.icon size={16} className="mt-0.5 text-brand-accent" />
                        <span className="text-[14.5px] text-foreground">{leaf.label}</span>
                      </Link>
                    ))}
                    {item.footer && (
                      <Link
                        to={item.footer.to}
                        className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2.5 text-[14px] font-semibold text-brand-accent hover:bg-white/5"
                      >
                        {item.footer.label} →
                      </Link>
                    )}
                  </div>
                );
              })}
              <button
                type="button"
                onClick={() => openDemo("Header mobile")}
                className="btn-primary-iw mt-3 w-full"
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

function MegaMenu({ item }: { item: Extract<NavGroup, { kind: "menu" }> }) {
  // Wider for Solutions (3 cols + footer), narrower otherwise
  const wide = item.groups.length >= 2;
  return (
    <div
      role="menu"
      className={cn(
        "absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 nav-glass p-4 shadow-card",
        wide ? "w-[760px]" : "w-[340px]",
      )}
    >
      <div
        className={cn(
          "grid gap-3",
          item.groups.length === 3 ? "grid-cols-3" : item.groups.length === 2 ? "grid-cols-2" : "grid-cols-1",
        )}
      >
        {item.groups.map((g) => (
          <div key={g.heading}>
            <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
              {g.heading}
            </p>
            <ul className="flex flex-col gap-0.5">
              {g.items.map((leaf) => {
                const showWaitlist = "waitlist" in leaf && (leaf as { waitlist?: boolean }).waitlist;
                return (
                  <li key={leaf.to}>
                    <Link
                      to={leaf.to}
                      className="group flex items-start gap-3 rounded-lg p-2.5 hover:bg-white/5"
                    >
                      <leaf.icon size={16} className="mt-0.5 shrink-0 text-brand-accent" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] font-semibold text-foreground">{leaf.label}</span>
                          {showWaitlist && (
                            <span className="rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-highlight">
                              Waitlist
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-[12.5px] leading-snug text-text-secondary">{leaf.blurb}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {item.footer && (
        <div className="mt-3 border-t border-border/60 pt-3">
          <div className="flex items-center justify-between gap-3 px-2">
            <Link
              to={item.footer.to}
              className="text-[13.5px] font-semibold text-brand-accent hover:underline underline-offset-4"
            >
              {item.footer.label} →
            </Link>
            {item.footer.chips && (
              <div className="hidden flex-wrap justify-end gap-1.5 md:flex">
                {item.footer.chips.map((c) => (
                  <Link
                    key={c.slug}
                    to={c.to}
                    className="rounded-full border border-border bg-white/[0.02] px-2.5 py-1 text-[12px] text-text-secondary hover:border-brand-highlight/40 hover:text-foreground"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
