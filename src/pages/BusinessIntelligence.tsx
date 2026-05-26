import { Link } from 'react-router-dom'
import { useScrollReveal } from '@/hooks/useScrollAnimation'
import { BIInsightsWorkbench, BISearchWorkbench, BIHQWorkbench } from '@/components/workbench'

function StatCard({ value, label, color = '#3B82F6' }: { value: string; label: string; color?: string }) {
  return (
    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ fontSize: '32px', fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '11px', color: 'rgba(244,240,232,0.35)', marginTop: '6px' }}>{label}</div>
    </div>
  )
}

function StepRow({ num, text }: { num: number; text: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '16px', padding: '16px 0', borderBottom: '1px solid rgba(244,240,232,0.1)', alignItems: 'baseline' }}>
      <span className="font-mono" style={{ fontSize: '13px', color: '#3B82F6', fontWeight: 600 }}>{num}</span>
      <span style={{ fontSize: '14px', color: 'rgba(244,240,232,0.6)', lineHeight: 1.65 }}>{text}</span>
    </div>
  )
}

export default function BusinessIntelligence() {
  const r1 = useScrollReveal('.reveal', { stagger: 0.06 })
  const r2 = useScrollReveal('.reveal', { stagger: 0.1 })

  return (
    <div>
      {/* ═══════ HERO — Workbench image first ═══════ */}
      <section style={{ minHeight: '80vh', paddingTop: '96px', paddingBottom: '60px', background: 'linear-gradient(160deg, var(--paper) 0%, var(--paper-warm) 100%)' }}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ marginBottom: '48px' }}>
            <div>
              <span className="iw-eyebrow">Business Intelligence</span>
              <h1 className="font-display" style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95, letterSpacing: '0.015em', marginBottom: '24px' }}>
                CAPTURE WHAT<br />YOU LEARN.<br />SEARCH WHAT<br />YOU KNOW.
              </h1>
              <p className="iw-body" style={{ marginBottom: '24px', fontSize: '16px' }}>
                Capture insights from Slack, email, meetings, and docs. Structure them. Search them. Turn team conversations into institutional memory.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                {['Auto-capture from Slack and other channels.', 'Natural language search across all insights.', 'Evidence-backed answers, not guesses.'].map((b, i) => (
                  <div key={i} className="flex items-start" style={{ gap: '10px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '6px' }} />
                    <span className="iw-body">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link to="/contact" className="iw-btn-primary">Start capturing</Link>
                <Link to="/how-it-works" className="iw-btn-secondary">See how it works</Link>
              </div>
            </div>
            <div>
              <img
                src="/images/workbench/wb-bi-insights.jpg"
                alt="Business Intelligence Workbench showing captured insights, search, and intelligence cards"
                style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid var(--rule-light)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROBLEM — Visual ═══════ */}
      <section className="iw-section" ref={r1}>
        <div className="max-w-content-default mx-auto">
          <div className="iw-sidebar-grid">
            <div>
              <span className="iw-eyebrow">The Problem</span>
              <h2 className="iw-section-title reveal">Your best insights die in Slack.</h2>
            </div>
            <div>
              <div className="reveal" style={{ marginBottom: '24px' }}>
                <img
                  src="/images/personal-work-memory.jpg"
                  alt="Valuable insights lost in scattered conversations and disconnected tools"
                  style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Teams share valuable signals in conversations and meeting notes that vanish into threads and inboxes.',
                  'Weeks later: "What did we hear about Competitor X?" — nobody remembers.',
                  'This wastes hours, loses institutional memory, and repeats costly mistakes.',
                ].map((b, i) => (
                  <div key={i} className="flex items-start" style={{ gap: '10px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '6px' }} />
                    <p className="iw-body" style={{ margin: 0 }}>{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ VALUE PROP + LIVE SEARCH WORKBENCH ═══════ */}
      <section style={{ background: '#0B1120', padding: '80px 0' }}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="iw-eyebrow" style={{ color: 'var(--gold-light)' }}>What It Does</span>
              <h2 className="font-serif" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--paper)', marginTop: '12px' }}>
                Intelligence that compounds, not decays.
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '28px' }}>
                <StatCard value="47" label="Insights this week" color="#3B82F6" />
                <StatCard value="156" label="Total captured" color="#10B981" />
                <StatCard value="89" label="Search queries" color="#8B5CF6" />
                <StatCard value="94%" label="Coverage" color="#B8943F" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
                {[
                  { label: 'Capture', text: 'Detect tagged messages, flagged threads, or configured channels.' },
                  { label: 'Structure', text: 'AI auto-fills type, accounts, topics, confidence. You confirm.' },
                  { label: 'Store', text: 'Each insight becomes a timestamped, attributed intelligence card.' },
                  { label: 'Surface', text: 'Query by topic, account, competitor, time range — instant answers.' },
                ].map(item => (
                  <div key={item.label}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#3B82F6' }}>{item.label}</span>
                    <span style={{ fontSize: '13px', color: 'rgba(244,240,232,0.45)', marginLeft: '8px' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
              <BISearchWorkbench />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ MICRO WORKFLOW ═══════ */}
      <section className="iw-section" style={{ background: 'var(--paper-warm)' }}>
        <div className="max-w-content-default mx-auto">
          <div className="iw-sidebar-grid">
            <div>
              <span className="iw-eyebrow">Workflow</span>
              <h2 className="iw-section-title">From Slack to actionable card. 10 seconds.</h2>
            </div>
            <div>
              <div style={{ borderTop: '1px solid var(--rule-light)' }}>
                {[
                  'A rep posts: "Acme chose us over Competitor X because of API flexibility. Third time I\'ve seen this."',
                  'The system extracts the claim, pre-fills fields (type: competitive win; account: Acme), and prompts confirm.',
                  'Confirmed card is stored and linked to metrics and account history in the Spine.',
                  'Later, anyone querying "Competitor X in financial services" gets those cards with context.',
                ].map((s, i) => (
                  <StepRow key={i} num={i + 1} text={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ LIVE HQ DASHBOARD ═══════ */}
      <section style={{ background: '#080C14', padding: '80px 0' }}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <div style={{ marginBottom: '40px' }}>
            <span className="iw-eyebrow" style={{ color: 'var(--gold-light)' }}>Dashboard</span>
            <h2 className="font-serif" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--paper)', marginTop: '12px' }}>
              See what your team is learning in real time.
            </h2>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
            <BIHQWorkbench />
          </div>
          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { title: 'Intelligence Velocity', text: 'Insights captured week-over-week. Track team learning speed.' },
              { title: 'Top Topics', text: 'See where signal concentration exists across your organization.' },
              { title: 'Stale Areas', text: 'Find topics that need fresh input or follow-up action.' },
            ].map(item => (
              <div key={item.title}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#E2E8F0' }}>{item.title}</span>
                <p style={{ fontSize: '12px', color: 'rgba(244,240,232,0.35)', marginTop: '6px', lineHeight: 1.55 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ LIVE INSIGHTS WORKBENCH ═══════ */}
      <section className="iw-section" style={{ background: 'var(--paper)' }} ref={r2}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <span className="iw-eyebrow">Live Workbench</span>
          <h2 className="font-serif reveal" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--ink)', marginTop: '12px', marginBottom: '8px' }}>
            See the BI Workbench in action.
          </h2>
          <p className="iw-body reveal" style={{ maxWidth: '640px', marginBottom: '32px' }}>
            Auto-capture, classification, search, and dashboards — all running on the same Spine memory that powers Account Success.
          </p>
          <div className="reveal" style={{ border: '1px solid var(--rule-light)', overflow: 'hidden' }}>
            <BIInsightsWorkbench />
          </div>
        </div>
      </section>

      {/* ═══════ REVIEWS + SEARCH ═══════ */}
      <section className="iw-section">
        <div className="max-w-content-default mx-auto">
          <div className="iw-sidebar-grid">
            <div>
              <span className="iw-eyebrow">Reviews</span>
              <h2 className="iw-section-title">Turn insights into decisions.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Weekly leader prompts surface high-signal cards for review.',
                'Leadership flags insights, assigns owners, schedules follow-ups.',
                'Reviews convert ad-hoc observations into strategic actions.',
              ].map((b, i) => (
                <div key={i} className="flex items-start" style={{ gap: '10px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '6px' }} />
                  <span className="iw-body">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHO IT'S FOR ═══════ */}
      <section className="iw-section" style={{ background: 'var(--paper-warm)' }}>
        <div className="max-w-content-default mx-auto">
          <div className="iw-sidebar-grid">
            <div>
              <span className="iw-eyebrow">Built For</span>
              <h2 className="iw-section-title">Teams that learn fast.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { role: 'Revenue', text: 'AEs and RevOps who need win/loss patterns and playbooks.' },
                { role: 'Product', text: 'PMs who need consolidated feature requests and feedback.' },
                { role: 'Customer Success', text: 'CSMs spotting churn signals and expansion signals.' },
                { role: 'Marketing & GTM', text: 'Message testing, campaign signals, regional patterns.' },
                { role: 'Partnerships', text: 'Partner-sourced intelligence and co-sell signals.' },
              ].map(w => (
                <div key={w.role}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>{w.role}</span>
                  <span style={{ fontSize: '14px', color: 'var(--ink-muted)', marginLeft: '8px' }}>{w.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROOF ═══════ */}
      <section className="iw-section" style={{ background: 'var(--slate)', color: 'var(--paper)' }}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <div className="iw-sidebar-grid">
            <div>
              <span className="iw-eyebrow" style={{ color: 'var(--gold-light)' }}>Proof</span>
              <h2 className="font-serif" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--paper)' }}>
                Compounding memory, real outcomes.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Capture-first approach reduces time-to-answer from hours to seconds.',
                'Same Spine architecture powers Account Success — intelligence ties directly to accounts.',
                'Built and proven on real operational use — founder-run and dogfooded.',
              ].map((b, i) => (
                <div key={i} className="flex items-start" style={{ gap: '10px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '6px' }} />
                  <span style={{ fontSize: 'var(--fs-body)', lineHeight: 1.75, color: 'rgba(244,240,232,0.6)' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="text-center iw-section relative overflow-hidden">
        <div className="max-w-content-narrow mx-auto relative z-10">
          <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.0, letterSpacing: '0.015em', marginBottom: '24px' }}>
            STOP LOSING<br />WHAT YOU LEARN.
          </h2>
          <p className="iw-body" style={{ marginBottom: '32px' }}>
            Capture the signals your team already shares. Turn them into institutional memory that surfaces answers with evidence and action.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="iw-btn-primary">Capture your first insight</Link>
            <Link to="/features" className="iw-btn-secondary">Explore all features</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
