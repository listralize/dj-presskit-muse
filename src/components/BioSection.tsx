const BioSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left label */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="line-separator" />
            <h2 className="text-5xl md:text-6xl font-display text-foreground tracking-wider">
              Sobre
            </h2>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.25em]">
              Biografia
            </p>
          </div>

          {/* Right content */}
          <div className="md:col-span-8 space-y-6 text-foreground/80 text-base leading-relaxed font-light">
            <p>
              Marcelo Filho, nome por trás de <span className="font-medium" style={{ color: "#a6c8d3", textShadow: "0 0 10px rgba(255,255,255,0.2)" }}>Unk DJ</span>, é um dos grandes produtores do gênero em ascensão em diversos estados do Brasil. Reconhecido por transformar energia em ritmo, o artista se destaca pela autenticidade sonora e por produções marcantes, fortemente influenciadas pelo house music.
            </p>
            <p>
              Natural de Quirinópolis (GO), despertou seu interesse pela música eletrônica aos 17 anos e, após anos de dedicação e estudo em produção musical, consolidou seu nome no cenário com lançamentos expressivos. Entre eles, destaca-se o hit <span className="font-medium" style={{ color: "#a6c8d3", textShadow: "0 0 10px rgba(255,255,255,0.2)" }}>"Rock This"</span>, em colaboração com Vinicius Cavalcante, que ultrapassou a marca de 1 milhão de plays.
            </p>
            <p>
              Com uma sonoridade vibrante, batidas impactantes e visão artística moderna, Unk DJ segue expandindo seu projeto, conectando pista e conceito em cada produção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
