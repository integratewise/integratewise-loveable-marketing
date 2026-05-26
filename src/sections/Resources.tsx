import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Link } from 'react-router-dom'

export default function Resources() {
  const ref = useScrollReveal('.reveal-res', { stagger: 0.15, y: 24 })
  return (
    <section className="iw-section" style={{ background: 'var(--paper-warm)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="text-center reveal-res" style={{ marginBottom: '48px' }}>
          <span className="iw-eyebrow">Resources</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
            Start Here
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2px', background: 'var(--rule)' }}>
          {[
            { title: 'What is IntegrateWise?', subtitle: '2 min read', path: '/how-it-works' },
            { title: 'Architecture Overview', subtitle: '3 min read', path: '/how-it-works' },
            { title: 'Workbenches Explained', subtitle: '4 min read', path: '/how-it-works' },
            { title: 'Integration Guide', subtitle: '2 min read', path: '/how-it-works' },
          ].map((r, i) => (
            <Link key={i} to={r.path} className="reveal-res" style={{
              background: 'var(--paper)', padding: '28px', display: 'flex',
              flexDirection: 'column', gap: '8px', textDecoration: 'none',
              borderBottom: '3px solid transparent', transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}>
              <span className="font-serif" style={{ fontSize: '17px', color: 'var(--ink)' }}>{r.title}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-ghost)' }}>{r.subtitle}</span>
            </Link>
          ))}
        </div>

        <div className="reveal-res" style={{
          marginTop: '64px', padding: '48px', background: 'var(--forest)', color: 'var(--paper)',
          textAlign: 'center', borderRadius: '2px',
        }}>
          <h3 className="font-serif" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, marginBottom: '12px' }}>
            Ready to stop being the human API?
          </h3>
          <p style={{ maxWidth: '560px', margin: '0 auto 24px', color: 'rgba(244,240,232,0.65)', fontSize: '16px', lineHeight: 1.65 }}>
            One surface. One memory system. One loop where work is assembled, remembered, and governed. Not another app. An operating layer.
          </p>
          <Link to="/contact" className="iw-btn-primary" style={{
            display: 'inline-block', background: 'var(--gold)', color: 'var(--ink)',
            borderColor: 'var(--gold)',
          }}>
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
