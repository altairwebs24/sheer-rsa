import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer, PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Sheer Curtains & Blinds" },
      {
        name: "description",
        content:
          "Sheer Curtains & Blinds is a Sandton-based maker and installer of custom sheers and blinds, serving South Africa, Zimbabwe and Zambia.",
      },
      { property: "og:title", content: "About | Sheer Curtains & Blinds" },
      { property: "og:description", content: "A Sandton-based maker and installer of custom sheers, curtains and blinds." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Header />
      <PageHero eyebrow="Our story" title="Sheer Curtains & Blinds" lead="Sandton born, working across Southern Africa." />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-display text-2xl leading-relaxed md:text-3xl">
          We make window dressing that behaves like architecture: measured to the millimetre, hung
          dead level, and quiet in a room rather than loud in it.
        </p>
        <div className="mt-12 space-y-6 text-muted-foreground">
          <p>
            From our base at 13 Chadwick Ave in Wynberg, Sandton, we manufacture and install sheers,
            blockout curtains and blinds for homes, apartments and commercial interiors. Our
            installation teams travel to Gauteng, Cape Town, Durban, Polokwane and Rustenburg, as well
            as Zimbabwe and Zambia.
          </p>
          <p>
            Cape Town call-outs run every Thursday and Saturday. Installation typically takes two to
            three weeks from date of deposit, subject to capacity.
          </p>
          <p>
            Sheer works alongside its affiliated companies Landa Homeware and Prepped Moms, and shares
            a workshop, standards and after-care with them.
          </p>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          {[
            ["23 800+", "Instagram community"],
            ["2–3 weeks", "From deposit to install"],
            ["7 regions", "Served across Southern Africa"],
          ].map(([a, b]) => (
            <div key={b}>
              <p className="font-display text-4xl">{a}</p>
              <p className="mt-2 font-accent text-xs uppercase tracking-[0.2em] text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
