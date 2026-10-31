export const SITE_ADDRESS =
  "Plot 1946, Sabon-Lugbe East Extension Layout, Lugbe, Abuja FCT";

// Google Maps search for the estate. On phones this opens the Maps app with
// turn-by-turn directions from the visitor's current location.
const MAP_QUERY = "Clobek Crown Estate, Sabon-Lugbe East Extension Layout, Lugbe, Abuja";

export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`;
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`;
