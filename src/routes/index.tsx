import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { SITE, PROJECTS, SKILLS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.role}` },
      {
        name: "description",
        content: SITE.shortBio,
      },
      { property: "og:title", content: `${SITE.name} — ${SITE.role}` },
      { property: "og:description", content: SITE.shortBio },
    ],
  }),
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
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline"
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

      {/* FEATURED PROJECTS */}
      <section className="container-page py-24 md:py-32">
        <Reveal>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                03 — Selected work
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

      {/* CTA */}
      <section className="container-page pb-24 md:pb-32">
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
