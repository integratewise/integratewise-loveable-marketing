import WorkbenchShell from './WorkbenchShell'

const insights = [
  {
    id: 1, type: 'competitive', confidence: 94,
    text: 'Customer mentioned Competitor X pricing is "significantly lower for similar features" — third time this month.',
    source: '#sales Slack', author: 'James K.', time: '2h ago',
    tags: ['#competitive-intel', '#pricing', '#finserv'],
  },
  {
    id: 2, type: 'product', confidence: 88,
    text: 'Enterprise customer requesting webhook API for real-time sync. Product team considering Q2 roadmap.',
    source: '#product Slack', author: 'Lisa M.', time: '5h ago',
    tags: ['#product-feedback', '#api', '#enterprise'],
  },
  {
    id: 3, type: 'market', confidence: 91,
    text: 'Three prospects in healthcare vertical asked about HIPAA compliance in past two weeks.',
    source: '#gtm Slack', author: 'Robert C.', time: '1d ago',
    tags: ['#market-signal', '#healthcare', '#compliance'],
  },
  {
    id: 4, type: 'feature', confidence: 85,
    text: 'Customer success team notes repeated request for custom dashboards from 5 enterprise accounts.',
    source: 'CS Team Update', author: 'Sarah P.', time: '1d ago',
    tags: ['#feature-request', '#enterprise', '#dashboard'],
  },
  {
    id: 5, type: 'churn', confidence: 92,
    text: 'Appcues account showing decreased engagement — login frequency down 34% over 30 days.',
    source: 'Auto-detected', author: 'Twin AI', time: '3h ago',
    tags: ['#churn-risk', '#engagement', '#action-required'],
  },
]

const typeColors: Record<string, string> = {
  competitive: '#EF4444',
  product: '#3B82F6',
  market: '#10B981',
  feature: '#8B5CF6',
  churn: '#F59E0B',
}

const channels = [
  { name: '#sales', count: 23, active: true },
  { name: '#product', count: 18, active: true },
  { name: '#gtm', count: 12, active: true },
  { name: '#customer-success', count: 31, active: true },
  { name: '#engineering', count: 8, active: false },
  { name: '#general', count: 45, active: false },
]

export default function BIInsightsWorkbench() {
  return (
    <WorkbenchShell
      title="Business Intelligence"
      subtitle="Insights from your team's conversations"
      tabs={['Feed', 'Search', 'Dashboard', 'Review']}
      activeTab="Feed"
      accent="blue"
      rightPanel={
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '12px' }}>Channels</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {channels.map(ch => (
                <div key={ch.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px', background: ch.active ? 'rgba(59,130,246,0.08)' : 'transparent', borderRadius: '4px' }}>
                  <span style={{ fontSize: '11px', color: ch.active ? '#E2E8F0' : 'rgba(226,232,240,0.3)' }}>{ch.name}</span>
                  <span style={{ fontSize: '10px', color: 'rgba(226,232,240,0.25)' }}>{ch.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '12px' }}>This Week</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Insights Captured', value: '47', change: '+12' },
                { label: 'Search Queries', value: '89', change: '+24' },
                { label: 'Team Active', value: '12', change: '+3' },
              ].map(m => (
                <div key={m.label}>
                  <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.3)' }}>{m.label}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '2px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 700, color: '#3B82F6' }}>{m.value}</span>
                    <span style={{ fontSize: '10px', color: '#10B981' }}>{m.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '12px' }}>Trending Tags</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {['#competitive-intel', '#pricing', '#enterprise', '#api', '#churn-risk', '#healthcare'].map(tag => (
                <span key={tag} style={{ padding: '4px 8px', background: 'rgba(59,130,246,0.1)', color: '#3B82F6', fontSize: '10px', borderRadius: '3px' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Header stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4px' }}>
          <span style={{ fontSize: '11px', color: 'rgba(226,232,240,0.4)' }}>Team Activity:</span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#10B981' }}>23 insights captured this week</span>
          <span style={{ fontSize: '11px', color: 'rgba(226,232,240,0.25)' }}>156 total</span>
        </div>

        {/* Search bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          background: 'rgba(255,255,255,0.04)', padding: '10px 14px',
          border: '1px solid rgba(255,255,255,0.06)', marginBottom: '4px',
        }}>
          <span style={{ fontSize: '13px', color: 'rgba(226,232,240,0.3)' }}>🔍</span>
          <span style={{ fontSize: '13px', color: 'rgba(226,232,240,0.3)' }}>What are customers saying about pricing?</span>
        </div>

        {/* Insight Cards */}
        {insights.map(insight => (
          <div
            key={insight.id}
            style={{
              padding: '16px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,240,0.06)',
              borderLeft: `3px solid ${typeColors[insight.type]}`,
              transition: 'all 0.15s ease',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{
                padding: '2px 8px', fontSize: '9px', textTransform: 'uppercase',
                letterSpacing: '0.05em', fontWeight: 600,
                background: `${typeColors[insight.type]}15`, color: typeColors[insight.type],
              }}>{insight.type}</span>
              <span style={{ fontSize: '10px', color: 'rgba(226,232,240,0.25)' }}>Confidence: {insight.confidence}%</span>
              <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'rgba(226,232,240,0.25)' }}>{insight.time}</span>
            </div>

            <div style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: 1.5, marginBottom: '10px' }}>
              {insight.text}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {insight.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '10px', color: '#3B82F6', background: 'rgba(59,130,246,0.08)', padding: '2px 6px' }}>{tag}</span>
                ))}
              </div>
              <span style={{ fontSize: '10px', color: 'rgba(226,232,240,0.3)' }}>{insight.source} · {insight.author}</span>
            </div>
          </div>
        ))}
      </div>
    </WorkbenchShell>
  )
}
