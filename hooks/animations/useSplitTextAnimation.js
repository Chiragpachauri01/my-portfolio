'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useSplitTextAnimation(ref) {
  useEffect(() => {
    if (!ref?.current) return;
    const el = ref.current;
    const chars = el.querySelectorAll('.split-char');
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !chars.length) return;

    gsap.fromTo(
      chars,
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.02,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        }
      }
    );

    return () => {
      // cleanup ScrollTrigger instances created for these chars
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [ref]);
}
