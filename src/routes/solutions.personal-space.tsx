import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Users,
  ListChecks,
  Sparkles,
  ShieldCheck,
  Lock,
  EyeOff,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/site/Reveal";
import { useDemoModal } from "@/components/site/demo-modal-context";
import { StickySubNav } from "@/components/site/StickySubNav";

export const Route = createFileRoute("/solutions/personal-space")({
  head: () => ({
    meta: [
      { title: "Personal Space — Your own operating system for work" },
      {
        name: "description",
        content:
          "Personal Space connects calendar, email and notes into User Memory just for you. A Workspace for your day, with an optional Twin that stays inside your own scope.",
      },
      { property: "og:title", content: "Personal Space — IntegrateWise" },
      {
        property: "og:description",
        content:
          "Private by architecture. Twin suggests, never pushes. Join the waitlist.",
      },
    ],
  }),
  component: PersonalSpacePage,
});

const SUBNAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "workspace", label: "Workspace" },
  { id: "twin", label: "Twin" },
  { id: "privacy", label: "Privacy" },
  { id: "waitlist", label: "Waitlist" },
];

const SUBVIEWS = [
  {
    icon: Calendar,
    title: "Day view",
    body: "Meetings, promises, follow-ups across tools — all in one place.",
  },
  {
    icon: Users,
    title: "People view",
    body: "Important contacts, last touch, what you owe and what they owe you.",
  },
  {
    icon: ListChecks,
    title: "Projects view",
    body: "Workstreams with related tasks and notes, stitched from where they live.",
  },
];

const TWIN_BULLETS = [
  "Suggests 3–5 things to do today.",
  "Surfaces who you're drifting away from.",
  "Drafts simple replies or plans based only on your own data.",
];

const PRIVACY_BULLETS = [
  {
    icon: EyeOff,
    text: "No one else can see your Personal Workspace.",
  },
  {
    icon: Lock,
    text: "Twin for Personal Space reads only your User Memory, never Org Memory.",
  },
  {
    icon: ArrowUpRight,
    text: "Promotion of any item into Work or Org Memory is an explicit action.",
  },
];

function PersonalSpacePage() {
  const { openWaitlist } = useDemoModal();

  return (
    <>
      <StickySubNav items={SUBNAV_ITEMS} variant="rail" />

      {/* 1. Hero — #overview */}
      <Section orbs id="overview" className="!pt-20 lg:!pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Solutions · Personal Space</Badge>
            <h1 className="heading-h1 mt-5">
              Your own operating system{" "}
              <span className="text-gradient-hero">for work.</span>
            </h1>
            <p className="mx-auto mt-5 text-[17px] leading-relaxed text-text-secondary">
              Before you fix the whole organisation, you need a space where your own work
              remembers. Personal Space connects the tools you already use and builds User Memory
              just for you — with a Workspace for your day and an optional Twin that suggests,
              never pushes.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => openWaitlist("Personal Space hero")}
                className="btn-primary-iw"
              >
                Join Personal Space waitlist <ArrowRight size={16} />
              </button>
              <a href="#workspace" className="btn-secondary-iw">
                See how it works
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Overview narrative */}
      <Section alt>
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="heading-h2 text-center">
              One place for your day, people and projects.
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[15.5px] leading-relaxed text-text-secondary">
              <p>
                Today, your tasks live in one app, your calendar in another, your notes spread
                across Notion, docs and chat. You still wake up wondering "what today?"
              </p>
              <p>
                With Personal Space, Spine builds User Memory out of your own calendar, email and
                notes. Your Personal Workspace shows your day, people and projects in one view —
                without leaking into anyone else's scope.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Workspace — #workspace */}
      <Section id="workspace">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Workspace</Badge>
            <h2 className="heading-h2 mt-4">Your Personal Workspace.</h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
            {SUBVIEWS.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="card-iw h-full p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-[18px] font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-foreground/85">{v.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={250} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[14.5px] leading-relaxed text-foreground/90">
              All of this is backed by{" "}
              <span className="text-brand-accent">User Memory only</span>. Nothing leaks into Work
              or Org Memory unless you explicitly promote it.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 4. Twin — #twin */}
      <Section alt id="twin">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Twin</Badge>
            <h2 className="heading-h2 mt-4">A gentle Twin, never a boss.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Twin watches your User Memory and helps shape your day — entirely behind Approval.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
            <div className="card-iw p-6">
              <div className="flex items-center gap-2 text-brand-accent">
                <Sparkles size={16} />
                <p className="text-[12px] font-semibold uppercase tracking-wider">
                  Twin · Personal
                </p>
              </div>
              <ul className="mt-4 space-y-2.5">
                {TWIN_BULLETS.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 rounded-lg border border-border bg-elevated/40 px-3 py-2.5 text-[14px] text-foreground/90"
                  >
                    <Sparkles size={14} className="mt-0.5 shrink-0 text-brand-accent" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] text-text-secondary">
                <ShieldCheck size={13} className="text-brand-accent" /> Everything sits behind
                Approval — nothing is sent or changed without you.
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Privacy — #privacy */}
      <Section id="privacy">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Privacy</Badge>
            <h2 className="heading-h2 mt-4">Private by architecture, even before policy.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Personal Space lives entirely in User Memory. By default:
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {PRIVACY_BULLETS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="card-iw h-full p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <p className="mt-4 text-[14px] leading-relaxed text-foreground/90">
                      {b.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={300} className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-[14px] leading-relaxed text-text-secondary">
              Learn more about Memory scopes →{" "}
              <a
                href="/platform#digital-memory"
                className="text-brand-accent underline-offset-4 hover:underline"
              >
                /platform#digital-memory
              </a>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 6. Waitlist — #waitlist */}
      <Section alt id="waitlist">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="muted">Early access</Badge>
            <h2 className="heading-h2 mt-4">
              We're shaping Personal Space with a small group first.
            </h2>
            <p className="mx-auto mt-4 text-[16px] leading-relaxed text-text-secondary">
              Personal Space changes how people work day to day. We're starting with a small early
              access group of founders, CAs, CSMs and independents who feel the daily reset most
              strongly in their own calendar and inbox.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-8 max-w-2xl">
            <div className="card-iw p-6">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                When you join, we'll ask:
              </p>
              <ul className="mt-3 space-y-2 text-[14px] text-foreground/90">
                <li>• Your role</li>
                <li>• Tools you use today</li>
                <li>• Biggest "reset" pain in your day</li>
              </ul>
              <button
                onClick={() => openWaitlist("Personal Space waitlist")}
                className="btn-primary-iw mt-6 w-full justify-center"
              >
                Join the waitlist <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
