import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  CarFront,
  ChefHat,
  MapPin,
  Maximize2,
  Sofa,
  UsersRound,
} from "lucide-react";
import { formatNaira } from "@/lib/format";

const property = {
  name: "4-Bedroom Terrace + B.Q",
  size: 167,
  price: 31.5,
  units: 18,
  parking: 3,
  image: "/images/4-bedroom-terrace-bq.jpeg",
};

const whatsappUrl =
  "https://wa.me/2348029823593?text=Hello%20Clobek%20Heritage%20Place%2C%20I%27m%20interested%20in%20the%204-Bedroom%20Terrace%20%2B%20B.Q.%20Please%20send%20me%20more%20details.";
const visitUrl =
  "https://wa.me/2348029823593?text=Hello%20Clobek%20Heritage%20Place%2C%20I%27d%20like%20to%20book%20a%20site%20visit%20to%20see%20the%204-Bedroom%20Terrace%20%2B%20B.Q.";

const features = [
  {
    icon: BedDouble,
    title: "Four bedrooms",
    detail: "Bedrooms arranged across the upper floors",
  },
  {
    icon: Bath,
    title: "Private bathrooms",
    detail: "En-suite bathrooms shown on the bedroom plans",
  },
  {
    icon: Sofa,
    title: "Two lounge spaces",
    detail: "Main lounge and an upper-floor family lounge",
  },
  {
    icon: ChefHat,
    title: "Kitchen and dining",
    detail: "Separate kitchen and dedicated dining area",
  },
  {
    icon: UsersRound,
    title: "Boys' Quarters",
    detail: "Separate B.Q. shown on the ground-floor plan",
  },
  {
    icon: CarFront,
    title: "Three-car parking",
    detail: "Parking provision shown in the prototype",
  },
];

const floorPlans = [
  {
    name: "Ground floor",
    image: "/images/prototype-03-ground-floor.png",
    alt: "Ground floor plan showing the main lounge, dining, kitchen, foyer, visitor toilet, entrance porch, and B.Q.",
    details: "Main lounge · Dining · Kitchen · Foyer · Visitor toilet · B.Q.",
  },
  {
    name: "First floor",
    image: "/images/prototype-03-first-floor.png",
    alt: "First floor plan for the 4-bedroom terrace duplex prototype.",
    details: "Bedrooms · Family lounge · Bathrooms · Balcony",
  },
  {
    name: "Second floor",
    image: "/images/prototype-03-second-floor.png",
    alt: "Second floor plan for the 4-bedroom terrace duplex prototype.",
    details: "Additional bedrooms · Bathrooms · Balcony",
  },
];

const otherOptions = [
  {
    name: "3-Bedroom Terrace",
    size: "Approx. 141 sqm",
    price: 22,
    image: "/images/3-bedroom-terrace.jpeg",
  },
  {
    name: "3-Bedroom Terrace + B.Q",
    size: "Approx. 163 sqm",
    price: 27,
    image: "/images/3-bedroom-terrace-bq-2.jpeg",
  },
  {
    name: "4-Bedroom Row House Duplex + B.Q",
    size: "Approx. 300 sqm",
    price: 37,
    image: "/images/clobek-rowhouse-a.jpg",
  },
  {
    name: "5-Bedroom Row House Duplex + B.Q",
    size: "Approx. 375 sqm",
    price: 43,
    image: "/images/clobek-duplex.jpg",
  },
  {
    name: "5-Bedroom Detached Duplex + B.Q",
    size: "Approx. 465 sqm",
    price: 47,
    image: "/images/5-bedroom-detached-duplex-bq.jpeg",
  },
];

export const metadata: Metadata = {
  title: "4-Bedroom Terrace + B.Q | Clobek Heritage Place",
  description:
    "Explore the 4-bedroom terrace duplex with B.Q. at Clobek Heritage Place. Approx. 167 sqm, three-car parking, with Land + DPC from ₦31.5M.",
};

