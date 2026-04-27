## Godwin Banda — Developer Portfolio

A premium, minimal monochrome portfolio for Godwin Banda (Full Stack Developer). Light + dark themes, animated hero, polished placeholder content, and a GitHub-powered activity section.

### Visual direction
- **Palette:** near-white `#FAFAFA` / pure white surfaces, ink `#0A0A0A` text, neutral greys for hierarchy, single subtle accent (soft indigo) used sparingly on links, focus rings, and the hero gradient.
- **Typography:** Inter for UI/body, a tighter display weight (Inter Tight or similar) for headings. Generous tracking on small caps labels, large display sizes for section intros.
- **Spacing:** strict 8px grid, wide section padding (96–160px desktop), max content width ~1200px.
- **Motion:** fade + slide on scroll (IntersectionObserver), micro hover lifts on cards, smooth theme transition. Respects `prefers-reduced-motion`.

### Site structure (separate routes for SEO)
```
/            Hero, brief about teaser, featured projects, CTA
/about       Full bio, experience timeline, philosophy
/projects    Full project grid with tech-stack filter chips
/activity    GitHub activity (recent repos + contribution feed)
/contact     Contact form + social links
```
Shared header with nav + dark mode toggle, shared minimal footer.

### Sections in detail

**Hero (home)**
- Name "Godwin Banda", role "Full Stack Developer", one-line value prop
- Animated background: subtle moving monochrome grid + slow indigo radial gradient bloom (CSS-only, GPU-friendly)
- Two CTAs: "View work" → /projects, "Get in touch" → /contact
- Small marquee of tech keywords below the fold

**About**
- Two-column layout: portrait placeholder + bio
- Stats row (years experience, projects shipped, technologies)
- Experience timeline with role, company, dates, summary

**Skills (on /about and home teaser)**
- Three groups: Frontend (React, JavaScript, HTML, CSS, Tailwind), Backend (Python, Django, REST APIs, PostgreSQL), Tools (Git, Docker, Vite, Figma, Linux)
- Clean chip/badge layout, no progress bars

**Projects**
- Card grid (3-up desktop, 2-up tablet, 1-up mobile)
- Each card: title, 2-line description, tech stack chips, live demo + repo links, hover lift with border glow
- Filter chips at top (All, React, Django, Python, JavaScript) with smooth re-layout
- 6 polished placeholder projects (e.g. "Atlas — Project management SaaS", "Lumen — Django CMS", "Pixel Ledger — React finance dashboard", etc.)

**GitHub activity (/activity)**
- Fetches public repos + recent events from `https://api.github.com/users/{username}` (no auth, client-side)
- Configurable username (placeholder: `godwinbanda`) — easy to change in one constant
- Shows: recent repos with stars/language, recent push/PR/star events
- Graceful loading skeletons + error fallback

**Contact**
- Minimal form (name, email, message) with validation, success state
- Form submission via a simple server function that logs/echoes (no email provider yet — easy to wire later)
- Social links: GitHub, LinkedIn, X, Email

**Footer**
- Name, short tagline, nav links, socials, copyright

### Dark mode
- Toggle in header, persisted to localStorage, respects system preference on first load
- Both themes carefully tuned in `styles.css` (oklch tokens already in place)

### Accessibility & performance
- Semantic landmarks, skip-to-content link, focus-visible rings, AA contrast in both themes
- `prefers-reduced-motion` disables transforms
- System fonts fallback while Inter loads, no heavy images, lazy-load below-the-fold
- Each route gets its own `head()` meta (title, description, og tags)

### Technical notes
- TanStack Start (already scaffolded) — separate route files per section
- Tailwind v4 tokens extended with subtle shadow scale and the indigo accent
- Theme provider in `__root.tsx` (class-based `dark` toggle on `<html>`)
- GitHub fetch via `useEffect` + cache in `sessionStorage` to avoid rate limits
- Contact form uses TanStack server function for submission handling
- Reusable components: `Section`, `SectionHeading`, `ProjectCard`, `SkillGroup`, `ThemeToggle`, `Reveal` (scroll-fade wrapper)

### Out of scope (can add later)
- CMS-backed blog (mentioned but heavier — leaving room; activity page covers the "live content" feel)
- Real email delivery for contact form (stub now, plug in Resend/SMTP later)
