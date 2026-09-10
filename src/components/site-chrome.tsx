import { Link } from "@tanstack/react-router";
import { useState } from "react";
const logo = { url: "/media/sheer-logo.png" };

export const WHATSAPP = "https://wa.me/27659304984";
export const PHONE_DISPLAY = "+27 65 930 4984";

const nav = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/vacancies", label: "Vacancies" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Sheer Curtains & Blinds" className="h-11 w-11 rounded-full object-cover" />
          <span className="font-display text-xl tracking-[0.3em] uppercase">Sheer</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="font-accent text-xs uppercase tracking-[0.25em] transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ink">
            Get a quote
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="font-accent text-xs uppercase tracking-[0.25em] md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-6 py-6 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="font-accent text-sm uppercase tracking-[0.25em] text-muted-foreground"
            >
              {n.label}
            </Link>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ink mt-2 text-center">
            Get a quote
          </a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.25em] uppercase">Sheer.</p>
          <p className="mt-3 text-sm text-muted-foreground">Curtains &amp; Blinds</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Bespoke sheers, blockouts and blinds, measured and installed with care across
            Southern Africa.
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="font-accent text-xs uppercase tracking-[0.25em] text-foreground">Visit</p>
          <p>13 Chadwick Ave, Wynberg, Sandton, 2090, South Africa</p>
          <p>Gauteng · Cape Town · Durban · Polokwane · Rustenburg · Zimbabwe · Zambia</p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="font-accent text-xs uppercase tracking-[0.25em] text-foreground">Contact</p>
          <p>
            WhatsApp{" "}
            <a className="underline underline-offset-4 hover:text-foreground" href={WHATSAPP} target="_blank" rel="noreferrer">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p>
            <a className="underline underline-offset-4 hover:text-foreground" href="mailto:Info@landahomeware.com">
              Info@landahomeware.com
            </a>
          </p>
          <p>
            <a className="underline underline-offset-4 hover:text-foreground" href="https://instagram.com/sheer_rsa" target="_blank" rel="noreferrer">
              @sheer_rsa
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs tracking-[0.2em] uppercase text-muted-foreground">
        © {new Date().getFullYear()} Sheer Curtains &amp; Blinds
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="font-accent text-xs uppercase tracking-[0.4em] text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-5 font-display text-4xl leading-tight md:text-6xl">{title}</h1>
        {lead && <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{lead}</p>}
      </div>
    </section>
  );
}
