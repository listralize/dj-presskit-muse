import { motion } from "motion/react";
import logo from "@/assets/logo.png";
import djMoon from "@/assets/dj-moon.png";
import { UnkDjEffect } from "@/components/ui/text-effect";
import { Instagram, Youtube, Music } from "lucide-react";
import { AnimatedFolder } from "@/components/ui/3d-folder";

const fotosData = [
  { id: "f1", image: "/photos/DSC01978.jpg", title: "DSC01978" },
  { id: "f2", image: "/photos/DSC01866.jpg", title: "DSC01866" },
  { id: "f3", image: "/photos/DSC01883.jpg", title: "DSC01883" },
  { id: "f4", image: "/photos/DSC01891.jpg", title: "DSC01891" },
  { id: "f5", image: "/photos/DSC01905.jpg", title: "DSC01905" },
  { id: "f6", image: "/photos/DSC01916.jpg", title: "DSC01916" },
  { id: "f7", image: "/photos/DSC01959.jpg", title: "DSC01959" },
];

const fotosDownloadFiles = [
  "/photos/DSC01978.jpg",
  "/photos/DSC01866.jpg",
  "/photos/DSC01883.jpg",
  "/photos/DSC01891.jpg",
  "/photos/DSC01905.jpg",
  "/photos/DSC01916.jpg",
  "/photos/DSC01959.jpg",
];

const riderData = [
  { id: "r1", image: "/placeholder.svg", title: "Rider 1" },
  { id: "r2", image: "/placeholder.svg", title: "Rider 2" },
  { id: "r3", image: "/placeholder.svg", title: "Rider 3" },
];

const videosData = [
  { id: "v1", image: "/placeholder.svg", title: "Vídeo 1" },
  { id: "v2", image: "/placeholder.svg", title: "Vídeo 2" },
  { id: "v3", image: "/placeholder.svg", title: "Vídeo 3" },
];

const ContactSection = () => {
  return (
    <section className="py-28 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* 3D Folders */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          <AnimatedFolder title="Fotos" projects={fotosData} downloadFiles={fotosDownloadFiles} />
          <AnimatedFolder title="Rider" projects={riderData} />
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
    </section>
  );
};

export default ContactSection;
