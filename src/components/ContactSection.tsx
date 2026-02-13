import { motion } from "motion/react";
import logo from "@/assets/logo.png";
import djMoon from "@/assets/dj-moon.png";
import { UnkDjEffect } from "@/components/ui/text-effect";
import { AnimatedFolder } from "@/components/ui/3d-folder";

const fotosData = [
  { id: "f1", image: "/placeholder.svg", title: "Foto 1" },
  { id: "f2", image: "/placeholder.svg", title: "Foto 2" },
  { id: "f3", image: "/placeholder.svg", title: "Foto 3" },
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
          <AnimatedFolder title="Fotos" projects={fotosData} />
          <AnimatedFolder title="Rider" projects={riderData} />
          <AnimatedFolder title="Vídeos" projects={videosData} />
        </div>

        {/* DJ on the moon */}
        <motion.div
          className="relative flex justify-center items-center h-[350px] md:h-[500px] overflow-hidden rounded-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* UNK effect behind the DJ */}
          <div className="absolute inset-0 z-[1] flex items-center justify-center opacity-15">
            <UnkDjEffect className="h-32 md:h-48 text-white" speed={1.2} />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-background/80 to-transparent h-[40%]" />
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
          <p className="text-[10px] text-foreground/40 uppercase tracking-widest">
            © 2025 Unk DJ · Todos os direitos reservados
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
