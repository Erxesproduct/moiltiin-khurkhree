"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Users, Bed, Maximize2, X } from "lucide-react";
import { accommodations, galleryImages } from "@/lib/data";

export function Accommodation() {
  const scroller = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  const acc = accommodations.find((a) => a.slug === selected);

  const requestBooking = (slug: string) => {
    window.dispatchEvent(new CustomEvent("selectStay", { detail: slug }));
    setSelected(null);
    const el = document.getElementById("booking");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="stay" className="py-28 md:py-40 bg-ivory/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="label-eyebrow mb-6">
              02 / STAY WITH US
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1]">
              Таны амрах орон зай.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              className="w-11 h-11 rounded-full border border-forest/30 flex items-center justify-center hover:bg-forest hover:text-softwhite transition-colors"
              aria-label="Буцах"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-11 h-11 rounded-full border border-forest/30 flex items-center justify-center hover:bg-forest hover:text-softwhite transition-colors"
              aria-label="Урагшлах"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] pb-6 snap-x snap-mandatory"
      >
        {accommodations.map((a) => (
          <article
            key={a.slug}
            className="snap-start shrink-0 w-[300px] md:w-[360px] group"
          >
            <button
              onClick={() => setSelected(a.slug)}
              className="block w-full text-left"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={a.image}
                  alt={a.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "center 40%" }}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-softwhite/90 text-forest text-xs px-3 py-1 rounded-full">
                    {a.price} / хоног
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="font-serif text-2xl text-forest">{a.name}</h3>
                <div className="flex items-center gap-4 text-sm text-darktext/70 mt-2">
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {a.guests}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bed size={14} /> {a.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize2 size={14} /> {a.area}
                  </span>
                </div>
                <p className="text-darktext/70 mt-3 text-sm leading-relaxed">
                  {a.description}
                </p>
                <span className="inline-block mt-4 text-sm text-forest underline underline-offset-4 hover:text-moss">
                  Дэлгэрэнгүй үзэх →
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {/* Modal */}
      {acc && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-softwhite rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-forest/10">
              <h3 className="font-serif text-2xl text-forest">{acc.name}</h3>
              <button
                onClick={() => setSelected(null)}
                aria-label="Хаах"
                className="text-forest"
              >
                <X />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
              <div className="space-y-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={acc.image}
                    alt={acc.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 40%" }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {galleryImages.slice(0, 3).map((src, i) => (
                    <div
                      key={i}
                      className="relative aspect-square overflow-hidden rounded-sm"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center 40%" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-4 text-sm text-darktext/80 mb-4">
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {acc.guests}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bed size={14} /> {acc.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize2 size={14} /> {acc.area}
                  </span>
                </div>
                <p className="text-forest font-medium mb-4">
                  {acc.price} / хоног
                </p>
                <p className="text-darktext/80 leading-relaxed mb-4">
                  {acc.description}
                </p>
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-moss mb-2">
                    Үйлчилгээ
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {acc.amenities.map((am) => (
                      <li
                        key={am}
                        className="text-xs bg-ivory text-forest px-3 py-1 rounded-full"
                      >
                        {am}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => requestBooking(acc.slug)}
                  className="rounded-full bg-forest text-softwhite px-6 py-3 text-sm font-medium hover:bg-moss transition-colors"
                >
                  Захиалгын хүсэлт илгээх
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

