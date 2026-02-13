
# Redesign do Globe para Match com Ruixen UI

## O que muda

O globo atual usa uma textura local (`earth-texture.jpg`) com animacao simples. O design de referencia (Ruixen UI) tem um visual muito mais realista com:

- **Sombra atmosferica com brilho azulado** (efeito de atmosfera terrestre)
- **Textura da Terra com cores mais naturais** (usando imagem de alta qualidade)
- **Inset shadows complexos** criando profundidade e efeito 3D
- **Rotacao mais lenta** (30s vs 20s atual)
- **Background position "left"** com background-size "cover"

## Alteracoes tecnicas

### `src/components/ui/globe.tsx`
Reescrever o componente para replicar o design da Ruixen UI:

1. **Remover** o import da textura local `earth-texture.jpg`
2. **Usar** a textura publica da Ruixen UI (URL hospedada no r2.dev)
3. **Aplicar box-shadow complexo** com multiplas camadas:
   - Sombra externa com `rgba(255,255,255,0.2)` para o brilho atmosferico
   - Inset shadows com tons de azul claro (`#c3f4ff`) e preto para profundidade
4. **Remover** o overlay de dia/noite (o efeito de sombra ja esta embutido no box-shadow)
5. **Ajustar animacao** para 30s e background-size "cover" com position "left"
6. **Manter** as estrelas ao redor mas usar estilo `bg-white` ao inves de `bg-foreground/80`
7. **Container**: usar `w-[250px] h-[250px]` como base com `overflow-hidden` e `shadow`

### Nenhuma alteracao em `HeroSection.tsx`
O posicionamento e tamanho do globo no Hero ja estao corretos e nao precisam mudar.
