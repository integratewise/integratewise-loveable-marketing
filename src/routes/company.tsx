import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Database,
  Layers,
  ShieldCheck,
  Lock,
  Workflow,
  UserCheck,
  Calendar,
  Handshake,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { StickySubNav } from "@/components/site/StickySubNav";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Truth you own. AI you rent. | IntegrateWise" },
      {
        name: "description",
        content:
          "IntegrateWise builds a governed foundation for ops-heavy teams: Spine, Digital Memory, Workspace and Twin — with humans in control behind every Approval.",
      },
      { property: "og:title", content: "Company — IntegrateWise" },
      {
        property: "og:description",
        content:
          "Who we are, what we believe, the Human API problem, and how to talk to the people building the product.",
      },
    ],
  }),
  component: CompanyPage,
});

const SUBNAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "manifesto", label: "Manifesto" },
  { id: "customer-zero", label: "Customer Zero" },
  { id: "why", label: "Why" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

const BELIEFS = [
  {
    icon: Database,
    h: "Truth in systems, not in slides.",
    body:
      "The real state of your business lives in ledgers, tickets, usage and conversations — not in the last deck someone made. Tools should read that truth and expose it, not reinvent it from scratch.",
  },
  {
    icon: Layers,
    h: "Memory should compound.",
    body:
      "Every decision, summary and learning should make the next one easier. Your Memory should grow across years and tools, not reset every time you change software, models or vendors.",
  },
  {
    icon: ShieldCheck,
    h: "AI must be approval-gated.",
    body:
      "AI should watch, suggest, prepare and explain — then wait. No system should send money, change records or talk to your customers without a human in the middle and a visible line of Approval.",
  },
  {
    icon: Lock,
    h: "Private by architecture. Shared by choice.",
    body:
      "Memory must have clear scopes — User, Work and Org — with sharing that is explicit, reversible and logged. Privacy is not a toggle; it is how the system is built.",
  },
  {
    icon: Workflow,
    h: "Tools should fit into your stack, not replace it.",
    body:
      "Your ledgers, CRMs, support tools and chats are not going away. New platforms should connect into them with clear boundaries instead of promising 'the one app for everything'.",
  },
];

const PRICING_BLOCKS = [
  {
    h: "Memory scopes",
    body:
      "User, Work and Org Memory. Start with a narrow slice — one person, one team, one book of work — and expand as more of your business shifts onto Digital Memory.",
  },
  {
    h: "Workspace seats",
    body:
      "Seats for the people who live in the Workspace every day — CAs, CSMs, founders, operators. View-only access can stay lighter-weight.",
  },
  {
    h: "Twin usage",
    body:
      "Governed intelligence on top: briefs, nudges and prepared actions behind Approval. You can run Workspace without Twin, or turn Twin on gradually for selected scopes.",
  },
];

function CompanyPage() {
  const { open, openEarlyAccess } = useDemoModal();

  return (
    <div className="bg-background text-foreground">
      <StickySubNav items={SUBNAV_ITEMS} />

      {/* HERO / ABOUT */}
      <Section id="about" className="pt-16 md:pt-24">
        <Container>
          <Reveal>
            <Badge>COMPANY</Badge>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Truth you own. <span className="text-brand-accent">AI you rent.</span> Approval in between.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-text-secondary md:text-xl">
              IntegrateWise is building a new way for ops-heavy teams to work: one where your tools stay,
              your Memory compounds, AI is governed and humans stay in control. We build for CAs, CSMs,
              founders and operators who are tired of being the Human API between their own tools.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 max-w-3xl rounded-2xl border border-border/60 bg-surface-1/40 p-6 md:p-8">
              <p className="text-base text-text-secondary md:text-[17px]">
                We are former customer success managers, BizOps operators and founders based in India,
                designing for the way work actually happens here: WhatsApp plus ledgers plus emails plus
                calls, all at once.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* MANIFESTO */}
      <Section id="manifesto" className="border-t border-border/40">
        <Container>
          <Reveal>
            <Badge>MANIFESTO</Badge>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight md:text-5xl">
              What we believe.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {BELIEFS.map((b, i) => (
              <Reveal key={b.h} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border/60 bg-surface-1/40 p-6 transition-colors hover:border-brand-accent/40 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight">{b.h}</h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-text-secondary">{b.body}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={BELIEFS.length * 0.05}>
              <article className="hidden h-full items-center justify-center rounded-2xl border border-dashed border-border/50 p-8 text-center md:flex">
                <p className="font-serif text-xl italic text-text-secondary">
                  "Truth you own.<br />AI you rent.<br />Approval in between."
                </p>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CUSTOMER ZERO */}
      <Section id="customer-zero" className="border-t border-border/40">
        <Container>
          <Reveal>
            <Badge>CUSTOMER ZERO</Badge>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight md:text-5xl">
              We ran IntegrateWise on ourselves first.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-[280px_1fr] md:gap-14">
            <Reveal>
              <div className="sticky top-32">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-brand-accent/15 via-surface-1 to-surface-2">
                  <div className="flex h-full w-full items-center justify-center">
                    <UserCheck className="h-20 w-20 text-brand-accent/50" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-text-secondary">Founder, IntegrateWise</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5 text-[16.5px] leading-relaxed text-text-secondary md:text-[17px]">
                <p>
                  Before IntegrateWise had a name, it was just our internal fix. As a former CSM turned
                  BizOps operator, I was the Human API between Salesforce, Stripe, support tools, sheets
                  and endless WhatsApp threads. Every board deck, every renewal and every "what's going
                  on with this client?" started with me rebuilding the story by hand.
                </p>
                <p>
                  We built a Spine that remembered what mattered, a single Workspace instead of ten tabs,
                  and a Twin that never sent a thing without explicit Approval.
                </p>
                <p>
                  We still run on that same stack today. Our own accounts, tickets and ledgers feed into
                  the Spine. We work from the same Workspace we ship. Our Twin prepares briefs and actions
                  that still pass through the same line of Approval.
                </p>
                <p className="border-l-2 border-brand-accent/60 pl-5 font-serif text-xl italic text-foreground">
                  We are Customer Zero so rough edges show up in our day before they reach yours.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* WHY */}
      <Section id="why" className="border-t border-border/40">
        <Container>
          <Reveal>
            <Badge>WHY</Badge>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight md:text-5xl">
              The Human API problem.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "Modern teams run on many tools, but decisions still depend on one person sitting in front of a laptop — copying numbers from Tally and Razorpay into Sheets, reading WhatsApp and email to understand client mood, updating CRMs by hand after every call, and writing summary mails to keep everyone aligned.",
              "That person is the Human API. When they are tired, overloaded or leave, the memory of how the system really works leaves with them. Work resets every day.",
              "At the same time, most AI tools offer quick answers but do not carry responsibility. They scrape the open internet, guess from partial data, and rarely show their working. You cannot hand them clients, books or compliance.",
              "IntegrateWise exists to give your work a proper Spine and a durable Digital Memory, with a Twin that reads only your own Truth, Context and approved Session Summaries — and always sits behind your Approval.",
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border/60 bg-surface-1/40 p-6 md:p-7">
                  <div className="font-serif text-xs uppercase tracking-[0.2em] text-brand-accent">
                    0{i + 1}
                  </div>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-text-secondary">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* PRICING PHILOSOPHY */}
      <Section id="pricing" className="border-t border-border/40">
        <Container>
          <Reveal>
            <Badge>PRICING</Badge>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight md:text-5xl">
              Pricing that tracks how your Memory grows.
            </h2>
            <p className="mt-5 max-w-3xl text-lg text-text-secondary">
              We don't sell another seat that nobody uses. We price around how your Memory and surface
              area grow over time.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PRICING_BLOCKS.map((b, i) => (
              <Reveal key={b.h} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border/60 bg-surface-1/40 p-6 md:p-7">
                  <h3 className="font-serif text-xl font-semibold tracking-tight">{b.h}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{b.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <a
              href="/pricing"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:underline"
            >
              See current plans and details
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </Container>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="border-t border-border/40">
        <Container>
          <Reveal>
            <Badge>CONTACT</Badge>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight md:text-5xl">
              Talk to the people building the product.
            </h2>
            <p className="mt-5 max-w-3xl text-lg text-text-secondary">
              If you recognise yourself in the Human API story, we should talk. Every IntegrateWise
              deployment starts with a conversation about your stack, your clients and your constraints.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Reveal delay={0}>
              <article className="flex h-full flex-col rounded-2xl border border-border/60 bg-surface-1/40 p-6 md:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight">Book a demo</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-secondary">
                  Walk through your tools and see how Spine, Digital Memory, Workspace and Twin would
                  sit on top.
                </p>
                <button
                  type="button"
                  onClick={() => open("company-contact-demo")}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                >
                  Book a demo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-border/60 bg-surface-1/40 p-6 md:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                  <Handshake className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight">Partnerships</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-secondary">
                  If you are a CA firm, agency or consulting practice that wants to build on this
                  foundation with your own playbooks, let's collaborate.
                </p>
                <button
                  type="button"
                  onClick={() => open("company-contact-partnerships")}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-surface-2/40 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-accent/60"
                >
                  Talk partnerships
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-border/60 bg-surface-1/40 p-6 md:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight">Early access</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-secondary">
                  Join the waitlist for Personal Space and new features. Help shape how governed Memory
                  and Twin feel in day-to-day work.
                </p>
                <button
                  type="button"
                  onClick={() => openEarlyAccess("company-contact-early-access")}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-surface-2/40 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-accent/60"
                >
                  Join early access
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="mt-16 text-center font-serif text-2xl italic text-text-secondary md:text-3xl">
              Truth you own. AI you rent. Approval in between.
            </p>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}
