import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { PRIMARY_NAV, type NavGroup } from "@/lib/site";
import { useDemoModal } from "./demo-modal-context";
import { cn } from "@/lib/utils";
import { SpineLogo } from "./SpineLogo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { open: openDemo } = useDemoModal();
  const { location } = useRouterState();

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

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
      className="fixed left-0 right-0 top-0 z-50"
      style={{
        background: "rgba(5, 7, 10, 0.75)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
      }}
    >
      <nav className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          aria-label="IntegrateWise home"
          className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50"
        >
          <SpineLogo className="h-8 w-8 shrink-0 text-white" />
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-white">
            IntegrateWise
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {PRIMARY_NAV.map((item) => {
            if (item.kind === "link") {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-md px-3 py-2 text-[15px] font-medium tracking-[-0.02em] text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50"
                  activeProps={{ className: "text-white" }}
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
                    "flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium tracking-[-0.02em] text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50",
                    isOpen && "text-white",
                  )}
                  onFocus={() => handleEnter(item.label)}
                  onBlur={handleLeave}
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={cn("transition-transform", isOpen && "rotate-180")}
                  />
                </button>
                {isOpen && <MegaMenu item={item} />}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openDemo("Header")}
            className="inline-flex h-[38px] items-center justify-center rounded-xl bg-primary px-4 text-[14px] font-semibold tracking-[-0.02em] text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50"
            style={{ border: "1px solid rgba(52, 211, 153, 0.2)" }}
          >
            Book a demo
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-1.5 text-white/60 hover:text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="lg:hidden"
          style={{
            background: "rgba(5, 7, 10, 0.95)",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <div className="mx-auto max-w-[1200px] px-6 py-4 md:px-10">
            <nav className="flex flex-col">
              {PRIMARY_NAV.map((item) => {
                if (item.kind === "link") {
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="rounded-md px-3 py-3 text-[15px] font-semibold text-white hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <div
                    key={item.label}
                    className="border-b border-white/5 py-2 last:border-0"
                  >
                    <p className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                      {item.label}
                    </p>
                    {item.groups
                      .flatMap((g) => g.items)
                      .map((leaf) => (
                        <Link
                          key={leaf.to}
                          to={leaf.to}
                          className="flex items-start gap-3 rounded-md px-3 py-2.5 hover:bg-white/5"
                        >
                          <leaf.icon size={16} className="mt-0.5 text-primary" />
                          <span className="text-[14.5px] text-white">{leaf.label}</span>
                        </Link>
                      ))}
                    {item.footer && (
                      <Link
                        to={item.footer.to}
                        className="mt-1 flex items-center gap-2 rounded-md px-3 py-2.5 text-[14px] font-semibold text-primary hover:bg-white/5"
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
                className="mt-3 inline-flex h-[42px] w-full items-center justify-center rounded-xl bg-primary text-[14px] font-semibold text-white hover:bg-primary/90"
                style={{ border: "1px solid rgba(52, 211, 153, 0.2)" }}
              >
                Book a demo
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu({ item }: { item: Extract<NavGroup, { kind: "menu" }> }) {
  const cols = item.groups.length;
  const width =
    cols >= 3
      ? "w-[1040px] max-w-[calc(100vw-2rem)]"
      : cols === 2
        ? "w-[760px] max-w-[calc(100vw-2rem)]"
        : "w-[340px]";
  return (
    <div
      role="menu"
      className={cn(
        "absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 rounded-2xl p-4",
        width,
      )}
      style={{
        background: "rgba(10, 11, 16, 0.92)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        className={cn(
          "grid gap-3",
          cols === 3 ? "grid-cols-3" : cols === 2 ? "grid-cols-2" : "grid-cols-1",
        )}
      >
        {item.groups.map((g) => (
          <div key={g.heading}>
            <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
              {g.heading}
            </p>
            <ul className="flex flex-col gap-0.5">
              {g.items.map((leaf) => {
                const showWaitlist =
                  "waitlist" in leaf && (leaf as { waitlist?: boolean }).waitlist;
                return (
                  <li key={leaf.to}>
                    <Link
                      to={leaf.to}
                      className="group flex items-start gap-3 rounded-lg p-2.5 hover:bg-white/[0.06]"
                    >
                      <leaf.icon size={16} className="mt-0.5 shrink-0 text-primary" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] font-semibold text-white">
                            {leaf.label}
                          </span>
                          {showWaitlist && (
                            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                              Waitlist
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-[12.5px] leading-snug text-white/50">
                          {leaf.blurb}
                        </p>
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
        <div className="mt-3 border-t border-white/5 pt-3">
          <div className="flex items-center justify-between gap-3 px-2">
            <Link
              to={item.footer.to}
              className="text-[13.5px] font-semibold text-primary hover:underline underline-offset-4"
            >
              {item.footer.label} →
            </Link>
            {item.footer.chips && (
              <div className="hidden flex-wrap justify-end gap-1.5 md:flex">
                {item.footer.chips.map((c) => (
                  <Link
                    key={c.slug}
                    to={c.to}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[12px] text-white/60 hover:border-primary/40 hover:text-white"
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
