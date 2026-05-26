import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Assurances() {
  const ref = useScrollReveal('.reveal-assure', { stagger: 0.15, y: 24 })
  return (
    <section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="text-center reveal-assure" style={{ marginBottom: '48px' }}>
          <span className="iw-eyebrow">Assurances</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
            Three Guarantees
          </h2>
        </div>

        <div className="grid md:grid-cols-3" style={{ gap: '32px' }}>
          {[
            { num: '01', title: '30-Day ROI Guarantee', body: 'If you don’t reclaim measurable time within 30 days, your first month is refunded. No questions. No friction.' },
            { num: '02', title: 'Data Sovereignty', body: 'Your data stays in your infrastructure. The Spine is yours. You can export, inspect, and audit everything. Always.' },
            { num: '03', title: 'Human-in-the-Loop', body: 'AI proposes. You approve. Nothing executes without explicit human consent. Governance is in the architecture.' },
          ].map(a => (
            <div key={a.num} className="reveal-assure" style={{ background: 'var(--paper-warm)', border: '1px solid var(--rule)', padding: '28px' }}>
              <span className="font-display" style={{ fontSize: '36px', color: 'var(--paper-deep)', lineHeight: 1, display: 'block', marginBottom: '8px' }}>{a.num}</span>
              <h3 className="font-serif" style={{ fontSize: '20px', marginBottom: '10px' }}>{a.title}</h3>
              <p className="iw-body" style={{ fontSize: '14px' }}>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
