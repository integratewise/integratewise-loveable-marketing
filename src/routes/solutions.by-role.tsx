import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Handshake,
  Activity,
  User,
  Target,
  Receipt,
  Briefcase,
  HeartPulse,
} from "lucide-react";
import type { ComponentType } from "react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/solutions/by-role")({
  head: () => ({
    meta: [
      { title: "Solutions by Role — Same workspace, your point of view." },
      {
        name: "description",
        content:
          "Filter the same Adaptive Spine, Digital Memory, Workbench, Twin, and Approval Gate by your role — CSM, Founder, Ops Lead, Sales, Finance, and more.",
      },
      { property: "og:title", content: "Solutions by Role" },
      {
        property: "og:description",
        content:
          "One platform. Different doors. Pick the role that matches your day.",
      },
    ],
  }),
  component: ByRoleIndex,
});

interface RoleEntry {
  to: string;
  params?: Record<string, string>;
  label: string;
  blurb: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  badge?: string;
}

const ROLE_DOORS: RoleEntry[] = [
  {
    to: "/solutions/account-success",
    label: "Customer Success / Account Manager",
    blurb:
      "Walk into every renewal, QBR, and check-in already knowing what changed.",
    icon: Handshake,
  },
  {
    to: "/solutions/business-ops",
    label: "Founder / Ops Lead",
    blurb:
      "One screen with everything that moved across billing, CRM, support, and chat since Friday.",
    icon: Activity,
  },
  {
    to: "/solutions/business-ops",
    label: "Sales Ops",
    blurb:
      "Pipeline with the full story behind every move — sits inside Business Ops.",
    icon: Target,
  },
  {
    to: "/solutions/business-ops",
    label: "Finance Ops",
    blurb:
      "Decisions backed by evidence, strict approvals, full history — sits inside Business Ops.",
    icon: Receipt,
  },
  {
    to: "/solutions/account-success",
    label: "Agency / Consultant",
    blurb:
      "Per-client Workbench with messages, tasks, and deliverables stitched together.",
    icon: Briefcase,
  },
  {
    to: "/solutions/personal-space",
    label: "Individual / Personal",
    blurb:
      "Your private Workbench for personal projects, learning, and life admin.",
    icon: User,
    badge: "Waitlist",
  },
];

function ByRoleIndex() {
  return (
    <Section orbs className="!pt-20 lg:!pt-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted">By Role</Badge>
          <h1 className="heading-h1 mt-5">
            Same workspace,{" "}
            <span className="text-gradient-hero">your point of view.</span>
          </h1>
          <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
            Same foundation for everyone — Adaptive Spine, Digital Memory, Adaptive Workbench,
            Twin, and Approval Gate. Pick the role that matches your day; the underlying system
            is shared.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ROLE_DOORS.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={`${r.label}`} delay={i * 50}>
                <Link
                  to={r.to}
                  className="card-iw flex h-full flex-col p-6 transition hover:border-brand-accent/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                      <Icon size={18} />
                    </div>
                    {r.badge && (
                      <span className="rounded-full border border-brand-highlight/30 bg-brand-highlight/10 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-brand-highlight">
                        {r.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-4 text-[17px] font-semibold text-foreground">
                    {r.label}
                  </h2>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-text-secondary">
                    {r.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent">
                    Open door <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-[14px] italic text-text-secondary">
            Same platform. Different doors. Sales Ops and Finance Ops are not separate products —
            they live inside Business Ops, and as filters under{" "}
            <Link to="/solutions/by-industry" className="text-brand-accent hover:underline">
              By Industry
            </Link>
            .
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/solutions" className="btn-secondary-iw">
            Solutions overview
          </Link>
          <Link to="/solutions/by-industry" className="btn-secondary-iw">
            Browse by industry
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
