import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import {
  Check,
  Server,
  Cloud,
} from 'lucide-react'

export default function Pricing() {
  const ref = useScrollReveal('.reveal-price', { stagger: 0.15, y: 24 })

  const plans = [
    {
      tag: 'Self-Managed',
      icon: Server,
      title: 'You bring your tools',
      description: 'Use the IntegrateWise platform with your own tools and infrastructure. WorkBench, Twin, Cognitive layer, Governance, Right Rail, and all three memory layers — you bring the connections, we provide the intelligence.',
      features: [
        'WorkBench + Twin WorkBench',
        'Cognitive + Governance layers',
        'Right Rail + Smart Triage',
        'Approvals + Promotions',
        'All three memory layers',
        'Connect your own tools',
      ],
      bg: 'var(--paper)',
      accent: 'var(--forest-bright)',
      text: 'var(--ink)',
      muted: 'var(--fg-muted)',
    },
    {
      tag: 'Fully Managed',
      icon: Cloud,
      title: 'We run everything',
      description: 'We manage everything — infrastructure, integrations, AI connectors, and governance. You focus on the work. We keep the system running, learning, and improving behind the scenes.',
      features: [
        'Everything in Core',
        'Managed infrastructure',
        'Managed integrations & connectors',
        'AI connectors + Model Switching',
        'Automated workflows & routing',
        'Agent workflows + Skills',
        'Priority support + onboarding',
      ],
      bg: 'var(--forest)',
      accent: 'var(--gold-light)',
      text: 'var(--paper)',
      muted: 'rgba(244,240,232,0.7)',
    },
  ]

  return (
    <section id="pricing" className="iw-section" style={{ background: 'var(--paper-warm)', borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="text-center reveal-price" style={{ marginBottom: '64px' }}>
          <span className="iw-eyebrow">Pricing</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
            Start with what you own. Let us run what you don't want to.
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--fg-muted)', marginTop: '12px' }}>
            Plans start around <strong style={{ color: 'var(--ink)' }}>$199–$499/month</strong> depending on team size and managed scope.
          </p>
        </div>

        <div className="grid lg:grid-cols-2" style={{ gap: '24px' }}>
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <div
                key={i}
                className="reveal-price"
                style={{
                  background: plan.bg,
                  border: '1px solid var(--rule)',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div className="flex items-center" style={{ gap: '10px' }}>
                  <Icon size={16} color={plan.accent} strokeWidth={2} />
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: plan.accent,
                  }}>{plan.tag}</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: '26px', color: plan.text, marginBottom: '4px' }}>
                  {plan.title}
                </h3>
                <p style={{ fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-relaxed)', color: plan.muted }}>
                  {plan.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
                  {plan.features.map((item, j) => (
                    <div key={j} className="flex items-start" style={{ gap: '10px' }}>
                      <Check size={14} color={plan.accent} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '14px', color: plan.muted }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="reveal-price iw-card" style={{
          marginTop: '48px', borderLeft: '3px solid var(--gold)',
          background: 'var(--paper-warm)', display: 'flex', alignItems: 'flex-start', gap: '24px',
          padding: '24px 28px',
        }}>
          <Server size={20} color="var(--gold)" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <span className="iw-label" style={{ color: 'var(--forest-mid)', display: 'block', marginBottom: '6px' }}>Infrastructure</span>
            <p className="iw-body" style={{ maxWidth: '720px' }}>
              Low-cost foundation — approximately $25–40/month in base infrastructure. Scales gradually with usage, so you only pay for what you need.
            </p>
          </div>
        </div>

        <div className="text-center reveal-price" style={{ marginTop: '48px' }}>
          <p className="iw-body" style={{ marginBottom: '20px' }}>
            Founding rates are available for early teams. Book a walkthrough to see the product and get a tailored quote.
          </p>
          <Link to="/#early-access" className="iw-btn-primary">
            Book a Walkthrough
          </Link>
        </div>
      </div>
    </section>
  )
}
