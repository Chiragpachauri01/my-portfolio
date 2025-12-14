'use client'; 
import { useState, useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Blobs from '../components/layout/Blobs';
import MobileMenuOverlay from '../components/layout/MobileMenuOverlay';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import TechStack from '../components/sections/TechStack';
import Experience from '../components/sections/Experience';
import StudioProcess from '../components/sections/StudioProcess';
import Playground from '../components/sections/PlayGround';
import ContactSection from '../components/sections/ContactSection';

// Register ScrollTrigger globally once
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null); // Ref for the main container
useEffect(() => {
    if (!containerRef.current) return;
    
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    
    // --- GSAP Scroll Animations (Cards and Simple Elements) ---
    if (window.gsap && window.ScrollTrigger && !reduce) {
        
        const cardElements = gsap.utils.toArray(container.querySelectorAll('[data-animate-card]'));
        const simpleElements = gsap.utils.toArray(container.querySelectorAll('[data-animate]'));
        
        // 1. INITIALIZE: Set starting state instantly for elements that will be animated on scroll.
        gsap.set(cardElements, { y: 30, opacity: 0, scale: 0.98 });
        gsap.set(simpleElements, { y: 40, opacity: 0 });

        // 2. ANIMATE ON SCROLL (Cards)
        cardElements.forEach((el) => {
            gsap.to(el, { 
                y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', 
                scrollTrigger: { 
                    trigger: el, 
                    start: 'top 90%', 
                    toggleActions: 'play reverse play reverse' 
                } 
            });
        });
        
        // 3. ANIMATE ON SCROLL (Simple Elements, with stagger)
        simpleElements.forEach((el, i) => {
            gsap.to(el, { 
                y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', 
                delay: 0.03 * i, // Applies the stagger effect
                scrollTrigger: { 
                    trigger: el, 
                    start: 'top 85%', 
                    toggleActions: 'play reverse play reverse' 
                } 
            });
        });
        
        // --- Blobs and Hero Parallax ---
        gsap.to('#blob1', { y: -140, x: 30, rotation: 10, ease: 'none', scrollTrigger: { scrub: 0.9 } });
        gsap.to('#blob2', { y: -200, x: -60, rotation: -6, ease: 'none', scrollTrigger: { scrub: 1.1 } });
        gsap.to('#blob3', { y: -80, x: 120, rotation: 6, ease: 'none', scrollTrigger: { scrub: 1.3 } });
        gsap.to('.hero-title', { y: -18, ease: 'none', scrollTrigger: { scrub: true } });
    }
    
    // --- Magnetic Buttons Logic ---
    const magneticButtons = container.querySelectorAll('.btn-primary, .magnetic');
    
    const mouseMoveHandler = (e) => {
        const btn = e.currentTarget;
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate3d(${dx * 0.02}px, ${dy * 0.02}px, 0) scale(1.02)`;
    };
    
    const mouseLeaveHandler = (e) => {
        const btn = e.currentTarget;
        btn.style.transform = 'none'; 
        btn.style.transition = 'transform .28s ease'; 
        setTimeout(() => btn.style.transition = 'none', 280); 
    };

    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', mouseMoveHandler);
        btn.addEventListener('mouseleave', mouseLeaveHandler);
    });

    // --- Cleanup and Year Setting ---
    
    // Set current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Cleanup function: Kills all listeners and ScrollTriggers on unmount
    return () => {
        magneticButtons.forEach(btn => {
            btn.removeEventListener('mousemove', mouseMoveHandler);
            btn.removeEventListener('mouseleave', mouseLeaveHandler);
        });
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.globalTimeline.clear();
    };

  }, []);

  return (
    <>
      <Blobs />
      <MobileMenuOverlay isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="container" id="top">
        <Header setIsMenuOpen={setIsMenuOpen} />
        <HeroSection />
        <TechStack />
        <Experience />
        <StudioProcess />
        <Playground />
        <ContactSection />
      </div>
      <footer className="mt-12 text-center text-sm text-slate-500 py-6">
          © <span id="year"></span> Chandresh Pachauri — Creative Technologist
      </footer>
    </>
  );
}