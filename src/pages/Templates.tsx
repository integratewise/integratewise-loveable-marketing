import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function TemplatesPage() {
  const ref = useScrollReveal('.reveal-tpl', { stagger: 0.12, y: 24 })

  const tiers = [
    { name: 'Free on Marketplace', price: '$0', desc: 'Confluence, Notion, Obsidian base templates. Clean starting structure.' },
    { name: 'Starter', price: '$49', desc: 'Full intelligence graph mapping and governance automation. Single platform.' },
    { name: 'Industry', price: '$149', desc: 'SaaS, Healthcare, FinServ, Manufacturing. Built for your sector with sector-specific fields.' },
    { name: 'Team', price: '$299', desc: 'Multi-platform, advanced governance, onboarding playbooks, and team rollout support.' },
    { name: 'Custom', price: '$499+', desc: 'Built for your exact stack, your exact structure.' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', background: 'var(--paper)' }}>
        <div className="max-w-content-default relative z-10" style={{ padding: '96px 52px 64px' }}>
          <span className="iw-eyebrow">Templates</span>
          <h1 className="font-display" style={{ fontSize: 'clamp(48px, 7vw, 100px)', lineHeight: 0.95, letterSpacing: '0.015em', marginBottom: '20px' }}>
            Start structured<br />from day one.
          </h1>
          <p className="iw-body" style={{ maxWidth: '560px', fontSize: '17px' }}>
            The biggest mistake teams make with memory tools is starting without structure. After six months of unstructured notes, the AI cannot help you because the data is noise.
          </p>
        </div>
      </section>

      {/* Why templates */}
      <section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
        <div className="max-w-content-default">
          <div className="grid lg:grid-cols-2" style={{ gap: '48px', marginBottom: '64px' }}>
            <div className="reveal-tpl">
              <span className="iw-eyebrow">Why templates exist</span>
              <p className="iw-body">
                Templates give your memory substrate the folder tree, field mapping, governance rules, and movement ledger it needs to be useful from day one. Without structure, your AI has nothing to work with.
              </p>
            </div>
            <div className="reveal-tpl">
              <span className="iw-eyebrow">What is in every template</span>
              <p className="iw-body">
                Folder and page structure for your memory tool. Field mapping so your data arrives correctly labelled. Governance rules so promotion works from the start. Movement ledger for tracking what moves where. Integration guide for connecting to the platform.
              </p>
            </div>
          </div>

          <h2 className="font-serif reveal-tpl" style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', marginBottom: '32px' }}>
            Template Tiers
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'var(--rule)' }}>
            {tiers.map((t, i) => (
              <div key={i} className="reveal-tpl" style={{ background: 'var(--paper)', padding: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
                <div>
                  <h3 className="font-serif" style={{ fontSize: '20px', color: 'var(--ink)' }}>{t.name}</h3>
                  <p className="iw-body" style={{ fontSize: '14px', marginTop: '4px' }}>{t.desc}</p>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--forest-mid)', whiteSpace: 'nowrap' }}>{t.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center iw-section" style={{ background: 'var(--forest)', color: 'var(--paper)' }}>
        <div className="max-w-content-narrow">
          <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.0, letterSpacing: '0.015em', marginBottom: '24px' }}>
            GET THE RIGHT<br />STRUCTURE NOW.
          </h2>
          <p style={{ fontSize: 'var(--fs-body)', lineHeight: 1.75, color: 'rgba(244,240,232,0.6)', marginBottom: '32px' }}>
            Start with a template. Scale with the platform.
          </p>
          <a href="mailto:hello@integratewise.com?subject=Template Inquiry" className="iw-btn-primary" style={{ background: 'var(--gold)', color: 'var(--ink)' }}>
            Get a Template
          </a>
        </div>
      </section>
    </div>
  )
}
