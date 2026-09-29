import type { ReactNode } from "react";

// Fade-in is pure CSS (scroll-driven animation in globals.css), so content is
// visible even before JavaScript loads.
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
