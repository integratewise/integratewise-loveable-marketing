import { createFileRoute, useSearch, useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";
import {
  ArrowRight,
  Users,
  Briefcase,
  User,
  Sparkles,
  Check,
  Pencil,
  X,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Receipt,
  CreditCard,
  Mail,
  MessageSquare,
  StickyNote,
  Calendar,
  ListChecks,
  Bookmark,
  TrendingDown,
  Building2,
  FileText,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { SectionNav } from "@/components/site/SectionNav";
import { RoleMatcher } from "@/components/site/RoleMatcher";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { SOLUTION_CARDS, FILTER_DIMENSIONS, SOLUTIONS_SECTIONS, DOORS } from "@/content/solutions-content";
import type { FilterState } from "@/lib/track";

export const Route = createFileRoute("/solutions")({
  validateSearch: (search: Record<string, unknown>) => ({
    role: (search.role as string) || "all",
    domain: (search.domain as string) || "all",
    industry: (search.industry as string) || "all",
  }),
  head: () => ({
    meta: [
      { title: "Solutions — One Spine. Many ways of working." },
      {
        name: "description",
        content:
          "Account Success, Business Ops, Personal Space — three doors into the same Spine, Digital Memory, Workspace, Twin, and Approval Gate.",
      },
      { property: "og:title", content: "IntegrateWise Solutions" },
      {
        property: "og:description",
        content: "Same foundation. Different entry points for how you actually work.",
      },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  const { open, openWaitlist } = useDemoModal();
  const filters = useSearch({ from: "/solutions" }) as FilterState;
  const navigate = useNavigate({ from: "/solutions" });

  const onFilterChange = useCallback(
    (next: FilterState) => {
      navigate({
        search: next,
        replace: true,
      });
    },
    [navigate],
  );

  return (
    <>
      {/* 1. Hero */}
      <Section id="solutions-overview" orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Solutions</Badge>
            <h1 className="heading-h1 mt-5">
              One Spine. <span className="text-gradient-hero">Many ways of working.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              The Spine, Digital Memory, Workspace, and Twin are the same for everyone. Solutions
              are just different doors into that foundation — tuned for how you work, not for one
              job title.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open()} className="btn-primary-iw">
                Book a demo <ArrowRight size={16} />
              </button>
              <a href="#account-success" className="btn-secondary-iw">
                Explore solutions
              </a>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
            {DOORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.id} delay={i * 80}>
                  <a
                    href={`#${d.id}`}
                    className="card-iw block h-full p-6 transition hover:border-brand-accent/40"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                        <Icon size={20} />
                      </div>
                      {d.waitlist && (
                        <span className="rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-brand-highlight">
                          Waitlist
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-[20px] font-semibold text-foreground">{d.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                      {d.blurb}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-accent">
                      Explore <ArrowRight size={14} />
                    </p>
                  </a>
                </Reveal>
              );
            })}
          </div>

          {/* RoleMatcher filter */}
          <div className="mx-auto mt-14 max-w-6xl">
            <Reveal>
              <RoleMatcher
                cards={SOLUTION_CARDS}
                dimensions={FILTER_DIMENSIONS}
                sectionId="role-matcher"
                filters={filters}
                onFilterChange={onFilterChange}
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Sticky in-page nav */}
      <SectionNav
        items={SOLUTIONS_SECTIONS.map((s) => ({ id: s.id, label: s.navLabel }))}
      />

        {/* 2. Intro */}
        <Section alt>
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <Badge variant="muted">Spans roles. Spans industries.</Badge>
              <h2 className="heading-h2 mt-4">Same pattern, different slice of your day.</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
                Whether you are a CA, SaaS CSM, agency owner, retail founder, or operations lead,
                you face the same pattern: scattered data, no shared memory, too much manual
                stitching. Each solution here uses the same Spine and Workspace to solve that
                pattern for a different slice of your day.
              </p>
            </Reveal>

            <Reveal delay={150} className="mx-auto mt-8 max-w-4xl">
              <div className="card-iw p-6 text-center" style={{ background: "var(--bg-surface)" }}>
                <p className="text-[14px] text-foreground/90">
                  <span className="font-semibold text-brand-accent">Same foundation:</span> Adaptive
                  Spine + Digital Memory + Workspace + Twin + Approval Gate.
                </p>
                <p className="mt-1.5 text-[14px] text-foreground/90">
                  <span className="font-semibold">Different entry points:</span> Account Success,
                  Business Ops, Personal Space.
                </p>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* === SOLUTION 1 — Account Success === */}
        <Section id="account-success">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <Badge variant="muted">Solution 1 · Account Success</Badge>
              <h2 className="heading-h2 mt-4">
                Account Success —{" "}
                <span className="text-gradient-hero">one client story, many tools.</span>
              </h2>
              <p className="mx-auto mt-5 text-[16px] leading-relaxed text-text-secondary">
                Anyone who manages relationships — CAs, SaaS CSMs, service agencies, freelancers —
                needs one place to see the full story of each account. Account Success uses Digital
                Memory to bring that story together, no matter which tools you use.
              </p>
            </Reveal>

            <Reveal delay={120} className="mx-auto mt-6 max-w-3xl">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Indian CA firm tracking filings and notices",
                  "SaaS CSM watching renewals and usage",
                  "Agency owner tracking retainers and project health",
                ].map((e) => (
                  <div
                    key={e}
                    className="rounded-lg border border-border bg-elevated/40 px-3 py-2.5 text-center text-[12.5px] text-foreground/85"
                  >
                    {e}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Foundations + view */}
            <div className="mx-auto mt-12 grid max-w-6xl items-start gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="card-iw h-full p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                    Foundation
                  </p>
                  <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                    <li>
                      • Digital Memory pulls invoices from Tally, payments from Razorpay, tickets
                      from your support tool, emails from Gmail, chats from WhatsApp, and notes from
                      Notion into one client Memory.
                    </li>
                    <li>
                      • The Account Success Workspace view shows every client with status, risk, and
                      next steps.
                    </li>
                  </ul>
                  <p className="mt-5 text-[14px] font-medium text-foreground/90">
                    Whether you call yourself CSM, CA, consultant, or account lead, the pattern is
                    the same — one stitched view instead of ten tools.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <AccountSuccessView />
              </Reveal>
            </div>

            {/* Twin & approvals */}
            <div className="mx-auto mt-12 max-w-6xl">
              <Reveal className="text-center">
                <h3 className="text-[24px] font-semibold text-foreground">
                  Hidden risks surfaced early — always with your approval.
                </h3>
              </Reveal>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                <Reveal>
                  <ChurnEquation />
                </Reveal>
                <Reveal delay={120}>
                  <div className="card-iw h-full p-6">
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
                      Twin proposes
                    </p>
                    <ul className="mt-3 space-y-2.5 text-[14px] text-foreground/90">
                      <li>• Who to contact</li>
                      <li>• What to send</li>
                      <li>• Which systems to update</li>
                    </ul>
                    <div className="mt-5 border-t border-border pt-4">
                      <ul className="space-y-2.5 text-[13.5px] text-foreground/85">
                        <li>• You see why the client is at risk, with full evidence.</li>
                        <li>• You review, edit, or approve Twin's plan.</li>
                        <li>• No mail, note, or status change happens without your okay.</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => open("Solutions · Account Success")}
                      className="btn-primary-iw mt-6"
                    >
                      See Account Success in a demo <ArrowRight size={16} />
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </Section>

        {/* === SOLUTION 2 — Business Ops === */}
        <Section alt id="business-ops">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <Badge variant="muted">Solution 2 · Business Ops</Badge>
              <h2 className="heading-h2 mt-4">
                Business Ops —{" "}
                <span className="text-gradient-hero">run the day from one screen.</span>
              </h2>
              <p className="mx-auto mt-5 text-[16px] leading-relaxed text-text-secondary">
                Founders, owners, and operations leaders — in retail shops, agencies, SaaS,
                professional services — all have the same problem: every Monday starts with
                spreadsheets and tab-hunting. Business Ops uses Digital Memory and the Workspace to
                give you one practical view of business health.
              </p>
            </Reveal>

            <Reveal delay={120} className="mx-auto mt-6 max-w-3xl">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Retail owner watching daily sales and credit",
                  "Agency founder tracking pipeline, delivery, and collections",
                  "SaaS founder tracking MRR, churn risks, hiring, and issues",
                ].map((e) => (
                  <div
                    key={e}
                    className="rounded-lg border border-border bg-elevated/40 px-3 py-2.5 text-center text-[12.5px] text-foreground/85"
                  >
                    {e}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Views & signals */}
            <div className="mx-auto mt-12 grid max-w-6xl items-start gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="card-iw h-full p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                    Foundation
                  </p>
                  <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                    <li>
                      • Business Ops reads from Org Memory — sales, payments, tickets, hiring, tasks
                      — and arranges it into a simple daily Workspace.
                    </li>
                    <li>
                      • You see sales, credit outstanding, key risks, and team capacity without
                      building Excel every week.
                    </li>
                  </ul>
                  <p className="mt-5 text-[14px] font-medium text-foreground/90">
                    Same foundation across industries — only the fields and examples change per
                    business.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <BusinessOverview />
              </Reveal>
            </div>

            {/* Twin morning brief */}
            <div className="mx-auto mt-12 max-w-6xl">
              <Reveal className="text-center">
                <h3 className="text-[24px] font-semibold text-foreground">
                  Morning brief, not Monday chaos.
                </h3>
              </Reveal>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                <Reveal>
                  <MorningBrief />
                </Reveal>
                <Reveal delay={120}>
                  <div className="card-iw h-full p-6">
                    <ul className="space-y-3 text-[14px] leading-relaxed text-foreground/90">
                      <li>• Twin reads your Org Memory and prepares a short morning brief.</li>
                      <li>
                        • You approve which actions to run — in email, billing, CRM, or project
                        tools.
                      </li>
                      <li>• Every step is logged; nothing runs without human Approval Gate.</li>
                    </ul>
                    <button
                      onClick={() => open("Solutions · Business Ops")}
                      className="btn-primary-iw mt-6"
                    >
                      See Business Ops in a demo <ArrowRight size={16} />
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </Section>

        {/* === SOLUTION 3 — Personal Space === */}
        <Section id="personal-space">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-2">
                <Badge variant="muted">Solution 3 · Personal Space</Badge>
                <span className="rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-brand-highlight">
                  Waitlist
                </span>
              </div>
              <h2 className="heading-h2 mt-4">
                Personal Space —{" "}
                <span className="text-gradient-hero">your own operating system.</span>
              </h2>
              <p className="mx-auto mt-5 text-[16px] leading-relaxed text-text-secondary">
                Everyone has scattered personal work — side projects, learning, family tasks,
                finances. Personal Space uses the same Spine and Workspace, but just for you. Your
                notes, tasks, calendar, and links become Digital Memory, not messy lists.
              </p>
            </Reveal>

            {/* How it works */}
            <div className="mx-auto mt-12 grid max-w-6xl items-start gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="card-iw h-full p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                    How it works
                  </p>
                  <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                    <li>• Connect your calendar, tasks app, note tool, and maybe email.</li>
                    <li>
                      • The Spine builds your User Memory — meetings, todos, ideas, bookmarks — as
                      one private Digital Memory.
                    </li>
                    <li>
                      • Your Personal Workspace shows today's focus, upcoming deadlines, and a
                      simple view of each project.
                    </li>
                  </ul>
                  <p className="mt-5 text-[14px] font-medium text-foreground/90">
                    Same engine as Business Ops and Account Success; just filtered to your private
                    life.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <PersonalView />
              </Reveal>
            </div>

            {/* Twin */}
            <div className="mx-auto mt-12 max-w-4xl">
              <Reveal className="card-iw p-6">
                <div className="flex items-center gap-2 text-brand-accent">
                  <Sparkles size={16} />
                  <p className="text-[12px] font-semibold uppercase tracking-wider">
                    A Twin that respects your space
                  </p>
                </div>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-foreground/90">
                  <li>
                    • Twin can propose: follow-up reminders, meeting prep, review plans, study
                    schedules.
                  </li>
                  <li>
                    • It still uses only your User Memory — it never sees your Org or Work Memory
                    unless you explicitly join them.
                  </li>
                  <li>
                    • Every action still goes through Approval Gate; you stay in control of your own
                    day.
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openWaitlist("Solutions · Personal Space")}
                    className="btn-primary-iw"
                  >
                    Join Personal Space waitlist <ArrowRight size={16} />
                  </button>
                  <span className="text-[12.5px] text-text-secondary">
                    Personal Space is currently waitlisted — join early access.
                  </span>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* Closing */}
        <Section alt>
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <Badge variant="muted">One foundation</Badge>
              <h2 className="heading-h2 mt-4">One foundation. Three doors in.</h2>
              <p className="mx-auto mt-5 text-[16px] leading-relaxed text-text-secondary">
                Account Success, Business Ops, and Personal Space are three ways to enter the same
                IntegrateWise foundation. Under the hood, everyone uses the Spine, Digital Memory,
                Workspace, Twin, and Approval Gate. Over time, your User, Work, and Org Memory grow
                together — and your AI stays grounded in your own library.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <button onClick={() => open()} className="btn-primary-iw">
                  Book a demo <ArrowRight size={16} />
                </button>
                <button onClick={() => open()} className="btn-secondary-iw">
                  Talk about your use case
                </button>
              </div>
              <p className="mt-6 text-[13px] text-text-secondary">
                Truth you own. AI you rent. Approval in between.
              </p>
            </Reveal>
          </Container>
        </Section>
    </>
  );
}

