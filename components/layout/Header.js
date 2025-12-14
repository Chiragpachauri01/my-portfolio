'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '../common/themeToggle';

export default function Header({ setIsMenuOpen }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Sync internal state with prop state for MobileMenuOverlay
        setIsMenuOpen(isMobileMenuOpen);

        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const hamLines = document.getElementById('hamLines');
        const xLines = document.getElementById('xLines');

        if (!hamburgerBtn || !hamLines || !xLines) return;
        
        // Handle accessibility and icon change
        hamburgerBtn.setAttribute('aria-expanded', isMobileMenuOpen ? 'true' : 'false');
        hamLines.style.display = isMobileMenuOpen ? 'none' : 'block';
        xLines.style.display = isMobileMenuOpen ? 'block' : 'none';

    }, [isMobileMenuOpen, setIsMenuOpen]);

    // Logic to update burger stroke color based on theme change
    useEffect(() => {
        const setBurgerStroke = () => {
            const color = document.documentElement.classList.contains('dark') ? '#fff' : '#071130';
            document.querySelectorAll('#hamburgerIcon path, #hamburgerIcon line').forEach(p => {
                try { p.setAttribute('stroke', color); } catch (err) { /* ignore */ }
            });
        };
        
        setBurgerStroke();
        const mo = new MutationObserver(setBurgerStroke);
        mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => mo.disconnect();
    }, []);

    return (
        <header>
            <div className="brand flex items-center gap-3">
                <div className="logo">CP</div>
                <div>
                    <div className="font-bold text-lg">Chandresh Pachauri</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Creative Technologist</div>
                </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
                <a href="#work" className="hover:text-indigo-500">Work</a>
                <a href="#studio" className="hover:text-indigo-500">Studio</a>
                <a href="#play" className="hover:text-indigo-500">Play</a>
                <a href="#contact" className="hover:text-indigo-500">Contact</a>
                <ThemeToggle id="themeToggle" className="p-2 rounded-md border border-gray-200 dark:border-gray-700" />
            </nav>

            <div className="flex md:hidden items-center gap-3">
                <ThemeToggle 
                    id="themeToggleMobile" 
                    className="p-3 rounded-lg border border-white/20 backdrop-blur bg-white/10 dark:bg-white/5"
                />

                <button 
                    id="hamburgerBtn"
                    className="p-3 rounded-lg border border-white/20 backdrop-blur bg-white/10 dark:bg-white/5"
                    aria-expanded={isMobileMenuOpen} 
                    aria-controls="menuOverlay" 
                    aria-haspopup="dialog" 
                    title="Open menu"
                    onClick={() => setIsMobileMenuOpen(prev => !prev)}
                >
                    <svg id="hamburgerIcon" className="w-6 h-6 text-slate-700 dark:text-white" viewBox="0 0 24 24" aria-hidden="true">
                        <g id="hamLines" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 7h16" />
                            <path d="M4 12h16" />
                            <path d="M4 17h16" />
                        </g>
                        <g id="xLines" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'none' }}>
                            <path d="M6 6l12 12" />
                            <path d="M18 6l-12 12" />
                        </g>
                    </svg>
                </button>
            </div>
        </header>
    );
}