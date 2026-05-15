# SELEM_OS — Cybersecurity Command Interface Portfolio

Production-grade Next.js portfolio for **Selem Girma** designed as a live
capability dashboard rather than a portfolio template.

> Concept: *“The developer is a system, and the portfolio is a live security
> dashboard of their capabilities.”*

## Stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS v4** (PostCSS plugin)
- `next-themes` for dark / light theme
- `lucide-react` for icons
- Custom Canvas particle network (no Three.js — fast, accessible)

## Run locally

```bash
cd ~/selem-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Customize

All copy is data-driven from `src/content/`:

| File | What it controls |
|------|------------------|
| `profile.ts` | Name, role, tagline, terminal lines, social links, resume path |
| `projects.ts` | Flagship + secondary modules with stack, threat, depth, links |
| `skills.ts` | Capability map (grouped, hover/tap to explore) |
| `experience.ts` | Operation logs + education foundation node |
| `achievements.ts` | Event log + certifications |

Drop your real resume at `public/selem-girma-resume.pdf` and the hero CTA
points to it automatically.

## Sections (4-layer architecture)

| Layer | Section | Anchor |
|-------|---------|--------|
| L1 — Overview | Hero with typing terminal + particle network | `#overview` |
| L2 — Core Evidence | Featured + secondary projects with filtering | `#modules` |
| L3 — System Modules | Skills capability map + Operation logs + Education | `#capabilities`, `#logs`, `#education` |
| L4 — Access + Logs | Event log + Certifications + Contact gateway | `#events`, `#access` |

## Features included

- Animated hero (network background + scan line + status pulse)
- Hacker-style terminal with cycling typing animation
- Project filtering by category (Security / AI / Full-stack / Platform)
- Interactive skills capability map
- Operation log timeline + foundation education panel
- Event log + certifications status
- Contact form (opens secure mail client) + copy-email
- Resume download CTA
- Dark / light theme toggle (defaults dark)
- Sticky nav with section spy + mobile menu
- Mobile-first responsive design
- Fully respects `prefers-reduced-motion`

## Design system tokens

Defined as CSS custom properties in `src/app/globals.css`:

- Surfaces: `--bg-0` … `--bg-3`
- Text: `--text-0`, `--text-1`, `--text-2`
- Accent (single family, cyan): `--accent`, `--accent-2`, `--accent-soft`
- States: `--ok`, `--warn`, `--danger`
- Glass: `--glass`

Switch to a green accent system by changing `--accent` and `--accent-grid` in
the `:root` block.

## Deploy

Recommended: **Vercel** — zero-config deploy.

```bash
npx vercel
```
