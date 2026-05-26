import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function useScrollReveal(selector: string, options?: { stagger?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(selector)
    if (!els.length) return
    gsap.from(els, {
      y: options?.y ?? 16, opacity: 0, duration: 0.5,
      stagger: options?.stagger ?? 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
    })
  }, [])
  return ref
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', background: 'var(--paper)' }}>
      <div className="hidden lg:block absolute pointer-events-none" style={{
        right: '-60px', top: '12%',
        fontFamily: 'var(--font-display)', fontSize: '250px',
        color: 'var(--paper-warm)', lineHeight: 1, opacity: 0.7, zIndex: 0,
      }}>IW</div>

      <div className="max-w-content-default relative z-10" style={{ padding: '96px 52px 80px' }}>
        <span className="iw-eyebrow">About</span>
        <h1 className="font-display" style={{ fontSize: 'clamp(48px, 7vw, 100px)', lineHeight: 0.95, letterSpacing: '0.015em', marginBottom: '20px' }}>
          BUILT FROM THE SEAT.<br />
          NOT FROM THE SIDELINE.
        </h1>
        <p className="font-display" style={{ fontSize: 'clamp(22px, 3vw, 36px)', color: 'var(--forest-700)', marginBottom: '24px', letterSpacing: '0.01em' }}>
          8 years of Integration Pain.
        </p>
        <p className="iw-body" style={{ maxWidth: '640px', fontSize: '17px' }}>
          IntegrateWise was not built in a weekend. It was built across five companies — Huawei, Deloitte, Accenture, B5G, and Salesforce & MuleSoft — over 8 years of living inside the exact problem it solves. ₹1.5 crore and 23 months of one person's life went into this.
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   THE STORY
   ═══════════════════════════════════════════ */
