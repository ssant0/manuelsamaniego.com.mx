# 🌐 Manuel Samaniego — Portfolio

> Personal portfolio website showcasing projects, skills, and professional profile. Built as a blazing-fast static site targeting SME clients.

[![Astro](https://img.shields.io/badge/Astro-6.x-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed_on-Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

**Live site: [www.manuelsamaniego.com.mx](https://www.manuelsamaniego.com.mx)**

---

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Adding Content](#adding-content)
- [About](#about)
- [Contact](#contact)

---

## Description

A personal portfolio built with Astro 6 and Tailwind CSS 4, deployed as a fully static site on Cloudflare Pages. It features smooth GSAP scroll-triggered animations, auto-generated project detail pages, a Linktree-style links page, and a LFPDPPP-compliant privacy notice.

---

## Tech Stack

- **Framework:** [Astro 6](https://astro.build/) — static site generation (SSG), zero JS by default
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) — via `@tailwindcss/vite` plugin
- **Animations:** [GSAP 3](https://gsap.com/) — scroll-triggered and on-load animations
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Image Optimization:** [Sharp](https://sharp.pixelplumbing.com/) — automatic WebP conversion
- **Sitemap:** [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

---

## Prerequisites

| Tool | Version |
|---|---|
| Node.js | `>= 20.x` |
| pnpm | `>= 9.x` |

---

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ssant0/portfolio.git
    cd portfolio
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

3. **Start the development server:**

    ```bash
    pnpm dev
    ```

Open [http://localhost:4321](http://localhost:4321) in your browser.

> [!NOTE]
> The dev server starts with `--host`, making it accessible from other devices on your local network.

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server (accessible on network) |
| `pnpm build` | Build for production → `dist/` |
| `pnpm preview` | Preview the production build locally |

---

## Project Structure

```
src/
  layouts/       # Layout.astro — HTML shell, fonts, GA4, footer
  pages/         # index, projects/[project], 404, aviso-de-privacidad, links
  views/
    home/
      sections/  # Intro, RecentProjects, Technologies (full-page sections)
      components/ # ProjectCard
    shared/      # NavBar, Contact, Footer
  data/          # allProjects.ts, technologies.ts, socialLinks.ts
  styles/        # global.css
  types/         # Project.ts
public/
  css/           # fonts.css
```

---

## Adding Content

### New project

Add an entry to `src/data/allProjects.ts`:

```ts
// src/data/allProjects.ts
import myImage from "../assets/img/my-project.png";

export const allProjects = [
  {
    title: "Project Name",        // generates the URL slug automatically
    shortDescription: "...",
    longDescription: "...",
    image: myImage,               // Astro converts to WebP on build
    liveLink: "https://...",
    technologies: ["Astro", "TypeScript"],
    keywords: ["portfolio", "web"],
  },
];
```

### New technology

Add an entry to `src/data/technologies.ts` with a `name` and inline SVG `icon`.

---

## About

I'm **Manuel Samaniego**, a Web Developer passionate about automation. I've built 5 internal systems dedicated to automating my own workflows and responsibilities.

**Technologies I work with:**

- Java & Spring Boot
- Angular
- Astro & TypeScript
- PostgreSQL

---

## Contact

- **LinkedIn:** [Manuel Samaniego](https://www.linkedin.com/in/manuel-samaniego/)
- **Instagram:** [@ssamanieg0\_](https://www.instagram.com/ssamanieg0_/)
- **Email:** [manuel.s@labstudiomedia.com](mailto:manuel.s@labstudiomedia.com)