export const galleryCategories = ['Campus', 'Sports', 'Activities'] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryAsset = {
  src: string;
  alt: string;
  type: 'image' | 'video';
  category: GalleryCategory;
};

export const galleryAssets: GalleryAsset[] = [
  {
    src: '/images/gallery/campus_1.jpg',
    alt: 'Main school building',
    type: 'image',
    category: 'Campus',
  },
  {
    src: '/images/gallery/campus_2.jpg',
    alt: 'Classrooms corridor',
    type: 'image',
    category: 'Campus',
  },
  {
    src: '/images/gallery/sports_1.jpg',
    alt: 'Sports day football match',
    type: 'image',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports_2.jpg',
    alt: 'Track and field events',
    type: 'image',
    category: 'Sports',
  },
  {
    src: '/images/gallery/activities_1.jpg',
    alt: 'Science fair project',
    type: 'image',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities_2.jpg',
    alt: 'Cultural function dance group',
    type: 'image',
    category: 'Activities',
  },
];
