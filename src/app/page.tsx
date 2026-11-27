import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { BookingPanel } from "@/components/BookingPanel";
import { Intro } from "@/components/Intro";
import { Accommodation } from "@/components/Accommodation";
import { Experiences } from "@/components/Experiences";
import { SeasonSelector } from "@/components/SeasonSelector";
import { DayAtMoiltiin } from "@/components/DayAtMoiltiin";
import { PlanEscape } from "@/components/PlanEscape";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { LocationContact } from "@/components/LocationContact";
import { Footer } from "@/components/Footer";
import { SoundControl } from "@/components/SoundControl";
import { RiverDivider } from "@/components/RiverDivider";
import { StickyBookingCTA } from "@/components/StickyBookingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-softwhite paper overflow-x-hidden">
      <Nav />
      <Hero />
      <BookingPanel />
      <RiverDivider />
      <Intro />
      <RiverDivider />
      <Accommodation />
      <RiverDivider />
      <Experiences />
      <DayAtMoiltiin />
      <SeasonSelector />
      <PlanEscape />
      <RiverDivider />
      <Events />
      <Gallery />
      <LocationContact />
      <Footer />
      <SoundControl />
      <StickyBookingCTA />
    </main>
  );
}