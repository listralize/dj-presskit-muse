

# Corrigir o Globe para parecer realista

## Problema
O componente Globe atual usa apenas gradientes CSS que criam uma bolha azul sem detalhes. A imagem de referencia do 21st.dev mostra um planeta Terra fotorrealista com continentes, oceanos, nuvens e atmosfera visivel. Alem disso, o globo esta cobrindo a foto do DJ inteira -- a foto sumiu.

## Solucao

### 1. Globe com textura real (`src/components/ui/globe.tsx`)
Usar uma imagem de textura da Terra (NASA, dominio publico) como background-image no globo, com a animacao `earthRotate` aplicada para rotacao continua. Isso vai dar o visual fotorrealista:

- Camada base: imagem da Terra (URL publica NASA) com `background-size` e `background-position` animados
- Camada atmosfera: gradiente radial azulado suave ao redor
- Camada sombra: gradiente escuro no lado direito para simular dia/noite
- Camada brilho: highlight especular no canto superior esquerdo
- Estrelas: manter as estrelas ao redor com animacao twinkling

URL da textura: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/600px-Earth_Western_Hemisphere_transparent_background.png` ou similar imagem publica da NASA.

Alternativa mais segura: usar uma flat map texture (`https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Equirectangular-projection.jpg/1280px-Equirectangular-projection.jpg`) como background com animacao de scroll horizontal para simular rotacao.

### 2. Reposicionar no HeroSection (`src/components/HeroSection.tsx`)
- A foto do DJ precisa aparecer normalmente
- O globe deve ficar sobreposto apenas na area do planeta da foto (canto superior direito)
- Tamanho menor: ~150px mobile, ~200px desktop
- Opacity: 80-90% para integrar com a foto
- O container da foto nao pode ter overflow-hidden para permitir que o globo "vaze" um pouco

### Arquivos modificados
1. `src/components/ui/globe.tsx` -- Reescrever com textura real da Terra
2. `src/components/HeroSection.tsx` -- Ajustar tamanho e posicao do globe para nao cobrir a foto
