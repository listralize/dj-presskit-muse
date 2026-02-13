import { Marquee } from "@/components/ui/marquee";

const EventsSection = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="line-separator" />
        <h2 className="text-5xl md:text-6xl font-display text-yellow-400 tracking-wider" style={{ textShadow: "0 0 20px rgba(250,204,21,0.4), 0 0 40px rgba(250,204,21,0.15)" }}>
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
