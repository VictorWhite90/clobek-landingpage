"use client";

import { useEffect } from "react";

// Touch screens have no hover, so play each button's hover effect once as it
// scrolls into view instead. Buttons in the same row follow one another.
export default function ButtonInView() {
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const button = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const index = Array.from(button.parentElement?.children ?? []).indexOf(button);
            button.style.setProperty("--btn-delay", `${Math.max(0, index) * 0.18}s`);
            button.classList.add("in-view");
          } else {
            // Reset off-screen so it plays again next time it comes into view.
            button.classList.remove("in-view");
          }
        }
      },
      { threshold: 0.9 },
    );

    const observe = () =>
      document.querySelectorAll<HTMLElement>(".btn-fx").forEach((b) => observer.observe(b));
    observe();
    // Pick up buttons added later, e.g. after client-side navigation.
    const mutations = new MutationObserver(observe);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
