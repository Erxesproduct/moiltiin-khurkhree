import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { BookingPanel } from "@/components/BookingPanel";
import { Intro } from "@/components/Intro";
import { Accommodation } from "@/components/Accommodation";
import { Experiences } from "@/components/Experiences";
import { SeasonSelector } from "@/components/SeasonSelector";
import { PlanEscape } from "@/components/PlanEscape";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { LocationContact } from "@/components/LocationContact";
import { Footer } from "@/components/Footer";
import { SoundControl } from "@/components/SoundControl";

export default function Home() {
  return (
    <main className="min-h-screen bg-softwhite">
      <Nav />
      <Hero />
      <BookingPanel />
      <Intro />
      <Accommodation />
      <Experiences />
      <SeasonSelector />
      <PlanEscape />
      <Events />
      <Gallery />
      <LocationContact />
      <Footer />
      <SoundControl />
    </main>
  );
}