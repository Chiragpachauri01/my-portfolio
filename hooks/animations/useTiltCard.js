'use client';
import { useEffect } from 'react';

export default function useTiltCard(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      el.style.transform = `perspective(900px) rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
    }

    function reset() {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);
}
