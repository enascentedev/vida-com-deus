const artigos = require("../artigos.json").artigos;

// Função para buscar todos os artigos
async function getTodosArtigos() {
	return artigos;
}

// Função para buscar um artigo por ID
async function getArtigoPorId(id) {
	const artigo = artigos.find((a) => a.id === parseInt(id, 10));
	if (!artigo) {
		throw new Error("Artigo não encontrado.");
	}
	return artigo;
}

module.exports = {
	getTodosArtigos,
	getArtigoPorId,
};
