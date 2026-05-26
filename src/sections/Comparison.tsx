import { useScrollReveal } from '@/hooks/useScrollReveal'

const rows = [
  { feature: 'Persistent memory', iw: 'Yes — Spine', chatgpt: 'No — session only', cs: 'Partial', dashboards: 'No' },
  { feature: 'Multi-tool context', iw: 'Yes — all tools', chatgpt: 'No', cs: 'CRM + own data', dashboards: 'Read-only' },
  { feature: 'Round trip', iw: 'Yes — full cycle', chatgpt: 'No', cs: 'No', dashboards: 'No' },
  { feature: 'Proactive insights', iw: 'Yes', chatgpt: 'No — waits for prompt', cs: 'Limited', dashboards: 'No' },
  { feature: 'Governance / HITL', iw: 'Built into architecture', chatgpt: 'No', cs: 'No', dashboards: 'No' },
  { feature: 'Model independence', iw: 'Yes — 365+ models', chatgpt: 'No — locked', cs: 'No', dashboards: 'No' },
  { feature: 'Provider independence', iw: 'Yes — swap freely', chatgpt: 'No', cs: 'No', dashboards: 'No' },
  { feature: 'Organisational memory', iw: 'Yes — persists when people leave', chatgpt: 'No', cs: 'No', dashboards: 'No' },
  { feature: 'Data writeback', iw: 'Yes — to all tools', chatgpt: 'No', cs: 'CRM only', dashboards: 'No' },
  { feature: 'Built by the user', iw: 'Yes — by a CSM', chatgpt: 'No', cs: 'No', dashboards: 'No' },
]

export default function Comparison() {
  const ref = useScrollReveal('.reveal-comp', { stagger: 0.05, y: 16 })
  return (
    <section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="text-center reveal-comp" style={{ marginBottom: '48px' }}>
          <span className="iw-eyebrow">The Difference</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
            Nothing else does the round trip
          </h2>
          <p className="iw-body" style={{ maxWidth: '640px', margin: '16px auto 0' }}>
            Every AI product gives you a smart model and no memory. Every dashboard shows data but cannot act on it. IntegrateWise is the only system that connects, remembers, governs, and executes — as one architecture.
          </p>
        </div>

        <div className="reveal-comp" style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', minWidth: '720px', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '2px solid var(--rule)', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-ghost)', fontWeight: 500 }}></th>
                <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '2px solid var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--forest)', fontWeight: 600 }}>IntegrateWise</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '2px solid var(--rule)', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-ghost)', fontWeight: 500 }}>ChatGPT / Copilot</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '2px solid var(--rule)', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-ghost)', fontWeight: 500 }}>CS Platforms</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '2px solid var(--rule)', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-ghost)', fontWeight: 500 }}>Dashboards</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--rule-light)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--ink)' }}>{row.feature}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--forest-bright)', fontWeight: 600, background: 'rgba(26,58,42,0.03)' }}>{row.iw}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--red)' }}>{row.chatgpt}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--ink-muted)' }}>{row.cs}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--ink-muted)' }}>{row.dashboards}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
