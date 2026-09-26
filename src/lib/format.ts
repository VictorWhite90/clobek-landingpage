export function formatNaira(millions: number) {
  return `₦${Number.isInteger(millions) ? millions : millions.toFixed(1)}M`;
}

export function formatPerSqm(totalMillions: number, sqm: number) {
  const rate = Math.round((totalMillions * 1_000_000) / sqm);
  return `≈ ₦${rate.toLocaleString("en-NG")}/sqm`;
}
