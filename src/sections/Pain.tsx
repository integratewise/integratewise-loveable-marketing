import { useScrollReveal } from '@/hooks/useScrollReveal'
import {
  FileX,
  RotateCcw,
  EyeOff,
  Users,
  ShieldAlert,
} from 'lucide-react'

export default function Pain() {
  const ref = useScrollReveal('.reveal-pain', { stagger: 0.12, y: 24 })

  const pains = [
    {
      num: '01',
      icon: FileX,
      title: 'Customer context vanishes by Thursday.',
      body: "It's in your notes app. Your CRM. Your email. Your Slack thread. Your head. Nowhere useful. No tool connects them. So you go into the next meeting cold, or you spend 30 minutes rebuilding context that should have been waiting for you.",
    },
    {
      num: '02',
      icon: RotateCcw,
      title: 'Your AI resets every time you open a new chat.',
      body: "You have to re-explain the account. Re-explain the risk. Re-explain what happened last quarter. You're not using AI — you're babysitting it. Every session from zero. Every insight evaporates the moment you close the window.",
    },
    {
      num: '03',
      icon: EyeOff,
      title: 'Critical patterns are invisible until it\u2019s too late.',
      body: 'The usage drop was there three weeks ago. The stakeholder sentiment shifted two months ago. The risk was sitting in six different tools, fully visible to no one. You find out at the renewal. Or after it.',
    },
    {
      num: '04',
      icon: Users,
      title: 'Institutional knowledge lives inside people, not systems.',
      body: 'When someone leaves, the knowledge leaves. When a new person joins, they start from zero. What the team learned last year is not in any tool. It\u2019s in someone\u2019s memory. That\u2019s fragile.',
    },
    {
      num: '05',
      icon: ShieldAlert,
      title: 'You can\u2019t act on AI suggestions you don\u2019t trust.',
      body: "The AI suggests an action. You don't know where it came from. There's no audit trail. No way to approve or reject with context. No way to know if it's safe. So you ignore it. And the potential value of the AI goes unused.",
    },
  ]

  return (
    <section className="iw-section" style={{ background: 'var(--paper-warm)', borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="text-center reveal-pain" style={{ marginBottom: '64px' }}>
          <span className="iw-eyebrow">The Pain</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginTop: '12px' }}>
            You already know the feeling.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '16px' }}>
          {pains.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.num}
                className="reveal-pain"
                style={{
                  background: 'var(--paper)',
                  borderLeft: '3px solid var(--red)',
                  padding: '28px 28px 28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div className="flex items-center" style={{ gap: '10px' }}>
                  <span style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(220, 38, 38, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={16} color="var(--red)" strokeWidth={2} />
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--red)',
                      opacity: 0.7,
                    }}
                  >
                    Pain Point {card.num}
                  </span>
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(18px, 1.6vw, 22px)',
                    lineHeight: 1.3,
                    color: 'var(--ink)',
                  }}
                >
                  {card.title}
                </h3>
                <p className="iw-body" style={{ fontSize: '14px', lineHeight: 1.6 }}>{card.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
