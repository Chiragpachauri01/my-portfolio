'use client';

import { useEffect, useState, useCallback } from 'react';

export const useTheme = () => {
    const [isDark, setIsDark] = useState(false);

    const applyTheme = useCallback((dark) => {
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, []);

    useEffect(() => {
        // Initialization: Set theme based on localStorage or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
        setIsDark(initialDark);
        applyTheme(initialDark);

        // Observer to sync state if another component (like the mobile toggle) changes the theme directly
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const currentDark = document.documentElement.classList.contains('dark');
                    if (currentDark !== isDark) {
                        setIsDark(currentDark);
                    }
                }
            }
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, [isDark, applyTheme]);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        applyTheme(newIsDark);
    };

    return [isDark, toggleTheme];
};