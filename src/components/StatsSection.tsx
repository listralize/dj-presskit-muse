const stats = [
  { label: "Instagram", value: "16,5K+", sub: "seguidores" },
  { label: "Spotify", value: "121K+", sub: "ouvintes" },
  { label: "YouTube", value: "500M+", sub: "views" },
];

const StatsSection = () => {
  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 max-w-3xl mx-auto divide-x divide-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4 py-6">
              <p className="text-4xl md:text-5xl font-display text-yellow-400 tracking-wide" style={{ textShadow: "0 0 12px rgba(250,204,21,0.3)" }}>
                {stat.value}
              </p>
              <p className="text-xs text-foreground/70 mt-3 uppercase tracking-[0.25em]">
                {stat.sub}
              </p>
              <p className="text-[10px] text-foreground/50 mt-1 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