/* --------------------------------------------------------------------- */
/*  Visual mocks                                                          */
/* --------------------------------------------------------------------- */

function AccountSuccessView() {
  const rows = [
    {
      name: "FinanceFlow",
      ind: "Fintech",
      arr: "$84k",
      health: "At-risk",
      next: "Renewal Apr 28",
      tone: "warning" as const,
    },
    {
      name: "TechServe",
      ind: "SaaS",
      arr: "$120k",
      health: "At-risk",
      next: "Check-in due",
      tone: "warning" as const,
    },
    {
      name: "Northwind Co",
      ind: "Retail",
      arr: "$56k",
      health: "Healthy",
      next: "QBR May 02",
      tone: "success" as const,
    },
    {
      name: "Saraswat & Co",
      ind: "CA firm",
      arr: "₹4.8L",
      health: "Healthy",
      next: "GST Apr 20",
      tone: "success" as const,
    },
  ];
  return (
    <div className="card-iw overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="badge-iw badge-iw-muted !text-[11px]">Accounts</span>
        <span className="text-[11px] text-text-secondary">12 clients · 4 at-risk</span>
      </div>
      <table className="w-full text-left text-[13px]">
        <thead className="bg-elevated/40 text-[11px] uppercase tracking-wider text-text-secondary">
          <tr>
            <th className="px-4 py-2 font-semibold">Client</th>
            <th className="px-2 py-2 font-semibold">Industry</th>
            <th className="px-2 py-2 font-semibold">Revenue</th>
            <th className="px-2 py-2 font-semibold">Health</th>
            <th className="px-4 py-2 font-semibold">Next</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-border/70">
              <td className="px-4 py-2.5 font-medium text-foreground">{r.name}</td>
              <td className="px-2 py-2.5 text-foreground/85">{r.ind}</td>
              <td className="px-2 py-2.5 text-foreground/90">{r.arr}</td>
              <td className="px-2 py-2.5">
                <span
                  className="badge-iw !text-[10px] !py-0.5 !px-1.5"
                  style={{
                    background:
                      r.tone === "warning"
                        ? "color-mix(in oklab, var(--state-warning) 14%, transparent)"
                        : "color-mix(in oklab, var(--state-success) 14%, transparent)",
                    color: r.tone === "warning" ? "var(--state-warning)" : "var(--state-success)",
                    borderColor: "transparent",
                  }}
                >
                  {r.health}
                </span>
              </td>
              <td className="px-4 py-2.5 text-text-secondary">{r.next}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border-t border-border px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
          Evidence — FinanceFlow
        </p>
        <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
          {[
            { icon: Receipt, label: "Tally invoice" },
            { icon: CreditCard, label: "Razorpay event" },
            { icon: Mail, label: "Gmail thread" },
            { icon: MessageSquare, label: "WhatsApp" },
            { icon: Sparkles, label: "Approved summary" },
          ].map((e, i) => {
            const Icon = e.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-1.5 rounded-md border border-border bg-elevated/50 px-2 py-1.5"
              >
                <Icon size={11} className="text-text-secondary shrink-0" />
                <span className="truncate text-[11px] text-foreground/85">{e.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ChurnEquation() {
  return (
    <div className="card-iw h-full p-6" style={{ background: "var(--bg-surface)" }}>
      <p className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
        Example signal
      </p>
      <div className="mt-4 grid gap-3">
        <Pill icon={TrendingDown} tag="Truth" text="Usage drop" color="var(--state-success)" />
        <Pill
          icon={AlertTriangle}
          tag="Truth"
          text="More support tickets"
          color="var(--state-success)"
        />
        <Pill icon={Mail} tag="Context" text="'Budget freeze' in email" color="var(--state-info)" />
        <Pill
          icon={Sparkles}
          tag="Session Summary"
          text="Approved escalation rule"
          color="var(--state-warning)"
        />
        <div className="mt-1 rounded-xl border border-brand-accent/30 bg-brand-accent/5 px-4 py-3">
          <p className="flex items-center gap-2 text-brand-accent">
            <AlertTriangle size={14} />
            <span className="text-[11px] font-semibold uppercase tracking-wider">= Signal</span>
          </p>
          <p className="mt-1 text-[14px] font-semibold text-foreground">
            Churn-risk with full evidence chain.
          </p>
        </div>
      </div>
    </div>
  );
}

function Pill({
  icon: Icon,
  tag,
  text,
  color,
}: {
  icon: typeof TrendingDown;
  tag: string;
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-elevated/50 px-3 py-2.5">
      <div className="flex items-center gap-2.5">
        <Icon size={14} style={{ color }} />
        <span className="text-[13px] text-foreground/90">{text}</span>
      </div>
      <span
        className="rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
        style={{
          background: `color-mix(in oklab, ${color} 12%, transparent)`,
          color,
        }}
      >
        {tag}
      </span>
    </div>
  );
}

function BusinessOverview() {
  const cards = [
    { label: "Yesterday's revenue", value: "₹2.41L", icon: TrendingUp, tone: "success" },
    { label: "This week's collections", value: "₹6.8L", icon: CreditCard, tone: "info" },
    { label: "Open critical tickets", value: "4", icon: AlertTriangle, tone: "warning" },
    { label: "Pending GST filings", value: "2", icon: FileText, tone: "warning" },
    { label: "Key renewals this month", value: "5", icon: Building2, tone: "info" },
    { label: "Team capacity", value: "82%", icon: Users, tone: "success" },
  ];
  const toneColor = {
    success: "var(--state-success)",
    info: "var(--state-info)",
    warning: "var(--state-warning)",
  } as const;
  return (
    <div className="card-iw overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="badge-iw badge-iw-muted !text-[11px]">Business Overview</span>
        <span className="text-[11px] text-text-secondary">Today · Apr 18</span>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          const color = toneColor[c.tone as keyof typeof toneColor];
          return (
            <div key={c.label} className="rounded-lg border border-border bg-elevated/50 p-3">
              <div className="flex items-center gap-1.5" style={{ color }}>
                <Icon size={12} />
                <p className="text-[10px] font-semibold uppercase tracking-wider">{c.label}</p>
              </div>
              <p className="mt-1.5 text-[18px] font-semibold text-foreground">{c.value}</p>
            </div>
          );
        })}
      </div>
      <div className="border-t border-border px-4 py-3">
        <ul className="space-y-1.5 text-[12.5px] text-foreground/85">
          <li>• 3 accounts changed status</li>
          <li>• 2 payments overdue</li>
          <li>• 1 team overloaded</li>
        </ul>
      </div>
    </div>
  );
}

function MorningBrief() {
  const actions = [
    "Send reminder to overdue accounts",
    "Prepare renewal brief for top 3 clients",
    "Flag one overloaded team for discussion",
  ];
  return (
    <div className="card-iw overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-2 text-brand-accent">
          <Sparkles size={16} />
          <p className="text-[12px] font-semibold uppercase tracking-wider">Twin — Morning brief</p>
        </div>
        <Badge variant="muted">3 to review</Badge>
      </div>
      <div className="p-5">
        <p className="text-[14px] text-foreground/90">
          12 accounts changed status, 3 renewals this week, 2 large invoices overdue.
        </p>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
          Proposed actions
        </p>
        <ul className="mt-3 space-y-2">
          {actions.map((a) => (
            <li
              key={a}
              className="flex items-center justify-between gap-3 rounded-lg border border-border bg-elevated/40 px-3 py-2.5"
            >
              <span className="text-[13.5px] text-foreground/90">{a}</span>
              <ShieldCheck size={14} className="text-brand-accent shrink-0" />
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <button className="btn-primary-iw !px-3.5 !py-2 !text-[13px]">
            <Check size={14} /> Approve all
          </button>
          <button className="btn-secondary-iw !px-3.5 !py-2 !text-[13px]">
            <Pencil size={14} /> Review each
          </button>
          <button className="btn-secondary-iw !px-3.5 !py-2 !text-[13px]">
            <X size={14} /> Reject
          </button>
        </div>
      </div>
    </div>
  );
}

function PersonalView() {
  const today = [
    { icon: Calendar, label: "10:00 — Mentor call" },
    { icon: ListChecks, label: "Finish course module 4" },
    { icon: Mail, label: "Reply: visa documents" },
    { icon: ListChecks, label: "Plan weekend trip" },
  ];
  const projects = [
    { icon: Briefcase, label: "Side project — landing page" },
    { icon: ListChecks, label: "Learning — System design" },
    { icon: CreditCard, label: "Personal finance — April review" },
  ];
  return (
    <div className="card-iw overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="badge-iw badge-iw-muted !text-[11px]">Personal Workspace</span>
        <span className="text-[11px] text-text-secondary">Private · User Memory</span>
      </div>
      <div className="grid gap-3 p-4 md:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
            Today
          </p>
          <ul className="mt-2 space-y-1.5">
            {today.map((t, i) => {
              const Icon = t.icon;
              return (
                <li
                  key={i}
                  className="flex items-center gap-2 rounded-md border border-border bg-elevated/50 px-2.5 py-2"
                >
                  <Icon size={12} className="text-text-secondary shrink-0" />
                  <span className="truncate text-[12.5px] text-foreground/90">{t.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
            Projects
          </p>
          <ul className="mt-2 space-y-1.5">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <li
                  key={i}
                  className="flex items-center gap-2 rounded-md border border-border bg-elevated/50 px-2.5 py-2"
                >
                  <Icon size={12} className="text-text-secondary shrink-0" />
                  <span className="truncate text-[12.5px] text-foreground/90">{p.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
          Evidence
        </p>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {[
            { icon: StickyNote, label: "Notion note" },
            { icon: Bookmark, label: "Bookmarked link" },
            { icon: Mail, label: "Email reminder" },
          ].map((e, i) => {
            const Icon = e.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-1.5 rounded-md border border-border bg-elevated/50 px-2 py-1.5"
              >
                <Icon size={11} className="text-text-secondary shrink-0" />
                <span className="truncate text-[11px] text-foreground/85">{e.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
