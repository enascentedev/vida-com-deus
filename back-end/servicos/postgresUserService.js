const { Pool } = require("pg");

function buildPoolConfig() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL precisa estar definido para conectar no Postgres");
  }

  // Render Postgres normalmente requer SSL; este padrão funciona bem em produção.
  const isRender = Boolean(process.env.RENDER);
  const isProduction = process.env.NODE_ENV === "production" || isRender;

  return {
    connectionString,
    ssl: isProduction ? { rejectUnauthorized: false } : undefined,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  };
}

let pool;

function getPool() {
  if (!pool) {
    pool = new Pool(buildPoolConfig());
  }
  return pool;
}

async function createUser({ username, passwordHash }) {
  const p = getPool();
  await p.query(
    `
      INSERT INTO users (username, password)
      VALUES ($1, $2);
    `,
    [username, passwordHash]
  );
}

async function findUserByUsername(username) {
  const p = getPool();
  const result = await p.query(
    `
      SELECT id, username, password
      FROM users
      WHERE username = $1
      LIMIT 1;
    `,
    [username]
  );

  return result.rows[0];
}

module.exports = {
  createUser,
  findUserByUsername,
  getPool,
};

