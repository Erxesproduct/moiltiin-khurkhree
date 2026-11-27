import Image from "next/image";

export function Intro() {
  return (
    <section id="about" className="py-28 md:py-40 px-6 relative overflow-hidden">
      <svg
        className="absolute right-0 top-0 w-1/2 h-full text-moss/10 pointer-events-none"
        viewBox="0 0 400 600"
        preserveAspectRatio="xMaxYMin slice"
        aria-hidden
      >
        <path
          d="M0 600 L 80 420 L 140 470 L 220 300 L 300 360 L 400 180 L 400 600 Z"
          fill="currentColor"
        />
      </svg>
      <div className="mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="label-eyebrow mb-6">
              01 / DISCOVER MOILTIIN
            </p>
            <h2 className="heading-section reveal">
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
                style={{ objectPosition: "center 40%" }}
              />
            </div>
            <div className="absolute -bottom-10 -left-6 md:-left-12 w-40 md:w-56 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border-4 border-softwhite">
              <Image
                src="/images/view1.jpg"
                alt="Голын эрэг"
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

