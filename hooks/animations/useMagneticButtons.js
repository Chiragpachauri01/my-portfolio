'use client';
import { useEffect } from 'react';

export default function useMagneticButtons(selector = ".magnetic") {
  useEffect(() => {
    document.querySelectorAll(selector).forEach(btn => {
      function onMove(e) {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 6;
        const y = (e.clientY - rect.top - rect.height / 2) / 6;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      }

      function reset() {
        btn.style.transform = `translate(0,0)`;
      }

      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", reset);

      return () => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", reset);
      };
    });
  }, []);
}
