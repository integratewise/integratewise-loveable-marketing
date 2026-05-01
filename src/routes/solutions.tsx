import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Users,
  Briefcase,
  User,
  Building2,
  Handshake,
  ShoppingBag,
  Stethoscope,
  Receipt,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { StickySubNav } from "@/components/site/StickySubNav";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — One Spine. Many ways of working." },
      {
        name: "description",
        content:
          "Account Success, Business Ops, Personal Space — three doors into the same Spine, Digital Memory, Workspace, Twin and Approval.",
      },
      { property: "og:title", content: "IntegrateWise Solutions" },
      {
        property: "og:description",
        content:
          "Same foundation. Different entry points by use case, role and industry.",
      },
    ],
  }),
  component: SolutionsPage,
});

const SUBNAV_ITEMS = [
  { id: "by-use-case", label: "By Use Case" },
  { id: "by-role", label: "By Role" },
  { id: "by-industry", label: "By Industry" },
];

const DOORS = [
  {
    to: "/solutions/account-success",
    icon: Handshake,
    title: "Account Success",
    body:
      "For CAs, CSMs, account managers, agencies and freelancers who need one client story across finance, product, support and communication. Digital Memory pulls from Tally/Razorpay, CRMs, support tools, WhatsApp and email into an Account Success Workspace. Twin watches for early churn-risk and upsell signals and prepares plans that wait behind Approval.",
    cta: "Explore Account Success",
    waitlist: false,
  },
  {
    to: "/solutions/business-ops",
    icon: Briefcase,
    title: "Business Ops",
    body:
      "For founders, owners and ops leaders in SaaS, agencies, services, retail and consulting who want to run the day from one screen. Business Ops sits on Org Memory and gives you a Business Workspace: revenue, collections, burn, client movements and risk in one place. Twin prepares morning briefs and targeted actions you approve.",
    cta: "Explore Business Ops",
    waitlist: false,
  },
  {
    to: "/solutions/personal-space",
    icon: User,
    title: "Personal Space",
    body:
      "For individuals who want a private operating system for their work. Connect calendar, email and notes; build User Memory just for you. Your Personal Workspace shows your day, people and projects in one view. Twin is an optional helper that suggests plans and drafts, always behind Approval and always inside your own Memory.",
    cta: "Join Personal Space waitlist",
    waitlist: true,
  },
];

const ROLES = [
  {
    role: "Customer Success Manager",
    solution: "Account Success",
    body:
      "One client story across usage, tickets, contracts and conversations, with churn-risk and upsell signals prepared by Twin.",
    icon: Users,
  },
  {
    role: "RevOps Director",
    solution: "Account Success + Business Ops",
    body:
      "Account-level Memory for CSMs plus Business views for planning, forecasting and headcount decisions.",
    icon: Sparkles,
  },
  {
    role: "Account Manager",
    solution: "Account Success",
    body:
      "Renewals, risks and opportunities in one Workspace, backed by Digital Memory.",
    icon: Handshake,
  },
  {
    role: "Founder / COO",
    solution: "Business Ops",
    body:
      "One place to see revenue, collections, risk and workload, with Approval-gated actions Twin prepares.",
    icon: Briefcase,
  },
  {
    role: "Solo operator",
    solution: "Personal Space",
    body:
      "A private Workspace for clients and projects, with optional Twin support that never leaves their own User Memory.",
    icon: User,
  },
];

const INDUSTRIES = [
  {
    label: "B2B SaaS (₹15–400Cr ARR)",
    primary: "Account Success + Business Ops",
    body:
      "Usage, tickets and renewals stitched into client stories for CS, plus Business views for leadership.",
    icon: Building2,
  },
  {
    label: "Indian CA & compliance firms",
    primary: "Account Success",
    body:
      "Ledgers, filings, payments and client conversations stitched into account views, with filing-risk surfaced early.",
    icon: Receipt,
  },
  {
    label: "Agencies and service firms",
    primary: "Account Success + Business Ops",
    body:
      "Projects, retainers, invoices and feedback stitched by client, with margin and satisfaction visible.",
    icon: ShoppingBag,
  },
  {
    label: "Professional services & consulting",
    primary: "Account Success",
    body:
      "Engagements, meetings, docs and invoices in one Workspace, with Twin helping prepare reviews and follow-ups.",
    icon: Stethoscope,
  },
];

