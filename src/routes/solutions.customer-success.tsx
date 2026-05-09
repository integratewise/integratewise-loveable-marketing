import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionTemplate";
import { SolutionsLayout } from "@/components/site/SolutionsLayout";

const PERSONAS = [
  { key: "founder", label: "Founder" },
  { key: "executive", label: "Executive" },
  { key: "operator", label: "Operator" },
] as const;

const INDUSTRIES = [
  { key: "saas", label: "SaaS" },
  { key: "services", label: "Services" },
  { key: "manufacturing", label: "Manufacturing" },
  { key: "retail", label: "Retail" },
  { key: "finance", label: "Finance" },
  { key: "freelance", label: "Freelance" },
] as const;

export const Route = createFileRoute("/solutions/customer-success")({
  head: () => ({
    meta: [
      { title: "Customer Success — Your entire business. One screen. Real-time." },
      {
        name: "description",
        content:
          "For founders, CEOs, COOs, CFOs, CTOs. IntegrateWise unifies revenue, cash, team capacity, and support — delivers your morning briefing and detects cross-functional patterns before they become problems.",
      },
      {
        property: "og:title",
        content: "Customer Success — IntegrateWise",
      },
      {
        property: "og:description",
        content:
          "Your entire business in one screen. 8 hours saved per week. 40% faster decisions. ±5% forecast accuracy.",
      },
    ],
  }),
  component: CustomerSuccessPage,
});

