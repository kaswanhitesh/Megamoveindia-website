import StaticGallery from '@/app/components/StaticGallery';

const IMAGES = [
  '/images/Casestudies/Project-6/Project6_Gallery1.webp',
  '/images/Casestudies/Project-6/Project6_Gallery2.webp',
  '/images/Casestudies/Project-6/Project6_Gallery3.webp',
  '/images/Casestudies/Project-6/Project6_Gallery4.webp',
  '/images/Casestudies/Project-6/Project6_Gallery5.webp',
  '/images/Casestudies/Project-6/Project6_Gallery6.webp',
  '/images/Casestudies/Project-6/Project6_Gallery7.webp',
  '/images/Casestudies/Project-6/Project6_Gallery8.webp',
  '/images/Casestudies/Project-6/Project6_Gallery9.webp',
  '/images/Casestudies/Project-6/Project6_Gallery10.webp',
];

export default function Gallery() {
  return <StaticGallery images={IMAGES} altPrefix="CHEMICAL STORAGE TANKS" />;
}
