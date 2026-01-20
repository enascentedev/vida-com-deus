# Vida com Deus – V2 (proposta técnica)

## Objetivo

Lançar a segunda versão do projeto mantendo o mesmo tipo de conteúdo, porém com novos recursos baseados em IA, ETLs orquestrados por Airflow, uma stack moderna no front-end (React + shadcn/ui + Tailwind) e um back-end em FastAPI, tudo containerizado com Docker e pronto para hospedagem na Render.

## Stack sugerida

### Front-end

- **React + Vite**
- **Tailwind CSS**
- **shadcn/ui** para componentes prontos e padronizados
- **TanStack Query** para cache e sincronização de dados
- **React Router** para rotas

### Back-end

- **FastAPI**
- **SQLAlchemy 2.0 + Alembic** para ORM e migrações
- **Pydantic v2**
- **JWT (access/refresh)**
- **Celery ou RQ** para processamento assíncrono (opcional, dependendo das integrações de IA)

### Dados e Hospedagem

- **PostgreSQL** como banco principal (compatível com Render e fácil de operar)
- Alternativas gratuitas ao SQL Server:
  - **Render PostgreSQL (free tier)** – simples e integrado ao deploy
  - **Supabase** (PostgreSQL gerenciado, plano gratuito)
  - **Neon** (PostgreSQL serverless, plano gratuito)

> Recomendação: manter PostgreSQL para reduzir complexidade e aproveitar suporte nativo em Render.

### Orquestração ETL

- **Apache Airflow** rodando em Docker
- ETLs responsáveis por:
  - importar novos conteúdos (artigos, livros, mensagens)
  - enriquecer conteúdo via IA (ex.: resumos, tags, citações)
  - normalizar dados e manter histórico

### IA

- **OpenAI / Azure OpenAI / modelos open-source**
- Casos de uso:
  - resumo de artigos e livros
  - geração de tags temáticas
  - recomendação de leituras
  - personalização de devocionais

## Arquitetura sugerida

```
[React + shadcn] -> [FastAPI] -> [PostgreSQL]
                        |
                        +-> [Celery/RQ] -> [IA Providers]
                        |
                        +-> [Airflow] -> [ETLs]
```

## Containers e ambientes

### Docker Compose (dev/local)

- **frontend**: React + Vite
- **backend**: FastAPI
- **db**: PostgreSQL
- **airflow**: scheduler + webserver

### Render (produção)

- Web Service: FastAPI
- Static Site: React build
- Background Worker: Celery/RQ (se necessário)
- Managed DB: PostgreSQL (Render/Supabase/Neon)

## Rotas/funcionalidades novas

### Conteúdo com IA

- `/ai/summarize` – resumo do conteúdo
- `/ai/tags` – classificação por temas
- `/ai/devotional` – criar devocional personalizado

### ETL/Airflow

- DAG diário para importar novas mensagens
- DAG semanal para enriquecer conteúdo com IA

### Front-end

- Nova home com **cards shadcn**
- Página de recomendação personalizada
- Dashboard simples para acompanhar novos conteúdos

## Roadmap recomendado

1. **Setup do monorepo V2** com Docker + FastAPI + React
2. **Migração das funcionalidades atuais** (login, artigos, livros)
3. **Orquestração Airflow** e primeiros ETLs
4. **Integração IA** para resumos e tags
5. **Deploy em Render** com Postgres gratuito

---
