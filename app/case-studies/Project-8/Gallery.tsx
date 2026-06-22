"use client";

import { useState } from "react";

export default function Gallery() {
  const images = [
    "/images/Casestudies/Project-8/Project8_Gallery1.webp",
    "/images/Casestudies/Project-8/Project8_Gallery2.webp",
    "/images/Casestudies/Project-8/Project8_Gallery3.webp",
    "/images/Casestudies/Project-8/Project8_Gallery4.webp",
    "/images/Casestudies/Project-8/Project8_Gallery5.webp",
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="py-12 lg:py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
            Project Gallery
          </h2>

        </div>

        <div className="gallery-marquee">

          <div className="gallery-track animate-gallery">

            {[...images, ...images].map((image, index) => (

              <div
                key={index}
                className="mx-2 lg:mx-3 cursor-pointer"
                onClick={() =>
                  setSelectedImage(index % images.length)
                }
              >

                <img
                  src={image}
                  alt=""
                  className="
                    w-[280px]
                    h-[190px]
                    lg:w-[420px]
                    lg:h-[280px]
                    object-cover
                    rounded-lg
                    hover:scale-105
                    transition-all
                    duration-500
                  "
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {selectedImage !== null && (

        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">

          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              top-4
              right-4
              lg:top-8
              lg:right-10
              text-white
              text-4xl
              lg:text-5xl
              z-50
            "
          >
            ×
          </button>

          <button
            onClick={() =>
              setSelectedImage(
                selectedImage === 0
                  ? images.length - 1
                  : selectedImage - 1
              )
            }
            className="
              absolute
              left-2
              lg:left-8
              text-white
              text-5xl
              lg:text-7xl
              z-50
            "
          >
            ‹
          </button>

          <img
            src={images[selectedImage]}
            alt=""
            className="
              max-w-[95vw]
              max-h-[80vh]
              lg:max-w-[90vw]
              lg:max-h-[85vh]
              object-contain
            "
          />

          <button
            onClick={() =>
              setSelectedImage(
                selectedImage === images.length - 1
                  ? 0
                  : selectedImage + 1
              )
            }
            className="
              absolute
              right-2
              lg:right-8
              text-white
              text-5xl
              lg:text-7xl
              z-50
            "
          >
            ›
          </button>

        </div>

      )}
    </>
  );
}
