import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Faculty', href: '/faculty' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-darkbg border-b border-neutral shadow backdrop-blur-sm">
      <nav aria-label="Global navigation" role="navigation" className="mx-auto px-4 max-w-7xl flex items-center justify-between h-16">
        <Link href="/">
          <a className="flex items-center gap-2 font-display text-xl font-extrabold text-primary">
            <img src="/images/logo.png" alt="School Logo" className="h-8 w-8 rounded-full" />
            School Name
          </a>
        </Link>
        <div className="hidden md:flex gap-3 items-center">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href}>
              <a
                className={`px-3 py-2 rounded-lg font-semibold transition focus:ring-2 ring-secondary/50 ${pathname === link.href ? 'bg-primary text-white' : 'text-primary hover:bg-secondary hover:text-white'}`}
              >{link.name}
              </a>
            </Link>
          ))}
          <Link href="/admissions">
            <a className="ml-3 bg-secondary hover:bg-primary text-white font-semibold px-4 py-2 rounded-xl shadow transition">
              Apply Now
            </a>
          </Link>
        </div>
        <Disclosure as={Fragment}>
          {({ open }) => (
            <>
              <Disclosure.Button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-secondary/10 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-darkbg border-b z-20 flex flex-col px-6 pb-2 shadow">
                {navLinks.map(link => (
                  <Link key={link.name} href={link.href}>
                    <a className={`block px-3 py-2 rounded-lg font-semibold transition my-0.5 ${pathname === link.href ? 'bg-primary text-white' : 'text-primary hover:bg-secondary hover:text-white'}`}>{link.name}</a>
                  </Link>
                ))}
                <Link href="/admissions">
                  <a className="mt-2 bg-secondary hover:bg-primary text-white font-semibold px-4 py-2 rounded-xl shadow transition block">
                    Apply Now
                  </a>
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </header>
  );
}
