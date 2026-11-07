import { ArrowRight, ArrowUpRight, Check } from '@phosphor-icons/react'
import Reveal from './Reveal'

const domains = [
  { href: '#sre', name: 'Agentic SRE', detail: 'Investigate incidents. Prepare a response.' },
  {
    href: '#engineering',
    name: 'Software engineering',
    detail: 'Implement changes. Verify the results.',
  },
  {
    href: '#fintech',
    name: 'Fintech applied AI',
    detail: 'Investigate exceptions. Review the evidence.',
  },
  {
    href: '#ai-security',
    name: 'AI security & cybersecurity',
    detail: 'Secure AI systems. Support security operations.',
  },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="section-container">
        <div className="hero-layout">
          <Reveal className="hero-content">
            <span className="eyebrow">Enterprise AI & agentic systems</span>
            <h1>
              Enterprise AI.
              <br />
              Built for
              <br />
              <span className="hero-title-secondary">real operations.</span>
            </h1>
            <div className="hero-actions">
              <a href="#services" className="button">
                Explore our offerings <ArrowUpRight size={20} />
              </a>
              <a href="#contact" className="text-link">
                Talk to our team <ArrowRight size={19} />
              </a>
            </div>
          </Reveal>
          <Reveal className="hero-context" delay={0.1}>
            <h2>
              Intelligence within
              <br />
              your enterprise.
            </h2>
            <p className="hero-description">
              We build AI systems and intelligent agents around your business context, existing
              systems, and operational workflows.
            </p>
            <div className="hero-focus-list">
              {domains.map((domain) => (
                <a key={domain.href} href={domain.href}>
                  <div>
                    <strong>{domain.name}</strong>
                    <span>{domain.detail}</span>
                  </div>
                  <ArrowUpRight size={21} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="hero-principles">
          <a href="#why-us">
            <Check size={18} /> Enterprise context
          </a>
          <a href="#why-us">
            <Check size={18} /> Governed actions
          </a>
          <a href="#why-us">
            <Check size={18} /> Human oversight
          </a>
        </div>
      </div>
    </section>
  )
}
