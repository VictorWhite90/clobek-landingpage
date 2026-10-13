"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt: string; label: string };

// The first slide is visible from the first paint, so the box is never empty.
export default function ImageSlideshow({
  slides,
  interval = 4000,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <figure className="relative aspect-[3/2] overflow-hidden border border-ink/10 shadow-lg shadow-ink/5">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 bg-ink/70 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white uppercase">
            {slide.label}
          </figcaption>
        </div>
      ))}
    </figure>
  );
}
