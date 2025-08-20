const STEPS = [
  'Submit Online Application',
  'Document Review by School',
  'Written Assessment (as needed)',
  'Parent/Student Interview',
  'Admission Decision & Offer Letter',
];

export default function AdmissionsSteps() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 mb-6">
      <h2 className="text-2xl font-bold text-primary mb-3">Admission Process</h2>
      <ol className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
        {STEPS.map((step, idx) => (
          <li key={step} className="flex items-center">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-white font-bold shadow mr-2">{idx+1}</span>
            <span className="text-base text-gray-800 dark:text-gray-200">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
