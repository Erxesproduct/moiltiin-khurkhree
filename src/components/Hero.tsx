import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Мойлтын хүрхрээ амралтын газар"
          fill
          priority
          className="object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-32 px-6">
        <div className="mx-auto max-w-7xl w-full">
          <p className="text-softwhite/80 text-xs tracking-[0.3em] uppercase mb-6">
            ТЭРЭЛЖ · МОНГОЛ
          </p>
          <h1 className="font-serif text-softwhite text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl">
            Байгальд ойрхон,
            <br />
            өөртөө илүү ойрхон.
          </h1>
          <p className="text-softwhite/85 text-lg md:text-xl max-w-xl mt-6 leading-relaxed">
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
              className="rounded-full border border-softwhite/60 text-softwhite px-7 py-3.5 text-sm font-medium hover:bg-softwhite/10 transition-colors"
            >
              Орчинтой танилцах
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-softwhite/70 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}