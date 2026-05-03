import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { AttentionLayer, type AttentionScenario } from "@/components/site/AttentionLayer";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { INDUSTRIES } from "@/routes/solutions.by-industry";

interface IndustryDetail {
  name: string;
  tools: string;
  attention: AttentionScenario;
  preparedAction: string;
}

const DETAILS: Record<string, IndustryDetail> = {
  saas: {
    name: "SaaS",
    tools: "Salesforce, HubSpot, Stripe, Zendesk, Slack",
    attention: {
      signals: [
        {
          entity: "Acme Corp (Enterprise)",
          change: "Usage down 32% · 2 tickets · Renewal in 21 days",
          severity: "high",
        },
        { entity: "DataVault", change: "Champion left last week", severity: "medium" },
        { entity: "RetailNest", change: "QBR overdue 47 days", severity: "medium" },
      ],
    },
    preparedAction: "Schedule renewal save-call with Sarah + draft 1-page health brief.",
  },
  ecommerce: {
    name: "eCommerce",
    tools: "Shopify, Stripe, Klaviyo, Zendesk, Gorgias",
    attention: {
      signals: [
        {
          entity: "SKU-2104 (best-seller)",
          change: "Stock at 6 days · supplier lead time 9 days",
          severity: "high",
        },
        { entity: "Cart abandons", change: "Up 18% week-over-week", severity: "medium" },
        { entity: "Order #88241", change: "Refund requested · VIP customer", severity: "medium" },
      ],
    },
    preparedAction: "Place reorder + open VIP escalation + draft win-back flow.",
  },
  healthcare: {
    name: "Healthcare",
    tools: "EHR, scheduling, billing, patient comms",
    attention: {
      signals: [
        {
          entity: "Dr. Patel · Tue clinic",
          change: "3 patients overdue for follow-up",
          severity: "high",
        },
        { entity: "Compliance audit", change: "2 records missing consent forms", severity: "high" },
        { entity: "Insurance claim #4421", change: "Pending 9 days", severity: "medium" },
      ],
    },
    preparedAction: "Send patient reminders + flag missing consents + escalate stalled claim.",
  },
  fintech: {
    name: "FinTech",
    tools: "Core ledger, payment rails, KYC vendor, support",
    attention: {
      signals: [
        {
          entity: "Txn cluster · Merchant 7821",
          change: "Velocity spike — 4× normal in 2 hours",
          severity: "high",
        },
        { entity: "KYC review", change: "11 cases > 48h SLA", severity: "medium" },
        { entity: "Reconciliation", change: "$1,240 drift on EOD batch", severity: "medium" },
      ],
    },
    preparedAction: "Open fraud review + reassign KYC queue + prep variance memo.",
  },
  manufacturing: {
    name: "Manufacturing",
    tools: "ERP, MES, supplier portal, maintenance",
    attention: {
      signals: [
        {
          entity: "Line 3 · CNC #14",
          change: "Vibration trend exceeds threshold — failure window 5–9 days",
          severity: "high",
        },
        {
          entity: "PO-7711",
          change: "Supplier delayed 4 days · affects 2 customer orders",
          severity: "high",
        },
        { entity: "Inventory raw stock", change: "Resin below reorder point", severity: "medium" },
      ],
    },
    preparedAction: "Schedule maintenance window + notify customers + place expedited PO.",
  },
  "professional-services": {
    name: "Professional Services",
    tools: "Project tracker, time-billing, CRM, docs",
    attention: {
      signals: [
        {
          entity: "Project: Halberd Co",
          change: "12% over budget · milestone slipping by 6 days",
          severity: "high",
        },
        { entity: "Utilisation", change: "Team A at 93% next 2 weeks", severity: "medium" },
        {
          entity: "Invoice draft",
          change: "$48K unbilled hours from last sprint",
          severity: "medium",
        },
      ],
    },
    preparedAction: "Open client status note + flag bench plan + queue invoice.",
  },
};

export const Route = createFileRoute("/solutions/by-industry/$industry")({
  loader: ({ params }) => {
    const detail = DETAILS[params.industry];
    if (!detail) throw notFound();
    return { detail, slug: params.industry };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.detail.name ?? "Industry";
    return {
      meta: [
        { title: `${name} — IntegrateWise Solutions` },
        {
          name: "description",
          content: `Your ${name} team, powered by one Memory that never resets. Within seconds, see what changed.`,
        },
        { property: "og:title", content: `${name} — IntegrateWise` },
        {
          property: "og:description",
          content: `${name} teams stop rebuilding context. Attention Layer surfaces what changed. Twin prepares the next action.`,
        },
      ],
    };
  },
  component: IndustryDetailPage,
  notFoundComponent: () => (
    <Section orbs>
      <Container>
        <div className="mx-auto max-w-md text-center">
          <h1 className="heading-h1">Industry not found</h1>
          <p className="mt-4 text-text-secondary">We haven't built this industry profile yet.</p>
          <Link to="/solutions/industry" className="btn-primary-iw mt-6 inline-flex">
            Browse industries
          </Link>
        </div>
      </Container>
    </Section>
  ),
  errorComponent: ({ error }) => (
    <Section>
      <Container>
        <div className="mx-auto max-w-md text-center">
          <h1 className="heading-h1">Something went wrong</h1>
          <p className="mt-4 text-text-secondary">{error.message}</p>
        </div>
      </Container>
    </Section>
  ),
});

function IndustryDetailPage() {
  const { detail } = Route.useLoaderData();
  const { open } = useDemoModal();

  return (
    <>
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">{detail.name} Solutions</Badge>
            <h1 className="heading-h1 mt-5">
              Your {detail.name} team,{" "}
              <span className="text-gradient-hero">powered by Memory that never resets.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              {detail.name} teams rebuild context daily across {detail.tools}. Within seconds of
              opening the Workbench, you see what changed. Twin connects, explains, and prepares the
              next action.
            </p>
          </div>

          <Reveal className="mx-auto mt-10 max-w-3xl">
            <AttentionLayer scenario={detail.attention} />
          </Reveal>

          <Reveal className="mx-auto mt-6 max-w-3xl card-iw p-5">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
              Twin · Prepared
            </p>
            <p className="mt-2 text-[15px] text-foreground">{detail.preparedAction}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" className="btn-primary-iw !px-4 !py-2.5 text-[14px]">
                Approve
              </button>
              <button type="button" className="btn-secondary-iw !px-4 !py-2.5 text-[14px]">
                Edit
              </button>
              <button type="button" className="btn-secondary-iw !px-4 !py-2.5 text-[14px]">
                Reject
              </button>
            </div>
          </Reveal>

          <Reveal className="mt-10 text-center">
            <button
              type="button"
              onClick={() => open(`Industry · ${detail.name}`)}
              className="btn-primary-iw"
            >
              Book a demo for {detail.name} <ArrowRight size={16} />
            </button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

export type { IndustryDetail };
export const __test_INDUSTRIES = INDUSTRIES;
