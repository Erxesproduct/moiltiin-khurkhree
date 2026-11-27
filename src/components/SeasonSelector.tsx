"use client";

import { useState } from "react";
import Image from "next/image";
import { seasons } from "@/lib/data";

export function SeasonSelector() {
  const [active, setActive] = useState(1);
  const s = seasons[active];

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          key={s.key}
          src={s.image}
          alt={s.title}
          fill
          className="object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-softwhite/70 mb-6">
            УЛИРАЛ БҮР ӨӨРИЙН ГЭСЭН ИД ШИДТЭЙ
          </p>
          <h2
            className="font-serif text-4xl md:text-6xl text-softwhite leading-[1.1]"
            style={{ color: s.accent === "#243D32" ? "#FFFDF8" : undefined }}
          >
            {s.title}
          </h2>
          <p className="mt-6 text-softwhite/85 text-lg leading-relaxed max-w-xl">
            {s.description}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {seasons.map((se, i) => (
            <button
              key={se.key}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full text-sm border transition-all ${
                i === active
                  ? "bg-softwhite text-forest border-softwhite"
                  : "bg-transparent text-softwhite border-softwhite/40 hover:border-softwhite"
              }`}
            >
              {se.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}