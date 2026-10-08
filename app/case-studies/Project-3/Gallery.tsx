import StaticGallery from '@/app/components/StaticGallery';

const IMAGES = [
  '/images/Casestudies/Project-3/Project3_Gallery1.webp',
  '/images/Casestudies/Project-3/Project3_Gallery2.webp',
  '/images/Casestudies/Project-3/Project3_Gallery3.webp',
  '/images/Casestudies/Project-3/Project3_Gallery4.webp',
  '/images/Casestudies/Project-3/Project3_Gallery5.webp',
  '/images/Casestudies/Project-3/Project3_Gallery6.webp',
  '/images/Casestudies/Project-3/Project3_Gallery7.webp',
  '/images/Casestudies/Project-3/Project3_Gallery8.webp',
  '/images/Casestudies/Project-3/Project3_Gallery9.webp',
  '/images/Casestudies/Project-3/Project3_Gallery10.webp',
  '/images/Casestudies/Project-3/Project3_Gallery11.webp',
  '/images/Casestudies/Project-3/Project3_Gallery12.webp',
  '/images/Casestudies/Project-3/Project3_Gallery13.webp',
  '/images/Casestudies/Project-3/Project3_Gallery14.webp',
  '/images/Casestudies/Project-3/Project3_Gallery15.webp',
];

export default function Gallery() {
  return <StaticGallery images={IMAGES} altPrefix="FACTORY RELOCATION" />;
}
