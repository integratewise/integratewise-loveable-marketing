import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  Rocket,
  UserCheck,
  Eye,
  RefreshCw,
  Plug,
  Heart,
  Lock,
  MapPin,
  Telescope,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { SectionNav } from "@/components/site/SectionNav";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Built because work lost its memory | IntegrateWise" },
      {
        name: "description",
        content:
          "One solo founder, a former CSM and Business Ops operator, who was living the pain the product now fixes. From being the Human API to building the Spine.",
      },
      { property: "og:title", content: "About IntegrateWise" },
      {
        property: "og:description",
        content: "From observing fragmented workflows to building the future of work continuity.",
      },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  {
    era: "2023 — The problem",
    title: "Work was breaking.",
    body: "A solo founder spent years as a CSM and Business Ops operator. Every day: CRM, billing, support, WhatsApp, email, Sheets, Notion. Rebuild yesterday. Hope nothing slipped.",
    icon: AlertTriangle,
  },
  {
    era: "Early 2024 — Discovery",
    title: "Listening and learning.",
    body: "Spoke with customer success teams, finance ops leaders, and founders. The pattern was universal: scattered data, no shared memory, too much manual stitching.",
    icon: MapPin,
  },
  {
    era: "Mid 2024 — Breakthrough",
    title: "The Digital Memory idea.",
    body: "A near-miss on a key account made it clear: the work was fine, the people were fine — it was the memory that was broken. Tools forgot context the second you closed them.",
    icon: Lightbulb,
  },
  {
    era: "Late 2024 — Foundation",
    title: "The Spine is born.",
    body: "The invention moment was simple: not another dashboard — a Spine. A layer that remembers Truth and Context across tools and time. Memory before intelligence. Approval before action.",
    icon: ShieldCheck,
  },
  {
    era: "2025–26 — Today",
    title: "Building for operators.",
    body: "Still founder-led. The company runs on IntegrateWise. Early teams see 40% faster decisions and 60% less context-switching. The reset is ending.",
    icon: Rocket,
  },
];

const PRINCIPLES = [
  {
    icon: UserCheck,
    title: "You stay in control.",
    body: "Nothing acts without your approval. Twin can think, draft, and suggest, but the Approval Gate is mandatory.",
  },
  {
    icon: Eye,
    title: "Complete transparency.",
    body: "See exactly what your Twin knows and how it makes decisions. No hidden logic, no black-box magic.",
  },
  {
    icon: RefreshCw,
    title: "Memory before intelligence.",
    body: "Fix the memory problem first. Truth and Context in one place — then governed AI on top.",
  },
  {
    icon: Plug,
    title: "Works everywhere.",
    body: "Connects with the tools you already use — no workflow disruption, no re-training your team.",
  },
  {
    icon: Heart,
    title: "Amplifies humans.",
    body: "Technology serves people. We enhance your capabilities — we don't replace your judgment.",
  },
  {
    icon: Lock,
    title: "Private by architecture.",
    body: "User, Work, and Org Memory are separated by design. Your data is never used to train someone else's AI.",
  },
];

function AboutPage() {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero */}
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Badge variant="muted">About</Badge>
              <h1 className="heading-h1 mt-5">
                Transforming work through{" "}
                <span className="text-gradient-hero">Digital Memory.</span>
              </h1>
              <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
                IntegrateWise was built by one solo founder — a former CSM and Business Ops
                operator — to end the Human API role. Memory before intelligence. Approval before
                action.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <button type="button" onClick={() => open("About · hero")} className="btn-primary-iw">
                  Book a Demo <ArrowRight size={16} />
                </button>
                <a href="#story" className="btn-secondary-iw">
                  Read the story
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <SectionNav
        items={[
          { id: "story", label: "Our story" },
          { id: "principles", label: "Principles" },
          { id: "vision", label: "Vision" },
        ]}
      />

      {/* Story — timeline */}
      <Section id="story" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Our journey</Badge>
            <h2 className="heading-h2 mt-4">
              From being the Human API to{" "}
              <span className="text-brand-accent">building the Spine.</span>
            </h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              From observing fragmented workflows to building the future of work continuity.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 max-w-3xl space-y-5">
            {TIMELINE.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.era} delay={i * 70}>
                  <div className="card-iw flex items-start gap-5 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-accent">
                        {t.era}
                      </p>
                      <h3 className="mt-1.5 text-[17px] font-semibold text-foreground">{t.title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">{t.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section id="principles">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Principles</Badge>
            <h2 className="heading-h2 mt-4">What guides every decision.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              These principles shape every product decision and customer interaction.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 60}>
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

      {/* Vision */}
      <Section id="vision" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Vision</Badge>
            <Telescope size={28} className="mx-auto mt-6 text-brand-accent" />
            <h2 className="heading-h2 mt-4">Where we want this to go.</h2>
          </Reveal>

          <Reveal delay={100} className="mx-auto mt-10 max-w-3xl">
            <div className="card-iw p-8 text-center">
              <p className="text-[18px] leading-relaxed text-foreground/90">
                "Every knowledge worker should have an AI partner that truly understands their work
                — where context flows seamlessly across tools, and human intelligence is amplified,
                not replaced."
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/15 text-[13px] font-bold text-brand-accent">
                  IW
                </div>
                <div className="text-left">
                  <p className="text-[14px] font-semibold text-foreground">IntegrateWise</p>
                  <p className="text-[12.5px] text-text-secondary">Founder-led · Solo operator</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
            {[
              { n: "End", l: "the Human API role for every operator" },
              { n: "Memory", l: "that compounds with every decision" },
              { n: "100%", l: "human approval on every AI action" },
            ].map((s) => (
              <Reveal key={s.l}>
                <div className="card-iw p-6 text-center">
                  <p className="text-[28px] font-bold text-brand-accent">{s.n}</p>
                  <p className="mt-2 text-[14px] text-text-secondary">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mx-auto mt-10 max-w-3xl text-center">
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={() => open("About · vision")} className="btn-primary-iw">
                Book a Demo <ArrowRight size={16} />
              </button>
            </div>
            <p className="mt-5 text-[13px] text-text-secondary">
              Truth you own. AI you rent. Approval in between.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
