import StaticGallery from '@/app/components/StaticGallery';

const IMAGES = [
  '/images/Casestudies/Project-7/Project7_Gallery1.webp',
  '/images/Casestudies/Project-7/Project7_Gallery2.webp',
  '/images/Casestudies/Project-7/Project7_Gallery3.webp',
  '/images/Casestudies/Project-7/Project7_Gallery4.webp',
  '/images/Casestudies/Project-7/Project7_Gallery5.webp',
  '/images/Casestudies/Project-7/Project7_Gallery6.webp',
];

export default function Gallery() {
  return <StaticGallery images={IMAGES} altPrefix="CRITICAL X-RAY SYSTEMS" />;
}
