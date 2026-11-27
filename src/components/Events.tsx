"use client";

import Image from "next/image";
import { resort, eventPackages, additionalServices } from "@/lib/data";

export function Events() {
  return (
    <section id="events" className="py-28 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/view2.jpg"
              alt="Арга хэмжээ"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-moss mb-6">
              04 / TOGETHER
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1]">
              Хамтдаа бүтээх нандин дурсамж.
            </h2>
            <p className="mt-8 text-darktext/80 leading-relaxed text-lg">
              Амралтын газарт байгууллагын амралт, гэр бүлийн баяр, тэмдэглэлт
              өдөр зэрэг арга хэмжээг зохион байгуулах боломжтой. Том хэмжээтэй
              талбай, байгалийн орчин, хоолны үйлчилгээг нэг дороос авах
              боломжтой.
            </p>
            <p className="mt-6 text-darktext/70">
              Хүлээн авалтын заал нь {resort.capacity} багтаамжтай.
            </p>
            <ul className="mt-6 space-y-2 text-darktext/80">
              {eventPackages.map((e) => (
                <li key={e}>• {e}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-darktext/60">
              Нэмэлт үйлчилгээ: {additionalServices.join(" · ")}
            </p>
            <button
              type="button"
              onClick={() => {
                const msg = encodeURIComponent(
                  "Сайн байна уу! Арга хэмжээ төлөвлөх хүсэлт илгээж байна."
                );
                window.open(`https://wa.me/97688676600?text=${msg}`, "_blank");
              }}
              className="inline-block mt-10 rounded-full bg-forest text-softwhite px-7 py-3.5 text-sm font-medium hover:bg-moss transition-colors cursor-pointer"
            >
              Арга хэмжээ төлөвлөх
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}