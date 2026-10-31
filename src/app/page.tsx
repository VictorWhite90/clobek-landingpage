import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { DirectionsLink, SiteMap } from "@/components/Directions";
import { SITE_ADDRESS } from "@/lib/location";
import Reveal from "@/components/Reveal";
import CtaButtons from "@/components/CtaButtons";
import { ScrollProgress, SectionReveal } from "@/components/ScrollEffects";
import WhyInvestSection from "@/components/WhyInvestSection";
import InspectionSection from "@/components/InspectionSection";
import { PriceTag } from "@/components/Offer";
import {
  
  DEPOSIT_PERCENT,
  INSTALMENT_MONTHS,
  discountedNaira,
  formatNairaShort,
} from "@/lib/pricing";
import { getPropertyPath, originalPrice, propertyTypes } from "@/lib/property-types";

const PHONE_DISPLAY = "+234 802 982 3593";
const PHONE_TEL = "tel:+2348029823593";
const WHATSAPP_URL =
  "https://wa.me/2348029823593?text=Hello%20Clobek%20Heritage%20Place%2C%20I%27m%20interested%20in%20the%20Lugbe%20estate.";

const startingPrice = Math.min(...propertyTypes.map((property) => property.price));
const startingOriginal = originalPrice(
  propertyTypes.find((property) => property.price === startingPrice)!,
);

const sitePhotos = [
  {
    src: "/images/clobeck1/heritage-site-3.jpg",
    alt: "DPC foundations at Clobek Heritage Place with finished buildings in the neighbourhood behind",
    caption: "DPC foundations",
  },
  {
    src: "/images/clobeck1/heritage-site-2.jpg",
    alt: "Workers laying blocks on the Clobek Heritage Place site",
    caption: "Work in progress",
  },
  {
    src: "/images/clobeck1/heritage-site-1.jpg",
    alt: "Blockwork and starter bars on the Clobek Heritage Place site",
    caption: "Blockwork & starter bars",
  },
];

// Projects without images are hidden until photos are added.
const pastProjects = [
  {
    name: "Clobek Crown Estate",
    location: "Lugbe, Abuja",
    description: "Lugbe's benchmark for premium estate living. Completed, fully occupied, and the trusted foundation on which Clobek Heritage Place now rises.",
    images: [
      { src: "/images/clobeck1/clobek-phase1-home.jpg", alt: "Finished home with landscaped frontage at Clobek Crown Estate, Lugbe" },
      { src: "/images/clobeck1/clobek-phase1-street.jpg", alt: "Tarred road with street lights at Clobek Crown Estate, Lugbe" },
      { src: "/images/clobeck1/clobek-phase1-frontage.jpg", alt: "Homes and fencing along the road at Clobek Crown Estate, Lugbe" },
      { src: "/images/clobeck1/clobek-phase1-bungalow.jpg", alt: "Bungalow with paved driveway at Clobek Crown Estate, Lugbe" },
    ],
  },
  {
    name: "Pleasant Places",
    location: "Apo, Abuja",
    description: "Apo's premium address for serene, elegant living, where thoughtful design meets a lifestyle residents are proud to own.",
    images: [
      { src: "/images/pleasant-places/pleasant-places-entrance.jpg", alt: "Landscaped entrance and sign at Pleasant Places, Apo" },
      { src: "/images/pleasant-places/pleasant-places-terraces.jpg", alt: "Completed terrace homes along the road at Pleasant Places, Apo" },
      { src: "/images/pleasant-places/pleasant-places-avenue.jpg", alt: "Tree-lined tarred avenue at Pleasant Places, Apo" },
      { src: "/images/pleasant-places/pleasant-places-duplexes.jpg", alt: "Completed duplexes with gated driveways at Pleasant Places, Apo" },
      { src: "/images/pleasant-places/pleasant-places-street.jpg", alt: "Green, landscaped street at Pleasant Places, Apo" },
      { src: "/images/pleasant-places/pleasant-places-apartments.jpg", alt: "Completed apartment block at Pleasant Places, Apo" },
      { src: "/images/pleasant-places/pleasant-places-gated-home.jpg", alt: "Occupied home behind a gate at Pleasant Places, Apo" },
    ],
  },
  {
    name: "TFP Vintage Homes",
    location: "Wuye, Abuja",
    description: "A landmark of timeless elegance in Wuye, delivered with the craftsmanship and lasting value that define every estate we build.",
    images: [
      { src: "/images/tfp/tfp-vintage-homes-gardens.jpg", alt: "Palm trees and landscaped gardens at TFP Vintage Homes, Wuye" },
      { src: "/images/tfp/tfp-vintage-homes-home.jpg", alt: "Completed home with sculpted hedges at TFP Vintage Homes, Wuye" },
      { src: "/images/tfp/tfp-vintage-homes-pool.jpg", alt: "Residents' swimming pool at TFP Vintage Homes, Wuye" },
      { src: "/images/tfp/tfp-vintage-homes-street.jpg", alt: "Green, tree-lined street at TFP Vintage Homes, Wuye" },
      { src: "/images/tfp/tfp-vintage-homes-residents.jpg", alt: "Resident walking past homes and parked cars at TFP Vintage Homes, Wuye" },
      { src: "/images/tfp/tfp-vintage-homes-hedges.jpg", alt: "Landscaped hedges and palms along a curved street at TFP Vintage Homes, Wuye" },
    ],
  },
];

