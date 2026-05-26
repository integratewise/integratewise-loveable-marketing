import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Layers,
  BrainCircuit,
  Eye,
  ShieldCheck,
  Zap,
  ArrowRight,
} from 'lucide-react'
import AppWindowFrame from '@/components/frames/AppWindowFrame'
import AccountConsolePreview from '@/components/frames/AccountConsolePreview'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const bandRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bandRef.current || !wrapperRef.current) return
    const tween = gsap.to(wrapperRef.current, {
      xPercent: -55, ease: 'none',
      scrollTrigger: { trigger: bandRef.current, start: 'top 90%', end: 'bottom 20%', scrub: 1.5 },
    })
    return () => { tween.kill() }
  }, [])

  const timelineStages = [
    { icon: Layers, label: 'Input', num: '01', title: 'Tools feed the system' },
    { icon: BrainCircuit, label: 'Continuity', num: '02', title: 'Organizational memory forms' },
    { icon: Eye, label: 'Intelligence', num: '03', title: 'AI watches and assembles' },
    { icon: Zap, label: 'Surface', num: '04', title: 'Workbench receives the view' },
    { icon: ShieldCheck, label: 'Governance', num: '05', title: 'Humans approve and direct' },
    { icon: ArrowRight, label: 'Execution', num: '06', title: 'Omnichannel automation runs' },
  ]

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      <div className="hidden lg:block absolute pointer-events-none" style={{
        right: '-60px', top: '8%',
        fontFamily: 'var(--font-display)', fontSize: 'clamp(200px, 25vw, 400px)',
        color: 'rgba(224, 217, 200, 0.5)', lineHeight: 1, zIndex: 0,
      }}>IW</div>

      <div className="max-w-content-default relative z-10" style={{ padding: '96px 52px 0' }}>
        <span className="iw-eyebrow" style={{ display: 'block', marginBottom: '24px' }}>
          For CSMs, Operators, Founders, and anyone who runs on context
        </span>

        <h1 className="font-display" style={{
          fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95, letterSpacing: '0.015em',
          textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '32px', maxWidth: '900px',
        }}>
          Stop losing the context that wins deals, saves accounts, and runs your company.
        </h1>

        <p className="iw-body" style={{ maxWidth: '720px', marginBottom: '48px', fontSize: 'var(--fs-body-lg)', color: 'var(--fg-muted)' }}>
          IntegrateWise is the system that connects your work, your AI, and your memory into one coherent loop. So the insight you had in Tuesday's call is still alive on Friday. So the risk your AI spotted last week shows up before the renewal meeting.
        </p>

        {/* Hero product frame */}
        <div style={{ marginBottom: '48px' }}>
          <AppWindowFrame
            size="hero"
            title="IntegrateWise — Account Success"
            breadcrumbs={['IntegrateWise', 'Account Success (Product)', 'Account Console']}
            showTrafficLights
            showSidebar
            sidebarWidth={44}
            sidebarColor="#1A3A2A"
          >
            <AccountConsolePreview />
          </AppWindowFrame>
        </div>

        <div className="flex gap-4 flex-wrap items-center" style={{ marginBottom: '24px' }}>
          <Link to="/demo" className="iw-btn-primary">Explore the Interactive Demo</Link>
          <Link to="/how-it-works" className="iw-btn-secondary">See How It Works →</Link>
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-mono-11)', letterSpacing: '0.08em',
          color: 'var(--ink-ghost)', marginBottom: '64px',
        }}>
          No credit card required. No tool lock-in.
        </p>
      </div>

      <div ref={bandRef} style={{
        width: '100%', height: '120px', overflow: 'hidden',
        borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', background: 'var(--paper-warm)',
      }}>
        <div ref={wrapperRef} style={{ display: 'flex', width: 'max-content', height: '100%', willChange: 'transform' }}>
          {timelineStages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', width: '420px', height: '100%',
                padding: '0 32px', flexShrink: 0,
                borderRight: i < timelineStages.length - 1 ? '1px solid var(--rule)' : 'none',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '48px', marginRight: '24px', flexShrink: 0 }}>
                  <span style={{
                    width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--forest-mid)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={14} color="var(--forest-mid)" strokeWidth={2} />
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: 'var(--ink-ghost)', marginTop: '6px',
                  }}>{stage.label}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '42px', lineHeight: 1, color: 'var(--rule)', display: 'block' }}>{stage.num}</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--ink)', marginTop: '4px', display: 'block' }}>{stage.title}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
