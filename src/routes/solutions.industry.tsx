import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/solutions/industry")({
  head: () => ({
    meta: [
      { title: "Solutions by Industry — One Memory, different industries" },
      {
        name: "description",
        content:
          "Same Adaptive Spine. Same Digital Memory. Same Twin. Shaped for SaaS, Retail, Agencies, and Professional Services.",
      },
      { property: "og:title", content: "Solutions by Industry — IntegrateWise" },
      {
        property: "og:description",
        content: "One Memory, different industries. Approval-gated Twin proposals shaped for your work.",
      },
    ],
  }),
  component: IndustrySliderPage,
});

type Slide = {
  hash: string;
  label: string;
  audience: string;
  snapshot: { metric: string; value: string; delta?: string }[];
  proposal: {
    title: string;
    confidence: number;
    evidence: string[];
  };
};

const SLIDES: Slide[] = [
  {
    hash: "saas",
    label: "SaaS",
    audience: "For revenue, CS, and product-led teams chasing renewals and expansion.",
    snapshot: [
      { metric: "Net Revenue Retention", value: "112%", delta: "+4 pts QoQ" },
      { metric: "At-risk ARR (next 60d)", value: "$2.8M", delta: "−12% WoW" },
      { metric: "Adoption (DAU/MAU)", value: "48%", delta: "stable" },
    ],
    proposal: {
      title: "Escalate renewal risk for FinanceFlow ($420k ARR)",
      confidence: 91,
      evidence: [
        "Truth: usage down 38% over 21 days; 4 open Zendesk tickets",
        "Context: champion replied 'paused review' on Mar 12",
        "Session Summary: QBR notes flagged budget freeze",
      ],
    },
  },
  {
    hash: "retail",
    label: "Retail",
    audience: "For DTC and omnichannel ops keeping stock, orders, and support in sync.",
    snapshot: [
      { metric: "Stockouts (top 50 SKUs)", value: "7", delta: "+3 vs last week" },
      { metric: "Returns rate", value: "6.4%", delta: "−0.8 pts" },
      { metric: "Support backlog", value: "142", delta: "+22" },
    ],
    proposal: {
      title: "Reorder SKU-2241 — projected stockout in 6 days",
      confidence: 88,
      evidence: [
        "Truth: Shopify velocity 42/day; warehouse on-hand 250",
        "Context: supplier email confirms 9-day lead time",
        "Session Summary: ops standup approved auto-reorder threshold",
      ],
    },
  },
  {
    hash: "agency",
    label: "Agency / Services",
    audience: "For agencies tracking projects, utilisation, and client billing.",
    snapshot: [
      { metric: "Utilisation", value: "76%", delta: "+2 pts" },
      { metric: "Unbilled WIP", value: "$184k", delta: "+$32k" },
      { metric: "At-risk projects", value: "3", delta: "+1" },
    ],
    proposal: {
      title: "Send overdue invoice batch ($62k) to 4 clients",
      confidence: 94,
      evidence: [
        "Truth: invoices >45 days overdue in QuickBooks",
        "Context: prior reminders read but unanswered",
        "Session Summary: finance approved escalation cadence",
      ],
    },
  },
  {
    hash: "ca",
    label: "CA / Professional Services",
    audience: "For CAs and advisory firms managing filings, engagements, and client docs.",
    snapshot: [
      { metric: "Filings due (30d)", value: "47", delta: "" },
      { metric: "Open queries with clients", value: "29", delta: "+6" },
      { metric: "Engagement realisation", value: "82%", delta: "+1 pt" },
    ],
    proposal: {
      title: "Nudge 12 clients for missing GST docs before deadline",
      confidence: 89,
      evidence: [
        "Truth: doc checklist shows 12 incomplete folders",
        "Context: WhatsApp threads stalled >5 days",
        "Session Summary: partner approved standard reminder template",
      ],
    },
  },
];

function IndustrySliderPage() {
  const { open } = useDemoModal();
  const [active, setActive] = useState<string>(SLIDES[0].hash);

  const setSlide = useCallback((hash: string) => {
    setActive(hash);
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${hash}`);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const apply = () => {
      const h = window.location.hash.replace("#", "");
      if (SLIDES.some((s) => s.hash === h)) setActive(h);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const slide = SLIDES.find((s) => s.hash === active) ?? SLIDES[0];

  return (
    <Section orbs className="!pt-20 lg:!pt-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="muted">Solutions · By Industry</Badge>
          <h1 className="heading-h1 mt-5">
            <span className="text-gradient-hero">One Memory,</span> different industries.
          </h1>
          <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
            Same Adaptive Spine. Same Digital Memory. Same Twin behind the Approval Gate. Shaped for how your industry actually works.
          </p>
        </div>

        <Reveal className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {SLIDES.map((s) => (
            <button
              key={s.hash}
              type="button"
              onClick={() => setSlide(s.hash)}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition ${
                active === s.hash
                  ? "border-brand-accent bg-brand-accent/10 text-brand-accent"
                  : "border-border text-text-secondary hover:border-brand-accent/50 hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </Reveal>

        <Reveal key={slide.hash} className="mx-auto mt-10 max-w-5xl card-iw p-6 lg:p-8">
          <p className="text-[13px] uppercase tracking-wider text-text-secondary">{slide.label}</p>
          <h2 className="heading-h2 mt-2">{slide.audience}</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {slide.snapshot.map((m) => (
              <div key={m.metric} className="rounded-xl border border-border bg-elevated/40 p-4">
                <p className="text-[12px] uppercase tracking-wider text-text-secondary">{m.metric}</p>
                <p className="mt-1 text-2xl font-semibold text-foreground">{m.value}</p>
                {m.delta && <p className="mt-1 text-[12px] text-brand-accent">{m.delta}</p>}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                  <ShieldCheck size={14} /> Twin proposal · awaiting approval
                </p>
                <p className="mt-2 text-[16px] font-medium text-foreground">{slide.proposal.title}</p>
              </div>
              <span className="shrink-0 rounded-full border border-brand-accent/40 px-2.5 py-1 text-[12px] font-semibold text-brand-accent">
                {slide.proposal.confidence}%
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {slide.proposal.evidence.map((e) => (
                <li key={e} className="flex items-start gap-2 text-[13.5px] text-text-secondary">
                  <Check size={14} className="mt-1 shrink-0 text-success" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <button type="button" onClick={() => open(`Industry slider · ${slide.label}`)} className="btn-primary-iw">
                Approve & Book a Demo <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => open(`Industry slider · ${slide.label} (edit)`)}
                className="rounded-md border border-border px-4 py-2 text-[13.5px] text-text-secondary hover:text-foreground"
              >
                Edit
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
