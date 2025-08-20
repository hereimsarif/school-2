'use client';
import { useState } from 'react';
import { galleryAssets, galleryCategories } from '@lib/galleryData';

export default function GalleryCarousel() {
  const [cat, setCat] = useState('Campus');
  const assets = galleryAssets.filter(a => a.category === cat);
  const [idx, setIdx] = useState(0);

  function next() {
    setIdx(i => (i + 1) % assets.length);
  }
  function prev() {
    setIdx(i => (i - 1 + assets.length) % assets.length);
  }
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex gap-3">
        {galleryCategories.map(c => (
          <button
            key={c}
            className={`px-4 py-2 rounded-xl font-semibold text-primary border border-primary/20 shadow-sm transition ${cat === c ? 'bg-primary text-white' : 'bg-white dark:bg-gray-900'}`}
            onClick={() => {setCat(c); setIdx(0);}}
            aria-pressed={cat === c}
          >
            {c}
          </button>
        ))}
      </div>
      {assets.length > 0 ? (
        <div className="relative w-full max-w-xl aspect-video rounded-lg overflow-hidden shadow-lg">
          {assets[idx].type === 'image' ? (
            <img src={assets[idx].src} alt={assets[idx].alt} className="w-full h-full object-cover" />
          ) : (
            <video src={assets[idx].src} controls className="w-full h-full object-cover"></video>
          )}
          <button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full shadow">&#8592;</button>
          <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full shadow">&#8594;</button>
          <div className="absolute bottom-2 right-3 bg-black/50 text-white text-xs px-2 py-0.5 rounded">
            {idx + 1} / {assets.length}
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-gray-500">No media in this category.</div>
      )}
    </div>
  );
}
