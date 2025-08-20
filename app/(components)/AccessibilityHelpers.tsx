import { useEffect } from 'react';

export default function AccessibilityHelpers() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <a
      href="#main-content"
      className="fixed top-1 left-1 bg-secondary text-white px-4 py-2 rounded z-50 -translate-y-16 focus:translate-y-0 focus:outline-none transition-transform"
      tabIndex={0}
      aria-label="Skip to main content"
    >
      Skip to content
    </a>
  );
}
