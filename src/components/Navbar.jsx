import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10, 35, 28, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(62, 148, 132, 0.12)' : 'none',
      }}
    >
      {/* Same container width / side padding as every section */}
      <nav className="max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-105"
            style={{ backgroundColor: '#3E9484', color: '#0A231C' }}
          >
            AB
          </div>
          <span className="font-semibold text-base" style={{ color: '#F4F4F4' }}>
            Abdullah Beshary
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-all duration-200 relative group"
                style={{ color: '#8A9A96' }}
                onMouseEnter={e => (e.target.style.color = '#F4F4F4')}
                onMouseLeave={e => (e.target.style.color = '#8A9A96')}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#3E9484' }}
                />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-80 hover:scale-105"
              style={{ backgroundColor: '#3E9484', color: '#F4F4F4' }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-colors duration-200"
          style={{ color: '#F4F4F4' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden px-6 pb-6 pt-2"
          style={{ backgroundColor: 'rgba(10, 35, 28, 0.97)', borderBottom: '1px solid rgba(62, 148, 132, 0.15)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3.5 text-sm font-medium border-b transition-colors duration-200"
              style={{ color: '#8A9A96', borderColor: 'rgba(62, 148, 132, 0.1)' }}
              onMouseEnter={e => (e.target.style.color = '#F4F4F4')}
              onMouseLeave={e => (e.target.style.color = '#8A9A96')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-5 text-center px-5 py-3 rounded-lg text-sm font-semibold"
            style={{ backgroundColor: '#3E9484', color: '#F4F4F4' }}
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
