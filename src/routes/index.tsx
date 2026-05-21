import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Layers,
  Workflow,
  ShieldCheck,
  Plug,
  Eye,
  CheckCircle2,
  Handshake,
  Activity,
  LineChart,
  Target,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { SectionDivider } from "@/components/site/SectionDivider";
import { ConnectorMarquee } from "@/components/site/ConnectorMarquee";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { scrollToId } from "@/lib/scroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "IntegrateWise — Stop switching between tools just to understand what's going on.",
      },
      {
        name: "description",
        content:
          "See the full picture of every account, workflow, and decision in one place. Keep the tools you already use. Keep your history. Stay in control.",
      },
      {
        property: "og:title",
        content: "IntegrateWise — Stop switching between tools just to understand what's going on.",
      },
      {
        property: "og:description",
        content:
          "One workspace for what happened, what matters, and what to do next — across the tools your team already runs.",
      },
    ],
  }),
  component: HomePage,
});

const WEDGES = [
  {
    to: "/solutions/account-success",
    label: "Account Success",
    body: "Walk into every customer conversation already knowing what changed.",
    Icon: Handshake,
  },
  {
    to: "/solutions/business-ops",
    label: "Business Ops",
    body: "One screen. Everything that moved across the business since Friday.",
    Icon: Activity,
  },
  {
    to: "/solutions/sales-ops",
    label: "Sales Ops",
    body: "Pipeline movement with the story behind it — and the next nudge drafted.",
    Icon: LineChart,
  },
  {
    to: "/solutions/revops",
    label: "RevOps",
    body: "Pipeline, renewals, and cash in one picture. Forecast the truth, not the spreadsheet.",
    Icon: Target,
  },
] as const;

