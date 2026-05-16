import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Layers,
  Workflow,
  ShieldCheck,
  Plug,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { SectionDivider } from "@/components/site/SectionDivider";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { scrollToId } from "@/lib/scroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "IntegrateWise — Stop being the human cable between your tools.",
      },
      {
        name: "description",
        content:
          "One governed workspace with continuity, memory, and approvals built in — so you act from a single clear picture instead of stitching it together by hand.",
      },
      {
        property: "og:title",
        content: "IntegrateWise — Stop being the human cable between your tools.",
      },
      {
        property: "og:description",
        content:
          "Continuity, memory, and approvals across the apps you already use. Humans own outcomes. Agents own speed. Systems own consistency.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { open } = useDemoModal();

  return (
    <>
      {/* 1. HERO */}
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
        <Particles quantity={24} color="#FFE1CC" className="opacity-60" />

        <Container>
          <div className="fade-up mx-auto max-w-4xl text-center">
            <span className="badge-iw badge-iw-muted">
              From 13 years of being the person in the middle of tools that wouldn't talk
            </span>
            <h1 className="heading-display mt-8">
              <span className="block">Stop being the human cable</span>
              <span className="block text-gradient-hero">between your own technology.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-[18px] leading-relaxed text-text-secondary">
              Every day, you jump between CRM, email, chat, docs, sheets, and AI tools just to
              remember what is going on. IntegrateWise gives you{" "}
              <span className="text-foreground">
                one governed workspace with continuity, memory, and approvals built in
              </span>
              — so you act from a single clear picture instead of stitching it together by hand.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => open("Home hero")}
                className="btn-primary-iw"
              >
                Book a demo <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollToId("how")}
                className="btn-secondary-iw"
              >
                See how it works
              </button>
            </div>

            <ul className="mx-auto mt-12 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
              {[
                "One place to work from, instead of ten tabs.",
                "Context that stays with the work, not lost in old threads.",
                "AI that prepares and suggests, while you stay in control of decisions.",
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
          </div>
        </Container>
      </section>

      <SectionDivider variant="cool" />

      {/* 2. PROBLEM — HUMAN API PAIN */}
      <section
        id="problem"
        className="bg-bg-section-alt scroll-mt-32 py-24 lg:py-32"
      >
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-cool">The pain</span>
            <h2 className="heading-h2 mt-5">
              Are you juggling tabs and screens just to find what matters?
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              Your work is scattered across CRM, tickets, email, chat, spreadsheets, and shared
              documents. One tab shows the customer record. Another shows the last conversation. A
              third has billing. A fourth has tasks. None of these tools understand each other, so
              the job of remembering, connecting, and following through falls back on people.
            </p>
            <p className="mt-5 text-[18px] font-semibold text-foreground">
              You become the human API between your own apps.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                title: "Context gets scattered",
                body: "Key details live in call notes, side chats, and personal docs that never make it back to the system of record.",
              },
              {
                title: "Decisions get delayed",
                body: "Renewals, escalations, and approvals slow down because nobody sees the full picture at once.",
              },
              {
                title: "Execution depends on memory",
                body: "Follow-ups and commitments are tracked in people's heads and private lists, not in a shared, reliable flow.",
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

      {/* 3. SOLUTION */}
      <section id="solution" className="relative scroll-mt-32 py-24 lg:py-32">
        <span
          aria-hidden
          className="orb orb-cool"
          style={{ width: 420, height: 420, top: -60, left: -120 }}
        />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">What IntegrateWise does</span>
            <h2 className="heading-h2 mt-5">
              IntegrateWise brings your work back into one intelligent workspace.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              IntegrateWise connects the places where work actually happens, keeps the right
              context alive over time, and helps your team act with approvals and evidence instead
              of guesswork. A Digital Memory system with an adaptive workspace on top — built so
              humans can stop being the bridge between tools.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                Icon: Layers,
                title: "Remember what matters",
                body: "Continuity across records, conversations, files, and decisions — so anyone who opens an account or workflow sees what actually happened and what is due next.",
              },
              {
                Icon: Workflow,
                title: "Work from one place",
                body: "Instead of jumping between tabs to rebuild context, your team gets one workspace that brings in the right data at the right time, inside the flow of work.",
              },
              {
                Icon: ShieldCheck,
                title: "Act with control",
                body: "AI suggests next steps, drafts updates, and proposes actions — but important changes move only with human approval. Humans own outcomes, agents own speed.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 70} className="card-iw p-6">
                <c.Icon size={22} className="text-brand-accent" />
                <h3 className="mt-4 text-[18px] font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{c.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <button
              type="button"
              onClick={() => open("Home · Solution micro-CTA")}
              className="btn-secondary-iw"
            >
              Show me this in a demo <ArrowRight size={16} />
            </button>
          </Reveal>
        </Container>
      </section>

      <SectionDivider variant="cool" />

      {/* 4. WHO IT'S FOR */}
      <section
        id="who"
        className="bg-bg-section-alt scroll-mt-32 py-24 lg:py-32"
      >
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-cool">Who it's for</span>
            <h2 className="heading-h2 mt-5">Who IntegrateWise is for</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              If your day disappears into juggling tools just to remember what is going on,
              IntegrateWise is for you.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                title: "Account Success",
                body: "Teams that cannot afford to miss renewal signals or lose context between calls. IntegrateWise keeps account memory, approvals, and follow-through in one place so nothing critical falls through the cracks.",
              },
              {
                title: "Customer Success",
                body: "CS teams that live across CRM, tickets, email, and calls, and need one view of the customer story that doesn't reset every time a tab closes.",
              },
              {
                title: "Business Ops",
                body: "Ops leaders who coordinate across sales, success, finance, and product, and are tired of being the human API between disconnected systems and teams.",
              },
            ].map((a, i) => (
              <Reveal key={a.title} delay={i * 70} className="card-iw p-6">
                <h3 className="text-[18px] font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider variant="warm" />

      {/* 5. HOW THE DEMO WORKS */}
      <section id="how" className="scroll-mt-32 py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">What happens in a demo</span>
            <h2 className="heading-h2 mt-5">Not a slide deck. Your own work.</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              We use the demo to show you your own work, not theoretical screens.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                Icon: Eye,
                step: "01",
                title: "Bring one real workflow",
                body: "Choose one real workflow or problem — for example, renewal tracking, escalations, or cross-team approvals.",
              },
              {
                Icon: Plug,
                step: "02",
                title: "Connect one or two systems",
                body: "In the session, we connect one or two of your existing tools into IntegrateWise in a guided way, so you see your own data and context.",
              },
              {
                Icon: Layers,
                step: "03",
                title: "See how continuity feels",
                body: "See how your context comes together, how decisions and approvals move, and what it looks like to work from one governed workspace instead of ten tabs.",
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
              onClick={() => open("Home · How it works")}
              className="btn-primary-iw"
            >
              Book a demo <ArrowRight size={16} />
            </button>
          </Reveal>
        </Container>
      </section>

      <SectionDivider variant="cool" />

      {/* 6. CUSTOMER ZERO */}
      <section
        id="proof"
        className="bg-bg-section-alt scroll-mt-32 py-24 lg:py-32"
      >
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-cool">Customer Zero</span>
            <h2 className="heading-h2 mt-5">We run our own work on IntegrateWise.</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              IntegrateWise is not a concept slide. We use it ourselves to manage work, continuity,
              and decisions across operations, engineering, marketing, and customer work. The same
              workspace you see in the demo is what we rely on every day — so the product is
              grounded in real use and real constraints.
            </p>
            <blockquote className="mx-auto mt-8 max-w-2xl border-l-2 border-brand-accent/60 pl-5 text-left text-[16px] italic leading-relaxed text-foreground/90">
              "Our own operations run on IntegrateWise so we can see what breaks, what scales, and
              what compounding memory really looks like before it ever reaches you."
            </blockquote>
          </Reveal>
        </Container>
      </section>

      <SectionDivider variant="warm" />

      {/* 7. CLOSING CTA */}
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
              Stop spending your day being the human cable between tools. Bring one real workflow,
              and we'll show you what continuity feels like when your apps, AI, and people finally
              work from the same Memory.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => open("Home · Closing CTA")}
                className="btn-primary-iw"
              >
                Book a demo <ArrowRight size={16} />
              </button>
              <a href="/pricing" className="btn-secondary-iw">
                See pricing
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
