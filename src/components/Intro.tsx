import Image from "next/image";

export function Intro() {
  return (
    <section id="about" className="py-28 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-moss mb-6">
              01 / DISCOVER MOILTIIN
            </p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] text-forest">
              Хотын чимээнээс хол,
              <br />
              байгалийн зүрхэнд.
            </h2>
            <p className="mt-8 text-darktext/80 leading-relaxed text-lg max-w-md">
              Мойлтын хүрхрээ амралтын газар нь байгалийн сайхныг мэдэрч, өдөр
              тутмын завгүй амьдралаас түр холдон, өөртөө болон хайртай
              хүмүүстээ цаг гаргах орон зай юм.
            </p>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/intro.jpg"
                alt="Байгалийн сайхан"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-6 md:-left-12 w-40 md:w-56 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border-4 border-softwhite">
              <Image
                src="/images/view1.jpg"
                alt="Голын эрэг"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}