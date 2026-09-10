import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer, PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/vacancies")({
  head: () => ({
    meta: [
      { title: "Vacancies | Sheer Curtains & Blinds" },
      {
        name: "description",
        content:
          "We are hiring a Cape Town Sales Representative. CPT based, own vehicle and valid driver's licence required. Applications close 21 September 2026.",
      },
      { property: "og:title", content: "Vacancies | Sheer Curtains & Blinds" },
      { property: "og:description", content: "Now hiring: Cape Town Sales Representative. Closing 21 September 2026." },
    ],
  }),
  component: Vacancies,
});

const requirements = [
  "Cape Town based",
  "Must have own vehicle",
  "Valid driver's licence",
  "South African ID",
  "Strong interpersonal skills",
  "High energy",
  "Matric certificate",
];

function Vacancies() {
  return (
    <>
      <Header />
      <PageHero eyebrow="We are hiring" title="Vacancies" lead="Join a team that treats every install as a showroom." />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <article className="border border-border p-8 md:p-12">
          <p className="font-accent text-xs uppercase tracking-[0.35em] text-muted-foreground">Cape Town</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Sales Representative</h2>
          <p className="mt-4 text-muted-foreground">
            Representing Sheer across Cape Town — client call-outs, on-site measurements, quotes and
            follow-through to installation.
          </p>

          <h3 className="mt-12 font-accent text-sm uppercase tracking-[0.25em]">Job description</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {requirements.map((r) => (
              <li key={r} className="border-t border-border pt-3 text-muted-foreground">
                {r}
              </li>
            ))}
          </ul>

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-muted-foreground">Please send your resume to:</p>
            <p className="mt-1 font-display text-2xl">Info@landahomeware.com</p>
            <a href="mailto:Info@landahomeware.com?subject=Application%3A%20Cape%20Town%20Sales%20Representative" className="btn-ink mt-6 inline-block">
              Apply now
            </a>
            <p className="mt-8 font-accent text-xs uppercase tracking-[0.25em]">Closing 21 Sep 2026</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
