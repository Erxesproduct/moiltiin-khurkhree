import Image from "next/image";
import { experiences } from "@/lib/data";

export function Experiences() {
  return (
    <section id="experience" className="py-28 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-moss mb-6">
            03 / MAKE MEMORIES
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1]">
            Амралтын хором бүрийг мэдэр.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4">
          {experiences.map((e, i) => {
            const spans = [
              "col-span-2 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-2 row-span-1",
              "col-span-1 row-span-2",
              "col-span-1 row-span-1",
            ];
            return (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm group ${spans[i % spans.length]}`}
              >
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-softwhite font-serif text-lg md:text-xl">
                    {e.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}