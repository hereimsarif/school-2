import LeadershipNote from '../(components)/LeadershipNote';
import HistoryTimeline from '../(components)/HistoryTimeline';

export default function AboutPage() {
  return (
    <section className="container max-w-4xl mx-auto px-4 py-12 space-y-12">
      <h1 className="text-4xl font-display font-bold mb-4 text-primary">About Us</h1>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-primary mb-2">Mission & Vision</h2>
        <p className="mt-2 text-lg">
          Our mission is to foster a holistic environment nurturing future leaders through excellence in academics, character building, and global citizenship.<br />
          Our vision is to empower students to reach their full potential and positively impact society.
        </p>
      </div>
      <HistoryTimeline />
      <LeadershipNote />
    </section>
  );
}
