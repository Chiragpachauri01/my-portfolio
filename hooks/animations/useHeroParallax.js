'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useHeroParallax(ref) {
  useEffect(() => {
    gsap.to(ref.current, {
      y: -18,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        scrub: true,
      }
    });
  }, []);
}
