import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  PartyPopper,
  Trees,
  Droplets,
  Route,
  LayoutGrid,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { formatNaira } from "@/lib/format";

const PHONE_DISPLAY = "+234 802 982 3593";
const PHONE_TEL = "tel:+2348029823593";
const WHATSAPP_URL =
  "https://wa.me/2348029823593?text=Hello%20Clobek%20Heritage%20Place%2C%20I%27m%20interested%20in%20the%20Lugbe%20estate.";

const houseTypes = [
  {
    id: 1,
    name: "3-Bedroom Terrace",
    size: "141.2 sqm",
    sqm: 141.2,
    price: 25,
    image: "/images/3-bedroom-terrace.jpeg",
  },
  {
    id: 2,
    name: "3-Bedroom Terrace + B.Q",
    size: "162.5 sqm",
    sqm: 162.5,
    price: 29,
    image: "/images/3-bedroom-terrace-bq-2.jpeg",
  },
  {
    id: 3,
    name: "4-Bedroom Terrace + B.Q",
    size: "167 sqm",
    sqm: 167,
    price: 31.5,
    image: "/images/4-bedroom-terrace-bq.jpeg",
  },
  {
    id: 4,
    name: "4-Bedroom Row House + B.Q",
    size: "300 sqm",
    sqm: 300,
    price: 35,
    image: "/images/clobek-rowhouse-a.jpg",
  },
  {
    id: 5,
    name: "5-Bedroom Row House + B.Q",
    size: "360.4 sqm",
    sqm: 360.4,
    price: 43,
    image: "/images/clobek-duplex.jpg",
  },
  {
    id: 6,
    name: "5-Bedroom Detached Duplex + B.Q",
    size: "465 sqm",
    sqm: 465,
    price: 47,
    image: "/images/5-bedroom-detached-duplex-bq.jpeg",
  },
];

const startingPrice = Math.min(...houseTypes.map((h) => h.price));

const amenities = [
  {
    icon: ShieldCheck,
    title: "Gated & Secured",
    description: "A manned gate house and perimeter fencing protect your family and keep the estate private.",
  },
  {
    icon: PartyPopper,
    title: "The Heritage Center",
    description: "A dedicated event center for celebrations and gatherings, right inside the estate.",
  },
  {
    icon: Trees,
    title: "Green Parks",
    description: "Landscaped parks and green spaces for evening walks, play, and fresh air.",
  },
  {
    icon: Droplets,
    title: "Reliable Water Supply",
    description: "Dedicated on-site water sources serving every property, so the taps keep running.",
  },
  {
    icon: Route,
    title: "Tarred Access Roads",
    description: "A fully networked, tarred internal road system with easy access to every block.",
  },
  {
    icon: LayoutGrid,
    title: "6 Property Types",
    description: "From 3-bedroom terraces to 5-bedroom detached duplexes, a property for every stage of life.",
  },
];

