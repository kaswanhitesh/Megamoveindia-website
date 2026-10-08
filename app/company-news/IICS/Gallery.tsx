"use client";

import { useState } from "react";

export default function Gallery() {
  const images = [
    "/images/Companynews/IICS/IICS_Gallery1.webp",
    "/images/Companynews/IICS/IICS_Gallery2.webp",
    "/images/Companynews/IICS/IICS_Gallery3.webp",
    "/images/Companynews/IICS/IICS_Gallery4.webp",
    "/images/Companynews/IICS/IICS_Gallery5.webp",
    "/images/Companynews/IICS/IICS_Gallery6.webp",
    "/images/Companynews/IICS/IICS_Gallery7.webp",
    "/images/Companynews/IICS/IICS_Gallery8.webp",
    "/images/Companynews/IICS/IICS_Gallery9.webp",
    "/images/Companynews/IICS/IICS_Gallery10.webp",
    "/images/Companynews/IICS/IICS_Gallery11.webp",
    "/images/Companynews/IICS/IICS_Gallery12.webp",
    "/images/Companynews/IICS/IICS_Gallery13.webp",
    "/images/Companynews/IICS/IICS_Gallery14.webp",
    "/images/Companynews/IICS/IICS_Gallery15.webp",
    "/images/Companynews/IICS/IICS_Gallery16.webp",
    "/images/Companynews/IICS/IICS_Gallery17.webp",
    "/images/Companynews/IICS/IICS_Gallery18.webp",
    "/images/Companynews/IICS/IICS_Gallery19.webp",
    "/images/Companynews/IICS/IICS_Gallery20.webp",
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="py-12 lg:py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
            Event Gallery
          </h2>

        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

            {images.map((image, index) => (

              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >

                <img
                  src={image}
                  alt=""
                  className="
                    w-full
                    h-[220px]
                    lg:h-[260px]
                    object-cover
                    rounded-lg
                  "
                />

              </div>

            ))}

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
