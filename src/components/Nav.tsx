"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Phone, MoreVertical } from "lucide-react";
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

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // Body scroll lock removed: overflow:hidden on body breaks touch on iOS Safari

  // Mobile menu rendered inline below the header (no portal, no fixed positioning for iOS reliability)

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-[70] transition-all duration-500 ${
          scrolled
            ? "bg-ivory/95 shadow-sm py-2.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-6 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Мойлтын хүрхрээ"
              width={480}
              height={170}
              className={`h-9 md:h-11 w-auto object-contain transition-all duration-300 ${
                scrolled ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              }`}
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
              href={`tel:${resort.phones[0]}`}
              className={`hidden md:inline-flex items-center gap-2 text-sm ${
                scrolled ? "text-forest" : "text-softwhite"
              }`}
            >
              <Phone size={15} />
              <span className="hidden xl:inline">{resort.phones[0]}</span>
            </a>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-forest text-softwhite px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium hover:bg-moss transition-colors cursor-pointer"
            >
              Захиалах
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Цэс"
              className={`lg:hidden flex items-center gap-2 px-4 py-2 rounded-full touch-manipulation ${
                scrolled
                  ? "bg-forest text-softwhite"
                  : "bg-softwhite/20 text-softwhite backdrop-blur-sm"
              }`}
              style={{ touchAction: "manipulation", minHeight: 44 }}
            >
              {open ? <X size={18} /> : <MoreVertical size={18} />}
              <span className="text-sm font-medium">Цэс</span>
            </button>
          </div>
        </div>
        {open && (
          <nav className="lg:hidden bg-forest px-5 py-4 flex flex-col gap-0">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="font-serif text-xl text-softwhite border-b border-softwhite/15 py-3 block touch-manipulation"
                style={{ touchAction: "manipulation" }}
              >
                {it.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}