import { useEffect, useRef } from "react";

/**
 * Adds the `is-in` class when the element scrolls into view.
 * Pair with the `.reveal` CSS utility for fade-up reveals.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-in");
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-in");
          obs.unobserve(entry.target);
        }
      }
    }, options);
    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);

  return ref;
}
