import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import event4 from "@/assets/event4.jpg";

const events = [
  { name: "RapMix Festival", location: "Estádio Serra Dourada, Goiânia - GO", img: event1 },
  { name: "Temporada Aruanã", location: "Prefeitura, Aruanã - GO", img: event2 },
  { name: "Formatura de Medicina B2", location: "Goiânia - GO", img: event3 },
  { name: "Rodeio Posse", location: "Posse - GO", img: event4 },
];

const EventsSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-display text-primary text-glow mb-14 text-center">
          Eventos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event) => (
            <div
              key={event.name}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={event.img}
                alt={event.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="text-xl font-display text-foreground tracking-wide">
                  {event.name}
                </h3>
                <p className="text-sm text-muted-foreground">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
