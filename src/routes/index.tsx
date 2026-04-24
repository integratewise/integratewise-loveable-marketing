import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Workflow, Sparkles, ShieldCheck, Repeat, Lock, Building2, User } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Workbench } from "@/components/site/Workbench";
import { homeScenario } from "@/content/workbench-scenarios";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { TRUST_STRIP } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IntegrateWise — Build memory for your work." },
      {
        name: "description",
        content:
          "Stop rebuilding context every morning. Your apps become Digital Memory. Your Twin proposes the next move. You approve every action.",
      },
      { property: "og:title", content: "IntegrateWise — Build memory for your work." },
      {
        property: "og:description",
        content:
          "Your data becomes Digital Memory. Your Twin proposes. You approve every move.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { open, openEarlyAccess, openWaitlist } = useDemoModal();

  return (
    <>
      {/* HERO */}
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center fade-up">
            <Badge>Founder-led · Customer Zero is the founder</Badge>
            <h1 className="heading-display mt-6">
              <span className="text-gradient-hero">Build memory</span>
              <br />
              for your work.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-text-secondary sm:text-[20px]">
              Your apps become Digital Memory. Your Memory grows into knowledge. Your Twin watches it and proposes what to do next.{" "}
              <span className="text-foreground">You approve every move.</span>
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

          {/* Workbench preview */}
          <div className="mx-auto mt-14 max-w-5xl fade-up" style={{ animationDelay: "120ms" }}>
            <Workbench scenario={homeScenario} />
            <p className="mt-4 text-center text-[13px] text-text-secondary">
              Static preview. Real Workbench shown in your demo, scoped to your data.
            </p>
          </div>
        </Container>
      </Section>

      {/* PAIN */}
      <Section alt>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">The problem</Badge>
            <h2 className="heading-h2 mt-4">
              You are the Human API between your apps.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              WhatsApp, Tally, Razorpay, your CRM, Slack, email — every morning you rebuild context by switching tabs. The work that matters waits.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { stat: "23%", label: "of the day lost to switching between apps" },
              { stat: "5–8 hrs", label: "rebuilding context every week, per person" },
              { stat: "$8M+", label: "of revenue protected at design partners using Memory" },
            ].map((s) => (
              <div key={s.stat} className="card-iw p-6">
                <p className="text-[40px] font-bold leading-none text-gradient-hero">{s.stat}</p>
                <p className="mt-3 text-[14px] text-text-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">How it works</Badge>
            <h2 className="heading-h2 mt-4">Five steps. One continuous loop.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Memory is built. The Workbench adapts. The Twin proposes. You approve. Execution becomes new knowledge — and the loop tightens.
            </p>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              { n: 1, icon: Brain, title: "Memory", body: "Your data becomes a single source of truth." },
              { n: 2, icon: Workflow, title: "Workbench", body: "The view assembles around the work in front of you." },
              { n: 3, icon: Sparkles, title: "Twin", body: "Watches the Memory and proposes the next move." },
              { n: 4, icon: ShieldCheck, title: "Approval", body: "You decide every action. The Twin never acts alone." },
              { n: 5, icon: Repeat, title: "The Loop", body: "Every approved action becomes new Memory." },
            ].map((s) => (
              <li key={s.n} className="card-iw p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg bg-elevated text-[12px] font-semibold text-brand-accent">
                    {s.n}
                  </span>
                  <s.icon size={18} className="text-brand-highlight" />
                </div>
                <h3 className="mt-4 text-[17px] font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-text-secondary">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* THREE MEMORY SCOPES */}
      <Section alt>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Memory scopes</Badge>
            <h2 className="heading-h2 mt-4">Separate memories. Coherent life.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Private by architecture. Shared by choice. Guided by you.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: User,
                name: "User Memory",
                body: "Your personal context. Yours alone. Never mixed with the company.",
              },
              {
                icon: Workflow,
                name: "Work Memory",
                body: "The shared context of a team or workspace. Visible to teammates by design.",
              },
              {
                icon: Building2,
                name: "Org Memory",
                body: "Org-wide truth — accounts, finance, ops — governed by approval and access rules.",
              },
            ].map((m) => (
              <div key={m.name} className="card-iw p-6">
                <m.icon size={22} className="text-brand-accent" />
                <h3 className="mt-4 heading-h3">{m.name}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{m.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SOLUTIONS / THREE DOORS */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Three doors in</Badge>
            <h2 className="heading-h2 mt-4">Pick the door that matches today's pain.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Same Memory. Same Twin. Different surface.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <DoorCard
              title="Account Success"
              body="See risk and renewal signals before they show up in the forecast. Save accounts before they slip."
              cta={{ label: "Book a Demo", onClick: () => open("Home · Account Success") }}
              to="/solutions/account-success"
            />
            <DoorCard
              title="Business Ops"
              body="Invoices, vendors, reconciliations. Match, flag, and approve in minutes — not afternoons."
              cta={{ label: "Book a Demo", onClick: () => open("Home · Business Ops") }}
              to="/solutions/business-ops"
            />
            <DoorCard
              title="Personal Space"
              body="Your own Memory and Twin for the work that lives outside the company."
              cta={{ label: "Join the Waitlist", onClick: () => openWaitlist("Home · Personal Space") }}
              to="/solutions/personal-ops"
              waitlist
            />
          </div>
        </Container>
      </Section>

      {/* TRUST WALLS */}
      <Section alt>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="muted">Four guardrails</Badge>
            <h2 className="heading-h2 mt-4">The Twin is a proposer, not an actor.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              These four promises are baked into the architecture, not added on top.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, t: "Approval-gated", b: "Every action waits for a human to say yes." },
              { icon: Lock, t: "Tenant-isolated", b: "Your Memory never crosses into another customer's." },
              { icon: Brain, t: "Memory stays yours", b: "Export, delete, audit. We never train on your data." },
              { icon: Sparkles, t: "Model-agnostic", b: "Swap the model behind the Twin without losing Memory." },
            ].map((g) => (
              <div key={g.t} className="card-iw p-5">
                <g.icon size={18} className="text-brand-accent" />
                <h3 className="mt-3 text-[16px] font-semibold text-foreground">{g.t}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-text-secondary">{g.b}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA STRIP */}
      <Section>
        <Container>
          <div
            className="card-iw p-8 sm:p-12 text-center"
            style={{ background: "linear-gradient(180deg, rgba(255,225,204,0.06), rgba(255,225,204,0))" }}
          >
            <h2 className="heading-h2">Stop being the Human API.</h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] text-text-secondary">
              See a live Workbench scoped to your scenario. Founder-led. Real conversation. 30 minutes.
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
    <div className="card-iw p-6 flex flex-col">
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
    </div>
  );
}
