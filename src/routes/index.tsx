import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sushill Waddhwa — Global Hospitality Entrepreneur & Investor" },
      {
        name: "description",
        content:
          "Sushill Waddhwa, Global Hospitality Entrepreneur, Investor and Founder & CMD of Platinum World Grroup.",
      },
      { property: "og:title", content: "Sushill Waddhwa — Global Hospitality Entrepreneur" },
      {
        property: "og:description",
        content: "82 countries. 2,040+ luxury hotels. Founder & CMD, Platinum World Grroup.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Home", "About", "Business", "Brand Collaborations", "Media", "Contact"];
const id = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

const SLIDES = [
  { word: "Global", pose: "stand" },
  { word: "Sophisticated", pose: "suit" },
  { word: "Trustworthy", pose: "arms" },
  { word: "Charismatic", pose: "stand" },
  { word: "Discerning", pose: "suit" },
  { word: "Adventurous", pose: "arms" },
] as const;

/** Placeholder portrait: figure with a plain black circle face, to be replaced with real photos. */
function Figure({ pose, className = "" }: { pose: "stand" | "suit" | "arms"; className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} aria-hidden>
      <rect width="200" height="300" className="fill-primary" />
      <path
        d={
          pose === "arms"
            ? "M40 300 L50 175 Q55 140 100 132 Q145 140 150 175 L160 300 Z"
            : "M30 300 L42 170 Q50 135 100 128 Q150 135 158 170 L170 300 Z"
        }
        className="fill-obsidian"
      />
      {pose !== "arms" && <path d="M100 132 L88 200 L100 215 L112 200 Z" className="fill-background" opacity=".85" />}
      {pose === "suit" && <path d="M100 150 L95 205 L100 212 L105 205 Z" className="fill-accent" />}
      {pose === "arms" && <path d="M58 200 Q100 215 142 200 L142 214 Q100 228 58 214 Z" className="fill-stone" opacity=".5" />}
      <rect x="90" y="108" width="20" height="26" className="fill-obsidian" />
      <circle cx="100" cy="82" r="34" fill="black" />
    </svg>
  );
}

