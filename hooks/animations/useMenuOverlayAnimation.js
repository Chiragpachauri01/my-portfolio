'use client';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function useMenuOverlayAnimation(open, menuRef) {
  useEffect(() => {
    if (!menuRef.current) return;

    gsap.to(menuRef.current, {
      opacity: open ? 1 : 0,
      scale: open ? 1 : 0.98,
      duration: 0.28,
      pointerEvents: open ? "auto" : "none",
      ease: "power2.out"
    });
  }, [open]);
}
