import WorkbenchShell from './WorkbenchShell'

const signals = [
  { label: 'Churn Risk Detected', value: 73, color: '#EF4444', account: 'TechFlow' },
  { label: 'Usage Decline', value: 45, color: '#F59E0B', account: 'CloudNine' },
  { label: 'Expansion Signal', value: 88, color: '#10B981', account: 'DataSystems' },
  { label: 'Stakeholder Change', value: 34, color: '#3B82F6', account: 'Acme Corp' },
]

const workflowSteps = [
  { label: 'Fetch', status: 'done', icon: '↓' },
  { label: 'Normalize', status: 'done', icon: '↻' },
  { label: 'Analyze', status: 'active', icon: '◈' },
  { label: 'Propose', status: 'pending', icon: '◇' },
  { label: 'Review', status: 'pending', icon: '◉' },
  { label: 'Execute', status: 'pending', icon: '▸' },
]

const competitors = [
  { name: 'Competitor X', mentions: 12, trend: 'up', last: '2 days ago' },
  { name: 'LegacyVendor', mentions: 8, trend: 'down', last: '1 week ago' },
  { name: 'NewStartup Y', mentions: 3, trend: 'up', last: 'Today' },
]

function ProgressBar({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{ width: `${value}%`, height: '100%', background: color, borderRadius: '3px', transition: 'width 0.6s ease' }} />
      </div>
      <span style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', minWidth: '24px', textAlign: 'right' }}>{value}%</span>
    </div>
  )
}

function StatusDot({ color, size = 6 }: { color: string; size?: number }) {
  return <div style={{ width: size, height: size, borderRadius: '50%', background: color, boxShadow: `0 0 6px ${color}40` }} />
}

export default function TwinWorkbench() {
  return (
    <WorkbenchShell
      title="TWIN"
      subtitle="YOUR TOPIC, ACTION"
      tabs={['Overview', 'Opportunities', 'Risks', 'Tasks']}
      activeTab="Overview"
      accent="green"
      rightPanel={
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '10px' }}>INSIGHTS</div>
            <button style={{
              width: '100%', padding: '10px', background: '#10B981', color: '#fff',
              border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 600,
              cursor: 'pointer', marginBottom: '12px',
            }}>
              Action Required
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Action Accuracy', value: '95.8%', color: '#10B981' },
              { label: 'Response Time', value: '2.4s', color: '#3B82F6' },
              { label: 'Pending Review', value: '3', color: '#F59E0B' },
            ].map(m => (
              <div key={m.label} style={{ padding: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)' }}>{m.label}</div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: m.color, marginTop: '2px' }}>{m.value}</div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '10px' }}>WORKFLOW</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {workflowSteps.map((step) => (
                <div key={step.label} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '6px 8px',
                  background: step.status === 'active' ? 'rgba(16,185,129,0.1)' : 'transparent',
                  borderRadius: '4px',
                }}>
                  <span style={{
                    fontSize: '10px', color: step.status === 'done' ? '#10B981' : step.status === 'active' ? '#10B981' : 'rgba(226,232,240,0.2)',
                  }}>{step.icon}</span>
                  <span style={{
                    fontSize: '11px', color: step.status === 'pending' ? 'rgba(226,232,240,0.3)' : '#E2E8F0',
                    fontWeight: step.status === 'active' ? 600 : 400,
                  }}>{step.label}</span>
                  {step.status === 'active' && <span style={{ marginLeft: 'auto' }}><StatusDot color="#10B981" size={5} /></span>}
                  {step.status === 'done' && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#10B981' }}>✓</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {[
            { label: 'Active Signals', value: '13', color: '#10B981' },
            { label: 'At Risk', value: '7', color: '#EF4444' },
            { label: 'Opportunities', value: '26', color: '#3B82F6' },
            { label: 'Confidence', value: '66%', color: '#B8943F' },
          ].map(s => (
            <div key={s.label} style={{ padding: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: s.color, marginTop: '4px', lineHeight: 1 }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Summary + Sentiment */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Complete Summary</div>
            <div style={{ fontSize: '24px', fontWeight: 700, color: '#10B981' }}>Best</div>
            <div style={{ fontSize: '11px', color: 'rgba(226,232,240,0.3)', marginTop: '4px' }}>Based on 47 signals across 12 accounts</div>
          </div>
          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Sentiment</div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { label: 'Cleared', count: 8, color: '#10B981' },
                { label: 'Positive', count: 15, color: '#3B82F6' },
                { label: 'Warning', count: 6, color: '#F59E0B' },
                { label: 'Risk', count: 3, color: '#EF4444' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: s.color }}>{s.count}</div>
                  <div style={{ fontSize: '9px', color: 'rgba(226,232,240,0.3)', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Signals */}
        <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>Key Signals</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {signals.map(s => (
              <div key={s.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '12px', color: '#E2E8F0' }}>{s.label}</span>
                  <span style={{ fontSize: '10px', color: 'rgba(226,232,240,0.3)' }}>{s.account}</span>
                </div>
                <ProgressBar value={s.value} color={s.color} />
              </div>
            ))}
          </div>
        </div>

        {/* Competitors */}
        <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Competitors</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {competitors.map(c => (
              <div key={c.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <StatusDot color={c.trend === 'up' ? '#EF4444' : '#10B981'} size={5} />
                  <span style={{ fontSize: '12px', color: '#E2E8F0' }}>{c.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '11px', color: 'rgba(226,232,240,0.4)' }}>{c.mentions} mentions</span>
                  <span style={{ fontSize: '10px', color: 'rgba(226,232,240,0.25)' }}>{c.last}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WorkbenchShell>
  )
}
