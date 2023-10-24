const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
// Importando a função de conexão
const connectToDb = require("./conn.js");

// Definir o esquema
const Artigo = mongoose.model(
	"Artigo",
	new mongoose.Schema({
		id: Number,
		nome: String,
		categoria: String,
		imagem: String,
		data: String,
		autorImagem: String,
		autor: String,
		titulo: String,
		conteudo: String,
	})
);

async function mainApp() {
	await connectToDb();

	// Limpar todos os registros da coleção
	await Artigo.deleteMany({});

	// Ler o arquivo JSON e importar os dados
	fs.readFile("../artigos.json", "utf8", async (err, data) => {
		if (err) {
			console.error("Erro ao ler o arquivo", err);
			return;
		}

		const json = JSON.parse(data);
		const artigos = json.artigos;

		for (const artigo of artigos) {
			const novoArtigo = new Artigo(artigo);
			await novoArtigo.save();
		}

		console.log("Dados importados com sucesso");

		// Encerrar a conexão após a migração
		mongoose.connection.close();
	});
}

mainApp();
