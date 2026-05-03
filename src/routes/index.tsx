import { createFileRoute } from "@tanstack/react-router";

import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Search,
  Plus,
  Download,
  Bell,
  Brain,
  CheckCircle2,
  Lock,
  User,
  Handshake,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
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
            <ProductFrame />
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

/* ------------------------------------------------------------------ */
/* Static Workbench preview                                            */
/* ------------------------------------------------------------------ */

const NAV_ITEMS = [
  "Home",
  "Projects",
  "Accounts",
  "Contacts",
  "Meetings",
  "Docs",
  "Tasks",
  "Notes",
  "Knowledge",
  "Team",
  "Pipeline",
  "Risks",
  "Deals",
  "Forecasting",
  "Analytics",
  "Workflows",
  "Integrations",
  "AI Chat",
  "System",
  "Intelligence",
];

const ACCOUNTS = [
  {
    name: "TechServe India",
    tier: "Enterprise · Tech",
    arr: "$420K",
    delta: "+12.5%",
    deltaPos: true,
    health: 92,
    status: "Healthy",
    renewal: "126d",
  },
  {
    name: "CloudBridge APAC",
    tier: "Enterprise · Cloud",
    arr: "$280K",
    delta: "+8.3%",
    deltaPos: true,
    health: 78,
    status: "At-Risk",
    renewal: "72d",
  },
  {
    name: "FinanceFlow",
    tier: "Mid-Market · FinTech",
    arr: "$180K",
    delta: "-2.1%",
    deltaPos: false,
    health: 54,
    status: "Critical",
    renewal: "29d",
  },
  {
    name: "DataVault AU",
    tier: "Enterprise · Security",
    arr: "$350K",
    delta: "+15.2%",
    deltaPos: true,
    health: 88,
    status: "Healthy",
    renewal: "204d",
  },
  {
    name: "RetailNest Pte",
    tier: "SMB · Retail",
    arr: "$95K",
    delta: "+5.7%",
    deltaPos: true,
    health: 71,
    status: "At-Risk",
    renewal: "98d",
  },
  {
    name: "HealthTech Innov",
    tier: "Mid-Market · Health",
    arr: "$210K",
    delta: "+22%",
    deltaPos: true,
    health: 95,
    status: "Healthy",
    renewal: "202d",
  },
];

const ACTIONS = [
  {
    app: "HubSpot",
    color: "#FF7A59",
    body: "Update lifecycle stage. Move 'FinanceFlow' from Customer → At-Risk.",
    confidence: 94,
  },
  {
    app: "Jira",
    color: "#2684FF",
    body: "Escalate support tickets to P1. 3 open tickets blocking renewal sync.",
    confidence: 91,
  },
  {
    app: "Slack",
    color: "#E01E5A",
    body: "Notify #renewals-critical about FinanceFlow with the Twin's brief.",
    confidence: 88,
  },
  {
    app: "Salesforce",
    color: "#00A1E0",
    body: "Update opportunity to 'Renewal at Risk' with notes and next action.",
    confidence: 96,
  },
];

function statusClass(status: string) {
  if (status === "Healthy") return "border-success/30 bg-success/10 text-success";
  if (status === "At-Risk")
    return "border-brand-highlight/30 bg-brand-highlight/10 text-brand-highlight";
  return "border-destructive/40 bg-destructive/10 text-destructive";
}

