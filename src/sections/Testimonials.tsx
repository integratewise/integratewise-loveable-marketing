import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Quote, Star } from 'lucide-react'

export default function Testimonials() {
  const ref = useScrollReveal('.reveal-testi', { stagger: 0.15, y: 24 })

  const testimonials = [
    {
      quote: "For the first time, I walked into a QBR and didn't spend 20 minutes scrambling through four tools to remember what happened last quarter. The account spine had everything.",
      role: 'Senior CSM',
      company: 'Enterprise SaaS',
      context: 'Founding partner program',
    },
    {
      quote: "We replaced two dashboards and a Notion wiki with one WorkBench. My team actually uses it because the context is already there. They don't have to maintain it.",
      role: 'Head of Customer Success',
      company: 'Series B Fintech',
      context: 'Founding partner program',
    },
    {
      quote: "The governance layer is what sold us. Every AI suggestion shows its source. My compliance team finally stopped blocking AI experiments.",
      role: 'COO',
      company: 'Healthcare Platform',
      context: 'Early access',
    },
  ]

  const metrics = [
    { value: '30-40%', label: 'Time reclaimed per week' },
    { value: '15', label: 'Intelligence layers per account' },
    { value: '3', label: 'Memory layers connected' },
    { value: '89%', label: 'Renewal risk prediction accuracy' },
  ]

  return (
    <section className="iw-section" style={{ background: 'var(--paper)', borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="text-center reveal-testi" style={{ marginBottom: '64px' }}>
          <span className="iw-eyebrow">Early Signals</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
            What founding teams are saying.
          </h2>
        </div>

        {/* Metrics bar */}
        <div className="reveal-testi grid grid-cols-2 md:grid-cols-4" style={{ gap: '2px', background: 'var(--rule)', marginBottom: '64px' }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ background: 'var(--paper-warm)', padding: '28px', textAlign: 'center' }}>
              <div className="font-display" style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, color: 'var(--forest)', marginBottom: '8px' }}>
                {m.value}
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-ghost)', letterSpacing: '0.08em' }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="grid md:grid-cols-3" style={{ gap: '24px' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal-testi"
              style={{
                background: 'var(--paper-warm)',
                border: '1px solid var(--rule)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} color="var(--gold)" fill="var(--gold)" strokeWidth={1.5} />
                ))}
              </div>
              <Quote size={20} color="var(--gold)" strokeWidth={2} style={{ opacity: 0.4 }} />
              <p className="iw-body" style={{ fontSize: '15px', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', flex: 1 }}>
                "{t.quote}"
              </p>
              <div style={{ borderTop: '1px solid var(--rule-light)', paddingTop: '16px' }}>
                <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)', display: 'block' }}>{t.role}</span>
                <span style={{ fontSize: '12px', color: 'var(--ink-ghost)' }}>{t.company}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)', display: 'block', marginTop: '4px', letterSpacing: '0.06em' }}>
                  {t.context}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
