# API

Criação de API com Node express

# RODAR PROJETO

npm run api

# ROTAS

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

# Documentação de Branchs

## Visão Geral

Este documento fornece uma visão geral das branchs do projeto, destacando suas respectivas funcionalidades e responsabilidades.

## Padrão de Nomenclatura de Branchs

- `feature/<nome-da-funcionalidade>`: Utilizada para desenvolvimento de novas funcionalidades.

## Branchs

### feature/db-data

**Objetivo**: Implementação e ajustes relacionados ao banco de dados.

**Principais mudanças**:

- Implementação da conexão com o banco de dados.
- Criação da nova rota /artigos
- Implementação de migrações.
- criando instância axios para requisições
- Criação da nova rota /artigos
- Consumindo end-point com store no front-end

### feature/back-arquiteturaApi

**Objetivo**: Refatoração da estrutura de pastas da API e organização das funções.

**Plano**:

- Dividir responsabilidades da rota /artigos (criar artigos.js dentro de serviços) ok
- Analisar criação de diretório para Middleware ok
- Revisar tratamento de erros

**Principais mudanças**:
