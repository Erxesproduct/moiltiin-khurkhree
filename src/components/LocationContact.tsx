import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { resort } from "@/lib/data";

export function LocationContact() {
  return (
    <section id="location" className="py-28 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-moss mb-6">
            БАЙРШИЛ
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1]">
            Байгаль руу хөтлөх зам.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-ivory">
            <iframe
              title="Газрын зураг"
              src="https://www.google.com/maps?q=Terelj+National+Park+Mongolia&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-forest mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-moss mb-1">
                  Хаяг
                </p>
                <p className="text-darktext">{resort.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-forest mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-moss mb-1">
                  Утас
                </p>
                <a href={`tel:${resort.phone.replace(/\s/g, "")}`} className="text-darktext hover:text-forest">
                  {resort.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-forest mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-moss mb-1">
                  Ажиллах цаг
                </p>
                <p className="text-darktext">Улирлын чанартай — урьдчилан холбогдоно уу</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="text-forest mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-moss mb-1">
                  Холбоо барих суваг
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href={resort.whatsapp}
                    className="rounded-full border border-forest/30 px-4 py-2 text-sm text-forest hover:bg-forest hover:text-softwhite transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={resort.messenger}
                    className="rounded-full border border-forest/30 px-4 py-2 text-sm text-forest hover:bg-forest hover:text-softwhite transition-colors"
                  >
                    Messenger
                  </a>
                  <a
                    href={`viber://add?number=97688676600`}
                    className="rounded-full border border-forest/30 px-4 py-2 text-sm text-forest hover:bg-forest hover:text-softwhite transition-colors"
                  >
                    Viber
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a href={resort.facebook} aria-label="Facebook" className="text-forest hover:text-moss">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.5v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href={resort.instagram} aria-label="Instagram" className="text-forest hover:text-moss">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Terelj+National+Park+Mongolia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 rounded-full bg-forest text-softwhite px-6 py-3 text-sm hover:bg-moss transition-colors w-fit"
            >
              Чиглэл авах
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}