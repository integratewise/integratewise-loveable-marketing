import { Link, Outlet, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const navLinks = [
    { label: 'Product', path: '/platform' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Templates', path: '/templates' },
    { label: 'About', path: '/about' },
    { label: 'Interactive Demo', path: '/demo' },
  ]

  return (
    <header
      className="iw-hairline-strong"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--paper)',
      }}
    >
      <div className="max-w-content-default" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
        }}>
          <img src="/assets/logo-mark.svg" alt="IW" style={{ width: '28px', height: '28px' }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            color: 'var(--ink)',
          }}>
            INTEGRATEWISE
          </span>
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className="iw-nav-link"
              style={{
                color: location.pathname === item.path ? 'var(--forest)' : undefined,
                fontWeight: location.pathname === item.path ? 600 : 500,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            href="https://app.integratewise.com"
            className="iw-nav-link"
            style={{ fontSize: '13px', fontWeight: 500 }}
          >
            Sign In
          </a>
          <Link
            to="/#early-access"
            className="iw-btn-primary"
            style={{ padding: '10px 24px', fontSize: '12px', letterSpacing: '0.05em' }}
          >
            Book Demo
          </Link>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ background: 'var(--forest)', color: 'var(--paper)' }}>
      <div className="iw-hairline-strong" style={{ borderColor: 'rgba(244,240,232,0.15)' }} />
      <div className="max-w-content-default" style={{ padding: '64px 52px 48px' }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="/assets/logo-mark-light.svg" alt="IW" style={{ width: '28px', height: '28px' }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                color: 'var(--paper)',
              }}>
                INTEGRATEWISE
              </span>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(244,240,232,0.5)', maxWidth: '260px' }}>
              The memory-native operating system.
            </p>
          </div>

          {/* Product */}
          <div>
            <span className="iw-label" style={{ color: 'var(--gold-light)', display: 'block', marginBottom: '16px' }}>
              Product
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/#products" style={{ fontSize: '13px', color: 'rgba(244,240,232,0.5)', textDecoration: 'none' }}>Account Success</Link>
              <Link to="/#products" style={{ fontSize: '13px', color: 'rgba(244,240,232,0.5)', textDecoration: 'none' }}>Business OS</Link>
              <Link to="/#surfaces" style={{ fontSize: '13px', color: 'rgba(244,240,232,0.5)', textDecoration: 'none' }}>Surfaces</Link>
              <Link to="/templates" style={{ fontSize: '13px', color: 'rgba(244,240,232,0.5)', textDecoration: 'none' }}>Templates</Link>
              <Link to="/#pricing" style={{ fontSize: '13px', color: 'rgba(244,240,232,0.5)', textDecoration: 'none' }}>Pricing</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <span className="iw-label" style={{ color: 'var(--gold-light)', display: 'block', marginBottom: '16px' }}>
              Company
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/about" style={{ fontSize: '13px', color: 'rgba(244,240,232,0.5)', textDecoration: 'none' }}>About</Link>
              <a href="mailto:hello@integratewise.com" style={{ fontSize: '13px', color: 'rgba(244,240,232,0.5)', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          {/* Book Demo */}
          <div>
            <span className="iw-label" style={{ color: 'var(--gold-light)', display: 'block', marginBottom: '16px' }}>
              Get Started
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/#early-access" style={{ fontSize: '13px', color: 'rgba(244,240,232,0.5)', textDecoration: 'none' }}>Book a Demo</Link>
              <a href="https://app.integratewise.com" style={{ fontSize: '13px', color: 'rgba(244,240,232,0.5)', textDecoration: 'none' }}>Sign In</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '24px',
          borderTop: '1px solid rgba(244,240,232,0.1)',
        }}>
          <span style={{ fontSize: '12px', color: 'rgba(244,240,232,0.35)' }}>
            &copy; 2026 IntegrateWise. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/contact" style={{ fontSize: '12px', color: 'rgba(244,240,232,0.35)', textDecoration: 'none' }}>Privacy</Link>
            <Link to="/contact" style={{ fontSize: '12px', color: 'rgba(244,240,232,0.35)', textDecoration: 'none' }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
