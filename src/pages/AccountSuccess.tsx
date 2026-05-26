import { Link } from 'react-router-dom'
import { useScrollReveal } from '@/hooks/useScrollAnimation'
import { UserWorkbench, CognitiveWorkbench, TwinWorkbench } from '@/components/workbench'

function LayerRow({ num, label, text }: { num: string; label: string; text: string }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '40px 140px 1fr', gap: '20px',
      alignItems: 'baseline', padding: '14px 0',
      borderBottom: '1px solid rgba(244,240,232,0.1)',
    }}>
      <span className="font-mono" style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.1em' }}>{num}</span>
      <span className="font-sans" style={{ fontSize: '13px', fontWeight: 600, color: '#F4F0E8' }}>{label}</span>
      <span style={{ fontSize: '13px', color: 'rgba(244,240,232,0.45)', lineHeight: 1.6 }}>{text}</span>
    </div>
  )
}

function StatCard({ value, label, color = '#10B981' }: { value: string; label: string; color?: string }) {
  return (
    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ fontSize: '32px', fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '11px', color: 'rgba(244,240,232,0.35)', marginTop: '6px' }}>{label}</div>
    </div>
  )
}

export default function AccountSuccess() {
  const r1 = useScrollReveal('.reveal', { stagger: 0.06 })
  const r2 = useScrollReveal('.reveal-layer', { stagger: 0.04 })
  const r3 = useScrollReveal('.reveal', { stagger: 0.1 })

  return (
    <div>
      {/* ═══════ HERO — Full workbench visual ═══════ */}
      <section className="iw-section" style={{
        minHeight: '80vh', paddingTop: '96px',
        background: 'linear-gradient(160deg, var(--paper) 0%, var(--paper-warm) 100%)',
      }}>
        <div className="max-w-content-default mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ marginBottom: '48px' }}>
            <div>
              <span className="iw-eyebrow">Account Success</span>
              <h1 className="font-display" style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95, letterSpacing: '0.015em', marginBottom: '24px' }}>
                EVERY ACCOUNT<br />REMEMBERED.
              </h1>
              <p className="iw-body" style={{ marginBottom: '16px', fontSize: '16px' }}>
                Fifteen layers of structured intelligence. One customer view across every tool. AI that carries complete context.
              </p>
              <p className="iw-body" style={{ marginBottom: '40px', color: 'var(--gold)' }}>
                Built by a CSM, proven by an $8M save.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/contact" className="iw-btn-primary">See it in action</Link>
                <Link to="/how-it-works" className="iw-btn-secondary">How the round trip works</Link>
              </div>
            </div>
            <div>
              <img
                src="/images/workbench/wb-account-user.jpg"
                alt="Account Success Workbench showing accounts, pipelines, health scores, and task management"
                style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid var(--rule-light)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROBLEM — Visual with day-without image ═══════ */}
      <section className="iw-section" ref={r1}>
        <div className="max-w-content-default mx-auto">
          <div className="iw-sidebar-grid">
            <div>
              <span className="iw-eyebrow">The Problem</span>
              <h2 className="iw-section-title reveal">You are the memory.</h2>
            </div>
            <div>
              <div className="reveal" style={{ marginBottom: '24px' }}>
                <img
                  src="/images/day-with-without.jpg"
                  alt="Day without IntegrateWise: constant tab switching, lost context, manual coordination"
                  style={{ width: '100%', maxHeight: '280px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'CRM shows deals. Support shows tickets. Slack shows conversations. Analytics shows usage. No tool shows the whole picture.',
                  'You manage 20–50 accounts and hold the full context in your head — contracts, stakeholders, risks, decisions, sentiment.',
                  'When you talk to AI, every session starts from zero. You are not using AI. You are training it, over and over.',
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

      {/* ═══════ SOLUTION — Live Cognitive Workbench ═══════ */}
      <section style={{ background: '#0B1120', padding: '80px 0' }}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="iw-eyebrow" style={{ color: 'var(--gold-light)' }}>The Solution</span>
              <h2 className="font-serif" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--paper)', marginTop: '12px' }}>
                One customer view. The round trip.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
                {[
                  'Connects to CRM, support, comms, docs through the Loader and Normalizer.',
                  'All account data flows into one Spine, normalized into 15 layers, projected into one surface.',
                  'See contract data next to support history, strategic objectives, risks, sentiment, usage — in one place.',
                  'Update a record, change a risk score, add a note. Changes retire back to source tools.',
                  'Next cycle: the Loader picks up all changes. The Spine grows. The AI gets smarter.',
                ].map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#B8943F', flexShrink: 0, marginTop: '6px' }} />
                    <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(244,240,232,0.55)', margin: 0 }}>{b}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
              <CognitiveWorkbench />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 15 LAYERS — Visual table ═══════ */}
      <section style={{ background: 'var(--slate)', color: 'var(--paper)', padding: '100px 0' }} ref={r2}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <div style={{ marginBottom: '48px' }}>
            <span className="iw-eyebrow" style={{ color: 'var(--gold-light)' }}>The 15 Layers</span>
            <h2 className="font-serif" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--paper)', marginTop: '12px' }}>
              Every dimension of a customer relationship.
            </h2>
          </div>
          <div style={{ borderTop: '1px solid rgba(244,240,232,0.1)' }}>
            {[
              { num: '01', label: 'Identity & Commercial', text: 'Profile, segment, contract value, renewal date, commercial history.' },
              { num: '02', label: 'Technical Landscape', text: 'Integrations, dependencies, architecture, implementation status.' },
              { num: '03', label: 'Stakeholder Map', text: 'Decision makers, champions, influencers, relationship strength.' },
              { num: '04', label: 'Health & Risk', text: 'Health scores, risk indicators, churn signals, engagement trends.' },
              { num: '05', label: 'Support History', text: 'Tickets, escalations, resolution times, support sentiment.' },
              { num: '06', label: 'Strategic Objectives', text: 'Customer goals, success plans, milestones, outcomes.' },
              { num: '07', label: 'Engagement', text: 'Call history, meeting notes, emails, QBRs, events.' },
              { num: '08', label: 'Product Usage', text: 'Adoption patterns, feature usage, login activity, API calls.' },
              { num: '09', label: 'Revenue', text: 'ARR, expansion opportunities, upsell signals, whitespace.' },
              { num: '10', label: 'Competitive Intel', text: 'Competitor presence, win/loss notes, positioning.' },
              { num: '11', label: 'Sentiment', text: 'NPS, qualitative feedback, sentiment trajectory.' },
              { num: '12', label: 'Decisions', text: 'Decision log — what, when, by whom, why.' },
              { num: '13', label: 'AI Insights', text: 'Pattern detection, risk predictions, recommendations.' },
              { num: '14', label: 'Governance', text: 'Approval history, lineage, audit trail.' },
              { num: '15', label: 'Compounding Memory', text: 'Every cycle adds context. The account gets richer, not older.' },
            ].map(l => (
              <div key={l.num} className="reveal-layer">
                <LayerRow num={l.num} label={l.label} text={l.text} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ LIVE WORKBENCH SHOWCASE ═══════ */}
      <section style={{ background: 'var(--paper)', padding: '80px 0' }} ref={r3}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <span className="iw-eyebrow">Live Workbench</span>
          <h2 className="font-serif reveal" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--ink)', marginTop: '12px', marginBottom: '8px' }}>
            See the Account Success Workbench in action.
          </h2>
          <p className="iw-body reveal" style={{ maxWidth: '640px', marginBottom: '32px' }}>
            This is not a mockup. This is the actual interface your team will use — with health rings, task boards, account timelines, and AI insights.
          </p>
          <div className="reveal" style={{ border: '1px solid var(--rule-light)', overflow: 'hidden' }}>
            <UserWorkbench />
          </div>
        </div>
      </section>

      {/* ═══════ TWIN WORKBENCH ═══════ */}
      <section style={{ background: '#080C14', padding: '80px 0' }}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div style={{ border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', order: 2 }}>
              <TwinWorkbench />
            </div>
            <div style={{ order: 1 }}>
              <span className="iw-eyebrow" style={{ color: 'var(--gold-light)' }}>AI Twin</span>
              <h2 className="font-serif" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--paper)', marginTop: '12px' }}>
                The AI that sees what you cannot.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
                {[
                  'Detects churn risk across your entire account base by correlating usage, support, sentiment, and engagement signals.',
                  'Surfaces expansion opportunities by identifying accounts with growing usage, new stakeholders, or product interest.',
                  'Tracks competitor mentions and pricing objections across conversations — automatically.',
                  'Runs on complete Spine memory, not isolated sessions. Every analysis has full context.',
                ].map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10B981', flexShrink: 0, marginTop: '6px' }} />
                    <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(244,240,232,0.55)', margin: 0 }}>{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ $8M PROOF ═══════ */}
      <section style={{ background: 'var(--slate)', color: 'var(--paper)', padding: '100px 0' }}>
        <div className="max-w-content-default mx-auto" style={{ padding: '0 52px' }}>
          <div className="iw-sidebar-grid">
            <div>
              <span className="iw-eyebrow" style={{ color: 'var(--gold-light)' }}>Proof</span>
              <h2 className="font-serif" style={{ fontSize: 'var(--fs-serif-md)', lineHeight: 1.32, color: 'var(--paper)' }}>
                The account that proved the system.
              </h2>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
                <StatCard value="$8M" label="ARR saved" color="#B8943F" />
                <StatCard value="15" label="Layers connected" color="#10B981" />
                <StatCard value="6" label="Tools unified" color="#3B82F6" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Strategic account approaching renewal. Silent customer, rising tickets, flat usage, competitor circling.',
                  'CRM showed deals. Support showed escalations. Slack showed frustration. No tool showed the whole picture.',
                  'Account Success connected the dots: technical friction, misaligned executive, competitor pilot, declining sentiment.',
                  'Complete context enabled a focused intervention. Enablement, executive alignment, data-driven positioning.',
                  'The account renewed. When the system remembers, the CSM can focus on strategy instead of archaeology.',
                ].map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#B8943F', flexShrink: 0, marginTop: '6px' }} />
                    <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(244,240,232,0.55)', margin: 0 }}>{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="text-center iw-section relative overflow-hidden">
        <div className="max-w-content-narrow mx-auto relative z-10">
          <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.0, letterSpacing: '0.015em', marginBottom: '24px' }}>
            STOP BEING THE<br />MEMORY.
          </h2>
          <p className="iw-body" style={{ marginBottom: '32px' }}>
            Account Success remembers every detail so you can focus on strategy.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="iw-btn-primary">See Account Success in action</Link>
            <Link to="/features" className="iw-btn-secondary">Explore all features</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
