import StaticGallery from '@/app/components/StaticGallery';

const IMAGES = [
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery1.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery2.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery3.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery4.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery5.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery6.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery7.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery8.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery9.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery10.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery11.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery12.webp',
];

export default function Gallery() {
  return <StaticGallery images={IMAGES} altPrefix="National defence" />;
}
