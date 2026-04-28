import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/activity")({
  component: ActivityPage,
});


type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

type Event = {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string; url: string };
  payload: { commits?: { message: string }[]; ref?: string; action?: string };
};

const CACHE_PREFIX = "gb-gh-";
const TTL_MS = 10 * 60 * 1000;

function cacheGet<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { t: number; v: T };
    if (Date.now() - parsed.t > TTL_MS) return null;
    return parsed.v;
  } catch {
    return null;
  }
}

function cacheSet<T>(key: string, v: T) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ t: Date.now(), v }));
  } catch {
    /* ignore */
  }
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.round(days / 30);
  return `${months}mo ago`;
}

function eventLabel(e: Event) {
  switch (e.type) {
    case "PushEvent": {
      const n = e.payload.commits?.length ?? 0;
      return `Pushed ${n} commit${n === 1 ? "" : "s"} to`;
    }
    case "PullRequestEvent":
      return `${e.payload.action === "opened" ? "Opened" : "Updated"} a pull request in`;
    case "WatchEvent":
      return "Starred";
    case "CreateEvent":
      return "Created";
    case "ForkEvent":
      return "Forked";
    case "IssuesEvent":
      return `${e.payload.action === "opened" ? "Opened" : "Updated"} an issue in`;
    default:
      return e.type.replace("Event", "") + " in";
  }
}

function ActivityPage() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [events, setEvents] = useState<Event[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const u = SITE.githubUsername;

    async function load() {
      const cachedRepos = cacheGet<Repo[]>("repos-" + u);
      const cachedEvents = cacheGet<Event[]>("events-" + u);
      if (cachedRepos) setRepos(cachedRepos);
      if (cachedEvents) setEvents(cachedEvents);
      if (cachedRepos && cachedEvents) return;

      try {
        const [rRes, eRes] = await Promise.all([
          fetch(`https://api.github.com/users/${u}/repos?sort=pushed&per_page=6`),
          fetch(`https://api.github.com/users/${u}/events/public?per_page=10`),
        ]);
        if (!rRes.ok || !eRes.ok) throw new Error("GitHub API error");
        const rJson: Repo[] = await rRes.json();
        const eJson: Event[] = await eRes.json();
        if (cancelled) return;
        const filteredRepos = rJson.filter((r) => !r.fork).slice(0, 6);
        setRepos(filteredRepos);
        setEvents(eJson.slice(0, 8));
        cacheSet("repos-" + u, filteredRepos);
        cacheSet("events-" + u, eJson.slice(0, 8));
      } catch (err) {
        if (cancelled) return;
        setError("Couldn't reach GitHub right now. Try again later.");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="container-page pt-20 pb-24 md:pt-28 md:pb-32">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Activity
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl text-balance">
          Live from GitHub.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
          Recent public repositories and events for{" "}
          <a
            href={SITE.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline text-foreground"
          >
            @{SITE.githubUsername}
          </a>
          .
        </p>
      </Reveal>

      {error && (
        <div className="mt-10 rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-muted-foreground">
          {error}
        </div>
      )}

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <h2 className="font-display text-xl font-medium text-foreground">Recent repositories</h2>
          <ul className="mt-6 space-y-3">
            {repos === null && !error
              ? Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="h-24 animate-pulse rounded-2xl border border-border bg-surface" />
                ))
              : (repos ?? []).map((r) => (
                  <li key={r.id}>
                    <a
                      href={r.html_url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="card-hover block rounded-2xl border border-border bg-card p-5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-base font-medium text-foreground">
                          {r.name}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          {r.language && <span className="font-mono">{r.language}</span>}
                          <span className="inline-flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            {r.stargazers_count}
                          </span>
                        </div>
                      </div>
                      {r.description && (
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {r.description}
                        </p>
                      )}
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        Updated {timeAgo(r.pushed_at)}
                      </p>
                    </a>
                  </li>
                ))}
            {repos && repos.length === 0 && !error && (
              <li className="rounded-2xl border border-border bg-surface p-5 text-sm text-muted-foreground">
                No public repositories yet.
              </li>
            )}
          </ul>
        </Reveal>

        <Reveal delayMs={120}>
          <h2 className="font-display text-xl font-medium text-foreground">Recent events</h2>
          <ul className="mt-6 space-y-2">
            {events === null && !error
              ? Array.from({ length: 5 }).map((_, i) => (
                  <li key={i} className="h-14 animate-pulse rounded-xl border border-border bg-surface" />
                ))
              : (events ?? []).map((e) => (
                  <li
                    key={e.id}
                    className="rounded-xl border border-border bg-card px-4 py-3"
                  >
                    <p className="text-sm text-foreground">
                      <span className="text-muted-foreground">{eventLabel(e)} </span>
                      <a
                        href={`https://github.com/${e.repo.name}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-medium link-underline"
                      >
                        {e.repo.name}
                      </a>
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {timeAgo(e.created_at)}
                    </p>
                  </li>
                ))}
            {events && events.length === 0 && !error && (
              <li className="rounded-xl border border-border bg-surface p-4 text-sm text-muted-foreground">
                No recent activity.
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
