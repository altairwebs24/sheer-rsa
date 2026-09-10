import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections | Sheer Curtains & Blinds" },
      {
        name: "description",
        content:
          "Sheers, blockout curtains, wave folds, roller and Venetian blinds — custom made and installed by Sheer Curtains & Blinds.",
      },
      { property: "og:title", content: "Collections | Sheer Curtains & Blinds" },
      { property: "og:description", content: "Sheers, blockouts, wave folds, blinds and tracking, custom made to measure." },
    ],
  }),
  component: Collections,
});

const items = [
  { t: "Sheers", d: "Soft, light-filtering voiles that hold privacy by day and glow at dusk. Our signature." },
  { t: "Blockout curtains", d: "Dense, beautifully weighted linings for bedrooms, media rooms and late mornings." },
  { t: "Wave fold", d: "Uniform, architectural folds on a continuous track — the cleanest modern drape." },
  { t: "Roller blinds", d: "Screen, translucent or blockout fabrics in slim, discreet cassettes." },
  { t: "Venetian & wooden blinds", d: "Aluminium and timber slats for precise, angled light control." },
  { t: "Tracks & rails", d: "Ceiling-recessed, wall-mounted, corded or motorised hardware, fitted level and silent." },
];

function Collections() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Made to measure"
        title="Collections"
        lead="Everything is cut to your window, not to a standard size. Fabrics can be viewed in person or sent to you on WhatsApp."
      />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {items.map((i) => (
            <article key={i.t} className="border-t border-border pt-6">
              <h2 className="font-display text-3xl">{i.t}</h2>
              <p className="mt-3 text-muted-foreground">{i.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-20 border border-border bg-secondary p-10 text-center">
          <h2 className="font-display text-3xl">Not sure what suits your space?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Send us a photo of the window with your measurements and we'll recommend a fabric and heading.
          </p>
          <Link to="/contact" className="btn-ink mt-8 inline-block">
            Talk to us
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
