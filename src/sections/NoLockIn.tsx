import { useScrollReveal } from '@/hooks/useScrollReveal'
import {
  Plug,
  Cpu,
  Activity,
} from 'lucide-react'

export default function NoLockIn() {
  const ref = useScrollReveal('.reveal-lock', { stagger: 0.15, y: 24 })

  const points = [
    {
      title: 'No tool lock-in',
      icon: Plug,
      body: 'Use Confluence, Notion, Obsidian, or your own storage. Connect HubSpot, Salesforce, Jira, Linear, or anything that has an API. When a tool gets replaced, your intelligence graph and your memory stay intact.',
    },
    {
      title: 'No model lock-in',
      icon: Cpu,
      body: 'Switch models without rebuilding context. OpenAI, Anthropic, local models, whatever comes next. The Twin\u2019s memory is in the platform, not in the model. Your intelligence graph does not depend on one provider staying dominant.',
    },
    {
      title: 'Model drift detection',
      icon: Activity,
      body: 'When models update and behaviour changes, your governance layer detects the drift. Your prompts, your context, and your outputs stay consistent regardless of what happens upstream. You do not find out about model drift by accidentally getting a wrong answer.',
    },
  ]

  return (
<section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="text-center reveal-lock" style={{ marginBottom: '64px' }}>
          <span className="iw-eyebrow">No Lock-In</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
            Your memory, your governance, and your intelligence graph belong to you.
          </h2>
        </div>

        <div className="grid md:grid-cols-3" style={{ gap: '16px' }}>
          {points.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="reveal-lock"
                style={{
                  background: 'var(--paper-warm)',
                  border: '1px solid var(--rule)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <span style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(26, 58, 42, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={18} color="var(--forest-mid)" strokeWidth={2} />
                </span>
                <h3 className="font-serif" style={{ fontSize: '20px', color: 'var(--ink)', lineHeight: 1.25 }}>
                  {p.title}
                </h3>
                <p className="iw-body" style={{ fontSize: '14px', lineHeight: 1.6 }}>{p.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
