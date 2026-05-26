import { useScrollReveal } from '@/hooks/useScrollReveal'
import {
  Check,
  LayoutDashboard,
  BrainCircuit,
  Bell,
  Database,
  ShieldCheck,
} from 'lucide-react'
import AppWindowFrame from '@/components/frames/AppWindowFrame'

export default function Solution() {
  const ref = useScrollReveal('.reveal-sol', { stagger: 0.12, y: 24 })

  const benefits = [
    {
      icon: LayoutDashboard,
      title: 'One living record for every account.',
      body: 'Your WorkBench shows you the right picture the moment you open it. No rebuilding. No searching. No gaps.',
    },
    {
      icon: BrainCircuit,
      title: 'AI that remembers, not resets.',
      body: 'The Twin reads your memory layers before you say a word. Every conversation builds on the last. Context compounds.',
    },
    {
      icon: Bell,
      title: 'Proactive signals, not reactive firefighting.',
      body: 'The Right Rail pushes structured insight cards — usage drops, expansion signals, quiet stakeholders — before they become problems.',
    },
    {
      icon: Database,
      title: 'Memory that survives turnover.',
      body: 'Three layers — Personal, Conversational, Org. New hires inherit real context from day one.',
    },
    {
      icon: ShieldCheck,
      title: 'Governance that earns trust.',
      body: 'Every suggestion has a source. Every approval is tracked. The AI does not act unilaterally. It earns trust incrementally.',
    },
  ]

  return (
    <section style={{ background: 'var(--forest)', color: 'var(--paper)', padding: '120px 0' }} ref={ref}>
      <div className="max-w-content-default" style={{ padding: '0 52px' }}>
        <div className="grid lg:grid-cols-2" style={{ gap: '64px', alignItems: 'center' }}>
          {/* Framed screenshot side */}
          <div className="reveal-sol">
            <AppWindowFrame
              size="section"
              title="IntegrateWise — Cognitive Layer"
              breadcrumbs={['IntegrateWise', 'Account Success (Product)', 'Cognitive Layer']}
              showTrafficLights
              showSidebar
              sidebarWidth={40}
              sidebarColor="#1A3A2A"
            >
              <img
                src="/images/workbench/wb-cognitive.png"
                alt="IntegrateWise Cognitive Layer — live signals and AI insights"
                style={{ width: '100%', display: 'block', borderRadius: '4px' }}
              />
            </AppWindowFrame>
            <div className="flex items-center" style={{ gap: '16px', marginTop: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--gold-light)', lineHeight: 1 }}>15</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(244,240,232,0.5)', display: 'block', marginTop: '4px' }}>Intelligence Layers</span>
              </div>
              <div style={{ width: '1px', height: '36px', background: 'rgba(244,240,232,0.15)' }} />
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--gold-light)', lineHeight: 1 }}>3</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(244,240,232,0.5)', display: 'block', marginTop: '4px' }}>Memory Layers</span>
              </div>
              <div style={{ width: '1px', height: '36px', background: 'rgba(244,240,232,0.15)' }} />
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--gold-light)', lineHeight: 1 }}>12</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(244,240,232,0.5)', display: 'block', marginTop: '4px' }}>Departments</span>
              </div>
            </div>
          </div>

          {/* Benefits side */}
          <div>
            <span className="iw-eyebrow" style={{ color: 'var(--gold-light)' }}>The Solution</span>

            <h2 className="font-serif reveal-sol" style={{
              fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--paper)',
              marginTop: '12px', marginBottom: '24px', maxWidth: '700px',
            }}>
              IntegrateWise closes the loop.
            </h2>

            <p className="reveal-sol" style={{ maxWidth: '720px', color: 'rgba(244,240,232,0.7)', marginBottom: '48px', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-relaxed)' }}>
              It is not another tool to add to the stack. It is the layer that makes your existing stack coherent. Your work surfaces, your AI, your memory, and your governance operate together. One loop. Continuously.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <div key={i} className="reveal-sol flex items-start" style={{ gap: '14px' }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'rgba(184, 148, 63, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <Check size={14} color="var(--gold-light)" strokeWidth={2.5} />
                    </span>
                    <div>
                      <div className="flex items-center" style={{ gap: '8px', marginBottom: '4px' }}>
                        <Icon size={14} color="var(--gold-light)" strokeWidth={2} />
                        <h4 className="font-serif" style={{ fontSize: '17px', color: 'var(--paper)', lineHeight: 1.3 }}>
                          {b.title}
                        </h4>
                      </div>
                      <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(244,240,232,0.65)' }}>
                        {b.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
