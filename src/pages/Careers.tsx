const roles = [
  { t: 'Senior Backend Engineer', l: 'Bengaluru / Remote', type: 'Full-time', d: 'Build the Spine — the memory and sync layer that connects everything. Postgres, Redis, event processing, API integrations.' },
  { t: 'Product Designer', l: 'Bengaluru / Remote', type: 'Full-time', d: 'Design four connected workbenches, approval workflows, and data-dense operational interfaces. Not dashboards — an operating system.' },
  { t: 'Customer Success Lead', l: 'Bengaluru', type: 'Full-time', d: 'Help customers implement continuity. You have lived the problem. Now help solve it at scale.' },
  { t: 'AI Engineer', l: 'Bengaluru / Remote', type: 'Full-time', d: 'Build the Twin — an AI assistant that reasons with full organizational context. Persistent memory, evidence-backed suggestions, human-in-the-loop.' },
]

export default function Careers() {
  return (
    <div>
      {/* HERO */}
      <section className="iw-section" style={{ paddingTop: '96px' }}>
        <div className="max-w-content-narrow mx-auto">
          <span className="iw-eyebrow block mb-4">Careers</span>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            Join the team<br />fixing continuity.
          </h1>
          <p className="iw-body" style={{ maxWidth: '480px' }}>
            We are building the operating system that puts AI under human control. If you have lived the context-switching problem, you will fit right in.
          </p>
        </div>
      </section>

      {/* ROLES */}
      <section className="iw-section" style={{ background: 'var(--paper-warm)', borderTop: '1px solid var(--rule)' }}>
        <div className="max-w-content-narrow mx-auto">
          <div className="space-y-3">
            {roles.map((r) => (
              <div key={r.t} className="iw-card" style={{ padding: '20px' }}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="font-body text-[15px] font-semibold" style={{ color: 'var(--ink)' }}>{r.t}</h3>
                  <div className="flex items-center gap-2 sm:ml-auto">
                    <span className="font-mono text-[10px]" style={{ color: 'var(--ink-ghost)' }}>{r.l}</span>
                    <span className="iw-label px-2 py-0.5 rounded-md" style={{ background: 'var(--forest-muted)', color: 'var(--forest)' }}>{r.type}</span>
                  </div>
                </div>
                <p className="font-body text-[13px]" style={{ color: 'var(--ink-muted)', lineHeight: 1.5 }}>{r.d}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-[12px] text-center mt-6" style={{ color: 'var(--ink-ghost)' }}>
            Do not see your role? Email us at <span style={{ color: 'var(--gold)' }}>founder@integratewise.com</span>
          </p>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="iw-section">
        <div className="max-w-content-default mx-auto">
          <span className="iw-eyebrow block mb-4">Why IntegrateWise</span>
          <h2 className="iw-headline mb-6">Build what you wish existed.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: 'Eat your own cooking', d: 'We run our company on IntegrateWise. If it does not work for us, it does not ship.' },
              { t: 'Built from the seat', d: 'Every feature comes from real operational pain. No speculative product work.' },
              { t: 'AI under human control', d: 'We believe AI should amplify humans, not replace them. Governance is the architecture.' },
              { t: 'Enterprise by default', d: 'Security, compliance, and architecture are not afterthoughts. They are the foundation.' },
              { t: 'Small team, big mission', d: 'Your work directly shapes the product. No layers of approval. No bureaucracy.' },
              { t: 'The $8M story', d: 'We exist because one CSM saved one account by connecting dots no tool would connect. That is the mission.' },
            ].map((item) => (
              <div key={item.t} className="iw-card" style={{ padding: '16px' }}>
                <h4 className="font-body text-[13px] font-semibold mb-1" style={{ color: 'var(--ink)' }}>{item.t}</h4>
                <p className="font-body text-[12px]" style={{ color: 'var(--ink-muted)', lineHeight: 1.5 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
