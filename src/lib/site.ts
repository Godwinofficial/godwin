// Central place to edit personal info / content for the portfolio.
// Update values here and they propagate across the whole site.

export const SITE = {
  name: "Godwin Banda",
  role: "Full Stack Developer",
  shortBio:
    "Full stack developer crafting fast, accessible web products with React, Django, and a careful eye for detail.",
  longBio:
    "I'm Godwin — a full stack developer who enjoys turning complex problems into clean, dependable products. I work across the stack with React and modern JavaScript on the front end, and Python with Django on the back end. My focus is on shipping interfaces that feel calm and inevitable, paired with backends that are simple to reason about and easy to maintain.",
  location: "Available worldwide · Remote",
  email: "godwin@example.com",
  // Replace with the real GitHub username — drives the /activity page.
  githubUsername: "godwinbanda",
  socials: {
    github: "https://github.com/godwinbanda",
    linkedin: "https://www.linkedin.com/in/godwinbanda",
    x: "https://x.com/godwinbanda",
    email: "mailto:godwin@example.com",
  },
  stats: [
    { label: "Years building", value: "5+" },
    { label: "Projects shipped", value: "30+" },
    { label: "Stacks mastered", value: "2" },
  ],
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/activity", label: "Activity" },
  { to: "/contact", label: "Contact" },
] as const;

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "TanStack"],
  },
  {
    category: "Backend",
    items: ["Python", "Django", "Django REST", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "Docker", "Vite", "Figma", "Linux", "CI/CD", "Vitest"],
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Full Stack Developer",
    company: "Independent / Freelance",
    period: "2023 — Present",
    summary:
      "Designing and building bespoke web platforms for startups and small teams. Specialising in React front ends backed by Django APIs.",
  },
  {
    role: "Full Stack Developer",
    company: "Northwind Studio",
    period: "2021 — 2023",
    summary:
      "Led the rebuild of a multi-tenant SaaS dashboard. Migrated a legacy monolith to a Django REST + React stack, improving load times by 60%.",
  },
  {
    role: "Software Engineer",
    company: "Brightline Labs",
    period: "2019 — 2021",
    summary:
      "Shipped customer-facing features across the stack. Owned the design system and drove accessibility from AA to AAA on key flows.",
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "atlas",
    title: "Atlas",
    tagline: "Project management for small teams",
    description:
      "A focused project tracker with realtime updates, keyboard-first navigation, and a clean kanban board.",
    stack: ["React", "TypeScript", "Django", "PostgreSQL"],
    liveUrl: "https://example.com/atlas",
    repoUrl: "https://github.com/godwinbanda/atlas",
    featured: true,
  },
  {
    slug: "lumen",
    title: "Lumen",
    tagline: "Headless CMS for editorial teams",
    description:
      "A Django-powered headless CMS with a React admin, version history, and a clean publishing workflow.",
    stack: ["Django", "Python", "React", "PostgreSQL"],
    liveUrl: "https://example.com/lumen",
    repoUrl: "https://github.com/godwinbanda/lumen",
    featured: true,
  },
  {
    slug: "pixel-ledger",
    title: "Pixel Ledger",
    tagline: "Personal finance dashboard",
    description:
      "Beautiful spending insights with smart categorisation, monthly recap emails, and CSV import.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://example.com/pixel-ledger",
    repoUrl: "https://github.com/godwinbanda/pixel-ledger",
    featured: true,
  },
  {
    slug: "quill",
    title: "Quill",
    tagline: "Markdown-first writing app",
    description:
      "A distraction-free editor with live preview, custom themes, and offline-first sync.",
    stack: ["React", "TypeScript", "HTML", "CSS"],
    repoUrl: "https://github.com/godwinbanda/quill",
  },
  {
    slug: "harbor",
    title: "Harbor",
    tagline: "API gateway for indie SaaS",
    description:
      "A lightweight Django service that handles auth, rate limiting, and webhooks across multiple products.",
    stack: ["Django", "Python", "PostgreSQL"],
    repoUrl: "https://github.com/godwinbanda/harbor",
  },
  {
    slug: "drift",
    title: "Drift",
    tagline: "Async standup tool",
    description:
      "Lightweight async standups for distributed teams. Slack-native with weekly summaries.",
    stack: ["React", "JavaScript", "Django"],
    liveUrl: "https://example.com/drift",
  },
];

export const PROJECT_FILTERS = ["All", "React", "Django", "Python", "JavaScript", "TypeScript"] as const;
