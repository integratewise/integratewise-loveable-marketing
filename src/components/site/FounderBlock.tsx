import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function FounderBlock() {
  return (
    <Reveal className="card-iw grid items-center gap-8 p-8 md:grid-cols-[180px_1fr] sm:p-10">
      <div className="mx-auto flex size-[160px] items-center justify-center rounded-3xl border border-border bg-elevated text-[44px] font-bold text-foreground/80">
        IW
      </div>
      <div>
        <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
          From the founder
        </p>
        <h2 className="heading-h2 mt-3">I built this because my own work kept resetting.</h2>
        <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-text-secondary">
          Customer Zero is me. I run IntegrateWise on IntegrateWise — every account, every invoice,
          every approval. The system you'll see in the demo is the same one I open first thing in
          the morning.
        </p>
        <Link
          to="/customer-zero"
          className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-accent hover:underline underline-offset-4"
        >
          Read the founder's story <ArrowRight size={14} />
        </Link>
      </div>
    </Reveal>
  );
}
