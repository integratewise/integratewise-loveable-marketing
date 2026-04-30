import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { HashSlider, type HashSlide } from "@/components/site/HashSlider";
import { useDemoModal } from "@/components/site/demo-modal-context";

export const Route = createFileRoute("/solutions/industry")({
  head: () => ({
    meta: [
      { title: "Solutions by Industry — One Memory, different industries." },
      {
        name: "description",
        content:
          "SaaS, Services, Manufacturing, Retail, Professional Services, Finance — same Spine, Digital Memory, and Twin, shaped for how your industry actually works.",
      },
      {
        property: "og:title",
        content: "IntegrateWise — Solutions by Industry",
      },
      {
        property: "og:description",
        content: "One Memory, different industries.",
      },
    ],
  }),
  component: IndustrySliderPage,
});

interface IndustryDef {
  id: string; // hash slug
  name: string;
  oneLiner: string;
  tools: string[];
  signals: string[];
  twin: string;
}

const INDUSTRIES: IndustryDef[] = [
  {
    id: "saas",
    name: "SaaS",
    oneLiner: "Renewals, expansion, adoption — connected to product usage and conversations.",
    tools: ["HubSpot / Salesforce", "Stripe", "Intercom / Zendesk", "Slack", "Product analytics"],
    signals: [
      "Usage drop on a renewing account",
      "Champion goes quiet across email + Slack",
      "Expansion signal: new seats added in product",
    ],
    twin: "Twin proposes a renewal escalation with the usage chart, the budget-freeze email, and the approved escalation rule attached as evidence.",
  },
  {
    id: "agency",
    name: "Services & Agencies",
    oneLiner: "Projects, utilisation, and billing — without spreadsheet gymnastics.",
    tools: ["Asana / ClickUp / Linear", "Harvest / Toggl", "QuickBooks / Xero", "Slack", "Gmail"],
    signals: [
      "Project burning hours faster than scope",
      "Retainer client gone quiet for 9 days",
      "Invoice issued but unpaid past 14 days",
    ],
    twin: "Twin drafts a status note for the client, a re-scope request internally, and an updated forecast — every step gated by approval.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Trade",
    oneLiner: "Orders, shipments, and exceptions stitched across ERP, logistics, and email.",
    tools: [
      "ERP / inventory",
      "Shipping providers",
      "Email / WhatsApp with vendors",
      "Tally",
      "CRM",
    ],
    signals: [
      "Shipment delayed at port",
      "PO acknowledged late by supplier",
      "Customer disputed quantity received",
    ],
    twin: "Twin proposes a customer update, a supplier follow-up, and an internal task to the planner — with the original messages and PO attached.",
  },
  {
    id: "retail",
    name: "Retail & Ecommerce",
    oneLiner: "Stock, orders, returns, and support in one operating picture.",
    tools: [
      "Shopify / WooCommerce",
      "Stripe / Razorpay",
      "Zendesk / Gorgias",
      "Inventory",
      "WhatsApp",
    ],
    signals: [
      "SKU about to stockout in 3 days",
      "Spike in return requests for one product",
      "Cart abandonment up 18% week-over-week",
    ],
    twin: "Twin assembles the morning brief: restock list, refund queue, and a recommended creative test — you approve which to run.",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    oneLiner: "Engagements, billing, and relationships — the long tail of client work.",
    tools: ["Practice mgmt", "Invoicing", "Email", "Document store", "CRM"],
    signals: [
      "Engagement hours over budget for one matter",
      "Outstanding invoices past 30 days",
      "New filing or document received from client",
    ],
    twin: "Twin drafts the partner brief: top-3 client risks, this week's deadlines, and recommended next contacts — with evidence per row.",
  },
  {
    id: "finance",
    name: "Finance",
    oneLiner: "Revenue, risk, collections, and cash — one source of truth.",
    tools: ["GL / accounting", "AR / AP", "Bank feeds", "Treasury", "CRM"],
    signals: [
      "AR ageing crossed threshold for a key account",
      "Cash runway moved by more than 5%",
      "FX exposure changed materially",
    ],
    twin: "Twin prepares the weekly cash brief and proposes collections actions per account — every email goes through approval.",
  },
];

function IndustrySliderPage() {
  const { open } = useDemoModal();

  const slides: HashSlide[] = INDUSTRIES.map((ind) => ({
    id: ind.id,
    label: ind.name,
    render: () => (
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <Badge variant="muted">{ind.name}</Badge>
            <h2 className="heading-h2 mt-4">
              {ind.name} on <span className="text-gradient-hero">accumulating Digital Memory.</span>
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">{ind.oneLiner}</p>

            <p className="mt-6 text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
              Tools we stitch
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {ind.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-elevated/40 px-2.5 py-1 text-[12px] text-foreground/85"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => open(`Industry · ${ind.name}`)}
                className="btn-primary-iw"
              >
                Book a demo for {ind.name} <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-iw p-6" style={{ background: "var(--bg-surface)" }}>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                Signals you'll see
              </p>
              <ul className="mt-3 space-y-2 text-[14px] text-foreground/90">
                {ind.signals.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-border bg-elevated/50 px-3 py-2.5"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
                  What Twin proposes
                </p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/90">
                  {ind.twin}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    ),
  }));

  return (
    <>
      {/* Hero */}
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">By Industry</Badge>
            <h1 className="heading-h1 mt-5">
              One Memory, <span className="text-gradient-hero">different industries.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              Same Spine. Same Digital Memory accumulating across Truth, Context, and approved
              Session Summaries. The shape of your day changes by industry — the foundation does
              not.
            </p>
          </div>
        </Container>
      </Section>

      {/* Slider */}
      <Section>
        <HashSlider slides={slides} ariaLabel="Industries" />
      </Section>

      {/* Closing */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">
              One Spine. Six industries. <span className="text-brand-accent">Same Memory.</span>
            </h2>
            <p className="mx-auto mt-4 text-[16px] leading-relaxed text-text-secondary">
              Memory compounds. Context improves. Decisions get faster — no matter the industry.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open("By Industry · closing")} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
