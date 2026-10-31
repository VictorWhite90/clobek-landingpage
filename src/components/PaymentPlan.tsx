"use client";

import { useState } from "react";
import LimitedOffer from "@/components/LimitedOffer";
import {
  DEPOSIT_PERCENT,
  INSTALMENT_MONTHS,
  INSTALMENT_QUARTERS,
  formatNairaFull,
  formatNairaShort,
  paymentPlan,
} from "@/lib/pricing";

// Offer comparison (why act now), then the calculator: deposit + instalments
// = discounted price. On phones the figures collapse into label/amount rows.
export default function PaymentPlan({
  price,
  original = price,
  name,
}: {
  price: number;
  original?: number;
  name: string;
}) {
  const [cadence, setCadence] = useState<"monthly" | "quarterly">("monthly");
  const plan = paymentPlan(price);
  const count = cadence === "monthly" ? INSTALMENT_MONTHS : INSTALMENT_QUARTERS;
  const amount = cadence === "monthly" ? plan.monthly : plan.quarterly;

  const items = [
    {
      label: "Discounted price · Plot + DPC",
      value: formatNairaShort(plan.total),
      was: formatNairaShort(Math.round(original * 1_000_000)),
      accent: true,
    },
    {
      label: `${DEPOSIT_PERCENT}% deposit today`,
      value: formatNairaFull(plan.deposit),
    },
    {
      label: `${count} ${cadence === "monthly" ? "monthly" : "quarterly"} payments`,
      value: `${formatNairaFull(amount)} / ${cadence === "monthly" ? "month" : "quarter"}`,
    },
  ];

  return (
    <>
    <section id="payment-plan" aria-label="Flexible payment plan" className="bg-champagne text-ink">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
          Flexible payment plan
        </p>
        <p className="mt-2 font-serif text-2xl sm:text-3xl">
          {DEPOSIT_PERCENT}% today.{" "}
          <span className="italic text-brand">Balance over {INSTALMENT_MONTHS} months.</span>
        </p>

        <div className="mt-5 rounded-2xl border border-ink/10 bg-white p-5 shadow-xl shadow-ink/5 sm:p-7">
          <div className="flex flex-col items-start gap-3">
            <h3 className="font-serif text-xl sm:text-2xl">What you would be paying</h3>
            <div
              role="tablist"
              aria-label="Payment frequency"
              className="inline-flex rounded-full border border-ink/15 p-0.5 text-xs font-semibold sm:text-sm"
            >
              {(["monthly", "quarterly"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={cadence === option}
                  onClick={() => setCadence(option)}
                  className={`rounded-full px-4 py-1.5 capitalize transition ${
                    cadence === option ? "bg-grove text-white" : "text-muted hover:text-ink"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <dl className="mt-5 divide-y divide-ink/10 border-t border-ink/10 md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-start md:gap-6 md:divide-y-0 md:pt-5">
            {items.map((item, i) => (
              <div key={item.label} className="contents">
                {i > 0 && (
                  <span className="hidden pt-5 font-serif text-3xl text-brand md:block" aria-hidden="true">
                    {i === 1 ? "+" : "="}
                  </span>
                )}
                <div className="py-3 md:py-0">
                  <dt className="text-xs text-muted md:text-[11px] md:font-bold md:uppercase md:tracking-[0.18em]">
                    {item.label}
                  </dt>
                  <dd className="mt-1">
                    <span
                      className={`block font-serif text-2xl leading-tight md:text-3xl ${
                        item.accent ? "text-brand" : "text-ink"
                      }`}
                    >
                      {item.value}
                    </span>
                    {item.was && (
                      <span className="mt-1.5 block text-sm font-medium text-ink/60 sm:text-base">
                        <span className="relative -mx-1 inline-block px-1 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-ink/50 before:content-['']">
                          {item.was}
                        </span>
                      </span>
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <p className="mt-4 border-t border-ink/10 pt-4 text-xs font-bold leading-5 text-ink/70">
            {name}, at the discounted price.{" "}
            {cadence === "monthly" ? "Monthly" : "Quarterly"} payments over{" "}
            {INSTALMENT_MONTHS} months; amounts are approximate.{" "}
            <span className="text-sm">T&amp;Cs apply.</span>
          </p>
        </div>

      </div>
    </section>

    <LimitedOffer price={price} original={original} subject={name} />
    </>
  );
}
