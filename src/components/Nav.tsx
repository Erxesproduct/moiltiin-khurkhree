"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
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
  const [open, setOpen] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md shadow-sm py-2.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Мойлтын хүрхрээ"
            width={160}
            height={40}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {items.map((it) => {
            const isActive = active === it.href.replace("#", "");
            return (
              <a
                key={it.href}
                href={it.href}
                onClick={(e) => {
                  e.preventDefault();
                  const id = it.href.replace("#", "");
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative text-sm tracking-wide transition-colors py-1 cursor-pointer ${
                  scrolled
                    ? "text-darktext hover:text-forest"
                    : "text-softwhite/90 hover:text-softwhite"
                } ${isActive ? (scrolled ? "text-forest" : "text-softwhite") : ""}`}
              >
                {it.label}
                <svg
                  className={`absolute left-0 -bottom-1 w-full h-2 transition-opacity duration-300 pointer-events-none ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 4 Q 25 0, 50 4 T 100 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${resort.phone.replace(/\s/g, "")}`}
            className={`hidden md:inline-flex items-center gap-2 text-sm ${
              scrolled ? "text-forest" : "text-softwhite"
            }`}
          >
            <Phone size={15} />
            <span className="hidden xl:inline">{resort.phone}</span>
          </a>
          <a
            href="#booking"
            className="rounded-full bg-forest text-softwhite px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium hover:bg-moss transition-colors"
          >
            Захиалах
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

      {open && (
        <div className="lg:hidden fixed inset-0 top-0 bg-forest text-softwhite z-40 flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-serif text-xl">Мойлтын хүрхрээ</span>
            <button onClick={() => setOpen(false)} aria-label="Хаах">
              <X />
            </button>
          </div>
          <nav className="flex flex-col gap-5 px-6 mt-6">
            {items.map((it) => (
              <button
                key={it.href}
                type="button"
                onClick={() => {
                  const id = it.href.replace("#", "");
                  setOpen(false);
                  setTimeout(() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }}
                className="font-serif text-2xl border-b border-softwhite/15 pb-3 text-left cursor-pointer"
              >
                {it.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

