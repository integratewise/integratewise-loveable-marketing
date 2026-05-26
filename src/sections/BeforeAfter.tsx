import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function BeforeAfter() {
  const ref = useScrollReveal('.reveal-ba', { stagger: 0.15, y: 24 })
  return (
    <section className="iw-section" style={{ background: 'var(--paper-warm)', borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="reveal-ba" style={{ marginBottom: '40px' }}>
          <span className="iw-eyebrow">Reality Check</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', maxWidth: '640px' }}>
            The same story, every day. Until it isn't.
          </h2>
        </div>

        <div className="reveal-ba" style={{ marginBottom: '48px' }}>
          <img
            src="/images/before-after.jpg"
            alt="Before: scattered tools and lost context. After: unified workbench with everything connected"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div className="grid lg:grid-cols-2 reveal-ba" style={{ gap: '32px' }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--red)', letterSpacing: '0.12em',
              textTransform: 'uppercase', display: 'block', marginBottom: '12px',
            }}>Without IntegrateWise</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Open 6 tabs to prepare for one client call',
                'Re-explain account history to AI every 30 minutes',
                'Miss a critical Slack thread you were not tagged in',
                'Spend 4 hours on manual coordination labor',
                'Watch institutional knowledge walk out with every departure',
              ].map((b, i) => (
                <div key={i} className="flex items-start" style={{ gap: '10px' }}>
                  <span style={{ color: 'var(--red)', flexShrink: 0, fontSize: '14px' }}>×</span>
                  <span className="iw-body" style={{ fontSize: '14px' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--forest-bright)', letterSpacing: '0.12em',
              textTransform: 'uppercase', display: 'block', marginBottom: '12px',
            }}>With IntegrateWise</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'One click — full account story, every conversation, every decision',
                'AI remembers everything. You just approve or adjust',
                'The Spine surfaces what you missed before it becomes a problem',
                'Reclaim 10+ hours per week from tab-switching',
                'Every departure leaves knowledge behind, not gaps',
              ].map((b, i) => (
                <div key={i} className="flex items-start" style={{ gap: '10px' }}>
                  <span style={{ color: 'var(--forest-bright)', flexShrink: 0, fontSize: '14px' }}>✓</span>
                  <span className="iw-body" style={{ fontSize: '14px' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
