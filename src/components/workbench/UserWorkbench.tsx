import WorkbenchShell from './WorkbenchShell'

const taskColumns = [
  {
    title: 'At Risk',
    color: '#EF4444',
    tasks: [
      { id: 1, text: 'Prepare renewal deck for TechFlow', account: 'TechFlow', days: '2 days', risk: 'High' },
      { id: 2, text: 'Executive escalation — DataSystems', account: 'DataSystems', days: 'Today', risk: 'Critical' },
      { id: 3, text: 'Review churn signals for CloudNine', account: 'CloudNine', days: '3 days', risk: 'Medium' },
    ],
  },
  {
    title: 'In Progress',
    color: '#F59E0B',
    tasks: [
      { id: 4, text: 'Schedule QBR with Acme Corp', account: 'Acme Corp', days: '5 days', risk: 'Low' },
      { id: 5, text: 'Follow up on API integration request', account: 'BuildRight', days: '1 week', risk: 'Low' },
      { id: 6, text: 'Stakeholder mapping — new exec', account: 'FinanceHub', days: '4 days', risk: 'Medium' },
    ],
  },
  {
    title: 'Review',
    color: '#10B981',
    tasks: [
      { id: 7, text: 'Approve AI-suggested risk update', account: 'Appcues', days: 'Today', risk: 'Low' },
      { id: 8, text: 'Confirm success plan milestones', account: 'TechFlow', days: '2 days', risk: 'Low' },
      { id: 9, text: 'Validate health score recalculation', account: 'Multi', days: '1 week', risk: 'Low' },
    ],
  },
]

const transactions = [
  { name: 'Appcues Corporation', type: 'Product Building', status: 'Active', health: 87 },
  { name: 'IT Services Corp', type: 'IT Services', status: 'At Risk', health: 42 },
  { name: 'FinanceHub', type: 'Financial Services', status: 'Active', health: 91 },
  { name: 'Hospital Operations', type: 'Healthcare', status: 'Warning', health: 68 },
]

function HealthRing({ score, size = 60 }: { score: number; size?: number }) {
  const circumference = 2 * Math.PI * ((size - 8) / 2)
  const offset = circumference - (score / 100) * circumference
  const color = score >= 80 ? '#10B981' : score >= 60 ? '#F59E0B' : '#EF4444'

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={(size - 8) / 2} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
        <circle
          cx={size / 2} cy={size / 2} r={(size - 8) / 2}
          fill="none" stroke={color} strokeWidth="4"
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: `${size * 0.28}px`, fontWeight: 700, color: '#F1F5F9',
      }}>{score}</div>
    </div>
  )
}

export default function UserWorkbench() {
  return (
    <WorkbenchShell
      title="Account Success"
      subtitle="Your command center"
      tabs={['Overview', 'Accounts', 'Health', 'Activity']}
      activeTab="Overview"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Greeting + Search */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 600, color: '#F1F5F9' }}>
              Good morning, Alex <span style={{ fontSize: '16px' }}>👋</span>
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(226,232,240,0.4)', marginTop: '2px' }}>You have 4 accounts requiring attention today</div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.04)', padding: '8px 14px',
            borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)',
            fontSize: '12px', color: 'rgba(226,232,240,0.4)', width: '240px',
          }}>
            <span>🔍</span> Search accounts...
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
          {[
            { label: 'Health Score', value: '82', change: '+4', up: true, color: '#10B981' },
            { label: 'Tasks Due', value: '18', change: '3 urgent', up: false, color: '#F59E0B' },
            { label: 'Insights', value: '5', change: '2 new', up: true, color: '#3B82F6' },
            { label: 'Action Items', value: '8', change: 'awaiting', up: false, color: '#8B5CF6' },
            { label: 'Review', value: '24', change: 'pending', up: false, color: '#B8943F' },
          ].map(stat => (
            <div key={stat.label} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '14px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              <span style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '28px', fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</span>
                <span style={{ fontSize: '10px', color: 'rgba(226,232,240,0.3)' }}>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Task Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {taskColumns.map(col => (
            <div key={col.title} style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '12px',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginBottom: '12px', paddingBottom: '10px',
                borderBottom: `2px solid ${col.color}`,
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: col.color }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{col.title}</span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'rgba(226,232,240,0.3)', fontWeight: 600 }}>{col.tasks.length}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {col.tasks.map(task => (
                  <div key={task.id} style={{
                    padding: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    borderLeft: `2px solid ${col.color}`,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}>
                    <div style={{ fontSize: '12px', color: '#E2E8F0', fontWeight: 500, lineHeight: 1.4 }}>{task.text}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                      <span style={{ fontSize: '10px', color: 'rgba(226,232,240,0.3)' }}>{task.account}</span>
                      <span style={{ fontSize: '10px', color: col.color }}>{task.days}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transactions */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(226,232,240,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Recent Accounts</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {transactions.map(t => (
              <div key={t.name} style={{
                padding: '14px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,240,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <HealthRing score={t.health} size={44} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '12px', fontWeight: 500, color: '#E2E8F0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.name}</div>
                  <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.3)', marginTop: '2px' }}>{t.type}</div>
                  <div style={{ fontSize: '10px', color: t.status === 'Active' ? '#10B981' : t.status === 'Warning' ? '#F59E0B' : '#EF4444', marginTop: '4px', fontWeight: 500 }}>{t.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WorkbenchShell>
  )
}
