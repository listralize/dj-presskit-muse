

# Alinhar o globo exatamente sobre o planeta da foto

## Problema
O globo animado nao esta alinhado com o planeta visivel pela janela da nave na foto do DJ. Ele esta deslocado (muito acima e a direita) e nao "completa" o planeta da foto.

## Solucao

### 1. Reposicionar o globo no HeroSection (`src/components/HeroSection.tsx`)
Baseado na imagem de referencia, o planeta na foto esta visivel pela janela da nave, centralizado aproximadamente em:
- **top: 8-12%** da foto (o planeta comeca logo abaixo do topo da janela)
- **right: 2-5%** (mais centralizado horizontalmente, nao tao a direita)
- Tamanho maior para cobrir a area do planeta: `w-[140px]` mobile, `w-[175px]` tablet, `w-[210px]` desktop
- Manter `opacity-90` e `pointer-events-none`

### 2. Remover a borda/glow visivel no Globe (`src/components/ui/globe.tsx`)
- Remover completamente a camada de "Atmosphere glow" que cria um anel visivel ao redor
- Ajustar o terminator shadow para ser mais suave e combinar com as cores escuras da foto
- Reduzir o specular highlight para nao criar um brilho artificial

### 3. Ajustar cores para combinar com a foto
A foto tem tons escuros/azulados. O globo precisa se integrar:
- Manter a textura da Terra mas com sombra mais pronunciada (a foto mostra o planeta parcialmente escuro)
- O terminator shadow deve cobrir ~60% do globo (lado direito/inferior) para combinar com a iluminacao da foto

### Arquivos modificados
1. **`src/components/HeroSection.tsx`** -- Ajustar `top`, `right` e tamanhos do container do Globe
2. **`src/components/ui/globe.tsx`** -- Remover atmosphere glow, ajustar sombras para integrar com a foto

