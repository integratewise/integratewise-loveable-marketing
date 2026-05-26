import WorkbenchShell from './WorkbenchShell'

const contributors = [
  { name: 'Alex M.', count: 35, trend: '+12' },
  { name: 'Jordan T.', count: 28, trend: '+8' },
  { name: 'Sam C.', count: 21, trend: '+5' },
  { name: 'Taylor L.', count: 17, trend: '+3' },
  { name: 'Casey R.', count: 14, trend: '+2' },
]

const recentSearches = [
  { query: 'competitor pricing objections', count: 12 },
  { query: 'enterprise feature requests', count: 9 },
  { query: 'churn signals Q2', count: 7 },
  { query: 'API webhook feedback', count: 5 },
]

// Simple sparkline using CSS
function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - ((v - min) / range) * 100}`).join(' ')

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: '40px' }}>
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points={`0,100 ${points} 100,100`} fill={`${color}10`} />
    </svg>
  )
}

export default function BIHQWorkbench() {
  return (
    <WorkbenchShell
      title="HQ Dashboard"
      subtitle="Your team's intelligence at a glance"
      tabs={['Overview', 'Velocity', 'Topics', 'Team']}
      activeTab="Overview"
      accent="blue"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Top Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {[
            { label: 'Insights Captured', value: '156', change: '+23 this week', color: '#3B82F6' },
            { label: 'Search Queries', value: '89', change: '+12 this week', color: '#10B981' },
            { label: 'Team Active', value: '12', change: '3 online now', color: '#8B5CF6' },
            { label: 'Coverage', value: '94%', change: '+2% vs last week', color: '#B8943F' },
          ].map(m => (
            <div key={m.label} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,240,0.06)' }}>
              <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                <span style={{ fontSize: '28px', fontWeight: 700, color: m.color, lineHeight: 1 }}>{m.value}</span>
              </div>
              <div style={{ fontSize: '10px', color: '#10B981', marginTop: '4px' }}>{m.change}</div>
            </div>
          ))}
        </div>

        {/* Chart + Contributors */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,240,0.06)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#E2E8F0', marginBottom: '12px' }}>Insight Volume — Last 30 Days</div>
            <Sparkline data={[20, 25, 28, 35, 32, 38, 42, 45, 48, 52, 50, 55, 58, 60, 62, 65, 68, 72, 75, 78, 82, 85, 88, 92, 95, 98, 100, 105, 108, 112]} color="#10B981" />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '10px', color: 'rgba(226,232,240,0.25)' }}>
              <span>30 days ago</span>
              <span>Today</span>
            </div>
          </div>

          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,240,0.06)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#E2E8F0', marginBottom: '12px' }}>Top Contributors</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {contributors.map((c, i) => (
                <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '10px', color: 'rgba(226,232,240,0.25)', width: '14px' }}>{i + 1}</span>
                  <span style={{ fontSize: '12px', color: '#E2E8F0', flex: 1 }}>{c.name}</span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#3B82F6' }}>{c.count}</span>
                  <span style={{ fontSize: '10px', color: '#10B981' }}>{c.trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,240,0.06)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#E2E8F0', marginBottom: '10px' }}>Recent Searches</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {recentSearches.map(s => (
                <div key={s.query} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px', background: 'rgba(255,255,255,0.02)' }}>
                  <span style={{ fontSize: '12px', color: 'rgba(226,232,240,0.6)' }}>{s.query}</span>
                  <span style={{ fontSize: '11px', color: '#3B82F6', fontWeight: 600 }}>{s.count} results</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,240,0.06)' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#E2E8F9', marginBottom: '10px' }}>Trending Topics</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['#API-Docs', '#FeatureParity', '#EnterpriseTier', '#ChurnSignals', '#CompetitiveIntel', '#Pricing'].map(t => (
                <span key={t} style={{ padding: '5px 10px', background: 'rgba(59,130,246,0.08)', color: '#3B82F6', fontSize: '10px', fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WorkbenchShell>
  )
}