const whyUs = [
  {
    title: "Prime Lugbe Location",
    description: "Set in Sabon-Lugbe East Extension Layout, a sought-after residential corridor in Abuja FCT.",
  },
  {
    title: "Professionally Designed",
    description: "Architectural drawings and site planning by Spacemerge Designs, so every property and street is planned with intent.",
  },
  {
    title: "Flexible Property Types",
    description: "Six property types across a range of sizes and budgets. Choose the one that fits, all within one estate.",
  },
  {
    title: "Planned Community",
    description: "Security, green parks, and shared amenities are built into the master plan, not added as an afterthought.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden border border-ink/10 bg-sand/50 p-7 shadow-sm shadow-ink/5 transition duration-300 hover:-translate-y-1 hover:bg-sand hover:shadow-xl hover:shadow-brand/10">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-grove" />
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-grove text-white">
        <Icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
      </div>
      <h3 className="mt-8 font-serif text-xl text-ink">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex-1 pb-16 sm:pb-0">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-champagne/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="#home" className="font-serif text-xl text-ink sm:text-2xl">
            Clobek <span className="text-brand italic">Heritage</span> Place
          </Link>
          <div className="hidden items-center gap-10 text-sm font-medium text-ink/70 md:flex">
            <Link href="#house-types" className="transition hover:text-brand">
              Property Types
            </Link>
            <Link href="#amenities" className="transition hover:text-brand">
              Amenities
            </Link>
            <Link href="#contact" className="transition hover:text-brand">
              Contact
            </Link>
          </div>
          <a
            href={PHONE_TEL}
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark sm:inline-flex"
          >
            Call Now
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-ink text-white">
          <Image
            src="/images/newbgimage.png"
            alt="Clobek Heritage Place properties"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/64 via-ink/22 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/35 to-transparent" />

          <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col justify-end px-6 py-14 sm:py-18 lg:py-16">
            <Reveal>
              <div className="max-w-4xl">
                <span className="inline-flex border-y border-white/45 py-2 text-xs font-bold tracking-[0.32em] text-white uppercase">
                  Sabon-Lugbe East Extension Layout
                </span>
                <h1 className="mt-8 font-serif text-4xl leading-[1.05] text-white sm:text-6xl sm:leading-[0.94] lg:text-8xl">
                  Live in Lugbe&apos;s most refined gated estate.
                </h1>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-dark"
                  >
                    Call Us Now
                    <Phone className="h-4 w-4" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 backdrop-blur transition hover:bg-white/20"
                  >
                    Chat on WhatsApp
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-end">
                <div>
                <span className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                  The Estate
                </span>
                <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                  Everything you want in a property, planned into one estate.
                </h2>
                </div>
                <p className="max-w-2xl text-lg leading-8 text-muted">
                  Clobek Heritage Place brings gated security, landscaped green
                  parks, tarred roads, dependable water, and a community center
                  together in one master-planned estate in Lugbe, Abuja, with six
                  property types to match your family and your budget.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-px overflow-hidden bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
              {amenities.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <FeatureCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="amenities" className="relative overflow-hidden bg-white py-20 sm:py-24">
          <Reveal>
            <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1fr] lg:items-center">
              <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                Pricing
              </span>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                Premium estate living with a clear, honest entry price.
              </h2>
              </div>
              <div className="relative overflow-hidden border border-ink/10 bg-champagne px-7 py-10 text-ink shadow-xl shadow-ink/5 sm:px-10">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-grove" />
                <h3 className="font-serif text-3xl text-ink sm:text-5xl">
                  Properties from{" "}
                  <span className="text-brand italic">
                    ₦{startingPrice} million
                  </span>
                </h3>
                <p className="mt-4 max-w-2xl text-muted">
                  Every price covers Land + DPC across all six
                  property types at Clobek Heritage Place. Terms and conditions
                  apply.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="house-types" className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 border-b border-ink/10 pb-10 lg:flex-row lg:items-end">
                <div>
                <span className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                  Property Types
                </span>
                <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                  Choose the property that fits{" "}
                  <span className="text-brand italic">your family.</span>
                </h2>
                </div>
                <p className="max-w-md text-muted">
                  From smart 3-bedroom terraces to 5-bedroom detached duplexes, every property comes with the full Clobek Heritage Place lifestyle.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {houseTypes.map((house, i) => (
                <Reveal key={house.id} delay={(i % 3) * 80}>
                  <div className="group h-full overflow-hidden border border-ink/10 bg-white shadow-lg shadow-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/10">
                    <div className="h-1.5 bg-gradient-to-r from-brand to-grove" />
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image
                        src={house.image}
                        alt={`${house.name} artist's impression`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-7">
                      <h3 className="font-serif text-2xl leading-tight text-ink">{house.name}</h3>
                      <p className="mt-2 text-sm font-medium text-muted">{house.size}</p>
                      <div className="mt-6 flex items-end justify-between border-t border-ink/10 pt-5">
                        <div>
                          <p className="font-serif text-2xl text-brand">
                            {formatNaira(house.price)}
                          </p>
                          <p className="mt-1 text-xs font-bold tracking-wide text-ink uppercase">
                            Land + DPC
                          </p>
                          <p className="mt-0.5 text-[11px] text-muted">
                            T&amp;Cs apply
                          </p>
                        </div>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-grove text-white transition group-hover:bg-brand"
                          aria-label={`Enquire about ${house.name}`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-champagne py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="lg:sticky lg:top-28">
                <span className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                  Why Clobek Heritage Place
                </span>
                <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                  The estate that sets the standard in Lugbe.
                </h2>
                <p className="mt-5 max-w-md text-muted">
                  Access, security, documentation, shared spaces, and room to grow:
                  we planned the practical things so that living here feels
                  effortless.
                </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {whyUs.map((item, i) => (
                    <div
                      key={item.title}
                      className={`relative overflow-hidden border border-ink/10 p-8 shadow-xl shadow-ink/5 ${
                        i % 2 === 1 ? "bg-grove-light lg:mt-10" : "bg-sand"
                      }`}
                    >
                      <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand to-grove" />
                      <p className="font-serif text-4xl text-brand">0{i + 1}</p>
                      <h3 className="mt-8 font-serif text-2xl text-ink">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24 sm:py-28">
          <Reveal>
            <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <span className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                  Inspection & Availability
                </span>
                <h2 className="mt-4 max-w-4xl font-serif text-3xl leading-tight text-ink sm:text-6xl lg:text-7xl">
                  Your address in Lugbe&apos;s finest estate is waiting.
                </h2>
              </div>
              <div className="relative overflow-hidden border border-ink/10 bg-champagne p-7 text-ink shadow-xl shadow-ink/5">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-grove" />
                <p className="font-serif text-3xl text-ink">
                  Ready to own at <span className="text-brand italic">Clobek Heritage Place?</span>
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Speak with us today for current availability and pricing, and book a private inspection of the estate in Lugbe, Abuja.
                </p>
                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
                  >
                    Call Now
                    <Phone className="h-4 w-4" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand/40 hover:text-brand"
                  >
                    Chat on WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </a>
                  </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="py-24 sm:py-28">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              Contact Clobek Heritage Place
            </h2>
            <div className="mt-8 space-y-4 text-muted">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4 text-brand" />
                Plot 1946, Sabon-Lugbe East Extension Layout, Lugbe, Abuja FCT
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-brand" />
                <a href={PHONE_TEL} className="text-ink hover:text-brand">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4 text-brand" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-brand"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-grove py-12 text-center text-white/65">
        <p className="font-serif text-2xl text-white">
          Clobek <span className="text-brand italic">Heritage</span> Place
        </p>
        <p className="mt-2 text-sm">Lugbe, Abuja FCT</p>
        <p className="mt-6 text-xs">
          &copy; {new Date().getFullYear()} Clobek Nig. Ltd. All rights reserved.
        </p>
        <p className="mx-auto mt-2 max-w-md text-xs text-white/45">
          Pricing, availability, and documentation should be confirmed with
          Clobek Heritage Place before purchase.
        </p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 sm:hidden">
        <a
          href={PHONE_TEL}
          className="flex items-center justify-center bg-grove py-4 text-sm font-semibold text-white"
        >
          Call Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-brand py-4 text-sm font-semibold text-white"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
