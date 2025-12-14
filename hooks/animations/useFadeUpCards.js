'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Unified Fade-up Animation Hook
 * 
 * Automatically chooses animation based on element type:
 *  - data-animate          → stronger fade-up with stagger
 *  - data-animate-card     → softer card reveal with slight scale
 *  - any custom selector   → default fade-up
 */
export default function useFadeUp(selector = "[data-animate], [data-animate-card]") {

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    elements.forEach((el, index) => {
      const isCard = el.hasAttribute("data-animate-card");
      const isStrong = el.hasAttribute("data-animate");

      // Choose animation type automatically
      let from = { y: 40, opacity: 0 };
      let to = { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" };

      // Card animation (soft + scale)
      if (isCard) {
        from = { y: 30, opacity: 0, scale: 0.98 };
        to = { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" };
      }

      // Stronger fade-up (stagger index)
      if (isStrong) {
        to.delay = index * 0.05;
      }

      gsap.fromTo(el, from, {
        ...to,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [selector]);
}
