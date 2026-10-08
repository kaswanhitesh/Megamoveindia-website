import StaticGallery from '@/app/components/StaticGallery';

const IMAGES = [
  '/images/Casestudies/Project-8/Project8_Gallery1.webp',
  '/images/Casestudies/Project-8/Project8_Gallery2.webp',
  '/images/Casestudies/Project-8/Project8_Gallery3.webp',
  '/images/Casestudies/Project-8/Project8_Gallery4.webp',
  '/images/Casestudies/Project-8/Project8_Gallery5.webp',
];

export default function Gallery() {
  return <StaticGallery images={IMAGES} altPrefix="35M EOT CRANE EXPORT" />;
}
