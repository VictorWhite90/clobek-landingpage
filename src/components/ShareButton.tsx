"use client";

import { Share2 } from "lucide-react";

// Shares the page with the headline (and offer line) before the link, so the
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
      className="inline-flex min-h-10 items-center gap-2 bg-grove px-4 text-sm font-semibold text-white transition hover:bg-brand"
    >
      Share <Share2 className="h-4 w-4" />
    </button>
  );
}
