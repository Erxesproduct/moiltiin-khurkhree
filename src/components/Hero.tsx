"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const heroImages = ["/images/hero.jpg", "/images/view1.jpg"];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % heroImages.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      {heroImages.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Мойлтын хүрхрээ амралтын газар"
            fill
            priority={idx === 0}
            className="object-cover"
            style={{ objectPosition: "center 50%" }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6">
        <div className="mx-auto max-w-7xl w-full">
          <p className="text-softwhite/80 text-xs tracking-[0.25em] uppercase mb-4">
            ТЭРЭЛЖ · МОНГОЛ
          </p>
          <h1
            className="font-serif text-softwhite max-w-3xl"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            Байгальд ойрхон,
            <br />
            <span className="italic">өөртөө илүү ойрхон.</span>
          </h1>
          <p className="text-softwhite/90 text-base md:text-lg max-w-xl mt-5 leading-relaxed">
            Хотын чимээнээс түр холдож, байгалийн сайханд хайртай
            хүмүүстэйгээ мартагдашгүй дурсамж бүтээгээрэй.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#booking"
              className="rounded-lg bg-softwhite text-forest px-6 py-3 text-sm font-medium hover:bg-ivory transition-colors"
            >
              Амралтаа төлөвлөх
            </a>
            <a
              href="#about"
              className="rounded-lg border border-softwhite/60 text-softwhite px-6 py-3 text-sm font-medium hover:bg-softwhite/10 transition-colors"
            >
              Орчинтой танилцах
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-softwhite/70 flex flex-col items-center gap-1">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}