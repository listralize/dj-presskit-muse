import djPhoto from "@/assets/dj-photo.png";
import logo from "@/assets/logo.png";
import { Instagram, Youtube, Music } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Top bar with logo */}
      <div className="relative z-10 flex justify-center pt-12 pb-6">
        <img src={logo} alt="Unk DJ Logo" className="w-32 md:w-44" />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center container mx-auto px-6 gap-8 md:gap-16 pb-20">
        {/* Left: Text */}
        <div className="flex flex-col items-center md:items-start gap-6 md:w-1/2">
          <div className="line-separator" />
          <p className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.3em] font-light">
            Energia em Ritmo
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground tracking-wider leading-none">
            UNK DJ
          </h1>
          <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase font-light">
            Eletrofunk · House Music
          </p>

          {/* Social links */}
          <div className="flex gap-5 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Music size={20} />
            </a>
          </div>
        </div>

        {/* Right: DJ Photo */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 md:w-96 aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src={djPhoto}
              alt="Unk DJ"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
