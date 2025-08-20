import AdmissionsSteps from '../(components)/AdmissionsSteps';
import ImportantDates from '../(components)/ImportantDates';
import AdmissionsForm from '../(components)/AdmissionsForm';

export default function AdmissionsPage() {
  return (
    <section className="container max-w-4xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-4xl font-display font-bold text-primary mb-4">Admissions</h1>
      <AdmissionsSteps />
      <ImportantDates />
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Online Application</h2>
        <AdmissionsForm />
      </div>
    </section>
  );
}
