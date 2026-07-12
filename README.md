# Naveen V — Portfolio

A dark, glassmorphism-styled personal portfolio built with React 19, Vite, and Tailwind CSS v4. Showcases skills, experience, and projects — including a full case study page for the flagship project, AI Smart News Hub.

**Live Demo:** _add your deployed URL here_
**GitHub Repository:** _add your repo URL here_

---

## Features

- Dark futuristic theme with glassmorphism cards and a blue/cyan accent system
- Animated, pointer-reactive network mesh background in the hero
- Sections: Hero, About, Skills, Education, Experience, Certifications, Projects, Resume, Contact
- Dedicated `/projects/ai-smart-news-hub` case study page (overview, features, screenshot gallery with a built-in lightbox, tech stack, architecture diagram, challenges, learnings, roadmap, stats)
- Contact form with client-side validation and EmailJS email delivery
- Route-based code splitting (case study and 404 pages load on demand)
- Per-page SEO via `react-helmet-async` (titles, meta tags, Open Graph, Twitter Card, canonical URLs), plus `robots.txt` and `sitemap.xml`
- Error boundary and a custom 404 page
- Fully responsive, keyboard-accessible, and respects `prefers-reduced-motion`

## Tech Stack

- **React 19** + **Vite**
- **Tailwind CSS v4** (via `@tailwindcss/vite`, token-based theme)
- **React Router v7**
- **Framer Motion** — scroll reveals, hover states, page transitions
- **Lucide React** — icon set (brand icons for GitHub/LinkedIn are hand-authored SVGs, since Lucide no longer ships logo glyphs)
- **@emailjs/browser** — contact form delivery
- **react-helmet-async** — per-route SEO tags

## Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── site.webmanifest
│   ├── robots.txt
│   ├── sitemap.xml
│   └── resume/
│       └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx, Hero.jsx, About.jsx, Skills.jsx, Education.jsx,
│   │   │   Experience.jsx, Certifications.jsx  (top-level sections)
│   │   ├── SectionHeading.jsx, SkillCard.jsx, BrandIcons.jsx,
│   │   │   NetworkMesh.jsx, SEO.jsx, ErrorBoundary.jsx, PageLoader.jsx
│   │   ├── Projects/          → home page Projects section
│   │   │   ├── Projects.jsx, FeaturedProject.jsx, ProjectCard.jsx,
│   │   │   └── TechBadge.jsx, ProjectButton.jsx
│   │   ├── projects/          → case study page sections (11 components)
│   │   │   ├── ProjectHero.jsx, ProjectOverview.jsx, ProjectFeatures.jsx,
│   │   │   ├── ScreenshotGallery.jsx, TechStack.jsx, Architecture.jsx,
│   │   │   ├── Challenges.jsx, Learnings.jsx, FutureRoadmap.jsx,
│   │   │   └── ProjectStats.jsx, ProjectCTA.jsx
│   │   ├── Resume/Resume.jsx
│   │   ├── Contact/Contact.jsx
│   │   └── Footer/Footer.jsx
│   ├── data/                  → all copy/content, separate from JSX
│   │   ├── skills.js, education.js, experience.js, certifications.js,
│   │   └── projects.js, caseStudy.js, contact.js
│   ├── hooks/
│   │   └── useContactForm.js  → validation + EmailJS submission
│   ├── pages/
│   │   ├── Home.jsx, ProjectDetails.jsx, NotFound.jsx
│   ├── App.jsx                → routes, lazy loading, error boundary
│   ├── main.jsx                → app entry, providers
│   └── index.css              → Tailwind v4 theme tokens + base styles
├── vercel.json                → SPA rewrite config
├── .env.example
└── package.json
```

## Installation

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials (from https://dashboard.emailjs.com/):

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

`.env` is gitignored — never commit real keys.

## Available Scripts

| Command           | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Start the local dev server with HMR       |
| `npm run build`    | Type-check-free production build to `dist/` |
| `npm run preview`  | Serve the production build locally        |
| `npm run lint`     | Run oxlint across the codebase            |

## Before Going Live

A few placeholders still need your real content — search the codebase for these or check:

- **`public/resume/resume.pdf`** — replace with your actual resume
- **`src/data/contact.js`** — real email, phone, GitHub, and LinkedIn URLs
- **`src/data/certifications.js`** — real certification names, issuers, years
- **`src/data/projects.js`** — real repo/demo URLs for the "Other Projects" grid; swap out any placeholder projects you haven't actually built
- **`src/data/caseStudy.js`** — swap `image: null` placeholders for real screenshots once available
- **`src/components/SEO.jsx`** — update `SITE_URL` to your real deployed domain once known
- **`public/sitemap.xml`, `public/robots.txt`, `index.html`** — update the domain in canonical/OG URLs to match
- An **`og-image.png`** (1200×630) in `public/` for social share previews

## Deployment Guide (Vercel)

1. Push this repository to GitHub.
2. Import the repo in the [Vercel dashboard](https://vercel.com/new).
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build` — Output directory: `dist`.
5. Add the three `VITE_EMAILJS_*` environment variables in Vercel's Project Settings → Environment Variables.
6. Deploy. `vercel.json` is already configured to rewrite all routes to `index.html` so client-side routes like `/projects/ai-smart-news-hub` work on direct load and refresh.

```bash
# Build locally to sanity-check before pushing
npm run build
npm run preview

# Deploy via Vercel CLI (optional alternative to Git integration)
npx vercel --prod
```

## Screenshots

_Add screenshots of the live site here once deployed — hero, projects grid, and the case study page make good choices._

## License

This project is personal portfolio code. Feel free to reference the structure, but please don't reuse the content (name, project descriptions, resume) as your own.
