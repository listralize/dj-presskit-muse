

# Adicionar keyframe fadeOutLabel ao CSS

## Resumo
Os componentes `globe.tsx` e `landing-page.tsx` ja estao no projeto e correspondem ao codigo da Ruixen UI. A unica alteracao necessaria e adicionar o keyframe `fadeOutLabel` ao `src/index.css`, que e usado pela navegacao lateral do ScrollGlobe para animar os labels das secoes.

## Alteracao tecnica

### `src/index.css`
Adicionar ao final do arquivo o keyframe `fadeOutLabel` com:
- 0%: opacidade 1, sem transformacao
- 70%: mantem opacidade 1 (delay visual)
- 100%: opacidade 0, desloca 0.5rem para direita e reduz escala para 0.95

