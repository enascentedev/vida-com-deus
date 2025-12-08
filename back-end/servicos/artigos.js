const { sql, getPool, connectToDatabase } = require("../db/conn");

async function getActivePool() {
        try {
                return getPool();
        } catch (error) {
                return connectToDatabase();
        }
}

// Função para buscar todos os artigos
async function getTodosArtigos() {
        const pool = await getActivePool();
        const artigos = await pool.request().query("SELECT * FROM Artigos ORDER BY id ASC");
        return artigos.recordset;
}

// Função para buscar um artigo por ID
async function getArtigoPorId(id) {
        const pool = await getActivePool();
        const artigo = await pool
                .request()
                .input("id", sql.Int, Number(id))
                .query("SELECT * FROM Artigos WHERE id = @id");

        if (!artigo.recordset[0]) {
                throw new Error("Artigo não encontrado.");
        }

        return artigo.recordset[0];
}

module.exports = {
        getTodosArtigos,
        getArtigoPorId,
};
