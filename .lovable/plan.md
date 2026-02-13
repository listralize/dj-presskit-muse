
# Plano de Melhorias Visuais + Player de Musica

## 1. Correcao de Cores do Site Inteiro

**Problema**: Textos cinza (`text-muted-foreground`) estao dificeis de ler no fundo escuro. Destaques brancos precisam virar amarelo.

**Solucao**: Atualizar o CSS e os componentes:

- **`src/index.css`**: Mudar `--muted-foreground` de cinza escuro (`215 10% 45%`) para branco (`210 15% 85%`). Adicionar uma variavel `--highlight` amarela (ex: `45 100% 60%`).
- **`src/components/BioSection.tsx`**: Trocar `text-muted-foreground` por `text-foreground/80` nos paragrafos. Destaques como "Unk DJ" e "Rock This" ficam amarelos (`text-yellow-400`).
- **`src/components/StatsSection.tsx`**: Trocar `text-muted-foreground` e `text-muted-foreground/50` por tons brancos mais claros. Valores em destaque ganham tom amarelo.
- **`src/components/ContactSection.tsx`**: Textos cinzas viram brancos. Icones `text-primary` viram amarelos. Footer tambem fica mais legivel.
- **`src/components/EventsSection.tsx`**: Titulo "Eventos" ganha destaque amarelo.
- **`src/components/HeroSection.tsx`**: Labels e placeholders do form ficam brancos (`text-foreground/60`). O subtitulo "Contrate agora" fica mais visivel.

## 2. Secao de Eventos com Destaque

- **`src/components/EventsSection.tsx`**: Titulo "Eventos" estilizado com cor amarela e glow sutil para destacar.

## 3. Player de Musica

### 3.1 Copiar arquivos de audio para o projeto
Copiar os 6 arquivos `.wav` para `public/audio/`:
- `DECIO_GOMES_UNK_-_MEDLEY_DE_IGARATÁ_3_final.wav`
- `BOLOLO_-_UNK_NADIRNETTO_BRENDOW_final.wav`
- `300_NO_7_-_UNK_NADIRNETTO_MC_GP_MC_LUUKY_MC_J_VILA_v2_1.wav`
- `UNK_-_365_DIAS_1.wav`
- `UNK_-_FUI_MLK_-_NILO_MC_PAIVA.wav`
- `UNK_TÁLITA_-_Ô_MOÇA_-_MC_ZAQUIN.wav`

### 3.2 Criar componente AudioPlayer
- **`src/components/ui/audio-player.tsx`**: Criar o componente baseado no codigo fornecido, adaptado para usar `motion/react` (ja instalado) em vez de `framer-motion`. Estilizado com as cores do site (fundo escuro, texto branco, acentos amarelos).

### 3.3 Criar secao MusicSection
- **`src/components/MusicSection.tsx`**: Nova secao posicionada logo abaixo do "Sobre" (BioSection). Contera:
  - Titulo "Musicas" com destaque
  - Lista de faixas clicaveis (nome da musica)
  - Player de audio que toca a faixa selecionada
  - Controles de play/pause, anterior/proximo, seek, shuffle e repeat
  - Lista de tracks:
    1. Medley de Igarata 3 (feat. Decio Gomes)
    2. Bololo (feat. Nadir Netto, Brendow)
    3. 300 no 7 (feat. Nadir Netto, MC GP, MC Luuky, MC J Vila)
    4. 365 Dias
    5. Fui Mlk (feat. Nilo, MC Paiva)
    6. O Moca (feat. Talita, MC Zaquin)

### 3.4 Atualizar Index.tsx
- Importar e adicionar `MusicSection` entre `BioSection` e `StatsSection`.

## Resumo da Ordem das Secoes

```text
HeroSection (foto + form)
BioSection (sobre)
MusicSection (player) <-- NOVO
StatsSection (numeros)
EventsSection (marquee com destaque)
ContactSection (contato + footer)
```

## Detalhes Tecnicos

- Usar `motion/react` (ja instalado) no audio-player em vez de `framer-motion`
- Audios ficam em `public/audio/` para acesso direto via URL (`/audio/nome.wav`)
- Cor amarela de destaque: `text-yellow-400` com `textShadow` para glow
- O player gerencia estado de playlist com skip/shuffle/repeat funcional
