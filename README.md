# Softmatrices — Enterprise AI

The Softmatrices marketing website, focused on enterprise AI foundations and agentic AI for SRE, software engineering, financial services, AI security, and AI-powered cybersecurity. Built with React 19, Vite, Tailwind CSS, and Phosphor icons.

## Local development

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

## Validation and build

```sh
npm run lint
npm run build
npm run preview
```

Vite writes the production site to `dist/`. The existing Vercel configuration supports deployment.

## Content and styling

AI offerings and illustrative workflows live in `src/data/offerings.js`. Each page section is a component in `src/components/`. Shared styling and color variables live in `src/index.css`; hero and offering layouts are in `src/styles/`.

The site uses one consistent visual style: light editorial sections and a typography-led navy hero. Body text is 18px, with 16px controls and 14px secondary labels. Content renders immediately, without reveal animations. Use-case tabs support arrow keys, Home, and End and direct links such as `#use-cases?sre`, `#use-cases?ai-security`, and `#use-cases?cybersecurity`. The design rationale and source research are in `docs/UX-DESIGN.md`.

## Enquiry form

Set `VITE_WEB3FORMS_ACCESS_KEY` in your local `.env` or deployment environment to enable the existing Web3Forms submission integration. Restart development or rebuild after changing this value. See `.env.example` for the configuration key.

When the key is absent, submitting the form prepares a mailto draft addressed to `info@softmatrices.com`. Visitors send it using their email app. The site only displays a sent confirmation after a successful response from Web3Forms. Submission errors preserve the enquiry and offer a direct email fallback.

## Search and social metadata

`index.html` contains the canonical URL, page description, social metadata, and organization/service structured data. The social preview is `public/images/og-image.png`. Public sitemap and robots files are in `public/`.

