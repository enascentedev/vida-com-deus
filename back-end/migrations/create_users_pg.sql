-- Schema Postgres para autenticação de usuários
-- Rode no Render Postgres (por exemplo, via psql):
-- psql "$DATABASE_URL" -f migrations/create_users_pg.sql

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(150) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

