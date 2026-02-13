

# Globo sobreposto na foto do DJ

## O que muda

### 1. Reposicionar o Globe
Mover o componente Globe de fundo geral da secao para dentro do container da foto do DJ, posicionado no canto superior direito da foto -- exatamente onde o planeta aparece na foto espacial do DJ.

### 2. Melhorar a textura do Globe
O Globe atual tem gradientes de continente muito sutis (opacity 0.3). Vou aumentar a visibilidade:
- Aumentar opacidade dos "continentes" de 0.3 para 0.5
- Melhorar o brilho atmosferico para dar mais profundidade
- Adicionar uma borda sutil de atmosfera (halo azulado)

### 3. Posicionamento exato
- O globe fica posicionado `absolute` dentro do wrapper da foto
- Desktop: ~200px de diametro, posicionado no canto superior direito da foto (onde o planeta aparece na imagem)
- Mobile: ~140px, mesma posicao relativa
- `z-10` acima da foto mas abaixo do gradient overlay
- Opacity ~60-70% para integrar com a foto sem dominar

## Arquivos modificados

1. **`src/components/ui/globe.tsx`** -- Aumentar visibilidade da textura (opacidade dos continentes, brilho atmosferico)
2. **`src/components/HeroSection.tsx`** -- Mover o Globe para dentro do container da foto do DJ, remover o posicionamento de fundo geral
