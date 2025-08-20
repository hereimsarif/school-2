'use client';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  function toggle() {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  }

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="fixed bottom-24 right-6 z-40 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-secondary focus:ring-2 ring-white ring-offset-2 ring-offset-primary dark:ring-offset-darkbg transition-colors"
    >
      {dark ? (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364-6.364l.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707.707M6.343 6.343l-.707-.707M12 5a7 7 0 110 14 7 7 0 010-14z" /></svg>
      ) : (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1010.586 10.586z" /></svg>
      )}
    </button>
  );
}
