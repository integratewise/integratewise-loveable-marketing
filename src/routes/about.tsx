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
  type LucideIcon,
} from "lucide-react";
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
  icon: LucideIcon;
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

const PRINCIPLES: { icon: LucideIcon; title: string; body: string; tag: string }[] = [
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

function StatPanel({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="about-stat-card p-8">
      <div className="text-center">
        <div className="mb-2 text-4xl font-bold text-brand-accent">{stat}</div>
        <div className="text-text-secondary">{label}</div>
      </div>
    </div>
  );
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  const Icon = entry.icon;
  return (
    <div className="about-card rounded-2xl p-8">
      <div className="mb-4 flex items-center gap-3">
        <div className="about-icon-tile flex h-12 w-12 items-center justify-center rounded-lg">
          <Icon size={18} className="text-brand-accent" />
        </div>
        <div>
          <div className="text-sm font-semibold text-brand-accent">{entry.era}</div>
          <div className="text-lg font-bold text-foreground">{entry.title}</div>
        </div>
      </div>
      <p className="mb-4 leading-relaxed text-text-secondary">{entry.body}</p>
      <p className="text-sm text-text-muted">"{entry.quote}"</p>
    </div>
  );
}

function AboutPage() {
  const { open } = useDemoModal();

  return (
    <main>
      {/* Hero — h-[600px], custom purple glow, pt-32 pb-20 */}
      <section
        id="about-hero-section"
        className="relative flex h-[600px] flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20"
      >
        <div className="about-hero-glow" aria-hidden />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1c1c1c] px-4 py-1.5 text-xs font-semibold text-text-secondary">
            <Heart size={12} className="text-[#ffb22c]" /> Our Story
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
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
              className="rounded-xl bg-gradient-to-r from-[#FFE1CC] to-white px-8 py-4 text-base font-bold text-[#111111] shadow-xl transition-transform hover:scale-105"
            >
              Book a Demo
            </button>
            <button
              type="button"
              onClick={() => open("sales")}
              className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-white/5"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Timeline — alt-dark #0a0a0a banding */}
      <section id="story-timeline-section" className="about-bg-alt px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1c1c1c] px-4 py-1.5 text-xs font-semibold text-text-secondary">
              <MapPin size={12} className="text-[#ffb22c]" /> Our Journey
            </span>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              <span className="text-gradient-hero">How We Got Here</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              From observing fragmented workflows to building the future of work
              continuity.
            </p>
          </div>

          <div className="about-timeline-line relative">
            <div className="space-y-16">
              {TIMELINE.map((entry, i) => {
                const cardLeft = i % 2 === 0;
                return (
                  <div
                    key={entry.title}
                    className="about-timeline-item grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
                  >
                    {cardLeft ? (
                      <>
                        <div className="order-2 lg:order-1">
                          <TimelineCard entry={entry} />
                        </div>
                        <div className="order-1 lg:order-2">
                          <StatPanel stat={entry.stat} label={entry.statLabel} />
                        </div>
                      </>
                    ) : (
                      <>
                        <StatPanel stat={entry.stat} label={entry.statLabel} />
                        <TimelineCard entry={entry} />
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles-section" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1c1c1c] px-4 py-1.5 text-xs font-semibold text-text-secondary">
              <Compass size={12} className="text-[#ffb22c]" /> Core Values
            </span>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
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
                <div
                  key={p.title}
                  className="principle-card about-card rounded-2xl p-8"
                >
                  <div className="about-icon-tile mb-6 flex h-16 w-16 items-center justify-center rounded-xl">
                    <Icon size={26} className="text-brand-accent" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-text-secondary">
                    {p.body}
                  </p>
                  <div className="text-sm font-medium text-brand-accent">
                    {p.tag}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision — alt-dark */}
      <section id="vision-section" className="about-bg-alt px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1c1c1c] px-4 py-1.5 text-xs font-semibold text-text-secondary">
            <Telescope size={12} className="text-[#ffb22c]" /> Looking Ahead
          </span>
          <h2 className="mb-8 text-3xl font-bold md:text-5xl">
            <span className="text-gradient-hero">Our Vision</span>
          </h2>
          <div className="about-card mb-12 rounded-3xl p-12">
            <p className="mb-8 text-xl leading-relaxed text-foreground/90">
              "We're building a world where every knowledge worker has an AI
              partner that truly understands their work — where context flows
              seamlessly across tools, and human intelligence is amplified, not
              replaced."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-[#111111]"
                style={{
                  background:
                    "linear-gradient(135deg, #FFE1CC, #ffffff)",
                  border: "2px solid rgba(255,255,255,0.20)",
                }}
                aria-hidden
              >
                SC
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-foreground">
                  Sarah Chen
                </div>
                <div className="text-sm text-text-secondary">Founder & CEO</div>
              </div>
            </div>
          </div>

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
      </section>

      {/* CTA */}
      <section id="cta-section" className="px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-4xl font-bold md:text-6xl">
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
              className="rounded-2xl bg-gradient-to-r from-[#FFE1CC] to-white px-10 py-5 text-xl font-bold text-[#111111] shadow-2xl transition-transform hover:scale-105"
            >
              Book a Demo
            </button>
            <button
              type="button"
              onClick={() => open("sales")}
              className="rounded-2xl border border-white/20 px-10 py-5 text-xl font-semibold text-foreground transition-all hover:bg-white/5"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
