import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCtaBand } from "@/components/site/ClosingCtaBand";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — IntegrateWise" },
      {
        name: "description",
        content:
          "How IntegrateWise is learning with you. Every update is logged by Spine, Memory, Workbench, Twin, or Approval — with what changed and why it matters.",
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

interface Entry {
  tags: string[];
  title: string;
  what: string;
  why: string;
  where?: string;
}

interface MonthBlock {
  month: string;
  entries: Entry[];
}

const CHANGELOG: MonthBlock[] = [
  {
    month: "April 2026",
    entries: [
      {
        tags: ["Workbench", "Account Success"],
        title: "GST filings now visible next to account revenue.",
        what: "Accounts & Revenue view in the Workbench now shows GST filing status and due dates next to invoicing and ARR for each client.",
        why: "CAs and founders no longer have to open Tally and Sheets just to see who is late and how much is at risk \u2014 the full picture is visible in one stitched client view.",
        where: "In the Account Success Workbench under \u2018Accounts & Revenue\u2019.",
      },
      {
        tags: ["Spine", "Digital Memory"],
        title: "Spine schema now captures \u2018budget freeze\u2019 email context.",
        what: "The Spine now recognises \u2018budget freeze\u2019 phrases in email threads and stores them as Context in Digital Memory.",
        why: "When Twin surfaces churn risk, it can now show the exact budget-freeze emails in the Evidence list. This makes it easier to explain why you are escalating a renewal, before you approve.",
        where: "In Evidence panels across Account Success and Business Ops Workbenches.",
      },
      {
        tags: ["The Twin", "Approval"],
        title: "Twin proposals always show Truth/Context/Session breakdown.",
        what: "Every Twin proposal now clearly labels which evidence came from Truth (records), Context (emails/chats), and Session Summaries (approved AI knowledge).",
        why: "You can see at a glance what is data, what is communication, and what is AI summary before you approve. This keeps AI separate from Memory and strengthens trust in each decision.",
        where: "In the \u2018Why \u2014 linked evidence\u2019 section of Approval Gate modals.",
      },
    ],
  },
  {
    month: "March 2026",
    entries: [
      {
        tags: ["Spine"],
        title: "Razorpay refund events now flow into Digital Memory.",
        what: "Refund events from Razorpay are ingested as Truth and linked to the original invoice and customer record.",
        why: "Account leads can finally see refund history next to revenue \u2014 no more switching between Razorpay and Sheets to confirm what was actually returned.",
        where: "In Account detail pages and Business Ops dashboards.",
      },
      {
        tags: ["Workbench", "Solutions"],
        title: "Personal Ops waitlist enabled.",
        what: "The Personal Ops card on the Solutions page now opens a clean waitlist form instead of a demo CTA.",
        why: "Personal Ops is launching after the Account Success and Business Ops rollouts \u2014 the waitlist keeps interested users in the loop without overpromising.",
      },
      {
        tags: ["Approval"],
        title: "Audit log now exports to CSV.",
        what: "Every approval, edit, and reject can be exported with timestamp, user, evidence count, and confidence score.",
        why: "Security and compliance teams can review AI activity outside the product, without losing any context.",
        where: "Settings \u2192 Approval audit log.",
      },
    ],
  },
  {
    month: "February 2026",
    entries: [
      {
        tags: ["The Twin"],
        title: "Confidence scores now include source breakdown.",
        what: "Twin confidence is now shown with the percentage contributed by Truth, Context, and Session Summaries separately.",
        why: "When two sources disagree, you can see exactly where the doubt is coming from before you approve or reject.",
      },
      {
        tags: ["Spine", "Digital Memory"],
        title: "WhatsApp Business chats now contribute Context.",
        what: "Approved WhatsApp threads from connected business numbers flow into Digital Memory as Context, with sender, account, and timestamp preserved.",
        why: "For SMB India and FZE Dubai teams, a huge share of customer reality lives in WhatsApp \u2014 it now lives in Memory too, so it stops being lost.",
      },
    ],
  },
];

function tagClass() {
  return "rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-0.5 text-[11px] font-semibold text-brand-highlight";
}

function ChangelogPage() {
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
            <span className="badge-iw badge-iw-muted">Changelog</span>
            <h1 className="heading-display mt-6">
              <span className="block">How IntegrateWise is</span>
              <span className="block text-gradient-hero">learning with you.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
              Every update is about one thing: helping you stop being the Human API. We log changes
              the way we think about the product \u2014 by Spine, Memory, Workbench, Twin, and
              Approval.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Entries */}
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

      <ClosingCtaBand />
    </>
  );
}
