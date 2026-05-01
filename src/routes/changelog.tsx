import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SectionNav } from "@/components/site/SectionNav";
import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";
import { CHANGELOG, CHANGELOG_SECTIONS } from "@/content/changelog-content";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — IntegrateWise" },
      {
        name: "description",
        content:
          "How IntegrateWise is learning with you. Every update is logged by Spine, Memory, Workspace, Twin, or Approval — with what changed and why it matters.",
      },
      { property: "og:title", content: "Changelog — IntegrateWise" },
      {
        property: "og:description",
        content:
          "Updates grouped by month, tagged by layer. We never write \u201Cbug fixes and performance improvements\u201D — every entry ties back to the daily Human API work.",
      },
    ],
  }),
  component: ChangelogPage,
});

function tagClass() {
  return "rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-0.5 text-[11px] font-semibold text-brand-highlight";
}

function ChangelogPage() {
  return (
    <>
      {/* Hero */}
      <section id="latest" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <span
          aria-hidden
          className="orb orb-peach"
          style={{ width: 540, height: 540, top: -160, left: "55%" }}
        />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Changelog</span>
            <h1 className="heading-display mt-6">
              <span className="block">How IntegrateWise is</span>
              <span className="block text-gradient-hero">learning with you.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
              Every update is about one thing: helping you stop being the Human API. We log changes
              the way we think about the product \u2014 by Spine, Memory, Workspace, Twin, and
              Approval.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Sticky in-page nav */}
      <SectionNav
        items={CHANGELOG_SECTIONS.map((s) => ({ id: s.id, label: s.navLabel }))}
      />

      {/* All entries (latest) */}
      <Section alt>
        <Container>
          <div className="mx-auto max-w-3xl space-y-16">
            {CHANGELOG.map((block) => (
              <div key={block.month}>
                <Reveal>
                  <h2 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
                    {block.month}
                  </h2>
                </Reveal>
                <div className="mt-6 space-y-5">
                  {block.entries.map((e, i) => (
                    <Reveal key={e.title} delay={i * 60} className="card-iw p-6">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {e.tags.map((t) => (
                          <span key={t} className={tagClass()}>
                            [{t}]
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-3 text-[18px] font-semibold text-foreground">{e.title}</h3>

                      <div className="mt-4 grid gap-3 text-[14px] leading-relaxed text-text-secondary md:grid-cols-2">
                        <div>
                          <div className="text-[12px] font-semibold uppercase tracking-wider text-foreground/80">
                            What changed
                          </div>
                          <p className="mt-1">{e.what}</p>
                        </div>
                        <div>
                          <div className="text-[12px] font-semibold uppercase tracking-wider text-foreground/80">
                            Why it matters
                          </div>
                          <p className="mt-1">{e.why}</p>
                        </div>
                      </div>

                      {e.where && (
                        <div className="mt-4 rounded-md border border-border bg-white/[0.02] px-3 py-2 text-[13px] text-text-secondary">
                          <span className="font-semibold text-foreground/80">
                            Where you\u2019ll see it:{" "}
                          </span>
                          {e.where}
                        </div>
                      )}
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl text-center text-[14px] text-text-secondary">
            Looking for product concepts? Visit{" "}
            <Link to="/docs" className="text-brand-accent hover:underline">
              Docs
            </Link>
            {" or read stories on the "}
            <Link to="/blog" className="text-brand-accent hover:underline">
              Blog
            </Link>
            .
          </div>
        </Container>
      </Section>

      {/* Platform section */}
      <Section id="platform">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Platform</span>
            <h2 className="heading-h2 mt-4">Platform updates.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Spine, connectors, and Digital Memory changes.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-5">
            {CHANGELOG.flatMap((block) =>
              block.entries
                .filter((e) => e.tags.some((t) => t === "Spine" || t === "Digital Memory" || t === "Connectors"))
                .map((e, i) => (
                  <Reveal key={`platform-${e.title}`} delay={i * 60} className="card-iw p-6">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {e.tags.map((t) => (
                        <span key={t} className={tagClass()}>
                          [{t}]
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 text-[18px] font-semibold text-foreground">{e.title}</h3>
                    <div className="mt-4 grid gap-3 text-[14px] leading-relaxed text-text-secondary md:grid-cols-2">
                      <div>
                        <div className="text-[12px] font-semibold uppercase tracking-wider text-foreground/80">
                          What changed
                        </div>
                        <p className="mt-1">{e.what}</p>
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold uppercase tracking-wider text-foreground/80">
                          Why it matters
                        </div>
                        <p className="mt-1">{e.why}</p>
                      </div>
                    </div>
                    {e.where && (
                      <div className="mt-4 rounded-md border border-border bg-white/[0.02] px-3 py-2 text-[13px] text-text-secondary">
                        <span className="font-semibold text-foreground/80">
                          Where you\u2019ll see it:{" "}
                        </span>
                        {e.where}
                      </div>
                    )}
                  </Reveal>
                ))
            )}
          </div>
        </Container>
      </Section>

      {/* Product section */}
      <Section alt id="product">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Product</span>
            <h2 className="heading-h2 mt-4">Product updates.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Workspace views, navigation, and day-to-day improvements.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-5">
            {CHANGELOG.flatMap((block) =>
              block.entries
                .filter((e) => e.tags.some((t) => t === "Workspace" || t === "Solutions"))
                .map((e, i) => (
                  <Reveal key={`product-${e.title}`} delay={i * 60} className="card-iw p-6">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {e.tags.map((t) => (
                        <span key={t} className={tagClass()}>
                          [{t}]
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 text-[18px] font-semibold text-foreground">{e.title}</h3>
                    <div className="mt-4 grid gap-3 text-[14px] leading-relaxed text-text-secondary md:grid-cols-2">
                      <div>
                        <div className="text-[12px] font-semibold uppercase tracking-wider text-foreground/80">
                          What changed
                        </div>
                        <p className="mt-1">{e.what}</p>
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold uppercase tracking-wider text-foreground/80">
                          Why it matters
                        </div>
                        <p className="mt-1">{e.why}</p>
                      </div>
                    </div>
                    {e.where && (
                      <div className="mt-4 rounded-md border border-border bg-white/[0.02] px-3 py-2 text-[13px] text-text-secondary">
                        <span className="font-semibold text-foreground/80">
                          Where you\u2019ll see it:{" "}
                        </span>
                        {e.where}
                      </div>
                    )}
                  </Reveal>
                ))
            )}
          </div>
        </Container>
      </Section>

      {/* Twin section */}
      <Section id="twin">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Twin</span>
            <h2 className="heading-h2 mt-4">Twin &amp; Approval updates.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Intelligence layer, confidence scores, and Approval Gate changes.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-5">
            {CHANGELOG.flatMap((block) =>
              block.entries
                .filter((e) => e.tags.some((t) => t === "Twin" || t === "Approval"))
                .map((e, i) => (
                  <Reveal key={`twin-${e.title}`} delay={i * 60} className="card-iw p-6">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {e.tags.map((t) => (
                        <span key={t} className={tagClass()}>
                          [{t}]
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 text-[18px] font-semibold text-foreground">{e.title}</h3>
                    <div className="mt-4 grid gap-3 text-[14px] leading-relaxed text-text-secondary md:grid-cols-2">
                      <div>
                        <div className="text-[12px] font-semibold uppercase tracking-wider text-foreground/80">
                          What changed
                        </div>
                        <p className="mt-1">{e.what}</p>
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold uppercase tracking-wider text-foreground/80">
                          Why it matters
                        </div>
                        <p className="mt-1">{e.why}</p>
                      </div>
                    </div>
                    {e.where && (
                      <div className="mt-4 rounded-md border border-border bg-white/[0.02] px-3 py-2 text-[13px] text-text-secondary">
                        <span className="font-semibold text-foreground/80">
                          Where you\u2019ll see it:{" "}
                        </span>
                        {e.where}
                      </div>
                    )}
                  </Reveal>
                ))
            )}
          </div>
        </Container>
      </Section>

      {/* Connectors section */}
      <Section alt id="connectors">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge-iw badge-iw-muted">Connectors</span>
            <h2 className="heading-h2 mt-4">Connector updates.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              New integrations, ingestion improvements, and schema changes.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-5">
            {CHANGELOG.flatMap((block) =>
              block.entries
                .filter((e) => e.tags.some((t) => t === "Connectors" || t === "Spine"))
                .map((e, i) => (
                  <Reveal key={`connectors-${e.title}`} delay={i * 60} className="card-iw p-6">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {e.tags.map((t) => (
                        <span key={t} className={tagClass()}>
                          [{t}]
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 text-[18px] font-semibold text-foreground">{e.title}</h3>
                    <div className="mt-4 grid gap-3 text-[14px] leading-relaxed text-text-secondary md:grid-cols-2">
                      <div>
                        <div className="text-[12px] font-semibold uppercase tracking-wider text-foreground/80">
                          What changed
                        </div>
                        <p className="mt-1">{e.what}</p>
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold uppercase tracking-wider text-foreground/80">
                          Why it matters
                        </div>
                        <p className="mt-1">{e.why}</p>
                      </div>
                    </div>
                    {e.where && (
                      <div className="mt-4 rounded-md border border-border bg-white/[0.02] px-3 py-2 text-[13px] text-text-secondary">
                        <span className="font-semibold text-foreground/80">
                          Where you\u2019ll see it:{" "}
                        </span>
                        {e.where}
                      </div>
                    )}
                  </Reveal>
                ))
            )}
          </div>
        </Container>
      </Section>

      <ClosingCtaBand />
    </>
  );
}
