# Softmatrices Enterprise AI — UX research and implemented design

Research date: 7 November 2026.

## Scope

This is desk research, a reference-site review, and a heuristic assessment of the current website. It does not claim customer interviews, conversion experiments, or usability sessions with enterprise buyers. The recommendations incorporate the owner's direct feedback on legibility, inappropriate imagery, decorative AI styling, and unnecessary theme controls.

## Audience and decisions to support

The working audience model is enterprise technology leaders, engineering and SRE managers, financial operations leaders, and security leaders. Visitors need to determine:

1. Does Softmatrices address my operational problem?
2. What does each offering actually include?
3. How do agents interact with our systems and human decision-makers?
4. How will data access, AI risk, and production actions be controlled?
5. What is the practical path from a use case to production?
6. How do I begin a useful conversation?

These are design assumptions to validate with actual prospects, not measured audience findings.

## Source findings and design decisions

| Source reviewed | Relevant finding or observation | Applied decision |
| --- | --- | --- |
| [NN/g: Legibility, Readability, and Comprehension](https://www.nngroup.com/articles/legibility-readability-comprehension/) | Readable content requires an adequately sized typeface, contrast, a simple background, and understandable writing. | Main reading text is 18px. Controls and detailed workflow text are 16px. Secondary labels are at least 14px. Paragraphs use plain language and solid backgrounds. |
| [IBM Carbon: Typography style strategies](https://www.carbondesignsystem.com/building-blocks/foundations/typography/style-strategies) | IBM distinguishes compact product typography from larger editorial typography for readers exploring a marketing website. | The website uses a strong editorial headline scale and generous reading space. It does not borrow tiny dashboard text for its marketing content. |
| [IBM watsonx](https://www.ibm.com/products/watsonx) | The reviewed page organizes AI around specific capabilities, enterprise data, assistants and agents, and governance. | Enterprise context, agent workflows, and control are explained as separate capabilities. Visitors can discover an offering without decoding a decorative AI graphic. |
| [Thoughtworks Enterprise AI](https://www.thoughtworks.com/en-in/what-we-do/enterprise-ai) | The reviewed service positioning connects enterprise AI with operational delivery, modernization, agent governance, and the transition to production. | Each offering describes the work it supports. A four-stage engagement explains discovery, implementation, evaluation, and operations. No customer results or certifications are invented. |
| [W3C: Contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | Normal text requires at least 4.5:1 contrast; large text requires at least 3:1. | High-contrast navy/white sections and darker secondary text are checked with automated accessibility analysis. |
| [W3C: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) | Content should reflow at an equivalent width of 320 CSS pixels without losing information or requiring horizontal reading scroll. | Layouts stack on mobile; the offering list and workflow tabs adapt rather than shrinking their text. |
| [OWASP GenAI Security: LLM risks](https://genai.owasp.org/llm-top-10/) | AI applications introduce risks including prompt injection, sensitive-information disclosure, and excessive agent permissions. | AI Security covers threat modeling, application-level testing, data boundaries, agent authorization, and validation of controls. |
| [Microsoft Security Copilot application card](https://learn.microsoft.com/en-us/copilot/security/responsible-ai-overview-security-copilot) | AI-assisted security operations can support triage, evidence correlation, and investigation while operating through configured access controls and human oversight. | AI-powered Cybersecurity covers analyst assistance, investigation, and response preparation. Consequential response actions remain subject to analyst authorization. |

## Proposed and implemented information architecture

- **Header:** company identity, offerings, use cases, delivery approach, company information, and a clear contact action.
- **Hero:** immediate Enterprise AI positioning, a concise account of the work supported, direct links to relevant domains, and a short statement of enterprise controls.
- **Offerings:** six readable rows covering Enterprise AI foundations, Agentic SRE, agentic software engineering, fintech applied AI, AI Security, and AI-powered Cybersecurity.
- **AI in practice:** five selectable examples, with task, supporting capabilities, agent workflow, human checkpoint, and the measures an engagement would evaluate.
- **Enterprise controls:** approved context, data and tool permissions, evaluation, and observability.
- **Delivery approach:** discovery, agent-system design, evidence-based evaluation, and production operations.
- **Company:** implementation focus and working relationship.
- **Enquiry:** short, labeled form with an offering selector, use-case context, direct contact details, and clear submission behavior.

The security offerings have different purposes: **AI Security protects AI systems**, while **AI-powered Cybersecurity applies AI to security operations**.

## Visual and interaction specification

- One consistent style; no day/night control or stored theme preference.
- Light editorial content sections with a navy hero and control section.
- Retain Softmatrices' existing identity and logo.
- Inter throughout; moderate heading weight; a deliberate hierarchy between headline, section headings, reading text, and labels.
- Desktop headline approximately 80px, scaling to approximately 40–53px on small screens.
- Reading text 18px, detailed text and controls 16px, supporting labels 14px.
- Desktop content container up to 1320px with comfortable margins; one-column reading on mobile.
- Paragraph line-height approximately 1.7–1.8.
- Structured offering rows in place of repeated generic service cards.
- Technical workflow visuals only where they explain a specific operational task.
- Content appears immediately. No opacity reveal delays that can make text look unavailable.
- Keyboard-operable navigation and tabs, visible focus states, labeled fields, and a skip link.
- Buttons describe the next action, including whether an enquiry opens an email draft.
- Examples are explicitly illustrative. Measures are evaluation targets, not asserted customer results.

## Validation and next research step

Implementation checks cover build and lint, keyboard navigation, responsive layouts, deep links, text contrast, enquiry validation, and mocked service success/failure. This is implementation verification rather than proof of commercial effectiveness.

A useful subsequent validation is a short task-based review with representative prospects: find the relevant service, explain how an example preserves human control, identify the difference between the two security offerings, and start an enquiry. Measure completion, comprehension, and points of hesitation before making conversion claims.
