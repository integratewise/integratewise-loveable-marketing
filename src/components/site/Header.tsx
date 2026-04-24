import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { PRIMARY_NAV } from "@/lib/site";
import { useDemoModal } from "./demo-modal-context";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openDemo } = useDemoModal();
  const { location } = useRouterState();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <Container>
        <div
          className={cn(
            "nav-glass flex h-[68px] items-center justify-between px-4 sm:px-5 transition-shadow",
            scrolled && "shadow-card",
          )}
        >
          <Link to="/" className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block size-7 rounded-md"
              style={{ background: "var(--gradient-button-primary)" }}
            />
            <span className="text-[17px] font-semibold tracking-tight text-foreground">
              IntegrateWise
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-2 text-[15px] text-text-secondary transition-colors hover:bg-white/5 hover:text-foreground"
                activeProps={{ className: "text-foreground bg-white/5" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openDemo("Header")}
              className="btn-primary-iw hidden sm:inline-flex !px-4 !py-2.5 text-[14px]"
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
          <div className="nav-glass mt-2 lg:hidden p-3">
            <nav className="flex flex-col">
              {PRIMARY_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-lg px-3 py-3 text-[15px] text-foreground hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => openDemo("Header mobile")}
                className="btn-primary-iw mt-2 w-full sm:hidden"
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