function SolutionsPage() {
  const { open } = useDemoModal();

  return (
    <>
      <StickySubNav items={SUBNAV_ITEMS} variant="rail" />

      {/* 1. Hero */}
      <Section orbs className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Solutions</Badge>
            <h1 className="heading-h1 mt-5">
              One Spine.{" "}
              <span className="text-gradient-hero">Many ways of working.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              Different roles, industries and stages of business share the same pain: scattered
              tools, manual stitching and no shared memory of what really happened. IntegrateWise
              offers three solutions — Account Success, Business Ops and Personal Space — built on
              one foundation: Spine, Digital Memory, Workspace, Twin and Approval.
            </p>
            <p className="mx-auto mt-5 text-[15px] font-medium text-foreground/90">
              Truth you own. AI you rent. Approval in between.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. By Use Case — three doors */}
      <Section alt id="by-use-case">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">By Use Case</Badge>
            <h2 className="heading-h2 mt-4">Three doors into the same foundation.</h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
            {DOORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.title} delay={i * 100}>
                  <div className="card-iw flex h-full flex-col p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                        <Icon size={18} />
                      </div>
                      {d.waitlist && <Badge variant="muted">Waitlist</Badge>}
                    </div>
                    <h3 className="mt-4 text-[20px] font-semibold text-foreground">{d.title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-foreground/85">{d.body}</p>
                    <div className="mt-auto pt-5">
                      <Link
                        to={d.to}
                        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-accent hover:underline"
                      >
                        {d.cta} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. By Role */}
      <Section id="by-role">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">By Role</Badge>
            <h2 className="heading-h2 mt-4">Who lands where.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Different roles enter through different doors, but they all land on the same Spine
              and Digital Memory.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-3">
            {ROLES.map((r, i) => {
              const Icon = r.icon;
              return (
                <Reveal key={r.role} delay={i * 60}>
                  <div className="card-iw grid items-start gap-4 p-5 md:grid-cols-[220px_220px_1fr]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                        <Icon size={16} />
                      </div>
                      <p className="text-[15px] font-semibold text-foreground">{r.role}</p>
                    </div>
                    <div>
                      <span className="rounded-md border border-brand-accent/30 bg-brand-accent/5 px-2 py-1 text-[12px] font-medium text-brand-accent">
                        → {r.solution}
                      </span>
                    </div>
                    <p className="text-[13.5px] leading-relaxed text-foreground/85">{r.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4. By Industry */}
      <Section alt id="by-industry">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">By Industry</Badge>
            <h2 className="heading-h2 mt-4">Same Spine, different worlds.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Industries use different tools, but the pattern stays the same: connect tools to
              Spine, build Digital Memory, work from Workspace, add Twin behind Approval.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.label} delay={i * 80}>
                  <div className="card-iw h-full p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                        <Icon size={18} />
                      </div>
                      <span className="rounded-md border border-brand-accent/30 bg-brand-accent/5 px-2 py-0.5 text-[11.5px] font-medium text-brand-accent">
                        {ind.primary}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[17px] font-semibold text-foreground">{ind.label}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-foreground/85">{ind.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. CTA */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h2">One foundation. Three doors in.</h2>
            <p className="mx-auto mt-4 text-[16px] leading-relaxed text-text-secondary">
              Start where your pain is highest — Account Success, Business Ops or Personal Space —
              and grow into the rest over time. The Spine, Digital Memory, Workspace, Twin and
              Approval stay the same.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => open("Solutions CTA")} className="btn-primary-iw">
                Talk about your stack <ArrowRight size={16} />
              </button>
              <button onClick={() => open("Solutions CTA secondary")} className="btn-secondary-iw">
                Book a demo
              </button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
