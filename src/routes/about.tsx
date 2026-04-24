import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  MapPin,
  AlertTriangle,
  Users,
  Lightbulb,
  ShieldCheck,
  Rocket,
  Compass,
  UserCheck,
  Eye,
  RefreshCw,
  Plug,
  Lock,
  Telescope,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IntegrateWise — Transforming work through unified memory" },
      {
        name: "description",
        content:
          "We're building AI that amplifies human intelligence — creating digital memory that works the way you do. Every action requires your approval.",
      },
      { property: "og:title", content: "About IntegrateWise" },
      {
        property: "og:description",
        content:
          "From observing fragmented workflows to building the future of work continuity.",
      },
    ],
  }),
  component: AboutPage,
});

type TimelineEntry = {
  era: string;
  title: string;
  body: string;
  quote: string;
  icon: typeof AlertTriangle;
  stat: string;
  statLabel: string;
};

const TIMELINE: TimelineEntry[] = [
  {
    era: "2023 — The Problem",
    title: "Work Was Breaking",
    body: "Teams were losing critical context switching between 10+ tools daily. Knowledge was trapped in silos, and every handoff meant starting from scratch.",
    quote:
      "We watched teams rebuild the same insights repeatedly — wasting time and talent.",
    icon: AlertTriangle,
    stat: "21%",
    statLabel: "Time lost to context switching",
  },
  {
    era: "Early 2024 — Discovery",
    title: "Listening & Learning",
    body: "We spoke with customer success teams, finance ops, and founders. The pattern was clear: people needed their tools to understand each other.",
    quote:
      "Everyone wanted the same thing — memory that spans their entire workflow.",
    icon: Users,
    stat: "100+",
    statLabel: "Teams interviewed",
  },
  {
    era: "Mid 2024 — Breakthrough",
    title: "The Digital Memory Vision",
    body: "We realised the solution wasn't another integration — it was unified memory. A system that learns context across every tool and creates AI partners that truly understand your work.",
    quote: "What if your AI knew everything you know, across every platform?",
    icon: Lightbulb,
    stat: "∞",
    statLabel: "Connected context",
  },
  {
    era: "Late 2024 — Foundation",
    title: "Trust First",
    body: "We built our core principle: AI amplifies humans, never replaces them. Every action requires approval. Every decision respects your control.",
    quote: "Your AI Twin is powerful because you guide it.",
    icon: ShieldCheck,
    stat: "100%",
    statLabel: "Human control",
  },
  {
    era: "2025 — Today",
    title: "Building the Future",
    body: "Early partners are seeing 40% faster decisions and 60% less context switching. We're just getting started.",
    quote:
      "The future of work is human intelligence amplified by unified memory.",
    icon: Rocket,
    stat: "40%",
    statLabel: "Faster decisions",
  },
];

const PRINCIPLES = [
  {
    icon: UserCheck,
    title: "You Stay in Control",
    body: "Every AI action requires your approval. Your judgment drives the system — always.",
    tag: "Human-centered design",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    body: "See exactly what your AI Twin knows and how it makes decisions. No hidden logic.",
    tag: "Clear and open",
  },
  {
    icon: RefreshCw,
    title: "Learns With You",
    body: "Your feedback shapes the system. Every correction makes your AI Twin more aligned.",
    tag: "Always improving",
  },
  {
    icon: Plug,
    title: "Works Everywhere",
    body: "Connects with your existing tools — no workflow disruption required.",
    tag: "Universal integration",
  },
  {
    icon: Heart,
    title: "Amplifies Humans",
    body: "Technology serves people, not the other way around. We enhance your capabilities.",
    tag: "Human-first always",
  },
  {
    icon: Lock,
    title: "Privacy Built In",
    body: "Your data stays yours. Security and privacy in every layer — never sold or shared.",
    tag: "Secure by default",
  },
];

