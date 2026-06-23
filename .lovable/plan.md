# Besmala Bendif — AI Engineer Portfolio

A premium, dark-themed, single-page portfolio with smooth scrolling between sections, glassmorphism cards, and subtle animated background. All visual choices follow the brief verbatim (navy/charcoal base, electric blue/cyan/purple accents).

## Design system (src/styles.css)

- Base: `#0B1120` background, `#111827` surface, near-white foreground
- Accents: electric blue `#3B82F6`, cyan `#06B6D4`, purple `#8B5CF6`
- Gradient tokens: `--gradient-primary` (blue→purple), `--gradient-glow` (cyan→blue radial)
- Glass token: `bg-white/5 backdrop-blur-xl border border-white/10`
- Glow shadow token for hover states
- Typography: Space Grotesk (display) + Inter (body), loaded via `<link>` in `__root.tsx`
- Add `dark` class to `<html>` so shadcn dark tokens apply

## Page structure (single route: `/`)

Sticky top nav with smooth-scroll anchors + active section highlighting via IntersectionObserver:

1. **Hero** — animated particle/gradient canvas background, avatar placeholder (generated), name, title, bio, "View Projects" + "Download CV" buttons
2. **About** — glass card grid: intro, academic background, research interests, career goals
3. **Skills** — 5 categorized glass cards (AI/ML, Research, Web, Mobile, Databases) rendered as animated badges
4. **Featured Projects** — 4 project cards (OCT diagnosis, RetinaAI, Nathal Manuscript, Flutter Tracker) with generated cover images, tech chips, GitHub + Live Demo buttons
5. **Research** — featured thesis card with Abstract / Highlights / Methodology subsections + Download Thesis button
6. **Experience Timeline** — vertical timeline (education, research, achievements, professional)
7. **Certifications** — hover-lift glass cards grid
8. **Contact** — left: email/LinkedIn/GitHub links; right: contact form (visual only, no backend)
9. **Footer** — minimal, social icons, copyright
10. **Back-to-top** button, fixed bottom-right, appears after scroll

## Files

- `src/routes/index.tsx` — head meta (title, description, OG), composes all sections
- `src/routes/__root.tsx` — add Google Fonts `<link>`, set `<html className="dark">`
- `src/styles.css` — extend tokens, add gradient/glass/glow utilities, font families
- `src/components/portfolio/` — `Navbar`, `Hero`, `ParticleBackground`, `About`, `Skills`, `Projects`, `Research`, `Timeline`, `Certifications`, `Contact`, `Footer`, `BackToTop`
- `src/assets/` — generated hero avatar + 4 project covers

## Animations & interactions

- Section reveal on scroll via IntersectionObserver + Tailwind `animate-fade-in`
- Hover: scale + glow on cards/buttons
- Hero: lightweight canvas particle field (no heavy libs)
- Smooth scroll via CSS `scroll-behavior: smooth`

## Technical notes

- Pure frontend; contact form is presentational (toast on submit). No backend/Cloud needed unless requested.
- "Download CV" and "Download Thesis" link to `/cv.pdf` and `/thesis.pdf` placeholders in `public/` (empty placeholders, user replaces).
- GitHub/LinkedIn URLs left as `#` placeholders for the user to fill.
- Responsive: grid collapses to single column on mobile; nav becomes hamburger.
