import { Instagram, Youtube } from "lucide-react";
import SpotifyIcon from "@/components/ui/SpotifyIcon";

const stats = [
  { label: "Instagram", value: "16,5K+", sub: "seguidores", icon: Instagram, href: "https://www.instagram.com/unkmusic_" },
  { label: "Spotify", value: "121K+", sub: "ouvintes", icon: SpotifyIcon, href: "https://open.spotify.com/artist/4GZKpcqZUxiPZXkV0Y8qI1?si=78y9xYfYQl2z9i_5jaisJg" },
  { label: "YouTube", value: "500M+", sub: "views", icon: Youtube, href: "https://www.youtube.com/@unkdj" },
];

const StatsSection = () => {
  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 max-w-3xl mx-auto divide-x divide-border">
          {stats.map((stat) => (
            <a
              key={stat.label}
              href={stat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-4 py-6 group transition-all duration-300 hover:bg-foreground/[0.02]"
            >
              <stat.icon size={20} className="mx-auto mb-3 text-foreground/40 group-hover:text-foreground/70 transition-colors duration-300" />
              <p className="text-4xl md:text-5xl font-display tracking-wide bg-gradient-to-r from-[#c0c0c0] via-[#f0f0f0] to-[#a8a8a8] bg-clip-text text-transparent" style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.12))" }}>
                {stat.value}
              </p>
              <p className="text-xs text-foreground/70 mt-3 uppercase tracking-[0.25em]">
                {stat.sub}
              </p>
              <p className="text-[10px] text-foreground/50 mt-1 uppercase tracking-widest">
                {stat.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
