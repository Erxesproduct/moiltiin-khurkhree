"use client";

import { useState, useEffect } from "react";
import { Calendar, Users, Home, Search } from "lucide-react";
import { accommodations } from "@/lib/data";

export function BookingPanel() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [stay, setStay] = useState(accommodations[0].slug);

  const selectedAcc = accommodations.find((a) => a.slug === stay);
  const capacityNum = selectedAcc ? parseInt(selectedAcc.guests) || 0 : 0;
  const overCapacity = capacityNum > 0 && guests > capacityNum;
  const dateError =
    checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)
      ? "Буцах өдөр ирэх өдрөөс хойш байх ёстой."
      : "";

  useEffect(() => {
    const handler = (e: Event) => {
      const slug = (e as CustomEvent).detail;
      if (slug) setStay(slug);
    };
    window.addEventListener("selectStay", handler);
    return () => window.removeEventListener("selectStay", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const acc = accommodations.find((a) => a.slug === stay)?.name ?? stay;
    const msg = encodeURIComponent(
      `Сайн байна уу! Мойлтын хүрхрээ амралтын газарт захиалга өгөх хүсэлт:\n` +
        `Ирэх: ${checkIn}\nБуцах: ${checkOut}\nЗочин: ${guests}\nСууц: ${acc}`
    );
    window.open(`https://wa.me/97688676600?text=${msg}`, "_blank");
  };

  return (
    <section id="booking" className="relative -mt-20 z-20 px-6">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-6xl bg-softwhite rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
      >
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-moss">
            Ирэх өдөр
          </label>
          <div className="flex items-center gap-2 border-b border-forest/20 pb-2">
            <Calendar size={18} className="text-forest" />
            <input
              type="date"
              required
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent outline-none w-full text-darktext"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-moss">
            Буцах өдөр
          </label>
          <div className="flex items-center gap-2 border-b border-forest/20 pb-2">
            <Calendar size={18} className="text-forest" />
            <input
              type="date"
              required
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent outline-none w-full text-darktext"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-moss">
            Зочдын тоо
          </label>
          <div className="flex items-center gap-2 border-b border-forest/20 pb-2">
            <Users size={18} className="text-forest" />
            <input
              type="number"
              min={1}
              max={20}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="bg-transparent outline-none w-full text-darktext"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-moss">
            Байрлах сууц
          </label>
          <div className="flex items-center gap-2 border-b border-forest/20 pb-2">
            <Home size={18} className="text-forest" />
            <select
              value={stay}
              onChange={(e) => setStay(e.target.value)}
              className="bg-transparent outline-none w-full text-darktext"
            >
              {accommodations.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={!!dateError}
          className="rounded-full bg-forest text-softwhite px-6 py-3.5 text-sm font-medium hover:bg-moss transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Search size={16} />
          Захиалгын хүсэлт илгээх
        </button>
      </form>
      {(dateError || overCapacity) && (
        <div className="mt-4 max-w-3xl mx-auto text-center text-sm text-red-700">
          {dateError}
          {overCapacity && !dateError && (
            <>Сонгосон сууц {capacityNum} зочин багтаах бөгөөд та {guests} зочин оруулсан байна.</>
          )}
        </div>
      )}
      <p className="text-center text-xs text-darktext/60 mt-4 max-w-3xl mx-auto">
        Захиалгын хүсэлт WhatsApp-аар илгээгдэнэ. Баталгаажсан захиалга, үнэ, сул
        өрөөний мэдээллийг манай баг хариу өгнө. Сонгосон сууцны үнэ нь 1 хоногийн
        үнэ бөгөөд баталгаажсан захиалгын үед эцсийн дүн тохирогдоно.
      </p>
    </section>
  );
}