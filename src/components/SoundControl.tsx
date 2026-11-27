"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function SoundControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio("/audio/nature.mp3");
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;
    audio.addEventListener("error", () => setAvailable(false));
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio || !available) return;
    if (playing) {
      // fade out
      const fade = setInterval(() => {
        if (audio.volume > 0.05) audio.volume -= 0.05;
        else {
          audio.pause();
          audio.volume = 0;
          clearInterval(fade);
        }
      }, 50);
      setPlaying(false);
    } else {
      try {
        await audio.play();
        // fade in
        const fade = setInterval(() => {
          if (audio.volume < 0.35) audio.volume += 0.05;
          else clearInterval(fade);
        }, 50);
        setPlaying(true);
      } catch {
        setAvailable(false);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggle}
        disabled={!available}
        title={
          available
            ? "Байгалийн чимээ"
            : "Аудио файл байхгүй"
        }
        className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-colors ${
          available
            ? "bg-forest text-softwhite hover:bg-moss"
            : "bg-forest/40 text-softwhite/60 cursor-not-allowed"
        }`}
        aria-label="Дуу"
      >
        {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </div>
  );
}