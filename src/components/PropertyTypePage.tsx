import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import WhyInvestSection from "@/components/WhyInvestSection";
import InspectionSection from "@/components/InspectionSection";
import {
  DiscountChip,
  OfferBanner,
  PriceTag,
} from "@/components/Offer";
import PaymentPlan from "@/components/PaymentPlan";
import { SignaturePillars } from "@/components/SellingPoints";
import { discountedNaira, formatNairaShort } from "@/lib/pricing";
import {
  getPropertyPath,
  propertyTypes,
  type PropertyType,
} from "@/lib/property-types";

const PHONE_TEL = "tel:+2348029823593";
const SITE_ADDRESS =
  "Plot 1946, Sabon-Lugbe East Extension Layout, Lugbe, Abuja FCT";

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

function getWhatsAppUrl(property: PropertyType, intent: "enquire" | "visit") {
  const message =
    intent === "visit"
      ? `Hello Clobek Heritage Place, I'd like to book a site visit to see the ${property.name}.`
      : `Hello Clobek Heritage Place, I'm interested in the ${property.name}. Please send me more details.`;

  return `https://wa.me/2348029823593?text=${encodeURIComponent(message)}`;
}

export default function PropertyTypePage({
  property,
}: {
  property: PropertyType;
}) {
  const otherOptions = propertyTypes.filter(
    (option) => option.slug !== property.slug,
  );
  const whatsappUrl = getWhatsAppUrl(property, "enquire");
  const visitUrl = getWhatsAppUrl(property, "visit");

  return (
    <main className="min-h-screen flex-1 bg-white text-ink">
      <OfferBanner />
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
            <p className="rise font-serif text-4xl leading-[1.08] text-white xl:text-5xl" style={{ animationDelay: "0.1s" }}>
              Own a property in Lugbe&apos;s prime location,{" "}
              <span className="italic text-[#e4bd67]">inside Lugbe&apos;s premium estate.</span>
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
              <DiscountChip />
            </div>
            <h1 className="mt-3 font-serif text-3xl leading-[1.1] text-white xl:text-4xl">
              {property.name}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-7 text-white/75">
              Explore this property at Clobek Heritage Place. Approx.{" "}
              {property.size} sqm, Land + DPC now{" "}
              {formatNairaShort(discountedNaira(property.price))}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-3 bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-dark"
              >
                Book a site visit <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#payment-plan"
                className="inline-flex min-h-12 items-center border border-white/35 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Payment plan
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-white/65">
              <MapPin className="h-4 w-4 text-[#e4bd67]" />
              Sabon-Lugbe East Extension Layout, off Airport Road
            </div>
          </div>

          <div className="relative order-2 mx-auto w-full max-w-[620px] pb-8 lg:order-2 lg:ml-auto">
            <div className="relative aspect-[1.38] overflow-hidden rounded-[24px] border-[8px] border-white shadow-2xl shadow-black/30 sm:rounded-[30px] sm:border-[10px]">
              <Image
                src={property.image}
                alt={`Architectural impression of the ${property.name} at Clobek Heritage Place`}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 bg-[#092b21]/85 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-sm">
                {property.name.toUpperCase()} · ARTIST&apos;S IMPRESSION
              </span>
            </div>
            <div className="absolute -bottom-1 left-2 flex min-w-[225px] items-center gap-5 rounded-xl bg-white px-5 py-4 text-ink shadow-xl sm:bottom-0 sm:left-[-22px] sm:px-6 sm:py-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-grove/65">
                  Land + DPC
                </p>
                <p className="mt-1">
                  <PriceTag price={property.price} size="sm" />
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-grove">
                  5% discount applied
                </p>
              </div>
              <span className="h-12 w-px bg-ink/10" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                  Approx. size
                </p>
                <p className="mt-1 text-xl font-bold text-ink">
                  {property.size} sqm
                </p>
                <p className="mt-1 text-[10px] text-muted">Approximate</p>
              </div>
            </div>
          </div>

          <div className="order-1 max-w-xl lg:hidden">
            <p className="rise font-serif text-3xl leading-[1.1] text-white sm:text-4xl" style={{ animationDelay: "0.1s" }}>
              Own a property in Lugbe&apos;s prime location,{" "}
              <span className="italic text-[#e4bd67]">inside Lugbe&apos;s premium estate.</span>
            </p>
            <div className="mt-6 border-t border-white/15 pt-5">
              <DiscountChip />
            </div>
            <h1 className="mt-3 font-serif text-2xl leading-[1.1] text-white sm:text-3xl">
              {property.name}
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
              Explore this property at Clobek Heritage Place. Approx.{" "}
              {property.size} sqm, Land + DPC now{" "}
              {formatNairaShort(discountedNaira(property.price))}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 bg-brand px-5 text-sm font-bold text-white transition hover:bg-brand-dark"
              >
                Book a site visit <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#payment-plan"
                className="inline-flex min-h-11 items-center border border-white/35 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Payment plan
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/65">
              <MapPin className="h-4 w-4 shrink-0 text-[#e4bd67]" />
              Sabon-Lugbe East Extension Layout, off Airport Road
            </div>
          </div>
        </div>
      </section>

      <SignaturePillars />

      <PaymentPlan price={property.price} name={property.name} />

      {property.features && property.features.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Thoughtfully planned
              </p>
              <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
                Inside the {property.name}.
              </h2>
            </div>
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {property.features.map((feature) => (
                <li key={feature.title} className="border-t border-ink/10 py-5">
                  <h3 className="text-sm font-bold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{feature.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}



      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Exterior views
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              See the property in 3D.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Explore architectural renderings of {property.name} at Clobek
            Heritage Place.
          </p>
        </div>

        <div
          className={`mt-8 grid gap-5 ${
            property.gallery.length === 1
              ? "mx-auto max-w-4xl"
              : property.gallery.length === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {property.gallery.map((image) => (
            <Reveal key={image.src}>
              <figure className="min-w-0">
                <div className="relative aspect-[1.4] overflow-hidden bg-grove-light">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      property.gallery.length === 1
                        ? "(min-width: 1024px) 896px, 100vw"
                        : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    }
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 text-sm font-medium text-muted">
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-4 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10">
          <Reveal>
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                Site Progress
              </span>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                We&apos;ve <span className="text-brand italic">already started.</span>
              </h2>
              <p className="mt-5 max-w-md leading-7 text-muted">
                DPC works are under way at Clobek Heritage Place, right inside a
                fully built-up neighbourhood. This is real footage from the
                site, not a render.
              </p>
              <p className="mt-6 flex items-start gap-2 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {SITE_ADDRESS}
              </p>
              <p className="mt-6 text-sm font-semibold text-grove">
                Come and see it for yourself.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark"
                >
                  Book a Site Visit
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand/40 hover:text-brand"
                >
                  Call +234 802 982 3593
                  <Phone className="h-4 w-4" />
                </a>
              </div>
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
              <figure className="relative aspect-[4/3] overflow-hidden border border-ink/10 shadow-lg shadow-ink/5">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 bg-ink/70 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white uppercase">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>



      <WhyInvestSection compact />

      <InspectionSection whatsappUrl={visitUrl} />

      <section className="bg-[#f3f5f1] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-7 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                More at Clobek Heritage Place
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Other property options.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Compare the other available property types. Prices shown are for Land
              + DPC; terms and availability should be confirmed with Clobek.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherOptions.map((option) => (
              <article key={option.slug} className="min-w-0 bg-white">
                <Link
                  href={getPropertyPath(option.slug)}
                  aria-label={`View details for ${option.name}`}
                  className="block"
                >
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
                    <p className="mt-2 text-sm text-muted">
                      Approx. {option.size} sqm
                    </p>
                    <div className="mt-4 flex items-end justify-between gap-3 border-t border-ink/10 pt-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                          Land + DPC
                        </p>
                        <p className="mt-1">
                          <PriceTag price={option.price} size="sm" />
                        </p>
                      </div>
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-grove text-white transition hover:bg-brand">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-grove px-5 py-14 text-white sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4bd67]">
              Make it yours
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Come see Clobek Heritage Place.
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Book a site visit or ask us about the {property.name}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 bg-brand px-5 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              Book a site visit <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 border border-white/35 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Enquire on WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
