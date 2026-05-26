import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <div>
      {/* HERO */}
      <section className="iw-section" style={{ paddingTop: '96px' }}>
        <div className="max-w-content-narrow mx-auto text-center">
          <span className="iw-eyebrow block mb-4">Pricing</span>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            Simple. Transparent.<br />Based on value.
          </h1>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="iw-section" style={{ background: 'var(--paper-warm)', borderTop: '1px solid var(--rule)' }}>
        <div className="max-w-content-narrow mx-auto">
          <h2 className="iw-headline mb-6">The cost of not having it.</h2>
          <div className="space-y-4 mb-8">
            <div className="iw-card" style={{ padding: '16px' }}>
              <span className="iw-metric block">30-40%</span>
              <span className="iw-metric-label">of every knowledge worker's time</span>
              <p className="font-body text-[12px] mt-1" style={{ color: 'var(--ink-muted)' }}>Spent on integration work instead of actual work. Opening tabs. Cross-referencing. Rebuilding context. Explaining the same situation to AI.</p>
            </div>
            <div className="iw-card" style={{ padding: '16px' }}>
              <span className="iw-metric block">100%</span>
              <span className="iw-metric-label">of institutional knowledge</span>
              <p className="font-body text-[12px] mt-1" style={{ color: 'var(--ink-muted)' }}>Walks out the door when someone leaves. Because no system holds the full picture. Context, decisions, relationships, patterns — all disappear.</p>
            </div>
            <div className="iw-card" style={{ padding: '16px' }}>
              <span className="iw-metric block">Every 30 min</span>
              <span className="iw-metric-label">AI forgets everything</span>
              <p className="font-body text-[12px] mt-1" style={{ color: 'var(--ink-muted)' }}>You are not using AI. You are training AI. Over and over. Every single day. That is not a productivity gain. That is a productivity tax.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="iw-section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="max-w-content-default mx-auto">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="iw-eyebrow">Plans</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
              One tier. Full access.
            </h2>
          </div>

          <div className="grid md:grid-cols-3" style={{ gap: '24px', maxWidth: '960px', margin: '0 auto' }}>
            {/* Starter */}
            <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', padding: '36px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forest-mid)', display: 'block', marginBottom: '8px' }}>Starter</span>
              <div className="font-display" style={{ fontSize: '48px', lineHeight: 1, color: 'var(--ink)', marginBottom: '4px' }}>$199</div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-ghost)', display: 'block', marginBottom: '24px' }}>per month</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {['Up to 3 connected tools', '1 workbench', 'Basic search', 'Email support', '7-day data retention'].map((item, i) => (
                  <div key={i} className="flex items-start" style={{ gap: '10px' }}>
                    <span style={{ color: 'var(--forest-bright)', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '14px', color: 'var(--fg-muted)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link to="/contact" className="iw-btn-secondary" style={{ display: 'block', textAlign: 'center' }}>Contact Sales</Link>
              </div>
            </div>

            {/* Professional */}
            <div style={{ background: 'var(--forest)', color: 'var(--paper)', padding: '36px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-light)', display: 'block', marginBottom: '8px' }}>Professional</span>
              <div className="font-display" style={{ fontSize: '48px', lineHeight: 1, color: 'var(--gold)', marginBottom: '4px' }}>$499</div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'rgba(244,240,232,0.6)', display: 'block', marginBottom: '24px' }}>per month, per team</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {['Unlimited connected tools', '2 workbenches (Account Success + BI)', 'Governance & approval workflows', 'AI-powered conversational intelligence', 'Federated search across all data', 'Multi-account workspace support', 'Priority support & onboarding'].map((item, i) => (
                  <div key={i} className="flex items-start" style={{ gap: '10px' }}>
                    <span style={{ color: 'var(--gold-light)', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '14px', color: 'rgba(244,240,232,0.75)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link to="/contact" className="iw-btn-primary" style={{ display: 'block', textAlign: 'center', background: 'var(--gold)', color: 'var(--ink)', borderColor: 'var(--gold)' }}>Get Started</Link>
              </div>
            </div>

            {/* Enterprise */}
            <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', padding: '36px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forest-mid)', display: 'block', marginBottom: '8px' }}>Enterprise</span>
              <div className="font-display" style={{ fontSize: '48px', lineHeight: 1, color: 'var(--ink)', marginBottom: '4px' }}>Custom</div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-ghost)', display: 'block', marginBottom: '24px' }}>Annual contracts</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {['Everything in Professional', 'Custom integrations', 'Dedicated success manager', 'SLA guarantees', 'On-premise deployment option', 'Custom AI model training', 'Security audit & compliance'].map((item, i) => (
                  <div key={i} className="flex items-start" style={{ gap: '10px' }}>
                    <span style={{ color: 'var(--forest-bright)', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '14px', color: 'var(--fg-muted)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link to="/contact" className="iw-btn-secondary" style={{ display: 'block', textAlign: 'center' }}>Contact Sales</Link>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="text-center" style={{ marginTop: '48px' }}>
            <div style={{ display: 'inline-block', background: 'var(--paper-warm)', border: '1px solid var(--rule)', padding: '18px 28px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--forest-mid)', display: 'block', marginBottom: '4px' }}>30-Day ROI Guarantee</span>
              <span style={{ fontSize: '14px', color: 'var(--fg-muted)' }}>If you don't reclaim measurable time within 30 days, your first month is refunded.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
