import WorkbenchShell from './WorkbenchShell'

const searchResults = [
  {
    id: 1, account: 'Acme Corp', risk: 'High', health: 62,
    renewal: '23 days', lastEngaged: '18 days ago',
    evidence: 'CRM: "Client sentiment negative, budget cuts expected." Support: 5 escalated tickets.',
  },
  {
    id: 2, account: 'TechFlow', risk: 'Medium', health: 74,
    renewal: '41 days', lastEngaged: '5 days ago',
    evidence: 'Usage declined 23% over 30 days. Competitor X mentioned in last call.',
  },
  {
    id: 3, account: 'DataSystems', risk: 'High', health: 58,
    renewal: '12 days', lastEngaged: '21 days ago',
    evidence: 'Previous champion departed. No new stakeholder identified. 3 support tickets unresolved.',
  },
]

function HealthDot({ health }: { health: number }) {
  const color = health >= 80 ? '#10B981' : health >= 60 ? '#F59E0B' : '#EF4444'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, boxShadow: `0 0 6px ${color}40` }} />
      <span style={{ fontSize: '12px', fontWeight: 600, color }}>{health}%</span>
    </div>
  )
}

export default function BISearchWorkbench() {
  return (
    <WorkbenchShell
      title="Search"
      subtitle="Ask your organizational memory"
      tabs={['Natural Language', 'Filters', 'Recent']}
      activeTab="Natural Language"
      accent="blue"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Search Input */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          background: 'rgba(255,255,255,0.04)', padding: '14px 18px',
          border: '1px solid rgba(59,130,246,0.15)',
        }}>
          <span style={{ fontSize: '14px', color: '#3B82F6' }}>🔍</span>
          <span style={{ fontSize: '14px', color: '#E2E8F0', fontWeight: 500 }}>Which accounts are at risk in financial services?</span>
        </div>

        {/* Results summary */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: 'rgba(226,232,240,0.4)' }}>
          <span>Results: <strong style={{ color: '#E2E8F0' }}>3 accounts</strong></span>
          <span>Signals: <strong style={{ color: '#E2E8F0' }}>12 supporting</strong></span>
          <span>Confidence: <strong style={{ color: '#10B981' }}>89%</strong></span>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {['Financial Services', 'Healthcare', 'SaaS', 'Enterprise'].map(f => (
            <span key={f} style={{
              padding: '5px 12px', fontSize: '11px',
              background: f === 'Financial Services' ? 'rgba(59,130,246,0.1)' : 'rgba(255,255,255,0.03)',
              color: f === 'Financial Services' ? '#3B82F6' : 'rgba(226,232,240,0.4)',
              border: `1px solid ${f === 'Financial Services' ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.06)'}`,
              cursor: 'pointer',
            }}>{f}</span>
          ))}
        </div>

        {/* Result Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {searchResults.map(r => (
            <div key={r.id} style={{
              padding: '16px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,240,0.06)',
              borderLeft: `3px solid ${r.risk === 'High' ? '#EF4444' : '#F59E0B'}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#F1F5F9' }}>{r.account}</span>
                  <span style={{
                    padding: '2px 8px', fontSize: '9px', fontWeight: 600, textTransform: 'uppercase',
                    background: r.risk === 'High' ? 'rgba(239,68,68,0.1)' : 'rgba(245,158,11,0.1)',
                    color: r.risk === 'High' ? '#EF4444' : '#F59E0B',
                  }}>{r.risk} Risk</span>
                </div>
                <HealthDot health={r.health} />
              </div>

              <div style={{ display: 'flex', gap: '24px', marginBottom: '10px', fontSize: '11px', color: 'rgba(226,232,240,0.3)' }}>
                <span>Renewal: <strong style={{ color: '#E2E8F0' }}>{r.renewal}</strong></span>
                <span>Last engaged: <strong style={{ color: r.lastEngaged.includes('21') ? '#EF4444' : '#E2E8F0' }}>{r.lastEngaged}</strong></span>
              </div>

              <div style={{ padding: '10px', background: 'rgba(255,255,255,0.02)', fontSize: '12px', color: 'rgba(226,232,240,0.45)', lineHeight: 1.5 }}>
                {r.evidence}
              </div>
            </div>
          ))}
        </div>
      </div>
    </WorkbenchShell>
  )
}
