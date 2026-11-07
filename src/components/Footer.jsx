import { ArrowUp, ArrowUpRight } from '@phosphor-icons/react'
import { offerings } from '../data/offerings'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <img src="/images/logo.png" width="36" height="36" alt="" />
              <span>
                softmatrices<span className="brand-dot">.</span>
              </span>
            </a>
            <p>
              Enterprise AI. Purpose-built agents.
              <br />
              Intelligence that moves your business forward.
            </p>
            <a href="mailto:info@softmatrices.com" className="footer-email">
              info@softmatrices.com <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="footer-column">
            <h3>AI OFFERINGS</h3>
            {offerings.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.shortTitle}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h3>SOFTMATRICES</h3>
            <a href="#about">About us</a>
            <a href="#use-cases">AI in action</a>
            <a href="#process">Our approach</a>
            <a href="#why-us">Enterprise foundation</a>
            <a href="#contact">
              Let’s talk AI <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Softmatrices. All rights reserved.</p>
          <span>ENTERPRISE AI & AGENTIC SYSTEMS</span>
          <a href="#home" className="icon-button" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
