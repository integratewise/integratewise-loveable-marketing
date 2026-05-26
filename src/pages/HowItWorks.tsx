import { useEffect, useRef } from 'react'
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
        right: '-80px', top: '15%',
        fontFamily: 'var(--font-display)', fontSize: '280px',
        color: 'var(--paper-warm)', lineHeight: 1, opacity: 0.7, zIndex: 0,
      }}>IW</div>

      <div className="max-w-content-default relative z-10" style={{ padding: '96px 52px 80px' }}>
        <span className="iw-eyebrow">How It Works</span>
        <h1 className="font-display" style={{ fontSize: 'clamp(48px, 7vw, 100px)', lineHeight: 0.95, letterSpacing: '0.015em', marginBottom: '32px' }}>
          THE ROUND TRIP.<br />
          THE THING NO<br />
          OTHER PRODUCT<br />
          DOES.
        </h1>
        <p className="iw-body" style={{ maxWidth: '560px', marginBottom: '24px', fontSize: '17px' }}>
          Seven frames. One continuous loop. Data flows in from every connected tool, gets normalized, gets acted on, and flows back. Every cycle makes the system smarter.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {[
            'Connect your tools in minutes. No migration. No rip-and-replace.',
            'The Spine builds memory automatically — every ticket, email, call, and decision.',
            'Every cycle compounds: the system learns, the AI gets smarter, you explain less.',
          ].map((b, i) => (
            <div key={i} className="flex items-start" style={{ gap: '10px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '7px' }} />
              <span className="iw-body">{b}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link to="/contact" className="iw-btn-primary">Request a demo</Link>
          <Link to="/platform" className="iw-btn-secondary">Explore the platform</Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   7 FRAMES — Visual showcase
   ═══════════════════════════════════════════ */
const frames = [
  {
    num: '01', label: 'CONNECT', title: 'The Loader',
    text: 'Connects to every operational system via APIs, webhooks, MCPs, and connectors. Pulls structured data — CRM records, support tickets, tasks, financials — and unstructured data: conversations, documents, meeting notes.',
    color: 'var(--forest)',
    image: '/images/workbench/wb-user.png',
  },
  {
    num: '02', label: 'NORMALIZE', title: 'The Normalizer',
    text: 'Turns different formats and schemas from each tool into one coherent representation. The system can now reason across them as a single picture, not isolated fragments.',
    color: 'var(--slate)',
    image: '/images/workbench/wb-cognitive.png',
  },
  {
    num: '03', label: 'STORE', title: 'The Spine',
    text: 'Receives normalized data and stores it in the right layers as a living record. One logical memory across multiple physical providers. Not a database. A living record that learns every day.',
    color: 'var(--forest-mid)',
    image: '/images/workbench/wb-hq.png',
  },
  {
    num: '04', label: 'PROJECT', title: 'The Workbenches',
    text: 'Projects the right slice of the Spine into workbenches: the User Workbench for operations, the Cognitive Workbench for governance, the Twin for AI analysis, and the Operator for execution.',
    color: 'var(--slate-mid)',
    image: '/images/workbench/workbench-twin.png',
  },
  {
    num: '05', label: 'WORK', title: 'Humans and AI',
    text: 'Humans and AI operate on the same memory. You review risks, update data, approve AI suggestions, and make decisions with complete context. The Twin identifies patterns. You decide what to do.',
    color: 'var(--forest)',
    image: '/images/workbench/wb-operator.png',
  },
  {
    num: '06', label: 'APPROVE', title: 'Retirement',
    text: 'Approved changes retire back to the source tools. CRM records go to CRM. Tickets to support. Messages to comms. Your systems of record stay current. The round trip completes.',
    color: 'var(--slate)',
    image: '/images/workbench/wb-account-search.jpg',
  },
  {
    num: '07', label: 'COMPOUND', title: 'The Second Run',
    text: 'The Loader runs again. Picks up all changes — yours, external, and automated. The Spine grows. The AI gets smarter. You explain less. The cycle compounds. Every run makes the next one better.',
    color: 'var(--forest-mid)',
    image: '/images/workbench/wb-morning-brief.jpg',
  },
]

function FrameCard({ frame, index }: { frame: typeof frames[0]; index: number }) {
  const isEven = index % 2 === 0
  return (
    <div className="reveal-frame" style={{ marginBottom: '80px' }}>
      <div className="grid lg:grid-cols-2" style={{ gap: '0', minHeight: '420px' }}>
        {/* Text side */}
        <div style={{
          background: isEven ? 'var(--paper)' : 'var(--paper-warm)',
          padding: '48px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          order: isEven ? 1 : 2,
        }}>
          <div className="flex items-center" style={{ gap: '16px', marginBottom: '20px' }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: '72px', lineHeight: 1,
              color: 'var(--paper-deep)',
            }}>{frame.num}</span>
            <div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'var(--gold)', display: 'block',
              }}>{frame.label}</span>
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--ink)',
              }}>{frame.title}</span>
            </div>
          </div>
          <p className="iw-body" style={{ maxWidth: '480px', fontSize: '16px', lineHeight: 1.7 }}>
            {frame.text}
          </p>
        </div>

        {/* Visual side */}
        <div style={{
          background: frame.color, position: 'relative', overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          order: isEven ? 2 : 1,
        }}>
          <span style={{
            position: 'absolute', right: '-20px', bottom: '-40px',
            fontFamily: 'var(--font-display)', fontSize: '200px', opacity: 0.06, color: 'var(--paper)',
          }}>{frame.num}</span>
          <img
            src={frame.image}
            alt={frame.title}
            style={{ width: '85%', maxWidth: '400px', height: 'auto', display: 'block', border: '1px solid rgba(244,240,232,0.15)' }}
          />
        </div>
      </div>
    </div>
  )
}

