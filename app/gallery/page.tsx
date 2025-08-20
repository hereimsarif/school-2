import GalleryCategories from '../(components)/GalleryCategories';
import GalleryCarousel from '../(components)/GalleryCarousel';

export default function GalleryPage() {
  return (
    <section className="container max-w-5xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-4xl font-display font-bold text-primary mb-4">Gallery</h1>
      <GalleryCategories />
      <GalleryCarousel />
    </section>
  );
}
