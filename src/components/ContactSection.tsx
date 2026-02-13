import { useState } from "react";
import { motion } from "motion/react";
import logo from "@/assets/logo.png";
import djMoon from "@/assets/dj-moon.png";
import { UnkDjEffect } from "@/components/ui/text-effect";
import { Instagram, Youtube, Music, Download, FileText, Image as ImageIcon } from "lucide-react";
import { AnimatedFolder } from "@/components/ui/3d-folder";
import RiderOverlay from "@/components/RiderOverlay";

const fotosData = [
  { id: "f1", image: "/photos/DSC01978.jpg", title: "DSC01978" },
  { id: "f2", image: "/photos/DSC01866.jpg", title: "DSC01866" },
  { id: "f3", image: "/photos/DSC01883.jpg", title: "DSC01883" },
  { id: "f4", image: "/photos/DSC01891.jpg", title: "DSC01891" },
  { id: "f5", image: "/photos/DSC01905.jpg", title: "DSC01905" },
  { id: "f6", image: "/photos/DSC01916.jpg", title: "DSC01916" },
  { id: "f7", image: "/photos/DSC01959.jpg", title: "DSC01959" },
  { id: "f8", image: "/photos/DSC02057.jpg", title: "DSC02057" },
  { id: "f9", image: "/photos/DSC02058.jpg", title: "DSC02058" },
  { id: "f10", image: "/photos/DSC02068.jpg", title: "DSC02068" },
  { id: "f11", image: "/photos/DSC02125.jpg", title: "DSC02125" },
];

const fotosDownloadFiles = [
  "/photos/DSC01978.jpg",
  "/photos/DSC01866.jpg",
  "/photos/DSC01883.jpg",
  "/photos/DSC01891.jpg",
  "/photos/DSC01905.jpg",
  "/photos/DSC01916.jpg",
  "/photos/DSC01959.jpg",
  "/photos/DSC02057.jpg",
  "/photos/DSC02058.jpg",
  "/photos/DSC02068.jpg",
  "/photos/DSC02125.jpg",
];

const videosData = [
  { id: "v1", image: "/placeholder.svg", title: "Vídeo 1" },
  { id: "v2", image: "/placeholder.svg", title: "Vídeo 2" },
  { id: "v3", image: "/placeholder.svg", title: "Vídeo 3" },
];

const ContactSection = () => {
  const [riderOpen, setRiderOpen] = useState(false);

  const handleDownloadLogo = () => {
    const a = document.createElement("a");
    a.href = "/downloads/LOGONEW_1.pdf";
    a.download = "Logo_UNK_DJ.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="py-28 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* 3D Folders + Necessários */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          <AnimatedFolder title="Fotos" projects={fotosData} downloadFiles={fotosDownloadFiles} />

          {/* Necessários - custom folder-like card */}
          <div className="relative flex flex-col items-center justify-center cursor-pointer rounded-2xl p-8 transition-all duration-500 ease-out group"
            style={{ minWidth: "280px", minHeight: "320px" }}
          >
            <div className="absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-[0.08]"
              style={{ background: "radial-gradient(circle at 50% 70%, hsl(var(--folder-tab)) 0%, transparent 70%)" }}
            />
            
            <div className="flex flex-col items-center gap-4 mb-4">
              {/* Rider Técnico card */}
              <button
                onClick={() => setRiderOpen(true)}
                className="w-48 backdrop-blur-sm bg-card/40 border border-border/40 rounded-xl p-5 flex flex-col items-center gap-3 hover:bg-card/60 hover:border-border/60 transition-all duration-300 group/card"
              >
                <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-border/30 flex items-center justify-center">
                  <FileText size={18} className="text-foreground/50 group-hover/card:text-foreground/80 transition-colors" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-foreground/80 font-medium">Rider Técnico</p>
                  <p className="text-[10px] text-foreground/40 mt-0.5">Ver detalhes</p>
                </div>
              </button>

              {/* Logo download card */}
              <button
                onClick={handleDownloadLogo}
                className="w-48 backdrop-blur-sm bg-card/40 border border-border/40 rounded-xl p-5 flex flex-col items-center gap-3 hover:bg-card/60 hover:border-border/60 transition-all duration-300 group/card"
              >
                <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-border/30 flex items-center justify-center">
                  <ImageIcon size={18} className="text-foreground/50 group-hover/card:text-foreground/80 transition-colors" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-foreground/80 font-medium">Logo</p>
                  <p className="text-[10px] text-foreground/40 mt-0.5 flex items-center gap-1 justify-center">
                    <Download size={10} /> Baixar PDF
                  </p>
                </div>
              </button>
            </div>

            <h3 className="text-foreground text-lg font-semibold font-display tracking-wider">Necessários</h3>
            <p className="text-muted-foreground text-sm">2 arquivos</p>
          </div>

          <AnimatedFolder title="Vídeos" projects={videosData} />
        </div>

        {/* DJ on the moon */}
        <motion.div
          className="relative flex justify-center items-center h-[350px] md:h-[500px] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* UNK effect behind the DJ - raised on desktop only */}
          <div className="absolute inset-0 z-[1] flex items-center justify-center opacity-15 lg:mt-[-100px] mt-[-50px]">
            <UnkDjEffect className="h-32 md:h-48 text-white" speed={1.2} />
          </div>
          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 z-10 h-[45%] bg-gradient-to-b from-background via-background/70 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 z-10 h-[35%] bg-gradient-to-t from-background via-background/60 to-transparent" />
          {/* Left fade */}
          <div className="absolute inset-y-0 left-0 z-10 w-[20%] bg-gradient-to-r from-background via-background/50 to-transparent" />
          {/* Right fade */}
          <div className="absolute inset-y-0 right-0 z-10 w-[20%] bg-gradient-to-l from-background via-background/50 to-transparent" />
          <motion.img
            src={djMoon}
            alt="DJ Unk na lua"
            className="relative z-[5] w-full h-full object-contain object-bottom"
            animate={{ filter: ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 20px rgba(255,255,255,0.25))", "drop-shadow(0 0 0px rgba(255,255,255,0))"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Footer */}
        <div className="border-t border-border pt-8 mt-16 text-center">
          <img src={logo} alt="Unk DJ" className="w-12 mx-auto mb-4 opacity-30" />
          <div className="flex justify-center gap-5 mb-4">
            {[
              { href: "https://www.instagram.com/unkmusic_", Icon: Instagram },
              { href: "https://www.youtube.com/@unkdj", Icon: Youtube },
              { href: "https://open.spotify.com/artist/4GZKpcqZUxiPZXkV0Y8qI1?si=78y9xYfYQl2z9i_5jaisJg", Icon: Music },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-foreground/70 transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-foreground/40 uppercase tracking-widest">
            © 2025 Unk DJ · Todos os direitos reservados
          </p>
        </div>
      </div>

      <RiderOverlay isOpen={riderOpen} onClose={() => setRiderOpen(false)} />
    </section>
  );
};

export default ContactSection;
