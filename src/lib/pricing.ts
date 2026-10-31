// Current offer: discounted prices, a 20% deposit with the balance over 18
// months, until the deadline or the first 10 subscribers. Change these numbers
// to update the whole site.
export const DISCOUNT_RATE = 0.05;
export const DEPOSIT_RATE = 0.2;
export const INSTALMENT_MONTHS = 18;

// Standard terms the offer is compared against.
export const STANDARD_DEPOSIT_PERCENT = 35;
export const STANDARD_MONTHS = 9;

export const OFFER_ENDS = "15 November";
export const OFFER_SLOTS = 10;

export const INSTALMENT_QUARTERS = INSTALMENT_MONTHS / 3;

export const DISCOUNT_PERCENT = Math.round(DISCOUNT_RATE * 100);
export const DEPOSIT_PERCENT = Math.round(DEPOSIT_RATE * 100);

// Prices are stored in millions of naira; work in whole naira to avoid
// floating-point rounding in the displayed figures.
export function discountedNaira(priceMillions: number) {
  return Math.round(priceMillions * 1_000_000 * (1 - DISCOUNT_RATE));
}

export function paymentPlan(priceMillions: number) {
  const total = discountedNaira(priceMillions);
  const deposit = Math.round(total * DEPOSIT_RATE);
  const balance = total - deposit;
  const monthly = Math.round(balance / INSTALMENT_MONTHS);
  const quarterly = Math.round(balance / INSTALMENT_QUARTERS);
  return { total, deposit, balance, monthly, quarterly };
}

export function formatNairaFull(naira: number) {
  return `₦${naira.toLocaleString("en-NG")}`;
}

// ₦20,900,000 -> ₦20.9M, ₦29,925,000 -> ₦29.925M (exact, no rounding)
export function formatNairaShort(naira: number) {
  return `₦${naira / 1_000_000}M`;
}

// Shared marketing copy for the offer, used in heroes and link previews.
export const OFFER_PITCH = `Save 10% and pay just ${DEPOSIT_PERCENT}% initial deposit. Only for ${OFFER_SLOTS} slots. Book your inspection today.`;

export function propertyHeadline(name: string) {
  return `Buy a prime Plot + DPC in Abuja, Off Airport Road, Inside Lugbe's premium estate for ${name}`;
}

// Link-preview text used when a page is shared on WhatsApp and social media.
export const SHARE_TITLE =
  "Buy a prime Plot in Abuja, off Airport Road, inside Lugbe's premium estate.";

export function shareDescription(priceMillions: number, from = false) {
  const deposit = Math.round(paymentPlan(priceMillions).deposit / 10_000) / 100;
  return `Pay ${from ? "from just" : "just"} ₦${deposit}M initial deposit and the balance over ${INSTALMENT_MONTHS} months. Only for ${OFFER_SLOTS} slots. Book your inspection today.`;
}
