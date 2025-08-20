import eventsData from '@lib/eventsData';
import { CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function EventList() {
  const upcoming = eventsData.filter(e => new Date(e.date) >= new Date());
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 mb-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Upcoming Events</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-800">
        {upcoming.length === 0 && (
          <li className="py-4 text-gray-500 text-center">No upcoming events.</li>
        )}
        {upcoming.map(ev => (
          <li key={ev.title} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                <CalendarDaysIcon className="w-5 h-5" />
                {new Date(ev.date).toLocaleDateString(undefined, { dateStyle: 'medium' })}
              </div>
              <div className="font-bold mt-1">{ev.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{ev.description}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1 items-center text-secondary">
                <MapPinIcon className="w-4 h-4" />
                <span className="text-xs">{ev.location}</span>
              </div>
              {ev.time && (
                <div className="flex gap-1 items-center text-gray-400">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-xs">{ev.time}</span>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
