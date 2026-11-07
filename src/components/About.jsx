import { ArrowUpRight, Graph } from '@phosphor-icons/react'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container about-layout">
        <Reveal className="about-statement">
          <span className="eyebrow">ABOUT SOFTMATRICES</span>
          <h2>
            An implementation partner
            <br />
            <span className="muted-heading">for enterprise AI.</span>
          </h2>
          <div className="about-signature">
            <Graph size={30} weight="light" />
            <span>
              ENTERPRISE CONTEXT.
              <br />
              APPLIED AI EXPERTISE.
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="about-copy">
          <p className="about-lead">
            We help enterprises turn AI into a working capability — embedded in the systems and
            workflows their people use every day.
          </p>
          <p>
            Softmatrices brings together enterprise integration, applied AI, and agentic system
            design. Our focus is practical: reliable operations, better engineering workflows, and
            financial intelligence grounded in evidence.
          </p>
          <p>
            We work alongside your teams to identify the right use cases, build with your business
            context, and carry the solution from an initial pilot into a system you can operate and
            improve.
          </p>
          <a className="text-link" href="#contact">
            Meet your AI partner <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
