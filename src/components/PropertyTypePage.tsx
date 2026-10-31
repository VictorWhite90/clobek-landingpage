import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CtaButtons from "@/components/CtaButtons";
import ShareButton from "@/components/ShareButton";
import { DirectionsLink } from "@/components/Directions";
import { SITE_ADDRESS } from "@/lib/location";
import { ScrollProgress, SectionReveal } from "@/components/ScrollEffects";
import InspectionSection from "@/components/InspectionSection";
import { PriceTag } from "@/components/Offer";
import PaymentPlan from "@/components/PaymentPlan";
import { LandDpcFeature } from "@/components/LandDpc";
import { SignaturePillars } from "@/components/SellingPoints";
import { OFFER_PITCH, propertyHeadline } from "@/lib/pricing";
import {
  getPropertyPath,
  originalPrice,
  propertyTypes,
  type PropertyType,
} from "@/lib/property-types";


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

// Photo of the team working on site for "The difference". If the hero already
// uses it, fall back to the overhead DPC shot so the page never repeats a photo.
function pillarsImage(property: PropertyType) {
  const workers = {
    src: "/images/clobeck1/heritage-site-2-hd.jpg",
    alt: "Workers building DPC foundations at Clobek Heritage Place",
    caption: "Real site · Work in progress",
  };
  const dpc = {
    src: "/images/clobeck1/heritage-dpc-overhead.jpg",
    alt: "Overhead drone view of a DPC foundation being built on a plot at Clobek Heritage Place",
    caption: "From above · DPC on the plots",
  };
  return property.heroImage.src === workers.src ? dpc : workers;
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

  return (
    <main className="min-h-screen flex-1 bg-white text-ink">
      <ScrollProgress />
      <header className="relative z-10 border-b border-ink/10 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/#home"
            aria-label="Back to Clobek Heritage Place"
            className="link-fx inline-flex items-center gap-2 text-sm font-semibold text-grove hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            Clobek Heritage Place
          </Link>
          <div className="flex items-center gap-2">
            <ShareButton
              headline={`${propertyHeadline(property.name)}.`}
              path={getPropertyPath(property.slug)}
            />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 bg-grove px-4 text-sm font-semibold text-white transition hover:bg-brand"
            >
              Enquire <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-grove text-white">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-8 sm:px-8 sm:py-16 lg:min-h-[590px] lg:grid-cols-[0.95fr_1fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[620px] pb-10 lg:mr-auto lg:ml-0">
            <div className="relative aspect-[1.38] overflow-hidden rounded-[24px] border-[8px] border-white shadow-2xl shadow-black/30 sm:rounded-[30px] sm:border-[10px]">
              <Image
                src={property.heroImage.src}
                alt={property.heroImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 bg-[#092b21]/85 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-sm">
                {property.heroImage.caption.toUpperCase()}
              </span>
            </div>
            <div className="absolute -bottom-1 right-2 flex min-w-[225px] items-center gap-5 rounded-xl bg-white px-5 py-4 text-ink shadow-xl sm:bottom-0 sm:right-[-22px] sm:px-6 sm:py-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-grove/65">
                  Plot + DPC
                </p>
                <p className="mt-1">
                  <PriceTag price={property.price} original={originalPrice(property)} size="sm" />
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-grove">
                  Discounted price
                </p>
              </div>
              <span className="h-12 w-px bg-ink/10" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                  Approx. size
                </p>
                <p className="mt-1 text-xl font-bold text-ink">{property.size} sqm</p>
                <p className="mt-1 text-[10px] text-muted">Approximate</p>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <h1
              className="rise font-serif text-3xl leading-[1.1] text-white sm:text-4xl xl:text-5xl xl:leading-[1.08]"
              style={{ animationDelay: "0.1s" }}
            >
              Buy a prime Plot + DPC in Abuja, Off Airport Road,{" "}
              <span className="italic text-[#e4bd67]">
                Inside Lugbe&apos;s premium estate for {property.name}.
              </span>
            </h1>
            <div className="mt-4 inline-flex items-start gap-2 rounded-xl border border-[#e4bd67]/40 bg-[#e4bd67]/10 px-4 py-3 text-sm font-semibold text-white sm:text-base">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e4bd67]" />
              <span>
                <span className="text-[#e4bd67]">Location:</span> {SITE_ADDRESS}
                <DirectionsLink tone="dark" block className="mt-2" />
              </span>
            </div>
            <CtaButtons subject={property.name} tone="dark" className="mt-6" />
            <p
              className="rise mt-5 max-w-lg text-base leading-7 text-white/80"
              style={{ animationDelay: "0.6s" }}
            >
              {OFFER_PITCH}
            </p>
          </div>
        </div>
      </section>

      <SectionReveal>
        <LandDpcFeature size={property.size} />
      </SectionReveal>

      <SectionReveal>
        <section className="bg-white pb-4 pt-6 sm:pb-16 sm:pt-8">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10">
            <Reveal>
              <div>
                <span className="text-xs font-bold tracking-[0.3em] text-brand uppercase">
                  Site Progress
                </span>
                <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                  We&apos;ve <span className="text-brand italic">already started.</span>
                </h2>
                <p className="mt-5 max-w-md font-semibold leading-7 text-ink/80">
                  DPC works are under way at Clobek Heritage Place, right inside a
                  fully built-up neighbourhood. This is real footage from the
                  site, not a render.
                </p>
                <p className="mt-6 flex items-start gap-2 text-sm text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {SITE_ADDRESS}
                </p>
                <DirectionsLink className="mt-2 ml-6" />
                <div className="hidden lg:block">
                <CtaButtons subject={property.name} className="mt-6" />
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
          <div className="mx-auto mt-6 max-w-7xl px-6 lg:hidden">
                <CtaButtons subject={property.name} />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <PaymentPlan
          price={property.price}
          original={originalPrice(property)}
          name={property.name}
        />
      </SectionReveal>

      <SectionReveal>
        <SignaturePillars image={pillarsImage(property)} />
      </SectionReveal>

      <SectionReveal>
        <section className="mx-auto max-w-7xl px-5 pb-4 pt-16 sm:px-8 sm:pb-6 sm:pt-24">
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
                  <div className="relative aspect-[1.4] group sheen overflow-hidden bg-grove-light">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        property.gallery.length === 1
                          ? "(min-width: 1024px) 896px, 100vw"
                          : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      }
                      className="object-cover img-fx"
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
      </SectionReveal>


      <SectionReveal>
        <InspectionSection subject={property.name} />
      </SectionReveal>

      <SectionReveal>
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
                Compare the other available property types. Prices shown are for Plot
                + DPC; terms and availability should be confirmed with Clobek.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherOptions.map((option) => (
                <article key={option.slug} className="card-fx min-w-0 bg-white">
                  <Link
                    href={getPropertyPath(option.slug)}
                    aria-label={`View details for ${option.name}`}
                    className="group block"
                  >
                    <div className="relative aspect-[1.45] sheen overflow-hidden bg-grove-light">
                      <Image
                        src={option.image}
                        alt={`${option.name} at Clobek Heritage Place`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover img-fx"
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
                            Plot + DPC
                          </p>
                          <p className="mt-1">
                            <PriceTag price={option.price} original={originalPrice(option)} size="sm" />
                          </p>
                        </div>
                        <span className="card-icon inline-flex h-10 w-10 shrink-0 items-center justify-center bg-grove text-white">
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
      </SectionReveal>

      <SectionReveal>
        <section className="bg-grove px-5 py-14 text-white sm:px-8 sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4bd67]">
                Make it yours
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Visit Clobek Heritage Place.
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Book a site visit or call to ask us about any of the property types.
              </p>
              <p className="mt-4 inline-flex items-start gap-2 text-sm font-semibold text-white sm:text-base">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e4bd67]" />
                <span>
                  <span className="text-[#e4bd67]">Location:</span> {SITE_ADDRESS}
                  <DirectionsLink tone="dark" block className="mt-2" />
                </span>
              </p>
            </div>
            <CtaButtons subject={property.name} tone="dark" />
          </div>
        </section>
      </SectionReveal>
    </main>
  );
}
