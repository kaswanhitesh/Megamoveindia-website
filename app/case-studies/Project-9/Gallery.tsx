import StaticGallery from '@/app/components/StaticGallery';

// Lift shots first: they show the handling, which is the point of the project
const IMAGES = [
  '/images/Casestudies/Project-9/Project9_Gallery5.webp',
  '/images/Casestudies/Project-9/Project9_Gallery6.webp',
  '/images/Casestudies/Project-9/Project9_Gallery7.webp',
  '/images/Casestudies/Project-9/Project9_Gallery1.webp',
  '/images/Casestudies/Project-9/Project9_Gallery2.webp',
  '/images/Casestudies/Project-9/Project9_Gallery3.webp',
  '/images/Casestudies/Project-9/Project9_Gallery4.webp',
];

export default function Gallery() {
  return <StaticGallery images={IMAGES} altPrefix="Tata Power machinery import on 20ft flat racks, Hamburg to Bangalore" />;
}
