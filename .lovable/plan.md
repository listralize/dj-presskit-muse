

# Corrigir globo: cor azul claro, maior, reposicionado

## Problema
O globo esta escuro demais, pequeno demais, e mal posicionado. Pela foto de referencia, o planeta:
- Tem cor **azul claro tipo piscina** (nao escuro)
- E **grande** -- ocupa boa parte do canto superior direito
- Fica com **metade para fora da foto**, quase chegando no formulario
- Esta mais **para baixo e para a direita** do que esta agora

## Mudancas

### 1. `src/components/ui/globe.tsx`
- **Remover** o filtro `brightness(0.55) saturate(0.7)` que esta escurecendo tudo
- **Adicionar** filtro com mais brilho e saturacao azul: `brightness(1.1) saturate(1.3) hue-rotate(-10deg)` para puxar o tom azul claro/piscina
- Suavizar a sombra do terminator para nao escurecer tanto

### 2. `src/components/HeroSection.tsx`
- **Aumentar** o tamanho do globo significativamente: `w-[200px]` mobile, `w-[260px]` tablet, `w-[320px]` desktop
- **Reposicionar**: `top: "5%"`, `right: "-20%"` (negativo para que metade fique para fora da foto, quase tocando o formulario)
- **Remover `overflow-hidden`** do container da foto (se existir) para permitir que o globo vaze para fora
- Manter `z-10` e `pointer-events-none`

### Arquivos
1. `src/components/ui/globe.tsx` -- cor azul claro, remover escurecimento
2. `src/components/HeroSection.tsx` -- globo maior, mais para baixo/direita, metade para fora

