import StaticGallery from '@/app/components/StaticGallery';

const IMAGES = [
  '/images/Casestudies/Project-2/Project2_Gallery1.webp',
  '/images/Casestudies/Project-2/Project2_Gallery2.webp',
  '/images/Casestudies/Project-2/Project2_Gallery3.webp',
  '/images/Casestudies/Project-2/Project2_Gallery4.webp',
  '/images/Casestudies/Project-2/Project2_Gallery5.webp',
  '/images/Casestudies/Project-2/Project2_Gallery6.webp',
  '/images/Casestudies/Project-2/Project2_Gallery7.webp',
  '/images/Casestudies/Project-2/Project2_Gallery8.webp',
  '/images/Casestudies/Project-2/Project2_Gallery9.webp',
  '/images/Casestudies/Project-2/Project2_Gallery10.webp',
  '/images/Casestudies/Project-2/Project2_Gallery11.webp',
  '/images/Casestudies/Project-2/Project2_Gallery12.webp',
];

export default function Gallery() {
  return <StaticGallery images={IMAGES} altPrefix="225MT USED MACHINERY IMPORT" />;
}
