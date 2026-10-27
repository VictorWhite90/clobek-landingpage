import { MessageCircle, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

const PHONE_TEL = "tel:+2348029823593";
const DEFAULT_WHATSAPP_URL =
  "https://wa.me/2348029823593?text=Hello%20Clobek%20Heritage%20Place%2C%20I%27m%20interested%20in%20the%20Lugbe%20estate.";

export default function InspectionSection({
  whatsappUrl = DEFAULT_WHATSAPP_URL,
}: {
  whatsappUrl?: string;
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
            <div className="mt-7 flex flex-col gap-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Call Now
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl}
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
  );
}
