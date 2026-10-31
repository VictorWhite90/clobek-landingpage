import CtaButtons from "@/components/CtaButtons";
import {
  DEPOSIT_PERCENT,
  INSTALMENT_MONTHS,
  OFFER_ENDS,
  OFFER_SLOTS,
  STANDARD_DEPOSIT_PERCENT,
  STANDARD_MONTHS,
  discountedNaira,
  formatNairaShort,
} from "@/lib/pricing";

export default function LimitedOffer({
  price,
  original,
  subject,
}: {
  price: number;
  original: number;
  subject: string;
}) {
  const terms = [
    {
      label: "Discounted price",
      now: formatNairaShort(discountedNaira(price)),
      was: formatNairaShort(Math.round(original * 1_000_000)),
    },
    {
      label: "Minimal initial deposit",
      now: `${DEPOSIT_PERCENT}%`,
      was: `${STANDARD_DEPOSIT_PERCENT}%`,
    },
    { label: "Foundation", now: "DPC Included", was: "" },
    {
      label: "Extended payment plan",
      now: `${INSTALMENT_MONTHS} months`,
      was: `${STANDARD_MONTHS} months`,
    },
  ];

  return (
    <section id="limited-offer" aria-label="Limited offer" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e4bd67]">
          Limited offer
        </p>
        <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
          Why you should not miss this offer
        </h2>

        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 lg:grid-cols-4">
          {terms.map((term) => (
            <div key={term.label} className="bg-ink px-3 py-4 sm:px-6 sm:py-5">
              <dt className="min-h-6 text-[9px] font-bold uppercase leading-3 tracking-[0.14em] text-white/50 sm:text-[11px] sm:tracking-[0.16em]">
                {term.label}
              </dt>
              <dd className="mt-2">
                <span className="block whitespace-nowrap font-serif text-lg leading-tight text-[#e4bd67] sm:text-3xl">
                  {term.now}
                </span>
                {term.was && (
                  <span className="mt-1.5 block text-sm font-medium text-white/80 sm:text-base">
                    {/* Strike line runs a little past the figure on both sides. */}
                    <span className="relative -mx-1 inline-block px-1 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-white/60 before:content-['']">
                      {term.was}
                    </span>
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 inline-block rounded-full border border-[#e4bd67]/50 px-3 py-1 text-xs font-bold text-[#e4bd67] sm:text-sm">
          Ends {OFFER_ENDS} · First {OFFER_SLOTS} subscribers only
        </p>
        <p className="mt-2 text-sm font-semibold text-white/70">T&amp;Cs apply.</p>

        <CtaButtons actions={["call", "book", "enquire"]} subject={subject} tone="dark" className="mt-5" />
      </div>
    </section>
  );
}
