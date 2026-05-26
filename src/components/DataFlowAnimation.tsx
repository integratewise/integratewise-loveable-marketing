import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const SOURCES = [
  { name: 'Salesforce', logo: '/logos/salesforce.svg', color: '#00A1E0', y: 12 },
  { name: 'HubSpot', logo: '/logos/hubspot.svg', color: '#FF7A59', y: 28 },
  { name: 'Zendesk', logo: '/logos/zendesk.svg', color: '#03363D', y: 44 },
  { name: 'Stripe', logo: '/logos/stripe.svg', color: '#635BFF', y: 60 },
  { name: 'Jira', logo: '/logos/jira.svg', color: '#0052CC', y: 76 },
  { name: 'Slack', logo: '/logos/slack.svg', color: '#4A154B', y: 92 },
]

const OUTPUTS = [
  { name: 'Account Success', color: '#B8943F', y: 25 },
  { name: 'Business Ops', color: '#D4AC5A', y: 50 },
  { name: 'Personal Ops', color: '#F0E0B0', y: 75 },
]

function SpineLogoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.6" />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

export function DataFlowAnimation() {
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => { setMounted(true) }, [])

  return (
    <div
      className="w-full max-w-5xl mx-auto h-[360px] md:h-[440px] rounded-2xl border border-white/10 relative overflow-hidden flex items-center justify-center"
      style={{
        background: '#1A3A2A',
        boxShadow: '0 0 60px rgba(26,58,42,0.08), 0 0 0px 1px rgba(255,255,255,0.05)',
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(184,148,63,0.06) 0%, transparent 70%)',
      }} />

      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dfa-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
            <stop offset="100%" stopColor="rgba(184,148,63,0.3)" />
          </linearGradient>
          <linearGradient id="dfa-grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(184,148,63,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
          </linearGradient>
          <filter id="dfa-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="dfa-glow-out" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {mounted && SOURCES.map((source, i) => {
          const startX = 185
          const startY = (source.y / 100) * 500
          const endX = 410
          const endY = 250 + (source.y - 52) * 1.2
          const pathD = `M ${startX} ${startY} C ${startX + 110} ${startY}, ${endX - 60} ${endY}, ${endX} ${endY}`
          return (
            <g key={`left-${i}`}>
              <motion.path d={pathD} fill="none" stroke="url(#dfa-grad-left)" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: i * 0.08 }} />
              {[0, 1, 2].map((pIdx) => {
                const delay = i * 0.2 + pIdx * 0.9
                return (
                  <circle key={`pl-${i}-${pIdx}`} r="3" fill="#B8943F" filter="url(#dfa-glow)" opacity="0">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path={pathD} begin={`${delay}s`} />
                    <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.85;1" dur="2.8s" repeatCount="indefinite" begin={`${delay}s`} />
                  </circle>
                )
              })}
            </g>
          )
        })}

        {mounted && OUTPUTS.map((view, i) => {
          const startX = 590
          const startY = 250 + (view.y - 50) * 1.5
          const endX = 815
          const endY = (view.y / 100) * 500
          const pathD = `M ${startX} ${startY} C ${startX + 60} ${startY}, ${endX - 110} ${endY}, ${endX} ${endY}`
          return (
            <g key={`right-${i}`}>
              <motion.path d={pathD} fill="none" stroke="url(#dfa-grad-right)" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 + i * 0.15 }} />
              {[0, 1].map((pIdx) => {
                const delay = 1.2 + i * 0.35 + pIdx * 1.3
                return (
                  <circle key={`pr-${i}-${pIdx}`} r="3.5" fill="#D4AC5A" filter="url(#dfa-glow-out)" opacity="0">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path={pathD} begin={`${delay}s`} />
                    <animate attributeName="opacity" values="0;0.85;0.85;0" keyTimes="0;0.12;0.88;1" dur="2.2s" repeatCount="indefinite" begin={`${delay}s`} />
                  </circle>
                )
              })}
            </g>
          )
        })}
      </svg>

      {/* Source tools */}
      {SOURCES.map((source, i) => (
        <motion.div key={source.name} initial={{ opacity: 0, x: -20 }} animate={mounted ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="absolute left-[2%] md:left-[3%] w-[15%] md:w-[14%] h-[10%] border rounded-xl flex items-center gap-2 px-2 md:px-3 backdrop-blur-md z-20 transition-transform hover:scale-[1.04]"
          style={{ top: `calc(${source.y}% - 5%)`, backgroundColor: `${source.color}10`, borderColor: `${source.color}30` }}>
          <img src={source.logo} alt={source.name} className="w-4 h-4 md:w-5 md:h-5 shrink-0 object-contain"
            style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.1))' }} />
          <span className="text-[8px] md:text-[10px] font-bold text-white uppercase tracking-wider truncate">{source.name}</span>
        </motion.div>
      ))}

      {/* The Spine */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={mounted ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
        className="absolute left-[40%] w-[20%] h-[65%] top-[17.5%] rounded-2xl z-10 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(184,148,63,0.08) 0%, rgba(26,58,42,0.06) 50%, rgba(184,148,63,0.08) 100%)',
          border: '1px solid rgba(184,148,63,0.25)',
          boxShadow: '0 0 60px rgba(184,148,63,0.12), inset 0 0 30px rgba(26,58,42,0.04)',
        }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(184,148,63,0.06)_50%,transparent_100%)] opacity-60" />
        <motion.div className="absolute inset-x-0 h-[2px] opacity-40" style={{ background: '#B8943F', boxShadow: '0 0 12px #B8943F' }}
          animate={prefersReducedMotion ? { top: '50%' } : { top: ['0%', '100%', '0%'] }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 5, repeat: Infinity, ease: 'linear' }} />
        <div className="mb-2 relative z-10 h-8 w-16 shrink-0 md:h-10 md:w-20 text-[#B8943F]" style={{ filter: 'drop-shadow(0 0 20px rgba(184,148,63,0.4))' }}>
          <SpineLogoIcon className="h-full w-full" />
        </div>
        <h3 className="text-[9px] md:text-[12px] font-bold text-white uppercase tracking-widest text-center leading-relaxed relative z-10">The Spine</h3>
        <div className="relative z-10 mt-2 flex flex-col gap-1 px-2 w-full">
          {[{ label: 'Truth', color: '#B8943F' }, { label: 'Context', color: '#D4AC5A' }, { label: 'Memory', color: '#F0E0B0' }].map((flow, i) => (
            <motion.div key={flow.label} initial={{ opacity: 0, x: -6 }} animate={mounted ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }} className="flex items-center gap-1.5">
              <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full shrink-0" style={{ backgroundColor: flow.color }} />
              <span className="text-[6px] md:text-[8px] font-semibold uppercase tracking-wider" style={{ color: flow.color }}>{flow.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-[4%] flex justify-center gap-1 md:gap-1.5 h-[12%] items-end px-4">
          {[...Array(7)].map((_, i) => (
            <motion.div key={i} animate={mounted && !prefersReducedMotion ? { height: ['15%', '100%', '15%'] } : { height: '55%' }}
              transition={prefersReducedMotion || !mounted ? { duration: 0 } : { duration: 1.2 + (i % 5) * 0.12, repeat: Infinity, delay: i * 0.12 }}
              className="flex-1 rounded-t-sm" style={{ background: 'linear-gradient(to top, rgba(184,148,63,0.6) 0%, transparent 100%)' }} />
          ))}
        </div>
      </motion.div>

      {/* Output workspaces */}
      {OUTPUTS.map((view, i) => (
        <motion.div key={view.name} initial={{ opacity: 0, x: 20 }} animate={mounted ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
          className="absolute right-[2%] md:right-[3%] w-[16%] md:w-[15%] h-[13%] border rounded-xl flex items-center justify-center backdrop-blur-md z-20 transition-transform hover:scale-[1.04]"
          style={{ top: `calc(${view.y}% - 6.5%)`, backgroundColor: 'rgba(184,148,63,0.06)', borderColor: 'rgba(184,148,63,0.2)', boxShadow: '0 0 20px rgba(0,0,0,0.25)' }}>
          <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-center leading-tight px-1" style={{ color: view.color }}>{view.name}</span>
        </motion.div>
      ))}

      {/* Labels */}
      <div className="absolute top-3 left-[3%] z-30">
        <span className="text-[8px] md:text-[10px] font-semibold text-white/30 uppercase tracking-widest">Your Tools</span>
      </div>
      <div className="absolute top-3 right-[3%] z-30">
        <span className="text-[8px] md:text-[10px] font-semibold text-white/30 uppercase tracking-widest">Your Workspaces</span>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30">
        <span className="text-[7px] md:text-[9px] font-semibold text-white/20 uppercase tracking-widest">3 flows converge at Entity 360</span>
      </div>
    </div>
  )
}
