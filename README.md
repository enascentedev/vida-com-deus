# LWG
[Life with God] tradução: Vida com Deus

## Visão Geral
Este é um projeto full stack que demonstra a aplicação dos meus conhecimentos em desenvolvimento de software. O backend é construído em Node.js, enquanto o frontend utiliza Vue.js e Tailwind CSS. Além disso, há uma versão mobile desenvolvida. O projeto abrange diversos aspectos, desde registros de usuários até a persistência de login com cookies, proteção de rotas com Vue Router, e muito mais.

## Conteúdo Inspirador
Além das funcionalidades técnicas, o projeto também incorpora uma abordagem leve sobre a palavra de Deus, proporcionando uma mensagem positiva aos visitantes. Adicionalmente, compartilho insights de livros que foram significativos em minha jornada.

## Conquistas
Estou orgulhoso de alcançar 100 commits neste projeto, resultado da minha dedicação diária e empenho no meu desenvolvimento.

## Tecnologias Empregadas
**Backend:**
- Node.js
- JWT para proteção e geração de tokens
- Persistência de login com cookies
- Docker para facilitar a geração de builds e imagens

**Frontend:**
- Vue.js 3
- Tailwind CSS
- Vue Router para proteção de rotas
- Utilização de Stores com Pinia
- Requisições HTTP com Axios
- Instâncias e interceptores personalizados com Axios

**Outros Aspectos:**
- Projeto online e rodando
- Separação clara entre frontend e backend
- Banco de dados MongoDB com Mongoose
- Customização de erros da API
- Documentação detalhada da API

**Criação de API com Node Express**


# LAYOUT
![Login](./front-end/src/assets/imagens-git/login.png)
Página de login com registro de usuário.

![Home](./front-end/src/assets/imagens-git/home.png)
Página home aonde tenho alguns cards.

![Artigo semanal](./front-end/src/assets/imagens-git/artigo-semanal.png)
Algumas mensagens de Deus falando de uma maneira leve , sem crenças absolutas.

![Leitura-diaria](./front-end/src/assets/imagens-git/leitura-diaria.png)
Alguns insigts de livros que eu já li.


# API 

Criação de API com Node express

# RODAR PROJETO INTERNET
https://tempoderefletir.netlify.app/LOGIN
registre um usuário e senha e faça login

# RODAR PROJETO LOCAL

npm run api

# ROTAS LOCAL

http://localhost:8000/artigos

# ESTRUTURA

back-end/
|-- controladores/
| |-- artigos.js
| |-- livro.js
|-- db/
| |-- conn.js
| |-- migrateArtigos.js
|-- middlewares/
| |-- authMiddleware.js
| |-- errorMiddleware.js
|-- models/
| |-- artigos.js
| |-- user.js
|-- rotas/
| |-- artigos.js
| |-- livro.js
| |-- usuarios.js
|-- servicos/
| |-- livro.js
|-- .env
|-- app.js
|-- artigos.json
|-- livros.json
|-- package-lock.json
|-- package.json
|-- README.md
|-- teoria.txt



## Visão Geral

Este documento fornece uma visão geral das branchs do projeto, destacando suas respectivas funcionalidades e responsabilidades.