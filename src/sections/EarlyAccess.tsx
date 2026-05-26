import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import {
  Mail,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle,
} from 'lucide-react'

export default function EarlyAccess() {
  const ref = useScrollReveal('.reveal-ea', { stagger: 0.15, y: 24 })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const perks = [
    { icon: Sparkles, label: 'Personalized walkthrough' },
    { icon: ShieldCheck, label: 'Direct input into the roadmap' },
    { icon: Zap, label: 'Founding pricing locked in' },
  ]

  const handleSubmit = async () => {
    if (!email) return
    setLoading(true)
    try {
      await fetch('https://api.integratewise.com/v1/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'marketing-site' }),
      })
    } catch {
      // Silently fail — still show confirmation so UX is smooth
    }
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="early-access" className="iw-section" style={{ background: 'var(--forest)', color: 'var(--paper)' }} ref={ref}>
      <div className="max-w-content-narrow" style={{ textAlign: 'center' }}>
        <h2 className="font-serif reveal-ea" style={{
          fontSize: 'clamp(36px, 4vw, 64px)', lineHeight: 1.05, color: 'var(--paper)',
          marginBottom: '20px',
        }}>
          See it run on your data.
        </h2>

        <p className="reveal-ea" style={{
          fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-relaxed)',
          color: 'rgba(244,240,232,0.7)', marginBottom: '32px', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto',
        }}>
          A 30-minute walkthrough with the founder — no slides, no sales deck, just the product running on real data. Get a tailored quote and founding rates.
        </p>

        <div className="reveal-ea flex flex-wrap justify-center" style={{ gap: '16px', marginBottom: '32px' }}>
          {perks.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="flex items-center"
                style={{
                  gap: '8px',
                  background: 'rgba(244,240,232,0.06)',
                  border: '1px solid rgba(244,240,232,0.1)',
                  padding: '10px 18px',
                  borderRadius: '4px',
                }}
              >
                <Icon size={14} color="var(--gold-light)" strokeWidth={2} />
                <span style={{ fontSize: '13px', color: 'rgba(244,240,232,0.8)' }}>{p.label}</span>
              </div>
            )
          })}
        </div>

        {!submitted ? (
          <div className="reveal-ea" style={{
            display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px',
          }}>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="rgba(244,240,232,0.4)" strokeWidth={2} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                disabled={loading}
                style={{
                  padding: '12px 20px 12px 40px',
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                  border: '1px solid rgba(244,240,232,0.2)',
                  background: 'rgba(244,240,232,0.05)',
                  color: 'var(--paper)',
                  minWidth: '280px',
                  outline: 'none',
                  borderRadius: '4px',
                  opacity: loading ? 0.6 : 1,
                }}
              />
            </div>
            <button
              className="iw-btn-primary"
              style={{
                background: 'var(--gold)',
                color: 'var(--ink)',
                border: 'none',
                cursor: loading ? 'wait' : 'pointer',
                opacity: loading ? 0.7 : 1,
              }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Book Demo'}
            </button>
          </div>
        ) : (
          <div className="reveal-ea" style={{ marginBottom: '16px' }}>
            <div className="flex items-center justify-center" style={{ gap: '10px', marginBottom: '12px' }}>
              <CheckCircle size={22} color="var(--gold-light)" strokeWidth={2} />
              <span style={{ fontSize: '18px', color: 'var(--gold-light)' }}>
                You're in.
              </span>
            </div>
            <p style={{ fontSize: '15px', color: 'rgba(244,240,232,0.7)', lineHeight: 1.6 }}>
              We'll reach out within 24 hours to schedule your demo.
            </p>
          </div>
        )}

        <p className="reveal-ea" style={{
          fontSize: '13px', color: 'rgba(244,240,232,0.4)',
        }}>
          No spam. No credit card. 30 minutes with the founder.
        </p>
      </div>
    </section>
  )
}