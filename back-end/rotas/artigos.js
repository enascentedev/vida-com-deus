//artigos.js

//imports
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Artigo = mongoose.model("Artigo");

// Rota para obter todos os artigos
router.get("/artigos", async (req, res) => {
	try {
		const artigos = await Artigo.find();
		res.json(artigos);
	} catch (error) {
		res.status(500).json({ message: "Algo deu errado." });
	}
});

// export
module.exports = router;
