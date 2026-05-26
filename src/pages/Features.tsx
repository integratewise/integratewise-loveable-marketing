import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UserWorkbench,
  CognitiveWorkbench,
  TwinWorkbench,
  BIInsightsWorkbench,
  BISearchWorkbench,
} from '@/components/workbench'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════
   FEATURE SHOWCASE — sticky scroll pattern
   Left: sticky labels + descriptions
   Right: live workbench components
   ═══════════════════════════════════════════ */
interface FeatureStage {
  id: string
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  component: React.ReactNode
  accent: string
}

const featureStages: FeatureStage[] = [
  {
    id: 'account-success',
    eyebrow: 'Account Success',
    title: 'The intelligence system for managing complex relationships.',
    description: 'Fifteen layers of structured account intelligence. One customer view. AI that remembers every conversation and risk.',
    bullets: ['Health scores across all accounts', 'Task management with risk-based prioritization', 'AI-generated morning briefs', 'Renewal countdowns and risk alerts'],
    component: <UserWorkbench />,
    accent: 'var(--forest-bright)',
  },
  {
    id: 'cognitive',
    eyebrow: 'Governance',
    title: 'AI proposes. You approve. The system executes.',
    description: 'Every AI-proposed action passes through human review. Full evidence, full lineage, full control.',
    bullets: ['Evidence-backed AI proposals', 'Approve, adjust, reject, or defer', 'Full lineage: Loader → Twin → Cognitive', 'Every decision recorded and auditable'],
    component: <CognitiveWorkbench />,
    accent: 'var(--gold)',
  },
  {
    id: 'twin',
    eyebrow: 'AI Twin',
    title: 'Pattern detection across your entire account base.',
    description: 'The Twin analyzes every signal across your account base, detects patterns, and surfaces risks before you ask.',
    bullets: ['Churn risk detection with correlation scores', 'Competitor mention tracking', 'Usage decline and expansion signals', 'Model-agnostic: GPT-4, Claude, Gemini'],
    component: <TwinWorkbench />,
    accent: 'var(--accent-purple, #8B5CF6)',
  },
  {
    id: 'bi-insights',
    eyebrow: 'Business Intelligence',
    title: 'Intelligence writes itself.',
    description: 'Insights from Slack, meetings, and docs are captured, classified, and structured automatically.',
    bullets: ['Auto-capture from Slack, email, meetings', 'AI classification with confidence scores', 'Channel-based organization', 'Trending tags and topic detection'],
    component: <BIInsightsWorkbench />,
    accent: 'var(--slate-mid)',
  },
  {
    id: 'bi-search',
    eyebrow: 'Search',
    title: 'Ask your organizational memory.',
    description: 'Natural language queries return evidence-backed answers from your team\'s collective knowledge.',
    bullets: ['NL search across all captured insights', 'Account-based risk queries', 'Evidence snippets with source attribution', 'Confidence-scored results'],
    component: <BISearchWorkbench />,
    accent: 'var(--forest-mid)',
  },
]

function StickyFeatureShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const stages = containerRef.current.querySelectorAll('.feature-stage')
    if (!stages.length) return

    const ctx = gsap.context(() => {
      // Pin the left sidebar while scrolling through stages
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 64px',
        end: `+=${stages.length * 80}%`,
        pin: '.showcase-sidebar',
        pinSpacing: false,
      })

      // Each stage triggers progress update
      stages.forEach((stage, i) => {
        ScrollTrigger.create({
          trigger: stage,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        })

        // Animate the component in
        gsap.from(stage.querySelector('.showcase-component'), {
          y: 40,
          opacity: 0,
          scale: 0.97,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stage,
            start: 'top 80%',
            once: true,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef}>
      <div className="max-w-content-default" style={{ padding: '0 52px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '48px' }}>
          {/* Left — Sticky sidebar */}
          <div className="showcase-sidebar" style={{ paddingTop: '40px' }}>
            <span className="iw-eyebrow">Product Showcase</span>
            <h2 className="font-serif" style={{ fontSize: '24px', lineHeight: 1.3, color: 'var(--ink)', marginBottom: '32px' }}>
              See it work.
            </h2>

            {/* Progress indicator */}
            <div ref={progressRef} style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
              {featureStages.map((stage, i) => (
                <div
                  key={stage.id}
                  onClick={() => {
                    const el = document.getElementById(`stage-${stage.id}`)
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  style={{
                    padding: '12px 16px',
                    cursor: 'pointer',
                    borderLeft: `3px solid ${i === activeIndex ? stage.accent : 'transparent'}`,
                    background: i === activeIndex ? 'var(--paper-warm)' : 'transparent',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: i === activeIndex ? stage.accent : 'var(--ink-ghost)',
                    display: 'block',
                    marginBottom: '4px',
                  }}>
                    {stage.eyebrow}
                  </span>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: i === activeIndex ? 600 : 400,
                    color: i === activeIndex ? 'var(--ink)' : 'var(--ink-muted)',
                    lineHeight: 1.4,
                  }}>
                    {stage.title.substring(0, 40)}...
                  </span>
                </div>
              ))}
            </div>

            {/* Active stage detail */}
            <div style={{
              padding: '24px',
              background: 'var(--paper-warm)',
              borderLeft: `3px solid ${featureStages[activeIndex].accent}`,
            }}>
              <p className="iw-body" style={{ fontSize: '13px', marginBottom: '16px' }}>
                {featureStages[activeIndex].description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {featureStages[activeIndex].bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{
                      width: '4px', height: '4px', borderRadius: '50%',
                      background: featureStages[activeIndex].accent,
                      flexShrink: 0, marginTop: '6px',
                    }} />
                    <span style={{ fontSize: '12px', color: 'var(--ink-muted)', lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Scrolling components */}
          <div style={{ paddingTop: '40px' }}>
            {featureStages.map((stage) => (
              <div
                key={stage.id}
                id={`stage-${stage.id}`}
                className="feature-stage"
                style={{ minHeight: '80vh', paddingBottom: '120px' }}
              >
                {/* Mobile label */}
                <div className="lg:hidden" style={{ marginBottom: '24px' }}>
                  <span className="iw-eyebrow">{stage.eyebrow}</span>
                  <h3 className="font-serif" style={{ fontSize: '20px' }}>{stage.title}</h3>
                </div>

                {/* Component */}
                <div className="showcase-component" style={{
                  border: '1px solid var(--rule-light)',
                  overflow: 'hidden',
                }}>
                  {stage.component}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   FEATURE GRID — bento-style visual cards
   ═══════════════════════════════════════════ */
function FeatureGrid() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const cards = ref.current.querySelectorAll('.bento-card')
    gsap.from(cards, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
    })
  }, [])

  const features = [
    {
      num: '01', eyebrow: 'Architecture', title: 'Memory-native OS',
      text: 'Layer that sits above CRM, support, comms, docs, analytics. Tools stay where they are — no migration.',
      span: 2,
    },
    {
      num: '02', eyebrow: 'Data', title: 'Multi-system ingestion',
      text: 'Loader connects via APIs, webhooks, MCPs. Pulls structured and unstructured data. Normalizer turns mismatched schemas into one model.',
      span: 1,
    },
    {
      num: '03', eyebrow: 'Memory', title: 'The Spine',
      text: 'Model-independent living record. Survives model changes, provider changes, infrastructure changes. Compounding cycles.',
      span: 1,
    },
    {
      num: '04', eyebrow: 'Execution', title: 'Human-governed round trip',
      text: 'AI proposes → You approve → Operator executes. Full lineage on every action. Governance is the architecture, not a bolt-on.',
      span: 2,
    },
    {
      num: '05', eyebrow: 'Intelligence', title: '15-layer account graph',
      text: 'Profile, contracts, stakeholders, health, sentiment, decisions — all connected.',
      span: 1,
    },
    {
      num: '06', eyebrow: 'Integration', title: '40+ integrations from day one',
      text: 'Salesforce, HubSpot, Zendesk, Slack, Jira, Stripe, GitHub, Notion, Google, and more.',
      span: 1,
    },
  ]

  return (
    <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'var(--rule-light)' }}>
      {features.map(f => (
        <div
          key={f.num}
          className="bento-card"
          style={{
            gridColumn: f.span === 2 ? 'span 2' : 'span 1',
            background: 'var(--paper)',
            padding: '32px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '56px',
            color: 'var(--rule-light)', lineHeight: 1,
            position: 'absolute', top: '16px', right: '20px',
          }}>{f.num}</span>
          <span className="iw-eyebrow" style={{ fontSize: '9px', position: 'relative', zIndex: 1 }}>{f.eyebrow}</span>
          <h3 className="font-serif" style={{ fontSize: '20px', margin: '10px 0 12px', position: 'relative', zIndex: 1 }}>{f.title}</h3>
          <p className="iw-body" style={{ fontSize: '13px', position: 'relative', zIndex: 1 }}>{f.text}</p>
        </div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════
   FEATURES PAGE
   ═══════════════════════════════════════════ */
export default function Features() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return
    gsap.from(heroRef.current.querySelectorAll('.hero-animate'), {
      y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
    })
  }, [])

  return (
    <div>
      {/* ═══════ HERO ═══════ */}
      <section ref={heroRef} style={{
        minHeight: '50vh', paddingTop: '96px', paddingBottom: '80px',
        background: 'linear-gradient(160deg, var(--paper) 0%, var(--paper-warm) 100%)',
      }}>
        <div className="max-w-content-default">
          <span className="iw-eyebrow hero-animate">Features</span>
          <h1 className="font-display iw-display hero-animate" style={{ fontSize: 'clamp(56px, 8vw, 120px)', marginBottom: '20px' }}>
            THE COMPLETE<br />PLATFORM.
          </h1>
          <p className="iw-body hero-animate" style={{ maxWidth: '560px', marginBottom: '32px', fontSize: '16px' }}>
            Every layer of the IntegrateWise architecture, from ingestion to execution. One Spine. Four workbenches. Human-governed AI.
          </p>
          <div className="hero-animate flex gap-4 flex-wrap">
            <Link to="/contact" className="iw-btn-primary">Request a demo</Link>
            <Link to="/platform" className="iw-btn-secondary">See the architecture</Link>
          </div>
        </div>
      </section>

      {/* ═══════ STICKY SHOWCASE ═══════ */}
      <section className="iw-section" style={{ background: 'var(--paper)' }}>
        <StickyFeatureShowcase />
      </section>

      {/* ═══════ FEATURE GRID ═══════ */}
      <section className="iw-section" style={{ background: 'var(--paper-warm)' }}>
        <div className="max-w-content-default">
          <span className="iw-eyebrow">Architecture</span>
          <h2 className="iw-section-title" style={{ fontSize: '28px', marginBottom: '48px' }}>
            Every layer, explained.
          </h2>
          <FeatureGrid />
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="text-center iw-section" style={{ borderTop: '1px solid var(--rule-light)' }}>
        <div className="max-w-content-narrow mx-auto">
          <span className="iw-eyebrow">Ready?</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 0.95,
            letterSpacing: '0.015em', marginBottom: '24px',
          }}>
            EVERYTHING RUNS<br />ON THE SPINE.
          </h2>
          <p className="iw-body" style={{ marginBottom: '32px' }}>
            One platform. One memory. Human-governed AI. Solutions that compound instead of decay.
          </p>
          <Link to="/contact" className="iw-btn-primary">Book a demo</Link>
        </div>
      </section>
    </div>
  )
}
