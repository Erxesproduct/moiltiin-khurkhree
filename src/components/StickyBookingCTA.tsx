"use client";

import { useEffect, useState } from "react";

export function StickyBookingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <a
      href="#booking"
      className="md:hidden fixed bottom-4 left-4 right-4 z-40 rounded-full bg-forest text-softwhite text-center py-3.5 text-sm font-medium shadow-lg"
    >
      Захиалгын хүсэлт илгээх
    </a>
  );
}

