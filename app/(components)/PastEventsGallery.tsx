import eventsData from '@lib/eventsData';

export default function PastEventsGallery() {
  const past = eventsData.filter(e => new Date(e.date) < new Date());
  return (
    <div className="bg-secondary/10 dark:bg-secondary/20 rounded-xl shadow p-6">
      <h3 className="text-xl font-bold text-primary mb-3">Recent Past Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {past.length === 0 && (
          <div className="col-span-full text-center text-gray-600">No recent past events.</div>
        )}
        {past.slice(0, 6).map(ev => (
          <div key={ev.title} className="rounded-lg overflow-hidden shadow group relative">
            <img
              src={ev.cover}
              alt={ev.title}
              className="w-full h-40 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 bg-primary/70 text-white w-full px-2 py-1 text-xs flex justify-between">
              <span>{ev.title}</span>
              <span>{new Date(ev.date).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
