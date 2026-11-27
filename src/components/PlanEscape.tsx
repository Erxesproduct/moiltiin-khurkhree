"use client";

import { useState } from "react";
import Image from "next/image";
import { escapeTypes, accommodations } from "@/lib/data";

export function PlanEscape() {
  const [active, setActive] = useState("family");
  const t = escapeTypes.find((e) => e.key === active)!;
  const recs = accommodations.filter((a) => t.recommend.includes(a.slug));

  return (
    <section className="py-28 md:py-40 px-6 bg-ivory/40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="label-eyebrow mb-6">
            ТӨЛӨВЛӨГӨӨ
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1]">
            Та хэрхэн амрахыг хүсэж байна вэ?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {escapeTypes.map((e) => (
            <button
              key={e.key}
              onClick={() => setActive(e.key)}
              className={`text-left p-5 rounded-sm border transition-all ${
                active === e.key
                  ? "bg-forest text-softwhite border-forest"
                  : "bg-softwhite text-forest border-forest/20 hover:border-forest/60"
              }`}
            >
              <p className="font-serif text-xl">{e.label}</p>
              <p
                className={`text-sm mt-2 ${
                  active === e.key ? "text-softwhite/80" : "text-darktext/70"
                }`}
              >
                {e.description}
              </p>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image src={t.image} alt={t.label} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-3xl text-forest mb-4">
              Санал болгох байрлах сууц
            </h3>
            <ul className="space-y-3">
              {recs.map((a) => (
                <li
                  key={a.slug}
                  className="flex items-center justify-between border-b border-forest/15 pb-3"
                >
                  <span className="text-darktext">{a.name}</span>
                  <span className="text-forest font-medium">
                    {a.price === "Үнэ лавлах" ? "Үнэ лавлах" : `${a.price} USD / хоног`}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#booking"
              className="inline-block mt-8 rounded-full bg-forest text-softwhite px-6 py-3 text-sm hover:bg-moss transition-colors"
            >
              Захиалга өгөх
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

