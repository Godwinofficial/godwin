import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
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

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

type FormState = "idle" | "submitting" | "success" | "error";

function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((iss) => {
        const k = iss.path[0] as string;
        if (!fieldErrors[k]) fieldErrors[k] = iss.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setState("submitting");
    // Stub submission — wire to email provider later.
    await new Promise((r) => setTimeout(r, 700));
    setState("success");
    form.reset();
  }

  return (
    <section className="container-page pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
            Let's build something good together.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
            Whether it's a new product, a stuck rebuild, or a small fix — drop me a note and I'll get back within a day.
          </p>

          <dl className="mt-10 space-y-5 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Email</dt>
              <dd className="mt-1.5">
                <a href={SITE.socials.email} className="text-sm text-foreground link-underline">
                  {SITE.email}
                </a>
              </dd>
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
          <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="input"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={255}
                  required
                  className="input"
                  placeholder="jane@studio.com"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field id="message" label="Message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={2000}
                  required
                  className="input resize-y"
                  placeholder="Tell me about the project, timeline, and where you're stuck."
                />
              </Field>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                I respect your inbox — no marketing, ever.
              </p>
              <button
                type="submit"
                disabled={state === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-elevated disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state === "submitting" ? "Sending…" : "Send message"}
              </button>
            </div>

            {state === "success" && (
              <div
                role="status"
                className="mt-6 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground"
              >
                Thanks — your message landed safely. I'll reply soon.
              </div>
            )}
          </form>
        </Reveal>
      </div>

      {/* tiny stylesheet helper for inputs */}
      <style>{`
        .input {
          width: 100%;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          padding: 0.75rem 0.875rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;
        }
        .input::placeholder { color: var(--color-muted-foreground); opacity: 0.7; }
        .input:focus { outline: none; border-color: var(--color-ring); box-shadow: 0 0 0 4px var(--accent-soft); }
      `}</style>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
