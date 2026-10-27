import { BadgePercent } from "lucide-react";
import {
  DEPOSIT_PERCENT,
  INSTALMENT_MONTHS,
  OFFER_ENDS,
  OFFER_SLOTS,
  discountedNaira,
  formatNairaShort,
} from "@/lib/pricing";

export function OfferBanner() {
  return (
    <div className="bg-brand text-white">
      <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold sm:text-sm">
        <BadgePercent className="h-4 w-4 shrink-0" />
        <span className="sm:hidden">
          Discounted prices · Ends {OFFER_ENDS} · First {OFFER_SLOTS} only
        </span>
        <span className="hidden sm:inline">
          Limited offer: discounted prices, {DEPOSIT_PERCENT}% deposit and{" "}
          {INSTALMENT_MONTHS} months to pay · Ends {OFFER_ENDS}, first{" "}
          {OFFER_SLOTS} subscribers only
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
      Discounted
    </span>
  );
}

// Discounted price, with the original (pre-offer) price struck through.
// Both prices are in millions of naira.
export function PriceTag({
  price,
  original = price,
  size = "md",
  tone = "light",
}: {
  price: number;
  original?: number;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
}) {
  const now = formatNairaShort(discountedNaira(price));
  const was = formatNairaShort(Math.round(original * 1_000_000));
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
