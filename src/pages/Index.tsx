import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import StatsSection from "@/components/StatsSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <BioSection />
      <StatsSection />
      <EventsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
