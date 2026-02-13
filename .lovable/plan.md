
## Plano: Substituir imagem do rodape por foto na lua

### O que sera feito

1. **Copiar a imagem** enviada (`gfhjfgjgkfg.png`) para `src/assets/dj-moon.png`

2. **Substituir a area de motion do rodape** (linhas 43-70 do ContactSection) pela nova imagem do DJ na lua, com:
   - Imagem centralizada horizontalmente
   - Gradiente preto de cima para baixo (`bg-gradient-to-b from-background via-background/60 to-transparent`) sobreposto na parte superior da imagem, integrando com o fundo escuro do site
   - A parte branca superior da imagem PNG sera ocultada pelo fade preto
   - Entrada suave com `motion` fade-in ao entrar no viewport
   - Efeito sutil de glow pulsante (mesmo estilo atual) sem movimentacao

### Detalhes tecnicos

- Remover imports de `djStageBg` e `djCutout` (nao serao mais usados nessa secao)
- Importar novo asset `dj-moon.png`
- Container com `overflow-hidden` e altura adequada (~500px desktop, ~350px mobile)
- Gradiente overlay posicionado com `absolute` cobrindo os ~40% superiores da imagem para fundir o branco do PNG com o fundo preto
- Imagem centralizada com `object-contain` e `object-bottom` para manter o DJ e a superficie lunar visiveis
