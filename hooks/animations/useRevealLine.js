'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useRevealLine(ref) {
  useEffect(() => {
    if (!ref?.current) return;
    const el = ref.current;
    const parent = el.parentNode || el;

    gsap.fromTo(
      el,
      { width: 0 },
      {
        width: '60%',
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: parent,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === parent) st.kill();
      });
    };
  }, [ref]);
}
