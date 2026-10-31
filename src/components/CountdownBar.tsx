"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { OFFER_SLOTS } from "@/lib/pricing";

// End of 15 November, Lagos time (UTC+1).
const DEADLINE = new Date("2026-11-15T23:59:59+01:00").getTime();
const VISIT_URL =
  "https://wa.me/2348029823593?text=Hello%20Clobek%20Heritage%20Place%2C%20I%27d%20like%20to%20book%20a%20site%20visit%20to%20the%20Lugbe%20estate.";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

// Flash-sale style countdown pinned to the bottom of the screen.
export default function CountdownBar({ visitUrl = VISIT_URL }: { visitUrl?: string }) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, DEADLINE - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (left === 0) return null;

  const s = left === null ? null : Math.floor(left / 1000);
  const parts = s === null
    ? ["--", "--", "--", "--"]
    : [
        String(Math.floor(s / 86400)),
        pad(Math.floor((s % 86400) / 3600)),
        pad(Math.floor((s % 3600) / 60)),
        pad(s % 60),
      ];

  return (
    <>
      {/* Spacer so the fixed bar never covers the end of the page. */}
      <div aria-hidden="true" className="h-16" />
      <div className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-brand bg-white text-ink shadow-[0_-12px_32px_rgba(31,33,25,0.22)]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 sm:justify-between sm:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-40" />
              <Zap className="relative h-4 w-4 fill-white text-white" />
            </span>
            <p className="hidden text-sm font-bold text-brand sm:block">
              Limited offer · First {OFFER_SLOTS} only · Ends in
            </p>
            <p className="text-xs font-bold text-brand sm:hidden">Ends in</p>
            <div className="flex items-center gap-1" aria-label="Time left on the offer">
              {parts.map((value, i) => (
                <span key={i} className="flex items-center gap-1">
                  <span className="min-w-[2rem] rounded-md bg-brand px-1.5 py-1 text-center text-sm font-bold tabular-nums text-white">
                    {value}
                    <span className="ml-0.5 text-[10px] font-semibold text-white/75">
                      {["d", "h", "m", "s"][i]}
                    </span>
                  </span>
                  {i < 3 && <span className="font-bold text-brand">:</span>}
                </span>
              ))}
            </div>
          </div>
          <a
            href={visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark sm:inline-flex"
          >
            Book an inspection
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
