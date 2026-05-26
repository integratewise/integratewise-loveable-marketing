import type { ReactNode } from 'react'

interface WorkbenchShellProps {
  children: ReactNode
  activeTab?: string
  tabs?: string[]
  onTabChange?: (tab: string) => void
  title?: string
  subtitle?: string
  rightPanel?: ReactNode
  accent?: 'green' | 'gold' | 'blue'
}

const navItems = [
  { icon: '◆', label: 'Overview', active: false },
  { icon: '◈', label: 'Accounts', active: true },
  { icon: '◇', label: 'Contacts', active: false },
  { icon: '◊', label: 'Insights', active: false },
  { icon: '⬡', label: 'Tasks', active: false },
  { icon: '◉', label: 'Twin', active: false },
  { icon: '◎', label: 'Cognitive', active: false },
  { icon: '◐', label: 'Analytics', active: false },
  { icon: '◑', label: 'Settings', active: false },
]

export function WorkbenchSidebar({ activeItem = 'Accounts' }: { activeItem?: string }) {
  return (
    <div style={{
      width: '220px',
      minWidth: '220px',
      background: '#0B1120',
      borderRight: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      {/* Logo */}
      <div style={{ padding: '20px 16px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '28px', height: '28px',
          background: 'linear-gradient(135deg, #1A3A2A, #2D5A3D)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '11px', fontWeight: 700, color: '#B8943F',
        }}>IW</div>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#E2E8F0', letterSpacing: '0.03em' }}>IntegrateWise</span>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {navItems.map(item => (
          <div
            key={item.label}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12px',
              color: item.label === activeItem ? '#10B981' : 'rgba(226,232,240,0.5)',
              background: item.label === activeItem ? 'rgba(16,185,129,0.1)' : 'transparent',
              transition: 'all 0.15s ease',
            }}
          >
            <span style={{ fontSize: '11px', opacity: 0.6 }}>{item.icon}</span>
            <span style={{ fontWeight: item.label === activeItem ? 500 : 400 }}>{item.label}</span>
          </div>
        ))}
      </nav>

      {/* User */}
      <div style={{
        padding: '12px 16px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <div style={{
          width: '32px', height: '32px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1A3A2A, #2D5A3D)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '12px', fontWeight: 600, color: '#B8943F',
        }}>AP</div>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 500, color: '#E2E8F0' }}>Alex Prince</div>
          <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.4)' }}>CSM Lead</div>
        </div>
      </div>
    </div>
  )
}

export default function WorkbenchShell({
  children,
  activeTab,
  tabs,
  onTabChange,
  title,
  subtitle,
  rightPanel,
  accent = 'green',
}: WorkbenchShellProps) {
  const accentColor = accent === 'green' ? '#10B981' : accent === 'gold' ? '#B8943F' : '#3B82F6'

  return (
    <div style={{
      display: 'flex',
      height: '580px',
      borderRadius: '0',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.08)',
      fontFamily: "'Inter', 'Instrument Sans', system-ui, sans-serif",
      fontSize: '13px',
      background: '#0F172A',
    }}>
      <WorkbenchSidebar activeItem={title || 'Accounts'} />

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            {title && (
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#F1F5F9', margin: 0, letterSpacing: '-0.01em' }}>{title}</h2>
                {subtitle && <span style={{ fontSize: '11px', color: 'rgba(226,232,240,0.4)', fontWeight: 400 }}>{subtitle}</span>}
              </div>
            )}
          </div>
          {tabs && tabs.length > 0 && (
            <div style={{ display: 'flex', gap: '4px' }}>
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => onTabChange?.(tab)}
                  style={{
                    padding: '6px 14px',
                    fontSize: '11px',
                    fontWeight: 500,
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    background: tab === activeTab ? `${accentColor}20` : 'transparent',
                    color: tab === activeTab ? accentColor : 'rgba(226,232,240,0.4)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          <div style={{ flex: 1, overflow: 'auto', padding: '20px 24px' }}>
            {children}
          </div>
          {rightPanel && (
            <div style={{
              width: '280px',
              minWidth: '280px',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
              background: '#0B1120',
              overflow: 'auto',
            }}>
              {rightPanel}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
