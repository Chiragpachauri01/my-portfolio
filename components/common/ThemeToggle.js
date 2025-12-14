'use client';

import { useTheme } from '../../hooks/useTheme';

const MoonIcon = () => (
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
);
const SunIcon = () => (
    <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36l-1.42-1.42M7.05 7.05 5.64 5.64M18.36 5.64 16.95 7.05M6.34 18.36l1.41-1.41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
);

export default function ThemeToggle({ id, className }) {
    const [isDark, toggleTheme] = useTheme();

    return (
        <button id={id} onClick={toggleTheme} className={className} title="Toggle theme">
            <svg id={`themeIcon-${id}`} className="w-5 h-5" fill="none" stroke="currentColor">
                {isDark ? <MoonIcon /> : <SunIcon />}
            </svg>
        </button>
    );
}