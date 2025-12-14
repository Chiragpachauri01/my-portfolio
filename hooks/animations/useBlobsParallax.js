'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useBlobsParallax() {
  useEffect(() => {
    gsap.to('#blob1', {
      y: -140, x: 30, rotation: 10,
      scrollTrigger: { scrub: 0.9 }
    });

    gsap.to('#blob2', {
      y: -200, x: -60, rotation: -6,
      scrollTrigger: { scrub: 1.1 }
    });

    gsap.to('#blob3', {
      y: -80, x: 120, rotation: 6,
      scrollTrigger: { scrub: 1.3 }
    });
  }, []);
}
    