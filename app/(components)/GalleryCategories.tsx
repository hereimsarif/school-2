'use client';
import { useState } from 'react';
import { galleryCategories } from '@lib/galleryData';

export default function GalleryCategories() {
  const [cat, setCat] = useState('Campus');
  // Global context or parent should persist cat for child carousel, but simple state for now.
  return (
    <div className="flex gap-4 mb-2 flex-wrap">
      {galleryCategories.map(c => (
        <button
          key={c}
          className={`px-5 py-2 rounded-xl font-semibold transition text-primary border border-primary/20 shadow-sm ${cat === c ? 'bg-primary text-white' : 'bg-white dark:bg-gray-900'}`}
          onClick={() => setCat(c)}
          aria-pressed={cat === c}
          aria-label={`Show ${c} photos`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
