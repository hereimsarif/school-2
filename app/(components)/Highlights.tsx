import Link from 'next/link';
import { AcademicCapIcon, ClipboardDocumentListIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const highlights = [
  {
    title: 'Admissions',
    icon: ClipboardDocumentListIcon,
    link: '/admissions',
    description: 'Apply online, view the process and dates',
  },
  {
    title: 'Academics',
    icon: AcademicCapIcon,
    link: '/academics',
    description: 'Our programs, curriculum, and syllabi',
  },
  {
    title: 'Events',
    icon: CalendarDaysIcon,
    link: '/events',
    description: 'See upcoming and recent activities',
  },
];

export default function Highlights() {
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {highlights.map(({ title, icon: Icon, link, description }) => (
        <Link key={title} href={link}>
          <a className="group bg-white dark:bg-gray-900 shadow p-6 rounded-2xl hover:shadow-xl transition duration-200 flex flex-col items-center gap-3 cursor-pointer focus:ring-2 ring-primary ring-offset-2">
            <Icon className="w-12 h-12 text-primary group-hover:text-secondary" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-primary group-hover:text-secondary">{title}</h2>
            <span className="text-gray-600 dark:text-gray-200 text-sm text-center">{description}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}