export default function Home() {
  return (
    <div className="flex-1">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-grove/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="#home" className="flex items-center">
            <Image
              src="/images/clobek_Nigeria_Limited_logo.jpg"
              alt="Clobek Nigeria Limited"
              width={466}
              height={98}
                sizes="(min-width: 640px) 200px, 160px"
              priority
              className="h-9 w-auto sm:h-11"
            />
          </Link>
          <div className="hidden items-center gap-10 text-sm font-medium text-white/70 md:flex">
            <Link href="#house-types" className="link-fx hover:text-brand">
              Property Types
            </Link>
            <Link href="#amenities" className="link-fx hover:text-brand">
              Amenities
            </Link>
            <Link href="#contact" className="link-fx hover:text-brand">
              Contact
            </Link>
          </div>
          <a
            href={PHONE_TEL}
            className="hidden btn-fx btn-solid rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 sm:inline-flex"
          >
            Call Now
          </a>
        </nav>
      </header>

      <main>
        <ScrollProgress />
        <section id="home" className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-ink text-white">
          <Image
            src="/images/clobeck1/heritage-aerial-wide.jpg"
            alt="Aerial view of the flat, fenced plots at Clobek Heritage Place, inside Clobek Crown Estate, Lugbe"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/40 to-ink/10" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/70 to-transparent" />

          <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col justify-end px-6 py-14 sm:py-18 lg:py-16">
            <Reveal>
              <div className="max-w-4xl">
                <span className="inline-flex border-y border-white/45 py-2 text-xs font-bold tracking-[0.32em] text-white uppercase">
                  Sabon-Lugbe East Extension Layout
                </span>
                <h1 className="mt-8 font-serif text-4xl leading-[1.05] text-white sm:text-6xl sm:leading-[0.94] lg:text-8xl">
                  Live in Lugbe&apos;s premium gated estate.
                </h1>
                <div className="mt-6 inline-flex max-w-xl flex-col gap-1 rounded-2xl border border-white/20 bg-ink/45 px-5 py-4 backdrop-blur">
                  <span className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-[0.18em] text-white uppercase">
                    Flexible payment plan
                  </span>
                  <p className="text-base text-white sm:text-lg">
                    Pay <strong>{DEPOSIT_PERCENT}% deposit</strong>, spread the balance over{" "}
                    <strong>{INSTALMENT_MONTHS} months</strong>, monthly or quarterly. Plot + DPC now from{" "}
                    <strong>{formatNairaShort(discountedNaira(startingPrice))}</strong>.
                  </p>
                </div>
                <CtaButtons tone="dark" className="mt-7" />
              </div>
            </Reveal>
          </div>
        </section>

        <SectionReveal>
          <section className="relative overflow-hidden py-4 sm:py-16">
            <div className="mx-auto max-w-7xl px-6">
              <Reveal>
                <div className="grid gap-6 lg:gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-end">
                  <div>
                  <span className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                    The Estate
                  </span>
                  <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                    Everything you want in a property, planned into one estate.
                  </h2>
                  </div>
                  <div className="relative border-l-4 border-brand pl-6 sm:pl-8">
                    <p className="max-w-2xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
                      Away from the hustle and bustle of the city centre, yet close
                      enough to the city and the airport.{" "}
                      <span className="text-brand italic">
                        This is the estate that sets the standard in Lugbe.
                      </span>
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="relative mt-6 sm:mt-12 overflow-hidden border border-ink/10 bg-champagne p-8 sm:p-12">
                  <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand to-grove" />
                  <p className="max-w-4xl text-lg leading-8 text-muted">
                    Set in Sabon-Lugbe East Extension Layout, a sought-after
                    residential corridor in Abuja FCT, Clobek Heritage Place offers
                    a quiet, peaceful and welcoming environment, with a captivating
                    ambience and awe-inspiring greenery. It sits right
                    inside Clobek Crown Estate, known as one of the most premium
                    residential estates on the Lugbe and Airport Road axis.
                  </p>
                  <p className="mt-6 text-base font-semibold text-grove sm:text-lg">
                    Experienced. Trusted. Beyond expectations.
                  </p>
                </div>
              </Reveal>

            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="amenities" className="relative overflow-hidden bg-white py-4 sm:py-16">
            <Reveal>
              <div className="relative mx-auto grid max-w-7xl gap-6 lg:gap-10 px-6 lg:grid-cols-[0.85fr_1fr] lg:items-center">
                <div>
                <span className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                  Pricing
                </span>
                <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                  Premium estate living at a price that fits comfortably.
                </h2>
                </div>
                <div className="relative overflow-hidden border border-ink/10 bg-champagne px-7 py-8 sm:py-10 text-ink shadow-xl shadow-ink/5 sm:px-10">
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-grove" />
                  <h3 className="font-serif text-3xl text-ink sm:text-5xl">
                    Properties from{" "}
                    <span className="text-brand italic">
                      {formatNairaShort(discountedNaira(startingPrice))}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    <span className="line-through">₦{startingOriginal}M</span> ·{" "}
                    Discounted price on every property type
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="border border-ink/10 bg-white px-4 py-3">
                      <p className="font-serif text-2xl text-ink">{DEPOSIT_PERCENT}%</p>
                      <p className="text-sm text-muted">Initial deposit</p>
                    </div>
                    <div className="border border-ink/10 bg-white px-4 py-3">
                      <p className="font-serif text-2xl text-ink">{INSTALMENT_MONTHS} months</p>
                      <p className="text-sm text-muted">To pay the balance, monthly or quarterly</p>
                    </div>
                    
                  </div>
                  <p className="mt-4 max-w-2xl text-sm text-muted">
                    Every price covers Plot + DPC across all six property types at
                    Clobek Heritage Place. Terms and conditions apply.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>
        </SectionReveal>

        <SectionReveal>
          <span id="payment-plan" aria-hidden="true" />
          <section id="house-types" className="py-4 sm:py-16">
            <div className="mx-auto max-w-7xl px-6">
              <Reveal>
                <div className="flex flex-col justify-between gap-6 border-b border-ink/10 pb-6 sm:pb-10 lg:flex-row lg:items-end">
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

              <div className="mt-6 sm:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {propertyTypes.map((house) => (
                  <Reveal key={house.slug}>
                    <div className="card-fx group h-full overflow-hidden border border-ink/10 bg-white shadow-lg shadow-ink/5">
                      <div className="h-1.5 bg-gradient-to-r from-brand to-grove" />
                      <div className="relative h-72 w-full group sheen overflow-hidden">
                        <Image
                          src={house.image}
                          alt={`${house.name} artist's impression`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover img-fx"
                        />
                        <Link
                          href={getPropertyPath(house.slug)}
                          aria-label={`View details for ${house.name}`}
                          className="absolute inset-0"
                        />
                      </div>
                      <div className="flex items-start justify-between gap-4 p-7">
                        <div>
                          <h3 className="font-serif text-2xl leading-tight text-ink">
                            <Link
                              href={getPropertyPath(house.slug)}
                              className="transition hover:text-brand"
                            >
                              {house.name}
                            </Link>
                          </h3>
                          <p className="mt-2 text-sm font-medium text-muted">
                            Approx. {house.size} sqm
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                              <p>
                            <PriceTag price={house.price} original={originalPrice(house)} size="sm" />
                          </p>
                          <p className="mt-1 text-xs font-bold tracking-wide text-ink uppercase">
                            Plot + DPC
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-muted">
                            T&amp;Cs apply
                          </p>
                          <Link
                            href={getPropertyPath(house.slug)}
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-grove transition hover:text-brand"
                          >
                            View details
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="site-progress" className="bg-white py-4 sm:py-16">
            <div className="mx-auto grid max-w-7xl gap-6 lg:gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <Reveal>
                <div>
                  <span className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                    Site Progress
                  </span>
                  <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                    We&apos;ve <span className="text-brand italic">already started.</span>
                  </h2>
                  <p className="mt-5 max-w-md leading-7 text-muted">
                    DPC works are under way at Clobek Heritage Place, right inside
                    a fully built-up neighbourhood. This is real footage from the
                    site, not a render.
                  </p>
                  <p className="mt-6 flex items-start gap-2 text-sm text-muted">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {SITE_ADDRESS}
                  </p>
                  <DirectionsLink className="mt-2 ml-6" />
                  <CtaButtons className="mt-6" />
                </div>
              </Reveal>
              <Reveal>
                <figure className="relative aspect-video overflow-hidden border border-ink/10 bg-ink shadow-xl shadow-ink/10">
                  <video
                    src="/videos/clobek-heritage-dpc-aerial.mp4"
                    poster="/videos/clobek-heritage-dpc-aerial-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Aerial drone footage of DPC works on the Clobek Heritage Place site"
                    className="h-full w-full object-cover"
                  />
                  <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 bg-ink/70 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white uppercase">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                    Real site footage · DPC works
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <div className="mx-auto mt-6 grid max-w-7xl gap-4 px-6 sm:grid-cols-3">
              {sitePhotos.map((photo) => (
                <Reveal key={photo.src}>
                  <figure className="relative aspect-[4/3] group sheen overflow-hidden border border-ink/10 shadow-lg shadow-ink/5">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover img-fx"
                    />
                    <figcaption className="absolute bottom-0 left-0 bg-ink/70 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white uppercase">
                      {photo.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <WhyInvestSection />
        </SectionReveal>

        <SectionReveal>
          <InspectionSection />
        </SectionReveal>

        <SectionReveal>
          <section id="our-estates" className="bg-champagne py-4 sm:py-16">
            <div className="mx-auto max-w-7xl px-6">
              <Reveal>
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                      Our Track Record
                    </span>
                    <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                      Estates we&apos;ve <span className="text-brand italic">already delivered.</span>
                    </h2>
                  </div>
                  <p className="max-w-md text-muted">
                    Real photos from completed Clobek estates. What we promise on
                    paper, you can walk through in person.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-6 sm:mt-12 space-y-8 sm:space-y-14">
              {pastProjects
                .filter((project) => project.images.length > 0)
                .map((project, i) => (
                  <div key={project.name}>
                    <div className="mx-auto max-w-7xl px-6">
                      <h3 className="font-serif text-2xl text-ink sm:text-3xl">
                        {project.name}
                        <span className="ml-3 align-middle text-sm font-medium text-muted">
                          {project.location}
                        </span>
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{project.description}</p>
                    </div>
                    <div className="relative mt-6 overflow-hidden">
                      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-champagne to-transparent sm:w-24" />
                      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-champagne to-transparent sm:w-24" />
                      <div
                        className={`marquee-track flex w-max gap-4 ${i % 2 === 1 ? "marquee-reverse" : ""}`}
                        style={{ animationDuration: `${project.images.length * 9}s` }}
                      >
                        {[...project.images, ...project.images].map((image, j) => (
                          <div
                            key={`${image.src}-${j}`}
                            aria-hidden={j >= project.images.length}
                            className="relative h-56 w-80 shrink-0 overflow-hidden border border-ink/10 shadow-lg shadow-ink/5 sm:h-72 sm:w-[27rem]"
                          >
                            <Image
                              src={image.src}
                              alt={j >= project.images.length ? "" : image.alt}
                              fill
                              sizes="(min-width: 640px) 432px, 320px"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="contact" className="py-4 sm:py-16">
            <div className="mx-auto max-w-xl px-6 text-center">
              <h2 className="font-serif text-3xl text-ink sm:text-4xl">
                Contact Clobek Heritage Place
              </h2>
              <div className="mt-8 space-y-4 text-muted">
                <p className="flex items-start justify-center gap-2">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" />
                  {SITE_ADDRESS}
                </p>
                <DirectionsLink />
                <p className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-brand" />
                  <span className="font-semibold text-ink">Call Now:</span>
                  <a href={PHONE_TEL} className="text-ink hover:text-brand">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4 text-brand" />
                  <span className="font-semibold text-ink">WhatsApp Now:</span>
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
            <div className="mx-auto mt-10 max-w-5xl px-6">
              <SiteMap />
            </div>
          </section>
        </SectionReveal>
      </main>

      <footer className="border-t border-ink/10 bg-grove py-8 sm:py-12 text-center text-white/65">
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
    </div>
  );
}
