import { createFileRoute } from "@tanstack/react-router";

import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Lock,
  User,
  Handshake,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { SectionDivider } from "@/components/site/SectionDivider";
import { GradientHeading } from "@/components/site/GradientHeading";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { CONNECTOR_LOGOS } from "@/components/site/ConnectorMarquee";
import { StaggerGroup, StaggerItem } from "@/components/site/motion/Stagger";
import { TwinSignals, ApprovalGate } from "@/components/site/motion/TwinSignals";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import {
  VisualConnect,
  VisualMemory,
  VisualWorkbench,
} from "@/components/site/SolutionVisuals";
import {
  PainScatter,
  PainBlind,
  PainRogue,
  ScopeUser,
  ScopeWork,
  ScopeOrg,
  StepMemory,
  StepWorkbench,
  StepTwin,
  StepApproval,
  StepLoop,
} from "@/components/site/HomeVisuals";
import airtable from "@/assets/logos/airtable.svg";
import asana from "@/assets/logos/asana.svg";
import gdrive from "@/assets/logos/google-drive.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "IntegrateWise — Build memory for your work.",
      },
      {
        name: "description",
        content:
          "Your data becomes Digital Memory. Your Twin proposes the next move. You approve every move. IntegrateWise is Work Memory for the AI era.",
      },
      { property: "og:title", content: "IntegrateWise — Build memory for your work." },
      {
        property: "og:description",
        content:
          "Connect the apps you already use. Memory grows. Your Twin proposes. You approve. Nothing happens behind your back.",
      },
    ],
  }),
  component: HomePage,
});

