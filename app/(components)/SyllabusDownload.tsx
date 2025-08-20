const SYLLABI = [
  { name: 'Primary', link: '/syllabus/primary.pdf' },
  { name: 'Secondary', link: '/syllabus/secondary.pdf' },
  { name: 'Higher Secondary', link: '/syllabus/higher-secondary.pdf' }
];

export default function SyllabusDownload() {
  return (
    <div className="bg-secondary/10 dark:bg-secondary/20 rounded-xl shadow p-6 mt-6 flex flex-col items-center">
      <h3 className="text-xl font-bold text-primary mb-2">Download Syllabus</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        {SYLLABI.map(s => (
          <a
            key={s.name}
            href={s.link}
            className="bg-primary hover:bg-secondary text-white font-semibold px-5 py-2.5 rounded-xl shadow transition duration-150"
            download
            target="_blank"
            rel="noreferrer"
          >
            {s.name} Syllabus
          </a>
        ))}
      </div>
    </div>
  );
}
