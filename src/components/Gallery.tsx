"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/data";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const prev = () =>
    setIndex((i) => (i === null ? null : (i + galleryImages.length - 1) % galleryImages.length));
  const next = () =>
    setIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  return (
    <section id="gallery" className="py-28 md:py-40 px-6 bg-ivory/40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1]">
            Мойлтын дурсамжууд.
          </h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="block w-full break-inside-avoid overflow-hidden rounded-sm group"
            >
              <Image
                src={src}
                alt={`Зураг ${i + 1}`}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
          onClick={close}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={close}
            aria-label="Хаах"
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Өмнөх"
          >
            <ChevronLeft size={40} />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[index]}
              alt="Зураг"
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Дараах"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}

