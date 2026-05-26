import { useScrollReveal } from '@/hooks/useScrollReveal'
import {
  MessageSquare,
  Lock,
  Building2,
} from 'lucide-react'

export default function Memory() {
  const ref = useScrollReveal('.reveal-mem', { stagger: 0.15, y: 24 })

  const layers = [
    {
      name: 'Conversational Memory',
      icon: MessageSquare,
      body: 'Every session with the Twin is saved. Every insight, every decision, every pattern the AI identified. When you come back tomorrow or six months from now, it is all there. You do not start over. You pick up exactly where you left off.',
    },
    {
      name: 'Personal Memory',
      icon: Lock,
      body: 'Your private notes, strategies, and patterns stay yours. You decide what to promote to the team and when. No one reads your working notes until you choose to share them. Your thinking develops in private. It surfaces when it is ready.',
    },
    {
      name: 'Org Memory',
      icon: Building2,
      body: 'When a team member discovers something important, they promote it. It goes through a governed approval flow and becomes part of the team\u2019s institutional knowledge. The next person who joins does not start from zero. The team\u2019s intelligence compounds over time instead of evaporating when someone leaves.',
    },
  ]

  return (
    <section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="text-center reveal-mem" style={{ marginBottom: '64px' }}>
          <span className="iw-eyebrow">Memory</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
            Your memory should outlive your tools, your models, and your team.
          </h2>
        </div>

        <div className="grid md:grid-cols-3" style={{ gap: '16px' }}>
          {layers.map((layer, i) => {
            const Icon = layer.icon
            return (
              <div
                key={i}
                className="reveal-mem"
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--rule)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div className="flex items-center" style={{ gap: '10px' }}>
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
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.16em',
                    textTransform: 'uppercase', color: 'var(--forest-mid)',
                  }}>
                    Layer {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-serif" style={{ fontSize: '20px', color: 'var(--ink)', lineHeight: 1.25 }}>
                  {layer.name}
                </h3>
                <p className="iw-body" style={{ fontSize: '14px', lineHeight: 1.6 }}>{layer.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
