const TIMELINE = [
  { year: '1997', event: 'School founded by a group of visionary educators.' },
  { year: '2003', event: 'First batch of students graduated with distinction.' },
  { year: '2010', event: 'Inauguration of modern science and computer labs.' },
  { year: '2015', event: 'Launch of comprehensive sports and arts facilities.' },
  { year: '2022', event: 'Received national award for academic excellence.' },
];

export default function HistoryTimeline() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow">
      <h2 className="text-2xl font-bold text-primary mb-4">Our Journey</h2>
      <ol className="relative border-l border-primary/30 ml-4">
        {TIMELINE.map(({ year, event }, idx) => (
          <li key={year} className="mb-8 ml-6">
            <span className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full -ml-7 border-2 border-white dark:border-gray-900"></span>
            <time className="mb-1 text-sm font-medium leading-none text-primary">{year}</time>
            <div className="text-base text-gray-800 dark:text-gray-200">{event}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
