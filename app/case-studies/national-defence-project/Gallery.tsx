"use client";

import { useState } from "react";

export default function Gallery() {
  const images = [
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery1.JPG",
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery2.JPG",
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery3.JPG",
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery4.JPG",
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery5.JPG",
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery6.JPG",
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery7.JPG",
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery8.JPG",
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery9.JPG",
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery10.JPG",
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery11.JPG",
    "/images/Casestudies/DefenceCargo/DefenceCargo_Gallery12.JPG",
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl text-[#173f74] mb-12">
            Project Gallery
          </h2>

        </div>

        <div className="gallery-marquee">

          <div className="gallery-track animate-gallery">

            {[...images, ...images].map((image, index) => (

              <div
                key={index}
                className="mx-3 cursor-pointer"
                onClick={() =>
                  setSelectedImage(index % images.length)
                }
              >

                <img
                  src={image}
                  alt=""
                  className="
                    w-[420px]
                    h-[280px]
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
            className="absolute top-8 right-10 text-white text-5xl"
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
            className="absolute left-8 text-white text-7xl"
          >
            ‹
          </button>

          <img
            src={images[selectedImage]}
            alt=""
            className="
              max-w-[90vw]
              max-h-[85vh]
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
            className="absolute right-8 text-white text-7xl"
          >
            ›
          </button>

        </div>

      )}
    </>
  );
}
