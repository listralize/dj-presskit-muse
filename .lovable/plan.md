

## Plano: Redesign da secao Contato com pastas 3D

### Visao geral

A secao de contato sera redesenhada com:
- **Remover**: links de email e WhatsApp, titulo "Contato" e subtitulo
- **Manter**: imagem do DJ na lua com efeito UNK + footer com logo e copyright
- **Adicionar**: 3 pastas animadas 3D (Fotos, Rider, Videos) acima da imagem

### Estrutura visual

```text
+--------------------------------------------+
|     [Pasta Fotos] [Pasta Rider] [Pasta Videos]     |
|                                            |
|         (efeito UNK animado atras)         |
|         [DJ na lua com fade e glow]        |
|                                            |
|  ------- footer com logo e copyright ------|
+--------------------------------------------+
```

### Detalhes tecnicos

1. **Criar `src/components/ui/3d-folder.tsx`**
   - Adaptar o componente AnimatedFolder da GammaUI (fonte completa obtida do GitHub)
   - Substituir icones `@tabler/icons-react` por equivalentes do `lucide-react` (X, ExternalLink, ChevronLeft, ChevronRight)
   - Substituir classes Tailwind 4 (`bg-linear-to-t`) por Tailwind 3 (`bg-gradient-to-t`)
   - Adaptar cores das pastas de hardcoded azul para CSS variables compatíveis com o tema escuro do site (usar tons de azul/cinza que combinem com a estetica)
   - Mudar interacao de hover para click (toggle) para funcionar em mobile tambem (o source ja usa click)

2. **Adicionar CSS variables para as pastas no `src/index.css`**
   - `--folder-back`, `--folder-front`, `--folder-tab` em tons que combinem com a paleta escura do site

3. **Atualizar `tailwind.config.ts`**
   - Adicionar cores `folder-back`, `folder-front`, `folder-tab` no extend colors

4. **Reescrever `src/components/ContactSection.tsx`**
   - Remover links de email/WhatsApp e titulo de contato
   - Adicionar 3 instancias de `AnimatedFolder` com titulo "Fotos", "Rider" e "Videos"
   - Cada pasta tera projetos placeholder (imagens placeholder por enquanto ate o usuario enviar os arquivos reais)
   - Manter a composicao do DJ na lua + efeito UNK abaixo
   - Manter o footer

5. **Renomear secao** de "Contato" para algo como "Midia" ou remover titulo por completo (manter minimalista)

### Pastas e conteudo

As 3 pastas terao conteudo placeholder inicialmente:
- **Fotos**: 3 cards placeholder aguardando imagens do usuario
- **Rider**: 3 cards placeholder aguardando documentos/imagens do rider tecnico
- **Videos**: 3 cards placeholder aguardando thumbnails de video

O usuario podera enviar os arquivos reais depois para popular cada pasta.
