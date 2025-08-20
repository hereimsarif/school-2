import ProgramList from '../(components)/ProgramList';
import Curriculum from '../(components)/Curriculum';
import SyllabusDownload from '../(components)/SyllabusDownload';

export default function AcademicsPage() {
  return (
    <section className="container max-w-5xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-4xl font-display font-bold text-primary mb-2">Academics</h1>
      <ProgramList />
      <Curriculum />
      <SyllabusDownload />
    </section>
  );
}
