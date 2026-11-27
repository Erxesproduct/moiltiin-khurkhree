import { resort } from "@/lib/data";

const highlights = [
  { title: "Арга хэмжээ", emoji: "🎉", desc: "Хонхны баяр, дурсамж уулзалт, байгууллагын хүлээн авалт" },
  { title: "SUMMER", emoji: "💚", desc: "Зуны амралт, байгаль, голын эрэг" },
  { title: "WINTER", emoji: "❄️", desc: "Өвлийн байгаль, цасан улирал" },
  { title: "SPRING", emoji: "🌱", desc: "Хаврын сэргэлт" },
  { title: "AUTUMN", emoji: "🍁", desc: "Алтан намар" },
  { title: "Амтат хоол", emoji: "🍽️", desc: "Рестораны хоол" },
  { title: "Хорхог", emoji: "🍖", desc: "Уламжлалт хорхог" },
  { title: "PIAA&OYU", emoji: "📸", desc: "Зураг авалт" },
];

export function MoiltiinMoments() {
  return (
    <section id="moments" className="py-28 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="label-eyebrow mb-6">
            MOILTIIN MOMENTS
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1]">
            Мойлтын жижигхэн, нандин мөчүүд.
          </h2>
          <p className="mt-6 text-darktext/70 leading-relaxed">
            Instagram highlight-ууд болон Facebook нийтлэлүүдэд суурилсан
            бодит агуулга. Premium travel journal мэдрэмжтэй editorial layout.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <a
              key={h.title}
              href={resort.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-ivory/60 rounded-sm p-6 hover:bg-forest hover:text-softwhite transition-colors"
            >
              <div className="text-3xl mb-3">{h.emoji}</div>
              <h3 className="font-serif text-xl text-forest group-hover:text-softwhite">
                {h.title}
              </h3>
              <p className="text-sm text-darktext/70 group-hover:text-softwhite/80 mt-2">
                {h.desc}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={resort.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest text-softwhite px-6 py-3 text-sm hover:bg-moss transition-colors"
          >
            Instagram руу шилжих
          </a>
          <a
            href={resort.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-forest/30 text-forest px-6 py-3 text-sm hover:bg-forest hover:text-softwhite transition-colors"
          >
            Facebook руу шилжих
          </a>
        </div>
      </div>
    </section>
  );
}

