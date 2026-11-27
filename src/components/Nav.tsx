"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { resort } from "@/lib/data";

const items = [
  { href: "#about", label: "Мойлтын тухай" },
  { href: "#stay", label: "Амрах сууц" },
  { href: "#experience", label: "Мэдрэмж" },
  { href: "#events", label: "Хамтдаа" },
  { href: "#gallery", label: "Дурсамж" },
  { href: "#booking", label: "Захиалах" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = items.map((i) => i.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Мойлтын хүрхрээ"
            width={480}
            height={170}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </Link>
        <a
          href={`tel:${resort.phones[0]}`}
          className="hidden md:inline-flex items-center gap-2 text-sm text-forest"
        >
          <Phone size={15} />
          <span>{resort.phones[0]}</span>
        </a>
        <a
          href="#booking"
          className="rounded-lg bg-forest text-softwhite px-4 md:px-5 py-2 text-sm font-medium hover:bg-moss transition-colors"
        >
          Захиалах
        </a>
      </div>

      {/* Mobile: horizontal scrollable nav */}
      <nav className="lg:hidden flex gap-2 overflow-x-auto px-4 pb-3 no-scrollbar">
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            className={`shrink-0 text-xs px-3 py-1.5 rounded-md whitespace-nowrap ${
              scrolled
                ? "bg-forest/10 text-forest"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {it.label}
          </a>
        ))}
      </nav>

      {/* Desktop nav */}
      <nav className="hidden lg:flex mx-auto max-w-7xl px-6 pb-3 items-center gap-6">
        {items.map((it) => {
          const isActive = active === it.href.replace("#", "");
          return (
            <a
              key={it.href}
              href={it.href}
              className={`relative text-sm tracking-wide transition-colors py-1 cursor-pointer ${
                isActive ? "text-forest font-medium" : "text-gray-600 hover:text-forest"
              }`}
            >
              {it.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}