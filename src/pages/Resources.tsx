import { useState } from 'react'
import { Link } from 'react-router-dom'

type Category = 'all' | 'guide' | 'docs'

const guides = [
  { t: 'Getting Started', d: 'Connect your first tools and see your unified workspace in under 10 minutes.', tag: 'Guide' as const },
  { t: 'Data Integration Guide', d: 'Connect any tool via API, webhook, or custom connector. Security included.', tag: 'Guide' as const },
  { t: 'Governance Configuration', d: 'Set up approval workflows and governance policies that teams actually follow.', tag: 'Guide' as const },
]

const docs = [
  { t: 'Tool Connections', d: 'How to connect Salesforce, HubSpot, Slack, and more.' },
  { t: 'The Spine Architecture', d: 'Understanding the memory layer and data flow.' },
  { t: 'Security and Compliance', d: 'SOC 2, encryption, data isolation, audit trails.' },
  { t: 'API Documentation', d: 'REST API reference for custom integrations.' },
  { t: 'Webhook Setup', d: 'Real-time data sync with webhooks.' },
  { t: 'Troubleshooting', d: 'Common issues and their solutions.' },
]

export default function Resources() {
  const [active, setActive] = useState<Category>('all')
  const tabs: { label: string; key: Category; count: number }[] = [
    { label: 'All', key: 'all', count: guides.length + docs.length },
    { label: 'Guides', key: 'guide', count: guides.length },
    { label: 'Docs', key: 'docs', count: docs.length },
  ]

  return (
    <div>
      {/* HERO */}
      <section className="iw-section" style={{ paddingTop: '96px' }}>
        <div className="max-w-content-narrow mx-auto">
          <span className="iw-eyebrow block mb-4">Resources</span>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            Only what you need.
          </h1>
          <p className="iw-body" style={{ maxWidth: '480px' }}>
            No blog. No noise. Just the guides to get you running and the docs to keep you there.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="iw-section-sm" style={{ background: 'var(--paper-warm)', borderTop: '1px solid var(--rule)' }}>
        <div className="max-w-content-default mx-auto">
          <div className="flex flex-wrap gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className="font-body text-[11px] font-medium tracking-[0.05em] uppercase px-4 py-2 rounded-md transition-all flex items-center gap-2"
                style={{
                  background: active === tab.key ? 'var(--forest)' : 'transparent',
                  color: active === tab.key ? 'var(--paper)' : 'var(--ink-muted)',
                }}
              >
                {tab.label}
                <span
                  className="inline-flex items-center justify-center rounded-full text-[10px] font-semibold min-w-[18px] h-[18px] px-1"
                  style={{
                    background: active === tab.key ? 'rgba(255,255,255,0.2)' : 'var(--paper-deep)',
                    color: active === tab.key ? 'var(--paper)' : 'var(--ink-muted)',
                  }}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES */}
      {(active === 'all' || active === 'guide') && (
        <section className="iw-section" style={{ borderTop: '1px solid var(--rule)' }}>
          <div className="max-w-content-default mx-auto">
            <span className="iw-eyebrow block mb-4">Start Here</span>
            <div className="grid md:grid-cols-3 gap-4">
              {guides.map((g) => (
                <div
                  key={g.t}
                  className="iw-card cursor-pointer hover:shadow-md transition-shadow"
                  style={{ padding: '28px' }}
                >
                  <span
                    className="inline-block text-[10px] font-semibold tracking-[0.08em] uppercase px-2 py-1 rounded mb-3"
                    style={{ background: 'var(--forest-muted)', color: 'var(--forest)' }}
                  >
                    {g.tag}
                  </span>
                  <h3 className="font-body text-[15px] font-medium mb-2" style={{ color: 'var(--ink)' }}>{g.t}</h3>
                  <p className="iw-body" style={{ fontSize: '13px', lineHeight: 1.55 }}>{g.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DOCS */}
      {(active === 'all' || active === 'docs') && (
        <section className="iw-section" style={{ background: 'var(--paper-warm)', borderTop: '1px solid var(--rule)' }}>
          <div className="max-w-content-default mx-auto">
            <span className="iw-eyebrow block mb-4">Documentation</span>
            <div className="iw-card" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="iw-table">
                <thead><tr><th>Topic</th><th>Description</th></tr></thead>
                <tbody>
                  {docs.map((d) => (
                    <tr key={d.t} className="cursor-pointer hover:bg-[var(--paper-warm)] transition-colors">
                      <td className="font-body text-[13px] font-medium" style={{ color: 'var(--ink)' }}>{d.t}</td>
                      <td>{d.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="iw-section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="max-w-content-narrow mx-auto text-center">
          <h2 className="iw-headline mb-4">Need something specific?</h2>
          <p className="iw-body mb-6" style={{ maxWidth: '400px', margin: '0 auto' }}>
            We build documentation based on what teams actually ask. Tell us what is missing.
          </p>
          <Link to="/contact" className="iw-btn-primary">Request a resource</Link>
        </div>
      </section>
    </div>
  )
}
