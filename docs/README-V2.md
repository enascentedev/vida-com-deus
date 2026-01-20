# Vida com Deus – README da V2 (proposta)

Este documento descreve a proposta para a segunda versão do projeto, mantendo o mesmo tipo de conteúdo, porém com novas funcionalidades e uma stack moderna baseada em IA, Airflow e Docker.

## Sugestão de criação da V2

- **Front-end**: React + Vite, Tailwind e shadcn/ui (componentes prontos e consistentes).
- **Back-end**: FastAPI com Pydantic v2, SQLAlchemy 2.0 e Alembic.
- **Orquestração de ETLs**: Apache Airflow, com DAGs para importar e enriquecer conteúdo.
- **IA**: resumos, tags temáticas, recomendações e devocionais personalizados.
- **Docker**: tudo containerizado para desenvolvimento e deploy.

## Banco de dados (alternativa ao SQL Server)

Para manter o deploy simples e gratuito, a recomendação é usar **PostgreSQL**, que possui ótimo suporte na Render e planos gratuitos em serviços como **Render PostgreSQL**, **Supabase** e **Neon**.

## Próximos passos

- Consulte o roadmap detalhado da V2 em [docs/v2-roadmap.md](./v2-roadmap.md).
