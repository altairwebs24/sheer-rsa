import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer, PageHero, WHATSAPP, PHONE_DISPLAY } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quotes | Sheer Curtains & Blinds" },
      {
        name: "description",
        content:
          "Request a quote from Sheer Curtains & Blinds. WhatsApp +27 65 930 4984 or visit 13 Chadwick Ave, Wynberg, Sandton.",
      },
      { property: "og:title", content: "Contact & Quotes | Sheer Curtains & Blinds" },
      { property: "og:description", content: "WhatsApp +27 65 930 4984 or visit our Sandton workshop." },
    ],
  }),
  component: Contact;
});

function Contact() {
  const [form, setForm] = useState({ name: "", area: "", measurements: "", message: "" });

  const text = encodeURIComponent(
    `Hi Sheer, I'd like a quote.\nName: ${form.name}\nArea: ${form.area}\nMeasurements (wall-to-wall / ceiling-to-floor): ${form.measurements}\nNotes: ${form.message}`,
  );

  return (
    <>
      <Header />
      <PageHero
        eyebrow="Quotes & call-outs"
        title="Contact"
        lead="Send your wall-to-wall and ceiling-to-floor measurements, or book a call-out — the fee is deductible from your invoice."
      />
      <main className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(`${WHATSAPP}?text=${text}`, "_blank");
          }}
        >
          <div>
            <label className="field-label" htmlFor="name">Name</label>
            <input id="name" required className="field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label className="field-label" htmlFor="area">Area / city</label>
            <input id="area" required className="field" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} />
          </div>
          <div>
            <label className="field-label" htmlFor="m">Measurements</label>
            <input id="m" placeholder="e.g. 4.2m wall-to-wall, 2.7m ceiling-to-floor" className="field" value={form.measurements} onChange={(e) => setForm({ ...form, measurements: e.target.value })} />
          </div>
          <div>
            <label className="field-label" htmlFor="msg">Notes</label>
            <textarea id="msg" rows={4} className="field" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </div>
          <button type="submit" className="btn-ink w-full">Send on WhatsApp</button>
          <p className="text-xs text-muted-foreground">
            Sending opens WhatsApp with your details filled in, so a consultant can reply directly.
          </p>
        </form>

        <aside className="space-y-10">
          <div>
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-muted-foreground">WhatsApp</p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-2 block font-display text-3xl hover:italic">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-muted-foreground">Email</p>
            <a href="mailto:Info@landahomeware.com" className="mt-2 block font-display text-2xl hover:italic">
              Info@landahomeware.com
            </a>
          </div>
          <div>
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-muted-foreground">Workshop</p>
            <p className="mt-2 text-muted-foreground">13 Chadwick Ave, Wynberg, Sandton, 2090, South Africa</p>
          </div>
          <div>
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-muted-foreground">Cape Town</p>
            <p className="mt-2 text-muted-foreground">Call-outs every Thursday &amp; Saturday. Installation 2–3 weeks from date of deposit.</p>
          </div>
          <div>
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-muted-foreground">Instagram</p>
            <a href="https://instagram.com/sheer_rsa" target="_blank" rel="noreferrer" className="mt-2 block font-display text-2xl hover:italic">
              @sheer_rsa
            </a>
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
}
