import Image from 'next/image';

export default function LeadershipNote() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-secondary/10 dark:bg-secondary/20 rounded-xl shadow p-6 gap-6 animate-fade-in">
      <div className="flex-shrink-0 w-32 h-32 relative rounded-full overflow-hidden border-4 border-white shadow">
        <Image
          src="/images/leadership.jpg"
          alt="Principal"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary mb-1">Principal's Note</h3>
        <blockquote className="text-gray-800 dark:text-gray-100 italic">
          "At our school, we cultivate not just knowledge, but integrity, creativity, and resilience. We are proud to empower our students to become compassionate, informed world citizens."
        </blockquote>
        <div className="mt-3">
          <span className="font-semibold text-gray-700 dark:text-gray-300">Dr. Ritu Mehra</span> &mdash; Principal
        </div>
      </div>
    </div>
  );
}
