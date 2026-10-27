"use client";

import { useState } from "react";
import {
  DEPOSIT_PERCENT,
  INSTALMENT_MONTHS,
  INSTALMENT_QUARTERS,
  OFFER_ENDS,
  OFFER_SLOTS,
  STANDARD_DEPOSIT_PERCENT,
  STANDARD_MONTHS,
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

  const offerTerms = [
    {
      label: "Price",
      now: formatNairaShort(plan.total),
      was: formatNairaShort(Math.round(original * 1_000_000)),
    },
    {
      label: "Initial deposit",
      now: `${DEPOSIT_PERCENT}%`,
      was: `${STANDARD_DEPOSIT_PERCENT}%`,
    },
    {
      label: "Time to pay",
      now: `${INSTALMENT_MONTHS} months`,
      was: `${STANDARD_MONTHS} months`,
    },
  ];

  const items = [
    {
      label: `${DEPOSIT_PERCENT}% deposit today`,
      value: formatNairaFull(plan.deposit),
    },
    {
      label: `${count} ${cadence === "monthly" ? "monthly" : "quarterly"} payments`,
      value: `${formatNairaFull(amount)} / ${cadence === "monthly" ? "month" : "quarter"}`,
    },
    {
      label: "Discounted price · Plot + DPC",
      value: formatNairaShort(plan.total),
      was: formatNairaShort(Math.round(original * 1_000_000)),
      accent: true,
    },
  ];

  return (
    <section id="payment-plan" aria-label="Flexible payment plan" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e4bd67]">
              Limited offer
            </p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
              Why you shouldn&apos;t miss this offer
            </h2>
          </div>
          <p className="rounded-full border border-[#e4bd67]/50 px-3 py-1 text-xs font-semibold text-[#e4bd67]">
            Ends {OFFER_ENDS} · First {OFFER_SLOTS} subscribers only
          </p>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10">
          {offerTerms.map((term) => (
            <div key={term.label} className="bg-ink px-3 py-4 sm:px-6 sm:py-5">
              <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50 sm:text-[11px]">
                {term.label}
              </dt>
              <dd className="mt-1.5">
                <span className="block font-serif text-xl text-[#e4bd67] sm:inline sm:text-3xl">
                  {term.now}
                </span>
                <span className="text-xs text-white/40 line-through sm:ml-2 sm:text-base">
                  {term.was}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-10 font-serif text-xl text-white/90 sm:text-2xl">
          What you would be paying
        </h3>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e4bd67]">
            Flexible payment plan
          </p>
          <p className="mt-2 font-serif text-2xl sm:text-3xl">
            {DEPOSIT_PERCENT}% today.{" "}
            <span className="italic text-[#e4bd67]">
              Balance over {INSTALMENT_MONTHS} months.
            </span>
          </p>
          </div>
          <div
            role="tablist"
            aria-label="Payment frequency"
            className="inline-flex rounded-full border border-white/20 p-0.5 text-xs font-semibold sm:text-sm"
          >
            {(["monthly", "quarterly"] as const).map((option) => (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={cadence === option}
                onClick={() => setCadence(option)}
                className={`rounded-full px-4 py-1.5 capitalize transition ${
                  cadence === option ? "bg-[#e4bd67] text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <dl className="mt-5 divide-y divide-white/10 border-y border-white/10 md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center md:gap-6 md:divide-y-0 md:py-5">
          {items.map((item, i) => (
            <div key={item.label} className="contents">
              {i > 0 && (
                <span className="hidden font-serif text-3xl text-[#e4bd67] md:block" aria-hidden="true">
                  {i === 1 ? "+" : "="}
                </span>
              )}
              <div className="flex items-baseline justify-between gap-4 py-3 md:block md:py-0">
                <dt className="text-xs text-white/55 md:text-[11px] md:font-bold md:uppercase md:tracking-[0.18em]">
                  {item.label}
                </dt>
                <dd className="text-right md:mt-1 md:text-left">
                  <span
                    className={`font-serif text-xl sm:text-2xl md:text-3xl ${
                      item.accent ? "text-[#e4bd67]" : ""
                    }`}
                  >
                    {item.value}
                  </span>
                  {item.was && (
                    <span className="ml-2 text-xs text-white/45 line-through sm:text-sm">
                      {item.was}
                    </span>
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>

        <p className="mt-3 text-[11px] leading-5 text-white/45">
          {name}, at the discounted price.{" "}
          {cadence === "monthly" ? "Monthly" : "Quarterly"} payments over{" "}
          {INSTALMENT_MONTHS} months; amounts are approximate. T&amp;Cs apply.
        </p>
      </div>
    </section>
  );
}
