
# Reescrever Globe com codigo exato da Ruixen UI

## Problema
O globo atual usa uma textura local (`earth-texture.jpg`) que nao tem a qualidade/aparencia correta. A estrutura do componente tambem difere do original da Ruixen UI.

## Solucao
Reescrever `src/components/ui/globe.tsx` com o codigo EXATO do repositorio oficial da Ruixen UI (GitHub: ruixenui/ruixen.com).

## Alteracoes tecnicas

### `src/components/ui/globe.tsx`
Substituir completamente pelo codigo original da Ruixen UI:

1. **Remover** o import da textura local `earth-texture.jpg`
2. **Usar a URL oficial** da textura: `https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/globe.jpeg`
3. **Estrutura do componente**: Um unico div `w-[250px] h-[250px] rounded-full overflow-hidden` com a textura como background
4. **Box-shadow via Tailwind**: `shadow-[0_0_20px_rgba(255,255,255,0.2),-5px_0_8px_#c3f4ff_inset,15px_2px_25px_#000_inset,-24px_-2px_34px_#c3f4ff99_inset,250px_0_44px_#00000066_inset,150px_0_38px_#000000aa_inset]`
5. **Estrelas como filhas do div principal** (nao em container separado), com posicoes absolutas fixas em pixels
6. **Container externo**: `flex items-center justify-center h-screen` (sera adaptado para `w-full h-full` para manter compatibilidade com HeroSection)

### `src/components/HeroSection.tsx`
Nenhuma alteracao necessaria - o componente ja monta o Globe dentro de um container com tamanho definido.

### Nenhuma dependencia adicional necessaria
O componente usa apenas React e Tailwind CSS.
