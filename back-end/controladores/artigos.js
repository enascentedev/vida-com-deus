// Controladores artigos.js

const Artigo = require("../models/artigos.js"); // Importe o modelo Artigo

// Função para buscar todos os artigos
async function getTodosArtigos(req, res) {
	try {
		const artigos = await Artigo.find();
		res.json(artigos);
	} catch (error) {
		res.status(500).json({ message: "Algo deu errado." });
	}
}
async function getArtigoPorId(req, res) {
	const { id } = req.params;

	try {
		const artigo = await Artigo.findById(id);

		if (!artigo) {
			return res.status(404).json({ message: "Artigo não encontrado." });
		}

		res.json(artigo);
	} catch (error) {
		res.status(500).json({ message: "Algo deu errado." });
	}
}

module.exports = {
	getTodosArtigos,
	getArtigoPorId,
	// Outras funções do controlador aqui
};
