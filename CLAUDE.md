# Portfolio — Manuel Samaniego

Astro 6 + Tailwind CSS 4 static site. Personal portfolio targeting SME clients.

## Commands

```bash
npm run dev      # Dev server (accessible on network via --host)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

## Architecture

```
src/
  layouts/       # Layout.astro — html shell, fonts, animate.css, GA4, footer
  pages/         # index.astro, projects/[project].astro, 404.astro, aviso-de-privacidad.astro, links.astro
  views/
    home/
      sections/  # Intro, RecentProjects, Technologies (full-page sections)
      components/ # ProjectCard
    shared/      # NavBar, Contact, Footer
  data/          # allProjects.ts, technologies.ts, socialLinks.ts
  scripts/       # animate-on-view.ts (Intersection Observer)
  styles/        # global.css
  types/         # Project.ts
public/
  css/           # fonts.css, animate_config.css
```

## Design System

- Brand teal: `#2d5d54` — hover: `#3e8b7d`
- Background: `linear-gradient(170deg, #daeee9 0%, #f1f2f5 14%) fixed`
- Fonts: `.codec-pro` (headings) / `.rubik` (body)
- Animations: Animate.css 4.1.1 + `animate-on-view` class + `data-aov-animation` attribute

### Reusable UI patterns

```html
<!-- Eyebrow label (above every section h2) -->
<p class="text-xs font-semibold tracking-widest text-[#2d5d54] uppercase mb-2
          animate__animated animate__fast animate-on-view"
   data-aov-animation="animate__fadeInUp">— LABEL</p>

<!-- Tech pill -->
<span class="bg-[#2d5d54]/8 text-[#2d5d54] text-xs px-2 py-0.5 rounded-full font-medium">
  Tech
</span>
```

## Adding Content

**New project** — add entry to `src/data/allProjects.ts`:
- Required: `title`, `shortDescription`, `longDescription`, `image`, `liveLink`, `technologies[]`, `keywords[]`
- Image: import from `src/assets/img/` (Astro optimizes to WebP)
- URL slug is auto-generated from `title` (spaces/dots → hyphens, lowercase)

**New technology** — add entry to `src/data/technologies.ts` with `name` and inline SVG `icon`.

## Analytics

Google Analytics 4 (`G-G40F72XVS0`) is injected as the first element in `<head>` inside `Layout.astro`. Active since 2026-03-23.

## Legal

`/aviso-de-privacidad` — LFPDPPP-compliant privacy notice (persona física, Los Mochis Sinaloa). Update `lastUpdated` + sections II, III, V, VII whenever GA config or third-party services change.

## Pages

- `/` — Home (Intro, RecentProjects, Technologies, Contact)
- `/projects/[slug]` — Project detail (auto-generated from `allProjects.ts`)
- `/links` — Linktree-style page: avatar, badge, stacked link cards (Portfolio, LinkedIn, GitHub, Instagram, Email). No NavBar, uses Layout.astro. Link cards: primary teal for portfolio, glass `bg-white/80 backdrop-blur` for social links.
- `/aviso-de-privacidad` — LFPDPPP privacy notice
- `/404` — Not found

## Gotchas

- **Astro `Image` + `inferSize`** injects inline `width`/`height`, overriding CSS height. Fix: `relative` on wrapper + `absolute inset-0 w-full h-full object-cover` on the image.
- **Hero animation delays**: kept at 1s / 2s / 3s — don't increase, CTAs must appear fast.
- **`prefers-reduced-motion`** is handled in `Layout.astro` `<style>` block (not global.css).
- **`animate-on-view`** only triggers once per element (no re-trigger on scroll up).
- Scroll restoration is disabled on page load (`history.scrollRestoration = 'manual'`).
- **Footer nav smooth scroll** — links use `data-scroll="<section-id>"` + a script in `Footer.astro`. "Inicio" scrolls to `top: 0`; others use `offsetTop`. The `href` fallback handles cross-page navigation (e.g. from `/aviso-de-privacidad`).
