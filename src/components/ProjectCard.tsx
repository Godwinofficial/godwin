import { Link } from "@tanstack/react-router";

export function ProjectCard({
  title,
  tagline,
  description,
  stack,
  liveUrl,
  repoUrl,
}: {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
}) {
  return (
    <article className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {tagline}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
            {title}
          </h3>
        </div>
        <span
          aria-hidden
          className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-foreground group-hover:text-foreground group-hover:rotate-[-12deg]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
        {description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {stack.map((s) => (
          <li
            key={s}
            className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
          >
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-4 pt-6">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline text-sm font-medium text-foreground"
          >
            Live demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Source
          </a>
        )}
      </div>
    </article>
  );
}

// Just to satisfy unused imports if needed
export const _Link = Link;
