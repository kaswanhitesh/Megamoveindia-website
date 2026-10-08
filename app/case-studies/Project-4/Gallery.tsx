import StaticGallery from '@/app/components/StaticGallery';

const IMAGES = [
  '/images/Casestudies/Project-4/Project4_Gallery1.webp',
  '/images/Casestudies/Project-4/Project4_Gallery2.webp',
  '/images/Casestudies/Project-4/Project4_Gallery3.webp',
  '/images/Casestudies/Project-4/Project4_Gallery4.webp',
  '/images/Casestudies/Project-4/Project4_Gallery5.webp',
  '/images/Casestudies/Project-4/Project4_Gallery6.webp',
  '/images/Casestudies/Project-4/Project4_Gallery7.webp',
];

export default function Gallery() {
  return <StaticGallery images={IMAGES} altPrefix="BREAKBULK EXPORT" />;
}
