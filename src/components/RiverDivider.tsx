"use client";

import { useEffect, useRef } from "react";

export function RiverDivider() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const onScroll = () => {
      const rect = path.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (winH - rect.top) / (winH + rect.height))
      );
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-24 md:h-32 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full text-moss/50"
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M0 64 Q 180 20, 360 64 T 720 64 T 1080 64 T 1440 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}