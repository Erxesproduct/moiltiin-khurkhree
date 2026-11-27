"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Users, Bed, Maximize2 } from "lucide-react";
import { accommodations } from "@/lib/data";

export function Accommodation() {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="stay" className="py-28 md:py-40 bg-ivory/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-moss mb-6">
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={a.image}
                alt={a.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
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
              <a
                href="#booking"
                className="inline-block mt-4 text-sm text-forest underline underline-offset-4 hover:text-moss"
              >
                Дэлгэрэнгүй үзэх →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}