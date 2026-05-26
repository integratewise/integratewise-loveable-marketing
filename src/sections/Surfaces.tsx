import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard,
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  Bell,
} from 'lucide-react'
import AppWindowFrame from '@/components/frames/AppWindowFrame'
import AccountConsolePreview from '@/components/frames/AccountConsolePreview'
import TwinPreview from '@/components/frames/TwinPreview'
import CognitivePreview from '@/components/frames/CognitivePreview'
import GovernancePreview from '@/components/frames/GovernancePreview'
import RightRailPreview from '@/components/frames/RightRailPreview'

export default function Surfaces() {
  const ref = useScrollReveal('.reveal-surf', { stagger: 0.12, y: 24 })

  const surfaces = [
    {
      name: 'Account Console',
      job: 'Day-to-day account execution for CS leaders',
      icon: LayoutDashboard,
      preview: <AccountConsolePreview />,
      breadcrumbs: ['IntegrateWise', 'Account Success (Product)', 'Account Console'],
      before: 'Five tabs before every meeting. Still underprepared.',
      after: 'One screen. Health, risks, tasks, AI insights, last engagement — zero tab switching.',
    },
    {
      name: 'Digital Twin',
      job: 'Conversational control plane over all account memory',
      icon: BrainCircuit,
      preview: <TwinPreview />,
      breadcrumbs: ['IntegrateWise', 'Account Success (Product)', 'Digital Twin'],
      before: 'Paste context, get generic answers, repeat.',
      after: 'Your Twin already knows. It answers from real memory and connects dots you did not ask about.',
    },
    {
      name: 'Cognitive Layer',
      job: 'Live signals, predictions, and cross-domain correlations',
      icon: Sparkles,
      preview: <CognitivePreview />,
      breadcrumbs: ['IntegrateWise', 'Account Success (Product)', 'Cognitive Layer'],
      before: 'Data exists. Making sense of it takes manual effort and gut instinct.',
      after: 'Signals, evidence, and synthesised reasoning. It tells you what, why, and where it came from.',
    },
    {
      name: 'Governance',
      job: 'Trust, approvals, and AI safety guardrails',
      icon: ShieldCheck,
      preview: <GovernancePreview />,
      breadcrumbs: ['IntegrateWise', 'Account Success (Product)', 'Governance'],
      before: 'AI acts or you ignore it. No middle ground.',
      after: 'Approve, reject, or modify every suggestion. See the source and reasoning. The AI earns trust.',
    },
    {
      name: 'Right Rail',
      job: 'Be proactively informed',
      icon: Bell,
      preview: <RightRailPreview />,
      breadcrumbs: ['IntegrateWise', 'Account Success (Product)', 'Right Rail'],
      before: 'Find out about problems when someone tells you or when it is already escalated.',
      after: 'Always watching. Risk alerts, expansion signals, quiet accounts — tapped on the shoulder early.',
    },
  ]

  return (
    <section id="surfaces" className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="text-center reveal-surf" style={{ marginBottom: '64px' }}>
          <span className="iw-eyebrow">Surfaces</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
            See it in action.
          </h2>
          <p className="iw-body" style={{ maxWidth: '640px', margin: '16px auto 0', color: 'var(--ink-muted)' }}>
            Every surface exists because of a job you already have to do. No 45-minute demo. No sales call. Just the product.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {surfaces.map((s, i) => {
            const Icon = s.icon
            const isEven = i % 2 === 0
            return (
              <div
                key={i}
                className="reveal-surf grid lg:grid-cols-2"
                style={{ gap: '48px', alignItems: 'center' }}
              >
                {/* Text side */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <div className="flex items-center" style={{ gap: '10px', marginBottom: '16px' }}>
                    <span style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      background: 'rgba(26, 58, 42, 0.06)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={16} color="var(--forest-mid)" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--ink)', lineHeight: 1.2 }}>{s.name}</h3>
                      <p style={{ fontSize: '13px', color: 'var(--ink-ghost)' }}>{s.job}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                    <div className="flex items-start" style={{ gap: '10px' }}>
                      <span style={{ fontSize: '14px', color: 'var(--red)', flexShrink: 0, marginTop: '2px' }}>✕</span>
                      <p style={{ fontSize: '15px', lineHeight: 1.55, color: 'var(--fg-muted)' }}>{s.before}</p>
                    </div>
                    <div style={{ width: '100%', height: '1px', background: 'var(--rule-light)' }} />
                    <div className="flex items-start" style={{ gap: '10px' }}>
                      <span style={{ fontSize: '14px', color: 'var(--forest-bright)', flexShrink: 0, marginTop: '2px' }}>✓</span>
                      <p style={{ fontSize: '15px', lineHeight: 1.55, color: 'var(--forest)' }}>{s.after}</p>
                    </div>
                  </div>

                  <Link
                    to="/demo"
                    className="iw-btn-secondary"
                    style={{ fontSize: '13px', padding: '10px 20px' }}
                  >
                    Try {s.name} in Live Demo →
                  </Link>
                </div>

                {/* Frame side */}
                <div style={{ order: isEven ? 2 : 1 }}>
                  <AppWindowFrame
                    size="section"
                    title={`IntegrateWise — ${s.name}`}
                    breadcrumbs={s.breadcrumbs}
                    showTrafficLights
                    showSidebar
                    sidebarWidth={40}
                    sidebarColor="#1A3A2A"
                  >
                    {s.preview}
                  </AppWindowFrame>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
