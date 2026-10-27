import Image from "next/image";
import { ArrowRight, Hammer, LandPlot, Layers } from "lucide-react";

// Explains what "Land + DPC" means: the plot plus a damp-proof course
// foundation the developer builds for the buyer.
export function LandDpcFeature({ size }: { size: number }) {
  const steps = [
    {
      icon: LandPlot,
      title: "Your land",
      detail: `Approx. ${size} sqm plot inside Clobek Crown Estate`,
    },
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
  ];

  return (
    <section aria-label="What Land + DPC includes" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Land <span className="text-ink/40">+</span> DPC
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl">
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
        <figure className="relative aspect-[4/3] overflow-hidden border border-ink/10 shadow-xl shadow-ink/10">
          <Image
            src="/images/clobeck1/heritage-site-3.jpg"
            alt="DPC foundation blockwork on a plot at Clobek Heritage Place"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 bg-ink/75 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
            Real site · DPC in progress
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function LandDpcStrip({ visitUrl }: { visitUrl: string }) {
  return (
    <section aria-label="Land + DPC" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex items-center gap-4 sm:gap-8">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-ink/20" />
          <p className="flex items-center gap-3 font-serif text-3xl text-ink sm:gap-4 sm:text-5xl">
            Land
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xl text-white sm:h-12 sm:w-12 sm:text-2xl">
              +
            </span>
            <span className="italic text-brand">DPC</span>
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-ink/20" />
        </div>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-muted sm:text-base">
          Every price covers your plot and its foundation, built for you.
          <br className="hidden sm:block" />{" "}
          <a
            href={visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-grove underline decoration-brand/40 underline-offset-4 transition hover:text-brand"
          >
            Come see it for yourself. Book an inspection <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
