import { Link } from 'react-router-dom'
import { useScrollReveal } from '@/hooks/useScrollAnimation'
import { DataFlowAnimation } from '@/components/DataFlowAnimation'

const roundTripSteps = [
  { num: '01', label: 'Fetch', title: 'The Loader', text: 'Connects to every operational system via APIs, webhooks, MCPs, and connectors. Pulls in structured data (CRM records, tickets, tasks, financial data) and unstructured data (conversations, documents, meeting notes).' },
  { num: '02', label: 'Transform', title: 'The Normalizer', text: 'Turns different formats and schemas from each tool into one coherent representation so the system can reason across them as a single picture.' },
  { num: '03', label: 'Store', title: 'The Spine', text: 'Receives normalized data and stores it in the right layers as a living record. One logical memory across multiple physical providers.' },
  { num: '04', label: 'Project', title: 'The Workbenches', text: 'Projects the right slice of the Spine into workbenches: operational, cognitive, and AI workspaces where work actually happens.' },
  { num: '05', label: 'Act', title: 'You work', text: 'Humans and AI operate on the same memory: you review risks, update data, approve AI suggestions, and make decisions with complete context.' },
  { num: '06', label: 'Retire', title: 'Data goes back', text: 'Approved changes retire back to the source tools. CRM records go to CRM, tickets to support, messages to comms. Your systems of record stay current.' },
  { num: '07', label: 'Compound', title: 'The second run', text: 'The Loader runs again, picks up all changes — yours, external, and automated. The Spine grows. The AI gets smarter. You explain less.' },
]

const workbenches = [
  { label: 'User Workbench', text: 'Operational view for humans: accounts, tickets, insights, metrics, and tasks projected from the Spine in one place.' },
  { label: 'Cognitive Workbench', text: 'Governance and review space: see AI proposals with evidence, adjust them, set rules, and approve or reject.' },
  { label: 'Twin / AI Workbench', text: 'Workspace where the AI Twin operates with complete context from the Spine to identify risks, opportunities, and actions.' },
  { label: 'Operator / Execution Surface', text: 'Execution layer that carries out approved actions across your tools, with clear understanding of what each action means and which rules apply.' },
]

