import Image from "next/image";
import { Hammer, LandPlot, Layers, MapPin } from "lucide-react";
import { DirectionsLink } from "@/components/Directions";
import { SITE_ADDRESS } from "@/lib/location";

// Explains what "Plot + DPC" means: the plot plus a damp-proof course
// foundation the developer builds for the buyer.
export function LandDpcFeature({ size }: { size: number }) {
  const steps = [
    {
      icon: Layers,
      title: "Your DPC",
      detail: "Foundation built to damp-proof course level, done for you",
    },
    {
      icon: Hammer,
      title: "Your build",
      detail: "Start right away, or phase it over up to 3 years",
    },
    {
      icon: LandPlot,
      title: "Your plot",
      detail: `Approx. ${size} sqm plot inside Clobek Crown Estate, Lugbe's premium estate`,
    },
  ];

  return (
    <section aria-label="What Plot + DPC includes" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-x-14 lg:gap-y-8">
        <div>
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
            More than a plot.{" "}
            <span className="italic text-brand">Your foundation is already laid.</span>
          </h2>
          <ol className="mt-8 space-y-5">
            {steps.map(({ icon: Icon, title, detail }, i) => (
              <li key={title} className="flex gap-4">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-grove text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold">
                    {i + 1}
                  </span>
                </span>
                <span>
                  <span className="block font-semibold text-ink">{title}</span>
                  <span className="mt-0.5 block text-sm leading-6 text-muted">{detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <figure className="group sheen relative aspect-[4/3] self-center lg:col-start-2 lg:row-span-2 lg:row-start-1 overflow-hidden border border-ink/10 shadow-xl shadow-ink/10">
          <Image
            src="/images/clobeck1/heritage-site-3.jpg"
            alt="DPC foundation blockwork on a plot at Clobek Heritage Place"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover img-fx"
          />
          <figcaption className="absolute bottom-0 left-0 bg-ink/75 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
            Real site · DPC in progress
          </figcaption>
        </figure>
        {/* Below the photo on mobile; under the steps on desktop. */}
        <p className="flex items-start gap-2 border-t border-ink/10 pt-5 text-sm font-semibold text-ink sm:text-base lg:col-start-1 lg:row-start-2">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
          <span>
            <span className="text-brand">Location:</span> {SITE_ADDRESS}
            <DirectionsLink block className="mt-1.5" />
          </span>
        </p>
      </div>
    </section>
  );
}
