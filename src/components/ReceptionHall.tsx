import Image from "next/image";

export function ReceptionHall() {
  return (
    <section id="reception" className="py-28 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <Image
                src="/images/view2.jpg"
                alt="Хүлээн авалтын заал"
                fill
                className="object-cover"
                style={{ objectPosition: "center 40%" }}
              />
            </div>
            <p className="mt-3 text-xs text-darktext/50">
              Зураг: амралтын газрын орчин. Заалны дотоод зураг нэмэгдэж байна.
            </p>
          </div>
          <div className="lg:col-span-6">
            <p className="label-eyebrow mb-6">ХҮЛЭЭН АВАЛТ</p>
            <h2 className="heading-section">
              Хамтдаа байх мөч бүр үнэ цэнтэй.
            </h2>
            <p className="body-text mt-6">
              300 хүн хүртэлх багтаамжтай хүлээн авалтын заал. Хонхны баяр,
              дурсамж уулзалт, байгууллагын хүлээн авалт, энгийн багц
              зохион байгуулахад тохиромжтой.
            </p>
            <ul className="mt-8 space-y-2 text-darktext/80">
              <li>• Багтаамж: 300 хүн хүртэлх</li>
              <li>• 1-р давхарт проектор, яригч суурьлагдсан том заал</li>
              <li>• Хурлын заал болгон ашиглаж болно</li>
              <li>• Гэр бүлийн баяр, тэмдэглэлт өдөр</li>
            </ul>
            <a
              href="https://wa.me/97688676600?text=%D0%A5%D2%AF%D0%BB%D1%8D%D1%8D%D0%BD%20%D0%B0%D0%B2%D0%B0%D0%BB%D1%82%D1%8B%D0%BD%20%D0%B7%D0%B0%D1%85%D0%B8%D0%B0%D0%BB%D0%B3%D0%B0%20%D0%B0%D0%B2%D0%B0%D1%85%20%D1%85%D2%AF%D1%81%D1%8D%D0%BB%D1%82"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 rounded-full bg-forest text-softwhite px-6 py-3 text-sm hover:bg-moss transition-colors"
            >
              Хүлээн авалт захиалах
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}