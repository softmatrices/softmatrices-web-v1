import { ArrowRight } from '@phosphor-icons/react'
import Reveal from './Reveal'

const steps = [
  {
    title: 'Find the right problem',
    description: 'Map the workflow, assess data readiness, and define an outcome worth pursuing.',
    deliverable: 'Use case & success criteria',
  },
  {
    title: 'Design the agent system',
    description:
      'Connect context and tools. Define agent roles, permissions, and human checkpoints.',
    deliverable: 'Architecture & working pilot',
  },
  {
    title: 'Prove it with evidence',
    description:
      'Evaluate representative tasks, adversarial cases, and integration behavior with your team.',
    deliverable: 'Evaluation & release criteria',
  },
  {
    title: 'Operate and improve',
    description:
      'Roll out with observability, monitor outcomes, and refine the system as your business evolves.',
    deliverable: 'Production rollout & feedback loop',
  },
]

export default function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="section-container">
        <Reveal className="section-heading split-heading">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2>
              A clear path from
              <br />
              <span className="muted-heading">use case to production.</span>
            </h2>
          </div>
          <p>
            Start with the business problem. Build with your people. Earn confidence through
            evidence, then scale what works.
          </p>
        </Reveal>
        <div className="process-grid">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06} className="process-step">
              <div className="process-number">
                <span>0{index + 1}</span>
                <ArrowRight size={20} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="process-deliverable">
                <small>THE OUTPUT</small>
                <span>{step.deliverable}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