function Story() {
  const ref = useScrollReveal('.reveal', { stagger: 0.12, y: 16 })
  return (
    <section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="iw-sidebar-grid">
          <div>
            <span className="iw-eyebrow">The Story</span>
            <h2 className="iw-section-title reveal">Five companies. One problem. One builder.</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p className="iw-body">Nirmal Prince J spent years as the human API — across Huawei, Deloitte, Accenture, B5G, and Salesforce & MuleSoft. Six tools. Thirty accounts. Context that reset every 30 minutes. Rebuilding the full picture every morning, holding it all in his head.</p>
            <p className="iw-body">In 2024, working as a MuleSoft Integration Architect, he began formally building a unified operational environment. Not a side project — a complete system designed from the ground up.</p>
            <p className="iw-body">In 2025, he joined Salesforce as a CSM — the exact user the product is built for — and built IntegrateWise from 10:30 PM to 3 AM every night. He left to go full-time. Got pneumonia. Spent ₹8 lakh recovering. Did not stop.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   THE MOMENT — Dark highlight
   ═══════════════════════════════════════════ */
function Moment() {
  const ref = useScrollReveal('.reveal', { stagger: 0.15, y: 20 })
  return (
    <section style={{ background: 'var(--slate)', color: 'var(--paper)', padding: '120px 0' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="reveal" style={{ maxWidth: '640px' }}>
          <span className="iw-eyebrow" style={{ color: 'var(--gold-light)' }}>The Moment</span>
          <h2 className="font-serif" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--paper)', marginTop: '12px', marginBottom: '24px' }}>
            An account marked red. $8 million at risk.
          </h2>
        </div>
        <div className="reveal" style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: 'var(--fs-body)', lineHeight: 1.75, color: 'rgba(244,240,232,0.6)' }}>
            For the first time, all the data was in one place, connected, and visible. Not a business plan. Not a pitch deck. One account. One red flag. One complete picture.
          </p>
          <p style={{ fontSize: 'var(--fs-body)', lineHeight: 1.75, color: 'rgba(244,240,232,0.6)' }}>
            And the realization: this is everyone's problem. The CSM knew what needed to exist. The architect knew how to build it.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   THE COMMITMENT
   ═══════════════════════════════════════════ */
function Commitment() {
  const ref = useScrollReveal('.reveal', { stagger: 0.1, y: 16 })
  return (
    <section className="iw-section" style={{ background: 'var(--paper-warm)', borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="iw-sidebar-grid">
          <div>
            <span className="iw-eyebrow">The Commitment</span>
            <h2 className="iw-section-title reveal">₹1.5 crore. 23 months. All in.</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p className="iw-body">What exists today is not a prototype. It is a complete memory-native operating system built by the person who felt the problem most deeply, for the longest time, across the most contexts.</p>
            <p className="iw-body">IntegrateWise runs on IntegrateWise. The system that runs the company is the same system that ships to customers. That is what anyone sitting at this table is joining.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   PRINCIPLES — Grid cards
   ═══════════════════════════════════════════ */
const principles = [
  { title: 'The round trip is the product.', text: 'A complete circuit — in, normalise, store, project, act, retire, re-fetch — is a living system. Not a dashboard. Not a sync. A round trip that compounds.' },
  { title: 'The model is a variable. The memory is a constant.', text: 'AI models change. Providers change. The memory stays. That is the architecture. Change from GPT-4 to Claude to Gemini — the new model inherits all memory.' },
  { title: 'Governance is the architecture.', text: 'Human-in-the-loop is not a feature. It is the foundation. AI proposes. Humans approve. The system executes. Every action has lineage.' },
  { title: 'Enterprise-grade by default.', text: 'Every security policy, every best practice is embedded in the foundation. Not bolted on. Built by a MuleSoft Architect who enforced governance at scale.' },
  { title: 'The company eats its own cooking.', text: 'IntegrateWise runs on IntegrateWise. If it does not work for us, it does not ship. The system that runs the company is the same system that ships to customers.' },
]

function Principles() {
  const ref = useScrollReveal('.reveal-principle', { stagger: 0.1, y: 20 })
  return (
    <section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <span className="iw-eyebrow">What We Believe</span>
        <h2 className="iw-section-title" style={{ marginBottom: '48px' }}>The principles that guide us.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'var(--rule)' }}>
          {principles.map((p, i) => (
            <div key={i} className="reveal-principle" style={{ background: 'var(--paper)', padding: '28px 24px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '10px', fontFamily: 'var(--font-sans)' }}>
                {p.title}
              </h3>
              <p className="iw-body" style={{ fontSize: '14px' }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   BUILT BY
   ═══════════════════════════════════════════ */
function BuiltBy() {
  const ref = useScrollReveal('.reveal', { stagger: 0.1, y: 16 })
  return (
    <section className="iw-section" style={{ background: 'var(--paper-warm)', borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="iw-sidebar-grid">
          <div>
            <span className="iw-eyebrow">Built By</span>
            <h2 className="iw-section-title reveal">The person who lived it.</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p className="iw-body">Nirmal Prince J — Founder. MuleSoft Certified Integration Architect. Former CSM at Salesforce. Former consultant at Accenture and Deloitte.</p>
            <p className="iw-body">He did not survey the market. He did not copy a competitor. He built the system he needed when he was the one holding 30 accounts in his head across six tools — at Huawei, at Deloitte, at Accenture, at B5G, and finally at Salesforce & MuleSoft.</p>
            <p className="iw-body">Every design decision comes from that seat. Every governance layer comes from that architecture practice. Every product choice comes from that daily reality. ₹1.5 crore and 23 months of his life went into this. That is what anyone sitting at this table is joining.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   LOCATION
   ═══════════════════════════════════════════ */
function Location() {
  const ref = useScrollReveal('.reveal', { stagger: 0.1, y: 16 })
  return (
    <section className="iw-section" style={{ borderBottom: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="iw-sidebar-grid">
          <div>
            <span className="iw-eyebrow">Where</span>
            <h2 className="iw-section-title reveal">Bengaluru, 2026.</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p className="iw-body">Built in Bengaluru. Serving teams globally.</p>
            <p className="iw-body">We are a small, focused team building something we believe every tool-heavy organization needs: a memory layer that outlasts the tools, the models, and the people.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="text-center iw-section" style={{ background: 'var(--forest)', color: 'var(--paper)' }}>
      <div className="max-w-content-narrow">
        <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.0, letterSpacing: '0.015em', marginBottom: '24px' }}>
          JOIN US IN FIXING<br />CONTINUITY.
        </h2>
        <p style={{ fontSize: 'var(--fs-body)', lineHeight: 1.75, color: 'rgba(244,240,232,0.6)', marginBottom: '32px' }}>
          The problem is real. The solution is here. The team is building.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/#early-access" className="iw-btn-primary">Book Demo</Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function About() {
  return (
    <div>
      <Hero />
      <Story />
      <Moment />
      <Commitment />
      <Principles />
      <BuiltBy />
      <Location />
      <FinalCTA />
    </div>
  )
}
