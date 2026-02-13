import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const ContactSection = () => {
  return (
    <section className="py-28 border-t border-border">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="line-separator" />
          <h2 className="text-5xl md:text-6xl font-display text-foreground tracking-wider">
            Contato
          </h2>
          <p className="text-sm text-foreground/70 font-light mt-2">
            Interessado em contratar o Unk DJ para seu evento?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="mailto:contato@unkdj.com"
            className="flex items-center gap-3 px-6 py-3 border border-border text-foreground hover:border-primary/40 transition-colors duration-300 text-sm"
          >
            <Mail size={16} className="text-yellow-400" />
            contato@unkdj.com
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-border text-foreground hover:border-primary/40 transition-colors duration-300 text-sm"
          >
            <Phone size={16} className="text-yellow-400" />
            WhatsApp
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8">
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
