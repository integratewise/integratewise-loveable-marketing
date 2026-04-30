import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/solutions/role")({
  head: () => ({
    meta: [
      { title: "Solutions by Role — One foundation, different roles" },
      {
        name: "description",
        content:
          "Same Adaptive Spine. Same Digital Memory. Same Twin. Filtered for founders, account leads, ops, and individuals.",
      },
      { property: "og:title", content: "Solutions by Role — IntegrateWise" },
      {
        property: "og:description",
        content: "One foundation, different roles. Approval-gated Twin proposals shaped for your day.",
      },
    ],
  }),
  component: RoleSliderPage,
});

type Slide = {
  hash: string;
  label: string;
  cares: string;
  view: string;
  proposal: { title: string; confidence: number; evidence: string[] };
};

const SLIDES: Slide[] = [
  {
    hash: "founder",
    label: "Founder / Owner",
    cares: "Org Memory: cash, runway, top accounts, board commitments.",
    view: "Monday brief, weekly board pack, exception view across revenue, ops, and people.",
    proposal: {
      title: "Bring 3 stalled enterprise deals into this week's pipeline review",
      confidence: 90,
      evidence: [
        "Truth: HubSpot stage unchanged 21+ days; champion engagement dropped",
        "Context: Slack notes show legal blockers",
        "Session Summary: last QBR identified these as priority saves",
      ],
    },
  },
  {
    hash: "account-lead",
    label: "CS / Account Lead",
    cares: "Work Memory: account health, renewal risk, expansion signals.",
    view: "Account workspace with usage, tickets, exec touches, and renewal timeline.",
    proposal: {
      title: "Schedule executive touch with Acme — usage softening, renewal in 47 days",
      confidence: 87,
      evidence: [
        "Truth: weekly active users down 22%",
        "Context: champion changed roles per LinkedIn + email signature",
        "Session Summary: playbook calls for exec touch at this stage",
      ],
    },
  },
  {
    hash: "ops",
    label: "Ops / BizOps",
    cares: "Org Memory: pipeline hygiene, process exceptions, cross-team SLAs.",
    view: "Live operating picture: forecast, headcount load, exception queue.",
    proposal: {
      title: "Reassign 14 unowned MQLs older than 7 days",
      confidence: 93,
      evidence: [
        "Truth: lead owner field empty; SLA breached",
        "Context: rep capacity report shows 3 reps with bandwidth",
        "Session Summary: ops policy approved auto-reassignment rule",
      ],
    },
  },
  {
    hash: "individual",
    label: "Individual / Personal",
    cares: "User Memory: your morning brief, your inbox, your session notes.",
    view: "Personal Space: today's focus, follow-ups, and accumulated session memory — private by architecture.",
    proposal: {
      title: "Draft follow-ups for 6 conversations stuck >3 days",
      confidence: 85,
      evidence: [
        "Truth: emails sent without reply",
        "Context: prior thread summaries",
        "Session Summary: your approved tone + cadence",
      ],
    },
  },
];

function RoleSliderPage() {
  const { open } = useDemoModal();
  const [active, setActive] = useState<string>(SLIDES[0].hash);

  const setSlide = useCallback((hash: string) => {
    setActive(hash);
    if (typeof window !== "undefined") history.replaceState(null, "", `#${hash}`);
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
          <Badge variant="muted">Solutions · By Role</Badge>
          <h1 className="heading-h1 mt-5">
            <span className="text-gradient-hero">One foundation,</span> different roles.
          </h1>
          <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
            Same Adaptive Spine. Same Digital Memory. Same Twin behind the Approval Gate. Filtered for the day you actually run.
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

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-elevated/40 p-4">
              <p className="text-[12px] uppercase tracking-wider text-text-secondary">What they care about in Memory</p>
              <p className="mt-2 text-[15px] text-foreground/90">{slide.cares}</p>
            </div>
            <div className="rounded-xl border border-border bg-elevated/40 p-4">
              <p className="text-[12px] uppercase tracking-wider text-text-secondary">Their Workspace view</p>
              <p className="mt-2 text-[15px] text-foreground/90">{slide.view}</p>
            </div>
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
              <button type="button" onClick={() => open(`Role slider · ${slide.label}`)} className="btn-primary-iw">
                Approve & Book a Demo <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => open(`Role slider · ${slide.label} (edit)`)}
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
