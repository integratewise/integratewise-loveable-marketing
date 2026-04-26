import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";
import { ArrowRight, Brain, CircuitBoard, Database, FileText, LayoutDashboard, ShieldCheck, Sparkles, Workflow } from "lucide-react";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Docs — IntegrateWise" },
      {
        name: "description",
        content:
          "Docs for the Knowledge Workspace over the Spine. Learn how scattered apps become Digital Memory, how the Workbench reads from it, and how Twin proposes inside the Approval Gate.",
      },
      { property: "og:title", content: "Docs — IntegrateWise" },
      {
        property: "og:description",
        content:
          "Concepts, getting-started, guides, and reference — written like a guided extension of the product, not a generic API reference.",
      },
    ],
  }),
  component: DocsPage,
});

const GETTING_STARTED = [
  { to: "/docs", label: "Connect your first tools", body: "Connect WhatsApp, Tally, Razorpay, email, Sheets, Notion, or your CRM — and see your first Digital Memory." },
  { to: "/docs", label: "Land in a live Workbench", body: "How the Accounts & Revenue and Personal Workbench views appear on day one, before you customise anything." },
  { to: "/docs", label: "See your Twin safely", body: "How to turn Twin on, see proposals, and use the Approval Gate before anything executes." },
];

const CONCEPTS = [
  {
    icon: Brain,
    label: "Digital Memory",
    body: "Where Truth, Context, and approved Session Summaries intersect. They meet in one place but never lose identity or source. Raw AI chat never writes directly into Memory.",
  },
  {
    icon: CircuitBoard,
    label: "Adaptive Spine",
    body: "Platform layer that connects apps and accumulates Digital Memory. Starts as a clean schema, ingests only what it is designed to remember, and grows with you.",
  },
  {
    icon: LayoutDashboard,
    label: "Adaptive Workbench",
    body: "Product layer that reads from Memory. One living screen where stitching between apps happens, so you stop being the Human API.",
  },
  {
    icon: Sparkles,
    label: "Twin (Intelligence Layer)",
    body: "Reads Memory, links Truth + Context + approved Session Summaries into signals, and proposes actions behind the Approval Gate. Never writes into Memory or tools on its own.",
  },
  {
    icon: ShieldCheck,
    label: "Approval Gate",
    body: "Mandatory review step between Twin and your apps. You can review, edit, and approve; nothing executes without this.",
  },
];

const GUIDES = [
  { label: "Account Success Workbench", body: "One client story from many tools — usage, communication, and risk in a single view." },
  { label: "Business Ops Workbench", body: "Run the day from one screen — revenue, filings, support, renewals." },
  { label: "Personal Space", body: "Your own operating system across personal apps and inboxes." },
];

const REFERENCE = [
  {
    label: "Connectors & ingestion",
    body: "Which fields we ingest from apps like Tally, Razorpay, Gmail, WhatsApp, Sheets, CRM, and Support — and which ones we ignore.",
  },
  {
    label: "Memory & events",
    body: "How Truth, Context, and Session Summaries are stored and versioned in Digital Memory.",
  },
  {
    label: "Twin & Approval",
    body: "What a Twin proposal looks like, what evidence types exist, and all Approval Gate states.",
  },
];

function DocsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <span aria-hidden className="orb orb-peach" style={{ width: 540, height: 540, top: -160, left: "55%" }} />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Docs</span>
            <h1 className="heading-display mt-6">
              <span className="block">Docs for the Knowledge Workspace</span>
              <span className="block text-gradient-hero">over the Spine.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
              These docs explain how IntegrateWise turns scattered tools into Digital Memory,
              how your Adaptive Workbench uses that Memory, and how your Twin proposes actions
              without ever taking control away from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#getting-started" className="btn-primary-iw">
                Getting started <ArrowRight size={16} />
              </a>
              <a href="#concepts" className="btn-secondary-iw">Concepts</a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Getting started */}
      <Section alt id="getting-started">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Getting started</span>
            <h2 className="heading-h2 mt-4">Start from your real day, not a blank project.</h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {GETTING_STARTED.map((c, i) => (
              <Reveal key={c.label} delay={i * 60} className="card-iw p-6">
                <Workflow size={18} className="text-brand-accent" />
                <h3 className="mt-3 text-[16px] font-semibold text-foreground">{c.label}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Concepts */}
      <Section id="concepts">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Core concepts</span>
            <h2 className="heading-h2 mt-4">Understand the core concepts.</h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
            {CONCEPTS.map((c, i) => (
              <Reveal key={c.label} delay={i * 60} className="card-iw p-7">
                <c.icon size={20} className="text-brand-accent" />
                <h3 className="mt-3 text-[18px] font-semibold text-foreground">{c.label}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Guides */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">How-to guides</span>
            <h2 className="heading-h2 mt-4">Guides for your slice of work.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Each guide is pitched as \u201Ca day without IntegrateWise vs a day with IntegrateWise\u201D —
              pure pain language vs pure feature language.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {GUIDES.map((g, i) => (
              <Reveal key={g.label} delay={i * 60} className="card-iw p-6">
                <FileText size={18} className="text-brand-accent" />
                <h3 className="mt-3 text-[16px] font-semibold text-foreground">{g.label}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">{g.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Reference */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Reference</span>
            <h2 className="heading-h2 mt-4">Deep dives for operators.</h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {REFERENCE.map((r, i) => (
              <Reveal key={r.label} delay={i * 60} className="card-iw p-6">
                <Database size={18} className="text-brand-accent" />
                <h3 className="mt-3 text-[16px] font-semibold text-foreground">{r.label}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">{r.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-border bg-white/[0.02] p-5 text-center text-[14px] text-text-secondary">
            Docs describe how we keep our promise: Spine writes your Digital Memory. Workbench
            consumes it. Twin only reads and proposes. Approval Gate sits between AI and your tools.
          </div>

          <div className="mt-8 text-center">
            <Link to="/changelog" className="btn-secondary-iw inline-flex">
              See changelog <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </Section>

      <ClosingCtaBand />
    </>
  );
}
