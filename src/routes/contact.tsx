import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE.name}` },
      { name: "description", content: `Get in touch with ${SITE.name} — full stack developer available for new projects.` },
      { property: "og:title", content: `Contact — ${SITE.name}` },
      { property: "og:description", content: `Get in touch with ${SITE.name} — full stack developer available for new projects.` },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-page pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance text-gradient">
            Let's build something good together.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
            Whether it's a new product, a stuck rebuild, or a small fix — drop me a note and I'll get back within a day.
          </p>

          <dl className="mt-10 space-y-5 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Email</dt>
              <dd className="mt-1.5">
                <a href="mailto:godwinbanda19@gmail.com" className="text-sm text-foreground link-underline">
                  godwinbanda19@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">WhatsApp</dt>
              <dd className="mt-1.5 text-sm text-foreground">+260 973 848 066</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Location</dt>
              <dd className="mt-1.5 text-sm text-foreground">{SITE.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Elsewhere</dt>
              <dd className="mt-2 flex flex-wrap gap-3 text-sm">
                <a className="text-foreground link-underline" href={SITE.socials.github} target="_blank" rel="noreferrer noopener">GitHub</a>
                <a className="text-foreground link-underline" href={SITE.socials.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
                <a className="text-foreground link-underline" href={SITE.socials.x} target="_blank" rel="noreferrer noopener">X</a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delayMs={120} className="md:col-span-7">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 flex flex-col items-center justify-center text-center h-full">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-accent">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Ready to start?
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty max-w-sm mx-auto">
              I'm available for freelance work and open to new opportunities. Reach out via WhatsApp or Email.
            </p>

            <div className="mt-8 flex flex-col w-full gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://wa.me/260973848066"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp
              </a>

              <a
                href="mailto:godwinbanda19@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                  <path d="m2 4 10 8 10-8" />
                </svg>
                Email Me
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
