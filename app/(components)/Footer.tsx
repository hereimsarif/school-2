import NewsletterSignup from './NewsletterSignup';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary/95 text-white mt-20 pt-10 pb-6">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row gap-8 md:justify-between md:items-start">
        <div className="space-y-2">
          <img src="/images/logo.png" alt="School Logo" className="h-10 w-10 rounded-full shadow border-white" />
          <h2 className="text-xl font-display font-bold">School Name</h2>
          <p className="opacity-80 max-w-xs">123 Learning St., EduCity 400001<br />+1 234 567 8901<br />admissions@yourschool.edu</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/"><a className="hover:underline">Home</a></Link></li>
            <li><Link href="/about"><a className="hover:underline">About</a></Link></li>
            <li><Link href="/academics"><a className="hover:underline">Academics</a></Link></li>
            <li><Link href="/admissions"><a className="hover:underline">Admissions</a></Link></li>
            <li><Link href="/blog"><a className="hover:underline">Blog</a></Link></li>
          </ul>
        </div>
        <NewsletterSignup />
      </div>
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} School Name. All rights reserved.
      </div>
    </footer>
  );
}
