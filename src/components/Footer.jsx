import { Globe, ArrowUp } from 'lucide-react'

const SocialIcon = ({ name }) => {
  const icons = {
    Dribbble: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.309 35.309 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z"/>
      </svg>
    ),
    LinkedIn: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    Twitter: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    Behance: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.719-4.35H20.17c-.133-1.36-.591-2.47-2.233-2.47-1.49 0-2.404.75-2.57 2.47zM6.812 13.95c1.141 0 2.304.475 2.304 1.928 0 1.266-.966 1.875-2.274 1.875H3.7v-3.803h3.112zm.046-4.875c1.121 0 2.017.452 2.017 1.731 0 1.168-.832 1.683-1.963 1.683H3.7V9.075h3.158zM0 19.5h7.5c2.395 0 4.5-1.032 4.5-3.6 0-1.669-.858-3.15-2.546-3.375C10.75 12.15 11.3 11.1 11.3 9.525 11.3 7.137 9.6 6 7.1 6H0v13.5z"/>
      </svg>
    ),
  }
  return icons[name] || <Globe size={16} />
}

const socials = [
  { name: 'Dribbble', href: '#', label: 'Dribbble' },
  { name: 'LinkedIn', href: '#', label: 'LinkedIn' },
  { name: 'Twitter', href: '#', label: 'Twitter / X' },
  { name: 'Behance', href: '#', label: 'Behance' },
]

const links = [
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer
      className="px-6 sm:px-8 lg:px-24 py-10 sm:py-12"
      style={{ borderTop: '1px solid rgba(62, 148, 132, 0.12)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: '#3E9484', color: '#0A231C' }}
              >
                AB
              </div>
              <span className="font-semibold" style={{ color: '#F4F4F4' }}>Abdullah Beshary</span>
            </div>
            <p className="text-xs" style={{ color: '#8A9A96' }}>
              Visual & Graphic Designer · Cairo, Egypt
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6 sm:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#8A9A96' }}
                onMouseEnter={e => (e.target.style.color = '#F4F4F4')}
                onMouseLeave={e => (e.target.style.color = '#8A9A96')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {socials.map(({ name, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(62,148,132,0.1)',
                  border: '1px solid rgba(62,148,132,0.2)',
                  color: '#8A9A96',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#3E9484'
                  e.currentTarget.style.borderColor = 'rgba(62,148,132,0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#8A9A96'
                  e.currentTarget.style.borderColor = 'rgba(62,148,132,0.2)'
                }}
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>

        <div className="my-8 h-px" style={{ backgroundColor: 'rgba(62, 148, 132, 0.08)' }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#8A9A96' }}>
            © 2026 Abdullah Beshary · Graphic Designer · Cairo, Egypt
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs font-medium transition-all duration-200 hover:opacity-80 group"
            style={{ color: '#3E9484' }}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
