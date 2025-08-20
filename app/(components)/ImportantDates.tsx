const DATES = [
  { label: 'Admissions Open', date: '2024-01-15' },
  { label: 'Application Deadline', date: '2024-03-31' },
  { label: 'Assessment Date', date: '2024-04-15' },
  { label: 'Results Announced', date: '2024-04-25' },
  { label: 'Session Starts', date: '2024-06-05' },
];

export default function ImportantDates() {
  return (
    <div className="bg-secondary/10 dark:bg-secondary/20 rounded-xl shadow p-6 mb-8">
      <h2 className="text-2xl font-bold text-primary mb-3">Important Dates</h2>
      <table className="w-full table-auto text-base">
        <tbody>
          {DATES.map(d => (
            <tr key={d.label} className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-2 text-primary font-semibold whitespace-nowrap">{d.label}</td>
              <td className="py-2 text-gray-700 dark:text-gray-300 pl-8">{new Date(d.date).toLocaleDateString(undefined, { dateStyle: 'medium' })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
