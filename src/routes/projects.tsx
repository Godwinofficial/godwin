import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS, PROJECT_FILTERS, SITE } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});


function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.stack.includes(filter));
  }, [filter]);

  return (
    <section className="container-page pt-20 pb-24 md:pt-28 md:pb-32">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Projects
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl text-balance">
          Things I've built.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
          A selection of full stack work — from internal tools to customer-facing products.
          Every project was built end to end, from data model to interface.
        </p>
      </Reveal>

      <Reveal delayMs={120}>
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {PROJECT_FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground hover:border-border-strong"
                  }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delayMs={Math.min(i * 60, 240)}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          No projects match this filter yet.
        </p>
      )}
    </section>
  );
}
