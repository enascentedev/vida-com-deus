const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
	try {
		mongoose.set("strictQuery", true);
		await mongoose.connect(
			`mongodb+srv://emanuelnascente:${process.env.DB_PASSWORD}@cluster0.n63mt70.mongodb.net/projeto10?retryWrites=true&w=majority`
			
		);
		console.log("Conectado com o banco.");
	} catch (error) {
		console.log(`Erro: ${error}`);
	}
}

module.exports = main;
