const sql = require("mssql");
const path = require("path");
const fs = require("fs/promises");
require("dotenv").config();

const config = {
        user: process.env.SQL_SERVER_USER,
        password: process.env.SQL_SERVER_PASSWORD,
        server: process.env.SQL_SERVER_HOST,
        database: process.env.SQL_SERVER_DATABASE,
        options: {
                encrypt: true,
                trustServerCertificate: true,
        },
};

let pool;

async function connectToDatabase() {
        if (pool) {
                return pool;
        }

        pool = await sql.connect(config);
        await ensureSchema(pool);
        console.log("Conectado ao SQL Server.");

        return pool;
}

async function ensureSchema(activePool) {
        await activePool.request().query(`
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Users' and xtype='U')
BEGIN
        CREATE TABLE Users (
                id INT IDENTITY(1,1) PRIMARY KEY,
                username NVARCHAR(255) NOT NULL UNIQUE,
                password NVARCHAR(255) NOT NULL,
                createdAt DATETIME2 NOT NULL DEFAULT SYSDATETIME()
        );
END;

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Artigos' and xtype='U')
BEGIN
        CREATE TABLE Artigos (
                id INT IDENTITY(1,1) PRIMARY KEY,
                nome NVARCHAR(255),
                categoria NVARCHAR(255),
                imagem NVARCHAR(500),
                data NVARCHAR(50),
                autorImagem NVARCHAR(500),
                autor NVARCHAR(255),
                titulo NVARCHAR(255),
                conteudo NVARCHAR(MAX)
        );
END;
`);

        await seedArtigos(activePool);
}

async function seedArtigos(activePool) {
        const existing = await activePool.request().query("SELECT COUNT(*) AS total FROM Artigos;");
        if (existing.recordset[0].total > 0) {
                return;
        }

        const seedPath = path.join(__dirname, "..", "artigos.json");
        try {
                const seedData = await fs.readFile(seedPath, "utf-8");
                const artigos = JSON.parse(seedData);

                for (const artigo of artigos) {
                        await activePool
                                .request()
                                .input("nome", sql.NVarChar, artigo.nome ?? null)
                                .input("categoria", sql.NVarChar, artigo.categoria ?? null)
                                .input("imagem", sql.NVarChar, artigo.imagem ?? null)
                                .input("data", sql.NVarChar, artigo.data ?? null)
                                .input("autorImagem", sql.NVarChar, artigo.autorImagem ?? null)
                                .input("autor", sql.NVarChar, artigo.autor ?? null)
                                .input("titulo", sql.NVarChar, artigo.titulo ?? null)
                                .input("conteudo", sql.NVarChar, artigo.conteudo ?? null)
                                .query(`
INSERT INTO Artigos (nome, categoria, imagem, data, autorImagem, autor, titulo, conteudo)
VALUES (@nome, @categoria, @imagem, @data, @autorImagem, @autor, @titulo, @conteudo);
`);
                }

                console.log(`Seed de ${artigos.length} artigos concluído.`);
        } catch (error) {
                console.warn("Não foi possível semear artigos iniciais:", error.message);
        }
}

function getPool() {
        if (!pool) {
                throw new Error("Banco de dados não inicializado. Certifique-se de chamar connectToDatabase().");
        }

        return pool;
}

module.exports = { connectToDatabase, getPool, sql };
