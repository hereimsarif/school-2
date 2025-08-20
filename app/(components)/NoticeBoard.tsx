import { useState, useEffect } from 'react';

const NOTICES = [
  'Admissions open for 2024-25! Apply online today.',
  'Parent-Teacher Meeting: March 15, 10AM-1PM.',
  'Annual Sports Meet – April 10-12. Good luck to all!'
];

export default function NoticeBoard() {
  const [noticeIdx, setNoticeIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setNoticeIdx((i) => (i + 1) % NOTICES.length), 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div aria-live="polite" className="bg-secondary/90 text-white rounded-xl shadow px-4 py-3 flex items-center gap-3 animate-fade-in">
      <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9z" /></svg>
      <span className="font-medium">
        {NOTICES[noticeIdx]}
      </span>
    </div>
  );
}
