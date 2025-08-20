import EventList from '../(components)/EventList';
import PastEventsGallery from '../(components)/PastEventsGallery';

export default function EventsPage() {
  return (
    <section className="container max-w-5xl mx-auto px-4 py-12 space-y-12">
      <h1 className="text-4xl font-display font-bold text-primary mb-6">School Events</h1>
      <EventList />
      <PastEventsGallery />
    </section>
  );
}
