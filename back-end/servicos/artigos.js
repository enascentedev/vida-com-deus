const Artigo = require("../models/artigos.js"); // Importe o modelo Artigo

// Função para buscar todos os artigos
async function getTodosArtigos() {
	try {
		return await Artigo.find();
	} catch (error) {
		throw new Error("Algo deu errado.");
	}
}

// Função para buscar um artigo por ID
async function getArtigoPorId(id) {
	try {
		const artigo = await Artigo.findById(id);
		if (!artigo) {
			throw new Error("Artigo não encontrado.");
		}
		return artigo;
	} catch (error) {
		throw new Error("Algo deu errado.");
	}
}

module.exports = {
	getTodosArtigos,
	getArtigoPorId,
	// Outras funções do serviço aqui
};
