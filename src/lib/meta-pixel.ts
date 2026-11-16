// Meta (Facebook) Pixel. The base code is loaded once in app/layout.tsx; use
// trackMetaEvent for conversion events such as button clicks.
export const META_PIXEL_ID = "2260343984888341";

type Fbq = (command: "track" | "trackCustom", event: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export function trackMetaEvent(event: string, params?: Record<string, unknown>) {
  // The pixel may be blocked by an ad blocker; never let that break a click.
  try {
    window.fbq?.("track", event, params);
  } catch {
    // ignore
  }
}
