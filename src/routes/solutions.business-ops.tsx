import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionTemplate";

export const Route = createFileRoute("/solutions/business-ops")({
  head: () => ({
    meta: [
      { title: "Business Ops — Run the day from one screen." },
      {
        name: "description",
        content:
          "Founders, COOs, and finance leads across SaaS, agency, retail, and services run the day from one Workspace built on Org Memory.",
      },
      { property: "og:title", content: "Business Ops — IntegrateWise" },
      {
        property: "og:description",
        content: "Yesterday's revenue, open invoices, key risks, capacity — in one screen.",
      },
    ],
  }),
  component: BusinessOpsPage,
});

function BusinessOpsPage() {
  return (
    <SolutionPage
      preLabel="Solution · Business Ops"
      h1Lead="Run the day"
      h1Accent="from one screen."
      subcopy="Founders, owners, and operations leads across SaaS, services, retail and more all fight the same battle: spreadsheets and tabs before decisions. Business Ops gives you a daily Workspace built on your Org Memory."
      primaryCta={{ label: "Book a demo", kind: "demo" }}
      secondaryCtaHref="#mapper"
      secondaryCtaLabel="See it for your role"
      menu={[
        {
          label: "Function",
          links: [{ href: "#function-business-ops", label: "Business Ops" }],
        },
        {
          label: "Role",
          links: [
            { href: "#role-founder", label: "Founder" },
            { href: "#role-ops", label: "COO / Ops lead" },
            { href: "#role-finance", label: "Finance head" },
          ],
        },
        {
          label: "Industry",
          links: [
            { href: "#industry-saas", label: "SaaS" },
            { href: "#industry-agency", label: "Agency" },
            { href: "#industry-retail", label: "Retail" },
            { href: "#industry-services", label: "Services" },
          ],
        },
      ]}
      mapperTitle="See your Monday morning."
      roleOptions={[
        { value: "founder", label: "Founder" },
        { value: "ops", label: "COO / Ops lead" },
        { value: "finance", label: "Finance head" },
        { value: "gm", label: "General manager" },
      ]}
      industryOptions={[
        { value: "saas", label: "SaaS" },
        { value: "agency", label: "Agency" },
        { value: "retail", label: "Retail" },
        { value: "services", label: "Services" },
      ]}
      combos={[
        {
          role: "founder",
          industry: "agency",
          without: [
            "Monday starts with 5 spreadsheets — revenue, collections, hiring, utilisation, issues.",
            "Ask 3 different people for the same number.",
            "Meetings start late because numbers don't match.",
            "End the day still not knowing what actually moved over the weekend.",
          ],
          with: [
            "Business Workspace shows yesterday's revenue, open invoices, key risks, and capacity in one view.",
            "Org Memory holds all key metrics and changes; Twin prepares a short Monday brief.",
            "You open one screen and know what to talk about, without Excel.",
            "Every number is traceable back to the original tool — no spreadsheet rebuilds.",
          ],
        },
        {
          role: "founder",
          industry: "saas",
          without: [
            "Pull MRR from billing, churn from CRM, signups from analytics, hiring from a doc.",
            "Spend Monday rebuilding a status deck instead of shipping.",
            "Miss the one account that quietly slipped because nothing tied the signals together.",
          ],
          with: [
            "Workspace shows MRR, churn risks, pipeline, hiring, and key issues in one view.",
            "Twin links usage drops with email signals to flag at-risk accounts before churn.",
            "Org Memory keeps your last decisions and their outcomes — no more 'why did we do this?'",
          ],
        },
        {
          role: "ops",
          industry: "services",
          without: [
            "Project status across PM tool, billing, sheets, and team chats.",
            "Chase managers for utilisation and collection updates every week.",
            "Issues escalate before you see the early signal.",
          ],
          with: [
            "Ops Workspace shows projects, utilisation, collections, and open issues stitched together.",
            "Twin proposes which projects need attention and which collections are slipping.",
            "Decisions log into Org Memory so the next week starts where this one ended.",
          ],
        },
        {
          role: "finance",
          industry: "retail",
          without: [
            "Daily sales in POS, credit in a notebook, supplier payments in WhatsApp, GST in Tally.",
            "Reconciliation takes evenings, not minutes.",
            "Discover bounced payments days late.",
          ],
          with: [
            "Finance Workspace shows daily sales, credit outstanding, supplier dues, and GST status in one view.",
            "Org Memory keeps every payment event linked to its source.",
            "Twin flags payment failures and overdue credit — you approve reminders before they go out.",
          ],
        },
        {
          role: "gm",
          industry: "retail",
          without: [
            "Sales in POS, inventory in a separate tool, staff shifts in WhatsApp, complaints in email.",
            "Walk into the store unsure what's broken or what sold well yesterday.",
          ],
          with: [
            "Workspace shows yesterday's sales, low-stock alerts, staff schedule, and open complaints in one view.",
            "Twin proposes restocks and shift adjustments — you approve before anything changes.",
          ],
        },
      ]}
      sections={[
        {
          id: "function-business-ops",
          group: "Function",
          title: "One Workspace for business health.",
          body: [
            "One Workspace view for business health — driven by Org Memory from the Adaptive Spine.",
            "Revenue, collections, tickets, hiring, and key tasks pulled into one stitched overview.",
            "Twin prepares a morning brief; you approve which actions to run.",
          ],
        },
        {
          id: "role-founder",
          group: "Role",
          title: "For founders and owners.",
          body: [
            "Without: Monday spent rebuilding numbers in 5 spreadsheets before any real work happens.",
            "With: open one Workspace and see revenue, risks, capacity, and what changed over the weekend.",
            "Twin's morning brief becomes your weekly leadership ritual — you approve every action.",
          ],
        },
        {
          id: "role-ops",
          group: "Role",
          title: "For COOs and operations leads.",
          body: [
            "Without: chasing managers for utilisation, project status, and collections every week.",
            "With: one stitched Ops Workspace showing projects, utilisation, collections, and open issues.",
            "Twin highlights which projects, teams, or collections need attention this week.",
          ],
        },
        {
          id: "role-finance",
          group: "Role",
          title: "For finance and collections leads.",
          body: [
            "Without: reconciling sales, credit, payments, and GST across Tally, billing, sheets, and email.",
            "With: a Finance Workspace tied to Org Memory — every number traceable to its source.",
            "Twin proposes payment reminders and surfaces overdue credit — you approve before it's sent.",
          ],
        },
        {
          id: "industry-saas",
          group: "Industry",
          title: "Daily SaaS health.",
          body: [
            "MRR, churn signals, pipeline, hiring, and key issues stitched into one Workspace view.",
            "Twin connects usage drops with conversations to surface at-risk accounts early.",
            "Org Memory keeps decisions and outcomes — no more 'why did we choose that pricing?'",
          ],
        },
        {
          id: "industry-agency",
          group: "Industry",
          title: "Daily agency health.",
          body: [
            "Retainers, utilisation, invoices, project load — all stitched in one Business Workspace.",
            "Twin flags slipping retainers and overdue invoices, with evidence from email and WhatsApp.",
            "Org Memory keeps every client decision connected to people, projects, and money.",
          ],
        },
        {
          id: "industry-retail",
          group: "Industry",
          title: "Daily retail health.",
          body: [
            "Sales, inventory alerts, credit, staff shifts — in one Workspace tab, every morning.",
            "Twin proposes restocks, shift changes, and credit reminders before they become problems.",
            "All actions go through your Approval Gate before anything moves.",
          ],
        },
        {
          id: "industry-services",
          group: "Industry",
          title: "Daily services health.",
          body: [
            "Projects, collections, open tickets, and team load stitched together for service businesses.",
            "Twin surfaces slipping projects and overdue collections from Org Memory.",
            "You decide which actions Twin runs — nothing escapes the Approval Gate.",
          ],
        },
      ]}
      closeHeading="Walk into Monday with one screen, not five spreadsheets."
      closingPrimary={{ label: "Book a demo", kind: "demo" }}
    />
  );
}
