"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

export type HeroSlide = {
  src: string;
  alt: string;
  // Short chapter name shown in the top rail, e.g. "The vision".
  title: string;
  // Longer line shown along the bottom on larger screens.
  caption: string;
};

// The incoming slide rises in as vertical strips, like walls going up on site.
// Strips start in an uneven order so the edge reads like a skyline, not a wipe.
const STRIPS = 7;
const RISE_ORDER = [3, 1, 5, 0, 4, 6, 2];
const HOLD_MS = 6500;

export default function HeroShowcase({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  // Bumps on every change so the strip animation replays even for the same slide.
  const [cycle, setCycle] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [offscreen, setOffscreen] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const swipeStart = useRef<number | null>(null);

  const paused = hovered || offscreen;

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOffscreen(!entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  function go(next: number) {
    const target = (next + slides.length) % slides.length;
    if (target === active) return;
    setPrevious(active);
    setActive(target);
    setCycle((value) => value + 1);
  }

  const current = slides[active];

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Property views"
    >
      {/* Offset gold hairline and survey corner marks around the frame. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border border-[#e4bd67]/45 sm:translate-x-4 sm:translate-y-4"
      />
      {[
        "-left-2 -top-2 border-l-2 border-t-2",
        "-right-2 -top-2 border-r-2 border-t-2",
        "-left-2 -bottom-2 border-b-2 border-l-2",
      ].map((corner) => (
        <span
          key={corner}
          aria-hidden="true"
          className={`pointer-events-none absolute z-20 h-5 w-5 border-[#e4bd67] ${corner}`}
        />
      ))}

      <div
        ref={frameRef}
        className="hero-stage relative aspect-[1.3] touch-pan-y select-none overflow-hidden bg-[#0d1f18] shadow-2xl shadow-black/40"
        onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onPointerDown={(event) => {
          swipeStart.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (swipeStart.current === null) return;
          const delta = event.clientX - swipeStart.current;
          swipeStart.current = null;
          if (Math.abs(delta) > 40) go(active + (delta < 0 ? 1 : -1));
        }}
      >
        {/* Every slide stays mounted underneath so the next image is already loaded. */}
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={index !== active}
            className={`absolute inset-0 ${
              index === previous ? "z-[1] opacity-100" : index === active && previous === null ? "z-[1] opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={index === active ? slide.alt : ""}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover hero-held"
            />
          </div>
        ))}

        {/* The active slide, cut into strips that rise over the previous one. */}
        {previous !== null && (
          <div key={cycle} className="absolute inset-0 z-[2]" aria-hidden="true">
            {Array.from({ length: STRIPS }, (_, strip) => {
              const style = {
                "--l": `${(strip * 100) / STRIPS}%`,
                "--r": `${((STRIPS - 1 - strip) * 100) / STRIPS}%`,
                "--d": `${RISE_ORDER[strip] * 95}ms`,
              } as CSSProperties;
              return (
                <div key={strip} className="hero-strip absolute inset-0" style={style}>
                  <Image
                    src={current.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover hero-drift"
                  />
                  <span className="hero-strip-edge" />
                </div>
              );
            })}
          </div>
        )}

        {/* First slide drifts on its own before any change has happened. */}
        {previous === null && (
          <div className="absolute inset-0 z-[2]" aria-hidden="true">
            <Image
              src={current.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover hero-drift"
            />
          </div>
        )}

        {/* Scrims keep the rail and caption readable on any photo. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-28 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] hidden h-32 bg-gradient-to-t from-black/65 to-transparent sm:block" />

        {/* Chapter rail: one bar per slide that fills while it is showing. */}
        <div className="absolute inset-x-0 top-0 z-[4] grid items-start gap-3 px-4 pt-4 sm:px-5 sm:pt-5" style={{ gridTemplateColumns: `repeat(${slides.length}, minmax(0, 1fr))` }}>
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(index)}
              aria-label={`Show ${slide.title}`}
              aria-current={index === active}
              className="group text-left"
            >
              <span className="relative block h-[3px] overflow-hidden bg-white/25">
                {index === active ? (
                  <span
                    key={cycle}
                    className="hero-progress absolute inset-0 origin-left bg-[#e4bd67]"
                    style={{
                      animationDuration: `${HOLD_MS}ms`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                    onAnimationEnd={() => go(active + 1)}
                  />
                ) : (
                  <span
                    className={`absolute inset-0 bg-white/70 ${index < active ? "opacity-100" : "opacity-0"}`}
                  />
                )}
              </span>
              <span
                className={`mt-2 flex items-baseline gap-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-500 sm:text-[11px] ${
                  index === active ? "text-white" : "text-white/55 group-hover:text-white/85"
                }`}
              >
                <span className="font-serif text-xs italic tracking-normal text-[#e4bd67] sm:text-sm">
                  0{index + 1}
                </span>
                {slide.title}
              </span>
              {index === active && (
                <span
                  key={cycle}
                  className="hero-caption mt-1 block pl-6 text-[11px] leading-4 text-white/75 sm:text-xs"
                >
                  {slide.caption}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Big serif chapter numeral, clear of the price card on the right. */}
        <span
          key={`numeral-${cycle}`}
          aria-hidden="true"
          className="hero-caption absolute bottom-4 left-5 z-[4] hidden font-serif text-7xl italic leading-none text-white/90 sm:block"
        >
          0{active + 1}
        </span>
      </div>
    </div>
  );
}
