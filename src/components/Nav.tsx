"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { resort } from "@/lib/data";

const items = [
  { href: "#about", label: "Бидний тухай" },
  { href: "#stay", label: "Байрлах" },
  { href: "#experience", label: "Амралтын мэдрэмж" },
  { href: "#events", label: "Арга хэмжээ" },
  { href: "#gallery", label: "Зургийн цомог" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span
            className={`font-serif text-xl tracking-wide ${
              scrolled ? "text-forest" : "text-softwhite"
            }`}
          >
            Мойлтын хүрхрээ
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className={`text-sm tracking-wide transition-colors ${
                scrolled
                  ? "text-darktext hover:text-forest"
                  : "text-softwhite/90 hover:text-softwhite"
              }`}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={resort.whatsapp}
            className={`hidden md:inline-flex items-center gap-2 text-sm ${
              scrolled ? "text-forest" : "text-softwhite"
            }`}
          >
            <Phone size={16} />
            {resort.phone}
          </a>
          <a
            href="#booking"
            className="rounded-full bg-forest text-softwhite px-5 py-2.5 text-sm font-medium hover:bg-moss transition-colors"
          >
            Амралтаа захиалах
          </a>
          <button
            className={`lg:hidden ${scrolled ? "text-forest" : "text-softwhite"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Цэс"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-0 bg-forest text-softwhite z-40 flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-serif text-xl">Мойлтын хүрхрээ</span>
            <button onClick={() => setOpen(false)} aria-label="Хаах">
              <X />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-6 mt-8">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl"
              >
                {it.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit rounded-full bg-softwhite text-forest px-6 py-3"
            >
              Амралтаа захиалах
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}