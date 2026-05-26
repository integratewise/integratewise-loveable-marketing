import { useScrollReveal } from '@/hooks/useScrollReveal'
import AppWindowFrame from '@/components/frames/AppWindowFrame'

export default function Features() {
  const ref = useScrollReveal('.reveal-feat', { stagger: 0.1, y: 20 })

  const features = [
    {
      num: '01', title: 'Multi-Account Workspace',
      body: 'One pane for every account, project, or customer relationship. Connect data from CRM, billing, support, delivery, and execution. Eliminate the tab scramble.',
      hasFrame: true,
      frame: (
        <AppWindowFrame size="snippet" showTrafficLights={false} breadcrumbs={['Account Console']}>
          <div style={{ fontSize: '11px', color: '#1A1A14' }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
              <span style={{ background: '#E8F5E9', padding: '2px 6px', borderRadius: '4px', fontSize: '10px' }}>Axiom Financial</span>
              <span style={{ background: '#FFF3E0', padding: '2px 6px', borderRadius: '4px', fontSize: '10px' }}>MedCore</span>
            </div>
            <div style={{ height: '4px', background: '#E8E2D4', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '87%', height: '100%', background: '#2D7A4F' }} />
            </div>
          </div>
        </AppWindowFrame>
      ),
    },
    { num: '02', title: 'Connected Task Views', body: 'Tasks are real objects with source, status, urgency, and assignee — not flat lists. The AI sees the full context behind every to-do.', hasFrame: false },
    { num: '03', title: 'Conversational Intelligence', body: 'AI reads everything across tools and highlights patterns. "Show all 5 tickets from last week." "Find the reason this account churned."', hasFrame: false },
    {
      num: '04', title: 'Agentic Operations',
      body: 'The AI can act on your behalf. Reconcile a row. Draft a note. Update a record. Approve or reject — governance is in the architecture.',
      hasFrame: true,
      frame: (
        <AppWindowFrame size="snippet" showTrafficLights={false} breadcrumbs={['Governance']}>
          <div style={{ fontSize: '11px', color: '#1A1A14' }}>
            <div style={{ padding: '4px', background: '#FDFAF4', border: '1px solid #D4CDB8', borderRadius: '4px', marginBottom: '4px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600 }}>Escalate TechFlow</div>
              <div style={{ fontSize: '9px', color: '#6B6556' }}>Confidence: 89%</div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <span style={{ background: '#2D7A4F', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '9px' }}>Approve</span>
              <span style={{ background: '#fff', border: '1px solid #D4CDB8', padding: '2px 6px', borderRadius: '4px', fontSize: '9px' }}>Reject</span>
            </div>
          </div>
        </AppWindowFrame>
      ),
    },
    {
      num: '05', title: 'Federated Search',
      body: 'Query across every tool you connect. One interface. The Spine assembles the answer from fragments across Salesforce, HubSpot, Stripe, and more.',
      hasFrame: false,
    },
    {
      num: '06', title: 'Knowledge Persistence',
      body: 'Knowledge stays inside your business, not inside a model or provider. Everything your team does is stored, retrievable, and reusable.',
      hasFrame: true,
      frame: (
        <AppWindowFrame size="snippet" showTrafficLights={false} breadcrumbs={['Cognitive Layer']}>
          <div style={{ fontSize: '11px', color: '#1A1A14' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C0392B' }} />
              <span style={{ fontSize: '10px', fontWeight: 500 }}>Renewal Risk Alert</span>
            </div>
            <div style={{ fontSize: '9px', color: '#6B6556' }}>Vantage Telecom · 11 days</div>
          </div>
        </AppWindowFrame>
      ),
    },
  ]

  return (
    <section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <span className="iw-eyebrow reveal-feat">Core Features</span>
        <h2 className="font-serif reveal-feat" style={{
          fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)',
          margin: '12px 0 48px', maxWidth: '600px',
        }}>
          One architecture. Six capabilities.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2px', background: 'var(--rule)' }}>
          {features.map(f => (
            <div key={f.num} className="reveal-feat" style={{ background: 'var(--paper)', padding: '28px' }}>
              <span className="font-display" style={{ fontSize: '28px', color: 'var(--paper-deep)', lineHeight: 1 }}>{f.num}</span>
              <h3 className="font-serif" style={{ fontSize: '20px', color: 'var(--ink)', margin: '8px 0 10px' }}>{f.title}</h3>
              <p className="iw-body" style={{ fontSize: '14px' }}>{f.body}</p>
              {f.hasFrame && f.frame && (
                <div style={{ marginTop: '16px' }}>
                  {f.frame}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="iw-card reveal-feat" style={{
          marginTop: '48px', borderLeft: '3px solid var(--forest-bright)',
          background: 'var(--paper-warm)', display: 'flex', alignItems: 'flex-start', gap: '24px',
        }}>
          <img src="/images/workbench/wb-cognitive.png" alt="Workbench governance and approvals"
            style={{ width: '120px', height: '120px', objectFit: 'cover', flexShrink: 0, display: 'block' }} />
          <div>
            <span className="iw-label" style={{ color: 'var(--forest-mid)', display: 'block', marginBottom: '6px' }}>The Workbench Principle</span>
            <p className="iw-body" style={{ maxWidth: '520px' }}>
              Every workbench is a curated view into the Spine — tasks, conversations, metrics, and decisions assembled for a specific human role. AI composes the interface. You govern what happens next.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
