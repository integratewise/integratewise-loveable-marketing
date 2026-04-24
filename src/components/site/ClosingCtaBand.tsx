import { ArrowRight } from "lucide-react";
import { useDemoModal } from "./demo-modal-context";
import { Reveal } from "./Reveal";

export function ClosingCtaBand() {
  const { open, openEarlyAccess } = useDemoModal();
  return (
    <section className="relative overflow-hidden border-t border-border bg-section-alt">
      <span aria-hidden className="orb orb-peach" style={{ width: 520, height: 520, top: -160, left: "20%" }} />
      <span aria-hidden className="orb orb-purple" style={{ width: 460, height: 460, bottom: -200, right: "10%" }} />
      <div className="container-iw relative py-20 text-center sm:py-28">
        <Reveal>
          <h2 className="heading-h1">
            Stop the reset. <span className="text-gradient-hero">Start the loop.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16.5px] leading-relaxed text-text-secondary">
            See your Memory assembled on your data in 30 minutes. No rebuild. No reset.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button type="button" onClick={() => open("Home · Closing band")} className="btn-primary-iw">
              Book a Demo <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => openEarlyAccess("Home · Closing band")}
              className="btn-secondary-iw"
            >
              Join Early Access
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
