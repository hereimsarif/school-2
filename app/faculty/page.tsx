import FacultyGrid from '../(components)/FacultyGrid';

export default function FacultyPage() {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold text-primary mb-4">Our Faculty</h1>
      <FacultyGrid />
    </section>
  );
}
