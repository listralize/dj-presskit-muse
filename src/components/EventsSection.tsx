import { Marquee } from "@/components/ui/marquee";

const EventsSection = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="line-separator" />
        <h2 className="text-5xl md:text-6xl font-display tracking-wider bg-gradient-to-r from-[#c0c0c0] via-[#f0f0f0] to-[#a8a8a8] bg-clip-text text-transparent" style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.15))" }}>
          Eventos
        </h2>
      </div>
      <Marquee
        text="RapMix Festival · Temporada Aruanã · Formatura de Medicina B2 · Rodeio Posse ·"
        repeat={4}
        duration={25}
        fontSize="lg"
        strokeWidth="1.5px"
      />
    </section>
  );
};

export default EventsSection;
