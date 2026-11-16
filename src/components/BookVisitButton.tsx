"use client";

import { ArrowRight, CalendarCheck } from "lucide-react";
import { whatsapp } from "@/components/CtaButtons";
import { trackMetaEvent } from "@/lib/meta-pixel";

// The headline call to action on each property page: a large "Book a site
// visit" button with a soft pulsing glow. Each click is reported to the Meta
// Pixel as a Lead, tagged with the property name.
export default function BookVisitButton({
  subject = "Clobek Heritage Place",
  className = "",
}: {
  subject?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsapp(`Hello Clobek Heritage Place, I'd like to book a site visit to see the ${subject}.`)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackMetaEvent("Lead", {
          content_name: subject,
          content_category: "Book a site visit",
        })
      }
      className={`btn-fx btn-solid book-pulse inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-brand px-6 text-[15px] font-bold text-white shadow-xl shadow-brand/30 sm:min-h-16 sm:gap-3 sm:px-10 sm:text-lg ${className}`}
    >
      <CalendarCheck className="h-[18px] w-[18px] sm:h-6 sm:w-6" />
      Book a site visit
      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
    </a>
  );
}
