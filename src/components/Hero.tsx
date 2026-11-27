"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const heroImages = [
  { src: "/images/hero.jpg", label: "Голын эрэг · Өглөө" },
  { src: "/images/view1.jpg", label: "Модон дунд · Нарны туяа" },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % heroImages.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      {heroImages.map((img, idx) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt="Мойлтын хүрхрээ амралтын газар"
            fill
            priority={idx === 0}
            className="object-cover animate-slow-zoom"
            style={{ objectPosition: idx === 0 ? "center 60%" : "center 40%" }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/60" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-28 md:pb-36 px-6">
        <div className="mx-auto max-w-7xl w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-softwhite/60" />
            <p className="text-softwhite/85 text-xs tracking-[0.3em] uppercase">
              ТЭРЭЛЖ · МОНГОЛ
            </p>
          </div>
          <h1
            className="font-serif text-softwhite max-w-4xl"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 5.5rem)",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              textShadow: "0 2px 18px rgba(0,0,0,0.35)",
            }}
          >
            Байгальд ойрхон,
            <br />
            <span className="italic">өөртөө илүү ойрхон.</span>
          </h1>
          <p className="text-softwhite/85 text-base md:text-lg max-w-md mt-6 leading-relaxed">
            Хотын чимээнээс түр холдож, байгалийн сайханд хайртай
            хүмүүстэйгээ мартагдашгүй дурсамж бүтээгээрэй.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#booking"
              className="rounded-full bg-softwhite text-forest px-7 py-3.5 text-sm font-medium hover:bg-ivory transition-colors"
            >
              Амралтаа төлөвлөх
            </a>
            <a
              href="#about"
              className="rounded-full border border-softwhite/50 text-softwhite px-7 py-3.5 text-sm font-medium hover:bg-softwhite/10 transition-colors"
            >
              Орчинтой танилцах
            </a>
          </div>
        </div>
      </div>

      {/* Image indicator */}
      <div className="absolute bottom-8 right-6 z-10 text-softwhite/80 text-xs tracking-widest flex items-center gap-3">
        <span>
          {String(i + 1).padStart(2, "0")} / {String(heroImages.length).padStart(2, "0")}
        </span>
        <span className="hidden md:inline text-softwhite/60">·</span>
        <span className="hidden md:inline">{heroImages[i].label}</span>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-softwhite/70 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>

      {/* Organic transition */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 text-softwhite pointer-events-none"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
      >
        <path
          d="M0 64 L0 32 Q 360 0, 720 32 T 1440 32 L1440 64 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}

