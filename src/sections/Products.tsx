import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import {
  Check,
  Users,
  Building2,
} from 'lucide-react'
import AppWindowFrame from '@/components/frames/AppWindowFrame'
import AccountConsolePreview from '@/components/frames/AccountConsolePreview'
import CognitivePreview from '@/components/frames/CognitivePreview'

export default function Products() {
  const ref = useScrollReveal('.reveal-prod', { stagger: 0.15, y: 24 })

  const products = [
    {
      tag: 'Account Success',
      icon: Users,
      headline: 'How is this customer actually doing — right now?',
      frame: (
        <AppWindowFrame
          size="card"
          title="IntegrateWise — Account Success"
          breadcrumbs={['Account Success (Product)', 'Account Console']}
          showTrafficLights
          showSidebar
          sidebarWidth={32}
          sidebarColor="#1A3A2A"
        >
          <AccountConsolePreview />
        </AppWindowFrame>
      ),
      forWho: 'CSMs, TAMs, AEs, Solutions Architects, Renewal Managers, Account Leaders',
      bullets: [
        'One Account Console with a 15-layer intelligence spine for every customer',
        'Health, risk, stakeholders, initiatives, and AI insights — all cross-linked',
        'Walk into any renewal, QBR, or escalation with the full picture loaded',
        'Stop almost catching risks. Start seeing them three weeks early.',
      ],
    },
    {
      tag: 'Business OS',
      icon: Building2,
      headline: 'How is my company actually running — right now?',
      frame: (
        <AppWindowFrame
          size="card"
          title="IntegrateWise — Business OS"
          breadcrumbs={['Business Ops (Product)', 'Cognitive Layer']}
          showTrafficLights
          showSidebar
          sidebarWidth={32}
          sidebarColor="#1A3A2A"
        >
          <CognitivePreview />
        </AppWindowFrame>
      ),
      forWho: 'Founders, COOs, Department Heads, Operators, BizOps and RevOps Leads',
      bullets: [
        'One surface covering all 12 functional departments',
        'Goals, metrics, initiatives, risks, blockers, and AI insights per department',
        'Cross-department dependencies visible in a single view',
        'Stop running the company from scattered dashboards and weekly syncs.',
      ],
    },
  ]

  return (
    <section id="products" className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="text-center reveal-prod" style={{ marginBottom: '64px' }}>
          <span className="iw-eyebrow">Products</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
            Whether you manage customers or run a company, the problem is the same.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2" style={{ gap: '24px' }}>
          {products.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="reveal-prod"
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--rule)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '16px', background: 'var(--paper-warm)', borderBottom: '1px solid var(--rule-light)' }}>
                  {p.frame}
                </div>
                <div style={{ padding: '28px' }}>
                  <div className="flex items-center" style={{ gap: '8px', marginBottom: '10px' }}>
                    <Icon size={14} color="var(--forest-mid)" strokeWidth={2} />
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'var(--forest-mid)',
                    }}>{p.tag}</span>
                  </div>
                  <h3 className="font-serif" style={{ fontSize: '22px', color: 'var(--ink)', marginBottom: '12px', lineHeight: 1.25 }}>
                    {p.headline}
                  </h3>
                  <p className="iw-body" style={{ fontSize: '13px', color: 'var(--ink-ghost)', marginBottom: '20px' }}>
                    For {p.forWho}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {p.bullets.map((b, j) => (
                      <div key={j} className="flex items-start" style={{ gap: '10px' }}>
                        <span style={{
                          width: '18px', height: '18px', borderRadius: '50%',
                          background: 'rgba(26, 58, 42, 0.08)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, marginTop: '2px',
                        }}>
                          <Check size={10} color="var(--forest-bright)" strokeWidth={3} />
                        </span>
                        <span style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--fg-muted)' }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '24px' }}>
                    <Link to="/demo" className="iw-btn-secondary" style={{ fontSize: '12px', padding: '10px 20px' }}>
                      {p.tag === 'Account Success' ? 'See Account Console in Action' : 'See Business OS in Action'} →
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
