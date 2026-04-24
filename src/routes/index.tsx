import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Workflow,
  Sparkles,
  ShieldCheck,
  Repeat,
  Lock,
  Building2,
  User,
  Eye,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { Workbench } from "@/components/site/Workbench";
import { AttentionLayer } from "@/components/site/AttentionLayer";
import { ConnectorMarquee } from "@/components/site/ConnectorMarquee";
import { ConnectorOrbit } from "@/components/site/ConnectorOrbit";
import { homeScenario } from "@/content/workbench-scenarios";
import { homeAttention } from "@/content/attention-scenarios";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { TRUST_STRIP } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IntegrateWise — Your work resets every day. We stop that." },
      {
        name: "description",
        content:
          "Stop rebuilding context every morning. Your work becomes Memory that never resets. Within seconds, you see what changed. Twin prepares the next move; you approve.",
      },
      { property: "og:title", content: "IntegrateWise — Your work resets every day. We stop that." },
      {
        property: "og:description",
        content: "Memory that never resets. Twin that connects, explains, prepares. You approve every move.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { open, openEarlyAccess, openWaitlist } = useDemoModal();

  return (
    <>
      {/* HERO with connector orbit backdrop */}
      <Section className="!pt-20 lg:!pt-28 !pb-16">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <ConnectorOrbit size={820} className="opacity-50" />
        </div>
        <Container>
          <div className="mx-auto max-w-3xl text-center fade-up">
            <Badge variant="muted">Customer Zero is the founder</Badge>
            <h1 className="heading-display mt-6">
              <span className="text-gradient-hero">Your work resets</span>
              <br />
              every day.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-text-secondary sm:text-[19px]">
              You open Gmail. You check Slack. You scroll yesterday's notes. Before you do real work, you spend an hour rebuilding the same story.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-[18px] leading-relaxed text-foreground/90 sm:text-[19px]">
              IntegrateWise stops the reset. Your work becomes Memory. Memory never restarts.{" "}
              <span className="text-brand-accent">Within seconds of opening, you see what changed.</span>
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-text-secondary">
              {TRUST_STRIP.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-success" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* CONNECTOR MARQUEE */}
      <Section className="!py-8">
        <Container>
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Connect the apps you already use
          </p>
          <ConnectorMarquee />
        </Container>
      </Section>

      {/* ATTENTION LAYER + WORKBENCH */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Right now</Badge>
            <h2 className="heading-h2 mt-4">3 things need your attention.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Not "what's new in your inbox" — what changed across your stack and why it matters today.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 max-w-5xl">
            <Reveal>
              <AttentionLayer scenario={homeAttention} />
            </Reveal>
            <Reveal delay={120} className="mt-6">
              <Workbench scenario={homeScenario} />
              <p className="mt-4 text-center text-[13px] text-text-secondary">
                Static preview. Real Workbench shown in your demo, scoped to your data.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* PROBLEM */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">The problem</Badge>
            <h2 className="heading-h2 mt-4">Stop rebuilding the same work.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Every time you switch tools, you lose the thread. Every morning, the story needs rebuilding. This is not a productivity problem. It is a memory problem.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* CONSEQUENCE — proof stats */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">The cost</Badge>
            <h2 className="heading-h2 mt-4">Rebuilding the story drains time and trust.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              { stat: "23%", label: "of the day lost to switching apps" },
              { stat: "5–8 hrs", label: "rebuilding context every week, per person" },
              { stat: "$8M+", label: "of revenue protected at design partners" },
              { stat: "30 days", label: "typical payback on a Growth seat" },
            ].map((s, i) => (
              <Reveal key={s.stat} delay={i * 60} className="card-iw p-6">
                <p className="text-[36px] font-bold leading-none text-gradient-hero">{s.stat}</p>
                <p className="mt-3 text-[14px] text-text-secondary">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROMISE / HOW IT WORKS */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">How it works</Badge>
            <h2 className="heading-h2 mt-4">One place where your work becomes Memory.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              The Spine brings records, messages, updates, and changes together into Memory. Memory compounds — it does not reset. Within seconds, you see what changed.
            </p>
          </Reveal>

          <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              { n: 1, icon: Brain, title: "Memory", body: "Your data becomes Memory — one connected record." },
              { n: 2, icon: Eye, title: "Attention", body: "Three things need your attention — surfaced immediately." },
              { n: 3, icon: Workflow, title: "Workbench", body: "Adapts the experience around the work in front of you." },
              { n: 4, icon: Sparkles, title: "Twin", body: "Connects what changed, explains why, prepares what to do next." },
              { n: 5, icon: ShieldCheck, title: "Approval", body: "You decide every move. The Twin never acts alone." },
            ].map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 70} className="card-iw p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg bg-elevated text-[12px] font-semibold text-brand-accent">
                    {s.n}
                  </span>
                  <s.icon size={18} className="text-brand-highlight" />
                </div>
                <h3 className="mt-4 text-[17px] font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-text-secondary">{s.body}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-6 flex items-center justify-center gap-2 text-[13px] text-text-secondary">
            <Repeat size={14} className="text-brand-accent" />
            Every approved action becomes new Memory. Tomorrow starts smarter than today.
          </Reveal>
        </Container>
      </Section>

      {/* THREE MEMORY SCOPES */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Memory scopes</Badge>
            <h2 className="heading-h2 mt-4">Separate memories. Coherent life.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Private by architecture. Shared by choice. Guided by you.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: User, name: "User Memory", body: "Your personal context. Yours alone. Never mixed with the company." },
              { icon: Workflow, name: "Work Memory", body: "The shared context of a team or workspace. Visible to teammates by design." },
              { icon: Building2, name: "Org Memory", body: "Org-wide truth — accounts, finance, ops — governed by approval and access rules." },
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 60} className="card-iw p-6">
                <m.icon size={22} className="text-brand-accent" />
                <h3 className="mt-4 heading-h3">{m.name}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{m.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* TRUST WALLS */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Boundaries</Badge>
            <h2 className="heading-h2 mt-4">Boundaries that keep you in charge.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Truth you own. AI you rent. Approval in between.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Brain, t: "Memory stays true", b: "AI suggestions never rewrite Memory. Your record holds." },
              { icon: Sparkles, t: "Twin stays separate", b: "Twin proposes inside one space. Never crosses without permission." },
              { icon: ShieldCheck, t: "Approval required", b: "Nothing executes until a human says yes. Full audit trail." },
              { icon: Lock, t: "Private vs Shared", b: "Private work never becomes shared by accident." },
            ].map((g, i) => (
              <Reveal key={g.t} delay={i * 60} className="card-iw p-5">
                <g.icon size={18} className="text-brand-accent" />
                <h3 className="mt-3 text-[16px] font-semibold text-foreground">{g.t}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-text-secondary">{g.b}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* SOLUTIONS DOORS */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Three doors in</Badge>
            <h2 className="heading-h2 mt-4">Same Memory. Same Twin. Shaped for your work.</h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <DoorCard
              title="Account Success"
              body="Walk into every customer conversation already knowing what changed. Save accounts before they slip."
              cta={{ label: "Book a Demo", onClick: () => open("Home · Account Success") }}
              to="/solutions/account-success"
            />
            <DoorCard
              title="Business Ops"
              body="One screen. Everything that changed since Friday. No rebuild, no chasing five people for the same number."
              cta={{ label: "Book a Demo", onClick: () => open("Home · Business Ops") }}
              to="/solutions/business-ops"
            />
            <DoorCard
              title="Personal Ops"
              body="Your day, finally assembled. Finally yours. A personal space where Memory holds your work, calendar, and history."
              cta={{ label: "Join the Waitlist", onClick: () => openWaitlist("Home · Personal Ops") }}
              to="/solutions/personal-ops"
              waitlist
            />
          </div>
        </Container>
      </Section>

      {/* CUSTOMER ZERO TEASER */}
      <Section>
        <Container>
          <Reveal className="card-iw mx-auto max-w-3xl p-8 text-center sm:p-10">
            <Badge variant="muted">Customer Zero</Badge>
            <h2 className="heading-h2 mt-4">I run IntegrateWise on IntegrateWise.</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-text-secondary">
              Not a product I describe from the outside. The system I use to run my own work and this company.
            </p>
            <Link to="/customer-zero" className="btn-secondary-iw mt-6 inline-flex">
              Read the founder's story
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* CTA STRIP */}
      <Section alt>
        <Container>
          <div
            className="card-iw p-8 sm:p-12 text-center"
            style={{ background: "linear-gradient(180deg, rgba(255,225,204,0.06), rgba(255,225,204,0))" }}
          >
            <h2 className="heading-h2">Your work stays yours. What you share, you share on purpose.</h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] text-text-secondary">
              See your Memory assembled in one place. Watch the Twin prepare what matters. Approve what should happen next.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={() => open("Home footer CTA")} className="btn-primary-iw">
                Book a Demo <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => openEarlyAccess("Home footer CTA")}
                className="btn-secondary-iw"
              >
                Join Early Access
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function DoorCard({
  title,
  body,
  cta,
  to,
  waitlist = false,
}: {
  title: string;
  body: string;
  cta: { label: string; onClick: () => void };
  to: string;
  waitlist?: boolean;
}) {
  return (
    <Reveal className="card-iw p-6 flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="heading-h3">{title}</h3>
        {waitlist && <Badge>Waitlist</Badge>}
      </div>
      <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-text-secondary">{body}</p>
      <div className="mt-5 flex items-center gap-3">
        <button type="button" onClick={cta.onClick} className="btn-primary-iw !px-4 !py-2.5 text-[14px]">
          {cta.label}
        </button>
        <Link
          to={to}
          className="text-[14px] font-medium text-brand-accent hover:underline underline-offset-4"
        >
          Learn more →
        </Link>
      </div>
    </Reveal>
  );
}
