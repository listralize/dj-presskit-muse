import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import MusicSection from "@/components/MusicSection";
import StatsSection from "@/components/StatsSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import { StarsBackground } from "@/components/ui/stars";

const Index = () => {
  return (
    <StarsBackground className="bg-background min-h-screen" speed={80} starColor="rgba(255,255,255,0.8)">
      <main className="relative z-10">
        <HeroSection />
        <BioSection />
        <MusicSection />
        <StatsSection />
        <EventsSection />
        <ContactSection />
      </main>
    </StarsBackground>
  );
};

export default Index;