function CustomerSuccessPage() {
  return (
    <SolutionsLayout personaOptions={PERSONAS} industryOptions={INDUSTRIES}>
      <SolutionPage
        preLabel="Solution · For founders, CEOs, COOs, CFOs, CTOs"
        h1Lead="Your entire business."
        h1Accent="One screen. Real-time."
        subcopy="Revenue in Salesforce. Cash in QuickBooks. Team in spreadsheets. Support in Zendesk. IntegrateWise unifies it all — delivers your morning briefing and detects cross-functional patterns before they become problems."
        primaryCta={{ label: "Book a demo", kind: "demo" }}
        secondaryCtaHref="#mapper"
        secondaryCtaLabel="See ops dashboard"
        menu={[
          {
            label: "Function",
            links: [{ href: "#function-customer-success", label: "Customer Success (Exec)" }],
          },
          {
            label: "Role",
            links: [
              { href: "#role-founder", label: "Founders & CEOs" },
              { href: "#role-coo", label: "COOs" },
              { href: "#role-cfo", label: "CFOs" },
              { href: "#role-cto", label: "CTOs" },
            ],
          },
          {
            label: "Industry",
            links: [
              { href: "#industry-saas", label: "SaaS" },
              { href: "#industry-services", label: "Services" },
              { href: "#industry-manufacturing", label: "Manufacturing & Retail" },
            ],
          },
        ]}
        mapperTitle="See a day in your role."
        roleOptions={[
          { value: "founder", label: "Founder / CEO" },
          { value: "coo", label: "COO" },
          { value: "cfo", label: "CFO" },
          { value: "cto", label: "CTO" },
        ]}
        industryOptions={[
          { value: "saas", label: "SaaS" },
          { value: "services", label: "Services" },
          { value: "manufacturing", label: "Manufacturing" },
        ]}
        combos={[
          {
            role: "founder",
            industry: "saas",
            without: [
              "Spend 8 hours/week pulling reports from 6 systems before every leadership meeting.",
              "Learn about churn spikes only after they've compounded across departments.",
              "Forecast misses by ±20% because cross-functional signals are buried in silos.",
              "Get blindsided by board questions you should have seen coming.",
            ],
            with: [
              "Morning briefing in 3 minutes — entire business status before your first meeting.",
              "Ops Dashboard surfaces revenue, cash, churn, and team health on one screen, real-time.",
              "Twin detects cross-functional patterns (revenue ↔ churn, support ↔ product) before damage compounds.",
              "Forecast tightens to ±5% because every signal lands in one Memory, not six dashboards.",
            ],
          },
          {
            role: "coo",
            industry: "services",
            without: [
              "Reconcile project status, utilisation, and billing across PSA, sheets, and email every Monday.",
              "Capacity issues surface only when a delivery lead escalates.",
              "Operational decisions made on stale weekly reports, not real-time signal.",
            ],
            with: [
              "One Ops Dashboard shows utilisation, project health, and billing — refreshed continuously.",
              "Twin flags capacity strain and slipping projects before clients feel it.",
              "Decisions move from weekly cadence to daily — 40% faster on operational calls.",
            ],
          },
          {
            role: "cfo",
            industry: "saas",
            without: [
              "Cash position lives in QuickBooks; revenue lives in Salesforce; collections live in spreadsheets.",
              "Forecast variance widens every quarter because pipeline and cash never reconcile until close.",
              "Spend Friday building the same board pack from 6 sources.",
            ],
            with: [
              "Cash, revenue, AR, and runway in one stitched view — Memory reconciles continuously.",
              "Twin highlights forecast deltas and collection risk weekly, with evidence from every tool.",
              "Board pack opens as a single Workbench tab — no Friday rebuild ritual.",
            ],
          },
          {
            role: "cto",
            industry: "saas",
            without: [
              "Engineering signals (incidents, deploys, capacity) sit in different tools from product and revenue.",
              "Can't tie a churn spike to last month's release without a 2-week investigation.",
              "Architecture decisions made without seeing operational impact across functions.",
            ],
            with: [
              "Engineering, product, and customer signals stitched in one Memory — incidents tied to revenue impact.",
              "Twin correlates deploys with support volume, churn, and revenue automatically.",
              "Architecture and capacity calls grounded in cross-functional evidence, not anecdote.",
            ],
          },
        ]}
        sections={[
          {
            id: "function-customer-success",
            group: "Function",
            title: "Customer Success — at the executive layer.",
            body: [
              "This is not the CSM seat (that's Account Success). This is the founder/CEO/COO/CFO/CTO seat: keeping the entire customer-facing business healthy in real time.",
              "Same Spine ingests revenue, cash, team capacity, support, and product signals into one governed Memory.",
              "The Ops Dashboard is your single screen — Twin watches the cross-functional patterns and surfaces what needs your call.",
            ],
          },
          {
            id: "role-founder",
            group: "Role",
            title: "For founders and CEOs.",
            body: [
              "Without: 8 hours/week pulling context from 6 systems. Forecasts miss by 20%. Surprises in every board meeting.",
              "With: morning briefing in 3 minutes. Ops Dashboard refreshed continuously. ±5% forecast accuracy. Zero surprises.",
              "Twin connects revenue trends, churn signals, cash position, and team health — proposing what to act on, you approve.",
            ],
          },
          {
            id: "role-coo",
            group: "Role",
            title: "For COOs.",
            body: [
              "Without: weekly reconciliation of project, utilisation, billing, and capacity across PSA + sheets + email.",
              "With: one Ops Dashboard surfacing operational health continuously — capacity strain flagged before client impact.",
              "Twin proposes staffing and prioritisation moves with full evidence; every action is approval-gated.",
            ],
          },
          {
            id: "role-cfo",
            group: "Role",
            title: "For CFOs.",
            body: [
              "Without: cash, revenue, AR, and forecast live in different systems and reconcile only at close.",
              "With: a single Workbench view ties pipeline, cash, AR, and runway — Memory reconciles continuously.",
              "Twin highlights forecast variance and collection risk weekly, with line-item evidence from every source.",
            ],
          },
          {
            id: "role-cto",
            group: "Role",
            title: "For CTOs.",
            body: [
              "Without: engineering signals (incidents, deploys, capacity) sit far from product and revenue context.",
              "With: deploys, incidents, support volume, churn, and revenue stitched into one Memory.",
              "Twin correlates engineering events with downstream impact — architecture calls grounded in cross-functional evidence.",
            ],
          },
          {
            id: "industry-saas",
            group: "Industry",
            title: "For SaaS leadership teams.",
            body: [
              "MRR, ARR, churn, NRR, cash burn, runway, support volume, and product engagement — one screen, one Memory.",
              "Twin surfaces revenue-churn correlations, cohort risk, and collection slips before they hit the board pack.",
              "Forecast variance tightens because every signal compounds in Memory, not in a static weekly report.",
            ],
          },
          {
            id: "industry-services",
            group: "Industry",
            title: "For services and consulting firms.",
            body: [
              "Project health, utilisation, retainer status, AR, and team capacity stitched per client and per practice.",
              "Twin flags slipping retainers, capacity strain, and revenue concentration risk — with full evidence.",
              "Operational cadence shifts from weekly reconciliation to daily decisions on real-time signal.",
            ],
          },
          {
            id: "industry-manufacturing",
            group: "Industry",
            title: "For manufacturing and retail leadership.",
            body: [
              "Orders, shipments, inventory, exceptions, AR, and team capacity — unified across ERP, ops, finance, and support.",
              "Twin connects supply-chain events to revenue impact and cash timing automatically.",
              "Leadership decisions stop waiting for the Monday ops report — signal is continuous.",
            ],
          },
        ]}
        closeHeading="Stop being the human API between your tools. Run the entire business from one screen."
        closingPrimary={{ label: "Book a demo", kind: "demo" }}
      />
    </SolutionsLayout>
  );
}