const HERO_LOGOS = [
  ...CONNECTOR_LOGOS,
  { src: airtable, name: "Airtable" },
  { src: asana, name: "Asana" },
  { src: gdrive, name: "Google Drive" },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function HomePage() {
  const { open, openEarlyAccess, openWaitlist } = useDemoModal();

  return (
    <>
      {/* ========================= 1. HERO ========================= */}
      <section
        id="top"
        className="relative overflow-hidden pt-24 pb-28 lg:pt-36 lg:pb-40"
        aria-label="Hero"
      >
        <span
          aria-hidden
          className="orb orb-peach"
          style={{ width: 620, height: 620, top: -180, left: "55%" }}
        />
        <span
          aria-hidden
          className="orb orb-purple"
          style={{ width: 520, height: 520, top: 80, left: -140 }}
        />

        <Container>
          <div className="fade-up mx-auto max-w-4xl text-center">
            <span className="badge-iw badge-iw-muted">
              A new category — Work Memory for the AI era
            </span>
            <h1 className="heading-display mt-8">
              <span className="block">Build memory</span>
              <span className="block text-gradient-hero">for your work.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-[18px] leading-relaxed text-text-secondary">
              Your data becomes your Digital Memory. Your Twin watches it and proposes what to do next.{" "}
              <span className="text-foreground">You approve every move.</span>
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={() => open("Home hero")} className="btn-primary-iw">
                Book a Demo <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => openEarlyAccess("Home hero")}
                className="btn-secondary-iw"
              >
                Join Early Access
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================= 1b. CONNECTOR MARQUEE (full-bleed) ========================= */}
      <section aria-label="Integrations" className="relative border-y border-white/5 bg-bg-section-alt/40 py-16 lg:py-20">
        <Container>
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-text-secondary">
            Connect the apps you already use
          </p>
        </Container>
        <div className="marquee-mask relative mt-10 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-14 py-2">
            {[...HERO_LOGOS, ...HERO_LOGOS, ...HERO_LOGOS].map((logo, i) => (
              <div key={`${logo.name}-${i}`} className="flex items-center gap-3 opacity-60 transition-opacity hover:opacity-100">
                <img src={logo.src} alt="" aria-hidden className="h-8 w-auto" />
                <span className="whitespace-nowrap text-[14px] font-medium text-text-secondary">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= 2. WHY / CORE PROBLEM ========================= */}
      <section id="why" className="bg-bg-section-alt scroll-mt-32 py-28 lg:py-40">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">2025</span>
            <h2 className="heading-h2 mt-5">The Core Problem of 2025</h2>
            <p className="mt-6 text-[17px] text-text-secondary">
              You are the bridge between your apps. And it's exhausting.
            </p>
          </Reveal>

          <StaggerGroup
            className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3"
            stagger={0.09}
          >
            {[
              {
                title: "Data scattered.",
                body: "You hunt across twelve tabs before every decision.",
                Visual: PainScatter,
              },
              {
                title: "Intelligence blind.",
                body: "Without the full picture, AI nudges arrive late or wrong.",
                Visual: PainBlind,
              },
              {
                title: "Automation rogue.",
                body: "Things fire without you, so trust quietly erodes.",
                Visual: PainRogue,
              },
            ].map((p) => (
              <StaggerItem key={p.title} className="card-iw p-6">
                <p.Visual />
                <h3 className="mt-5 text-[18px] font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{p.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mx-auto mt-10 max-w-2xl text-center text-[15px] text-text-secondary">
            The answer is one Digital Memory underneath everything — so context stops resetting.
          </Reveal>
        </Container>
      </section>

      {/* ========================= 3. SOLUTION OVERVIEW ========================= */}
      <section id="overview" className="scroll-mt-32 py-28 lg:py-40">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Solution</span>
            <h2 className="heading-h2 mt-5">One memory for your work.</h2>
          </Reveal>

          <div data-stagger className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                Visual: VisualConnect,
                title: "Apps plug in once.",
                body: "OAuth or API key. No CSVs. No code.",
              },
              {
                Visual: VisualMemory,
                title: "Data becomes Digital Memory.",
                body: "One stable memory that survives app and AI changes.",
              },
              {
                Visual: VisualWorkbench,
                title: "Workbench and Twin sit on top.",
                body: "Every day starts with full context — not a blank tab.",
              },
            ].map((c) => (
              <Reveal key={c.title} className="card-iw overflow-hidden p-0">
                {/* Finished, content-rich visual — never reads as a placeholder */}
                <c.Visual />
                {/* Caption */}
                <div className="p-6">
                  <h3 className="text-[17px] font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Three scopes */}
          <Reveal className="mx-auto mt-14 max-w-5xl">
            <div className="card-iw p-7">
              <div className="text-center">
                <span className="badge-iw badge-iw-muted">Three memory scopes</span>
                <h3 className="mt-3 text-[22px] font-semibold text-foreground">
                  Private by architecture. Shared by choice.
                </h3>
              </div>
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {[
                  {
                    Visual: ScopeUser,
                    title: "User Memory",
                    body: "Private to you. No accidental leaks.",
                  },
                  {
                    Visual: ScopeWork,
                    title: "Work Memory",
                    body: "Shared with your team. Patterns and context stay in context.",
                  },
                  {
                    Visual: ScopeOrg,
                    title: "Org Memory",
                    body: "Company-wide signals and policies, with governed sharing.",
                  },
                ].map((s) => (
                  <div
                    key={s.title}
                    className="overflow-hidden rounded-xl border border-border bg-white/[0.02] p-4"
                  >
                    <s.Visual />
                    <div className="mt-3 text-[15.5px] font-semibold text-foreground">
                      {s.title}
                    </div>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-text-secondary">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========================= 4. HOW IT WORKS (5-PART LOOP) ========================= */}
      <section id="product" className="bg-bg-section-alt scroll-mt-32 py-28 lg:py-40">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">How it works</span>
            <h2 className="heading-h2 mt-5">A loop that compounds, not a stack that resets.</h2>
            <p className="mt-6 text-[16px] text-text-secondary">
              Five simple steps. Every loop, your Digital Memory and your Twin get sharper.
            </p>
          </Reveal>

          <div data-stagger className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-5">
            {[
              {
                n: "01",
                title: "Memory",
                kicker: "The Platform",
                body: "Data from your apps becomes a living Digital Memory.",
                Visual: StepMemory,
              },
              {
                n: "02",
                title: "Workbench",
                kicker: "The Product",
                body: "Your workbench adapts around what your memory knows.",
                Visual: StepWorkbench,
              },
              {
                n: "03",
                title: "The Twin",
                kicker: "The Intelligence",
                body: "Watches what changes and proposes the next move (powered by Claude Opus 4.7).",
                Visual: StepTwin,
              },
              {
                n: "04",
                title: "Approval",
                kicker: "The Control",
                body: "Every proposal comes with evidence. You approve or deny. AI cannot act alone.",
                Visual: StepApproval,
              },
              {
                n: "05",
                title: "The Loop",
                kicker: "Compounds",
                body: "Results return as new Truth. Tomorrow starts smarter than today.",
                Visual: StepLoop,
              },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <div className="relative h-full card-iw p-4">
                  <span className="text-[12px] font-semibold tracking-wider text-brand-accent">
                    {step.n}
                  </span>
                  <div className="mt-3">
                    <step.Visual />
                  </div>
                  <div className="mt-4 text-[17px] font-semibold text-foreground">{step.title}</div>
                  <div className="text-[12px] uppercase tracking-wider text-text-secondary">
                    {step.kicker}
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-text-secondary">
                    {step.body}
                  </p>
                  {i < 4 && (
                    <ChevronRight
                      size={16}
                      aria-hidden
                      className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-white/30 md:block"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================= 5. VISUAL DEMO / WORKSPACE PREVIEW ========================= */}
      <section id="demo" className="scroll-mt-32 py-28 lg:py-40">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Workbench · Intelligence</span>
            <h2 className="heading-h2 mt-5">See the full picture in one view.</h2>
            <p className="mt-6 text-[16px] text-text-secondary">
              A static preview of what your team sees on Monday morning — Truth, Context, and Twin's
              prepared next move.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <DashboardMockup />
          </Reveal>
        </Container>
      </section>

      {/* ========================= 6. TRUST & GOVERNANCE ========================= */}
      <section id="trust" className="bg-bg-section-alt scroll-mt-32 py-28 lg:py-40">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw">Trust &amp; Governance</span>
            <h2 className="heading-h2 mt-5">AI that cannot act without you.</h2>
            <p className="mt-6 text-[16px] text-text-secondary">
              Your Twin reads your Digital Memory but cannot write into systems or memory without
              passing the Approval Gate.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl">
            <TwinSignals>
              <div className="card-iw p-6">
                <div className="flex items-center gap-2 text-[13px] text-text-secondary">
                  <span className="size-2 rounded-full bg-brand-highlight twin-pulse" />
                  <span className="font-semibold text-foreground">Twin Recommendation</span>
                  <span>·</span>
                  <span>Renewal risk · FinanceFlow</span>
                  <span>·</span>
                  <span>2 min ago</span>
                </div>
                <blockquote className="mt-3 border-l-2 border-brand-accent/60 pl-4 text-[15.5px] leading-relaxed text-foreground/90">
                  3 P1 tickets, champion silent 12 days, payment failed twice. Renewal in 29 days.
                  Recommend escalation to VP with QBR deck and a billing-recovery flow.
                </blockquote>
                <div className="mt-3 text-[13px] text-text-secondary">
                  Sources: Salesforce · Zendesk · Stripe · Confidence: 87%
                </div>
                <ApprovalGate />
              </div>
            </TwinSignals>

            <p className="mx-auto mt-5 max-w-2xl text-center text-[13.5px] leading-relaxed text-text-secondary">
              <span className="font-semibold text-foreground">After approval,</span> actions execute
              in your apps. Results return as new Truth. Your Twin learns from every decision.
            </p>
          </div>

          <ul className="mx-auto mt-14 grid max-w-4xl gap-3 md:grid-cols-3">
            {[
              {
                title: "Full audit trail",
                body: "Every decision logged with timestamp, evidence, and who approved.",
              },
              {
                title: "Confidence scores",
                body: "See exactly how certain the Twin is about each signal.",
              },
              {
                title: "Impact preview",
                body: "Understand what will happen — before you approve.",
              },
            ].map((t) => (
              <li
                key={t.title}
                className="rounded-xl border border-border bg-white/[0.02] p-4"
              >
                <div className="flex items-center gap-2 text-[13.5px] font-semibold text-foreground">
                  <ShieldCheck size={15} className="text-success" />
                  {t.title}
                </div>
                <p className="mt-1.5 text-[13px] text-text-secondary">{t.body}</p>
              </li>
            ))}
          </ul>

          {/* Security sub-anchor */}
          <div id="security" className="scroll-mt-32 mx-auto mt-14 max-w-5xl">
            <Reveal className="card-iw p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-xl">
                  <span className="badge-iw badge-iw-muted">Security</span>
                  <h3 className="mt-3 text-[22px] font-semibold text-foreground">
                    Truth you own. AI you rent. Approval in between.
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-text-secondary">
                    Your Digital Memory is isolated by design. Models are replaceable components on
                    top of memory you own. Approval Gate sits between every proposal and any write.
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-[12.5px] text-foreground">
                  {[
                    "SOC 2 Type II",
                    "GDPR Ready",
                    "Tenant Isolation",
                    "Approval-gated",
                    "Edge-first",
                    "Sub-50ms globally",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 rounded-md border border-border bg-white/[0.02] px-3 py-2"
                    >
                      <Lock size={13} className="text-brand-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ========================= 7. SOLUTIONS / THREE DOORS ========================= */}
      <section id="solutions" className="scroll-mt-32 py-28 lg:py-40">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Solutions</span>
            <h2 className="heading-h2 mt-5">Three doors in.</h2>
            <p className="mt-6 text-[16px] text-text-secondary">
              Same Memory. Same Twin. Shaped for the work you actually do.
            </p>
          </Reveal>

          <div data-stagger className="mx-auto mt-16 grid max-w-6xl gap-5 lg:grid-cols-3">
            {/* Account Success */}
            <div className="reveal card-iw flex flex-col p-7">
              <div className="flex items-center gap-2">
                <Handshake size={20} className="text-brand-accent" />
                <span className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                  Account Success
                </span>
              </div>
              <h3 className="mt-3 text-[20px] font-semibold text-foreground">
                Walk in already knowing what changed.
              </h3>
              <div className="mt-5 rounded-lg border border-border bg-white/[0.02] p-4 text-[13.5px]">
                <p className="text-foreground/90">
                  Usage dropped 40% + champion left + ticket spike.
                </p>
                <div className="mt-2 inline-flex rounded-md border border-destructive/30 bg-destructive/10 px-2 py-0.5 text-[12px] font-semibold text-destructive">
                  Twin score: 87 · Critical
                </div>
                <p className="mt-2 text-text-secondary">
                  Escalate to VP with a QBR deck and renewal-save plan.
                </p>
              </div>
              <button
                type="button"
                onClick={() => open("Solutions · Account Success")}
                className="btn-primary-iw mt-6 self-start"
              >
                Book a Demo <ArrowRight size={14} />
              </button>
            </div>

            {/* Business Ops */}
            <div className="reveal card-iw flex flex-col p-7">
              <div className="flex items-center gap-2">
                <Activity size={20} className="text-brand-accent" />
                <span className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                  Business Ops
                </span>
              </div>
              <h3 className="mt-3 text-[20px] font-semibold text-foreground">
                One screen. Everything that changed.
              </h3>
              <div className="mt-5 rounded-lg border border-border bg-white/[0.02] p-4 text-[13.5px]">
                <p className="text-foreground/90">
                  Deal unchanged 21 days + no activity + quarter ending.
                </p>
                <div className="mt-2 inline-flex rounded-md border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-0.5 text-[12px] font-semibold text-brand-highlight">
                  Twin score: 55 · Watch
                </div>
                <p className="mt-2 text-text-secondary">
                  Verify the deal with the rep, update forecast confidence.
                </p>
              </div>
              <button
                type="button"
                onClick={() => open("Solutions · Business Ops")}
                className="btn-primary-iw mt-6 self-start"
              >
                Book a Demo <ArrowRight size={14} />
              </button>
            </div>

            {/* Personal Ops */}
            <div className="reveal card-iw relative flex flex-col p-7">
              <span className="absolute right-5 top-5 rounded-full border border-brand-highlight/40 bg-brand-highlight/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-highlight">
                Waitlist
              </span>
              <div className="flex items-center gap-2">
                <User size={20} className="text-brand-accent" />
                <span className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                  Personal Ops
                </span>
              </div>
              <h3 className="mt-3 text-[20px] font-semibold text-foreground">
                Your day, finally assembled.
              </h3>
              <div className="mt-5 rounded-lg border border-border bg-white/[0.02] p-4 text-[13.5px]">
                <p className="text-foreground/90">
                  Your calendar, notes, and tasks stop resetting every Monday.
                </p>
                <p className="mt-2 text-text-secondary">
                  Your own Work Memory helps you pick up exactly where you left off.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openWaitlist("Solutions · Personal Ops")}
                className="btn-secondary-iw mt-6 self-start"
              >
                Join the Waitlist <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================= 8. ACCESS & PRICING SNAPSHOT ========================= */}
      <section id="pricing" className="bg-bg-section-alt scroll-mt-32 py-28 lg:py-40">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Access &amp; Pricing</span>
            <h2 className="heading-h2 mt-5">Founder-led access today.</h2>
            <p className="mt-6 text-[16px] text-text-secondary">
              We assemble your Digital Memory on your own data first. Then we onboard your team.
            </p>
          </Reveal>

          <div data-stagger className="mx-auto mt-16 grid max-w-6xl gap-5 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                pitch: "For small teams getting their first shared memory.",
                rows: [
                  ["Sync", "Every 4 hours"],
                  ["History depth", "90 days"],
                  ["Governance", "Read-only Truth"],
                ],
              },
              {
                name: "Growth",
                pitch: "For revenue and ops teams running on shared memory.",
                rows: [
                  ["Sync", "Every hour"],
                  ["History depth", "365 days"],
                  ["Governance", "Limited write + audit"],
                ],
                highlight: true,
              },
              {
                name: "Command",
                pitch: "For organizations standardizing on Digital Memory.",
                rows: [
                  ["Sync", "Near real-time"],
                  ["History depth", "Unlimited"],
                  ["Governance", "Full Memory access + policies"],
                ],
              },
            ].map((tier) => (
              <Reveal
                key={tier.name}
                className={
                  "card-iw p-7 " +
                  (tier.highlight ? "border-brand-accent/50 shadow-[0_0_0_1px_rgba(255,225,204,0.2)]" : "")
                }
              >
                <div className="flex items-center justify-between">
                  <div className="text-[18px] font-semibold text-foreground">{tier.name}</div>
                  {tier.highlight && (
                    <span className="rounded-full border border-brand-accent/40 bg-brand-accent/10 px-2 py-0.5 text-[11px] font-semibold text-brand-accent">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[13.5px] text-text-secondary">{tier.pitch}</p>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {tier.rows.map(([label, value]) => (
                    <li
                      key={label}
                      className="flex items-start justify-between gap-3 text-[13.5px]"
                    >
                      <span className="text-text-secondary">{label}</span>
                      <span className="text-right font-semibold text-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => open(`Pricing · ${tier.name}`)}
                  className={
                    (tier.highlight ? "btn-primary-iw" : "btn-secondary-iw") +
                    " mt-6 w-full justify-center"
                  }
                >
                  Book a Demo
                </button>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-[13.5px] text-text-secondary">
            Want to be first in line?{" "}
            <button
              type="button"
              onClick={() => openEarlyAccess("Pricing footnote")}
              className="font-semibold text-brand-accent underline-offset-4 hover:underline"
            >
              Join Early Access
            </button>
            .
          </p>
        </Container>
      </section>

      {/* ========================= 9. FAQ ========================= */}
      <section id="faq" className="scroll-mt-32 py-28 lg:py-40">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">FAQ</span>
            <h2 className="heading-h2 mt-5">Common questions, short answers.</h2>
            <p className="mt-6 text-[16px] text-text-secondary">
              The things teams ask before booking a call.
            </p>
          </Reveal>
          <Reveal className="mx-auto mt-14 max-w-3xl">
            <FaqAccordion />
          </Reveal>
        </Container>
      </section>

      {/* ========================= 10. FINAL CLOSER ========================= */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <span
          aria-hidden
          className="orb orb-peach"
          style={{ width: 720, height: 720, top: -240, left: "50%", transform: "translateX(-50%)" }}
        />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-display">
              <span className="block">Stop the reset.</span>
              <span className="block text-gradient-hero">Start the loop.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
              Your work resets every day. IntegrateWise stops that. Your data becomes Digital
              Memory. Your Twin connects what changed, explains why it matters, and prepares what to
              do next — you approve every move.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={() => open("Final closer")} className="btn-primary-iw">
                Book a Demo <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => openEarlyAccess("Final closer")}
                className="btn-secondary-iw"
              >
                Join Early Access
              </button>
            </div>
            <p className="mt-10 text-[13px] uppercase tracking-[0.2em] text-text-secondary">
              Truth you own · AI you rent · Approval in between
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

