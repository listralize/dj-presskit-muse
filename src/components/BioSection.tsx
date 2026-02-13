const BioSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-display text-primary text-glow mb-10 text-center">
          Sobre
        </h2>
        <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed font-light">
          <p>
            Marcelo Filho, nome por trás de <span className="text-foreground font-medium">Unk DJ</span>, é um dos grandes produtores do gênero em ascensão em diversos estados do Brasil. Reconhecido por transformar energia em ritmo, o artista se destaca pela autenticidade sonora e por produções marcantes, fortemente influenciadas pelo house music, criando uma identidade única dentro da cena eletrofunk.
          </p>
          <p>
            Natural de Quirinópolis (GO), despertou seu interesse pela música eletrônica aos 17 anos e, após anos de dedicação e estudo em produção musical, consolidou seu nome no cenário com lançamentos expressivos. Entre eles, destaca-se o hit <span className="text-foreground font-medium">"Rock This"</span>, em colaboração com Vinicius Cavalcante, que ultrapassou a marca de 1 milhão de plays.
          </p>
          <p>
            Com uma sonoridade vibrante, batidas impactantes e visão artística moderna, Unk DJ segue expandindo seu projeto, conectando pista e conceito em cada produção. Seu trabalho representa a nova geração do eletrofunk, unindo técnica, identidade e presença sonora marcante.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
