import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, List, X } from '@phosphor-icons/react'

const links = [
  ['AI offerings', '#services'],
  ['Use cases', '#use-cases'],
  ['Our approach', '#process'],
  ['About us', '#about'],
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const menuButton = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return
    const close = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButton.current?.focus()
      }
      if (event.type === 'pointerdown' && !headerRef.current?.contains(event.target))
        setIsMenuOpen(false)
    }
    const resize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false)
    }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', close)
    window.addEventListener('resize', resize)
    return () => {
      document.removeEventListener('keydown', close)
      document.removeEventListener('pointerdown', close)
      window.removeEventListener('resize', resize)
    }
  }, [isMenuOpen])

  return (
    <header className="site-header" ref={headerRef}>
      <div className="section-container header-inner">
        <a
          href="#home"
          className="brand"
          aria-label="Softmatrices home"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src="/images/logo.png" width="36" height="36" alt="" />
          <span>
            softmatrices<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="#contact" className="button button-small header-cta">
            Let’s talk AI <ArrowUpRight size={16} />
          </a>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setIsMenuOpen((previous) => !previous)}
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setIsMenuOpen(false)}>
            {label}
            <ArrowUpRight size={16} />
          </a>
        ))}
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
          Let’s talk AI <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  )
}
