import StaticGallery from '@/app/components/StaticGallery';

const IMAGES = [
  '/images/Casestudies/Project-9/Project9_Gallery1.webp',
  '/images/Casestudies/Project-9/Project9_Gallery2.webp',
  '/images/Casestudies/Project-9/Project9_Gallery3.webp',
  '/images/Casestudies/Project-9/Project9_Gallery4.webp',
];

export default function Gallery() {
  return <StaticGallery images={IMAGES} altPrefix="Machinery import on 20ft flat rack containers at JNPT" />;
}
