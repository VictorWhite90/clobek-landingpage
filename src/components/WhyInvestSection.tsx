import Image from "next/image";
import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

const PHONE_TEL = "tel:+2348029823593";

const investReasons = [
  {
    title: "Table Land in a Fully Built-Up Area",
    shortBody: "Firm table land inside a fully built-up, inhabited area. No sand-filling, no hills. Build today.",
    shortProof: "Not satisfied after a visit? Don't commit your money.",
    body: "This isn't land in a remote location that will take five to ten years to become habitable. Clobek Heritage Place sits inside a fully developed, fully inhabited environment, on firm table land: no sand-filling, no hills, no surprises. Build today and move in.",
    proof: "Come and verify it yourself. If you're not satisfied, don't commit your money.",
    image: "/images/clobeck1/heritage-table-land.jpg",
    imageAlt: "Aerial view of the flat Clobek Heritage Place site, surrounded by a built-up neighbourhood",
    imageLabel: "Clobek Heritage Place · aerial view",
  },
  {
    title: "Premium Infrastructure, Built to Last",
    shortBody: "Solid roads and infrastructure that still stand strong in our estates 14+ years on.",
    shortProof: "See it at Crown Estate, Pleasant Places and TFP Vintage Homes.",
    body: "We invest heavily in estate infrastructure because it is what drives the value of your property. More than 14 years after construction, the infrastructure in our earlier estates remains solid, and our subscribers have seen strong value growth in every neighbourhood we build in.",
    proof: "See it for yourself at Clobek Crown Estate, Lugbe; Pleasant Places, Apo; and TFP Vintage Homes, Wuye.",
  },
  {
    title: "More Than a Plot: DPC Included",
    shortBody: "We do the DPC for you, and work has started. Build now or phase it over 3 years.",
    shortProof: "Early-bird pricing for a limited time.",
    body: "You're not buying bare land. We handle the DPC for you, and work is already under way on site. Start building right away, or phase your development over up to three years. Whatever your plan, we'll work it out with you.",
    proof: "Early-bird pricing is available for a limited time.",
    image: "/images/clobeck1/heritage-site-3.jpg",
    imageAlt: "DPC foundations at Clobek Heritage Place with finished buildings in the neighbourhood behind",
    imageLabel: "Clobek Heritage Place · DPC works",
  },
  {
    title: "Trusted to Deliver Beyond Expectations",
    shortBody: "From 3D design to finished estate, our projects turn out better than planned.",
    shortProof: "Visit our estates. No pressure.",
    body: "Every project starts with a vision and a 3D design, then careful execution down to every block and every nail. Our finished estates consistently turn out better than the designs they started from, and Clobek Heritage Place will be no different.",
    proof: "Visit TFP Vintage Homes, Wuye; Clobek Crown Estate, Lugbe; and Pleasant Places, Apo. No pressure: if you're not convinced, walk away.",
    image: "/images/heritage-3d-design.jpg",
    imageAlt: "3D design of the terrace properties at Clobek Heritage Place at night",
    imageLabel: "Clobek Heritage Place · 3D design",
  },
  {
    title: "Green, Quiet and Peaceful",
    shortBody: "Lawns, gardens and trees designed in, for a calm, green environment.",
    shortProof: "Tour Pleasant Places, Apo, to see it.",
    body: "We've earned a reputation as one of the greenest, most eco-friendly estate developers around. Our estates are designed around nature, with landscaped lawns, gardens, trees and flowers that make them calm, beautiful places to live.",
    proof: "Tour Pleasant Places, Apo, and see what Clobek Heritage Place will feel like.",
    image: "/images/pleasant-places/pleasant-places-avenue.jpg",
    imageAlt: "Tree-lined avenue at Pleasant Places, Apo",
    imageLabel: "Pleasant Places, Apo",
  },
];

export default function WhyInvestSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="why-invest" className="bg-white py-4 sm:py-16">
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
              Don&apos;t just take our word for it. Visit our estates, see the
              work for yourself, and decide with confidence.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10 sm:mt-12">
          {investReasons.map((reason, i) => (
            <Reveal key={reason.title}>
              <div
                className={`grid gap-6 py-6 md:py-10 ${
                  reason.image
                    ? "lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12"
                    : ""
                }`}
              >
                <div className="grid gap-4 md:grid-cols-[5rem_1fr] md:gap-10">
                  <p className="font-serif text-4xl text-brand">0{i + 1}</p>
                  <div>
                    <h3
                      className={`font-serif leading-tight text-ink ${
                        compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
                      }`}
                    >
                      {reason.title}
                    </h3>
                    <p
                      className={
                        compact
                          ? "mt-3 text-base leading-7 text-muted sm:text-lg"
                          : "mt-5 text-lg leading-8 text-muted sm:text-xl sm:leading-9"
                      }
                    >
                      {compact ? reason.shortBody : reason.body}
                    </p>
                    <p
                      className={`font-semibold text-grove ${
                        compact ? "mt-3 text-sm sm:text-base" : "mt-5 text-base sm:text-lg"
                      }`}
                    >
                      {compact ? reason.shortProof : reason.proof}
                    </p>
                    <a
                      href={PHONE_TEL}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark"
                    >
                      Call Now
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>
                </div>
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

      </div>
    </section>
  );
}
