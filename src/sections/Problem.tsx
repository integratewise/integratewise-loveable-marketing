import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Problem() {
  const ref = useScrollReveal('.reveal-pain', { stagger: 0.15, y: 30 })
  return (
    <section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="iw-sidebar-grid">
          <div style={{ position: 'sticky', top: '100px' }}>
            <span className="font-display" style={{ fontSize: 'clamp(48px, 5vw, 80px)', color: 'var(--paper-deep)', lineHeight: 1, display: 'block' }}>01</span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--forest-mid)', display: 'block', marginTop: '8px',
            }}>Foundation</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
              The Core Operational Pain
            </h2>
          </div>

          <div>
            <div className="reveal-pain" style={{ marginBottom: '32px' }}>
              <img
                src="/images/day-with-without.jpg"
                alt="A day with IntegrateWise vs a day without — the contrast in productivity and clarity"
                style={{ width: '100%', maxHeight: '320px', objectFit: 'cover', display: 'block', marginBottom: '16px' }}
              />
            </div>

            <p className="reveal-pain font-serif" style={{ fontSize: 'clamp(22px, 2vw, 30px)', lineHeight: 1.25, color: 'var(--ink)', marginBottom: '32px' }}>
              You don't have a software problem. You have a <strong>fragmentation problem</strong>. Every app your team uses is a closed box. Because no single tool holds the complete story, your team wastes hours every day performing <strong>manual coordination labor</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { num: '01', title: 'The 15-Tab Scramble', text: 'Constantly jumping between a dozen open browser windows to piece together why a project is stuck, a milestone was dropped, or a critical client invoice is past due. Your team performs digital archaeology just to understand what happened yesterday.' },
                { num: '02', title: 'The Broken Hand-off', text: 'Sales teams win a deal, but the background notes get lost in transit. The onboarding team starts from scratch, forcing the client to repeat their entire story all over again. Every transition becomes a reset button on institutional knowledge.' },
                { num: '03', title: 'The Empty-Box Problem', text: 'Standard AI helpers force your team to manually copy and paste background data, history, and context into a blank prompt window every single time just to get a basic summary. The AI has no memory of your business.' },
              ].map(card => (
                <div key={card.num} className="reveal-pain" style={{
                  background: 'var(--paper-warm)', border: '1px solid var(--rule)', padding: '28px',
                  borderLeft: '3px solid var(--red)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--red)', opacity: 0.7,
                    display: 'block', marginBottom: '8px',
                  }}>Pain Point {card.num}</span>
                  <h3 className="font-serif" style={{ fontSize: 'clamp(22px, 2vw, 30px)', lineHeight: 1.25, color: 'var(--ink)', marginBottom: '10px' }}>
                    {card.title}
                  </h3>
                  <p className="iw-body">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="reveal-pain" style={{
              marginTop: '32px', background: 'rgba(139, 32, 32, 0.04)',
              borderLeft: '3px solid var(--red)', padding: '18px 22px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--red)', opacity: 0.65, display: 'block', marginBottom: '6px',
              }}>The Operational Risk</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--red)', lineHeight: 1.6 }}>
                The true story of your business only forms inside an employee's head — and only for as long as they work there.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
