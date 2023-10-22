const mongoose = require("mongoose");

// Definir o esquema do modelo Artigo
const artigoSchema = new mongoose.Schema({
	id: Number,
	nome: String,
	categoria: String,
	imagem: String,
	data: String,
	autorImagem: String,
	autor: String,
	titulo: String,
	conteudo: String,
});

// Definir o modelo Artigo com base no esquema
const Artigo = mongoose.model("Artigo", artigoSchema);

// Exportar o modelo Artigo para que possa ser usado em outras partes do seu aplicativo
module.exports = Artigo;
