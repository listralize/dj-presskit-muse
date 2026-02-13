

# Redesign do Hero + Formulario Moderno com WhatsApp

## Visao Geral

Redesign completo do HeroSection: remover o texto "UNK DJ" duplicado, manter apenas a logo + foto do DJ + um formulario de contato super moderno que cumprimenta o usuario pelo nome em tempo real e envia os dados preenchidos via WhatsApp.

---

## Mudancas no HeroSection

### Layout
- **Logo** centralizada no topo
- **Legenda** "Energia em Ritmo | Eletrofunk | House Music" abaixo da logo
- **Split layout**: foto do DJ de um lado, formulario do outro (em mobile, empilhados)
- **Remover** o texto "UNK DJ" em h1 (ja esta na logo)
- **Manter** links sociais discretos

### Formulario Moderno
Campos:
- **Nome** (obrigatorio) - ao digitar, o formulario exibe "Ola, [Nome]!" em tempo real
- **Telefone** (obrigatorio)
- **Tipo de evento** (select customizado: Festa, Festival, Casamento, Corporativo, Outro)
- **Data do evento** (input date)
- **Mensagem** (textarea, opcional)

Estilo do formulario:
- Inputs com fundo transparente, borda inferior fina (underline style)
- Labels que flutuam (floating labels) ao focar/preencher
- Transicoes suaves CSS
- Botao de envio minimalista com icone do WhatsApp
- Totalmente responsivo

### Envio via WhatsApp
Ao clicar em "Enviar", monta uma mensagem formatada com todos os dados e abre `https://wa.me/5500000000000?text=...` com os dados encodados via `encodeURIComponent`.

### Validacao
- Validacao client-side com zod (nome, telefone obrigatorios, formato de telefone)
- Mensagens de erro sutis abaixo dos campos
- Encoding correto dos dados na URL do WhatsApp com `encodeURIComponent`

---

## Detalhes Tecnicos

### Arquivos modificados:
1. **`src/components/HeroSection.tsx`** - Redesign completo com formulario integrado

### Dependencias utilizadas (ja instaladas):
- `zod` para validacao
- `react-hook-form` + `@hookform/resolvers` para gerenciamento do formulario
- `lucide-react` para icones

### Estrutura do formulario:
- Componente interno no HeroSection (sem criar arquivo separado, mantendo simplicidade)
- Estado controlado via `react-hook-form` com resolver zod
- `watch("nome")` para exibir saudacao em tempo real
- Funcao `handleSubmit` que monta a URL do WhatsApp e abre em nova aba

### Responsividade:
- Desktop: grid 2 colunas (foto | formulario)
- Mobile: stack vertical (logo, legenda, foto, formulario)
