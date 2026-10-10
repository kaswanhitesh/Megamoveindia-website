// Looping, muted card video. Phones get the lighter 144p encode; the still
// image shows until the video starts (and if it can't play).
export default function CardVideo({ src, poster }: { src: string; poster: string }) {
  const mobileSrc = src.replace(/\.mp4$/, "_144p.mp4");
  return (
    <video autoPlay muted loop playsInline preload="metadata" poster={poster} className="h-full w-full object-cover">
      <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />
      <source src={src} type="video/mp4" />
    </video>
  );
}
