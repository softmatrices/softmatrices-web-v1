export const offerings = [
  {
    id: 'enterprise',
    number: '01',
    title: 'Enterprise AI foundations',
    shortTitle: 'Enterprise AI',
    category: 'THE FOUNDATION',
    description:
      'Connect your knowledge, models, and business systems in a secure foundation for AI that works across the enterprise.',
    features: ['Knowledge & retrieval', 'Agent orchestration', 'AI governance'],
  },
  {
    id: 'sre',
    number: '02',
    title: 'Agentic AI for SRE',
    shortTitle: 'Agentic SRE',
    category: 'SITE RELIABILITY',
    description:
      'Turn operational signals into context, incident investigations, and approval-led remediation for your production systems.',
    features: ['Incident intelligence', 'Runbook automation', 'Observability'],
  },
  {
    id: 'engineering',
    number: '03',
    title: 'Agentic software engineering',
    shortTitle: 'AI for engineering',
    category: 'SOFTWARE ENGINEERING',
    description:
      'Bring coordinated agents into your engineering workflow, from understanding a codebase to preparing tested, reviewable changes.',
    features: ['Code intelligence', 'Agentic delivery', 'Quality & review'],
  },
  {
    id: 'fintech',
    number: '04',
    title: 'Fintech applied AI',
    shortTitle: 'Fintech applied AI',
    category: 'FINANCIAL SERVICES',
    description:
      'Apply AI to financial operations, risk investigation, and document workflows with traceable evidence and expert review.',
    features: ['Risk & fraud intelligence', 'Financial operations', 'Document AI'],
  },
  {
    id: 'ai-security',
    number: '05',
    title: 'AI Security',
    shortTitle: 'AI Security',
    category: 'SECURING AI SYSTEMS',
    description:
      'Assess and protect AI applications, agents, and data pipelines against prompt injection, sensitive data exposure, and unauthorized tool use.',
    features: ['AI threat modeling', 'Agent access controls', 'AI security testing'],
  },
  {
    id: 'cybersecurity',
    number: '06',
    title: 'AI-powered Cybersecurity',
    shortTitle: 'AI-powered Cybersecurity',
    category: 'AI FOR SECURITY OPERATIONS',
    description:
      'Support security analysts with AI-assisted alert triage, threat investigation, and evidence-led response across existing security tools.',
    features: ['SOC assistance', 'Threat investigation', 'Response orchestration'],
  },
]

