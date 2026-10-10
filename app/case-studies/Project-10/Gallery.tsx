import StaticGallery from '@/app/components/StaticGallery';

const IMAGES = Array.from(
  { length: 18 },
  (_, i) => `/images/Casestudies/Project-10/Project10_Gallery${i + 1}.webp`,
);

export default function Gallery() {
  return <StaticGallery images={IMAGES} altPrefix="Tunnel boring machine transport for Kanpur Metro, Kandla Port to Kanpur" />;
}
