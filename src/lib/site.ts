// Central place to edit personal info / content for the portfolio.
// Update values here and they propagate across the whole site.

export const SITE = {
  name: "Godwin Banda",
  role: "Full Stack & Mobile Developer",
  shortBio:
    "Full stack and mobile developer crafting fast, accessible web products and native apps (Android/iOS) with React Native, Django, and a careful eye for detail.",
  longBio:
    "I'm Godwin — a full stack and mobile developer based in Zambia who enjoys turning complex problems into clean, dependable products. I work across the stack with React, React Native for iOS & Android, and Python with Django on the back end. My focus is on shipping interfaces that feel calm and inevitable, paired with backends that are simple to reason about and easy to maintain.",
  location: "Zambia",
  email: "godwinbanda19@gmail.com",
  // Replace with the real GitHub username — drives the /activity page.
  githubUsername: "Godwinofficial",
  socials: {
    github: "https://github.com/Godwinofficial",
    linkedin: "https://www.linkedin.com/in/godwinbanda19",
    email: "mailto:godwinbanda19@gmail.com",
  },
  stats: [
    { label: "Years building", value: "7+" },
    { label: "Projects shipped", value: "30+" },
    { label: "Stacks mastered", value: "3" },
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
    role: 'Senior Full Stack & Mobile Developer',
    company: 'Independent / Freelance',
    period: '2019 — Present',
    summary: 'Partnering directly with founders, startups, and creative agencies to design and build bespoke web platforms and native mobile apps (Android & iOS). Specialising in React, React Native, and robust Django APIs. Handled everything from initial architecture and UI design to deployment and ongoing maintenance for dozens of successful projects based in Zambia and globally.',
  }
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
    slug: "savemeaseatzambia",
    title: "Save Me A Seat Zambia",
    tagline: "Digital Invitations Platform",
    description:
      "As CEO and Developer, I built this platform for creating, sending, and managing beautiful digital invitations for events across Zambia.",
    stack: ["React", "Django", "PostgreSQL", "React Native"],
    liveUrl: "https://savemeaseatzambia.com",
    featured: true,
  },
  {
    slug: "zellion",
    title: "Zellion",
    tagline: "Finding Houses & Stays Nearby",
    description:
      "Co-founder and CTO. Zellion is a comprehensive platform designed to help users seamlessly find housing and short-term stays nearby.",
    stack: ["React Native", "Android", "iOS", "Django", "Python"],
    liveUrl: "https://zellionhomes.com",
    featured: true,
  },
  {
    slug: "atlas",
    title: "Atlas",
    tagline: "Project management for small teams",
    description:
      "A focused project tracker with realtime updates, keyboard-first navigation, and a clean kanban board.",
    stack: ["React", "TypeScript", "Django", "PostgreSQL"],
    repoUrl: "https://github.com/godwinbanda/atlas",
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

export const TESTIMONIALS = [
  {
    quote: "Godwin brought our vision to life with incredible attention to detail. The new platform is not only beautiful but incredibly fast.",
    author: "Sarah Jenkins",
    role: "Founder, TechStart",
  },
  {
    quote: "A true professional. He completely re-architected our legacy backend without any downtime, and the code quality is top-notch.",
    author: "David Chen",
    role: "CTO, Northwind",
  },
  {
    quote: "Working with Godwin was a breeze. He communicates clearly, delivers on time, and always suggests the best technical approach.",
    author: "Elena Rodriguez",
    role: "Product Manager, Brightline",
  },
];

export const FAQS = [
  {
    question: "Are you available for freelance work?",
    answer: "Yes, I am currently accepting new freelance and contract projects. Please reach out via the contact form to discuss your needs.",
  },
  {
    question: "What is your typical process?",
    answer: "I start with a discovery phase to understand your requirements, followed by UI/UX design if needed. Then, I move into iterative development with regular check-ins, concluding with testing and deployment.",
  },
  {
    question: "Do you work with agencies?",
    answer: "Absolutely. I frequently partner with design and creative agencies to handle the technical implementation of their projects.",
  },
];
