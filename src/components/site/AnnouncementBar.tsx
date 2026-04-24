import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative z-40 border-b border-border/60 bg-elevated/80">
      <div className="mx-auto flex h-9 max-w-[1280px] items-center justify-center gap-2 px-4 text-[12.5px]">
        <span className="rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-brand-highlight">
          New
        </span>
        <span className="text-text-secondary">The Spine 2.0 — deeper Memory, faster Attention.</span>
        <Link
          to="/platform/the-spine"
          className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-brand-accent"
        >
          Read the update <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
