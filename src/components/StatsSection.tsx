const stats = [
  { label: "Instagram", value: "16,5K+", sub: "seguidores" },
  { label: "Spotify", value: "121K+", sub: "ouvintes" },
  { label: "YouTube", value: "500M+", sub: "views" },
];

const StatsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-display text-primary text-glow mb-14 text-center">
          Números
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-xl bg-card border border-border border-glow"
            >
              <p className="text-4xl md:text-5xl font-display text-primary text-glow">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-2 uppercase tracking-widest">
                {stat.sub}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
