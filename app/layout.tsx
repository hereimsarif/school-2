import './globals.css';
import { ReactNode } from 'react';
import Header from './(components)/Header';
import Footer from './(components)/Footer';
import FloatingCTA from './(components)/FloatingCTA';
import DarkModeToggle from './(components)/DarkModeToggle';
import PageTransition from './(components)/PageTransition';
import AccessibilityHelpers from './(components)/AccessibilityHelpers';
import ScrollToTop from './(components)/ScrollToTop';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <title>School Website</title>
      </head>
      <body
        className="bg-accent dark:bg-darkbg text-gray-900 dark:text-white font-sans min-h-screen antialiased">
        <AccessibilityHelpers />
        <DarkModeToggle />
        <Header />
        <main className="pt-24">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingCTA />
        <ScrollToTop />
      </body>
    </html>
  );
}
