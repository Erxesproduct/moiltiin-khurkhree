import Image from "next/image";

const moments = [
  {
    time: "Өглөө",
    title: "Нар мандах үеийн цэвэр агаар",
    text: "Голын эрэг дээрх зөөлөн нарны туяа, моддын дундах тайван орчин. Өглөөний цайгаа гадаа уух боломж.",
    image: "/images/view1.jpg",
  },
  {
    time: "Өдөр",
    title: "Амралт, тоглоом, байгаль",
    text: "Сагсан бөмбөг, гар бөмбөг, хүүхдийн тоглоомын талбай. Гэр бүл, найз нөхдөөрөө цаг өнгөрүүлэх орон зай.",
    image: "/images/hero.jpg",
  },
  {
    time: "Орой",
    title: "Нар жаргах үеийн дулаан уур амьсгал",
    text: "Голын эрэг дээрх оройн хоол, гэр бүлээрээ цаг өнгөрүүлэх тайван мөчүүд.",
    image: "/images/intro.jpg",
  },
  {
    time: "Шөнө",
    title: "Одтой тэнгэр, тайван нойр",
    text: "Хотын гэрлээс хол, одтой тэнгэрийн дор амар тайван нойрсах мэдрэмж.",
    image: "/images/view2.jpg",
  },
];

export function DayAtMoiltiin() {
  return (
    <section className="py-28 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-moss mb-6">
            МОЙЛТЫН НЭГ ӨДӨР
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1]">
            Нэг өдрийн амралтын түүх.
          </h2>
        </div>

        <div className="relative">
          {/* river line */}
          <svg
            className="absolute left-4 md:left-1/2 top-0 h-full w-8 -translate-x-1/2 text-moss/40"
            viewBox="0 0 32 1000"
            preserveAspectRatio="none"
          >
            <path
              d="M16 0 Q 24 125, 16 250 T 16 500 T 16 750 T 16 1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          </svg>

          <div className="space-y-16 md:space-y-24">
            {moments.map((m, i) => (
              <div
                key={m.time}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 40%" }}
                  />
                </div>
                <div className="md:px-8">
                  <p className="text-xs tracking-[0.3em] uppercase text-moss mb-3">
                    {m.time}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-forest mb-3">
                    {m.title}
                  </h3>
                  <p className="text-darktext/80 leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}