import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Database,
  Sparkles,
  Eye,
  CircuitBoard,
  CheckCircle2,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { SectionNav } from "@/components/site/SectionNav";
import { useDemoModal } from "@/components/site/demo-modal-context";
import {
  PRINCIPLES,
  CONTROL_POINTS,
  COMPANY_SECTIONS,
  HERO_STATS,
  VISION_CARDS,
} from "@/content/company-content";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Built because work lost its memory | IntegrateWise" },
      {
        name: "description",
        content:
          "IntegrateWise was built by a solo founder — a former CSM and Business Ops operator — to end the Human API role. Memory before intelligence. Approval before action.",
      },
      { property: "og:title", content: "IntegrateWise — Company" },
      {
        property: "og:description",
        content:
          "From being the Human API to building the Spine. Truth you own. AI you rent. Approval in between.",
      },
    ],
  }),
  component: CompanyPage,
});

function CompanyPage() {
  const { open } = useDemoModal();

  return (
    <>
      {/* 1. Hero */}
      <Section id="about" orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Badge variant="muted">Company</Badge>
              <h1 className="heading-h1 mt-5">
                Built because <span className="text-gradient-hero">work lost its memory.</span>
              </h1>
              <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
                Work moved into apps. Memory did not. Every day, people rebuild the same story
                across WhatsApp, Tally, Razorpay, email, and sheets. IntegrateWise exists so your
                work can finally have a Digital Memory — and you never have to be the Human API
                again.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button onClick={() => open()} className="btn-primary-iw">
                  Book a demo <ArrowRight size={16} />
                </button>
                <a href="#story" className="btn-secondary-iw">
                  Read the story
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-12 grid grid-cols-3 gap-3 text-center">
                {HERO_STATS.map((s) => (
                  <div key={s.k} className="card-iw px-4 py-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      {s.k}
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-foreground">{s.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Sticky in-page nav */}
      <SectionNav
        items={COMPANY_SECTIONS.map((s) => ({ id: s.id, label: s.navLabel }))}
      />

      {/* 2. Founder story */}
      <Section id="manifesto" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <Badge variant="muted">Origin</Badge>
            <h2 className="heading-h2 mt-4">
              From being the Human API to{" "}
              <span className="text-brand-accent">building the Spine.</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-[16px] leading-relaxed text-text-secondary">
            <Reveal>
              <p>
                IntegrateWise did not start inside a big team or a strategy deck. It started with
                one solo founder who was living the exact pain the product now fixes.
              </p>
              <p className="mt-4">
                He spent years as a Customer Success Manager and then as a Business Ops operator.
                Every day looked the same: open CRM, billing, support, WhatsApp, email, Google
                Sheets, Notion. Rebuild what happened yesterday. Hope nothing important was missed.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p>
                Renewals meant hunting across tabs. Monday meetings meant reconciling three
                different versions of "the truth" in spreadsheets. AI tools did not help — they
                guessed without the full picture and forgot everything once the chat closed.
              </p>
              <p className="mt-4 text-foreground">
                He was, in his own words, the Human API between the apps.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p>
                A near-miss on a key account made the problem impossible to ignore: the work was
                fine, the people were fine — it was the memory that was broken. The tools forgot
                context the second you closed them. Nothing held truth and context together over
                time.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p>The invention moment was simple:</p>
              <p className="mt-3 rounded-xl border border-border-subtle bg-surface-2/40 px-5 py-4 text-foreground">
                Not another dashboard. <span className="text-brand-accent">A Spine.</span>
              </p>
              <p className="mt-4">
                A layer that could remember Truth and Context across tools and time. A Workspace
                that sat on this Spine and actually matched the day. An AI Twin that read this
                Memory, prepared actions, and still waited for human approval.
              </p>
              <p className="mt-4">
                That sketch became the Spine (Platform), Digital Memory, the Adaptive Workspace
                (Product), and the Twin with an Approval Gate (Intelligence Layer).
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-6 rounded-xl border border-brand-accent/30 bg-brand-accent/5 px-5 py-4">
                <p className="text-[14px] text-foreground/90">
                  IntegrateWise is still founder-led. One solo founder runs the company and uses
                  IntegrateWise to run his own work:{" "}
                  <span className="text-brand-accent">"I run IntegrateWise on IntegrateWise."</span>
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 3. Principles */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Principles</Badge>
            <h2 className="heading-h2 mt-4">Principles we don't bend.</h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 70}>
                  <div className="card-iw h-full p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-[17px] font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4. Architecture */}
      <Section alt>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <Badge variant="muted">Architecture</Badge>
              <h2 className="heading-h2 mt-4">The architecture is part of the promise.</h2>
              <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-text-secondary">
                <p>
                  At the bottom, the Spine connects your tools and turns only what matters into
                  Digital Memory. It starts with a clean schema and grows with you, instead of
                  copying everything blindly.
                </p>
                <p>
                  Digital Memory is where three lines intersect: Truth (what happened), Context (why
                  it happened), and approved Session Summaries (governed AI knowledge). They meet in
                  one place so the system can see them together, but they never lose their identity.
                  Raw AI chat never writes directly into Memory.
                </p>
                <p>
                  On top of that, the Workspace consumes Memory and becomes your main working
                  screen. The Twin reads from Memory, connects signals, and proposes actions —
                  always behind the Approval Gate.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <ArchitectureStack />
            </Reveal>
          </div>

          <Reveal delay={250} className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-[14px] italic text-text-secondary">
              We treat these architecture decisions — separation of Memory and AI, Approval Gates,
              Memory scopes — as user-visible features, not hidden implementation details.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Operator highlight */}
      <Section id="customer-zero">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal className="text-center">
              <Badge variant="muted">Founder</Badge>
              <h2 className="heading-h2 mt-4">Built by an operator, for operators.</h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="card-iw mt-10 p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                    <Eye size={20} />
                  </div>
                  <div className="space-y-4 text-[16px] leading-relaxed text-text-secondary">
                    <p>
                      IntegrateWise is built by a solo founder — a former Customer Success Manager
                      and current Business Ops operator — who has actually lived in CRMs, billing
                      tools, support queues, and spreadsheets, not just in slide decks.
                    </p>
                    <p>
                      The Spine, Workspace, and Twin are shaped from that operator's point of view,
                      and are used every day to run this company.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 6. Control matters */}
      <Section id="trust-governance" alt>
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal className="text-center">
              <Badge variant="muted">Control</Badge>
              <h2 className="heading-h2 mt-4">Control is not only for large enterprises.</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-text-secondary">
                Even a 3-person CA firm, a small agency, or a SaaS startup cannot afford surprise
                emails, wrong filings, or silent automations. If AI can act alone, it can also make
                the wrong move alone.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
                That is why, from day one, IntegrateWise is built around:
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {CONTROL_POINTS.map((point, i) => (
                <Reveal key={point} delay={i * 80}>
                  <div className="card-iw flex items-start gap-3 p-5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-accent" />
                    <p className="text-[14px] text-foreground/90">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Vision */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Vision</Badge>
            <h2 className="heading-h2 mt-4">Where we want this to go.</h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {VISION_CARDS.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="card-iw h-full p-6">
                    <Icon size={20} className="text-brand-accent" />
                    <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">{v.line}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={300} className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-[18px] leading-relaxed text-foreground">
              End the Human API role. Give people a Memory and a Workspace that grow with them, plus
              a Twin that helps — but never takes over.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 8. Final CTA */}
      <Section id="contact" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Get started</Badge>
            <h2 className="heading-h2 mt-4">See what work feels like with a Memory.</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-text-secondary">
              In one session, we connect your tools, show how the Spine builds Digital Memory, how
              the Workspace replaces your daily tab-switching, and how the Twin proposes actions
              without taking control.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open()} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
              </button>
              <a href="/contact" className="btn-secondary-iw">
                Talk to us
              </a>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

/* -------------------------------------------------------------------------
 * Architecture stack visual — layered diagram
 * ----------------------------------------------------------------------- */

function ArchitectureStack() {
  const layers = [
    {
      label: "Workspace",
      sub: "Where you work",
      icon: Workflow,
    },
    {
      label: "Digital Memory",
      sub: "Truth · Context · Approved Summaries",
      icon: Database,
      accent: true,
    },
    {
      label: "Spine (Platform)",
      sub: "Connects your tools, writes Memory",
      icon: CircuitBoard,
    },
  ];

  return (
    <div className="card-iw relative overflow-hidden p-6">
      <div className="space-y-3">
        {layers.map((l) => {
          const Icon = l.icon;
          return (
            <div
              key={l.label}
              className={`flex items-center gap-4 rounded-xl border px-4 py-4 ${
                l.accent
                  ? "border-brand-accent/40 bg-brand-accent/5"
                  : "border-border-subtle bg-surface-2/40"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  l.accent
                    ? "bg-brand-accent/15 text-brand-accent"
                    : "bg-surface-2 text-text-secondary"
                }`}
              >
                <Icon size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-foreground">{l.label}</p>
                <p className="text-[12px] text-text-secondary">{l.sub}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Twin side-rail */}
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-border-subtle bg-surface-2/40 px-4 py-4">
          <div className="flex items-center gap-2 text-brand-accent">
            <Sparkles size={16} />
            <p className="text-[13px] font-semibold">Twin</p>
          </div>
          <p className="mt-2 text-[12px] text-text-secondary">Reads Memory, proposes actions.</p>
        </div>
        <div className="rounded-xl border border-border-subtle bg-surface-2/40 px-4 py-4">
          <div className="flex items-center gap-2 text-brand-accent">
            <ShieldCheck size={16} />
            <p className="text-[13px] font-semibold">Approval Gate</p>
          </div>
          <p className="mt-2 text-[12px] text-text-secondary">Sits between Twin and your tools.</p>
        </div>
      </div>
    </div>
  );
}
