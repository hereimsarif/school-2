import Link from 'next/link';

export default function FloatingCTA() {
  return (
    <Link href="/admissions">
      <a className="fixed z-50 right-4 bottom-7 bg-secondary text-white font-bold rounded-full shadow-2xl px-6 py-3 text-lg hover:bg-primary transition">
        Apply Now
      </a>
    </Link>
  );
}
