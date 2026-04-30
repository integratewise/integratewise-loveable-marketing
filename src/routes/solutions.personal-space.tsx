import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionTemplate";

export const Route = createFileRoute("/solutions/personal-space")({
  head: () => ({
    meta: [
      { title: "Personal Space — Your own operating system." },
      {
        name: "description",
        content:
          "Your notes, tasks, meetings, and links become Digital Memory — not messy lists. Personal Space uses the same Adaptive Spine and Workspace, scoped only to you.",
      },
      { property: "og:title", content: "Personal Space — IntegrateWise" },
      {
        property: "og:description",
        content: "A private operating system for your goals, projects, learning, and life admin.",
      },
    ],
  }),
  component: PersonalSpacePage,
});

function PersonalSpacePage() {
  return (
    <SolutionPage
      preLabel="Solution · Personal Space"
      h1Lead="Your own"
      h1Accent="operating system."
      subcopy="Everyone has scattered personal work — side projects, learning, family tasks, finances. Personal Space uses the same Adaptive Spine and Workspace, but just for you. Your notes, tasks, meetings, and links become Digital Memory, not messy lists."
      primaryCta={{ label: "Join waitlist", kind: "waitlist" }}
      secondaryCtaHref="#function-personal"
      secondaryCtaLabel="See how it works"
      menu={[
        {
          label: "Function",
          links: [{ href: "#function-personal", label: "Personal Space" }],
        },
        {
          label: "Role",
          links: [
            { href: "#role-founder-personal", label: "Founder" },
            { href: "#role-pro-personal", label: "Working professional" },
            { href: "#role-student-personal", label: "Student" },
            { href: "#role-freelancer-personal", label: "Freelancer" },
          ],
        },
        {
          label: "Context",
          links: [
            { href: "#context-projects", label: "Side projects" },
            { href: "#context-learning", label: "Career & learning" },
            { href: "#context-finance", label: "Personal finance" },
          ],
        },
      ]}
      mapperTitle="See a day in your space."
      industryLabel="Context"
      roleOptions={[
        { value: "founder", label: "Founder" },
        { value: "pro", label: "Working professional" },
        { value: "student", label: "Student" },
        { value: "freelancer", label: "Freelancer" },
      ]}
      industryOptions={[
        { value: "projects", label: "Side projects" },
        { value: "learning", label: "Career & learning" },
        { value: "study", label: "Study" },
        { value: "finance", label: "Personal finance" },
      ]}
      combos={[
        {
          role: "pro",
          industry: "learning",
          without: [
            "Task app for todos, Notion for notes, email for reminders, bookmarks everywhere.",
            "Forget half the reading list and half the follow-ups.",
            "No one place to see your week and your goals together.",
            "Personal projects always lose to work because there's no shared view.",
          ],
          with: [
            "Personal Workspace shows today's tasks, meetings, goals, and reading in one view.",
            "User Memory stores notes, links, decisions — all searchable and connected.",
            "Twin can suggest what to work on next, but only from your private Memory.",
            "Career goals stay visible alongside your week — not buried in a separate doc.",
          ],
        },
        {
          role: "founder",
          industry: "projects",
          without: [
            "Personal projects buried under company work, tracked in random Apple Notes.",
            "Lose ideas because they're split between WhatsApp drafts, voice notes, and bookmarks.",
            "No way to see if you actually moved your personal project this month.",
          ],
          with: [
            "Personal Workspace shows your side projects, today's focus, and weekly progress.",
            "User Memory captures ideas, drafts, and links from across your tools.",
            "Twin proposes the next concrete step — you approve before it goes on your calendar.",
          ],
        },
        {
          role: "student",
          industry: "study",
          without: [
            "Course materials in Drive, notes in Notion, deadlines in calendar, tasks in another app.",
            "Forget assignment deadlines because they were in a Telegram group.",
            "Study plans never survive past the first week.",
          ],
          with: [
            "Personal Workspace shows today's deadlines, study tasks, and learning progress in one view.",
            "User Memory keeps notes, references, and decisions tied to each course or topic.",
            "Twin proposes a study plan you can approve and adjust — never one that runs on its own.",
          ],
        },
        {
          role: "freelancer",
          industry: "finance",
          without: [
            "Track invoices in one app, expenses in another, taxes in a sheet, receipts in your inbox.",
            "Don't notice missed invoices until the month closes.",
            "Tax season becomes a panic dig through email.",
          ],
          with: [
            "Personal Workspace shows pending invoices, upcoming expenses, and tax checkpoints in one view.",
            "User Memory keeps every receipt, invoice, and decision linked.",
            "Twin reminds you to send invoices and prepare for tax dates — you always approve.",
          ],
        },
      ]}
      sections={[
        {
          id: "function-personal",
          group: "Function",
          title: "Personal Space — same engine, scoped only to you.",
          body: [
            "Same engine as the business side — Adaptive Spine, Digital Memory, Workspace, Twin, Approval Gate — but scoped only to you.",
            "User Memory keeps your life's Truth and Context in one place — tasks, calendar, notes, links.",
            "Personal Workspace shows a simple, calming view of your day and projects.",
          ],
        },
        {
          id: "role-founder-personal",
          group: "Role",
          title: "For founders managing work and life.",
          body: [
            "Without: company work consumes everything; personal goals live in random Notes.",
            "With: a Personal Workspace separate from your company space — your projects, learning, and life admin in one place.",
            "Twin proposes the next step on your personal goals — you stay fully in control.",
          ],
        },
        {
          id: "role-pro-personal",
          group: "Role",
          title: "For working professionals.",
          body: [
            "Without: career goals, side projects, and learning scattered across a dozen apps.",
            "With: one Workspace showing today's focus, weekly progress, and your goals together.",
            "User Memory keeps your reading, decisions, and career notes linked and searchable.",
          ],
        },
        {
          id: "role-student-personal",
          group: "Role",
          title: "For students and learners.",
          body: [
            "Without: deadlines in calendar, notes in Notion, tasks in another app, materials in Drive.",
            "With: a Personal Workspace showing today's deadlines, study tasks, and progress in one view.",
            "Twin proposes a study plan you approve and adjust — never one that runs on its own.",
          ],
        },
        {
          id: "role-freelancer-personal",
          group: "Role",
          title: "For freelancers.",
          body: [
            "Without: invoices, expenses, taxes, and personal projects across 5 different tools.",
            "With: one Personal Workspace showing pending invoices, expenses, tax dates, and side projects.",
            "Twin reminds you to send invoices and prepare for tax — you always approve.",
          ],
        },
        {
          id: "context-projects",
          group: "Context",
          title: "Side projects and startups.",
          body: [
            "Capture ideas, drafts, and links from across your tools into one User Memory.",
            "Your Personal Workspace shows weekly progress on each project — no more 'did I move this?'",
            "Twin proposes the next concrete step; you approve before it lands on your calendar.",
          ],
        },
        {
          id: "context-learning",
          group: "Context",
          title: "Career growth and learning.",
          body: [
            "User Memory holds your reading list, course notes, and career decisions — all searchable.",
            "Personal Workspace shows your week alongside your career goals, not buried in a separate doc.",
            "Twin can propose a weekly review — you decide what makes it into the plan.",
          ],
        },
        {
          id: "context-finance",
          group: "Context",
          title: "Personal finance and admin.",
          body: [
            "Track invoices, expenses, recurring bills, and tax dates from one Personal Workspace.",
            "User Memory keeps every receipt, invoice, and decision connected.",
            "Twin reminds you of upcoming dates and proposes reminders — every action goes through your approval.",
          ],
        },
      ]}
      closeHeading="Your private operating system — same engine, scoped only to you."
      closingPrimary={{ label: "Join Personal Space waitlist", kind: "waitlist" }}
    />
  );
}