function AboutPage() {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,225,204,0.12) 0%, rgba(17,17,17,0) 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="badge-iw badge-iw-muted mb-6">
            <Heart size={12} className="text-brand-highlight" /> Our Story
          </span>
          <h1 className="heading-display mb-6 tracking-tight">
            <span className="text-gradient-hero">Transforming Work</span>
            <br />
            <span className="text-foreground">Through Unified Memory</span>
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
            We're building AI that amplifies human intelligence — creating
            digital memory that works the way you do.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => open("demo")}
              className="btn-primary-iw"
            >
              Book a Demo
            </button>
            <button
              type="button"
              onClick={() => open("sales")}
              className="btn-secondary-iw"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Section className="bg-section-alt">
        <Container>
          <div className="mb-16 text-center">
            <span className="badge-iw badge-iw-muted mb-6">
              <MapPin size={12} className="text-brand-highlight" /> Our Journey
            </span>
            <h2 className="heading-h2 mb-6">
              <span className="text-gradient-hero">How We Got Here</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              From observing fragmented workflows to building the future of work
              continuity.
            </p>
          </div>

          <div className="relative">
            {/* center line */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
              style={{
                background:
                  "linear-gradient(180deg, var(--brand-accent) 0%, color-mix(in oklab, var(--brand-accent) 30%, transparent) 100%)",
              }}
            />
            <div className="space-y-16">
              {TIMELINE.map((t, i) => {
                const Icon = t.icon;
                const cardLeft = i % 2 === 0;
                const card = (
                  <Reveal>
                    <div className="card-iw p-8">
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-lg"
                          style={{
                            background:
                              "linear-gradient(90deg, color-mix(in oklab, var(--brand-accent) 20%, transparent), color-mix(in oklab, #ffffff 12%, transparent))",
                          }}
                        >
                          <Icon size={18} className="text-brand-accent" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-brand-accent">
                            {t.era}
                          </div>
                          <div className="text-lg font-bold text-foreground">
                            {t.title}
                          </div>
                        </div>
                      </div>
                      <p className="mb-4 leading-relaxed text-text-secondary">
                        {t.body}
                      </p>
                      <p className="text-sm italic text-text-muted">"{t.quote}"</p>
                    </div>
                  </Reveal>
                );
                const stat = (
                  <Reveal>
                    <div
                      className="rounded-2xl p-8 text-center"
                      style={{
                        background:
                          "linear-gradient(135deg, color-mix(in oklab, var(--brand-accent) 12%, transparent), color-mix(in oklab, #ffffff 6%, transparent))",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div className="mb-2 text-4xl font-bold text-brand-accent">
                        {t.stat}
                      </div>
                      <div className="text-text-secondary">{t.statLabel}</div>
                    </div>
                  </Reveal>
                );
                return (
                  <div
                    key={t.title}
                    className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
                  >
                    {cardLeft ? (
                      <>
                        {card}
                        {stat}
                      </>
                    ) : (
                      <>
                        {stat}
                        {card}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section>
        <Container>
          <div className="mb-16 text-center">
            <span className="badge-iw badge-iw-muted mb-6">
              <Compass size={12} className="text-brand-highlight" /> Core Values
            </span>
            <h2 className="heading-h2 mb-6">
              <span className="text-gradient-hero">What Guides Us</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              These principles shape every product decision and customer
              interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title}>
                  <div className="card-iw h-full p-8">
                    <div
                      className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl"
                      style={{
                        background:
                          "linear-gradient(90deg, color-mix(in oklab, var(--brand-accent) 20%, transparent), color-mix(in oklab, #ffffff 12%, transparent))",
                      }}
                    >
                      <Icon size={26} className="text-brand-accent" />
                    </div>
                    <h3 className="heading-h3 mb-4">{p.title}</h3>
                    <p className="mb-4 leading-relaxed text-text-secondary">
                      {p.body}
                    </p>
                    <div className="text-sm font-medium text-brand-accent">
                      {p.tag}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Vision */}
      <Section className="bg-section-alt">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <span className="badge-iw badge-iw-muted mb-8">
              <Telescope size={12} className="text-brand-highlight" /> Looking
              Ahead
            </span>
            <h2 className="heading-h2 mb-8">
              <span className="text-gradient-hero">Our Vision</span>
            </h2>
            <Reveal>
              <div className="card-iw mb-12 p-12">
                <p className="mb-8 text-xl leading-relaxed text-foreground/90">
                  "We're building a world where every knowledge worker has an AI
                  partner that truly understands their work — where context flows
                  seamlessly across tools, and human intelligence is amplified,
                  not replaced."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-text-inverse"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--brand-accent), #ffffff)",
                    }}
                    aria-hidden
                  >
                    SC
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-foreground">
                      Sarah Chen
                    </div>
                    <div className="text-sm text-text-secondary">
                      Founder & CEO
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                ["10M+", "Knowledge workers empowered"],
                ["500+", "Tools connected"],
                ["100%", "Human-centered"],
              ].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="mb-2 text-3xl font-bold text-brand-accent">
                    {n}
                  </div>
                  <div className="text-text-secondary">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="heading-h1 mb-8">
              <span className="text-gradient-hero">Ready to Transform</span>
              <br />
              <span className="text-foreground">Your Workflow?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-text-secondary">
              Join teams building the future of work with unified digital memory.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => open("demo")}
                className="btn-primary-iw"
              >
                Book a Demo
              </button>
              <button
                type="button"
                onClick={() => open("sales")}
                className="btn-secondary-iw"
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