export default function Platform() {
  const r1 = useScrollReveal('.reveal')
  const r2 = useScrollReveal('.reveal-step', { stagger: 0.08, y: 12 })
  const r3 = useScrollReveal('.reveal')
  const r4 = useScrollReveal('.reveal-wb', { stagger: 0.1, y: 12 })
  const r5 = useScrollReveal('.reveal')
  const r6 = useScrollReveal('.reveal')
  const r7 = useScrollReveal('.reveal')

  return (
    <div>
      {/* HERO */}
      <section className="iw-section" style={{ minHeight: '70vh', paddingTop: '96px', display: 'flex', alignItems: 'center', background: 'linear-gradient(160deg, var(--paper) 0%, var(--paper-warm) 100%)' }}>
        <div className="max-w-content-default mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="iw-eyebrow">Platform</span>
              <h1 className="font-display iw-display" style={{ fontSize: 'clamp(48px, 7vw, 100px)', marginBottom: '24px' }}>
                THE ROUND TRIP.<br />THE THING NO<br />OTHER PRODUCT<br />DOES.
              </h1>
              <p className="iw-body" style={{ maxWidth: '480px', marginBottom: '24px', fontSize: '16px' }}>
                IntegrateWise is a memory-native operating architecture that pulls data from your tools, normalizes it, stores it in a Spine, projects it into workbenches, lets humans and AI work on it with full context, and retires approved changes back into the systems where your business already runs.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                {[
                  'One architecture across every tool and every team.',
                  'Memory tied to your system, not to any model or vendor.',
                  'Human-governed execution, with full lineage on every action.',
                ].map((b, i) => (
                  <div key={i} className="flex items-start" style={{ gap: '10px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '6px' }} />
                    <span className="iw-body">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link to="/contact" className="iw-btn-primary">Request a demo</Link>
                <Link to="/account-success" className="iw-btn-secondary">Explore solutions</Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/workbench/round-trip-architecture.jpg" alt="IntegrateWise round trip architecture showing Loader, Normalizer, Spine, Workbenches, Humans+AI, Operator, and Second Run cycle" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — This is not sync */}
      <section className="iw-section" ref={r1}>
        <div className="max-w-content-default mx-auto">
          <div className="iw-sidebar-grid">
            <div>
              <span className="iw-eyebrow">Continuity</span>
              <h2 className="iw-section-title reveal">This is not sync. It is continuity.</h2>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Most integrations move data one way or copy records into a dashboard. They do not create a living memory that survives model changes, tool changes, provider changes, and daily drift.',
                'Every system holds a fragment: CRM, support, comms, docs, analytics, calendars, invoices. Humans still reconstruct the whole picture in their heads.',
                'IntegrateWise turns fragments into one continuous system: the round trip.',
              ].map((b, i) => (
                <p key={i} className="iw-body">{b}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Round trip architecture */}
      <section className="iw-section" style={{ background: 'var(--slate)', color: 'var(--paper)' }} ref={r2}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <span className="iw-eyebrow" style={{ color: 'var(--gold-light)' }}>Architecture</span>
          <h2 className="font-serif" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--paper)', marginBottom: '48px' }}>
            The round trip, step by step.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {roundTripSteps.map((s, i) => (
              <div key={s.num} className="reveal-step" style={{
                display: 'grid', gridTemplateColumns: '60px 120px 1fr', gap: '24px', alignItems: 'baseline',
                padding: '18px 0', borderTop: i === 0 ? '1px solid rgba(244,240,232,0.15)' : 'none', borderBottom: '1px solid rgba(244,240,232,0.15)',
              }}>
                <span className="font-mono" style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.1em' }}>{s.num}</span>
                <span className="font-sans" style={{ fontSize: '13px', fontWeight: 600, color: '#F4F0E8' }}>{s.label}</span>
                <div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#F4F0E8', display: 'block', marginBottom: '4px' }}>{s.title}</span>
                  <span style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(244,240,232,0.5)' }}>{s.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Data Flow Visualization */}
          <div className="reveal-step" style={{ marginTop: '48px' }}>
            <DataFlowAnimation />
          </div>
        </div>
      </section>

      {/* SECTION 3 — Spine */}
      <section className="iw-section" style={{ background: 'var(--paper-warm)' }} ref={r3}>
        <div className="max-w-content-default mx-auto">
          <div className="iw-sidebar-grid">
            <div>
              <span className="iw-eyebrow">The Spine</span>
              <h2 className="iw-section-title reveal">The model is a variable. The memory is a constant.</h2>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Most AI products tie memory to a session, a model, or a vendor. Change any of them and you start over.',
                'IntegrateWise ties memory to the architecture: the Spine. That is the layer that carries forward when you change models, providers, or infrastructure.',
                'Change from GPT-4 to Claude to Gemini — new models inherit the same memory. Swap providers — the Spine remains. Migrate infrastructure — the Spine comes with you.',
                'The AI never starts cold. You never re-explain. The system never loses its understanding.',
              ].map((b, i) => (
                <p key={i} className="iw-body">{b}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Workbenches */}
      <section className="iw-section" ref={r4}>
        <div className="max-w-content-default mx-auto">
          <span className="iw-eyebrow">Workbenches</span>
          <h2 className="iw-section-title" style={{ marginBottom: '48px' }}>Workbenches for humans, AI, and execution.</h2>
          <div className="grid md:grid-cols-2" style={{ gap: '2px', background: 'var(--rule)' }}>
            {workbenches.map(w => (
              <div key={w.label} className="reveal-wb" style={{ background: 'var(--paper)', padding: '36px' }}>
                <span className="font-mono" style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '12px' }}>{w.label.toUpperCase()}</span>
                <p className="iw-body" style={{ fontSize: '14px' }}>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Human-governed AI */}
      <section className="iw-section" style={{ background: 'var(--forest)', color: 'var(--paper)' }} ref={r5}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <div className="iw-sidebar-grid">
            <div>
              <span className="iw-eyebrow" style={{ color: 'var(--gold-light)' }}>Governance</span>
              <h2 className="font-serif reveal" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--paper)' }}>AI proposes. You approve. The system executes.</h2>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Nothing runs without human approval. The Twin operates on complete memory and presents risks, opportunities, actions, and insights with evidence.',
                'You review in the Cognitive Workbench, approve, adjust, reject, or defer. If approved, the Operator executes intelligently across systems.',
                'Every action has lineage: what data informed it, which model proposed it, who approved it, and which tools were touched.',
                'Governance is not a safety bolt-on. It is the architecture, designed by an architect who spent years enforcing enterprise-grade governance on production integrations.',
              ].map((b, i) => (
                <p key={i} style={{ fontSize: 'var(--fs-body)', lineHeight: 1.75, color: 'rgba(244,240,232,0.6)' }}>{b}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — One architecture, many solutions */}
      <section className="iw-section" style={{ background: 'var(--paper-warm)' }} ref={r6}>
        <div className="max-w-content-default mx-auto">
          <span className="iw-eyebrow">Solutions</span>
          <h2 className="iw-section-title" style={{ marginBottom: '48px' }}>One Spine. Multiple solutions.</h2>
          <div className="grid md:grid-cols-3" style={{ gap: '32px' }}>
            {[
              { label: 'Account Success', text: 'The intelligence system for managing complex relationships. Fifteen layers of structured intelligence. One customer view. AI that remembers every conversation and risk. Built by a CSM, proven by an $8M save.', href: '/account-success' },
              { label: 'Business Intelligence', text: 'The operational nervous system for what your team learns every day. Captures insights from Slack and other channels, structures them, and makes them searchable forever.', href: '/business-intelligence' },
              { label: 'Future solutions', text: 'New solutions plug into the same Loader, Normalizer, Spine, and Workbenches — no need to rebuild integration or memory.', href: '/contact' },
            ].map(s => (
              <div key={s.label} className="reveal" style={{ background: 'var(--paper)', padding: '32px' }}>
                <span className="font-mono" style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '12px' }}>{s.label.toUpperCase()}</span>
                <p className="iw-body" style={{ fontSize: '14px', marginBottom: '16px' }}>{s.text}</p>
                <Link to={s.href} className="font-sans" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--forest)', textDecoration: 'none' }}>Learn more &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Stop stitching */}
      <section className="text-center iw-section" ref={r7}>
        <div className="max-w-content-narrow mx-auto">
          <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.0, letterSpacing: '0.015em', marginBottom: '24px' }}>
            STOP STITCHING<br />THE STORY<br />TOGETHER<br />BY HAND.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
            {[
              'Your tools remain your tools. Your workflows remain your workflows. What changes is that one system finally remembers across all of them.',
              'The human is no longer the integration layer, the memory, and the operating model. The Spine takes that role.',
            ].map((b, i) => (
              <p key={i} className="iw-body">{b}</p>
            ))}
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="iw-btn-primary">Request a demo</Link>
            <Link to="/account-success" className="iw-btn-secondary">Explore Account Success</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
