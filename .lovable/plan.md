

## Remover todas as referências ao Lovable e preparar para deploy na Coolify

### O que será feito

1. **index.html** - Substituir todos os textos e metadados "Lovable" por "UNK DJ" / "Listralize":
   - Title: "UNK DJ - Press Kit"
   - Description, author, og:title, og:description atualizados
   - Remover imagens og/twitter que apontam para lovable.dev
   - Remover twitter:site @Lovable
   - Remover comentários TODO

2. **vite.config.ts** - Remover o import e uso do `lovable-tagger`:
   - Remover `import { componentTagger } from "lovable-tagger"`
   - Remover `componentTagger()` dos plugins

3. **package.json** - Remover `lovable-tagger` das devDependencies

4. **README.md** - Reescrever completamente removendo todas as menções ao Lovable, com instruções genéricas de build/deploy

5. **Adicionar Dockerfile** para deploy na Coolify:
   - Multi-stage build: Node para build, Nginx para servir
   - Configuracao nginx para SPA (fallback para index.html)

6. **Adicionar nginx.conf** com configuracao otimizada para SPA

### Detalhes Técnicos

**Dockerfile:**
```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

**nginx.conf:**
```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Arquivos alterados
- `index.html` - metadados atualizados
- `vite.config.ts` - remover lovable-tagger
- `package.json` - remover lovable-tagger
- `README.md` - reescrito

### Arquivos criados
- `Dockerfile` - build multi-stage para Coolify
- `nginx.conf` - configuracao do servidor

