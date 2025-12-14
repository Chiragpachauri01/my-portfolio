'use client';

import { useRef } from 'react';
import useMenuOverlayAnimation from '../../hooks/animations/useMenuOverlayAnimation';

export default function MobileMenuOverlay({ open }) {

  const overlayRef = useRef(null);
  useMenuOverlayAnimation(open, overlayRef);

  return (
    <div ref={overlayRef} id="menuOverlay">
      <div id="menuPanel">
        <h2 id="menuTitle">Menu</h2>
        <a href="#work" className="menu-link">Work</a>
        <a href="#studio" className="menu-link">Studio</a>
        <a href="#play" className="menu-link">Playground</a>
        <a href="#contact" className="menu-link">Contact</a>
      </div>
    </div>
  );
}
