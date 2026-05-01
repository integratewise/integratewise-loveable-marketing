import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SectionNav } from "@/components/site/SectionNav";
import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";
import {
  ArrowRight,
  Users,
} from "lucide-react";
import {
  RESOURCES_SECTIONS,
  PRODUCT_LEARNING,
  CHANGELOG_HIGHLIGHTS,
  STORIES,
  TEMPLATES,
} from "@/content/resources-content";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — IntegrateWise" },
      {
        name: "description",
        content:
          "Docs, changelog, blog, and stories — one hub that ties everything back to scattered apps → Spine → Digital Memory → Workspace → Twin → Approval.",
      },
      { property: "og:title", content: "Resources — IntegrateWise" },
      {
        property: "og:description",
        content:
          "Learn the product layer by layer, see what changed this month, and read operator stories from the end of the Human API.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
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
            <span className="badge-iw badge-iw-muted">Resources</span>
            <h1 className="heading-display mt-6">
              <span className="block">Everything that helps you</span>
              <span className="block text-gradient-hero">stop being the Human API.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
              Docs, changelog, stories, and templates — all tied back to the same flow: scattered
              apps → Spine → Digital Memory → Workspace → Twin → Approval.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Sticky in-page nav */}
      <SectionNav
        items={RESOURCES_SECTIONS.map((s) => ({ id: s.id, label: s.navLabel }))}
      />

      {/* Product learning */}
      <Section id="guides" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Product learning</span>
            <h2 className="heading-h2 mt-4">Learn the product, layer by layer.</h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
            {PRODUCT_LEARNING.map((c, i) => (
              <Reveal key={c.label} delay={i * 60}>
                <Link
                  to={c.to}
                  className="card-iw flex items-start gap-4 p-6 transition-colors hover:border-brand-highlight/40"
                >
                  <c.icon size={20} className="mt-1 shrink-0 text-brand-accent" />
                  <div>
                    <div className="text-[16px] font-semibold text-foreground">{c.label}</div>
                    <p className="mt-1 text-[14px] leading-relaxed text-text-secondary">{c.body}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* What's new */}
      <Section id="webinars">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">What\u2019s new</span>
            <h2 className="heading-h2 mt-4">What\u2019s new in IntegrateWise.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Three recent highlights. Read the full{" "}
              <Link to="/changelog" className="text-brand-accent hover:underline">
                Changelog
              </Link>{" "}
              for more.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {CHANGELOG_HIGHLIGHTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 60} className="card-iw p-6">
                <span className="badge-iw badge-iw-muted">[{c.tag}]</span>
                <h3 className="mt-3 text-[16px] font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">{c.why}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/changelog" className="btn-secondary-iw inline-flex">
              See full changelog <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Stories */}
      <Section id="one-pagers" alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Stories & strategy</span>
            <h2 className="heading-h2 mt-4">Stories and why we are building this.</h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
            {STORIES.map((c, i) => (
              <Reveal key={c.label} delay={i * 60}>
                <Link
                  to={c.to}
                  className="card-iw flex items-start gap-4 p-6 transition-colors hover:border-brand-highlight/40"
                >
                  <c.icon size={20} className="mt-1 shrink-0 text-brand-accent" />
                  <div>
                    <div className="text-[16px] font-semibold text-foreground">{c.label}</div>
                    <p className="mt-1 text-[14px] leading-relaxed text-text-secondary">{c.body}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Templates */}
      <Section id="getting-started">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Templates & walkthroughs</span>
            <h2 className="heading-h2 mt-4">See it in action.</h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {TEMPLATES.map((c, i) => (
              <Reveal key={c.label} delay={i * 60} className="card-iw p-6">
                <Users size={20} className="text-brand-accent" />
                <h3 className="mt-3 text-[16px] font-semibold text-foreground">{c.label}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">{c.body}</p>
                <span className="mt-4 inline-flex rounded-full border border-border bg-white/[0.02] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                  Coming soon
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCtaBand />
    </>
  );
}
