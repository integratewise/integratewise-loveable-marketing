import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SectionNav } from "@/components/site/SectionNav";
import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";
import { ArrowRight } from "lucide-react";
import { BLOG_SECTIONS, BLOG_POSTS, BLOG_CATEGORIES } from "@/content/blog-content";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — IntegrateWise" },
      {
        name: "description",
        content:
          "Stories about ending the Human API role: how scattered apps become Digital Memory, how Workspace replaces tab-switching, and how Twin proposes inside the Approval Gate.",
      },
      { property: "og:title", content: "Blog — IntegrateWise" },
      {
        property: "og:description",
        content:
          "Real-world stories about Digital Memory, Spine, Workspace, Twin, and Approval — written for operators, not generic AI thought-leadership.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section id="all" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
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
              and a CRM — and how Digital Memory, Workspace, Twin, and Approval show up in their
              day.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Sticky in-page nav */}
      <SectionNav
        items={BLOG_SECTIONS.map((s) => ({ id: s.id, label: s.navLabel }))}
      />

      {/* Categories */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">Four threads we keep pulling.</h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Every post connects back to one flow: scattered apps → Spine → Digital Memory →
              Workspace → Twin → Approval.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {BLOG_CATEGORIES.map((c, i) => (
              <Reveal key={c.tag} delay={i * 60} className="card-iw p-7">
                <span className="badge-iw badge-iw-muted">{c.tag}</span>
                <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">{c.blurb}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Product posts */}
      <section id="product">
        <Section>
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="heading-h2">Latest posts</h2>
              <p className="mt-4 text-[16px] text-text-secondary">
                Practical, operator-first writing. No abstract AI thought-leadership.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {BLOG_POSTS.filter((p) => p.category === "product").map((p, i) => (
                <Reveal key={p.slug} delay={i * 60} className="card-iw flex h-full flex-col p-7">
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
      </section>

      {/* Platform posts */}
      <section id="platform">
        <Section alt>
          <Container>
            <div className="grid gap-5 lg:grid-cols-3">
              {BLOG_POSTS.filter((p) => p.category === "platform").map((p, i) => (
                <Reveal key={p.slug} delay={i * 60} className="card-iw flex h-full flex-col p-7">
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
      </section>

      {/* Intelligence posts */}
      <section id="intelligence">
        <Section>
          <Container>
            <div className="grid gap-5 lg:grid-cols-3">
              {BLOG_POSTS.filter((p) => p.category === "intelligence").map((p, i) => (
                <Reveal key={p.slug} delay={i * 60} className="card-iw flex h-full flex-col p-7">
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
      </section>

      {/* Case Studies posts */}
      <section id="case-studies">
        <Section alt>
          <Container>
            <div className="grid gap-5 lg:grid-cols-3">
              {BLOG_POSTS.filter((p) => p.category === "case-studies").map((p, i) => (
                <Reveal key={p.slug} delay={i * 60} className="card-iw flex h-full flex-col p-7">
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
      </section>

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
