import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionTemplate";

export const Route = createFileRoute("/solutions/account-success")({
  head: () => ({
    meta: [
      { title: "Account Success — One client story. Every tool." },
      {
        name: "description",
        content:
          "Whether you are a CSM, CA, agency owner, or freelancer — Account Success stitches every account's story from your Digital Memory.",
      },
      { property: "og:title", content: "Account Success — IntegrateWise" },
      {
        property: "og:description",
        content: "One stitched view per client. No more tab-hunting.",
      },
    ],
  }),
  component: AccountSuccessPage,
});

function AccountSuccessPage() {
  return (
    <SolutionPage
      preLabel="Solution · Account Success"
      h1Lead="One client story."
      h1Accent="Every tool."
      subcopy="Whether you are a CSM, CA, agency owner, or freelancer, you need one place to see the full story for every account. Account Success stitches it together from your Digital Memory — so you stop hunting across tools."
      primaryCta={{ label: "Book a demo", kind: "demo" }}
      secondaryCtaHref="#mapper"
      secondaryCtaLabel="Explore for your role"
      menu={[
        {
          label: "Function",
          links: [{ href: "#function-account-success", label: "Account Success" }],
        },
        {
          label: "Role",
          links: [
            { href: "#role-csm", label: "CSMs" },
            { href: "#role-ca", label: "CAs & tax pros" },
            { href: "#role-agency", label: "Agencies" },
          ],
        },
        {
          label: "Industry",
          links: [
            { href: "#industry-saas", label: "SaaS" },
            { href: "#industry-finserv", label: "CA / financial services" },
            { href: "#industry-agency", label: "Agencies / services" },
          ],
        },
      ]}
      mapperTitle="See a day in your role."
      roleOptions={[
        { value: "csm", label: "CSM" },
        { value: "ca", label: "CA" },
        { value: "agency", label: "Agency owner" },
        { value: "freelancer", label: "Freelance consultant" },
      ]}
      industryOptions={[
        { value: "saas", label: "SaaS" },
        { value: "ca-tax", label: "CA & tax" },
        { value: "services", label: "Services & agencies" },
      ]}
      combos={[
        {
          role: "csm",
          industry: "saas",
          without: [
            "Open CRM, product analytics, ticketing, email, Slack — 6 tools before your first call.",
            "Dig for last usage trend, recent tickets, billing status — all in different tabs.",
            "Miss early risk signals because nothing shows the full picture.",
            "Spend 45 minutes building a one-off prep doc for each big account review.",
          ],
          with: [
            "Account Workspace shows usage, tickets, billing, and key emails in one client view.",
            "Digital Memory stores all past renewals, escalations, and notes in one place.",
            "Twin flags churn-risk signals and suggests next steps before the call.",
            "Prep becomes opening the account in Workspace — not building a new doc.",
          ],
        },
        {
          role: "ca",
          industry: "ca-tax",
          without: [
            "Track filings in Excel, notices in email, payments in Tally, chats on WhatsApp.",
            "Re-build the same client status sheet every Monday morning.",
            "Miss a notice deadline because it was buried in a Gmail thread.",
            "Spend evenings reconciling who paid, who didn't, and what's pending.",
          ],
          with: [
            "Client Workspace shows filings, notices, invoices, and chats in one view per client.",
            "Digital Memory tracks every notice, deadline, and payment across Tally, email, and WhatsApp.",
            "Twin highlights upcoming filings and overdue payments before they slip.",
            "One screen replaces the Monday morning reconciliation ritual.",
          ],
        },
        {
          role: "agency",
          industry: "services",
          without: [
            "Retainers in spreadsheets, deliverables in Notion, invoices in QuickBooks, chats on WhatsApp.",
            "Don't realise a retainer is at risk until the client emails saying 'pause'.",
            "Project status meetings start with 20 minutes of catching up.",
            "Owner becomes the Human API between team, client, and books.",
          ],
          with: [
            "Account Workspace shows retainer health, project status, invoices, and chats in one view.",
            "Digital Memory connects every project, message, and payment per client.",
            "Twin flags slipping retainers and proposes outreach before clients churn.",
            "Project meetings open with a single Workspace tab — no catch-up needed.",
          ],
        },
        {
          role: "freelancer",
          industry: "services",
          without: [
            "Juggle 5 clients across email, WhatsApp, Notion, and a basic invoicing app.",
            "Forget which client owes what until you check three different inboxes.",
            "Lose context every time you switch between projects.",
          ],
          with: [
            "One Workspace shows every client's status, last message, and open invoice.",
            "Digital Memory keeps all your conversations and decisions per client.",
            "Twin reminds you who needs a follow-up — you approve before sending.",
          ],
        },
      ]}
      sections={[
        {
          id: "function-account-success",
          group: "Function",
          title: "Account Success that spans roles and industries.",
          body: [
            "Same Spine for all relationship owners — whether you manage tax clients, SaaS accounts, or agency retainers.",
            "Digital Memory holds invoices, payments, tickets, messages, and notes for each client.",
            "The Account Success Workspace shows one stitched story per account, with risk and next steps.",
          ],
        },
        {
          id: "role-csm",
          group: "Role",
          title: "For CSMs (SaaS, B2B).",
          body: [
            "Without: hunting across CRM, product analytics, support, billing, and Slack before every call.",
            "With: one Workspace per account showing usage trend, open tickets, renewal date, and last conversation.",
            "Twin proposes a check-in or escalation when usage drops or budget freeze appears in email.",
          ],
        },
        {
          id: "role-ca",
          group: "Role",
          title: "For CAs and tax professionals.",
          body: [
            "Without: filing trackers in Excel, notices in email, payments in Tally, chats on WhatsApp.",
            "With: one Workspace per client showing filings, notices, invoices, and chats together.",
            "Twin reminds you of upcoming GST and notice deadlines before they slip.",
          ],
        },
        {
          id: "role-agency",
          group: "Role",
          title: "For agencies and service providers.",
          body: [
            "Without: retainers in sheets, deliverables in Notion, invoices in books, chats on WhatsApp.",
            "With: one Workspace per account showing retainer health, project status, invoices, and chats.",
            "Twin flags slipping retainers and proposes outreach — you approve before anything is sent.",
          ],
        },
        {
          id: "industry-saas",
          group: "Industry",
          title: "For SaaS and subscription businesses.",
          body: [
            "Account-level usage, billing, support, and conversations stitched into one Workspace view.",
            "Renewals, expansions, and at-risk accounts surfaced from Digital Memory — not a static dashboard.",
            "Twin connects usage drops with email and WhatsApp signals to surface churn risk early.",
          ],
        },
        {
          id: "industry-finserv",
          group: "Industry",
          title: "For CA and financial services firms.",
          body: [
            "Filings, notices, invoices, and client chats live together per client in Digital Memory.",
            "The Workspace replaces Monday-morning Excel reconciliation with one stitched view.",
            "Twin surfaces overdue payments and upcoming notices, with full evidence from your tools.",
          ],
        },
        {
          id: "industry-agency",
          group: "Industry",
          title: "For agencies and services.",
          body: [
            "Retainer health, project delivery, invoices, and communications in one stitched account view.",
            "Digital Memory keeps every project decision, brief, and message connected to the client.",
            "Twin proposes outreach when retainers slip or projects fall behind — you approve every move.",
          ],
        },
      ]}
      closeHeading="See your clients in one Memory and one Workspace, instead of ten tools."
      closingPrimary={{ label: "Book a demo", kind: "demo" }}
    />
  );
}
