'use client';

import { useState } from 'react';

interface StaticGalleryProps {
  images: string[];
  altPrefix: string;
  title?: string;
  columns?: 2 | 3;
}

// Plain image grid with a click-to-enlarge lightbox. No scroll or motion effects.
export default function StaticGallery({ images, altPrefix, title = 'Project Gallery', columns = 3 }: StaticGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = () =>
    setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const next = () => setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length));

  return (
    <>
      <section className="relative z-20 bg-[#f7f7f7] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-8 lg:mb-12">
            {title}
          </h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : 'lg:max-w-5xl lg:mx-auto'} gap-4 lg:gap-6`}>
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="relative block overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${altPrefix} gallery image ${index + 1}`}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  className="w-full h-[240px] lg:h-[280px] object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 lg:top-8 lg:right-10 text-white text-4xl lg:text-5xl cursor-pointer"
            aria-label="Close Lightbox"
          >
            ×
          </button>
          <button
            onClick={prev}
            className="absolute left-2 lg:left-8 text-white text-5xl lg:text-7xl cursor-pointer"
            aria-label="Previous Image"
          >
            ‹
          </button>
          <img
            src={images[lightboxIndex]}
            alt={`${altPrefix} gallery image ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[80vh] object-contain"
          />
          <button
            onClick={next}
            className="absolute right-2 lg:right-8 text-white text-5xl lg:text-7xl cursor-pointer"
            aria-label="Next Image"
          >
            ›
          </button>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-semibold tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
