import Image from "next/image";
import { LandPlot, Layers, MapPin, Plane } from "lucide-react";

// What Clobek is selling, as an image-led opener. Optional children render
// under the copy (e.g. the property tag and call to action).
export function SignatureBanner({ children }: { children?: React.ReactNode }) {
  return (
    <section aria-label="Prime location and proven infrastructure">
      <div className="relative overflow-hidden text-white sm:min-h-[600px]">
        <Image
          src="/images/clobeck1/heritage-aerial-wide.jpg"
          alt="Aerial view of Clobek Heritage Place within a built-up part of Lugbe"
          fill
          sizes="100vw"
          className="settle object-cover"
        />
        <div className="absolute inset-0 bg-ink/55 sm:bg-transparent sm:bg-gradient-to-t sm:from-ink sm:via-ink/55 sm:to-ink/10" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-5 pb-10 pt-24 sm:min-h-[600px] sm:px-8 sm:pb-16 sm:pt-0">
          <p
            className="rise text-[11px] font-bold uppercase tracking-[0.2em] text-[#e4bd67] sm:text-xs sm:tracking-[0.25em]"
            style={{ animationDelay: "0.1s" }}
          >
            Prime location · Proven infrastructure
          </p>
          <h2 className="mt-3 max-w-4xl font-serif text-3xl leading-[1.08] sm:mt-4 sm:text-6xl sm:leading-[1.05]">
            <span className="rise block" style={{ animationDelay: "0.35s" }}>
              Own a property in Lugbe&apos;s prime location,
            </span>
            <span
              className="rise block italic text-[#e4bd67]"
              style={{ animationDelay: "0.8s" }}
            >
              inside Lugbe&apos;s premium estate.
            </span>
          </h2>
          {children && (
            <div className="rise" style={{ animationDelay: "1.25s" }}>
              {children}
            </div>
          )}
        </div>
      </div>

    </section>
  );
}

// Location first, then infrastructure, as one compact strip.
const highlights = [
  {
    icon: MapPin,
    title: "Inside a fully built and occupied estate",
    detail: "Situated inside Clobek Crown Estate, fully developed and occupied for over 14 years",
  },
  {
    icon: Plane,
    title: "Proximity to the airport and city centre",
    detail: "20-minute drive to the city centre, 15 minutes from the airport",
  },
  {
    icon: LandPlot,
    title: "Flat table land",
    detail: "No sand-filling, no hills. Build and move in now",
  },
  {
    icon: Layers,
    title: "DPC included",
    detail: "Your foundation is built for you, ready for your building",
  },
];

export function SignaturePillars() {
  return (
    <section aria-label="Why Clobek Heritage Place is different" className="border-b border-ink/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 sm:pt-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">The difference</p>
        <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
          Why Clobek Heritage Place is{" "}
          <span className="italic text-brand">different and unique.</span>
        </h2>
      </div>
      <ul className="mx-auto mt-6 grid max-w-7xl grid-cols-2 gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, title, detail }) => (
          <li key={title} className="group flex items-start gap-3 bg-white px-4 py-4 transition-colors duration-500 hover:bg-champagne sm:px-5 sm:py-5">
            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:scale-125" strokeWidth={1.7} />
            <span>
              <span className="block text-sm font-semibold text-ink">{title}</span>
              <span className="mt-0.5 block text-xs leading-4 text-muted">{detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
