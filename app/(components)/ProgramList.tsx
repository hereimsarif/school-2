const PROGRAMS = [
  {
    name: 'Primary',
    grades: 'Grades 1-5',
    desc: 'Focus on foundational skills, literacy, numeracy, creativity and ethics in a nurturing, playful environment.'
  },
  {
    name: 'Secondary',
    grades: 'Grades 6-10',
    desc: 'Comprehensive academic curriculum, critical thinking, STEM, languages, sports and arts exposure.'
  },
  {
    name: 'Higher Secondary',
    grades: 'Grades 11-12',
    desc: 'Specialized streams (Science, Commerce, Humanities), research projects, future-ready learning.'
  }
];

export default function ProgramList() {
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {PROGRAMS.map(p => (
        <div key={p.name} className="bg-white dark:bg-gray-900 rounded-xl shadow flex flex-col gap-3 p-6">
          <h3 className="text-xl font-bold text-primary">{p.name}</h3>
          <span className="text-sm text-secondary font-medium">{p.grades}</span>
          <p className="text-gray-700 dark:text-gray-200 text-base">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}