function HomePage() {
  const { openEarlyAccess } = useDemoModal();

  return (
    <>
      {/* 1. HERO — buyer problem + outcome */}
      <section
        id="top"
        className="relative overflow-hidden pt-24 pb-24 lg:pt-36 lg:pb-32"
        aria-label="Hero"
      >
        <span
          aria-hidden
          className="orb orb-peach"
          style={{ width: 620, height: 620, top: -180, left: "55%" }}
        />
        <span
          aria-hidden
          className="orb orb-cool animate-orb-drift"
          style={{ width: 520, height: 520, top: 80, left: -140 }}
        />
        <Particles quantity={20} color="#FFE1CC" className="opacity-50" />

        <Container>
          <div className="fade-up mx-auto max-w-4xl text-center">
            <h1 className="heading-display">
              <span className="block">Stop switching between tools</span>
              <span className="block text-gradient-hero">
                just to understand what's going on.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-[18px] leading-relaxed text-text-secondary">
              See the full picture of every account, workflow, and decision in one place.{" "}
              <span className="text-foreground">
                Keep the tools you already use. Keep your history. Stay in control.
              </span>
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openEarlyAccess("Home hero")}
                className="btn-primary-iw"
              >
                Request Early Access <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollToId("how")}
                className="btn-secondary-iw"
              >
                See how it works
              </button>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider variant="cool" />

      {/* 2. PROBLEM — scattered work, real */}
      <section id="problem" className="bg-bg-section-alt scroll-mt-32 py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-cool">The pain</span>
            <h2 className="heading-h2 mt-5">
              Your work is scattered. Your team pays for it every day.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              Customer notes in one tool. Tasks in another. Updates in Slack. Decisions in
              someone's head. People become the bridge between tools just to get the story
              straight.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                title: "Context is scattered",
                body: "Notes, threads, files, and tickets live in different tools and never meet in one view.",
              },
              {
                title: "Teams rebuild the story",
                body: "Hours disappear reconstructing what happened before anyone can act on it.",
              },
              {
                title: "AI has no real context",
                body: "Without the business behind it, AI generates noise. With it, AI prepares the next move.",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="card-iw p-6">
                <h3 className="text-[17px] font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider variant="warm" />

      {/* 3. WHAT CHANGES — one place x three outcomes */}
      <section id="solution" className="relative scroll-mt-32 py-24 lg:py-32">
        <span
          aria-hidden
          className="orb orb-cool"
          style={{ width: 420, height: 420, top: -60, left: -120 }}
        />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">What changes</span>
            <h2 className="heading-h2 mt-5">
              One workspace. Three things finally in one place.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              Stop stitching the picture together by hand. Your team works from a single,
              up-to-date view of the business — and decides what happens next from the same screen.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                Icon: Layers,
                title: "See what happened",
                body: "Every account, conversation, task, and decision on one timeline. Nothing buried, nothing rewritten from memory.",
              },
              {
                Icon: Workflow,
                title: "See what matters now",
                body: "Risks, renewals, and follow-throughs surface before they slip — explained with the evidence behind them.",
              },
              {
                Icon: ShieldCheck,
                title: "Decide what happens next",
                body: "AI prepares the move with full context. You approve it. Nothing acts without you.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 70} className="card-iw p-6">
                <c.Icon size={22} className="text-brand-accent" />
                <h3 className="mt-4 text-[18px] font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider variant="cool" />

      {/* 4. KEEP YOUR TOOLS */}
      <section id="tools" className="bg-bg-section-alt scroll-mt-32 py-24 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-cool">Works under your stack</span>
            <h2 className="heading-h2 mt-5">Keep the tools you already use.</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              No migration. No rip-and-replace. CRM, tickets, email, chat, docs, spreadsheets —
              IntegrateWise sits underneath and brings the picture together.
            </p>
          </Reveal>
          <div className="mt-12">
            <ConnectorMarquee />
          </div>
        </Container>
      </section>

      <SectionDivider variant="warm" />

      {/* 5. WEDGE SOLUTIONS */}
      <section id="who" className="scroll-mt-32 py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Who it's for</span>
            <h2 className="heading-h2 mt-5">Built for the teams holding the business together.</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              If your day disappears into juggling tools just to know what's going on,
              IntegrateWise is for you.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WEDGES.map((w, i) => (
              <Reveal key={w.label} delay={i * 60}>
                <Link
                  to={w.to}
                  className="card-iw group flex h-full flex-col p-6 transition hover:-translate-y-0.5"
                >
                  <w.Icon size={22} className="text-brand-accent" />
                  <h3 className="mt-4 text-[17px] font-semibold text-foreground">{w.label}</h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-text-secondary">
                    {w.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent">
                    See the workspace <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider variant="cool" />

      {/* 6. DEMO FLOW */}
      <section id="how" className="bg-bg-section-alt scroll-mt-32 py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-cool">What happens in a demo</span>
            <h2 className="heading-h2 mt-5">Not a slide deck. Your own work.</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              We show you your own work, not theoretical screens.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                Icon: Eye,
                step: "01",
                title: "Bring one real workflow",
                body: "Pick one real workflow — renewals, escalations, pipeline review, or cross-team approvals.",
              },
              {
                Icon: Plug,
                step: "02",
                title: "Connect one or two systems",
                body: "We connect one or two of your existing tools in a guided way, so you see your own data and history.",
              },
              {
                Icon: Layers,
                step: "03",
                title: "See the full picture come together",
                body: "Watch the story assemble itself, the next move appear, and approval flow back into the systems you already run.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="card-iw p-6">
                <div className="flex items-center gap-3">
                  <s.Icon size={20} className="text-brand-accent" />
                  <span className="text-[12px] font-semibold tracking-wider text-brand-accent">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-4 text-[17px] font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <button
              type="button"
              onClick={() => openEarlyAccess("Home · How it works")}
              className="btn-primary-iw"
            >
              Request Early Access <ArrowRight size={16} />
            </button>
          </Reveal>
        </Container>
      </section>

      <SectionDivider variant="warm" />

      {/* 7. CUSTOMER ZERO */}
      <section id="proof" className="scroll-mt-32 py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Customer Zero</span>
            <h2 className="heading-h2 mt-5">We run our own work on IntegrateWise.</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              IntegrateWise isn't a concept slide. We use it ourselves to run operations,
              engineering, marketing, and customer work. The same workspace you see in the demo is
              what we rely on every day — so the product is grounded in real use and real
              constraints.
            </p>
            <blockquote className="mx-auto mt-8 max-w-2xl border-l-2 border-brand-accent/60 pl-5 text-left text-[16px] italic leading-relaxed text-foreground/90">
              "We run on it first. That's how we see what breaks, what scales, and what one
              workspace actually changes — before it ever reaches you."
            </blockquote>
          </Reveal>
        </Container>
      </section>

      <SectionDivider variant="cool" />

      {/* 8. FINAL CTA */}
      <section
        id="cta"
        className="relative overflow-hidden scroll-mt-32 py-24 lg:py-32"
      >
        <span
          aria-hidden
          className="orb orb-peach"
          style={{ width: 520, height: 520, top: -160, left: "20%" }}
        />
        <span
          aria-hidden
          className="orb orb-cool"
          style={{ width: 460, height: 460, bottom: -200, right: "10%" }}
        />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h1">
              See your work from <span className="text-gradient-hero">one clear picture.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
              Bring one real workflow. We'll show you what it looks like when your tools, your
              team, and AI finally work from the same place.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openEarlyAccess("Home · Closing CTA")}
                className="btn-primary-iw"
              >
                Request Early Access <ArrowRight size={16} />
              </button>
              <Link to="/pricing" className="btn-secondary-iw">
                See pricing
              </Link>
            </div>
            <ul className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
              {[
                "One place to work from, instead of ten tabs.",
                "Context that stays with the work, not lost in old threads.",
                "AI that prepares. Humans that approve.",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-white/[0.02] p-4 text-[14px] leading-relaxed text-text-secondary"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
