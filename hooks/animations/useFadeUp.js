'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useFadeUpCards(selector = '[data-animate-card]') {
  useEffect(() => {
    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    items.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, [selector]);
}
