

# Redesign Completo do Press Kit - Unk DJ

## Problema Atual
O site atual tem uma estética neon ciano genérica, a foto do DJ aparece como background do hero inteiro, e o visual geral nao transmite inovacao. O usuario quer algo totalmente diferente.

## Mudancas Principais

### 1. Nova foto do DJ (Hero)
- Copiar a nova foto enviada (`kjhjk-2.png` - foto espacial) para `src/assets/dj-photo.png`
- A foto do DJ aparece APENAS no hero, nao em outras secoes

### 2. Hero Section - Layout Totalmente Novo
- Logo centralizada no topo (sem o texto "UNK DJ" com glow neon)
- Abaixo da logo, a legenda "Energia em Ritmo - Eletrofunk - House Music"
- Foto do DJ em destaque ao lado ou como elemento visual integrado (split layout ou composicao moderna)
- Links sociais minimalistas
- Remover o efeito de glow neon ciano

### 3. Nova Paleta Visual
- Manter fundo preto/escuro mas com tons mais sofisticados
- Trocar o ciano neon por branco puro + cinzas elegantes como cor de destaque
- Acentos sutis em azul escuro/steel blue inspirados na foto espacial
- Tipografia mais limpa e moderna, sem efeitos glow
- Bordas e divisoes com gradientes sutis em vez de box-shadow neon

### 4. Remover shadcn/Radix dos componentes principais
- As secoes do presskit ja sao custom e nao usam componentes shadcn
- Manter shadcn apenas para Toast/Tooltip no App.tsx (infraestrutura)
- Nao instalar react-aria pois o site e majoritariamente visual/estatico - nao ha formularios ou componentes interativos complexos que justifiquem a troca

### 5. Redesign de Todas as Secoes
- **BioSection**: Layout assimetrico moderno, texto com tipografia editorial
- **StatsSection**: Numeros grandes e limpos sem cards com borda glow, estilo grid minimalista
- **EventsSection**: Grid de fotos com hover elegante, sem bordas neon
- **ContactSection**: CTA moderno e limpo, footer discreto

### 6. Efeitos Visuais Modernos (substituindo o neon)
- Gradientes sutis (preto para cinza escuro)
- Linhas finas como separadores
- Espacamento generoso (whitespace como elemento de design)
- Transicoes suaves no hover
- Possivel uso de blur/glassmorphism sutil

## Detalhes Tecnicos

### Arquivos a serem modificados:
1. **Copiar nova foto**: `user-uploads://kjhjk-2.png` para `src/assets/dj-photo.png`
2. **`src/index.css`**: Remover efeitos glow, atualizar paleta de cores (primary de ciano para branco/steel blue), remover utilitarios `text-glow` e `border-glow`
3. **`tailwind.config.ts`**: Ajustar cores do tema
4. **`src/components/HeroSection.tsx`**: Redesign completo - logo + legenda centralizada, foto do DJ como elemento visual (nao background full), layout moderno
5. **`src/components/BioSection.tsx`**: Layout editorial moderno, remover classes glow
6. **`src/components/StatsSection.tsx`**: Grid minimalista, remover cards com border-glow
7. **`src/components/EventsSection.tsx`**: Grid refinado sem efeitos neon
8. **`src/components/ContactSection.tsx`**: CTA limpo e moderno
9. **`src/pages/Index.tsx`**: Manter estrutura, possiveis ajustes de ordem

### Nova paleta de cores:
- Background: preto profundo (#05070a)
- Foreground: branco (#f0f2f5)
- Primary: branco ou steel blue sutil (#8da4bf)
- Muted: cinzas escuros
- Accent: tons de azul frio/acinzentado (inspirado na foto espacial)