export default function FourBedroomTerracePage() {
  return (
    <main className="min-h-screen flex-1 bg-white text-ink">
      <header className="relative z-10 border-b border-ink/10 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/#home"
            aria-label="Back to Clobek Heritage Place"
            className="inline-flex items-center gap-2 text-sm font-semibold text-grove transition hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            Clobek Heritage Place
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-2 bg-grove px-4 text-sm font-semibold text-white transition hover:bg-brand"
          >
            Enquire <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-grove text-white">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-8 sm:px-8 sm:py-20 lg:min-h-[590px] lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:py-16">
          <div className="order-2 hidden max-w-xl lg:order-1 lg:block">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e4bd67]">
              Clobek Heritage Place · Lugbe, Abuja
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              A little more room for life.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-7 text-white/75">
              {property.name}, designed across three levels with room to gather,
              unwind, and make space for family.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-3 bg-[#d7a63e] px-6 text-sm font-bold text-[#11251d] transition hover:bg-[#e6bd65]"
              >
                Book a site visit <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#floor-plans"
                className="inline-flex min-h-12 items-center border border-white/35 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View floor plans
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-white/65">
              <MapPin className="h-4 w-4 text-[#e4bd67]" />
              Sabon-Lugbe East Extension Layout, off Airport Road
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-[620px] pb-8 lg:order-2 lg:ml-auto">
            <div className="relative aspect-[1.38] overflow-hidden rounded-[24px] border-[8px] border-white shadow-2xl shadow-black/30 sm:rounded-[30px] sm:border-[10px]">
              <Image
                src={property.image}
                alt="Architectural render of terrace homes at Clobek Heritage Place"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 bg-[#092b21]/85 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-sm">
                PROTOTYPE 03 · ARCHITECTURAL RENDER
              </span>
            </div>
            <div className="absolute -bottom-1 left-2 flex min-w-[225px] items-center gap-5 rounded-xl bg-white px-5 py-4 text-ink shadow-xl sm:bottom-0 sm:left-[-22px] sm:px-6 sm:py-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-grove/65">
                  Land + DPC
                </p>
                <p className="mt-1 font-serif text-3xl text-[#10251d]">
                  {formatNaira(property.price)}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-grove">
                  Starting price
                </p>
              </div>
              <span className="h-12 w-px bg-ink/10" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                  Plot size
                </p>
                <p className="mt-1 text-xl font-bold text-ink">{property.size} sqm</p>
                <p className="mt-1 text-[10px] text-muted">Approximate</p>
              </div>
            </div>
          </div>

          <div className="order-2 max-w-xl lg:hidden">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e4bd67]">
              Clobek Heritage Place · Lugbe, Abuja
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-[1.04] text-white sm:text-5xl">
              A little more room for life.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
              {property.name}, designed across three levels with room to gather,
              unwind, and make space for family.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 bg-[#d7a63e] px-5 text-sm font-bold text-[#11251d] transition hover:bg-[#e6bd65]"
              >
                Book a site visit <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#floor-plans"
                className="inline-flex min-h-11 items-center border border-white/35 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View floor plans
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/65">
              <MapPin className="h-4 w-4 shrink-0 text-[#e4bd67]" />
              Sabon-Lugbe East Extension Layout, off Airport Road
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Property facts" className="border-b border-ink/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-ink/10 sm:grid-cols-4 sm:divide-y-0">
          <div className="px-5 py-5 text-center sm:py-6">
            <p className="text-lg font-bold text-ink">4 + B.Q</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">Bedrooms</p>
          </div>
          <div className="px-5 py-5 text-center sm:py-6">
            <p className="text-lg font-bold text-ink">{property.size} sqm</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">Plot size</p>
          </div>
          <div className="px-5 py-5 text-center sm:py-6">
            <p className="text-lg font-bold text-ink">{property.parking} cars</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">Parking</p>
          </div>
          <div className="px-5 py-5 text-center sm:py-6">
            <p className="text-lg font-bold text-ink">{property.units} units</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">Prototype 03</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Thoughtfully planned</p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
              The details make it feel like home.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              The prototype plans map out everyday living across three floors,
              balancing shared family spaces with private bedrooms and a
              separate B.Q.
            </p>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, detail }) => (
              <article key={title} className="flex gap-4 border-t border-ink/10 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#e7eee8] text-grove">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="floor-plans" className="bg-[#f3f5f1] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-7 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Prototype 03</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Explore the floor plans.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              The architectural drawings show how the home is arranged, from
              the shared ground-floor spaces to the upper-floor bedrooms.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {floorPlans.map((plan, index) => (
              <article key={plan.name} className="min-w-0 bg-white">
                <div className="relative aspect-[1.18] overflow-hidden bg-white">
                  <Image
                    src={plan.image}
                    alt={plan.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-3"
                  />
                  <span className="absolute left-4 top-4 bg-grove px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    0{index + 1}
                  </span>
                </div>
                <div className="border-t border-ink/10 px-5 py-4">
                  <h3 className="font-serif text-xl text-ink">{plan.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted">{plan.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              On the ground
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Work in progress.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            These are real photos from Clobek Heritage Place, showing foundation
            and blockwork already under way on site.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <figure className="min-w-0">
            <div className="relative aspect-[1.55] overflow-hidden bg-grove-light">
              <Image
                src="/images/clobeck1/heritage-site-2.jpg"
                alt="Foundation blockwork and active construction at Clobek Heritage Place"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-ink/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                Work in progress
              </span>
            </div>
            <figcaption className="mt-3 text-sm font-medium text-muted">
              Foundation work across the site
            </figcaption>
          </figure>

          <figure className="min-w-0">
            <div className="relative aspect-[1.55] overflow-hidden bg-grove-light">
              <Image
                src="/images/clobeck1/heritage-site-1.jpg"
                alt="Estate blockwork and reinforcement bars at Clobek Heritage Place"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-ink/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                Blockwork &amp; starter bars
              </span>
            </div>
            <figcaption className="mt-3 text-sm font-medium text-muted">
              Structural blockwork taking shape
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-[#f3f5f1] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-7 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                More at Clobek Heritage Place
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Other land + home options.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Compare the other available home types. Prices shown are for Land
              + DPC; terms and availability should be confirmed with Clobek.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherOptions.map((option) => (
              <article key={option.name} className="min-w-0 bg-white">
                <div className="relative aspect-[1.45] overflow-hidden bg-grove-light">
                  <Image
                    src={option.image}
                    alt={`${option.name} at Clobek Heritage Place`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl leading-snug text-ink">
                    {option.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{option.size}</p>
                  <div className="mt-4 flex items-end justify-between gap-3 border-t border-ink/10 pt-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                        Land + DPC
                      </p>
                      <p className="mt-1 font-serif text-2xl text-brand">
                        {formatNaira(option.price)}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/2348029823593?text=${encodeURIComponent(`Hello Clobek Heritage Place, please send me details about the ${option.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${option.name} on WhatsApp`}
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-grove text-white transition hover:bg-brand"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-grove px-5 py-14 text-white sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4bd67]">Make it yours</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Come see Clobek Heritage Place.</h2>
            <p className="mt-3 text-sm text-white/70">Book a site visit or ask us about the 4-Bedroom Terrace + B.Q.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 bg-[#d7a63e] px-5 text-sm font-bold text-[#11251d] transition hover:bg-[#e6bd65]"
            >
              Book a site visit <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/#house-types"
              className="inline-flex min-h-12 items-center border border-white/35 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              More property types
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
