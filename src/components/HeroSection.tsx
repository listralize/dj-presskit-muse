import djPhoto from "@/assets/dj-photo.png";
import logo from "@/assets/logo.png";
import { Instagram, Youtube, Music } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={djPhoto}
          alt="Unk DJ"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center gap-8 pt-20">
        <img src={logo} alt="Unk DJ Logo" className="w-40 md:w-56 drop-shadow-2xl" />
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-glow text-foreground tracking-wider">
          UNK DJ
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-md font-light tracking-wide">
          Energia em Ritmo · Eletrofunk · House Music
        </p>

        {/* Social links */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Youtube size={28} />
          </a>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Music size={28} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
