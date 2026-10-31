import { Navigation } from "lucide-react";
import { DIRECTIONS_URL, MAP_EMBED_URL, SITE_ADDRESS } from "@/lib/location";

// "Click for directions" link shown under each address. Opens Google Maps
// (the Maps app on phones) with directions to the estate.
export function DirectionsLink({
  tone = "light",
  block = false,
  className = "",
}: {
  tone?: "light" | "dark";
  // On its own line under the address rather than inline.
  block?: boolean;
  className?: string;
}) {
  return (
    <a
      href={DIRECTIONS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-fx ${block ? "flex w-fit" : "inline-flex"} items-center gap-1.5 text-sm font-bold ${
        tone === "dark" ? "text-[#e4bd67]" : "text-brand"
      } ${className}`}
    >
      <Navigation className="h-4 w-4" />
      Click for directions
    </a>
  );
}

// Embedded Google map of the estate with a directions button on top.
export function SiteMap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden border border-ink/10 bg-grove-light shadow-xl shadow-ink/10 ${className}`}
    >
      <iframe
        title={`Map showing Clobek Heritage Place, ${SITE_ADDRESS}`}
        src={MAP_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-72 w-full border-0 sm:h-96"
      />
      <a
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-fx btn-solid absolute bottom-4 left-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-5 text-sm font-bold text-white shadow-lg shadow-brand/25"
      >
        Click for directions
        <Navigation className="h-4 w-4" />
      </a>
    </div>
  );
}
