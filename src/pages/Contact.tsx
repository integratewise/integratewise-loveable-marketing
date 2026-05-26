import { useState } from 'react'

const roles = ['Founder / CEO', 'RevOps', 'Sales / CS', 'Business Operations', 'Product', 'Engineering', 'Other']

const steps = [
  { n: '1', t: 'Discovery call', d: '20 minutes. We understand your stack, where context breaks, and what continuity looks like for your team.' },
  { n: '2', t: 'Custom walkthrough', d: 'We show you the workbenches, the round trip, and governance — mapped to your workflows.' },
  { n: '3', t: 'Pilot setup', d: 'If it is a fit, we connect 2-3 tools and get your first workflow running within 48 hours.' },
]

const trust = [
  'SOC 2 compliant infrastructure',
  'Row-level data isolation',
  'Full audit trails on every action',
  'Enterprise-grade encryption',
  'Built by a MuleSoft Architect',
]

export default function Contact() {
  const [role, setRole] = useState('')
  const [interest, setInterest] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [challenge, setChallenge] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Name is required'
    if (!email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Invalid email'
    if (!company.trim()) e.company = 'Company is required'
    if (!role) e.role = 'Role is required'
    if (!interest) e.interest = 'Interest is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      {/* HERO */}
      <section className="iw-section" style={{ paddingTop: '96px' }}>
        <div className="max-w-content-narrow mx-auto">
          <span className="iw-eyebrow block mb-4">Contact</span>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            See IntegrateWise<br />in action.
          </h1>
          <p className="iw-body" style={{ maxWidth: '480px' }}>
            We are selectively onboarding organizations that want to stop being the integration layer. If your team manages complex relationships across multiple tools — we should talk.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="iw-section" style={{ background: 'var(--paper-warm)', borderTop: '1px solid var(--rule)' }}>
        <div className="max-w-content-default mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="iw-card text-center" style={{ padding: '48px 32px' }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%', background: 'var(--forest)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
                  }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--ink)', marginBottom: '8px' }}>Request received</h3>
                  <p className="iw-body" style={{ maxWidth: '400px', margin: '0 auto' }}>
                    We will review your details and get back to you within 24 hours. In the meantime, explore the architecture overview.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="iw-card space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-md font-body text-[13px] outline-none transition-all"
                        style={{ background: 'var(--paper)', border: `1px solid ${errors.name ? 'var(--red)' : 'var(--rule)'}`, color: 'var(--ink)' }} />
                      {errors.name && <span className="text-[11px]" style={{ color: 'var(--red)' }}>{errors.name}</span>}
                    </div>
                    <div>
                      <input type="email" placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-md font-body text-[13px] outline-none transition-all"
                        style={{ background: 'var(--paper)', border: `1px solid ${errors.email ? 'var(--red)' : 'var(--rule)'}`, color: 'var(--ink)' }} />
                      {errors.email && <span className="text-[11px]" style={{ color: 'var(--red)' }}>{errors.email}</span>}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-md font-body text-[13px] outline-none transition-all"
                        style={{ background: 'var(--paper)', border: `1px solid ${errors.company ? 'var(--red)' : 'var(--rule)'}`, color: 'var(--ink)' }} />
                      {errors.company && <span className="text-[11px]" style={{ color: 'var(--red)' }}>{errors.company}</span>}
                    </div>
                    <div>
                      <select value={role} onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-md font-body text-[13px] outline-none transition-all appearance-none cursor-pointer"
                        style={{ background: 'var(--paper)', border: `1px solid ${errors.role ? 'var(--red)' : 'var(--rule)'}`, color: role ? 'var(--ink)' : 'var(--ink-ghost)' }}>
                        <option value="" disabled>Role / Function</option>
                        {roles.map((r) => (<option key={r} value={r} style={{ color: 'var(--ink)' }}>{r}</option>))}
                      </select>
                      {errors.role && <span className="text-[11px]" style={{ color: 'var(--red)' }}>{errors.role}</span>}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input type="text" placeholder="Team size" value={teamSize} onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-md font-body text-[13px] outline-none transition-all"
                        style={{ background: 'var(--paper)', border: '1px solid var(--rule)', color: 'var(--ink)' }} />
                    </div>
                    <div>
                      <select value={interest} onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-md font-body text-[13px] outline-none transition-all appearance-none cursor-pointer"
                        style={{ background: 'var(--paper)', border: `1px solid ${errors.interest ? 'var(--red)' : 'var(--rule)'}`, color: interest ? 'var(--ink)' : 'var(--ink-ghost)' }}>
                        <option value="" disabled>Primary interest</option>
                        <option value="account-success">Account Success</option>
                        <option value="business-intelligence">Business Intelligence</option>
                        <option value="both">Both</option>
                      </select>
                      {errors.interest && <span className="text-[11px]" style={{ color: 'var(--red)' }}>{errors.interest}</span>}
                    </div>
                  </div>
                  <div>
                    <label className="iw-label block mb-1.5">Biggest operational challenge</label>
                    <textarea rows={4} placeholder="Describe your stack and where context gets lost..."
                      value={challenge} onChange={(e) => setChallenge(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-md font-body text-[13px] outline-none resize-none transition-all"
                      style={{ background: 'var(--paper)', border: '1px solid var(--rule)', color: 'var(--ink)' }} />
                  </div>
                  <button type="submit" className="iw-btn-primary w-full">Request a demo</button>
                  <p className="font-body text-[11px] text-center" style={{ color: 'var(--ink-ghost)' }}>Or email <span style={{ color: 'var(--gold)' }}>founder@integratewise.com</span></p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-4">
              <div className="iw-card" style={{ padding: '16px' }}>
                <h4 className="iw-label block mb-3">What to expect</h4>
                <div className="space-y-3">
                  {steps.map((s) => (
                    <div key={s.n} className="flex gap-3">
                      <span className="font-display text-[18px] shrink-0" style={{ color: 'var(--gold)' }}>{s.n}</span>
                      <div>
                        <span className="font-body text-[13px] font-semibold block" style={{ color: 'var(--ink)' }}>{s.t}</span>
                        <span className="font-body text-[11px] block" style={{ color: 'var(--ink-muted)' }}>{s.d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="iw-card" style={{ padding: '16px' }}>
                <h4 className="iw-label block mb-3">Why teams trust us</h4>
                <div className="space-y-2">
                  {trust.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--forest-bright)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                      <span className="font-body text-[12px]" style={{ color: 'var(--ink-muted)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="iw-card-warm" style={{ padding: '16px' }}>
                <h4 className="iw-label block mb-2">Direct contact</h4>
                <div className="space-y-1">
                  <p className="font-body text-[12px]"><span style={{ color: 'var(--ink-ghost)' }}>Email:</span> <span style={{ color: 'var(--gold)' }}>founder@integratewise.com</span></p>
                  <p className="font-body text-[12px]"><span style={{ color: 'var(--ink-ghost)' }}>Location:</span> <span style={{ color: 'var(--ink-muted)' }}>Bengaluru, India</span></p>
                  <p className="font-body text-[12px]"><span style={{ color: 'var(--ink-ghost)' }}>Response:</span> <span style={{ color: 'var(--ink-muted)' }}>Within 24 hours</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
