# LWG – Vida com Deus

[Life with God] tradução: Vida com Deus.

## Visão Geral

Projeto full stack que reúne um back-end em Node.js/Express e um front-end em Vue 3 + Tailwind. A aplicação aborda registro e login de usuários (JWT + cookies), proteção de rotas no front-end e conteúdo inspirador (artigos, leituras e mensagens).

## Conteúdo Inspirador

Além das funcionalidades técnicas, o site traz mensagens leves sobre a palavra de Deus e insights de livros que fizeram diferença na minha caminhada.

## Principais Tecnologias

**Back-end**

- Node.js + Express
- JWT, cookies e middleware de autenticação
- CORS configurado
- Docker para build/deploy
- Postgres (via driver `pg`) com scripts SQL de migração

**Front-end**

- Vue.js 3
- Tailwind CSS
- Vue Router (rotas protegidas)
- Pinia (stores)
- Axios com instâncias e interceptores

**Infra/Outros**

- Deploy front-end em Netlify
- Deploy back-end preparado para Render (suporte a variável `PORT`)

## Conquistas

100 commits alcançados (entrega diária e consistente).

## Demonstração Online

- Front-end (Netlify): https://tempoderefletir.netlify.app/LOGIN — registre um usuário e faça login.
- Observação de latência inicial: no primeiro acesso, o back-end hospedado na Render (plano gratuito) pode estar hibernando; a instância é reativada na primeira requisição e isso pode adicionar alguns segundos ao tempo de resposta inicial. Depois de acordada, as requisições passam a responder no tempo usual.

## Como Rodar Localmente

### Back-end

1. `cd back-end`
2. `npm install`
3. `npm run api` (dev com supervisor) ou `npm start`
4. Rotas locais (porta padrão `3000`):
   - `http://localhost:3000/health`
   - `http://localhost:3000/artigos`
   - `http://localhost:3000/livros`
   - `http://localhost:3000/usuarios`
5. Variáveis de ambiente importantes:
   - `JWT_SECRET` (obrigatória)
   - `ENABLE_REGISTRATION` (`true` padrão; `false` desabilita novos cadastros)
   - `DATABASE_URL` (string de conexão Postgres)
   - `PORT` (opcional; padrão 3000)

### Front-end

1. `cd front-end`
2. `npm install`
3. `npm run dev` (Vite em `http://localhost:5173`)

## Estrutura de Pastas

```
back-end/
|-- app.js
|-- Dockerfile
|-- artigos.json
|-- livros.json
|-- package.json
|-- package-lock.json
|-- README.md
|-- deploydocker.ps1
|-- deploydocker.sh
|-- run-migrations.ps1
|-- controladores/
|   |-- artigos.js
|   |-- livro.js
|-- helpers/
|   |-- migrateArtigos.js
|-- middlewares/
|   |-- authMiddleware.js
|   |-- corsMiddleware.js
|   |-- CustomError.js
|   |-- errorMiddleware.js
|-- migrations/
|   |-- create_users.sql
|   |-- create_users_fixed.sql
|   |-- create_users_pg.sql
|-- db/
|-- models/
|-- rotas/
|   |-- artigos.js
|   |-- health.js
|   |-- livro.js
|   |-- usuarios.js
|-- servicos/
|   |-- artigos.js
|   |-- livro.js
|   |-- postgresUserService.js

front-end/
|-- netlify.toml
|-- index.html
|-- buil.sh
|-- package.json
|-- package-lock.json
|-- tailwind.config.js
|-- vite.config.js
|-- public/
|   |-- favicon.ico
|-- src/
|   |-- App.vue
|   |-- main.js
|   |-- assets/
|   |   |-- imagens/ (*.jpg)
|   |   |-- imagens-git/ (login.png, home.png, artigo-semanal.png, leitura-diaria.png)
|   |   |-- main.css
|   |-- components/
|   |-- data/ (artigos.json)
|   |-- router/ (index.js)
|   |-- stores/
|   |-- views/
|-- dist/ (build gerado pelo Vite)
```

## Layout

![Login](./front-end/src/assets/imagens-git/login.png)
Página de login com registro de usuário.

![Home](./front-end/src/assets/imagens-git/home.png)
Página inicial com cards de navegação.

![Artigo semanal](./front-end/src/assets/imagens-git/artigo-semanal.png)
Mensagens semanais em um tom leve, sem crenças absolutas.

![Leitura-diaria](./front-end/src/assets/imagens-git/leitura-diaria.png)
Insights de livros que já li.
