import { discountedNaira, formatNairaShort } from "@/lib/pricing";

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
