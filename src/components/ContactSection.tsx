import { Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import logo from "@/assets/logo.png";
import djMoon from "@/assets/dj-moon.png";
import { UnkDjEffect } from "@/components/ui/text-effect";

const ContactSection = () => {
  return (
    <section className="py-28 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="line-separator" />
          <h2 className="text-5xl md:text-6xl font-display text-foreground tracking-wider">
            Contato
          </h2>
          <p className="text-sm text-foreground/70 font-light mt-2">
            Interessado em contratar o Unk DJ para seu evento?
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact info */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <a
              href="mailto:contato@unkdj.com"
              className="flex items-center gap-3 px-6 py-3 border border-border text-foreground hover:border-primary/40 transition-colors duration-300 text-sm w-full max-w-xs justify-center"
            >
              <Mail size={16} className="text-foreground/70" />
              contato@unkdj.com
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-border text-foreground hover:border-primary/40 transition-colors duration-300 text-sm w-full max-w-xs justify-center"
            >
              <Phone size={16} className="text-foreground/70" />
              WhatsApp
            </a>
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
        </div>

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
