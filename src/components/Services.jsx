import { ArrowUpRight } from '@phosphor-icons/react'
import { offerings } from '../data/offerings'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="section offerings-section">
      <div className="section-container">
        <Reveal className="section-heading split-heading">
          <div>
            <span className="eyebrow">01 / OUR EXPERTISE</span>
            <h2>
              Enterprise intelligence.
              <br />
              <span className="muted-heading">Applied with purpose.</span>
            </h2>
          </div>
          <p>
            We connect enterprise AI foundations with the operational workflows that create value —
            built around your systems, your teams, and measurable outcomes.
          </p>
        </Reveal>
        <div className="offerings-list">
          {offerings.map((offering) => (
            <Reveal key={offering.id}>
              <article id={offering.id} className="offering-row">
                <span className="offering-number">{offering.number}</span>
                <div className="offering-title">
                  <span>{offering.category}</span>
                  <h3>{offering.title}</h3>
                </div>
                <div className="offering-description">
                  <p>{offering.description}</p>
                  <div className="offering-features">
                    {offering.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                </div>
                <a
                  className="offering-explore"
                  href={offering.id === 'enterprise' ? '#why-us' : `#use-cases?${offering.id}`}
                  aria-label={`Explore ${offering.title}`}
                >
                  <ArrowUpRight size={24} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
