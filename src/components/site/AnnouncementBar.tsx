import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative z-40 border-b border-border/60 bg-elevated/80">
      <div className="mx-auto flex h-9 max-w-[1280px] items-center justify-center gap-2 px-4 text-[12.5px]">
        <span className="rounded-full border border-border/70 bg-white/[0.04] px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-text-secondary">
          Founder-led
        </span>
        <span className="text-text-secondary">
          Truth you own. AI you rent. Approval in between.
        </span>
        <Link
          to="/platform/the-spine"
          className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-brand-accent"
        >
          See the Spine <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
