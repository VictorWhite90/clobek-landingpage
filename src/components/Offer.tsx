import { BadgePercent, CalendarClock, Wallet } from "lucide-react";
import {
  DEPOSIT_PERCENT,
  DISCOUNT_PERCENT,
  INSTALMENT_MONTHS,
  INSTALMENT_QUARTERS,
  discountedNaira,
  formatNairaFull,
  formatNairaShort,
  paymentPlan,
} from "@/lib/pricing";

export function OfferBanner() {
  return (
    <div className="bg-brand text-white">
      <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold sm:text-sm">
        <BadgePercent className="h-4 w-4 shrink-0" />
        <span className="sm:hidden">
          {DISCOUNT_PERCENT}% off · {DEPOSIT_PERCENT}% deposit, {INSTALMENT_MONTHS} months to pay
        </span>
        <span className="hidden sm:inline">
          Limited offer: {DISCOUNT_PERCENT}% off every property · Pay{" "}
          {DEPOSIT_PERCENT}% deposit, balance over {INSTALMENT_MONTHS} months
          (monthly or quarterly)
        </span>
      </p>
    </div>
  );
}

export function DiscountChip({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold tracking-wide text-white uppercase ${className}`}
    >
      <BadgePercent className="h-3 w-3" />
      {DISCOUNT_PERCENT}% off
    </span>
  );
}

// Old price struck through, discounted price beside it.
export function PriceTag({
  price,
  size = "md",
  tone = "light",
}: {
  price: number;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
}) {
  const now = formatNairaShort(discountedNaira(price));
  const was = formatNairaShort(Math.round(price * 1_000_000));
  const nowSize = { sm: "text-2xl", md: "text-3xl", lg: "text-4xl sm:text-5xl" }[size];
  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2">
      <span className={`font-serif ${nowSize} ${tone === "dark" ? "text-white" : "text-brand"}`}>
        {now}
      </span>
      <span
        className={`text-sm line-through ${tone === "dark" ? "text-white/55" : "text-muted"}`}
      >
        {was}
      </span>
    </span>
  );
}

// One-line summary of the plan for heroes and cards.
export function PlanSummary({
  price,
  tone = "light",
}: {
  price: number;
  tone?: "light" | "dark";
}) {
  const plan = paymentPlan(price);
  const muted = tone === "dark" ? "text-white/70" : "text-muted";
  const strong = tone === "dark" ? "text-white" : "text-ink";
  return (
    <p className={`text-sm leading-6 ${muted}`}>
      <span className={`font-semibold ${strong}`}>
        {formatNairaFull(plan.deposit)}
      </span>{" "}
      deposit ({DEPOSIT_PERCENT}%), then about{" "}
      <span className={`font-semibold ${strong}`}>
        {formatNairaFull(plan.monthly)}/month
      </span>{" "}
      for {INSTALMENT_MONTHS} months, or{" "}
      <span className={`font-semibold ${strong}`}>
        {formatNairaFull(plan.quarterly)}
      </span>{" "}
      quarterly.
    </p>
  );
}

export function PaymentPlanSection({
  price,
  name,
}: {
  price: number;
  name: string;
}) {
  const plan = paymentPlan(price);
  const steps = [
    {
      icon: BadgePercent,
      label: "Offer price",
      value: formatNairaFull(plan.total),
      detail: `${DISCOUNT_PERCENT}% off ${formatNairaShort(Math.round(price * 1_000_000))}, Land + DPC`,
    },
    {
      icon: Wallet,
      label: `${DEPOSIT_PERCENT}% initial deposit`,
      value: formatNairaFull(plan.deposit),
      detail: "Secures your plot",
    },
    {
      icon: CalendarClock,
      label: `Balance over ${INSTALMENT_MONTHS} months`,
      value: `${formatNairaFull(plan.monthly)}/mo`,
      detail: `${INSTALMENT_MONTHS} monthly payments (approx.)`,
      alt: {
        value: `${formatNairaFull(plan.quarterly)}/quarter`,
        detail: `or ${INSTALMENT_QUARTERS} quarterly payments, every 3 months`,
      },
    },
  ];

  return (
    <section
      id="payment-plan"
      aria-label="Flexible payment plan"
      className="border-b border-ink/10 bg-champagne"
    >
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Flexible payment plan
            </p>
            <h2 className="mt-2 font-serif text-3xl leading-tight text-ink sm:text-4xl">
              Pay {DEPOSIT_PERCENT}% now. Spread the rest over {INSTALMENT_MONTHS} months, monthly or quarterly.
            </h2>
          </div>
          <DiscountChip className="self-start sm:self-auto" />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {steps.map(({ icon: Icon, label, value, detail, alt }, i) => (
            <div
              key={label}
              className="relative overflow-hidden border border-ink/10 bg-white p-5 shadow-sm shadow-ink/5"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-grove" />
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-grove text-[11px] text-white">
                  {i + 1}
                </span>
                <Icon className="h-4 w-4 text-brand" />
                {label}
              </div>
              <p className="mt-3 font-serif text-2xl text-ink sm:text-3xl">{value}</p>
              <p className="mt-1 text-sm text-muted">{detail}</p>
              {alt && (
                <div className="mt-3 border-t border-dashed border-ink/15 pt-3">
                  <p className="font-serif text-xl text-ink sm:text-2xl">{alt.value}</p>
                  <p className="mt-1 text-sm text-muted">{alt.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5" aria-hidden="true">
          <div className="flex h-2.5 gap-0.5 overflow-hidden rounded-full">
            <span className="w-1/4 bg-brand" />
            {Array.from({ length: INSTALMENT_MONTHS }, (_, i) => (
              <span key={i} className="flex-1 bg-grove/70" />
            ))}
          </div>
          <div className="mt-1.5 flex justify-between text-[11px] font-semibold text-muted">
            <span>Deposit</span>
            <span>Month {INSTALMENT_MONTHS}</span>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted">
          Figures for the {name}, after the {DISCOUNT_PERCENT}% discount. Monthly
          and quarterly amounts are approximate. Terms and conditions apply.
        </p>
      </div>
    </section>
  );
}
