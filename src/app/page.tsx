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
import ImageSlideshow from "@/components/ImageSlideshow";
import { formatNaira } from "@/lib/format";

const PHONE_DISPLAY = "+234 802 982 3593";
const PHONE_TEL = "tel:+2348029823593";
const WHATSAPP_URL =
  "https://wa.me/2348029823593?text=Hello%20Clobek%20Heritage%20Place%2C%20I%27m%20interested%20in%20the%20Lugbe%20estate.";
const WHATSAPP_VISIT_URL =
  "https://wa.me/2348029823593?text=Hello%20Clobek%20Heritage%20Place%2C%20I%27d%20like%20to%20book%20a%20site%20visit%20to%20the%20Lugbe%20estate.";
const SITE_ADDRESS = "Plot 1946, Sabon-Lugbe East Extension Layout, Lugbe, Abuja FCT";

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

const sitePhotos = [
  {
    src: "/images/clobeck1/heritage-site-3.jpg",
    alt: "DPC foundations at Clobek Heritage Place with finished homes in the neighbourhood behind",
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
    description: "A completed Clobek estate with tarred roads, street lighting, landscaped frontages and finished homes.",
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
    description: "One of our greenest estates, with landscaped lawns, gardens and trees throughout.",
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
    description: "A completed estate with mature landscaping, tree-lined streets and a residents' swimming pool.",
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

const investReasons = [
  {
    title: "Table Land in a Fully Built-Up Area",
    body: "This isn't land in a remote location that will take five to ten years to become habitable. Clobek Heritage Place sits inside a fully developed, fully inhabited environment, on firm table land: no sand-filling, no hills, no surprises. Build today and move in.",
    proof: "Come and verify it yourself. If you're not satisfied, don't pay a kobo.",
    image: "/images/clobeck1/heritage-table-land.jpg",
    imageAlt: "Aerial view of the flat Clobek Heritage Place site, surrounded by a built-up neighbourhood",
    imageLabel: "Clobek Heritage Place · aerial view",
  },
  {
    title: "Premium Infrastructure, Built to Last",
    body: "We invest heavily in estate infrastructure because it is what drives the value of your property. More than 14 years after construction, the infrastructure in our earlier estates remains solid, and our subscribers have seen strong value growth in every neighbourhood we build in.",
    proof: "See it for yourself at Clobek Crown Estate, Lugbe; Pleasant Places, Apo; and TFP Vintage Homes, Wuye.",
    slides: [
      { src: "/images/tfp/tfp-vintage-homes-home.jpg", alt: "Completed home with landscaped frontage at TFP Vintage Homes, Wuye", label: "TFP Vintage Homes, Wuye" },
      { src: "/images/pleasant-places/pleasant-places-duplexes.jpg", alt: "Completed duplexes with gated driveways at Pleasant Places, Apo", label: "Pleasant Places, Apo" },
      { src: "/images/clobeck1/clobek-phase1-street.jpg", alt: "Tarred road, street lights and kerbs at Clobek Crown Estate, Lugbe", label: "Clobek Crown Estate, Lugbe" },
    ],
  },
  {
    title: "More Than a Plot: DPC Included",
    body: "You're not buying bare land. We handle the DPC for you, and work is already under way on site. Start building right away, or phase your development over up to three years. Whatever your plan, we'll work it out with you.",
    proof: "Early-bird pricing is available for a limited time.",
    image: "/images/clobeck1/heritage-site-3.jpg",
    imageAlt: "DPC foundations at Clobek Heritage Place with finished homes in the neighbourhood behind",
    imageLabel: "Clobek Heritage Place · DPC works",
  },
  {
    title: "Trusted to Deliver Beyond Expectations",
    body: "Every project starts with a vision and a 3D design, then careful execution down to every block and every nail. Our finished estates consistently turn out better than the designs they started from, and Clobek Heritage Place will be no different.",
    proof: "Visit TFP Vintage Homes, Wuye; Clobek Crown Estate, Lugbe; and Pleasant Places, Apo. No pressure: if you're not convinced, walk away.",
    image: "/images/heritage-3d-design.jpg",
    imageAlt: "3D design of the terrace homes at Clobek Heritage Place at night",
    imageLabel: "Clobek Heritage Place · 3D design",
  },
  {
    title: "Green, Quiet and Peaceful",
    body: "We've earned a reputation as one of the greenest, most eco-friendly estate developers around. Our estates are designed around nature, with landscaped lawns, gardens, trees and flowers that make them calm, beautiful places to come home to.",
    proof: "Tour Pleasant Places, Apo, and see what Clobek Heritage Place will feel like.",
    image: "/images/pleasant-places/pleasant-places-avenue.jpg",
    imageAlt: "Tree-lined avenue at Pleasant Places, Apo",
    imageLabel: "Pleasant Places, Apo",
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
    <div className="flex-1">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-grove/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="#home" className="flex items-center">
            <Image
              src="/images/clobek_Nigeria_Limited_logo.jpg"
              alt="Clobek Nigeria Limited"
              width={466}
              height={98}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </Link>
          <div className="hidden items-center gap-10 text-sm font-medium text-white/70 md:flex">
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
            src="/images/newbgimage.jpg"
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
                  Live in Lugbe&apos;s premium gated estate.
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

        <section className="relative overflow-hidden py-12 sm:py-16">
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

            <Reveal>
              <div className="relative mt-12 overflow-hidden border border-ink/10 bg-champagne p-8 sm:p-12">
                <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand to-grove" />
                <p className="max-w-4xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
                  Away from the hustle and bustle of the city centre, yet close
                  enough to the city and the airport.{" "}
                  <span className="text-brand italic">This is it.</span>
                </p>
                <p className="mt-6 max-w-4xl text-lg leading-8 text-muted">
                  A quiet, peaceful and welcoming environment, with a
                  captivating ambience and awe-inspiring greenery. Clobek
                  Heritage Place comes from the developers of Clobek Crown
                  Estate, known as one of the most premium residential estates
                  on the Lugbe and Airport Road axis.
                </p>
                <p className="mt-6 text-base font-semibold text-grove sm:text-lg">
                  Experienced. Trusted. Beyond expectations.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
              {amenities.map((item) => (
                <Reveal key={item.title}>
                  <FeatureCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="amenities" className="relative overflow-hidden bg-white py-12 sm:py-16">
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

        <section id="house-types" className="py-12 sm:py-16">
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
              {houseTypes.map((house) => (
                <Reveal key={house.id}>
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
                    <div className="flex items-start justify-between gap-4 p-7">
                      <div>
                        <h3 className="font-serif text-2xl leading-tight text-ink">{house.name}</h3>
                        <p className="mt-2 text-sm font-medium text-muted">{house.size}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="font-serif text-2xl text-brand">
                          {formatNaira(house.price)}
                        </p>
                        <p className="mt-1 text-xs font-bold tracking-wide text-ink uppercase">
                          Land + DPC
                        </p>
                        <p className="mt-0.5 text-[11px] text-muted">
                          T&amp;Cs apply
                        </p>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Enquire about ${house.name} on WhatsApp`}
                          className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-grove text-white transition group-hover:bg-brand"
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

        <section className="bg-champagne py-16 sm:py-20">
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

        <section id="why-invest" className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                <div>
                  <span className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                    Why Invest
                  </span>
                  <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                    Reasons to invest in{" "}
                    <span className="text-brand italic">Clobek Heritage Place.</span>
                  </h2>
                </div>
                <p className="max-w-md text-muted">
                  Don&apos;t just take our word for it. Visit our estates, see
                  the work for yourself, and decide with confidence.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
              {investReasons.map((reason, i) => (
                <Reveal key={reason.title}>
                  <div
                    className={`grid gap-6 py-8 md:py-10 ${
                      reason.image || reason.slides ? "lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12" : ""
                    }`}
                  >
                    <div className="grid gap-4 md:grid-cols-[5rem_1fr] md:gap-10">
                      <p className="font-serif text-4xl text-brand">0{i + 1}</p>
                      <div>
                        <h3 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                          {reason.title}
                        </h3>
                        <p className="mt-5 text-lg leading-8 text-muted sm:text-xl sm:leading-9">{reason.body}</p>
                        <p className="mt-5 text-base font-semibold text-grove sm:text-lg">{reason.proof}</p>
                        <a
                          href={PHONE_TEL}
                          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark"
                        >
                          Call Now
                          <Phone className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    {reason.slides && <ImageSlideshow slides={reason.slides} />}
                    {reason.image && (
                      <figure className="relative aspect-[3/2] overflow-hidden border border-ink/10 shadow-lg shadow-ink/5">
                        <Image
                          src={reason.image}
                          alt={reason.imageAlt ?? ""}
                          fill
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="object-cover"
                        />
                        <figcaption className="absolute bottom-0 left-0 bg-ink/70 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white uppercase">
                          {reason.imageLabel}
                        </figcaption>
                      </figure>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-10 flex flex-col items-start justify-between gap-6 bg-champagne p-7 sm:flex-row sm:items-center sm:p-10">
                <p className="max-w-xl font-serif text-2xl text-ink sm:text-3xl">
                  Seeing is believing. <span className="text-brand italic">Book a site visit.</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
                  >
                    Call Now
                    <Phone className="h-4 w-4" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand/40 hover:text-brand"
                  >
                    Chat on WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="site-progress" className="bg-white py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
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
                <p className="mt-6 text-sm font-semibold text-grove">
                  Come and see it for yourself.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP_VISIT_URL}
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
                    Call {PHONE_DISPLAY}
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

        <section id="our-estates" className="bg-champagne py-12 sm:py-16">
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

          <div className="mt-12 space-y-14">
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

        <section className="relative overflow-hidden bg-white py-12 sm:py-16">
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

        <section id="contact" className="py-12 sm:py-16">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              Contact Clobek Heritage Place
            </h2>
            <div className="mt-8 space-y-4 text-muted">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4 text-brand" />
                {SITE_ADDRESS}
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
    </div>
  );
}
