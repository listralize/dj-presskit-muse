import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const ContactSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-5xl md:text-6xl font-display text-primary text-glow mb-8">
          Contato
        </h2>
        <p className="text-muted-foreground mb-10 font-light">
          Interessado em contratar o Unk DJ para seu evento? Entre em contato.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="mailto:contato@unkdj.com"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border border-glow text-foreground hover:border-primary/50 transition-colors"
          >
            <Mail size={18} className="text-primary" />
            <span className="text-sm">contato@unkdj.com</span>
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border border-glow text-foreground hover:border-primary/50 transition-colors"
          >
            <Phone size={18} className="text-primary" />
            <span className="text-sm">WhatsApp</span>
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8 mt-8">
          <img src={logo} alt="Unk DJ" className="w-16 mx-auto mb-4 opacity-50" />
          <p className="text-xs text-muted-foreground/50">
            © 2025 Unk DJ. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
