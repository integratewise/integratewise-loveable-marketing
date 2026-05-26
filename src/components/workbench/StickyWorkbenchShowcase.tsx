import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UserWorkbench,
  CognitiveWorkbench,
  TwinWorkbench,
  BIInsightsWorkbench,
  BISearchWorkbench,
  BIHQWorkbench,
} from './index'

gsap.registerPlugin(ScrollTrigger)

interface WorkbenchStage {
  label: string
  title: string
  description: string
  component: React.ReactNode
}

const accountSuccessStages: WorkbenchStage[] = [
  {
    label: 'User Workbench',
    title: 'Your operational command center',
    description: 'Health scores, tasks, renewals, and AI-generated insights for every account — all in one surface.',
    component: <UserWorkbench />,
  },
  {
    label: 'Cognitive Workbench',
    title: 'AI proposes. You approve.',
    description: 'Every AI suggestion arrives with evidence from the Spine. Review, adjust, approve, or reject — full governance, full lineage.',
    component: <CognitiveWorkbench />,
  },
  {
    label: 'AI Twin',
    title: 'Pattern detection at scale',
    description: 'The Twin analyzes every signal across your account base, detects patterns, and surfaces risks and opportunities before you ask.',
    component: <TwinWorkbench />,
  },
]

const biStages: WorkbenchStage[] = [
  {
    label: 'Insights Feed',
    title: 'Intelligence writes itself',
    description: 'Insights from Slack, meetings, and docs are captured, classified, and structured automatically.',
    component: <BIInsightsWorkbench />,
  },
  {
    label: 'Search',
    title: 'Ask your organizational memory',
    description: 'Natural language queries return evidence-backed answers from your team\'s collective knowledge.',
    component: <BISearchWorkbench />,
  },
  {
    label: 'HQ Dashboard',
    title: 'See what your team is learning',
    description: 'Track intelligence velocity, top contributors, trending topics, and coverage in real time.',
    component: <BIHQWorkbench />,
  },
]

export function StickyWorkbenchShowcase({
  product,
  eyebrow,
  stages: customStages,
}: {
  product: 'account-success' | 'bi'
  eyebrow: string
  stages?: WorkbenchStage[]
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const stages = customStages || (product === 'account-success' ? accountSuccessStages : biStages)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${stages.length * 100}%`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const newIndex = Math.min(
            Math.floor(self.progress * stages.length),
            stages.length - 1
          )
          setActiveIndex(newIndex)
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [stages.length])

  return (
    <div ref={containerRef} style={{ minHeight: '100vh', background: '#0B1120' }}>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', padding: '40px 52px' }}>
        {/* Header */}
        <div style={{ marginBottom: '20px' }}>
          <span style={{
            fontSize: '10px', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#B8943F',
          }}>{eyebrow}</span>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '8px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#F1F5F9', margin: 0 }}>
                {stages[activeIndex].title}
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(226,232,240,0.5)', marginTop: '6px', maxWidth: '520px', lineHeight: 1.6 }}>
                {stages[activeIndex].description}
              </p>
            </div>
            {/* Stage tabs */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {stages.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    padding: '8px 16px', fontSize: '11px', fontWeight: 500,
                    background: i === activeIndex ? 'rgba(184,148,63,0.15)' : 'rgba(255,255,255,0.04)',
                    color: i === activeIndex ? '#B8943F' : 'rgba(226,232,240,0.3)',
                    border: `1px solid ${i === activeIndex ? 'rgba(184,148,63,0.3)' : 'rgba(255,255,255,0.06)'}`,
                    cursor: 'pointer', transition: 'all 0.2s ease',
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Workbench */}
        <div style={{ flex: 1, minHeight: 0 }}>
          {stages[activeIndex].component}
        </div>
      </div>
    </div>
  )
}

export function InlineWorkbenchDemo({
  component,
  caption,
}: {
  component: React.ReactNode
  caption?: string
}) {
  return (
    <div style={{ margin: '32px 0' }}>
      <div style={{ border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
        {component}
      </div>
      {caption && (
        <p style={{ fontSize: '12px', color: 'rgba(226,232,240,0.3)', marginTop: '10px', fontStyle: 'italic' }}>
          {caption}
        </p>
      )}
    </div>
  )
}
