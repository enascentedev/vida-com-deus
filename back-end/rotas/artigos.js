//artigos.js

//imports
const authenticate = require("../middlewares/authMiddleware"); // Importe o middleware
const express = require("express");
const router = express.Router();
const {
	getTodosArtigosController,
	getArtigoPorIdController,
	// outros controladores importados
} = require("../controladores/artigos");

// Rota para buscar todos os artigos
router.get("/", getTodosArtigosController);

// Rota para buscar um artigo por ID
router.get("/:id", getArtigoPorIdController);

// Outras rotas aqui

module.exports = router;
