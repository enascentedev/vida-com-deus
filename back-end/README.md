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

- Realizei todas as tarefas do plano

### feature/front-layoutApp

**Objetivo**: Ajustar layout geral para o proximo deploy

**Plano**:

- ajuste dos itens do header
  ajustar o mobile
  -login será a página inicial
- opções home devem ficar:
  quiz
  leitura diaria( pensar em um nome melhor)
  home
- ocultar opção criar artigo ( será usada mais a frente )
- /artigo-semanal
  vai consumir a rota /artigos da api
  fotos exibidas devem ser aleatórias

**Principais mudanças**:

### feature/deploy

**Objetivo**: colocar projeto no ar

**Plano**:

- estudar melhores opções e deixar back e front em um endereço de internet

**Principais mudanças**:

# back-end

- troca do módulo bcrypt pelo bcryptjs
- construção e execução imagem docker e adição ao dockerhub
- criação de variável de ambiente do DB
- Deploy no render da imagem docker

# front-end

- troca das url's
- removendo importações desnecessárias do projeto
- deploy netlify

# PENDÊNCIAS

- fotos repetidas na rota /home
- melhorar header e footer
- falha ao clicar no card
- console log em produção
- /artigo-semanal tem alguns artigos vazios
- avaliar questionario

- tirar bordas lateral imagem
- refatorar código
- alinhar mobile
