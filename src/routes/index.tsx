import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, WHATSAPP } from "@/components/site-chrome";
import lounge from "@/assets/lounge-sheers.jpg.asset.json";
import install from "@/assets/installation.jpg.asset.json";
import projectVideo from "@/assets/project-1.mp4.asset.json";
import projectVideo2 from "@/assets/project-2.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sheer Curtains & Blinds | Bespoke Sheers in South Africa" },
      {
        name: "description",
        content:
          "Custom sheers, blockout curtains and blinds, measured and installed across Gauteng, Cape Town, Durban and beyond. WhatsApp +27 65 930 4984.",
      },
      { property: "og:title", content: "Sheer Curtains & Blinds" },
      {
        property: "og:description",
        content: "Bespoke sheers, blockouts and blinds, measured and installed across Southern Africa.",
      },
    ],
  }),
  component: Home,
});

const steps = [
  {
    n: "01",
    t: "Send measurements",
    d: "Share your wall-to-wall and ceiling-to-floor measurements and we quote from there.",
  },
  {
    n: "02",
    t: "Book a call-out",
    d: "Prefer us to measure? The call-out fee is deductible from your final invoice.",
  },
  {
    n: "03",
    t: "Chat to us",
    d: "Any further questions, message our team on WhatsApp on 065 930 4984.",
  },
];

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative">
          <img src={lounge.url} alt="Floor-to-ceiling white sheer curtains in a light-filled lounge" className="h-[78vh] w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--veil-strong),var(--veil-soft))]" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-6 pb-16">
              <p className="font-accent text-xs uppercase tracking-[0.45em] text-muted-foreground">Est. Sandton · South Africa</p>
              <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
                Light, softened.
                <span className="block italic">Rooms, transformed.</span>
              </h1>
              <p className="mt-6 max-w-xl text-muted-foreground">
                Bespoke sheers, blockout curtains and blinds — made to your measurements and installed
                with a fitter's eye for the fall of every fold.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ink">
                  Request a quote
                </a>
                <Link to="/collections" className="btn-outline">
                  View collections
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <img src={install.url} alt="Sheer installer hanging linen wave-fold curtains" className="aspect-[4/5] w-full rounded-sm object-cover" />
            <div>
              <p className="font-accent text-xs uppercase tracking-[0.4em] text-muted-foreground">Made &amp; fitted by us</p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">A quiet kind of luxury</h2>
              <p className="mt-6 text-muted-foreground">
                Every order is cut, stitched and hung by our own team. Wave folds that stack neatly,
                hems that kiss the floor, tracks that glide in silence — the details you only notice
                when they're wrong.
              </p>
              <p className="mt-4 text-muted-foreground">
                Installation runs two to three weeks from date of deposit, nationwide.
              </p>
              <Link to="/about" className="mt-8 inline-block btn-outline">
                Our story
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-center font-display text-4xl md:text-5xl">Three ways to a quote</h2>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="border-t border-foreground/20 pt-6">
                  <p className="font-display text-3xl italic text-muted-foreground">{s.n}</p>
                  <h3 className="mt-3 font-accent text-sm uppercase tracking-[0.25em]">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 text-center">
              <Link to="/contact" className="btn-ink">
                Start your quote
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="font-accent text-xs uppercase tracking-[0.4em] text-muted-foreground">Where we work</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Gauteng · Cape Town · Durban</h2>
          <p className="mt-4 text-muted-foreground">
            Polokwane, Rustenburg, Zimbabwe and Zambia too. Cape Town call-outs every Thursday and Saturday.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
