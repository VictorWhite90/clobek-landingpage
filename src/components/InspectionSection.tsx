import Reveal from "@/components/Reveal";
import CtaButtons from "@/components/CtaButtons";
import { DirectionsLink } from "@/components/Directions";


export default function InspectionSection({
  subject = "Clobek Heritage Place estate in Lugbe",
}: {
  subject?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-4 sm:py-16">
      <Reveal>
        <div className="relative mx-auto grid max-w-7xl gap-6 lg:gap-12 px-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
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
            <DirectionsLink className="mt-4" />
            <CtaButtons subject={subject} className="mt-6" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
