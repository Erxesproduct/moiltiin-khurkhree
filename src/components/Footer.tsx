import { resort } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-forest text-softwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl mb-4">Мойлтын хүрхрээ</h3>
            <p className="text-softwhite/70 max-w-md leading-relaxed">
              Дараагийн дурсамж тань эндээс эхэлнэ. Байгальд ойрхон, өөртөө илүү
              ойрхон.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-4 text-softwhite/60">
              Цэс
            </h4>
            <ul className="space-y-2 text-softwhite/80">
              <li><a href="#about">Бидний тухай</a></li>
              <li><a href="#stay">Байрлах</a></li>
              <li><a href="#experience">Амралтын мэдрэмж</a></li>
              <li><a href="#events">Арга хэмжээ</a></li>
              <li><a href="#gallery">Зургийн цомог</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-4 text-softwhite/60">
              Холбоо барих
            </h4>
            <ul className="space-y-2 text-softwhite/80">
              <li>{resort.phone}</li>
              <li>{resort.location}</li>
              <li>
                <a href={resort.facebook} className="hover:text-softwhite">
                  Facebook
                </a>
              </li>
              <li>
                <a href={resort.instagram} className="hover:text-softwhite">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-softwhite/15 flex flex-col md:flex-row justify-between gap-4 text-sm text-softwhite/50">
          <p>© 2026 Мойлтын хүрхрээ амралтын газар. Бүх эрх хуулиар хамгаалагдсан.</p>
          <p>Designed with care.</p>
        </div>
      </div>
    </footer>
  );
}