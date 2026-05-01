import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SectionNav } from "@/components/site/SectionNav";
import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";
import {
  ArrowRight,
  Database,
  FileText,
  Workflow,
} from "lucide-react";
import {
  DOCS_SECTIONS,
  GETTING_STARTED,
  CONCEPTS,
  GUIDES,
  REFERENCE,
} from "@/content/docs-content";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Docs — IntegrateWise" },
      {
        name: "description",
        content:
          "Docs for the Knowledge Workspace over the Spine. Learn how scattered apps become Digital Memory, how the Workspace reads from it, and how Twin proposes inside the Approval Gate.",
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

function DocsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <span
          aria-hidden
          className="orb orb-peach"
          style={{ width: 540, height: 540, top: -160, left: "55%" }}
        />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Docs</span>
            <h1 className="heading-display mt-6">
              <span className="block">Docs for the Knowledge Workspace</span>
              <span className="block text-gradient-hero">over the Spine.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
              These docs explain how IntegrateWise turns scattered tools into Digital Memory, how
              your Workspace uses that Memory, and how your Twin proposes actions without ever
              taking control away from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#getting-started" className="btn-primary-iw">
                Getting started <ArrowRight size={16} />
              </a>
              <a href="#twin-approvals" className="btn-secondary-iw">
                Twin &amp; Approvals
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Sticky in-page nav */}
      <SectionNav
        items={DOCS_SECTIONS.map((s) => ({ id: s.id, label: s.navLabel }))}
      />

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

      {/* Connectors */}
      <Section id="connectors">
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
            Docs describe how we keep our promise: Spine writes your Digital Memory. Workspace
            consumes it. Twin only reads and proposes. Approval Gate sits between AI and your tools.
          </div>

          <div className="mt-8 text-center">
            <Link to="/changelog" className="btn-secondary-iw inline-flex">
              See changelog <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Workspaces */}
      <Section alt id="workspaces">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">How-to guides</span>
            <h2 className="heading-h2 mt-4">Guides for your slice of work.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Each guide is pitched as &ldquo;a day without IntegrateWise vs a day with
              IntegrateWise&rdquo; — pure pain language vs pure feature language.
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

      {/* Twin & Approvals */}
      <Section id="twin-approvals">
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

      {/* Security & Compliance */}
      <Section alt id="security-compliance">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Security &amp; compliance</span>
            <h2 className="heading-h2 mt-4">Security and compliance reference.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              SOC 2 Type II, GDPR, tenant isolation, and Approval Gate — how we keep your Memory
              safe.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-border bg-white/[0.02] p-8 text-[15px] leading-relaxed text-text-secondary">
            <p>
              Every piece of Digital Memory is tenant-isolated. No data crosses account boundaries.
              The Approval Gate is the only path from AI proposal to execution — nothing writes to
              your tools without your explicit approval.
            </p>
            <p className="mt-4">
              We are working toward SOC 2 Type II certification. GDPR data processing agreements are
              available on request. Contact us at{" "}
              <a href="mailto:security@integratewise.com" className="text-brand-accent hover:underline">
                security@integratewise.com
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>

      <ClosingCtaBand />
    </>
  );
}
