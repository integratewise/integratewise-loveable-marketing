import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.metric-number')
    els.forEach(el => {
      const target = el.getAttribute('data-target') || '0'
      const endVal = parseFloat(target)
      const obj = { val: 0 }
      gsap.to(obj, {
        val: endVal, duration: 1.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate: () => {
          const suffix = el.getAttribute('data-suffix') || ''
          const isFloat = target.includes('.')
          el.textContent = (isFloat ? obj.val.toFixed(1) : Math.round(obj.val)) + suffix
        },
      })
    })
  }, [])

  const metrics = [
    { num: '10', suffix: '+ hours', label: 'Reclaimed weekly per team member from tab-switching' },
    { num: '20', suffix: '+ members', label: 'Maximum pilot team for rapid deployment and adoption' },
    { num: '30', suffix: ' min', label: 'Setup time to connect your core tools to the Spine' },
    { num: '6', suffix: '+', label: 'Integrated tool categories ready on day one' },
  ]

  return (
    <section className="iw-section" style={{ background: 'var(--forest)', color: 'var(--paper)', borderBottom: '1px solid rgba(244,240,232,0.1)' }} ref={ref}>
      <div className="max-w-content-default" style={{ padding: '0 52px' }}>
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--gold-light)', display: 'block', marginBottom: '8px',
          }}>Platform Metrics</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--paper)' }}>
            Return on Infrastructure
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2px', background: 'rgba(244,240,232,0.06)' }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ background: 'var(--forest)', padding: '36px 28px', textAlign: 'center' }}>
              <span className="font-display metric-number" data-target={m.num} data-suffix={m.suffix}
                style={{ fontSize: '56px', lineHeight: 1, color: 'var(--gold)', display: 'block' }}>
                0{m.suffix}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(244,240,232,0.4)',
                display: 'block', marginTop: '8px', lineHeight: 1.5,
              }}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
