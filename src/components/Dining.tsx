import Image from "next/image";
import { resort } from "@/lib/data";

export function Dining() {
  return (
    <section id="dining" className="py-28 md:py-40 px-6 bg-ivory/40">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-moss mb-6">
              Хоол, амт
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1]">
              Байгалийн дунд амтлах жаргал.
            </h2>
            <p className="mt-8 text-darktext/80 leading-relaxed text-lg max-w-md">
              Ресторан, гал тогооны үйлчилгээ ажиллана. Instagram дээрх
              &quot;Амтат хоол&quot;, &quot;Хорхог&quot; highlight-уудад бодит хоолны зургууд
              байна.
            </p>
            <ul className="mt-8 space-y-2 text-darktext/80">
              <li>• Ресторан</li>
              <li>• Хорхог, амтат хоол</li>
              <li>• Байгууллагын хүлээн авалтын хоол</li>
            </ul>
            <a
              href={resort.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 rounded-full border border-forest/30 text-forest px-6 py-3 text-sm hover:bg-forest hover:text-softwhite transition-colors"
            >
              Instagram дээрх хоолны зургууд →
            </a>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/images/intro.jpg"
                alt="Рестораны орчин"
                fill
                className="object-cover"
                style={{ objectPosition: "center 40%" }}
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm mt-8">
              <Image
                src="/images/summer-house.jpg"
                alt="Амралтын газрын орчин"
                fill
                className="object-cover"
                style={{ objectPosition: "center 40%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}