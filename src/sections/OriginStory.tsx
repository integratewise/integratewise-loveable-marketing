import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function OriginStory() {
  const ref = useScrollReveal('.reveal-origin', { stagger: 0.15, y: 24 })
  return (
    <section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="iw-sidebar-grid">
          <div style={{ position: 'sticky', top: '100px' }}>
            <span className="iw-eyebrow reveal-origin">Origin Story</span>
            <h2 className="font-serif reveal-origin" style={{
              fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)',
              marginTop: '12px', maxWidth: '400px',
            }}>
              Built From the Seat
            </h2>
          </div>

          <div>
            <div className="reveal-origin" style={{ marginBottom: '32px' }}>
              <img src="/images/before-after.jpg" alt="The transformation — from scattered to unified"
                style={{ width: '100%', maxHeight: '320px', objectFit: 'cover', display: 'block' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="reveal-origin">
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--forest-mid)',
                  display: 'block', marginBottom: '6px',
                }}>2019–2023 — Four Companies, One Problem</span>
                <p className="iw-body">Across Accenture, Deloitte, a startup, and Huawei — Nirmal was the human integration layer. Six tools. Thirty accounts. Context that reset every 30 minutes. He lived the exact problem IntegrateWise solves, across the most demanding enterprise environments.</p>
              </div>
              <div className="reveal-origin">
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--forest-mid)',
                  display: 'block', marginBottom: '6px',
                }}>2024 — The Architecture Begins</span>
                <p className="iw-body">Working as a MuleSoft Integration Architect, Nirmal began formally building a unified operational environment. The Loader. The Normalizer. The Spine. Not a side project — a complete system designed from the ground up to eliminate the human API.</p>
              </div>
              <div className="reveal-origin">
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--forest-mid)',
                  display: 'block', marginBottom: '6px',
                }}>2025 — Salesforce & The Night Shift</span>
                <p className="iw-body">Joined Salesforce as a CSM — the exact user the product is built for. Built IntegrateWise from 10:30 PM to 3 AM every night. Then left to go full-time. Got pneumonia. Spent ₹8 lakh recovering. Did not stop.</p>
              </div>
              <div className="reveal-origin" style={{
                background: 'var(--paper-warm)', borderLeft: '3px solid var(--gold)', padding: '18px 22px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--gold)', display: 'block', marginBottom: '6px',
                }}>2026 — What Exists Today</span>
                <p className="iw-body" style={{ fontSize: '14px' }}>
                  ₹1.5 crore. 23 months. A complete memory-native operating system — not a prototype. Built by the person who felt the problem most deeply, for the longest time, across the most contexts. That is what anyone sitting at this table is joining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
