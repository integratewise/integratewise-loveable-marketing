import { useState } from 'react'
import WorkbenchShell from './WorkbenchShell'

const pendingApprovals = [
  {
    id: 1,
    type: 'risk',
    title: 'TechFlow churn probability 73%',
    description: 'Usage declined 40% over 3 weeks. Support tickets increased. Last engagement 12 days ago.',
    confidence: 91,
    evidence: [
      { source: 'Salesforce', text: 'Login activity down 45% this month' },
      { source: 'Zendesk', text: '7 tickets opened in past 14 days' },
      { source: 'Mixpanel', text: 'Feature adoption dropped to 23%' },
    ],
    proposedAction: 'Schedule executive business review. Prepare retention offer.',
  },
  {
    id: 2,
    type: 'opportunity',
    title: 'DataSystems expansion signal detected',
    description: 'Three departments requesting access. API usage up 200%. New stakeholder asking about enterprise features.',
    confidence: 88,
    evidence: [
      { source: 'Slack', text: '"Can we get the analytics team access too?" — Sarah M.' },
      { source: 'Stripe', text: 'API calls: 12K/day → 36K/day' },
      { source: 'CRM', text: 'New contact: VP Engineering added' },
    ],
    proposedAction: 'Propose enterprise tier upgrade. Schedule expansion call with VP.',
  },
  {
    id: 3,
    type: 'action',
    title: 'CloudNine stakeholder change alert',
    description: 'Previous champion left. New VP Customer Success joined from competitor. No introduction meeting scheduled.',
    confidence: 94,
    evidence: [
      { source: 'LinkedIn', text: 'Michael R. — VP Customer Success, ex-CompetitorX' },
      { source: 'CRM', text: 'Previous champion: departed 3 weeks ago' },
      { source: 'Email', text: 'No response to last 2 check-ins' },
    ],
    proposedAction: 'Schedule introductory call. Prepare competitive positioning deck.',
  },
]

function ConfidenceRing({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 18
  const offset = circumference - (value / 100) * circumference
  const color = value >= 90 ? '#10B981' : value >= 70 ? '#F59E0B' : '#EF4444'

  return (
    <div style={{ position: 'relative', width: 40, height: 40 }}>
      <svg width={40} height={40} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={20} cy={20} r={18} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={3} />
        <circle cx={20} cy={20} r={18} fill="none" stroke={color} strokeWidth={3}
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color }}>
        {value}%
      </div>
    </div>
  )
}

export default function CognitiveWorkbench() {
  const [selected, setSelected] = useState(1)
  const [approved, setApproved] = useState<number[]>([])
  const selectedItem = pendingApprovals.find(a => a.id === selected)

  return (
    <WorkbenchShell
      title="Cognitive Workbench"
      subtitle="AI proposes. You approve."
      tabs={['Pending', 'History', 'Rules', 'Audit']}
      activeTab="Pending"
      accent="gold"
    >
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '16px', height: '100%' }}>
        {/* Left — Approval Queue */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '4px' }}>
            Pending Approvals ({pendingApprovals.length})
          </div>
          {pendingApprovals.map(item => (
            <div
              key={item.id}
              onClick={() => setSelected(item.id)}
              style={{
                padding: '12px',
                background: selected === item.id ? 'rgba(184,148,63,0.08)' : 'rgba(255,255,255,0.02)',
                border: selected === item.id ? '1px solid rgba(184,148,63,0.2)' : '1px solid rgba(255,255,255,0.04)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: item.type === 'risk' ? '#EF4444' : item.type === 'opportunity' ? '#10B981' : '#3B82F6',
                }} />
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(226,232,240,0.4)' }}>{item.type}</span>
                {approved.includes(item.id) && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#10B981' }}>✓ Approved</span>}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.4 }}>{item.title}</div>
            </div>
          ))}
        </div>

        {/* Right — Detail View */}
        {selectedItem && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#F1F5F9' }}>{selectedItem.title}</div>
                <div style={{ fontSize: '12px', color: 'rgba(226,232,240,0.4)', marginTop: '4px', lineHeight: 1.5 }}>{selectedItem.description}</div>
              </div>
              <ConfidenceRing value={selectedItem.confidence} />
            </div>

            {/* Evidence */}
            <div>
              <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '10px' }}>Evidence from Spine</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedItem.evidence.map((e, i) => (
                  <div key={i} style={{
                    padding: '10px 12px',
                    background: 'rgba(255,255,255,0.02)',
                    borderLeft: '2px solid rgba(184,148,63,0.4)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}>
                    <span style={{ fontSize: '9px', color: '#B8943F', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, whiteSpace: 'nowrap' }}>{e.source}</span>
                    <span style={{ fontSize: '12px', color: 'rgba(226,232,240,0.6)' }}>{e.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proposed Action */}
            <div style={{
              padding: '14px',
              background: 'rgba(16,185,129,0.06)',
              border: '1px solid rgba(16,185,129,0.15)',
            }}>
              <div style={{ fontSize: '10px', color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '6px' }}>AI Proposed Action</div>
              <div style={{ fontSize: '13px', color: '#E2E8F0' }}>{selectedItem.proposedAction}</div>
            </div>

            {/* Lineage */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', color: 'rgba(226,232,240,0.25)' }}>
              <span>Lineage:</span>
              {['Loader', 'Normalizer', 'Spine', 'Twin', 'Cognitive'].map((step, i) => (
                <span key={step} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: i < 5 ? '#B8943F' : 'inherit' }}>{step}</span>
                  {i < 4 && <span>→</span>}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
              <button
                onClick={() => setApproved(prev => [...prev, selectedItem.id])}
                disabled={approved.includes(selectedItem.id)}
                style={{
                  padding: '10px 20px',
                  background: approved.includes(selectedItem.id) ? 'rgba(16,185,129,0.2)' : '#10B981',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: approved.includes(selectedItem.id) ? 'default' : 'pointer',
                  opacity: approved.includes(selectedItem.id) ? 0.6 : 1,
                }}
              >
                {approved.includes(selectedItem.id) ? 'Approved' : 'Approve'}
              </button>
              <button style={{
                padding: '10px 20px', background: 'transparent', color: '#E2E8F0',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '5px',
                fontSize: '12px', fontWeight: 500, cursor: 'pointer',
              }}>Adjust</button>
              <button style={{
                padding: '10px 20px', background: 'transparent', color: '#EF4444',
                border: '1px solid rgba(239,68,68,0.2)', borderRadius: '5px',
                fontSize: '12px', fontWeight: 500, cursor: 'pointer',
              }}>Reject</button>
              <button style={{
                padding: '10px 20px', background: 'transparent', color: 'rgba(226,232,240,0.4)',
                border: '1px solid rgba(255,255,255,0.06)', borderRadius: '5px',
                fontSize: '12px', fontWeight: 500, cursor: 'pointer', marginLeft: 'auto',
              }}>Defer</button>
            </div>
          </div>
        )}
      </div>
    </WorkbenchShell>
  )
}
