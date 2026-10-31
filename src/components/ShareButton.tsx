"use client";

import { Share2 } from "lucide-react";

// Shares the page with the headline as the first line of the message, so the
// WhatsApp chat list shows the headline instead of a bare link.
export default function ShareButton({ headline, path }: { headline: string; path: string }) {
  const share = async () => {
    const text = `${headline}\n${new URL(path, window.location.origin).href}`;
    if (navigator.share) {
      try {
        await navigator.share({ text });
        return;
      } catch {
        // Cancelled or unsupported: fall through to WhatsApp.
      }
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <button
      type="button"
      onClick={share}
      aria-label="Share this property"
      className="inline-flex min-h-10 items-center gap-2 border border-grove/25 px-3 text-sm sm:px-4 font-semibold text-grove transition hover:border-brand hover:text-brand"
    >
      <span className="hidden sm:inline">Share</span> <Share2 className="h-4 w-4" />
    </button>
  );
}
