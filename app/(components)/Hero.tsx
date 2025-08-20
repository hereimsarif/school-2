import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-b from-primary to-secondary/10 rounded-2xl overflow-hidden shadow-xl my-8 mx-auto max-w-6xl">
      <div className="z-20 p-10 space-y-6 md:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-primary dark:text-secondary mb-2">
          Shaping Future Leaders
        </h1>
        <p className="text-lg text-gray-700 dark:text-white/90 max-w-md">
          Our school fosters excellence in academics, leadership, and character, offering holistic education for today's world.
        </p>
        <div className="flex gap-4 mt-6">
          <Link href="/admissions">
            <a className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-xl shadow transition duration-200 focus:ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-darkbg">
              Apply Now
            </a>
          </Link>
          <a href="/prospectus.pdf" target="_blank" rel="noreferrer" className="bg-secondary hover:bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow transition duration-200">
            Download Prospectus
          </a>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto h-60 md:h-[350px]">
        <Image
          src="/images/hero.jpg"
          alt="Students at School"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
          priority
        />
      </div>
    </div>
  );
}
