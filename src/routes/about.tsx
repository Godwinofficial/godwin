import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SITE, SKILLS, EXPERIENCE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${SITE.name}` },
      { name: "description", content: `About ${SITE.name}, a ${SITE.role} working with React and Django.` },
      { property: "og:title", content: `About — ${SITE.name}` },
      { property: "og:description", content: `About ${SITE.name}, a ${SITE.role} working with React and Django.` },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-page pt-20 pb-12 md:pt-28 md:pb-20">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            About
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl text-balance">
            A developer who cares about the details.
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-muted">
                <span className="font-display text-7xl font-semibold text-muted-foreground/40">
                  {SITE.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120} className="md:col-span-7">
            <p className="text-lg leading-relaxed text-foreground text-pretty">
              {SITE.longBio}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              I believe great software is mostly small, considered decisions stacked on top of each other.
              I obsess over typography, whitespace, motion, error states, and the quiet moments between interactions.
              On the backend I lean on Django for its honesty and longevity — and PostgreSQL because boring is good.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {SITE.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-semibold text-foreground">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-y border-border bg-surface">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Skills &amp; tools
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {SKILLS.map((group, idx) => (
              <Reveal key={group.category} delayMs={idx * 80}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  0{idx + 1}
                </p>
                <h3 className="mt-3 font-display text-xl font-medium text-foreground">
                  {group.category}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-1.5">
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

      {/* EXPERIENCE */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Experience
          </h2>
        </Reveal>

        <ol className="mt-12 space-y-2">
          {EXPERIENCE.map((exp, idx) => (
            <Reveal key={exp.role + exp.company} delayMs={idx * 60}>
              <li className="grid gap-2 rounded-2xl border border-transparent px-2 py-6 transition-colors hover:border-border hover:bg-surface md:grid-cols-12 md:gap-8 md:px-6">
                <div className="md:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-xl font-medium text-foreground">
                    {exp.role}
                    <span className="text-muted-foreground"> · {exp.company}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {exp.summary}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-elevated"
            >
              Work with me
            </Link>
            <Link to="/projects" className="text-sm font-medium text-foreground link-underline">
              See projects →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
