import { Link } from "@tanstack/react-router";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface mt-32">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="font-display text-base font-semibold tracking-tight text-foreground">
              {SITE.name}
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs text-pretty">
              {SITE.shortBio}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Sitemap
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    activeOptions={{ exact: l.to === "/" }}
                    className="text-foreground/80 hover:text-foreground link-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Elsewhere
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={SITE.socials.github} target="_blank" rel="noreferrer noopener" className="text-foreground/80 hover:text-foreground link-underline">GitHub</a>
              </li>
              <li>
                <a href={SITE.socials.linkedin} target="_blank" rel="noreferrer noopener" className="text-foreground/80 hover:text-foreground link-underline">LinkedIn</a>
              </li>

              <li>
                <a href={SITE.socials.email} className="text-foreground/80 hover:text-foreground link-underline">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
