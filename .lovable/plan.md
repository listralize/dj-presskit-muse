

## Plano: Globo mobile + Fotos na pasta + Download

### 1. Subir o globo 15px no mobile

No `HeroSection.tsx` linha 133, o globo no mobile tem `top-[calc(24%+14px)]`. Sera ajustado para `top-[calc(24%-1px)]` (14px - 15px = -1px).

### 2. Adicionar as 7 fotos na pasta "Fotos"

- Copiar as 7 imagens enviadas para `public/photos/` (usando public/ para que os arquivos fiquem acessiveis via URL direta para download sem compressao)
- Atualizar `fotosData` no `ContactSection.tsx` com os caminhos das 7 fotos reais

### 3. Botao "Baixar todos" na pasta

- Adicionar um botao "Baixar todos" no componente `AnimatedFolder` que aparece quando a pasta esta aberta
- Receber uma prop opcional `downloadFiles` com array de URLs dos arquivos originais
- Ao clicar, faz download sequencial de cada arquivo usando `<a download>` apontando para o caminho em `/photos/` -- sem compressao, qualidade maxima original
- Como os arquivos estao no `public/`, o download sera do arquivo original sem nenhum processamento

### Detalhes tecnicos

**Arquivos modificados:**
- `src/components/HeroSection.tsx` -- ajustar top do globo mobile
- `src/components/ContactSection.tsx` -- atualizar fotosData com 7 fotos reais + passar prop downloadFiles
- `src/components/ui/3d-folder.tsx` -- adicionar prop `downloadFiles` e botao de download

**Arquivos criados:**
- `public/photos/DSC01978.jpg` (copia)
- `public/photos/DSC01866.jpg` (copia)
- `public/photos/DSC01883.jpg` (copia)
- `public/photos/DSC01891.jpg` (copia)
- `public/photos/DSC01905.jpg` (copia)
- `public/photos/DSC01916.jpg` (copia)
- `public/photos/DSC01959.jpg` (copia)

**Logica de download:** Cada arquivo sera baixado individualmente via `fetch` + `blob` + `URL.createObjectURL` + `<a download>` para garantir que o navegador faca download e nao abra a imagem. Sem zip, sem compressao.

