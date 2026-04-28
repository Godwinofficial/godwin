import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { SITE, PROJECTS, SKILLS, EXPERIENCE, TESTIMONIALS, FAQS } from "@/lib/site";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: HomePage,
});


const MARQUEE_WORDS = [
  "React", "Django", "Python", "TypeScript", "Tailwind", "PostgreSQL",
  "Node.js", "Vite", "REST APIs", "Accessibility", "Performance", "Design Systems",
];

function HomePage() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const doubled = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid" aria-hidden />
        <div className="absolute inset-0 hero-bloom" aria-hidden />

        <div className="container-page relative pt-20 pb-24 md:pt-32 md:pb-36 lg:pt-40 lg:pb-44">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available for new projects
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem] text-balance">
              {SITE.name}.
              <br />
              <span className="text-muted-foreground">{SITE.role}.</span>
            </h1>
          </Reveal>

          <Reveal delayMs={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
              {SITE.shortBio}
            </p>
          </Reveal>

          <Reveal delayMs={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-elevated"
              >
                View work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:border-border-strong"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border bg-surface/60 backdrop-blur">
          <div className="overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee">
              {doubled.map((w, i) => (
                <span key={i} className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              01 — About
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-balance">
              Calm interfaces. Reliable systems.
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="md:col-span-8 md:pt-1">
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {SITE.longBio}
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3">
              {SITE.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 border-l-2 border-accent pl-4">
                  <span className="font-display text-3xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline"
            >
              More about me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SKILLS TEASER */}
      <section className="border-y border-border bg-surface">
        <div className="container-page py-24 md:py-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              02 — Toolkit
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Stack &amp; tools
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {SKILLS.map((group, idx) => (
              <Reveal key={group.category} delayMs={idx * 80}>
                <h3 className="font-display text-lg font-medium text-foreground">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="container-page py-24 md:py-32">
        <Reveal>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                03 — Experience
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Where I've worked
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-8">
          {EXPERIENCE.map((job, idx) => (
            <Reveal key={idx} delayMs={idx * 80}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-border pb-8 last:border-0 last:pb-0">
                <div className="md:w-1/3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mt-1">
                    {job.company}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 bg-surface px-2 py-1 rounded-full inline-block border border-border">
                    {job.period}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                    {job.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="border-y border-border bg-surface">
        <div className="container-page py-24 md:py-32">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              04 — Services
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              What I offer
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <Reveal delayMs={0}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <line x1="8" x2="16" y1="21" y2="21" />
                    <line x1="12" x2="12" y1="17" y2="21" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Web & Mobile Apps</h3>
                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  End-to-end application development using React and React Native. From cross-platform native iOS & Android apps to complex web dashboards.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">UI / UX Design</h3>
                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  Designing calm, accessible, and intuitive interfaces. Creating responsive design systems that scale beautifully across mobile and web.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={160}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Backend & APIs</h3>
                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  Building robust, secure, and fast RESTful APIs and backend services using Python & Django that can power multiple front ends or mobile apps.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="container-page py-24 md:py-32">
        <Reveal>
          <div className="md:w-1/2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              05 — Process
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              How I work
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { step: "01", title: "Discovery", desc: "Understanding your goals, users, and the technical requirements before writing any code." },
            { step: "02", title: "Architecture", desc: "Designing a scalable database schema, API structure, and intuitive user interface." },
            { step: "03", title: "Development", desc: "Building the application iteratively, with regular updates and feedback loops." }
          ].map((item, i) => (
            <Reveal key={i} delayMs={i * 80}>
              <div className="border-t-2 border-border pt-6 mt-4">
                <span className="font-mono text-sm text-accent font-bold">{item.step}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-page py-24 md:py-32">
        <Reveal>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                06 — Selected work
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Recent projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-sm font-medium text-foreground link-underline"
            >
              All projects →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delayMs={i * 80}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-24 md:py-32">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                07 — Testimonials
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                What people say
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delayMs={i * 80}>
                <div className="flex h-full flex-col justify-between rounded-[2rem] glass-card p-8">
                  <div>
                    <svg className="mb-4 h-8 w-8 text-accent opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-base leading-relaxed text-muted-foreground">"{t.quote}"</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="font-display font-semibold text-foreground">{t.author}</p>
                    <p className="text-sm text-muted-foreground mt-1">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-background">
        <div className="container-page py-24 md:py-32">
          <Reveal>
            <div className="md:w-1/2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                08 — FAQ
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Common questions
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 md:w-3/4 mx-auto md:ml-0 md:pl-8">
            <Reveal delayMs={160}>
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border/40 py-2">
                    <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:text-accent hover:no-underline transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24 md:pb-32 pt-24 md:pt-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center md:px-12 md:py-20">
            <div className="absolute inset-0 hero-bloom opacity-60" aria-hidden />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
                Have an idea worth building?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground text-pretty">
                I'm currently taking on freelance and contract work. Let's talk about what you have in mind.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-elevated"
              >
                Start a conversation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
