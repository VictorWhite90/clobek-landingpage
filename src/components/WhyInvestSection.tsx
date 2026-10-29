import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";


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
    fullOnly: true,
    shortBody: "Tarred roads, street lighting, drainage, a manned gate and water supply.",
    shortProof: "Built to last: still standing strong in our estates 14+ years on.",
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
    shortBody: "Clobek Nig. Limited is reputed for building premium estates: TFP Vintage Homes, Wuye; Pleasant Places, Apo; and Clobek Crown Estate, Lugbe.",
    shortProof: "Visit our estates. No pressure.",
    body: "Every project starts with a vision and a 3D design, then careful execution down to every block and every nail. Our finished estates consistently turn out better than the designs they started from, and Clobek Heritage Place will be no different.",
    proof: "Visit TFP Vintage Homes, Wuye; Clobek Crown Estate, Lugbe; and Pleasant Places, Apo. No pressure: if you're not convinced, walk away.",
    image: "/images/heritage-3d-design.jpg",
    imageAlt: "3D design of the terrace properties at Clobek Heritage Place at night",
    imageLabel: "Clobek Heritage Place · 3D design",
  },
];

const DEFAULT_VISIT_URL =
  "https://wa.me/2348029823593?text=Hello%20Clobek%20Heritage%20Place%2C%20I%27d%20like%20to%20book%20a%20site%20visit%20to%20the%20Lugbe%20estate.";

export default function WhyInvestSection({
  compact = false,
  visitUrl = DEFAULT_VISIT_URL,
}: {
  compact?: boolean;
  visitUrl?: string;
}) {
  const reasons = compact
    ? investReasons.filter((reason) => !("fullOnly" in reason))
    : investReasons;
  return (
    <section id="why-invest" className="bg-white py-4 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div>
            <div>
              <h2 className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                Reasons to invest in{" "}
                <span className="text-brand italic">Clobek Heritage Place.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10 sm:mt-12">
          {reasons.map((reason, i) => (
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

        <Reveal>
          <div className="mt-8 flex flex-col items-start gap-5">
            <p className="max-w-xl text-lg leading-8 text-ink">
              Don&apos;t just take our word for it. Visit our estates, see the
              work for yourself, and decide with confidence.
            </p>
            <a
              href={visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              Book an inspection <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
