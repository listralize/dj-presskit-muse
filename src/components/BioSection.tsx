import { motion } from "motion/react";
import djBio from "@/assets/dj-bio.png";

const BioSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src={djBio}
                alt="DJ Unk no palco"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />
            </div>

            {/* Decorative line */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-foreground/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="line-separator" />
              <p className="text-xs text-foreground/50 uppercase tracking-[0.35em]">
                Biografia
              </p>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-display text-foreground tracking-wider leading-none">
                Sobre
              </h2>
            </div>

            <div className="space-y-6 text-foreground/75 text-base md:text-lg leading-relaxed font-light">
              <p>
                Marcelo Filho, nome por trás de{" "}
                <span
                  className="font-semibold bg-gradient-to-r from-[#c0c0c0] via-[#f5f5f5] to-[#a0a0a0] bg-clip-text text-transparent"
                  style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))" }}
                >
                  Unk DJ
                </span>
                , é um dos grandes produtores do gênero em ascensão em diversos estados do Brasil.
                Reconhecido por transformar energia em ritmo, o artista se destaca pela autenticidade
                sonora e por produções marcantes, fortemente influenciadas pelo house music.
              </p>
              <p>
                Natural de Quirinópolis (GO), despertou seu interesse pela música eletrônica aos 17
                anos e, após anos de dedicação e estudo em produção musical, consolidou seu nome no
                cenário com lançamentos expressivos. Entre eles, destaca-se o hit{" "}
                <span
                  className="font-semibold bg-gradient-to-r from-[#c0c0c0] via-[#f5f5f5] to-[#a0a0a0] bg-clip-text text-transparent"
                  style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))" }}
                >
                  "Rock This"
                </span>
                , em colaboração com Vinicius Cavalcante, que ultrapassou a marca de 1 milhão de plays.
              </p>
              <p>
                Com uma sonoridade vibrante, batidas impactantes e visão artística moderna, Unk DJ
                segue expandindo seu projeto, conectando pista e conceito em cada produção.
              </p>
            </div>

            {/* Signature line */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-gradient-to-r from-foreground/20 to-transparent" />
              <span
                className="text-sm font-display tracking-[0.3em] uppercase bg-gradient-to-r from-[#c0c0c0] via-[#f5f5f5] to-[#a0a0a0] bg-clip-text text-transparent"
              >
                Unk DJ
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