function SevenFrames() {
  const ref = useScrollReveal('.reveal-frame', { stagger: 0.15, y: 24 })
  return (
    <section style={{ background: 'var(--paper)', padding: '96px 0' }} ref={ref}>
      <div className="max-w-content-default" style={{ marginBottom: '64px' }}>
        <span className="iw-eyebrow">The Complete Flow</span>
        <h2 className="font-serif" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--ink)', marginBottom: '16px' }}>
          Seven frames. One living system.
        </h2>
        <p className="iw-body" style={{ maxWidth: '600px' }}>
          Each frame is a real component in the architecture. There are no marketing labels here — these are the actual names of the actual systems that process your data.
        </p>
      </div>

      <div>
        {frames.map((f, i) => (
          <FrameCard key={f.num} frame={f} index={i} />
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   CONTINUITY EXPLANATION
   ═══════════════════════════════════════════ */
function Continuity() {
  const ref = useScrollReveal('.reveal', { stagger: 0.1, y: 16 })
  return (
    <section className="iw-section" style={{ background: 'var(--paper-warm)', borderTop: '1px solid var(--rule)' }} ref={ref}>
      <div className="max-w-content-default">
        <div className="iw-sidebar-grid">
          <div>
            <span className="iw-eyebrow">Why It Works</span>
            <h2 className="iw-section-title reveal">The cycle compounds.</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'First run: the Loader connects, the Normalizer unifies, the Spine stores, the Workbenches project. You see your full operational picture for the first time.',
              'Second run: the Loader picks up changes — your actions, external updates, new data. The Spine grows. The AI gets smarter. You explain less.',
              'Tenth run: the system knows your patterns. It surfaces risks before you ask. It proposes actions with evidence. You approve or adjust.',
              'Hundredth run: the Spine is your institutional memory. New team members inherit context. Departing members leave their knowledge behind. The organization learns.',
            ].map((b, i) => (
              <p key={i} className="iw-body">{b}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="text-center iw-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="max-w-content-narrow">
        <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.0, letterSpacing: '0.015em', marginBottom: '24px' }}>
          SEE THE ROUND TRIP<br />WITH YOUR DATA.
        </h2>
        <p className="iw-body" style={{ marginBottom: '32px' }}>
          We will walk you through the seven frames, the workbenches, and the governance model — using your actual tools and data.
        </p>
        <Link to="/contact" className="iw-btn-primary">Request a demo</Link>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function HowItWorks() {
  return (
    <div>
      <Hero />
      <SevenFrames />
      <Continuity />
      <FinalCTA />
    </div>
  )
}
