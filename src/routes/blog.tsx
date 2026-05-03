import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — IntegrateWise" },
      {
        name: "description",
        content:
          "Stories about ending the Human API role: how scattered apps become Digital Memory, how Workbench replaces tab-switching, and how Twin proposes inside the Approval Gate.",
      },
      { property: "og:title", content: "Blog — IntegrateWise" },
      {
        property: "og:description",
        content:
          "Real-world stories about Digital Memory, Spine, Workbench, Twin, and Approval — written for operators, not generic AI thought-leadership.",
      },
    ],
  }),
  component: BlogPage,
});

const CATEGORIES = [
  {
    tag: "End of the Human API",
    blurb:
      "How people rebuild context across apps today, and what a day looks like once that stops.",
  },
  {
    tag: "Digital Memory & Spine",
    blurb:
      "Why Memory comes before intelligence. How Truth, Context, and Session Summaries stay separate.",
  },
  {
    tag: "Workbench in the real world",
    blurb:
      "Operator stories: a Monday in Business Ops, a CA firm running GST work from one screen.",
  },
  {
    tag: "Twin & Governed AI",
    blurb:
      "Approval Gate, org AI library, and keeping AI in its lane — Truth you own, AI you rent.",
  },
];

const POSTS = [
  {
    category: "End of the Human API",
    title: "Why Monday morning still feels like archaeology",
    summary:
      "A CSM rebuilds the same customer story from CRM, email, Slack, and Sheets — every single week. Here is what changes when that story lives in one place.",
    audience: "For CSMs and Account Success leads",
  },
  {
    category: "Digital Memory & Spine",
    title: "Why we built Memory before we built the AI",
    summary:
      "Most AI products bolt a model onto chaos. We built the Spine first so Truth, Context, and Session Summaries can converge into one Digital Memory.",
    audience: "For founders and ops leads",
  },
  {
    category: "Workbench in the real world",
    title: "A Monday in Business Ops with IntegrateWise",
    summary:
      "Twelve apps on Friday. One Workbench on Monday. Walk through how revenue, support tickets, and renewal risks land on a single screen.",
    audience: "For BizOps and RevOps",
  },
  {
    category: "Workbench in the real world",
    title: "How a CA firm runs GST work from one screen",
    summary:
      "Tally, Sheets, WhatsApp, and email — stitched into a single client view. Filings, invoices, and chase-ups stop being a tab-hunt.",
    audience: "For CAs and small firms",
  },
  {
    category: "Twin & Governed AI",
    title: "Truth you own. AI you rent. Approval in between.",
    summary:
      "The three sentences that decide what AI is allowed to do inside your business — and why raw AI chat never writes directly into Memory.",
    audience: "For founders and security leads",
  },
  {
    category: "Twin & Governed AI",
    title: "Confidence scores, evidence chains, and the Approval Gate",
    summary:
      "What a Twin proposal actually looks like in the Workbench: severity, sources, confidence, and the gate that keeps execution in your hands.",
    audience: "For ops leads and admins",
  },
];

function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <span
          aria-hidden
          className="orb orb-peach"
          style={{ width: 540, height: 540, top: -160, left: "60%" }}
        />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Blog</span>
            <h1 className="heading-display mt-6">
              <span className="block">Stories from the end of the</span>
              <span className="block text-gradient-hero">Human API.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
              How real teams stop being the bridge between WhatsApp, Tally, Razorpay, Gmail, Sheets,
              and a CRM — and how Digital Memory, Workbench, Twin, and Approval show up in their
              day.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Categories */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">Four threads we keep pulling.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Every post connects back to one flow: scattered apps → Spine → Digital Memory →
              Workbench → Twin → Approval.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.tag} delay={i * 60} className="card-iw p-7">
                <span className="badge-iw badge-iw-muted">{c.tag}</span>
                <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">{c.blurb}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Posts */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">Latest posts</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Practical, operator-first writing. No abstract AI thought-leadership.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} className="card-iw flex h-full flex-col p-7">
                <span className="badge-iw badge-iw-muted">{p.category}</span>
                <h3 className="mt-4 text-[19px] font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">
                  {p.summary}
                </p>
                <div className="mt-4 text-[12.5px] font-semibold uppercase tracking-wider text-brand-accent">
                  {p.audience}
                </div>
                <div className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-1 text-[13px] text-text-secondary">
                    Coming soon <ArrowRight size={13} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section alt className="!py-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[14px] text-text-secondary">
              Looking for product docs or release notes? Visit{" "}
              <Link to="/docs" className="text-brand-accent hover:underline">
                Docs
              </Link>
              {" or "}
              <Link to="/changelog" className="text-brand-accent hover:underline">
                Changelog
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <ClosingCtaBand />
    </>
  );
}