export const useCases = [
  {
    id: 'sre',
    label: 'Site reliability',
    eyebrow: 'AGENTIC AI FOR SRE',
    title: 'Support incident investigation and response.',
    description:
      'Give your reliability team an agent that connects the dots across alerts, logs, traces, and recent changes — then helps them act with confidence.',
    capabilities: [
      [
        'Investigate with context',
        'Correlate telemetry and deployment history to build an evidence-backed incident timeline.',
      ],
      [
        'Prepare the next action',
        'Recommend a runbook, draft a remediation, and route production changes for approval.',
      ],
      [
        'Learn from each incident',
        'Draft postmortems and improve the knowledge available to the next investigation.',
      ],
    ],
    task: 'Investigate elevated payment API latency',
    steps: [
      { name: 'Observe', detail: 'Correlate alerts, traces & recent deploys', icon: 'observe' },
      { name: 'Reason', detail: 'Build a hypothesis with linked evidence', icon: 'reason' },
      { name: 'Prepare', detail: 'Recommend a rollback from the runbook', icon: 'prepare' },
      { name: 'Approve', detail: 'SRE reviews before production changes', icon: 'approve' },
    ],
    result: 'An investigation your on-call engineer can act on.',
    measure: 'Measure: time to triage · MTTR · repeat incidents',
  },
  {
    id: 'engineering',
    label: 'Software engineering',
    eyebrow: 'AGENTIC AI FOR SOFTWARE ENGINEERING',
    title: 'Coordinate the software delivery workflow.',
    description:
      'Move beyond isolated code suggestions. Coordinate agents around your repositories, delivery standards, and review process to help engineers ship with context.',
    capabilities: [
      [
        'Understand before changing',
        'Map relevant code, dependencies, and requirements into a focused implementation plan.',
      ],
      [
        'Build and verify',
        'Prepare code changes, run targeted checks, and surface test results alongside the diff.',
      ],
      [
        'Keep engineers in control',
        'Submit a reviewable pull request and let your team own approval and release decisions.',
      ],
    ],
    task: 'Implement a new payment validation rule',
    steps: [
      { name: 'Understand', detail: 'Read requirements & repository context', icon: 'observe' },
      { name: 'Implement', detail: 'Prepare a scoped change and tests', icon: 'reason' },
      { name: 'Verify', detail: 'Run checks and attach the results', icon: 'prepare' },
      { name: 'Review', detail: 'Engineer reviews the pull request', icon: 'approve' },
    ],
    result: 'A tested change, ready for your team to review.',
    measure: 'Measure: cycle time · review effort · escaped defects',
  },
  {
    id: 'fintech',
    label: 'Fintech',
    eyebrow: 'FINTECH APPLIED AI',
    title: 'Investigate financial exceptions with evidence.',
    description:
      'Help financial teams make sense of complex records, investigate exceptions, and prepare decisions with the evidence and controls their work demands.',
    capabilities: [
      [
        'Turn documents into context',
        'Extract and validate information from onboarding records, statements, and financial documents.',
      ],
      [
        'Investigate risk and exceptions',
        'Surface transaction anomalies and reconciliation breaks with supporting evidence.',
      ],
      [
        'Support expert decisions',
        'Prepare case summaries for analysts, with source references and a traceable review trail.',
      ],
    ],
    task: 'Investigate a transaction reconciliation exception',
    steps: [
      { name: 'Gather', detail: 'Retrieve permitted records & statements', icon: 'observe' },
      { name: 'Reconcile', detail: 'Match entries and isolate the exception', icon: 'reason' },
      { name: 'Explain', detail: 'Prepare a case with source references', icon: 'prepare' },
      { name: 'Review', detail: 'Financial analyst owns the decision', icon: 'approve' },
    ],
    result: 'A traceable case, ready for an informed decision.',
    measure: 'Measure: handling time · exception accuracy · review quality',
  },
  {
    id: 'ai-security',
    label: 'AI security',
    eyebrow: 'AI SECURITY',
    title: 'Protect the AI systems your enterprise relies on.',
    description:
      'Identify where AI systems could expose data or exceed their permissions. Test the application, retrieval pipeline, and agent tool boundaries together.',
    capabilities: [
      [
        'Model the AI attack surface',
        'Map trusted data, external inputs, retrieval paths, and the actions an agent is allowed to take.',
      ],
      [
        'Test the important boundaries',
        'Assess prompt-injection resistance, sensitive data exposure, and tool authorization with representative security tests.',
      ],
      [
        'Verify the controls',
        'Document findings, strengthen access and approval policies, and retest the workflow before release.',
      ],
    ],
    task: 'Assess an enterprise knowledge agent before deployment',
    steps: [
      { name: 'Map', detail: 'Identify data access and tool boundaries', icon: 'observe' },
      { name: 'Assess', detail: 'Test injection, leakage and authorization risks', icon: 'reason' },
      { name: 'Strengthen', detail: 'Prepare controls and prioritized findings', icon: 'prepare' },
      { name: 'Validate', detail: 'Security owners review and retest changes', icon: 'approve' },
    ],
    result: 'A prioritized security assessment with verified controls.',
    measure: 'Measure: test coverage · residual risk · remediation progress',
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    eyebrow: 'AI-POWERED CYBERSECURITY',
    title: 'Give security analysts a clearer path through the evidence.',
    description:
      'Connect AI-assisted analysis to your existing security operations. Help analysts triage alerts, correlate events, and prepare an evidence-led response.',
    capabilities: [
      [
        'Triage with context',
        'Enrich alerts with permitted identity, endpoint, and threat-intelligence signals from your security tools.',
      ],
      [
        'Investigate the sequence',
        'Build an incident timeline, identify affected entities, and surface evidence that supports or challenges a hypothesis.',
      ],
      [
        'Prepare an accountable response',
        'Recommend containment and follow-up actions. Keep consequential decisions with authorized security analysts.',
      ],
    ],
    task: 'Investigate a suspicious privileged sign-in',
    steps: [
      { name: 'Enrich', detail: 'Gather identity, endpoint and SIEM evidence', icon: 'observe' },
      { name: 'Investigate', detail: 'Correlate events and affected entities', icon: 'reason' },
      { name: 'Recommend', detail: 'Prepare a scoped containment plan', icon: 'prepare' },
      { name: 'Approve', detail: 'Analyst authorizes any response action', icon: 'approve' },
    ],
    result: 'An evidence-led investigation ready for analyst review.',
    measure: 'Measure: triage time · investigation quality · response readiness',
  },
]