function Slideshow() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative">
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        {SLIDES.map((s, n) => (
          <div
            key={s.word}
            className={`absolute inset-0 transition-opacity duration-1000 ${n === i ? "opacity-100" : "opacity-0"}`}
          >
            <Figure pose={s.pose} className="h-full w-full" />
          </div>
        ))}
      </div>
      <p key={i} className="animate-fade-slide mt-6 text-center font-serif text-3xl tracking-wide text-primary">
        {SLIDES[i].word}
      </p>
      <div className="mt-4 flex justify-center gap-2">
        {SLIDES.map((s, n) => (
          <button
            key={s.word}
            aria-label={`Show ${s.word}`}
            onClick={() => setI(n)}
            className={`h-px w-8 transition-colors ${n === i ? "bg-accent" : "bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
}

const VENTURES = [
  {
    name: "Platinum World Grroup",
    tag: "500+ Destinations | 100+ Countries | One Call Away",
    body: "A global B2B company serving events, wedding, celebration and travel planners through luxury hotel buyouts, group bookings, destination services and experiences across India, Sri Lanka, Asia, Dubai, the Middle East, Monaco, Europe, the UK and beyond. Its intellectual properties include WedTalks Forum, launched in Colombo, and the forthcoming Global Wedding Festival.",
    link: true,
  },
  {
    name: "Artoso Hospitality Corp",
    tag: "Global Footprint. Local Flair. Luxury Boutique Hotels Worldwide.",
    body: "An AI-powered lifestyle company redefining luxury hospitality through innovative boutique hotels and resorts in key destinations worldwide.",
    link: true,
  },
  {
    name: "Platinum World Pictures",
    tag: "Creating content that drives business",
    body: "Premium content and AI-powered videos for luxury brands, hotels, tourism boards and event companies — brand campaigns, destination films, wedding films and vertical micro web series in development.",
    link: true,
  },
  {
    name: "Platinum World Lifestyle",
    tag: "Advisory for Lifestyle Solutions",
    body: "A discreet UHNW lifestyle advisory connecting individuals with trusted specialists for private aviation, superyachts, luxury real estate, citizenship and residency, and bespoke concierge.",
    link: true,
  },
  {
    name: "Investments",
    tag: "Real Estate, Equities, Start-ups",
    body: "An active portfolio across real estate, hospitality, energy, technology, AI and finance, with an ongoing interest in new opportunities.",
    link: false,
  },
];

const COLLABS = [
  "One&Only One Za'abeel",
  "Six Senses Zighy Bay",
  "Cinnamon Bentota Beach",
  "Cinnamon Life at City of Dreams",
  "ITC Ratnadipa",
  "Kahanda Kanda",
];

function Section({ name, children, dark = false }: { name: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section
      id={id(name)}
      className={`scroll-mt-20 px-6 py-24 md:py-32 ${dark ? "bg-primary text-primary-foreground" : ""}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-serif text-lg tracking-[0.2em] text-primary">
            SUSHILL WADDHWA
          </a>
          <nav className="hidden gap-7 md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${id(n)}`} className="eyebrow text-muted-foreground transition-colors hover:text-accent">
                {n}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="px-6 pb-24 pt-32 md:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow text-accent">Mumbai · Dubai · Sri Lanka · Europe</p>
            <h1 className="mt-6 text-5xl leading-[1.05] tracking-wide text-primary md:text-7xl">
              Sushill
              <br />
              Waddhwa
            </h1>
            <div className="my-8 h-px w-16 bg-accent" />
            <p className="text-lg font-light">Global Hospitality Entrepreneur · Investor</p>
            <p className="mt-1 text-sm text-muted-foreground">Founder & CMD, Platinum World Grroup</p>
            <p className="eyebrow mt-10 leading-loose text-stone">
              Global · Sophisticated · Trustworthy · Charismatic · Discerning · Adventurous
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <Slideshow />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section name="About" dark>
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow text-accent">About</p>
            <h2 className="mt-4 text-4xl md:text-5xl">A life spent in the world's finest hotels.</h2>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-primary-foreground/20 pt-8">
              {[
                ["1989", "First event"],
                ["82", "Countries"],
                ["2,040+", "Luxury hotels"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-serif text-3xl text-accent">{n}</p>
                  <p className="eyebrow mt-2 opacity-70">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5 font-light leading-relaxed opacity-90">
            <p>
              Sushill Waddhwa is a Global Hospitality Entrepreneur, Investor and Founder & CMD of Platinum World
              Grroup. He divides his time between Mumbai, Dubai, Sri Lanka and Europe.
            </p>
            <p>
              His journey began with his first event in the first year of Hotel Management in 1989, evolving into an
              international career spanning events, weddings, celebrations, luxury hotels, destinations and travel.
            </p>
            <p>
              His work has taken him across 82 countries and more than 2,040 luxury hotels, building lasting
              relationships with hotels, destinations, planners and hospitality leaders worldwide.
            </p>
            <p>
              Beyond business, he is passionate about travel, fitness, style, hotels, astrology, numerology and
              discovering new experiences.
            </p>
            <p className="pt-6 font-serif text-2xl italic text-accent">Celebrating Life with Sushill Waddhwa</p>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-4">
          {(["stand", "suit", "arms"] as const).map((p) => (
            <Figure key={p} pose={p} className="aspect-[2/3] w-full opacity-90" />
          ))}
        </div>
      </Section>

      {/* BUSINESS */}
      <Section name="Business">
        <p className="eyebrow text-accent">Business Ventures</p>
        <h2 className="mt-4 text-4xl text-primary md:text-5xl">Enterprises built on relationships.</h2>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {VENTURES.map((v, n) => (
            <article key={v.name} className="grid gap-6 py-10 md:grid-cols-[80px_1fr_1.4fr]">
              <span className="font-serif text-xl text-accent">0{n + 1}</span>
              <div>
                <h3 className="text-2xl text-primary">{v.name}</h3>
                <p className="mt-2 text-sm italic text-muted-foreground">{v.tag}</p>
              </div>
              <div>
                <p className="font-light leading-relaxed">{v.body}</p>
                {v.link && (
                  <a href="#" className="eyebrow mt-4 inline-block text-primary underline-offset-8 hover:text-accent hover:underline">
                    More →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* COLLABORATIONS */}
      <Section name="Brand Collaborations">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">Brand Collaborations</p>
            <h2 className="mt-4 text-4xl text-primary md:text-5xl">Selected collaborations.</h2>
          </div>
          <p className="font-light leading-relaxed text-muted-foreground">
            Sushill Waddhwa collaborates selectively with luxury, hospitality, travel and lifestyle brands on
            destination campaigns, editorial content, brand films, ambassadorial partnerships and curated experiences.
          </p>
        </div>
        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {COLLABS.map((c) => (
            <figure key={c}>
              <div className="aspect-[4/5] w-full border border-border bg-muted" />
              <figcaption className="mt-4 font-serif text-xl text-primary">{c}</figcaption>
            </figure>
          ))}
        </div>
        <p className="eyebrow mt-14 text-muted-foreground">
          Enquiries ·{" "}
          <a href="mailto:info@platinumworld.net" className="text-primary hover:text-accent">
            info@platinumworld.net
          </a>
        </p>
      </Section>

      {/* MEDIA */}
      <Section name="Media" dark>
        <p className="eyebrow text-accent">Press · Interviews · Articles</p>
        <h2 className="mt-4 text-4xl md:text-5xl">In the media.</h2>
        <div className="mt-14 grid gap-px bg-primary-foreground/15 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-primary p-8">
              <div className="h-8 w-24 border border-primary-foreground/25" />
              <p className="mt-8 font-serif text-xl opacity-60">Coverage to be added</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section name="Contact">
        <div className="text-center">
          <p className="eyebrow text-accent">Contact</p>
          <h2 className="mt-4 text-4xl text-primary md:text-6xl">Sushill Waddhwa</h2>
          <p className="mt-3 text-muted-foreground">Founder & CMD, Platinum World Grroup</p>
          <div className="mx-auto my-10 h-px w-16 bg-accent" />
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-12">
            <a href="mailto:info@platinumworld.net" className="eyebrow hover:text-accent">info@platinumworld.net</a>
            <a href="https://instagram.com/sushillwaddhwa" target="_blank" rel="noreferrer" className="eyebrow hover:text-accent">
              Instagram · @sushillwaddhwa
            </a>
            <a href="https://www.linkedin.com/search/results/all/?keywords=Sushill%20Waddhwa" target="_blank" rel="noreferrer" className="eyebrow hover:text-accent">
              LinkedIn
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border px-6 py-8 text-center">
        <p className="eyebrow text-muted-foreground">© {new Date().getFullYear()} Sushill Waddhwa</p>
      </footer>
    </div>
  );
}
