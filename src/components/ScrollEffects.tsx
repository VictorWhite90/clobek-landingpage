"use client";

import type { ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";

// Thin gold bar across the top that fills as the page is scrolled.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand to-[#e4bd67]"
      style={{ scaleX }}
    />
  );
}

// Each section rises, sharpens and settles into place as it scrolls into view.
// Pure CSS (scroll-driven animation in globals.css): content is always visible
// before JavaScript loads, and browsers without support simply show it.
export function SectionReveal({ children }: { children: ReactNode }) {
  return <div className="section-reveal">{children}</div>;
}