function ProductFrame() {
  return (
    <div className="card-iw overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[180px_minmax(0,1fr)_320px]">
        {/* LEFT: Nav rail */}
        <aside className="border-b border-border bg-bg-elevated/60 p-3 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="grid size-8 place-items-center rounded-full bg-brand-accent text-[12px] font-bold text-text-inverse">
              AR
            </div>
            <div className="min-w-0">
              <div className="truncate text-[12.5px] font-semibold text-foreground">
                Alex Rivera
              </div>
              <div className="truncate text-[11px] text-text-secondary">Operations Lead</div>
            </div>
          </div>
          <div className="mt-2 px-2 text-[10.5px] font-semibold uppercase tracking-wider text-text-secondary">
            Workbench › Accounts
          </div>
          <ul className="mt-2 max-h-[420px] space-y-0.5 overflow-y-auto pr-1">
            {NAV_ITEMS.map((n) => (
              <li key={n}>
                <button
                  type="button"
                  className={
                    "block w-full rounded-md px-2.5 py-1.5 text-left text-[12.5px] " +
                    (n === "Accounts"
                      ? "bg-white/5 font-semibold text-foreground"
                      : "text-text-secondary hover:bg-white/5 hover:text-foreground")
                  }
                >
                  {n}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* CENTER: Workbench */}
        <div className="border-b border-border p-5 lg:border-b-0 lg:border-r">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-[18px] font-semibold text-foreground">Accounts &amp; Revenue</h3>
              <div className="mt-0.5 text-[12.5px] text-text-secondary">
                Total ARR: <span className="font-semibold text-foreground">$1.75M</span> · 6
                accounts
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="btn-secondary-iw !px-3 !py-1.5 text-[12.5px]">
                <Download size={14} /> Export
              </button>
              <button type="button" className="btn-primary-iw !px-3 !py-1.5 text-[12.5px]">
                <Plus size={14} /> Add Account
              </button>
            </div>
          </div>

          {/* Notification chip */}
          <div className="mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-brand-highlight/30 bg-brand-highlight/10 px-3 py-2 text-[12.5px] text-foreground">
            <Bell size={14} className="text-brand-highlight" />
            <span className="font-semibold">App update detected</span>
            <span className="text-text-secondary">
              — Jira changed 2 fields upstream. Auto-fix proposed.
            </span>
            <button
              type="button"
              className="ml-auto rounded-md border border-border px-2 py-0.5 text-[11.5px] font-semibold text-foreground hover:bg-white/5"
            >
              Review
            </button>
          </div>

          {/* Search */}
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-white/[0.02] px-3 py-2">
            <Search size={14} className="text-text-secondary" />
            <input
              placeholder="Search accounts…"
              className="w-full bg-transparent text-[13px] text-foreground placeholder:text-text-secondary focus:outline-none"
            />
          </div>

          {/* Table */}
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <div className="hidden bg-white/[0.02] px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-text-secondary md:grid md:grid-cols-[1.5fr_0.8fr_0.6fr_0.9fr_0.7fr]">
              <div>Account</div>
              <div>ARR</div>
              <div>Δ</div>
              <div>Health</div>
              <div className="text-right">Renewal</div>
            </div>
            <StaggerGroup as="ul" className="divide-y divide-border" stagger={0.05} amount={0.15}>
              {ACCOUNTS.map((a) => (
                <StaggerItem
                  as="li"
                  key={a.name}
                  y={8}
                  className="grid grid-cols-2 gap-2 px-4 py-3 text-[13px] hover:bg-white/[0.02] md:grid-cols-[1.5fr_0.8fr_0.6fr_0.9fr_0.7fr] md:items-center md:gap-3"
                >
                  <div>
                    <div className="font-semibold text-foreground">{a.name}</div>
                    <div className="text-[11.5px] text-text-secondary">{a.tier}</div>
                  </div>
                  <div className="font-semibold text-foreground">{a.arr} ARR</div>
                  <div className={a.deltaPos ? "text-success" : "text-destructive"}>{a.delta}</div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{a.health}/100</span>
                    <span
                      className={
                        "rounded-full border px-2 py-0.5 text-[10.5px] font-semibold " +
                        statusClass(a.status)
                      }
                    >
                      {a.status}
                    </span>
                  </div>
                  <div className="text-text-secondary md:text-right">in {a.renewal}</div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* Inline signal banner */}
          <div className="mt-4 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
            <div className="flex items-center gap-2 text-[13px] font-semibold text-destructive">
              <Activity size={14} /> Renewal Risk → FinanceFlow
            </div>
            <p className="mt-1 text-[13px] text-foreground/90">
              3 P1 tickets, champion silent 12 days, payment failed twice. Renewal in 29 days.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-[11.5px] text-text-secondary">
              <span className="badge-iw badge-iw-muted !py-0.5 !text-[11px]">Salesforce</span>
              <span className="badge-iw badge-iw-muted !py-0.5 !text-[11px]">Zendesk</span>
              <span className="badge-iw badge-iw-muted !py-0.5 !text-[11px]">Stripe</span>
              <span>· 3 min ago</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Twin panel */}
        <aside className="bg-bg-elevated/50 p-5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-success twin-pulse" />
            <span className="text-[11.5px] font-semibold uppercase tracking-wider text-success">
              Twin — Active
            </span>
          </div>
          <p className="mt-2 text-[12.5px] text-text-secondary">
            Twin proposes. You decide what happens.
          </p>

          <div className="mt-4 rounded-lg border border-border bg-white/[0.02] p-3">
            <div className="flex flex-wrap gap-1 text-[11px] text-text-secondary">
              {[
                "Your data",
                "Full picture",
                "Knowledge",
                "Evidence",
                "What matters",
                "Twin thinking",
                "Next steps",
                "Your call",
                "Controls",
                "Adjust",
                "Learning",
                "History",
              ].map((t, i, arr) => (
                <span key={t} className="inline-flex items-center gap-1">
                  <span className="text-foreground/90">{t}</span>
                  {i < arr.length - 1 && <span className="text-text-secondary">→</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <CheckCircle2 size={15} className="text-brand-accent" />
            <div>
              <div className="text-[14px] font-semibold text-foreground">
                You decide what happens next
              </div>
              <div className="text-[12px] text-text-secondary">4 actions waiting on approval</div>
            </div>
          </div>

          <StaggerGroup as="ul" className="mt-4 space-y-3" stagger={0.09} delay={0.1} amount={0.15}>
            {ACTIONS.map((a) => (
              <StaggerItem
                as="li"
                key={a.app}
                x={20}
                className="rounded-lg border border-border bg-white/[0.02] p-3"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-md px-2 py-0.5 text-[11px] font-semibold text-white"
                    style={{ background: a.color }}
                  >
                    {a.app}
                  </span>
                  <span className="text-[11px] text-text-secondary">
                    Confidence: {a.confidence}%
                  </span>
                </div>
                <p className="mt-2 text-[12.5px] leading-snug text-foreground/90">{a.body}</p>
                <div className="mt-2 flex gap-2">
                  <button type="button" className="btn-secondary-iw !px-2.5 !py-1 text-[11.5px]">
                    Deny
                  </button>
                  <button type="button" className="btn-primary-iw !px-2.5 !py-1 text-[11.5px]">
                    Approve &amp; Execute
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-5 flex items-start gap-2 rounded-lg border border-brand-accent/30 bg-brand-accent/5 p-3 text-[12px] text-foreground/90">
            <Brain size={14} className="mt-0.5 shrink-0 text-brand-accent" />
            <span>
              <span className="font-semibold">Approval Gate:</span> Twin never writes to your apps
              or your Memory without an explicit approve.
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}
