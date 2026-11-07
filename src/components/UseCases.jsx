import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Check,
  Eye,
  FileText,
  ShieldCheck,
} from '@phosphor-icons/react'
import { useCases } from '../data/offerings'
import Reveal from './Reveal'

const stepIcons = { observe: Eye, reason: Brain, prepare: FileText, approve: ShieldCheck }

export default function UseCases() {
  const [activeId, setActiveId] = useState(() => {
    const [section, id] = window.location.hash.slice(1).split('?')
    return section === 'use-cases' && useCases.some((item) => item.id === id) ? id : 'sre'
  })
  const tabRefs = useRef([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const syncHash = () => {
      const [section, id] = window.location.hash.slice(1).split('?')
      if (section === 'use-cases' && useCases.some((item) => item.id === id)) {
        setActiveId(id)
        sectionRef.current?.scrollIntoView({ behavior: 'instant' })
      }
    }
    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  const selectCase = (id) => {
    setActiveId(id)
    window.history.replaceState(null, '', `#use-cases?${id}`)
  }

  const navigateTabs = (event, index) => {
    let next
    if (event.key === 'ArrowRight') next = (index + 1) % useCases.length
    if (event.key === 'ArrowLeft') next = (index - 1 + useCases.length) % useCases.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = useCases.length - 1
    if (next === undefined) return
    event.preventDefault()
    selectCase(useCases[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="use-cases" ref={sectionRef} className="section use-cases-section">
      <div className="section-container">
        <Reveal className="section-heading">
          <span className="eyebrow">AGENTIC AI IN ACTION</span>
          <h2>
            Agentic AI in practice.
            <br />
            <span className="muted-heading">Workflows for your teams.</span>
          </h2>
          <p>Explore what an agent-enabled workflow could look like for your team.</p>
        </Reveal>
        <div className="use-case-tabs" role="tablist" aria-label="AI use cases">
          {useCases.map((item, index) => (
            <button
              key={item.id}
              ref={(element) => {
                tabRefs.current[index] = element
              }}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={activeId === item.id}
              aria-controls={`panel-${item.id}`}
              tabIndex={activeId === item.id ? 0 : -1}
              onClick={() => selectCase(item.id)}
              onKeyDown={(event) => navigateTabs(event, index)}
            >
              <span>0{index + 1}</span>
              {item.label}
              <ArrowUpRight size={17} />
            </button>
          ))}
        </div>
        {useCases.map((item) => (
          <div
            key={item.id}
            id={`panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${item.id}`}
            hidden={activeId !== item.id}
            tabIndex={0}
          >
            {activeId === item.id && (
              <div className="use-case-layout">
                <div className="use-case-content">
                  <span className="eyebrow">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="capability-list">
                    {item.capabilities.map(([title, description]) => (
                      <div className="capability" key={title}>
                        <span className="check-icon">
                          <Check size={14} weight="bold" />
                        </span>
                        <div>
                          <h4>{title}</h4>
                          <p>{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a className="text-link" href="#contact">
                    Discuss your use case <ArrowRight size={17} />
                  </a>
                </div>
                <div className="workflow-panel">
                  <div className="workflow-heading">
                    <span>
                      <span className="status-dot" /> ILLUSTRATIVE WORKFLOW
                    </span>
                    <span>HUMAN + AGENT</span>
                  </div>
                  <div className="workflow-task">
                    <small>THE TASK</small>
                    <h4>{item.task}</h4>
                  </div>
                  <ol className="workflow-steps">
                    {item.steps.map((step, index) => {
                      const Icon = stepIcons[step.icon]
                      return (
                        <li key={step.name}>
                          <span
                            className={`workflow-step-icon ${index === 3 ? 'approval-icon' : ''}`}
                          >
                            <Icon size={19} />
                          </span>
                          <div>
                            <h5>
                              {step.name}
                              <span>0{index + 1}</span>
                            </h5>
                            <p>{step.detail}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ol>
                  <div className="workflow-result">
                    <Check size={19} />
                    <span>{item.result}</span>
                  </div>
                  <p className="workflow-measure">{item.measure}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
