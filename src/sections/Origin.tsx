import { useScrollReveal } from '@/hooks/useScrollReveal'
import {
  Quote,
  TrendingUp,
  Lightbulb,
  Target,
} from 'lucide-react'

export default function Origin() {
  const ref = useScrollReveal('.reveal-origin', { stagger: 0.15, y: 24 })

  const timeline = [
    {
      icon: Target,
      title: 'The Problem',
      body: 'A CSM managing 30+ accounts across six tools that refused to talk to each other. Also a MuleSoft Architect who had spent years building enterprise integrations.',
    },
    {
      icon: Lightbulb,
      title: 'The Build',
      body: 'A 15-layer schema. A unified intelligence graph that normalised data from every connected tool. A view that made every account instantly readable.',
    },
    {
      icon: TrendingUp,
      title: 'The Result',
      body: 'IntegrateWise was built to be the system for every CSM, operator, and founder who deals with context fragmentation. Not a feature. A foundation.',
    },
  ]

  return (
    <section className="iw-section" style={{ background: 'var(--paper-warm)', borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="iw-sidebar-grid">
          <div style={{ position: 'sticky', top: '100px' }}>
            <span className="iw-eyebrow reveal-origin">Origin</span>
            <h2 className="font-serif reveal-origin" style={{
              fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)',
              marginTop: '12px', maxWidth: '400px',
            }}>
              This was not built for a market. It was built because the founder needed it.
            </h2>
          </div>

          <div>
            <div className="reveal-origin" style={{ marginBottom: '32px' }}>
              <img
                src="/images/founder.jpg"
                alt="Founder"
                style={{ width: '100%', maxHeight: '360px', objectFit: 'cover', display: 'block', borderRadius: '4px' }}
              />
            </div>

            <div className="reveal-origin" style={{
              background: 'var(--paper-warm)',
              borderLeft: '3px solid var(--gold)',
              padding: '24px 28px',
              marginBottom: '32px',
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start',
            }}>
              <Quote size={24} color="var(--gold)" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--gold)', display: 'block', marginBottom: '8px',
                }}>The Moment</span>
                <p className="iw-body" style={{ fontSize: '16px', lineHeight: 1.55, fontStyle: 'italic', color: 'var(--ink)' }}>
                  "That system saved an $8 million red account. Not because the data was new. Because for the first time, it was all in one place, connected, and visible."
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {timeline.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="reveal-origin flex items-start"
                    style={{ gap: '14px', padding: '16px 0', borderTop: i > 0 ? '1px solid var(--rule)' : 'none' }}
                  >
                    <span style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(184, 148, 63, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={14} color="var(--gold)" strokeWidth={2} />
                    </span>
                    <div>
                      <h4 className="font-serif" style={{ fontSize: '16px', color: 'var(--ink)', marginBottom: '4px' }}>
                        {item.title}
                      </h4>
                      <p className="iw-body" style={{ fontSize: '14px', lineHeight: 1.6 }}>{item.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
