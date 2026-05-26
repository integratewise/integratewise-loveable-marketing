import { useScrollReveal } from '@/hooks/useScrollReveal'
import {
  Check,
  FileText,
  Layers,
  ShieldCheck,
  ArrowRightLeft,
  Plug,
} from 'lucide-react'

export default function Templates() {
  const ref = useScrollReveal('.reveal-tpl', { stagger: 0.12, y: 24 })

  const tiers = [
    { name: 'Free on Marketplace', price: '$0', desc: 'Confluence, Notion, Obsidian base templates. Clean starting structure.' },
    { name: 'Starter', price: '$29 – $49', desc: 'Full intelligence graph mapping and governance automation.' },
    { name: 'Industry', price: '$99 – $149', desc: 'SaaS, Healthcare, FinServ, Manufacturing. Built for your sector.' },
    { name: 'Team', price: '$199 – $299', desc: 'Multi-platform, advanced governance, onboarding playbooks.' },
    { name: 'Custom', price: '$499+', desc: 'Built for your exact stack, your exact structure.' },
  ]

  const includes = [
    { icon: FileText, label: 'Folder and page structure' },
    { icon: Layers, label: 'Field mapping' },
    { icon: ShieldCheck, label: 'Governance rules' },
    { icon: ArrowRightLeft, label: 'Movement ledger' },
    { icon: Plug, label: 'Integration guide' },
  ]

  return (
    <section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="text-center reveal-tpl" style={{ marginBottom: '48px' }}>
          <span className="iw-eyebrow">Templates</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
            Start structured from day one.
          </h2>
        </div>

        <div className="reveal-tpl" style={{ maxWidth: '720px', margin: '0 auto 48px', textAlign: 'center' }}>
          <p className="iw-body" style={{ marginBottom: '16px' }}>
            The biggest mistake teams make with memory tools is starting without structure. After six months of unstructured notes, the AI cannot help you because the data is noise.
          </p>
          <div className="flex flex-wrap justify-center" style={{ gap: '12px', marginTop: '20px' }}>
            {includes.map((inc, i) => {
              const Icon = inc.icon
              return (
                <div
                  key={i}
                  className="flex items-center"
                  style={{
                    gap: '6px',
                    background: 'var(--paper-warm)',
                    border: '1px solid var(--rule)',
                    padding: '8px 14px',
                    borderRadius: '4px',
                  }}
                >
                  <Icon size={13} color="var(--forest-mid)" strokeWidth={2} />
                  <span style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>{inc.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ border: '1px solid var(--rule)', borderRadius: '4px', overflow: 'hidden' }}>
          {tiers.map((t, i) => (
            <div
              key={i}
              className="reveal-tpl"
              style={{
                background: 'var(--paper)',
                padding: '20px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                flexWrap: 'wrap',
                borderBottom: i < tiers.length - 1 ? '1px solid var(--rule)' : 'none',
              }}
            >
              <div className="flex items-center" style={{ gap: '12px' }}>
                <Check size={14} color="var(--forest-bright)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <div>
                  <h3 className="font-serif" style={{ fontSize: '17px', color: 'var(--ink)' }}>{t.name}</h3>
                  <p className="iw-body" style={{ fontSize: '13px', marginTop: '2px', color: 'var(--fg-muted)' }}>{t.desc}</p>
                </div>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--forest-mid)', whiteSpace: 'nowrap' }}>{t.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
