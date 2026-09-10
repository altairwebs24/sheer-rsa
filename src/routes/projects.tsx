import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, PageHero } from "@/components/site-chrome";
const v1 = { url: "/media/project-1.mp4" };
const v2 = { url: "/media/project-2.mp4" };
const v3 = { url: "/media/project-3.mp4" };
const lounge = { url: "/media/lounge-sheers.jpg" };
const install = { url: "/media/installation.jpg" };

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Sheer Curtains & Blinds" },
      {
        name: "description",
        content:
          "Recent installations by Sheer Curtains & Blinds — wave-fold sheers, blockout curtains and blinds fitted in homes across South Africa.",
      },
      { property: "og:title", content: "Projects | Sheer Curtains & Blinds" },
      { property: "og:description", content: "Recent sheer, curtain and blind installations by our team." },
    ],
  }),
  component: Projects,
});

const videos = [
  {
    src: v1.url,
    title: "Wave-fold sheers",
    caption: "Ceiling-recessed track with soft wave folds, stacking neatly clear of the glass.",
  },
  {
    src: v2.url,
    title: "Full-height install",
    caption: "Floor-to-ceiling drapery hung level across a wide patio opening.",
  },
  {
    src: v3.url,
    title: "Light in motion",
    caption: "Sheer voile filtering afternoon light while keeping the view and the privacy.",
  },
];

function VideoCard({ src, title, caption }: { src: string; title: string; caption: string }) {
  return (
    <figure className="group relative overflow-hidden bg-foreground/5">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-[68vh] w-full object-cover"
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(20,18,16,0.82),transparent)] px-7 pb-8 pt-24 text-left">
        <h3 className="font-script text-3xl text-[oklch(0.99_0.004_90)] md:text-4xl">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-[oklch(0.93_0.006_85)]">{caption}</p>
      </figcaption>
    </figure>
  );
}

function Projects() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Recent work"
        title="Projects"
        lead="A look at fabric, fall and finish in real homes — filmed on site during and after installation."
      />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.src} {...v} />
          ))}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <figure className="relative overflow-hidden">
            <img src={lounge.url} alt="White sheer curtains across a full-width lounge window" className="h-[62vh] w-full object-cover" />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(20,18,16,0.82),transparent)] px-7 pb-8 pt-24">
              <h3 className="font-script text-3xl text-[oklch(0.99_0.004_90)] md:text-4xl">Sandton lounge</h3>
              <p className="mt-2 max-w-md text-sm text-[oklch(0.93_0.006_85)]">
                Wall-to-wall white sheers softening a bank of sliding doors.
              </p>
            </figcaption>
          </figure>
          <figure className="relative overflow-hidden">
            <img src={install.url} alt="Sheer installer dressing linen wave-fold curtains" className="h-[62vh] w-full object-cover" />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(20,18,16,0.82),transparent)] px-7 pb-8 pt-24">
              <h3 className="font-script text-3xl text-[oklch(0.99_0.004_90)] md:text-4xl">Dressed by hand</h3>
              <p className="mt-2 max-w-md text-sm text-[oklch(0.93_0.006_85)]">
                Every panel is dressed and steamed on site so the folds set evenly.
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-20 text-center">
          <p className="font-script text-4xl">Your window next?</p>
          <Link to="/contact" className="btn-ink mt-6 inline-block">
            Request a quote
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
