import { Database, Fingerprint, Gauge, ShieldCheck, ArrowUpRight } from '@phosphor-icons/react'
import Reveal from './Reveal'

const principles = [
  {
    icon: Database,
    title: 'Grounded in your enterprise',
    description:
      'Connect agents to approved knowledge and business systems, with retrieval that respects existing access boundaries.',
  },
  {
    icon: Fingerprint,
    title: 'Governed by design',
    description:
      'Define tool permissions, data handling, and approval policies before agents take action. Keep consequential decisions with people.',
  },
  {
    icon: Gauge,
    title: 'Evaluated for the real world',
    description:
      'Test against representative tasks, failure modes, and business measures. Track quality, latency, and cost as the system evolves.',
  },
  {
    icon: ShieldCheck,
    title: 'Observable from end to end',
    description:
      'Trace agent decisions, tool calls, and outcomes. Give your teams the evidence to investigate, improve, and audit AI workflows.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section foundation-section">
      <div className="section-container foundation-layout">
        <Reveal className="foundation-intro">
          <span className="eyebrow">ENTERPRISE IS THE STANDARD</span>
          <h2>
            Control and governance.
            <br />
            At every layer.
          </h2>
          <p>
            Useful AI needs a capable model, trusted context, clear boundaries, and a team that can
            understand what happened.
          </p>
          <a className="text-link" href="#process">
            How we build it <ArrowUpRight size={18} />
          </a>
          <div className="foundation-seal">
            <ShieldCheck size={34} weight="light" />
            <span>
              YOUR DATA. YOUR POLICIES.
              <br />
              <strong>YOUR CONTROL.</strong>
            </span>
          </div>
        </Reveal>
        <div className="principles-grid">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <Reveal key={principle.title} delay={index * 0.05} className="principle">
                <Icon size={27} weight="light" />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
