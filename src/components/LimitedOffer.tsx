"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { ArrowRight, Check, Phone } from "lucide-react";
import {
  DEPOSIT_PERCENT,
  INSTALMENT_MONTHS,
  OFFER_ENDS,
  OFFER_SLOTS,
  STANDARD_DEPOSIT_PERCENT,
  STANDARD_MONTHS,
  discountedNaira,
} from "@/lib/pricing";

const PHONE_TEL = "tel:+2348029823593";
// End of 15 November, Lagos time (UTC+1).
const DEADLINE = new Date("2026-11-15T23:59:59+01:00").getTime();
const GOLD = "#e4bd67";

// Animates a number from `from` to `to` once the element scrolls into view,
// so each offer term visibly transforms from the standard term to the offer.
function Morph({
  from,
  to,
  format,
  delay = 0,
}: {
  from: number;
  to: number;
  format: (n: number) => string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration: reduce ? 0 : 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setValue,
    });
    return () => controls.stop();
  }, [inView, reduce, from, to, delay]);

  return <span ref={ref}>{format(value)}</span>;
}

// The old value with a strike line that draws across it.
function Struck({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="relative inline-block text-sm font-bold text-white/45">
      {children}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-1/2 h-[2px] w-full origin-left bg-brand"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      />
    </span>
  );
}

function useCountdown() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setLeft(Math.max(0, DEADLINE - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  if (left === null) return null;
  const s = Math.floor(left / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  };
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function LimitedOffer({
  price,
  original,
  visitUrl,
}: {
  price: number;
  original: number;
  visitUrl: string;
}) {
  const now = discountedNaira(price) / 1_000_000;
  const countdown = useCountdown();
  const money = (n: number) => `₦${(Math.round(n * 1000) / 1000).toLocaleString("en-NG")}M`;

  const terms = [
    {
      label: "Discounted price",
      value: <Morph from={original} to={now} format={money} />,
      was: money(original),
    },
    {
      label: "Minimal initial deposit",
      value: <Morph from={STANDARD_DEPOSIT_PERCENT} to={DEPOSIT_PERCENT} format={(n) => `${Math.round(n)}%`} delay={0.15} />,
      was: `${STANDARD_DEPOSIT_PERCENT}%`,
    },
    {
      label: "DPC",
      value: (
        <span className="inline-flex items-center gap-2">
          Included
          <motion.span
            className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white"
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.9 }}
          >
            <Check className="h-4 w-4" strokeWidth={3} />
          </motion.span>
        </span>
      ),
    },
    {
      label: "Extended payment plan",
      value: <Morph from={STANDARD_MONTHS} to={INSTALMENT_MONTHS} format={(n) => `${Math.round(n)} months`} delay={0.3} />,
      was: `${STANDARD_MONTHS} months`,
    },
  ];

  return (
    <section
      id="limited-offer"
      aria-label="Limited offer"
      className="relative overflow-hidden bg-ink text-white"
    >
      {/* Slow drifting glows give the section depth and movement. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/25 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full blur-[140px]"
        style={{ backgroundColor: `${GOLD}26` }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: GOLD, borderColor: `${GOLD}55`, backgroundColor: `${GOLD}14` }}
            >
              <span className="relative flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6b3d] opacity-80" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#ff6b3d] shadow-[0_0_12px_3px_rgba(255,107,61,0.7)]" />
              </span>
              Limited offer · Live now
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-5xl">
              Why you shouldn&apos;t{" "}
              <span className="italic" style={{ color: GOLD }}>miss this offer.</span>
            </h2>
          </motion.div>

          {/* Countdown to the deadline */}
          <div aria-label={`Offer ends ${OFFER_ENDS}`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
              Offer ends {OFFER_ENDS}
            </p>
            <div className="mt-2 flex gap-2">
              {(["days", "hours", "mins", "secs"] as const).map((unit) => (
                <div
                  key={unit}
                  className="w-16 rounded-xl border border-white/10 bg-white/[0.04] py-2 text-center backdrop-blur sm:w-[4.5rem]"
                >
                  <p className="font-serif text-2xl tabular-nums sm:text-3xl">
                    {countdown ? String(countdown[unit]).padStart(2, "0") : "--"}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-white/45">{unit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {terms.map((term, i) => (
            <motion.div
              key={term.label}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-colors hover:border-white/25 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px opacity-60"
                style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
              />
              <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-white/55 sm:text-[11px]">
                {term.label}
              </p>
              <p className="mt-3 font-serif text-2xl leading-tight sm:text-4xl" style={{ color: GOLD }}>
                {term.value}
              </p>
              <div className="mt-2 h-5">
                {term.was && <Struck delay={1.4 + i * 0.12}>{term.was}</Struck>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slots */}
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex gap-1.5" aria-hidden="true">
            {Array.from({ length: OFFER_SLOTS }, (_, i) => (
              <motion.span
                key={i}
                className="h-2.5 w-6 rounded-full sm:w-8"
                style={{ backgroundColor: GOLD }}
                initial={{ scaleX: 0, opacity: 0.3 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.3 }}
              />
            ))}
          </div>
          <p className="text-sm font-bold" style={{ color: GOLD }}>
            First {OFFER_SLOTS} subscribers only
          </p>
        </motion.div>

        <p className="mt-3 text-sm font-semibold text-white/70">T&amp;Cs apply.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <motion.a
            href={visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm font-bold text-ink shadow-lg"
            style={{ backgroundColor: GOLD, boxShadow: `0 10px 30px -10px ${GOLD}` }}
          >
            Book an inspection <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href={PHONE_TEL}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Call now <Phone className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
