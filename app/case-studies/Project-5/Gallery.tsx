import StaticGallery from '@/app/components/StaticGallery';

const IMAGES = [
  '/images/Casestudies/Project-5/Project5_Gallery1.webp',
  '/images/Casestudies/Project-5/Project5_Gallery2.webp',
  '/images/Casestudies/Project-5/Project5_Gallery3.webp',
];

export default function Gallery() {
  return <StaticGallery images={IMAGES} altPrefix="ODC IN-LAND TRANSPORTATION" />;
}
